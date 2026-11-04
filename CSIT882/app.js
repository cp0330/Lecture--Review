/* Question text stays in English. Drafts never leave the browser. */
const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const key='csit882-question-bank-20261103';
const byId=Object.fromEntries(BANK.questions.map(q=>[q.id,q]));
const names={Conceptual:'Conceptual modelling',Logical:'Logical design',Normalization:'Normalization',SELECT:'SQL SELECT','DDL/DML':'SQL DDL / DML',Access:'Access control',Extension:'Extension','扩展':'Extension'};
function hashId(){try{return decodeURIComponent(location.hash.slice(1)).toUpperCase();}catch{return '';}}
function cleanRecords(value){
 const records=value?.records??value,result={};
 if(!records||typeof records!=='object'||Array.isArray(records))throw Error('记录格式不正确');
 for(const [id,r] of Object.entries(records)){
  if(!byId[id]||!r||typeof r!=='object')continue;
  result[id]={answer:typeof r.answer==='string'?r.answer:'',done:r.done===true,updatedAt:typeof r.updatedAt==='string'?r.updatedAt:''};
 }return result;
}
function matches(q,filters,state){
 const query=filters.search.trim().toLowerCase();
 const text=[q.id,q.title,q.topic,q.question,q.tags.join(' ')].join(' ').toLowerCase();
 if(query&&!query.split(/\s+/).every(x=>text.includes(x)))return false;
 if(filters.area!=='all'&&!q.areas.includes(filters.area)&&!(filters.area==='Extension'&&q.priority==='extension'))return false;
 if(filters.source==='lecture'&&!q.source.startsWith('lecture-'))return false;
 if(!['all','lecture'].includes(filters.source)&&q.source!==filters.source)return false;
 if(filters.mode==='unique'&&q.canonical)return false;
 if(filters.mode==='core'&&q.priority!=='core')return false;
 if(filters.mode==='unfinished'&&(q.canonical||state[q.id]?.done))return false;
 if(filters.mode==='extension'&&!['extension','method'].includes(q.priority))return false;
 return true;
}
let state={},canSave=true,storageMessage='',activeId='',activeTab='question',activePart=0,filtered=[];
try{state=cleanRecords(JSON.parse(localStorage.getItem(key)||'{}'));localStorage.setItem(key,JSON.stringify(state));}catch(e){canSave=false;storageMessage='本地保存暂不可用，请导出记录备份。';}
const ids=['search','area','source','mode'];
function filters(){return Object.fromEntries(ids.map(id=>[id,$(id).value]));}
function toast(msg){$('toast').textContent=msg;$('toast').hidden=false;clearTimeout(toast.timer);toast.timer=setTimeout(()=>$('toast').hidden=true,3500);}
function save(){
 if(canSave)try{localStorage.setItem(key,JSON.stringify(state));storageMessage='已保存在此浏览器 · '+new Date().toLocaleTimeString();}catch(e){canSave=false;storageMessage='本地保存空间不足，请导出记录备份。';}
 $('save-state').textContent=storageMessage||(canSave?'会自动保存在此浏览器。':'请导出记录备份。');
}
function updateRecord(values){state[activeId]={...state[activeId],...values,updatedAt:new Date().toISOString()};save();}
function decorate(container){
 container.querySelectorAll('pre').forEach(pre=>{
  if(pre.querySelector('.copy'))return;const b=document.createElement('button');b.className='copy';b.type='button';b.textContent='复制';b.setAttribute('aria-label','复制这段代码');
  b.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(pre.querySelector('code')?.textContent||'');b.textContent='已复制';setTimeout(()=>b.textContent='复制',1800);}catch(e){toast('无法自动复制，请选中代码复制。');}});pre.append(b);
 });
 container.querySelectorAll('.zoom').forEach(b=>b.addEventListener('click',()=>openDialog('Conceptual schema',`<div class="zoomed">${b.closest('figure').querySelector('.diagram-scroll').innerHTML}</div>`)));
 container.querySelectorAll('img').forEach(img=>{img.tabIndex=0;img.setAttribute('role','button');img.setAttribute('aria-label','放大原题图：'+img.alt);const zoom=()=>openDialog('Original question diagram',`<div class="zoomed"><img src="${esc(img.getAttribute('src'))}" alt="${esc(img.alt)}"></div>`);img.addEventListener('click',zoom);img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();zoom();}});});
}
function codeHTML(markdown){
 return markdown.replace(/```(\w*)\n([\s\S]*?)```/g,(_,lang,code)=>`<pre><code class="language-${esc(lang)}">${esc(code.trim())}</code></pre>`);
}
function showPart(index){
 const q=byId[activeId];activePart=index;const p=q.parts[index];if(!p)return;
 $('part-list').innerHTML=q.parts.map((part,i)=>`<button type="button" data-part="${i}" aria-pressed="${i===index}" aria-label="小题 ${esc(part.number)}">(${esc(part.number)})</button>`).join('');
 $('part-list').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>showPart(+b.dataset.part)));
 $('walkthrough').innerHTML=`<div class="goal">${esc(p.goal)}</div><ol class="steps">${p.steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol>${p.code?`<h3>对应写法</h3>${codeHTML(p.code)}`:'<p class="small">完整图或schemas在“参考答案”中。</p>'}<div class="note"><strong>完成后核对</strong>${esc(p.check)}</div><div class="note trap"><strong>易错点</strong>${esc(p.pitfall)}</div>`;
 decorate($('walkthrough'));
}
function tab(name,focus=false){
 activeTab=name;for(const b of $('tabs').querySelectorAll('[data-tab]')){const selected=b.dataset.tab===name;b.setAttribute('aria-selected',String(selected));b.tabIndex=selected?0:-1;$('panel-'+b.dataset.tab).hidden=!selected;}
 if(focus)$('tab-'+name).focus();
}
function renderNav(){
 $('question-nav').innerHTML=filtered.map(q=>`<button class="nav-item" data-id="${q.id}"${activeId===q.id?' aria-current="page"':''}><strong>${esc(q.id)} ${state[q.id]?.done?'<i aria-label="已独立作答">✓</i>':''}</strong><span>${esc(q.title)}</span></button>`).join('');
 $('question-nav').querySelectorAll('[data-id]').forEach(b=>b.addEventListener('click',()=>go(b.dataset.id,true)));
 const done=BANK.questions.filter(q=>!q.canonical&&state[q.id]?.done).length;
 $('count').textContent=`${filtered.length} 题目组 · 已做 ${done}/48`;$('mobile-count').textContent=`${filtered.length} 题目组`;
 const i=filtered.findIndex(q=>q.id===activeId);$('position').textContent=filtered.length?`${i+1} / ${filtered.length}`:'0 / 0';$('prev').disabled=i<=0;$('next').disabled=i<0||i>=filtered.length-1;
}
function renderQuestion(){
 const q=byId[activeId];if(!q)return;
 $('question-heading').textContent=q.id+' · '+q.title;
 const priority={extension:'扩展保留',method:'方法补强',duplicate:'重复来源'}[q.priority];
 $('badges').innerHTML=`<span class="badge">${esc(q.sourceLabel)}</span>${q.areas.map(a=>`<span class="badge">${esc(names[a]||a)}</span>`).join('')}${priority?`<span class="badge extra">${priority}</span>`:''}${!q.source.startsWith('mock')&&!q.source.startsWith('assignment')?'<span class="badge extra">补充练习</span>':''}`;
 $('source-note').textContent=q.sourceNote;
 const alias=q.canonical?`<p class="note">本题与${esc(q.canonical)}内容相同，保留原来源，不重复计算练习量。</p><button class="canonical-link" data-canonical="${q.canonical}">打开${q.canonical}及解析 →</button>`:'';
 $('panel-question').innerHTML=q.questionHTML+alias;
 $('panel-answer').innerHTML=q.canonical?alias:q.answerHTML;
 $('part-list').innerHTML='';$('walkthrough').innerHTML=q.canonical?alias:'';
 if(q.parts.length)showPart(0);
 for(const c of [$('panel-question'),$('panel-answer'),$('walkthrough')]){decorate(c);c.querySelectorAll('[data-canonical]').forEach(b=>b.addEventListener('click',()=>reveal(b.dataset.canonical)));}
 $('draft').value=state[activeId]?.answer||'';$('done').checked=!!state[activeId]?.done;
 $('context').disabled=!q.context;$('context').textContent=q.context?'查看表结构 / 数据':'本题所需信息在题面';
 $('save-state').textContent=storageMessage||(canSave?'会自动保存在此浏览器。':'请导出记录备份。');
 tab('question');renderNav();
}
function go(id,focus=false,closeList=true){
 if(!byId[id])return;activeId=id;history.replaceState(null,'','#'+id.toLowerCase());renderQuestion();
 if(closeList){document.querySelector('.workspace').classList.remove('show-list');$('list-toggle').setAttribute('aria-expanded','false');}if(focus)$('question-heading').focus();
}
function filter(){
 filtered=BANK.questions.filter(q=>matches(q,filters(),state));$('reader').hidden=!filtered.length;$('empty').hidden=!!filtered.length;
 if(filtered.length&&!filtered.some(q=>q.id===activeId)){go(filtered[0].id,false,false);}else renderNav();
}
function reset(){for(const id of ids)$(id).value=id==='search'?'':id==='mode'?'unique':'all';filter();}
function reveal(id){
 id=id.toUpperCase();if(!byId[id])return;
 if(!matches(byId[id],filters(),state)){for(const k of ids)$(k).value=k==='search'?'':'all';filtered=BANK.questions.slice();$('reader').hidden=false;$('empty').hidden=true;}
 go(id);
}
let lastFocus;
function openDialog(title,html){lastFocus=document.activeElement;$('dialog-title').textContent=title;$('dialog-content').innerHTML=html;decorate($('dialog-content'));$('dialog').showModal();}
function contextHTML(q){const ctx=BANK.contexts[q.context];if(!ctx)return '';return `<h3>${esc(ctx.title)}</h3><p class="small">同一Task的顺序依题面执行；不同Task通常从原始状态独立开始。lecture验证数据与原始作业数据已分别标明。</p><pre><code class="language-sql">${esc(ctx.sql)}</code></pre>${ctx.data?`<h3>Data</h3><pre><code class="language-sql">${esc(ctx.data)}</code></pre>`:''}`;}
$('context').addEventListener('click',()=>openDialog('题目使用的schema与数据',contextHTML(byId[activeId])));
$('coverage').addEventListener('click',()=>openDialog('考点核查 · 六个考试范围',`<p>依据21Review.pdf p10与Week13说明核对。范围不代表最后试卷固定题号、顺序或分值。Mock 1与收到的Mock 3相同；Normalization由Assignment 4及补充练习覆盖。</p><p>48个去重题目组，158个小题；另保留6个重复来源。Auditing与Concurrency按扩展保留。</p><div class="table-scroll"><table><thead><tr><th>范围</th><th>考点</th><th>题目</th></tr></thead><tbody>${BANK.coverage.map(c=>`<tr><td>${esc(names[c.area]||c.area)}${c.priority==='method'?' · 方法补强':''}</td><td>${esc(c.topic)}<br><small>${esc(c.source)}</small></td><td>${c.questions.map(id=>`<button class="text-button" data-jump="${id}">${id}</button>`).join(' ')}</td></tr>`).join('')}</tbody></table></div><p><a href="coverage.md">下载范围对照</a> · <a href="validation.md">查看验证与限制</a></p>`));
$('audit').addEventListener('click',()=>openDialog('勘误与题面歧义',`<p>原题的数值、条件和含糊表达保留；参考答案说明采用的解释。以下记录区分题库修正、资料问题及验证边界。</p>${BANK.errata.map(e=>`<article class="audit-card"><div class="small">${esc(e.id+' · '+e.kind)}</div><h3>${esc(e.title)}</h3><p>${esc(e.finding)}</p><p>${esc(e.resolution)}</p>${e.questions.map(id=>`<button class="text-button" data-jump="${id}">${id}</button>`).join(' ')}${e.link?`<p><a href="${esc(e.link)}" target="_blank" rel="noopener">官方参考</a></p>`:''}</article>`).join('')}<p><a href="audit.md">完整核查报告</a> · <a href="validation.md">验证与限制</a></p>`));
$('dialog-content').addEventListener('click',e=>{const b=e.target.closest('[data-jump]');if(b){$('dialog').close();reveal(b.dataset.jump);}});
$('close-dialog').addEventListener('click',()=>$('dialog').close());$('dialog').addEventListener('close',()=>lastFocus?.focus());
for(const id of ids)$(id).addEventListener(id==='search'?'input':'change',()=>{if(id==='source'&&$('source').value==='mock-3')$('mode').value='all';filter();});
$('reset').addEventListener('click',reset);$('empty-reset').addEventListener('click',reset);
$('tabs').querySelectorAll('[data-tab]').forEach(b=>b.addEventListener('click',()=>tab(b.dataset.tab)));
$('tabs').addEventListener('keydown',e=>{const tabs=[...$('tabs').querySelectorAll('[data-tab]')];const i=tabs.findIndex(b=>b.dataset.tab===activeTab);let n;if(e.key==='ArrowRight')n=(i+1)%tabs.length;if(e.key==='ArrowLeft')n=(i-1+tabs.length)%tabs.length;if(e.key==='Home')n=0;if(e.key==='End')n=tabs.length-1;if(n!==undefined){e.preventDefault();tab(tabs[n].dataset.tab,true);}});
$('draft').addEventListener('input',()=>updateRecord({answer:$('draft').value}));$('done').addEventListener('change',()=>{updateRecord({done:$('done').checked});filter();});
$('prev').addEventListener('click',()=>{const i=filtered.findIndex(q=>q.id===activeId);if(i>0)go(filtered[i-1].id,true);});$('next').addEventListener('click',()=>{const i=filtered.findIndex(q=>q.id===activeId);if(i>=0&&i+1<filtered.length)go(filtered[i+1].id,true);});
$('list-toggle').addEventListener('click',()=>{const on=document.querySelector('.workspace').classList.toggle('show-list');$('list-toggle').setAttribute('aria-expanded',String(on));});
$('export').addEventListener('click',()=>{const blob=new Blob([JSON.stringify({course:'CSIT882',bankVersion:BANK.version,exportedAt:new Date().toISOString(),records:state},null,2)],{type:'application/json;charset=utf-8'});const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='CSIT882-records-'+new Date().toISOString().slice(0,10)+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1500);});
$('import').addEventListener('change',async e=>{const file=e.target.files?.[0];if(!file)return;try{const obj=JSON.parse(await file.text());if(obj.course&&obj.course!=='CSIT882')throw Error('这不是CSIT882记录');const incoming=cleanRecords(obj);for(const [id,r] of Object.entries(incoming)){if(!state[id]||!state[id].updatedAt||r.updatedAt>state[id].updatedAt)state[id]=r;}save();renderQuestion();toast(`已合并${Object.keys(incoming).length}条记录；同题保留较新记录。`);}catch(err){toast('导入失败：'+err.message);}finally{e.target.value='';}});
$('print').addEventListener('click',()=>{$('print-context').innerHTML=contextHTML(byId[activeId]);window.print();});
window.addEventListener('afterprint',()=>$('print-context').innerHTML='');
window.addEventListener('hashchange',()=>reveal(hashId()));
filtered=BANK.questions.filter(q=>matches(q,filters(),state));
const hash=hashId();if(byId[hash])reveal(hash);else go(filtered[0].id);
window.CSIT882={matches,cleanRecords,get current(){return activeId;},get records(){return structuredClone(state);},reveal};
