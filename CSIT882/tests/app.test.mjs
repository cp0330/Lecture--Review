import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
const base=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const source=fs.readFileSync(path.join(base,'app.js'),'utf8'),core=fs.readFileSync(path.join(base,'core.js'),'utf8'),html=fs.readFileSync(path.join(base,'index.html'),'utf8');
const BANK=JSON.parse(html.match(/const BANK=([\s\S]*?);<\/script>/)[1]);
let checks=0;const labels=[];const ok=(label,value)=>{assert.ok(value,label);checks++;labels.push(label);};
const plain=x=>JSON.parse(JSON.stringify(x));
const cbox={};vm.createContext(cbox);vm.runInContext(core,cbox);const C=cbox.WorkbenchCore;
const old={'A4-T4':{answer:'A+ = ABCD',done:true,updatedAt:'2026-11-03T10:00:00Z'},'M3-Q1':{done:true,answer:'legacy duplicate draft'},UNKNOWN:{answer:'future id'}};
const migrated=C.migrate(old);ok('Legacy drafts, duplicate IDs and unknown IDs preserved',migrated.records['A4-T4'].answer===old['A4-T4'].answer&&migrated.records.UNKNOWN.answer==='future id'&&migrated.records['M3-Q1'].done);
ok('Legacy done never becomes mastery',C.mastery(BANK.questions.find(q=>q.id==='A4-T4'),migrated.records,BANK.questions)==='unassessed');
const newer=C.mergeRecord({answer:'new',updatedAt:'2026-11-18',partMastery:{1:{value:'partial',at:'2026-11-18'}}},{answer:'old',updatedAt:'2026-11-03',partMastery:{1:{value:'mastered',at:'2026-11-03'}}});
ok('Merge keeps newer draft and latest mastery, archives different text',newer.answer==='new'&&newer.partMastery[1].value==='partial'&&newer.draftHistory[0].text==='old');
const untouched={drafts:{1:{text:'source',updatedAt:'1'}}};const cloned=C.record(untouched);cloned.drafts[1].text='changed';ok('Record normalization does not mutate input',untouched.drafts[1].text==='source');
const merge=C.mergeRecord({drafts:{1:{text:'new',updatedAt:'2026-11-18'}},attempts:[{id:'a',result:'mastered',reviewUpdatedAt:'2026-11-18'}]},{drafts:{1:{text:'old',updatedAt:'2026-11-01'}},attempts:[{id:'a',result:'partial',reviewUpdatedAt:'2026-11-01'}]});ok('Part conflicts and updated attempt self-reviews merged safely',merge.drafts[1].text==='new'&&merge.draftHistory.some(x=>x.text==='old')&&merge.attempts.length===1&&merge.attempts[0].result==='mastered');
for(const x of [{records:[]},{records:{x:{drafts:{1:'bad'}}}},JSON.parse('{"__proto__":{}}'),{course:'OTHER',records:{}}]){let failed=false;try{C.migrate(x);}catch{failed=true;}ok('Invalid import rejected '+JSON.stringify(x).slice(0,45),failed);}
const partialRecords={'M1-Q3':{partMastery:{1:{value:'mastered',at:'2026-11-18'}}}};ok('One mastered part cannot master a multi-part group',C.mastery(BANK.questions.find(q=>q.id==='M1-Q3'),partialRecords,BANK.questions)==='partial');
partialRecords['M3-Q3']={partMastery:{1:{value:'unmastered',at:'2026-11-19'}}};ok('Latest assessment shared across duplicate originals',C.latestMastery(BANK.questions.find(q=>q.id==='M1-Q3'),partialRecords,BANK.questions,'1')==='unmastered');
const paper={id:'mock-1',title:'Mock1',ids:['M1-Q1','M1-Q2']};let s=C.startExam(paper,2,false,1000,'test');ok('Exam copies original order and hides grade concepts',s.ids.join(',')===paper.ids.join(',')&&s.deadline===121000&&!('score' in s));s=C.pauseExam(s,31000);ok('Pause preserves exactly remaining time',C.remaining(s,900000)===90000);s=C.resumeExam(s,500000);ok('Resume creates a new deadline',s.deadline===590000&&C.remaining(s,591000)===0);s=C.finishExam(s,591000);ok('Expiry finishes at zero',s.status==='finished'&&s.remainingMs===0);
for(const n of [0,361,NaN]){let failed=false;try{C.startExam(paper,n);}catch{failed=true;}ok('Invalid duration rejected '+n,failed);}
ok('SQL checks ignore strings and comments',!C.staticCheck("SELECT '= NULL' /* x = NULL */;").some(x=>x.startsWith('发现')));
ok('SQL NULL and LEFT JOIN count risks explained',C.staticCheck('SELECT COUNT(*) FROM A LEFT JOIN B ON A.id=B.id WHERE B.x = NULL').length===3);
ok('SQL check never claims execution',C.staticCheck('SELECT 1;').at(-1).includes('未连接MySQL'));

