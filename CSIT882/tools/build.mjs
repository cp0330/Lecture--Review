import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {createRequire} from 'node:module';
import {renderDiagram} from './diagrams.mjs';
const base=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const require=createRequire(import.meta.url);
async function dep(name,sub){
 let p;try{p=require.resolve(name);}catch(e){if(!process.env.CSIT882_NODE_MODULES)throw e;p=path.join(process.env.CSIT882_NODE_MODULES,name,sub);}
 return import(pathToFileURL(p));
}
const {marked}=await dep('marked','lib/marked.esm.js');
const {instance}=await dep('@viz-js/viz','dist/viz.js');
const viz=await instance();let diagrams=0;
const data=JSON.parse(fs.readFileSync(path.join(base,'bank.json'),'utf8'));
function math(s){
 const codes=[];s=s.replace(/```[\s\S]*?```|`[^`\n]+`/g,m=>{codes.push(m);return `CODEBLOCK${codes.length-1}END`;});
 s=s.replace(/\$([^$\n]+)\$/g,(_,s)=>`<span class="math">${esc(s.replaceAll('\\to','→').replaceAll('\\{','{').replaceAll('\\}','}')).replace(/\^\+/g,'<sup>+</sup>').replace(/_(\d+)/g,'<sub>$1</sub>')}</span>`);
 return s.replace(/CODEBLOCK(\d+)END/g,(_,n)=>codes[+n]);
}
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
function md(s,id){
 // These source placeholders are text, not HTML elements.
 s=s.replace(/<(email-prefix|insert [^>\n]+)>/g,(_,value)=>`&lt;${esc(value)}&gt;`);
 s=s.replace(/```mermaid\n([\s\S]*?)```/g,(_,src)=>renderDiagram(src,id,viz,diagrams++));
 return marked.parse(math(s)).replace(/<table>/g,'<div class="table-scroll"><table>').replace(/<\/table>/g,'</table></div>');
}
for(const q of data.questions){q.questionHTML=md(q.question,q.id);q.answerHTML=md(q.answer,q.id);}
const json=JSON.stringify(data).replace(/</g,'\\u003c');
const style=fs.readFileSync(path.join(base,'study.css'),'utf8');
const script=fs.readFileSync(path.join(base,'app.js'),'utf8');
const shell=fs.readFileSync(path.join(base,'tools/shell.html'),'utf8');
fs.writeFileSync(path.join(base,'index.html'),shell.replace('/* INLINE_STYLE */',style).replace('/* INLINE_DATA */',`const BANK=${json};`).replace('/* INLINE_APP */',script));
console.log(JSON.stringify({questions:data.questions.length,parts:data.questions.reduce((a,q)=>a+q.parts.length,0),diagrams,bytes:fs.statSync(path.join(base,'index.html')).size}));
