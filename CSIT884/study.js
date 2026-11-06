/* v2 writes new records. v1 drafts and checks are never removed or overwritten. */
const $ = id => document.getElementById(id);
const cards=[...document.querySelectorAll('.question-card')], links=[...document.querySelectorAll('.q-link')];
const memory=new Map(), positions=new Map();
let active, supportPromise, referencePromise;
function read(key){try{return localStorage.getItem(key);}catch(e){return null;}}
function legacy(id){
  const text=read('884-bank-'+id), state=read('884-state-'+id);
  if(text===null&&!state)return null;
  const count=Number($(id).dataset.legacyChecks||0), checks=[];
  for(let i=0;i<count;i++)checks.push(read('884-check-'+id+'-'+i)==='true');
  return {version:1,answer:text||'',state:state||'new',checks};
}
function empty(id){return {version:2,answer:'',state:'new',checks:{},hintsSeen:[],explanationSeen:false,referenceSeen:false,history:[],legacy:legacy(id)};}
function record(id){
  if(!memory.has(id)){
    let data;try{data=JSON.parse(read('884-v2-'+id)||'null');}catch(e){}
    memory.set(id,data&&data.version===2&&typeof data.answer==='string'?{...empty(id),...data}:empty(id));
  }
  return memory.get(id);
}
function save(id){try{localStorage.setItem('884-v2-'+id,JSON.stringify(record(id)));return true;}catch(e){return false;}}
function message(id,text){$('saved-'+id).textContent=text;}
function report(text){$('backup-status').textContent=text;}
function helpUsed(r){return r.hintsSeen.length>0||r.explanationSeen||r.referenceSeen;}
function refresh(){
  let completed=0, independent=0, completedMain=0;
  cards.forEach(card=>{
    const id=card.id,r=record(id);
    links.find(a=>a.dataset.id===id).dataset.state=r.state;
    $('state-'+id).value=r.state;
    if(r.state==='checked'||r.state==='supported'){completed++;if(card.dataset.track==='assignment')completedMain++;}
    if(r.state==='checked')independent++;
    card.querySelectorAll('[data-criterion]').forEach(c=>c.checked=!!r.checks[c.dataset.criterion]);
    const checked=Object.values(r.checks).filter(Boolean).length;
    $('score-'+id).textContent=checked+'/'+card.querySelectorAll('[data-criterion]').length+' checks · self-assessed';
    $('help-used-'+id).textContent=helpUsed(r)?'Help viewed in this attempt. Use the supported status or try a new attempt without help.':'No hints or solutions viewed in this attempt.';
    updateHistory(id);
  });
  $('progress-text').textContent='Assignment '+completedMain+'/8 · Supplements '+(completed-completedMain)+'/29 · '+independent+' marked independent';
  $('progress-bar').style.width=100*completed/cards.length+'%';
}
function matches(){
  const term=$('search').value.trim().toLowerCase();
  return cards.filter(c=>(!term||c.dataset.search.includes(term))&&(!$('track-filter').value||c.dataset.track===$('track-filter').value)&&(!$('topic-filter').value||c.dataset.topic===$('topic-filter').value)&&(!$('state-filter').value||record(c.id).state===$('state-filter').value));
}
function filter(){
  const list=matches(),ids=list.map(c=>c.id);
  links.forEach(a=>a.hidden=!ids.includes(a.dataset.id));
  cards.forEach(c=>c.hidden=!list.length||c.id!==active);
  $('list-count').textContent=list.length+' tasks shown';$('workspace-empty').hidden=!!list.length;
  const i=ids.indexOf(active);$('previous').disabled=i<=0;$('next').disabled=i<0||i>=ids.length-1;
  $('position').textContent=i<0?'Choose a task from this list':(i+1)+' of '+ids.length;
  return list;
}
function selectQuestion(id,move=false){
  if(!$(id)?.classList.contains('question-card'))id=cards[0].id;
  active=id;switchTab(id,'answer');
  if($('track-filter').value&&$('track-filter').value!==$(id).dataset.track)$('track-filter').value=$(id).dataset.track;
  if(!matches().some(c=>c.id===id)){$('search').value='';$('topic-filter').value='';$('state-filter').value='';}
  links.forEach(a=>a.setAttribute('aria-current',String(a.dataset.id===id)));
  try{localStorage.setItem('884-last-question',id);}catch(e){}
  filter();document.title=id+' · CSIT884 Practice';
  if(move){if(matchMedia('(max-width:760px)').matches){$('question-menu').open=false;$('backup-menu').open=false;}$(id).scrollIntoView({block:'start'});$(id).querySelector('h2').focus({preventScroll:true});}
}
function loadSupport(){
  if(!supportPromise)supportPromise=fetch('support.json?v=20261106-2').then(r=>{if(!r.ok)throw Error('Help file unavailable');return r.json();}).catch(e=>{supportPromise=null;throw e;});
  return supportPromise;
}
function line(tag,text){const e=document.createElement(tag);e.textContent=text;return e;}
async function fillHelp(id,kind){
  const target=$('panel-'+id+'-'+kind).querySelector('.help-content');
  if(target.dataset.loaded)return;
  target.setAttribute('aria-busy','true');target.textContent='Loading…';
  try{
    if(kind==='reference'){
      if(!referencePromise)referencePromise=fetch('answers.html?v=20261106-2').then(r=>{if(!r.ok)throw Error('Reference unavailable');return r.text();}).then(t=>new DOMParser().parseFromString(t,'text/html')).catch(e=>{referencePromise=null;throw e;});
      const doc=await referencePromise,copy=doc.getElementById(id).cloneNode(true);copy.removeAttribute('id');copy.className='reference-section';copy.querySelector('.back-question')?.remove();target.replaceChildren(copy);
    }else{
      const data=(await loadSupport())[id];target.replaceChildren();
      if(kind==='hints'){
        target.append(line('p','按需要逐级打开。先尝试理解题目，再查看知识点和局部方法。'));
        data.hints.forEach((hint,i)=>{
          const details=document.createElement('details'),summary=line('summary',['Hint 1 · Understand the task','Hint 2 · Recall the topic','Hint 3 · Plan the steps'][i]);
          details.className='hint-level';details.append(summary,line('p',hint));details.open=record(id).hintsSeen.includes(i+1);
          details.addEventListener('toggle',()=>{if(details.open&&!record(id).hintsSeen.includes(i+1)){record(id).hintsSeen.push(i+1);if(!save(id))message(id,'Help history could not be saved.');refresh();}});
          target.append(details);
        });
      }else{
        target.append(line('h3','读题与约束'),line('p',data.overview));
        const ol=document.createElement('ol');data.flow.filter(Boolean).forEach(s=>ol.append(line('li',s)));target.append(line('h3','数据、状态与步骤'),ol);
        if(data.trace){target.append(line('h3','检查结果'),line('p',data.trace));}
        if(data.pitfalls.length){const ul=document.createElement('ul');data.pitfalls.forEach(s=>ul.append(line('li',s)));target.append(line('h3','常见错误'),ul);}
        target.append(line('p','完整代码在 Reference Answer 中单独打开。先用本页步骤检查自己的实现，再对照代码。'));
      }
    }
    target.dataset.loaded='true';
  }catch(e){
    target.replaceChildren(line('p','Help could not load. Start the local practice server, or use the separate notes and reference files.'));
    const a=line('a','Open separate reference');a.href='answers.html#'+id;a.target='_blank';a.rel='noopener';target.append(a);
    const retry=line('button','Retry');retry.onclick=()=>fillHelp(id,kind);target.append(retry);
  }finally{target.removeAttribute('aria-busy');}
}
function switchTab(id,name,focus=false){
  const current=$(id).querySelector('[role=tab][aria-selected=true]')?.dataset.tab;
  if(current==='answer'){const box=$('answer-'+id);positions.set(id,{start:box.selectionStart,end:box.selectionEnd,scroll:box.scrollTop});}
  $(id).querySelectorAll('[role=tab]').forEach(b=>{const selected=b.dataset.tab===name;b.setAttribute('aria-selected',String(selected));b.tabIndex=selected?0:-1;if(selected&&focus)b.focus();});
  $(id).querySelectorAll('[role=tabpanel]').forEach(p=>p.hidden=p.dataset.panel!==name);
  if(name==='answer'){
    const p=positions.get(id);if(p){$('answer-'+id).setSelectionRange(p.start,p.end);$('answer-'+id).scrollTop=p.scroll;}
  }else{
    if(name==='explanation')record(id).explanationSeen=true;
    if(name==='reference')record(id).referenceSeen=true;
    if(!save(id))message(id,'Help history could not be saved.');
    refresh();fillHelp(id,name);
  }
}
function updateHistory(id){
  const r=record(id),box=$('previous-'+id),has=!!r.legacy||r.history.length>0;
  box.hidden=!has;
  if(!has)return;
  const select=$('history-'+id),prior=select.value;select.replaceChildren();
  if(r.legacy){const o=line('option','Previous version · v1 draft');o.value='legacy';select.append(o);}
  r.history.forEach((h,i)=>{const o=line('option','Attempt '+(i+1)+' · '+(h.savedAt||'saved'));o.value=String(i);select.append(o);});
  if([...select.options].some(o=>o.value===prior))select.value=prior;
  showHistory(id);
}
function previousRecord(id){const value=$('history-'+id).value;return value==='legacy'?record(id).legacy:record(id).history[Number(value)];}
function showHistory(id){const old=previousRecord(id);$('previous-text-'+id).value=old?.answer||'';}
function usePrevious(id){
  const old=previousRecord(id);if(!old)return;
  if(record(id).answer&&record(id).answer!==old.answer&&!confirm('Replace the current draft with this saved draft? The saved copy will remain available.'))return;
  const current=record(id);if(current.answer&&current.answer!==old.answer){current.history.push({answer:current.answer,state:current.state,checks:{...current.checks},hintsSeen:[...current.hintsSeen],explanationSeen:current.explanationSeen,referenceSeen:current.referenceSeen,savedAt:new Date().toISOString(),version:2});}
  current.answer=old.answer;current.state='working';current.checks={};$('answer-'+id).value=old.answer;
  if(!save(id))message(id,'Draft copied on screen. Export before leaving because storage is unavailable.');else message(id,'Previous draft copied. Old checks have not been applied to the current task.');refresh();
}
function newAttempt(id){
  const r=record(id);
  if((r.answer||helpUsed(r)||Object.keys(r.checks).length)&&!confirm('Save this attempt in history and start a blank attempt?'))return;
  const snapshot={answer:r.answer,state:r.state,checks:{...r.checks},hintsSeen:[...r.hintsSeen],explanationSeen:r.explanationSeen,referenceSeen:r.referenceSeen,savedAt:new Date().toISOString(),version:2};
  const next={...empty(id),legacy:r.legacy,history:[...r.history,snapshot]};memory.set(id,next);$('answer-'+id).value='';
  $(id).querySelectorAll('.help-content').forEach(t=>{t.replaceChildren();delete t.dataset.loaded;});
  if(!save(id))message(id,'New attempt is in memory only. Export before leaving.');else message(id,'Previous attempt saved in history.');
  refresh();switchTab(id,'answer');filter();
}
function download(text,name,type='text/plain;charset=utf-8'){
  const url=URL.createObjectURL(new Blob([text],{type})),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function exportAnswer(id){download(record(id).answer,id+'-my-answer.txt');}
function exportAll(){const questions={};cards.forEach(c=>questions[c.id]=record(c.id));download(JSON.stringify({format:'csit884-practice',version:2,savedAt:new Date().toISOString(),questions},null,2),'CSIT884-progress-v2.json','application/json');report('Exported current drafts, previous versions and attempt history.');}
function validateV2(r){
  const states=['new','working','review','checked','supported'];
  if(!r||r.version!==2||typeof r.answer!=='string'||!states.includes(r.state)||!r.checks||typeof r.checks!=='object'||Array.isArray(r.checks)||!Object.values(r.checks).every(v=>typeof v==='boolean')||!Array.isArray(r.history)||!Array.isArray(r.hintsSeen)||!r.hintsSeen.every(v=>[1,2,3].includes(v))||typeof r.explanationSeen!=='boolean'||typeof r.referenceSeen!=='boolean')throw Error('Invalid v2 question record.');
  if(r.legacy&&(r.legacy.version!==1||typeof r.legacy.answer!=='string'||!Array.isArray(r.legacy.checks)))throw Error('Invalid previous-version draft.');
  if(!r.history.every(h=>h&&typeof h.answer==='string'))throw Error('Invalid attempt history.');
  return r;
}
async function importBackup(e){
  const file=e.target.files[0];if(!file)return;
  try{
    const data=JSON.parse(await file.text());if(data.format!=='csit884-practice'||![1,2].includes(data.version)||!data.questions||typeof data.questions!=='object'||Array.isArray(data.questions))throw Error('Unsupported CSIT884 backup.');
    const changes=[];
    for(const card of cards){
      const r=data.questions[card.id];if(!r)continue;
      if(data.version===1){
        const size=Number(card.dataset.legacyChecks||0);
        if(!size)continue;
        if(typeof r.answer!=='string'||!['new','working','review','checked'].includes(r.state)||!Array.isArray(r.checks)||r.checks.length!==size||!r.checks.every(v=>typeof v==='boolean'))throw Error('Invalid v1 question record.');
        changes.push([card.id,{...record(card.id),legacy:{...r,version:1}}]);
      }else changes.push([card.id,validateV2(r)]);
    }
    if(!changes.length){report('No matching tasks in this backup.');return;}
    const question=data.version===1?'Import '+changes.length+' old drafts as previous versions? Current answers and checks will stay unchanged.':'Replace '+changes.length+' current task records with this backup? Export a backup first if needed.';
    if(!confirm(question)){report('Import cancelled. Your work was kept.');return;}
    let ok=true;
    changes.forEach(([id,r])=>{
      // Preserve an existing, different v1 draft before accepting another old backup.
      if(data.version===1&&record(id).legacy&&record(id).legacy.answer!==r.legacy.answer)r.history=[...record(id).history,{...record(id).legacy,savedAt:new Date().toISOString()}];
      memory.set(id,r);$('answer-'+id).value=r.answer;ok=save(id)&&ok;
      $(id).querySelectorAll('.help-content').forEach(t=>{t.replaceChildren();delete t.dataset.loaded;});
    });
    refresh();filter();
    const visible=$(active).querySelector('[role=tab][aria-selected=true]').dataset.tab;if(visible!=='answer')fillHelp(active,visible);
    report(ok?'Backup imported and saved.':'Imported on screen. Storage is unavailable; export before leaving.');
  }catch(err){report('Import failed: '+err.message);}finally{e.target.value='';}
}
cards.forEach(card=>{
  const id=card.id,box=$('answer-'+id);box.value=record(id).answer;
  if(record(id).legacy)message(id,'A previous-version draft is available below. It has not been replaced.');
  box.addEventListener('input',()=>{const r=record(id);r.answer=box.value;if(r.state==='new'&&box.value.trim())r.state='working';message(id,save(id)?'Saved in this browser. Export a backup to keep a separate copy.':'Storage unavailable. Export your answer before leaving.');refresh();});
  box.addEventListener('keydown',e=>{
    if(e.key==='Escape'){card.querySelector('[data-export]').focus();return;}
    if(e.key==='Tab'&&!e.shiftKey){e.preventDefault();if(!document.execCommand('insertText',false,'  ')){box.setRangeText('  ',box.selectionStart,box.selectionEnd,'end');box.dispatchEvent(new Event('input',{bubbles:true}));}}
  });
  card.querySelectorAll('[data-criterion]').forEach(c=>c.addEventListener('change',()=>{record(id).checks[c.dataset.criterion]=c.checked;if(!save(id))message(id,'Checklist could not be saved.');refresh();}));
  $('state-'+id).addEventListener('change',e=>{record(id).state=e.target.value;if(!save(id))message(id,'Status could not be saved.');refresh();filter();});
  card.querySelectorAll('[role=tab]').forEach(b=>{
    b.addEventListener('click',()=>switchTab(id,b.dataset.tab));
    b.addEventListener('keydown',e=>{const tabs=[...card.querySelectorAll('[role=tab]')],i=tabs.indexOf(b);let j;if(e.key==='ArrowRight')j=(i+1)%tabs.length;else if(e.key==='ArrowLeft')j=(i+tabs.length-1)%tabs.length;else if(e.key==='Home')j=0;else if(e.key==='End')j=tabs.length-1;else return;e.preventDefault();switchTab(id,tabs[j].dataset.tab,true);});
  });
  $('history-'+id).addEventListener('change',()=>showHistory(id));
});
links.forEach(a=>a.addEventListener('click',()=>selectQuestion(a.dataset.id,true)));
window.addEventListener('hashchange',()=>selectQuestion(location.hash.slice(1),true));
['search','track-filter','topic-filter','state-filter'].forEach(id=>$(id).addEventListener('input',()=>{const list=filter();if(list.length&&!list.some(c=>c.id===active)){location.hash=list[0].id;}}));
$('clear-filters').addEventListener('click',()=>{['search','track-filter','topic-filter','state-filter'].forEach(id=>$(id).value='');filter();});
function step(d){const list=matches(),i=list.findIndex(c=>c.id===active);if(list[i+d])location.hash=list[i+d].id;}
$('previous').onclick=()=>step(-1);$('next').onclick=()=>step(1);
$('export-all').onclick=exportAll;$('import-file').addEventListener('change',importBackup);
async function copyCode(button){const code=button.closest('.file').querySelector('code');try{await navigator.clipboard.writeText(code.textContent);button.textContent='Copied';setTimeout(()=>button.textContent='Copy code',1500);}catch(e){const range=document.createRange();range.selectNodeContents(code);getSelection().removeAllRanges();getSelection().addRange(range);button.textContent='Selected: use Copy';}}
refresh();if(matchMedia('(max-width:760px)').matches){$('question-menu').open=false;$('backup-menu').open=false;}
selectQuestion(location.hash.slice(1)||'A1-1',!!location.hash);
