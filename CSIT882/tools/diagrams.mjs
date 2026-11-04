export const fields = {
 'M1-Q1': {
 DEGREE:['degree_name  ID','required_credit_points','requirements [1..*]'],UNDERGRADUATE_DEGREE:[],POSTGRADUATE_DEGREE:[],GRADUATE_CERTIFICATE:['required_experience_years'],
 SUBJECT:['subject_code  ID1','subject_title  ID2','credit_points','learning_objectives [1..*]'],EMPLOYEE:['employee_number  ID1','first_name  ID2','last_name  ID2','date_of_birth  ID2'],ACADEMIC_STAFF:['academic_degree_achieved'],TUTOR:['academic_degree_achieved'],SUPPORT_STAFF:['{qualification, acquired_date} [1..*]'],FACULTY:['faculty_name  ID'],SCHOOL:['school_name  ID']},
 'M2-Q1': {
 HOSPITAL:['hospital_name  ID1','phone  ID2','fax  ID3','email  ID4','/main_building_address'],BUILDING:['building_number  local ID','building_name [0..1] local unique','city','street'],WARD:['ward_name  ID','levels [1..*]'],DECK:['deck_number  local ID','level'],EMPLOYEE:['employee_number  local ID','first_name','last_name','date_of_birth','salary'],DOCTOR:['status','specialization'],NURSE:['category'],ADMINISTRATION_STAFF:['position'],MAINTENANCE_STAFF:['position'],CONSULTANT:['phone  ID (assumption)','first_name','last_name','specialization'],CONTRACT:['start','end','charge_per_hour','ID: hospital + consultant + start'],PATIENT:['insurance_company_name  ID','insurance_policy_number  ID'],ADMISSION:['admission_date  local ID','admission_time  local ID','illness [0..1]','{test_name, result} [1..*]','ID: patient + hospital + date + time']},
 'A1-T1': {AUTHOR:['AuthorID  ID','FirstName','LastName'],BOOK:['ISBN  ID','Title','Edition','PublicationYear','Genre_example_StudentID (custom example)'],COPY:['CopyID  ID','Status'],MEMBER:['MemberID  ID','FirstName','LastName','Email']},
 'A1-T2': {LECTURER:['StaffID  ID','FirstName','LastName','Email'],STUDENT:['StudentID  ID','FirstName','LastName','Email'],UNDERGRADUATE:['GPA'],POSTGRADUATE:['ThesisTitle'],SUBJECT:['Code  ID','Title','Credits'],DEPARTMENT:['Name  ID (assumption)'],CLASSROOM:['Building  ID (assumption)','RoomNumber  ID (assumption)','Capacity']},
 S01:{WORKSHOP:['workshopNo  ID','title','learningObjectives [1..*]','/totalEnrolments'],TRAINER:['trainerNo  ID','name'],PARTICIPANT:['participantNo  ID','name','email [0..1]']},
 L09:{EMPLOYEE:['enum  ID','name']}
};
const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const dq=s=>JSON.stringify(String(s));
export function renderDiagram(src,id,viz,index){
 const nodes=new Set(),edges=[]; let count=0;
 for(const line of src.split('\n')){
  let m=line.trim().match(/^(\w+)\s+<\|--\s+(\w+)$/);
  if(m){nodes.add(m[1]);nodes.add(m[2]);edges.push(`${m[2]} -> ${m[1]} [arrowhead=empty];`);count++;continue;}
  m=line.trim().match(/^(\w+)\s+"([^"]+)"\s+--\s+"([^"]+)"\s+(\w+)\s*:\s*(\w+)$/);
  if(!m)continue;
  let [,a,left,right,b,label]=m;nodes.add(a);nodes.add(b);
  const qual={contains_by_building_number:'building_number',contains_by_deck_number:'deck_number',employs_by_employee_number:'employee_number'}[label];
  if(qual){
   const q=`qual_${count}`;edges.push(`${q} [shape=box,label=${dq(qual)},style=filled,fillcolor="#fff1c9",fontsize=10];`);
   edges.push(`${a} -> ${q} [dir=none,taillabel=${dq(left)}];`);
   edges.push(`${q} -> ${b} [dir=none,label="qualified by",headlabel="0..1"];`);
  }else{
   const attrs=id==='S01'?({teaches:'topic',enrols:'enrolmentDate, status'}[label]):'';
   edges.push(`${a} -> ${b} [dir=none,taillabel=${dq(left)},headlabel=${dq(right)},label=${dq(label+(attrs?'\n{'+attrs+'}':''))}];`);
  }count++;
 }
 if(!count)throw Error('Cannot parse '+id+' diagram');
 const boxes=[...nodes].map(n=>{
  if(!fields[id]||!Object.hasOwn(fields[id],n))throw Error('Missing attributes '+id+': '+n);
  const attrs=fields[id][n];
  return `${n} [label=<<TABLE BORDER="0" CELLBORDER="1" CELLSPACING="0" CELLPADDING="8"><TR><TD BGCOLOR="#e6f1ed"><B>${escape(n)}</B></TD></TR><TR><TD ALIGN="LEFT" BALIGN="LEFT">${attrs.length?attrs.map(escape).join('<BR ALIGN="LEFT"/>'):'(inherits attributes)'}</TD></TR></TABLE>>];`;
 });
 const dot=`digraph G {graph [rankdir=LR,bgcolor="transparent",nodesep=0.5,ranksep=1.25,pad=0.4];node [shape=plain,fontname="Arial",fontsize=12];edge [fontname="Arial",fontsize=10,color="#52695d",labeldistance=2.8];${boxes.join('\n')}${edges.join('\n')}}`;
 let svg=viz.renderString(dot,{format:'svg',engine:'dot'}).replace(/<\?xml[^>]*>/,'').replace(/<!DOCTYPE[\s\S]*?>/,'');
 svg=svg.replace(/id="([^"]+)"/g,(_,s)=>`id="g${index}-${s}"`).replace(/url\(#([^)]+)\)/g,(_,s)=>`url(#g${index}-${s})`);
 const note=id==='M2-Q1'?'黄色框是qualifier。固定所属对象和qualifier后，最多匹配一个对象；整体最低数量与自然identifier假设见正文。':'同一个ID标签表示组合identifier；不同ID标签表示独立identifier。空心箭头指向父类。';
 return `<figure class="diagram"><div class="diagram-scroll">${svg}</div><figcaption>${note} [0..1]可选，[*]多值，/表示derived attribute。</figcaption><button class="zoom" type="button">放大图</button></figure>`;
}
