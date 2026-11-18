/* Pure state rules shared by the browser and regression tests. */
(function(root){
 'use strict';
 const values=new Set(['unassessed','unmastered','partial','mastered']);
 const clone=x=>JSON.parse(JSON.stringify(x));
 const object=x=>x&&typeof x==='object'&&!Array.isArray(x);
 function safeObject(x){if(!object(x))return {};for(const k of Object.keys(x))if(['__proto__','constructor','prototype'].includes(k))throw Error('记录中含有不允许的字段');return x;}
 function fresh(){return {schemaVersion:2,course:'CSIT882',records:{},settings:{module:'exam',id:'A3-T2',part:0,level:'A',source:'all',type:'all',knowledge:'all',mastery:'all',hideDuplicates:true},mock:{active:null,runs:[]}};}
 function record(x){
  x=safeObject(x);const drafts=safeObject(x.drafts),mastery=safeObject(x.partMastery);
  for(const d of Object.values(drafts))if(!object(d)||typeof d.text!=='string')throw Error('小题草稿格式不正确');
  for(const m of Object.values(mastery))if(!object(m)||!values.has(m.value)||typeof m.at!=='string')throw Error('掌握记录格式不正确');
  return {...clone(x),answer:typeof x.answer==='string'?x.answer:'',answerUpdatedAt:x.answerUpdatedAt||x.updatedAt||'',done:x.done===true,updatedAt:typeof x.updatedAt==='string'?x.updatedAt:'',drafts:clone(drafts),partMastery:clone(mastery),attempts:Array.isArray(x.attempts)?clone(x.attempts):[],draftHistory:Array.isArray(x.draftHistory)?clone(x.draftHistory):[]};
 }
 function migrate(x){
  safeObject(x);if(!object(x))throw Error('记录必须是JSON对象');if(x.course&&x.course!=='CSIT882')throw Error('这不是CSIT882记录');
  if('records' in x&&!object(x.records))throw Error('records必须是对象');
  const out=fresh(),src=safeObject(x.records||x);
  for(const [id,r] of Object.entries(src)){if(object(r)&&!['settings','mock','publicEdition'].includes(id))out.records[id]=record(r);}
  if(x.records){out.settings={...out.settings,...safeObject(x.settings)};if(object(x.mock)){out.mock.active=object(x.mock.active)?clone(x.mock.active):null;out.mock.runs=Array.isArray(x.mock.runs)?clone(x.mock.runs):[];for(const s of [out.mock.active,...out.mock.runs].filter(Boolean)){if(!Array.isArray(s.ids)||!s.ids.length||!s.ids.every(id=>typeof id==='string')||!object(s.answers)||!object(s.reviews)||!['running','paused','finished'].includes(s.status))throw Error('模拟记录格式不正确');}}}
  return out;
 }
 function union(a,b,key){const result=new Map();for(const x of [...a,...b])if(object(x)){const id=key(x),old=result.get(id),time=v=>v?.reviewUpdatedAt||v?.updatedAt||v?.at||v?.finishedAt||'';if(!old||String(time(x))>=String(time(old)))result.set(id,clone(x));}return [...result.values()];}
 function mergeRecord(a,b){
  a=record(a);b=record(b);const newer=b.updatedAt&&(!a.updatedAt||b.updatedAt>a.updatedAt);const r={...(newer?a:b),...(newer?b:a)};
  const answerNewer=b.answerUpdatedAt&&(!a.answerUpdatedAt||b.answerUpdatedAt>a.answerUpdatedAt);r.answer=(answerNewer?b:a).answer;r.answerUpdatedAt=(answerNewer?b:a).answerUpdatedAt;
  r.attempts=union(a.attempts,b.attempts,x=>x.id||JSON.stringify(x));
  r.draftHistory=union(a.draftHistory,b.draftHistory,x=>x.id||JSON.stringify(x));
  if(a.answer&&b.answer&&a.answer!==b.answer){const old=answerNewer?a:b;r.draftHistory=union(r.draftHistory,[{id:'import:'+old.answerUpdatedAt+':'+old.answer,text:old.answer,updatedAt:old.answerUpdatedAt,source:'import-conflict'}],x=>x.id);}
  r.drafts={...a.drafts};for(const [part,d] of Object.entries(b.drafts)){const before=r.drafts[part];if(!before||(d.updatedAt&&d.updatedAt>before.updatedAt))r.drafts[part]=clone(d);if(before?.text&&d.text&&before.text!==d.text){const old=r.drafts[part]===before?d:before;r.draftHistory=union(r.draftHistory,[{id:'part:'+part+':'+(old.updatedAt||'')+':'+old.text,part,text:old.text,updatedAt:old.updatedAt,source:'import-conflict'}],x=>x.id);}}
  r.partMastery={...a.partMastery};for(const [part,m] of Object.entries(b.partMastery)){if(!r.partMastery[part]||m.at>r.partMastery[part].at)r.partMastery[part]=clone(m);}
  r.done=a.done||b.done;return r;
 }
 function merge(a,b){
  const out=migrate(a),input=migrate(b);for(const [id,r] of Object.entries(input.records))out.records[id]=out.records[id]?mergeRecord(out.records[id],r):r;
  out.mock.runs=union(out.mock.runs,input.mock.runs,x=>x.id||JSON.stringify(x));
  if(!out.mock.active&&input.mock.active)out.mock.active=input.mock.active;
  // Device preferences and an already active exam remain on this device.
  return out;
 }
 function latestMastery(q,records,questions,part){
  const canonical=q.canonical||q.id,siblings=questions.filter(x=>(x.canonical||x.id)===canonical);let result={value:'unassessed',at:''};
  for(const s of siblings){const m=records[s.id]?.partMastery?.[String(part)];if(m&&values.has(m.value)&&m.at>=result.at)result=m;}
  return result.value;
 }
 function mastery(q,records,questions){const all=q.parts.map(p=>latestMastery(q,records,questions,p.number));if(all.length&&all.every(v=>v==='mastered'))return 'mastered';if(all.every(v=>v==='unassessed'))return 'unassessed';if(all.some(v=>v==='unmastered'))return 'unmastered';return 'partial';}
 function unique(questions){return questions.filter(q=>!q.canonical);}
 function remaining(s,now=Date.now()){if(!s)return 0;return Math.max(0,s.status==='running'?s.deadline-now:s.remainingMs||0);}
 function startExam(paper,minutes,trial=false,now=Date.now(),id='mock-'+now){
  if(!Number.isFinite(minutes)||minutes<1||minutes>360)throw Error('请输入1至360分钟的练习时长');
  return {id,paper:paper.id,title:paper.title,ids:[...paper.ids],durationMs:minutes*60000,remainingMs:minutes*60000,startedAt:now,deadline:now+minutes*60000,status:'running',trial,answers:{},reviews:{},index:0,updatedAt:now};
 }
 function pauseExam(s,now=Date.now()){if(s.status!=='running')return s;return {...s,remainingMs:remaining(s,now),status:'paused',updatedAt:now};}
 function resumeExam(s,now=Date.now()){if(s.status!=='paused')return s;return {...s,deadline:now+s.remainingMs,status:'running',updatedAt:now};}
 function finishExam(s,now=Date.now()){return {...s,status:'finished',remainingMs:remaining(s,now),finishedAt:now,updatedAt:now};}
 function stripSQL(text){
  let out='',quote=null,line=false,block=false;
  for(let i=0;i<text.length;i++){const c=text[i],n=text[i+1];if(line){if(c==='\n'){line=false;out+='\n';}continue;}if(block){if(c==='*'&&n==='/'){block=false;i++;}continue;}
   if(quote){if(c==='\\'){i++;continue;}if(c===quote){if(n===quote)i++;else quote=null;}continue;}
   if(c==='-'&&n==='-'){line=true;i++;continue;}if(c==='/'&&n==='*'){block=true;i++;continue;}if(c==='\''||c==='"'){quote=c;out+='?';continue;}out+=c;
  }return {code:out,unclosed:!!quote||block};
 }
 function staticCheck(text){
  if(!text.trim())return ['先输入SQL，或在UMLet／纸上完成后保存要点。'];
  const {code,unclosed}=stripSQL(text),messages=[];
  if(unclosed)messages.push('引号或块注释似乎没有闭合，请核对。');
  if(/(?:=|<>|!=)\s*NULL\b/i.test(code))messages.push('发现与NULL直接比较。通常应使用IS NULL或IS NOT NULL。');
  if(/\b(?:UPDATE|DELETE)\b/i.test(code)&&!/\bWHERE\b/i.test(code))messages.push('UPDATE／DELETE没有WHERE：请确认是否确实要处理全部行。');
  if(/\bLEFT\s+(?:OUTER\s+)?JOIN\b/i.test(code)&&/COUNT\s*\(\s*\*\s*\)/i.test(code))messages.push('LEFT JOIN配COUNT(*)可能把零匹配对象计为1；核对计数列。');
  if(/\bHAVING\b/i.test(code)&&!/\bGROUP\s+BY\b/i.test(code))messages.push('存在HAVING但没有GROUP BY；核对题目要按什么对象分组。');
  messages.push('未连接MySQL；以上仅为常见风险提示，不是语法或执行结果验证，也不按答案字符串评分。');return messages;
 }
 function stats(questions,records){const a=unique(questions.filter(q=>q.level==='A'));const out={total:a.length,mastered:0,partial:0,unmastered:0,unassessed:0};for(const q of a)out[mastery(q,records,questions)]++;return out;}
 root.WorkbenchCore={fresh,migrate,record,merge,mergeRecord,mastery,latestMastery,unique,stats,remaining,startExam,pauseExam,resumeExam,finishExam,staticCheck};
})(typeof window==='object'?window:globalThis);
