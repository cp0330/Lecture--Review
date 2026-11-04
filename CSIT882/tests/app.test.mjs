import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
const base=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const source=fs.readFileSync(path.join(base,'app.js'),'utf8');
const html=fs.readFileSync(path.join(base,'index.html'),'utf8');
const BANK=JSON.parse(html.match(/const BANK=([\s\S]*?);<\/script>/)[1]);
let checks=0;const ok=(label,value)=>{assert.ok(value,label);checks++;};
class Element{
 constructor(id){this.id=id;this.value='';this.dataset={};this.listeners={};this.attrs={};this.innerHTML='';this.hidden=false;this.disabled=false;this.checked=false;this.classList={toggle:()=>false,remove:()=>{}};}
 addEventListener(type,fn){this.listeners[type]=fn;}
 async dispatch(type,extra={}){return this.listeners[type]?.({target:this,preventDefault(){},...extra});}
 setAttribute(k,v){this.attrs[k]=v;}getAttribute(k){return this.attrs[k];}
 querySelectorAll(){return [];}querySelector(){return null;}append(){}focus(){}click(){}showModal(){this.open=true;}close(){this.open=false;this.listeners.close?.();}
}
function setup({initial={},failStorage=false,hash=''}={}){
 const elements={},get=id=>elements[id]??=(new Element(id));
 for(const id of ['area','source'])get(id).value='all';get('mode').value='unique';
 const tabs=['question','analysis','answer','draft'].map(n=>{const b=get('tab-'+n);b.dataset.tab=n;return b;});
 get('tabs').querySelectorAll=()=>tabs;
 const storage=new Map([['csit882-question-bank-20261103',JSON.stringify(initial)]]);
 const window=new Element('window'),location={hash};
 const sandbox={BANK,document:{getElementById:get,querySelector:()=>get('workspace'),createElement:()=>new Element('created'),activeElement:get('search')},window,location,history:{replaceState(a,b,v){location.hash=v;}},localStorage:{getItem(k){if(failStorage)throw Error('unavailable');return storage.get(k)||null;},setItem(k,v){if(failStorage)throw Error('unavailable');storage.set(k,v);}},navigator:{clipboard:{writeText:async()=>{}}},Blob,URL,structuredClone,setTimeout:()=>1,clearTimeout(){},console};
 window.print=()=>{};vm.createContext(sandbox);vm.runInContext(source,sandbox);return {api:window.CSIT882,get,storage,window,location};
}
const old={ 'A4-T4':{answer:'A+ = ABCD',done:true,updatedAt:'2026-11-03T10:00:00Z'},'M3-Q1':{done:true,answer:'legacy duplicate draft'}};
const app=setup({initial:old});
ok('Old draft and completion migrated',app.api.records['A4-T4'].answer===old['A4-T4'].answer&&app.api.records['A4-T4'].done);
ok('Duplicate draft preserved',app.api.records['M3-Q1'].answer==='legacy duplicate draft');
ok('Default view is Question and answers hidden',app.get('panel-answer').hidden&&app.get('tab-question').attrs['aria-selected']==='true');
ok('Generated question text is rendered',app.get('panel-question').innerHTML.includes('A University would like'));
ok('Angle-bracket placeholders remain visible in question text',BANK.questions.find(q=>q.id==='A4-T3').questionHTML.includes('&lt;email-prefix&gt;')&&BANK.questions.find(q=>q.id==='M1-Q6').questionHTML.includes('&lt;insert ruck registration number here&gt;'));
const f={search:'',area:'all',source:'all',mode:'unique'};
ok('Default filtering removes six duplicate source aliases',BANK.questions.filter(q=>app.api.matches(q,f,{})).length===48);
ok('Core filter excludes method and extension',BANK.questions.filter(q=>app.api.matches(q,{...f,mode:'core'},{})).every(q=>q.priority==='core'));
ok('Search supports id and multiple terms',app.api.matches(BANK.questions.find(q=>q.id==='A4-T4'),{...f,search:'a4-t4 minimal'},{}));
ok('Area filter intersects selection',!app.api.matches(BANK.questions[0],{...f,area:'SELECT'},{}));
ok('Completed tasks absent from unfinished',!app.api.matches(BANK.questions.find(q=>q.id==='A4-T4'),{...f,mode:'unfinished'},old));
ok('Lecture filter includes all nine groups',BANK.questions.filter(q=>app.api.matches(q,{...f,source:'lecture'},{})).length===9);
app.api.reveal('a4-t4');ok('Lower-case existing hashes open correct task',app.api.current==='A4-T4'&&app.get('draft').value==='A+ = ABCD');
app.get('draft').value='My new solution';await app.get('draft').dispatch('input');
ok('Draft saved immediately',JSON.parse(app.storage.get('csit882-question-bank-20261103'))['A4-T4'].answer==='My new solution');
await app.get('tab-analysis').dispatch('click');ok('Analysis tab shows walkthrough and hides Question',!app.get('panel-analysis').hidden&&app.get('panel-question').hidden&&app.get('walkthrough').innerHTML.includes('完成后核对'));
await app.get('tab-answer').dispatch('click');ok('Answer tab separate from analysis',!app.get('panel-answer').hidden&&app.get('panel-analysis').hidden);
app.api.reveal('M3-Q1');ok('Duplicate source has a concrete canonical navigation button',app.get('panel-question').innerHTML.includes('data-canonical="M1-Q1"'));
app.get('source').value='mock-3';await app.get('source').dispatch('change');ok('Selecting Mock3 exposes all six aliases',app.get('mode').value==='all'&&app.get('count').textContent.startsWith('6 '));
await app.get('reset').dispatch('click');ok('Reset restores unique filter',app.get('mode').value==='unique'&&app.get('count').textContent.startsWith('48 '));
await app.get('coverage').dispatch('click');ok('Coverage opens six-area map',app.get('dialog').open&&app.get('dialog-content').innerHTML.includes('Normalization'));
app.api.reveal('L03');await app.get('context').dispatch('click');ok('Selected context contains lecture tables',app.get('dialog-content').innerHTML.includes('CREATE TABLE DEPARTMENT'));
const bad=setup({failStorage:true});bad.get('draft').value='unsaved on disk';await bad.get('draft').dispatch('input');ok('Storage failure keeps in-memory draft for export',bad.api.records['M1-Q1'].answer==='unsaved on disk'&&bad.get('save-state').textContent.includes('导出'));
ok('Malformed URL hash does not crash',setup({hash:'#%zz'}).api.current==='M1-Q1');
app.get('import').files=[{text:async()=>JSON.stringify({course:'CSIT882',records:{'L03':{answer:'New imported draft',done:true,updatedAt:'2099-01-01T00:00:00Z'},'UNKNOWN':{answer:'x'}}})}];
await app.get('import').dispatch('change');ok('Import merges recognized task records',app.api.records.L03.answer==='New imported draft'&&!app.api.records.UNKNOWN);
app.get('import').files=[{text:async()=>JSON.stringify({course:'CSIT882',records:{L03:{answer:'Older draft',updatedAt:'2020-01-01'}}})}];await app.get('import').dispatch('change');ok('Import retains newer existing draft',app.api.records.L03.answer==='New imported draft');
ok('Unknown tab-script source remains valid',new vm.Script(source)!==null);
const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];for(const m of scripts)new vm.Script(m[1]);ok('Generated HTML inline JavaScript syntax',scripts.length===2);
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);ok('Static shell ids are unique',new Set(ids).size===ids.length);
const result={status:'passed',checks,scope:'UI state and filtering in a minimal DOM harness, not a visual browser test'};
fs.writeFileSync(path.join(base,'tests/ui-results.json'),JSON.stringify(result,null,2));console.log(JSON.stringify(result));