// Deliberately small DOM model: tests state and events, not rendering/layout.
function setup({initial=old,saved,failStorage=false,hash=''}={}){
 const elements=new Map();let tick;const entity=s=>s.replaceAll('&quot;','"').replaceAll('&lt;','<').replaceAll('&gt;','>').replaceAll('&amp;','&');
 class Element{
  constructor(tag='div',attrs={}){this.tagName=tag.toUpperCase();this.attrs={...attrs};this.id=attrs.id||'';this.dataset={};for(const [k,v] of Object.entries(attrs))if(k.startsWith('data-'))this.dataset[k.slice(5).replace(/-([a-z])/g,(_,a)=>a.toUpperCase())]=v;this.listeners={};this.children=[];this._html='';this.value=attrs.value||'';this.checked='checked' in attrs;this.hidden='hidden' in attrs;this.disabled='disabled' in attrs;this.options=[];this.textContent='';const classes=new Set((attrs.class||'').split(/\s+/));this.classList={toggle:(k,force)=>{const on=force??!classes.has(k);if(on)classes.add(k);else classes.delete(k);return on;},remove:k=>classes.delete(k),contains:k=>classes.has(k)};if(this.id)elements.set(this.id,this);}
  set innerHTML(text){this._html=text;this.children=parse(text);if(this.tagName==='SELECT'){this.options=[...text.matchAll(/<option\b([^>]*)>([\s\S]*?)<\/option>/g)].map(m=>{const a=attrs(m[1]);return {value:entity(a.value??m[2]),selected:'selected' in a};});this.value=(this.options.find(x=>x.selected)||this.options[0])?.value||'';}}
  get innerHTML(){return this._html;}
  insertAdjacentHTML(pos,text){const value=this.value;this.innerHTML=this.innerHTML+text;if(this.options.some(x=>x.value===value))this.value=value;}
  querySelectorAll(selector){return this.children.filter(e=>selector==='button'?e.tagName==='BUTTON':selector.startsWith('[data-')?selector.slice(1,-1).split('=')[0] in e.attrs:false);}
  querySelector(){return null;}append(){}focus(){}click(){}closest(){return null;}
  setAttribute(k,v){this.attrs[k]=String(v);}getAttribute(k){return this.attrs[k];}
  addEventListener(type,fn){this.listeners[type]=fn;}async dispatch(type,extra={}){return this.listeners[type]?.({target:this,key:'',preventDefault(){},...extra});}
  showModal(){this.open=true;}close(){this.open=false;this.listeners.close?.();}
 }
 function attrs(text){return Object.fromEntries([...text.matchAll(/([\w-]+)(?:="([^"]*)")?/g)].map(m=>[m[1],entity(m[2]||'')]));}
 function parse(text){const all=[];
  const matches=[...text.matchAll(/<(button|select|input|textarea|section|div|nav|span|strong|dialog|p|h[1-4])\b([^>]*)>/g)];
  for(const m of matches){const a=attrs(m[2]);const e=new Element(m[1],a);all.push(e);if(m[1]==='select'){const rest=text.slice(m.index+m[0].length);e.innerHTML=rest.slice(0,rest.indexOf('</select>'));}}
  return all;
 }
 const shell=fs.readFileSync(path.join(base,'tools/shell.html'),'utf8');const nodes=parse(shell);
 const get=id=>elements.get(id)||null;
 for(const id of ['modules','tabs']){const section=shell.slice(shell.indexOf('id="'+id+'"'));get(id).children=parse(section.slice(section.indexOf('>')+1,section.indexOf(id==='modules'?'</nav>':'</div>')));
 }
 const workspace=new Element('div',{class:'workspace'}),window=new Element();
 const storage=new Map();if(initial!==null)storage.set('csit882-question-bank-20261103',JSON.stringify(initial));if(saved!==undefined)storage.set('csit882-workbench-v2',typeof saved==='string'?saved:JSON.stringify(saved));
 const location={hash};const sandbox={BANK,document:{getElementById:get,querySelector:sel=>sel==='.workspace'?workspace:null,createElement:tag=>new Element(tag),activeElement:get('search')},window,location,history:{replaceState(a,b,v){location.hash=v;}},localStorage:{getItem(k){if(failStorage)throw Error('unavailable');return storage.get(k)||null;},setItem(k,v){if(failStorage)throw Error('unavailable');storage.set(k,v);}},navigator:{clipboard:{writeText:async()=>{}}},Blob,URL,structuredClone,setTimeout:()=>1,clearTimeout(){},setInterval:f=>{tick=f;return 1;},clearInterval(){tick=null;},console};
 window.print=()=>{};vm.createContext(sandbox);vm.runInContext(core,sandbox);vm.runInContext(source,sandbox);return {api:window.CSIT882,get,storage,window,location,workspace,tick:()=>tick?.(),state:()=>JSON.parse(storage.get('csit882-workbench-v2'))};
}
const app=setup();ok('App boots on default A3-T2 with full bilingual question',app.api.current==='A3-T2'&&app.get('panel-question').innerHTML.includes('Chinese Translation'));
ok('Legacy raw key untouched by migration',app.storage.get('csit882-question-bank-20261103')===JSON.stringify(old));
ok('Default main list has 23 deduplicated original groups',app.get('count').textContent.startsWith('23组'));
app.get('level').value='AB';await app.get('level').dispatch('change');ok('A plus B contains 26 unique groups',app.get('count').textContent.startsWith('26组'));
app.api.navigate('A4-T4','guided');ok('Guided lesson contains nine sections and closure proof',app.get('panel-guided').innerHTML.includes('9 · Independent Practice')&&app.get('panel-guided').innerHTML.includes('真子集闭包'));
app.api.setModule('normalization');ok('NF module contains original plus one variant group',app.get('count').textContent.startsWith('2组')&&app.api.current==='A4-T4');
app.api.navigate('M1-Q3','practice');ok('Practice starts without visible reference',app.get('practice-answer').hidden&&app.get('practice-answer').innerHTML==='');
app.get('draft').value='SELECT REGNUM FROM TRUCK;';await app.get('draft').dispatch('input');await app.get('save-attempt').dispatch('click');ok('Saved unassisted part records independent attempt without completing whole group',app.api.records['M1-Q3'].attempts.at(-1).independent&&!app.api.records['M1-Q3'].done);
await app.get('save-attempt').dispatch('click');ok('Double save does not create duplicate attempt',app.api.records['M1-Q3'].attempts.length===1);
await app.get('hint').dispatch('click');app.get('draft').value='SELECT REGNUM FROM TRUCK WHERE CAPACITY BETWEEN 100 AND 500;';await app.get('draft').dispatch('input');await app.get('save-attempt').dispatch('click');ok('Hint use retained in assistance record',!app.api.records['M1-Q3'].attempts.at(-1).independent);
await app.get('show-answer').dispatch('click');ok('Reference answer shown only after request',!app.get('practice-answer').hidden&&app.api.records['M1-Q3'].drafts['1'].answerSeen);
await app.get('new-round').dispatch('click');ok('New round keeps previous draft and hides answer',app.get('draft').value===''&&app.get('practice-answer').hidden&&app.api.records['M1-Q3'].draftHistory.length===1);
app.get('mastery-select').value='unmastered';await app.get('mastery-select').dispatch('change');ok('Manual mastery saved per part',app.api.records['M1-Q3'].partMastery['1'].value==='unmastered');
app.api.setModule('exam');app.get('source').value='mock-3';await app.get('source').dispatch('change');ok('Mock3 source exposes six full original questions',app.get('count').textContent.startsWith('6组')&&app.get('panel-question').innerHTML.includes('A University would like'));
await app.get('reference').dispatch('click');ok('Reference defaults to 15 non-archived groups',app.get('count').textContent.startsWith('15组'));app.get('level').value='archived';await app.get('level').dispatch('change');ok('Archive filter shows exactly nine groups',app.get('count').textContent.startsWith('9组'));
app.api.setModule('exam');ok('Returning from reference restores core originals',app.get('count').textContent.startsWith('23组'));
await app.get('list-toggle').dispatch('click');app.get('search').value='A4';await app.get('search').dispatch('input');ok('Mobile filter remains open while typing',app.workspace.classList.contains('show-list'));app.api.navigate('A4-T4');ok('Explicit question navigation closes filter drawer',!app.workspace.classList.contains('show-list'));
app.api.setModule('mock');app.get('paper').value='mock-3';app.get('trial').checked=true;await app.get('start-exam').dispatch('click');ok('Mock starts with six original questions and no visible hints or reference',app.state().mock.active.ids.join(',')==='M3-Q1,M3-Q2,M3-Q3,M3-Q4,M3-Q5,M3-Q6'&&!app.get('mock-view').innerHTML.includes('对照参考答案'));
app.get('exam-answer').value='trial draft';await app.get('exam-answer').dispatch('input');await app.get('pause-exam').dispatch('click');ok('Paused mock disables editor and saves exam draft separately',app.get('exam-answer').disabled&&app.state().mock.active.answers['M3-Q1']==='trial draft'&&app.state().mock.active.status==='paused');
const reloaded=setup({saved:app.state()});ok('Reload restores paused exam and draft',reloaded.get('exam-answer').value==='trial draft'&&reloaded.get('exam-answer').disabled);await reloaded.get('finish-exam').dispatch('click');ok('Trial review does not enter history or grade automatically',reloaded.state().mock.runs.length===0&&reloaded.get('mock-view').innerHTML.includes('不写入学习统计'));
await app.get('pause-exam').dispatch('click');await app.get('reference').dispatch('click');ok('Leaving mock through auxiliary navigation pauses timer',app.state().mock.active.status==='paused');
await app.get('backup').dispatch('click');app.get('import').files=[{text:async()=>JSON.stringify({course:'CSIT882',records:{UNKNOWN:{answer:'retained',updatedAt:'2099-01-01'}}})}];await app.get('import').dispatch('change');ok('Imported unknown question IDs retained for export',app.api.records.UNKNOWN.answer==='retained');
const bad=setup({failStorage:true});bad.api.navigate('A4-T4','practice');bad.get('draft').value='memory only';await bad.get('draft').dispatch('input');ok('Storage failure preserves memory draft and displays export warning',bad.api.records['A4-T4'].drafts['1'].text==='memory only'&&bad.get('save-state').textContent.includes('导出'));
const corrupt=setup({saved:'bad json'});ok('Corrupt stored data never overwritten',corrupt.storage.get('csit882-workbench-v2')==='bad json'&&corrupt.get('save-state').textContent.includes('未覆盖'));
ok('Malformed hash does not crash',setup({hash:'#%zz'}).api.current==='A3-T2');
const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];for(const m of scripts)new vm.Script(m[1]);ok('All three generated inline scripts have valid syntax',scripts.length===3);
const ids=[...fs.readFileSync(path.join(base,'tools/shell.html'),'utf8').matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);ok('Static shell IDs unique',new Set(ids).size===ids.length);
const result={date:'2026-11-18',status:'passed',checks,labels,scope:'Pure state, migration, timer and UI event regression checks in a deliberately small DOM model; real rendering verified separately on HTTPS.'};fs.writeFileSync(path.join(base,'tests/ui-results.json'),JSON.stringify(result,null,2));console.log(JSON.stringify({status:result.status,checks}));
