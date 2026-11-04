from pathlib import Path
import re,json,sqlite3,itertools,hashlib,datetime
ROOT=Path(__file__).resolve().parents[1]
bank=json.loads((ROOT/'bank.json').read_text())
E={q['id']:q for q in bank['questions']}
d={'contexts':{'培训':bank['contexts']['workshop']['sql'],'培训原始数据':bank['contexts']['workshop']['data'],'运输':bank['contexts']['transport']['sql'],'银行':bank['contexts']['bank']['sql']}}
checks=[]
def ok(label,condition=True):
    assert condition,label
    checks.append(label)
def closure(attrs,fds):
    c=set(attrs)
    while True:
        old=set(c)
        for left,right in fds:
            if set(left)<=c:c.update(right)
        if c==old:return c
def analyse(attrs,fds):
    attrs=set(attrs)
    subsets=[set(s) for n in range(len(attrs)+1) for s in itertools.combinations(sorted(attrs),n)]
    keys=[]
    for s in subsets:
        if not any(k<=s for k in keys) and closure(s,fds)==attrs:keys.append(s)
    prime=set().union(*keys)
    nf2=nf3=bcnf=True
    for left in subsets:
        full=closure(left,fds)
        for a in full-left:
            if any(left<k for k in keys) and a not in prime:nf2=False
            if full!=attrs and a not in prime:nf3=False
            if full!=attrs:bcnf=False
    return sorted(''.join(sorted(k)) for k in keys),('BCNF' if bcnf else '3NF' if nf3 else '2NF' if nf2 else '1NF')
nf_cases=[
 ('A4-T4(1)','ABCD',[('A','B'),('A','C'),('C','D')],['A'],'2NF'),
 ('A4-T4(2)','ABCD',[('A','C'),('B','D')],['AB'],'1NF'),
 ('A4-T4(3)','ABCD',[('A','B'),('B','C'),('C','A'),('C','D')],['A','B','C'],'BCNF'),
 ('A4-T4(4)','ABCD',[('AB','C'),('AB','D'),('C','B')],['AB','AC'],'3NF'),
 ('S05','ABCDE',[('A','B'),('B','C'),('C','A'),('CD','E')],['AD','BD','CD'],'3NF'),
 ('S07(1)','PQRS',[('P','Q'),('Q','R'),('P','S')],['P'],'2NF'),
 ('S07(2)','PQRS',[('PQ','R'),('P','S')],['PQ'],'1NF'),
 ('S07(3)','PQRS',[('P','Q'),('Q','R'),('R','P'),('R','S')],['P','Q','R'],'BCNF'),
 ('S07(4)','PQRS',[('PQ','R'),('PQ','S'),('R','Q')],['PQ','PR'],'3NF'),
 ('S08/S10','ABC',[('AB','C'),('C','B')],['AB','AC'],'3NF'),
 ('S09','ABCD',[('A','B'),('A','C'),('BC','A'),('B','D')],['A','BC'],'1NF')]
for label,attrs,fds,keys,nf in nf_cases:ok(label+' all keys and highest NF exhaustively checked',analyse(attrs,fds)==(keys,nf))

def codeblocks(id):return re.findall(r'```sql\n(.*?)```',E[id]['answer'],re.S)
def statements(id):
    src='\n'.join(codeblocks(id))
    src=re.sub(r'--[^\n]*','',src)
    return [s.strip() for s in src.split(';') if s.strip()]
def newdb(context='培训'):
    c=sqlite3.connect(':memory:')
    c.execute('PRAGMA foreign_keys=ON')
    c.create_function('CONCAT',-1,lambda *args:None if any(x is None for x in args) else ''.join(map(str,args)))
    # MySQL source has a trailing COMMIT, but only in-memory data is used here.
    c.executescript(d['contexts'][context].replace('COMMIT;','').replace('CREATE TABLE TRANSACTION(', 'CREATE TABLE `TRANSACTION`('))
    if context=='培训':
        sql=d['contexts']['培训原始数据']
        sql=re.sub(r"STR_TO_DATE\('([^']+)','%d-%M-%Y'\)",lambda m:"'"+__import__('datetime').datetime.strptime(m[1],'%d-%b-%Y').strftime('%Y-%m-%d')+"'",sql)
        c.executescript(sql.replace('COMMIT;',''))
    return c

c=newdb()
query_results={}
def querytest(id,expected,extract=lambda rows:[r[0] for r in rows]):
    ss=statements(id)
    for i,(s,ex) in enumerate(zip(ss,expected),1):
        rows=c.execute(s).fetchall()
        query_results[f'{id}({i})']=rows
        if ex is not None:ok(f'{id}({i}) result and row shape',sorted(extract(rows))==sorted(ex))

querytest('A3-T2',[[1,2,3,5],[1,4,7],[7],None,None])
ok('A3-T2 technology average',abs(c.execute(statements('A3-T2')[4]).fetchone()[0]-650/3)<1e-7)
querytest('A3-T3',[['PARTICIPANT_02 SAMPLE','PARTICIPANT_07 SAMPLE'],[6],None,None,[8]])
rows=c.execute(statements('A3-T3')[2]).fetchall();ok('A3-T3 enrolment zero included',next(r for r in rows if r[0]==11)[2]==0)
rows=c.execute(statements('A3-T3')[3]).fetchall();ok('A3-T3 trainer zero included',next(r for r in rows if r[0]==8)[2]==0)
querytest('A4-T1',[[1,2,5,7],[1,4,9],[1,7],None,[1,4,7,9]])
qmax=c.execute(statements('A4-T1')[3]).fetchall()
ok('A4-T1 correlated maxima retains equal EXCEL levels',[(r[0],r[3]) for r in qmax if r[2]=='EXCEL']==[(10,5)])
c.execute("INSERT INTO Qualification VALUES (11,'EXCEL',5,2026)")
qmax=c.execute(statements('A4-T1')[3]).fetchall();ok('A4-T1 newly introduced tie retained',{r[0] for r in qmax if r[2]=='EXCEL'}=={10,11})
c.execute("DELETE FROM Qualification WHERE participantNo=11")

st=statements('A4-T2')
rows=c.execute(st[0]).fetchall();query_results['A4-T2(1)']=rows
ok('A4-T2 CTE includes cancelled enrolment',sorted(r[0] for r in rows)==[1,2,4,7,8,12])
for s in st[1:6]:
    rows=c.execute(s).fetchall()
    if s.startswith('SELECT workshopNo'):ok('A4-T2 view dependency query result',sorted(r[0] for r in rows)==[1,6])
querytest('S11',[[4,8,12],[],[7,8],None])
querytest('S12',[[1,1,4],None,None])
rows=c.execute(statements('S12')[0]).fetchall();ok('S12 unordered pairs no reverse duplicates',set(rows)=={(1,4,'SYDNEY'),(1,7,'SYDNEY'),(4,7,'SYDNEY')})
querytest('S13',[[],None])
rows=c.execute(statements('S13')[1]).fetchall();ok('S13 independent counts prevent join multiplication',next(r for r in rows if r[0]==3)==(3,4,2) and next(r for r in rows if r[0]==8)==(8,2,0))
c.execute("DELETE FROM WorkshopTrainer WHERE workshopNo IN (1,2,7)")
c.execute("DELETE FROM Requirement WHERE workshopNo IN (1,2,7)")
c.execute("DELETE FROM Enrolment WHERE workshopNo IN (1,2,7)")
c.execute("DELETE FROM Workshop WHERE category='TECHNOLOGY'")
ok('S13 every condition handles empty TECHNOLOGY set',len(c.execute(statements('S13')[0]).fetchall())==12)

# DML checks use fresh in-memory fixtures, with foreign keys active. MySQL-only
# ALTER/GRANT syntax is not represented as SQLite execution evidence.
c=newdb();s=statements('A3-T1')
for sql in s[3:]:c.execute(sql)
ok('A3-T1 DML keeps FK valid and removes only participant10',c.execute('SELECT COUNT(*) FROM Participant').fetchone()[0]==11 and c.execute('SELECT COUNT(*) FROM Participant WHERE participantNo=10').fetchone()[0]==0)
ok('A3-T1 added parent and 2 requirements',c.execute('SELECT COUNT(*) FROM Requirement WHERE workshopNo=9').fetchone()[0]==2)
ok('A3-T1 participant3 levels increased',sorted(r[0] for r in c.execute('SELECT qlevel FROM Qualification WHERE participantNo=3'))==[4,5])
c=newdb();ss=statements('A4-T2')
sql=next(s for s in ss if s.startswith('UPDATE Workshop'))
c.execute(sql);ok('A4-T2 capacity increment targets assignment counts',dict(c.execute('SELECT workshopNo,capacity FROM Workshop'))=={1:40,2:35,3:60,4:45,5:30,6:60,7:45,8:50})
for s in ss:
    if s.startswith('DELETE FROM'):c.execute(s)
ok('A4-T2 child-first deletion keeps FK valid',sorted(r[0] for r in c.execute('SELECT workshopNo FROM Workshop'))==[1,2,3,5,6,7])

# New lecture queries: independent fixtures keep NULL and zero-match cases.
def fixture(name):
    c=sqlite3.connect(':memory:');c.execute('PRAGMA foreign_keys=ON')
    c.create_function('CONCAT',-1,lambda *x:''.join(map(str,x)))
    c.create_function('DATEDIFF',2,lambda end,start:(datetime.date.fromisoformat(end)-datetime.date.fromisoformat(start)).days)
    c.executescript(bank['contexts'][name]['sql']);c.executescript(bank['contexts'][name].get('data',''))
    return c
c=fixture('lecture')
for i,s in enumerate(statements('L01'),1):
    # MySQL CURRENT_DATE() is CURRENT_DATE in SQLite; DATEDIFF is a test UDF.
    rows=c.execute(s.replace('CURRENT_DATE()','CURRENT_DATE')).fetchall();query_results[f'L01({i})']=rows
expected=[['BIOLOGY','MATHEMATICS','PHYSICS'],[('PHY','Mechanics'),('PHY','Waves'),('MAT','Calculus'),('MAT','Algebra'),('GEN','Unassigned')],None,[(35,)],[(20,)]]
for i,ex in enumerate(expected,1):
    rows=query_results[f'L01({i})'];ok(f'L01({i}) value and shape',i==3 or sorted(rows if i>1 else [r[0] for r in rows])==sorted(ex))
ok('L01 calculated budget including NULL convention',sorted(r[-1] for r in query_results['L01(3)'])==[0,550,1100])
ok('L01 date difference is dynamic in database timezone',query_results['L01(6)'][0][0]==(datetime.date.fromisoformat(c.execute('SELECT CURRENT_DATE').fetchone()[0])-datetime.date(2001,1,1)).days)
for id,expected in [('L02',[[(6,)],[(12,)]]),('L03',[[(None,)]]),('L08',[None,None,None])]:
    for i,(s,ex) in enumerate(zip(statements(id),expected),1):
        rows=c.execute(s).fetchall();query_results[f'{id}({i})']=rows
        if ex is not None:ok(f'{id}({i}) correct result',rows==ex)
ok('LEFT JOIN preserves department without courses',('Biology',None) in query_results['L08(1)'])
ok('RIGHT JOIN preserves course without department',(None,'Unassigned') in query_results['L08(2)'])
ok('FULL JOIN emulation preserves both unmatched sides',len(query_results['L08(3)'])==6 and ('Biology',None) in query_results['L08(3)'] and (None,'Unassigned') in query_results['L08(3)'])
ok('Source NOT IN example is broken by NULL',c.execute('SELECT chair FROM DEPARTMENT WHERE name NOT IN (SELECT offered_by FROM COURSE)').fetchall()==[])
ok('SELECT budget does not mutate table',dict(c.execute('SELECT name,budget FROM DEPARTMENT'))['Mathematics'] is None)
c=fixture('employee')
for i,ex in enumerate([[('STAFF_20',)],[('STAFF_60',),('STAFF_70',)]],1):
    rows=c.execute(statements('L09')[i-1]).fetchall();query_results[f'L09({i})']=rows;ok(f'L09({i}) role direction',sorted(rows)==sorted(ex))

# Transport constraints retained: the capacity question is valid and empty.
c=newdb('运输')
c.executescript("""INSERT INTO EMPLOYEE VALUES(1,'DRIVER_A','SAMPLE',NULL),(2,'DRIVER_B','SAMPLE',NULL);
INSERT INTO DRIVER VALUES(1,123,'ON LEAVE'),(2,124,'BUSY');
INSERT INTO TRUCK VALUES('NEW',99,100,'AVAILABLE'),('USED',50,100,'USED');
INSERT INTO TRIP VALUES(25,123,'USED','2026-01-01'),(36,124,'USED','2026-01-01'),(20,123,'USED','2026-01-02'),(26,123,'USED','2026-01-03');
INSERT INTO TRIPLEG VALUES(25,1,'Sydney','Adelaide'),(25,2,'Adelaide','Darwin'),(25,3,'Darwin','Perth'),(36,1,'A','B'),(36,2,'B','C'),(36,3,'C','D'),(20,1,'Adelaide','Sydney'),(20,2,'Sydney','Darwin');""")
ss=statements('M1-Q3')
for i,s in enumerate(ss,1):query_results[f'M1-Q3({i})']=c.execute(s).fetchall()
ok('Capacity original CHECK versus question conflict',query_results['M1-Q3(1)']==[])
try:c.execute("INSERT INTO TRUCK VALUES('BAD',100,100,'AVAILABLE')");raise AssertionError('CHECK did not reject')
except sqlite3.IntegrityError:ok('Capacity CHECK excludes boundary 100')
ok('On-leave driver names',query_results['M1-Q3(2)']==[('DRIVER_A','SAMPLE')])
ok('Truck never used is preserved',query_results['M1-Q3(3)']==[('NEW',)])
ok('Trip count counts trips rather than legs',query_results['M1-Q3(4)']==[('USED',4)])
sql=statements('M1-Q4');
for s in sql[:2]:c.execute(s)
c.execute("INSERT INTO SKILL VALUES ('SQL','SQL')")
ok('Skills can exist without a driver',c.execute('SELECT COUNT(*) FROM SKILL').fetchone()[0]==1)
for s in sql[2:]:
    # DATE_ADD is a MySQL function: only adapt that one expression.
    s=re.sub(r'DATE_ADD\(TDATE,\s*INTERVAL 1 DAY\)',"date(TDATE,'+1 day')",s,flags=re.I)
    c.execute(s)
ok('Trip36 retains leg1 only',c.execute('SELECT LEGNUM FROM TRIPLEG WHERE TNUM=36').fetchall()==[(1,)])
ok('Trip26 advances one day',c.execute('SELECT TDATE FROM TRIP WHERE TNUM=26').fetchone()==('2026-01-04',))
ok('Trip25 returns from Perth to Sydney',c.execute('SELECT DEPARTURE,DESTINATION FROM TRIPLEG WHERE TNUM=25 AND LEGNUM=4').fetchone()==('Perth','Sydney'))
ok('Trip20 remains continuous',c.execute('SELECT DESTINATION FROM TRIPLEG WHERE TNUM=20 AND LEGNUM=1').fetchone()==('Perth',) and c.execute('SELECT DEPARTURE FROM TRIPLEG WHERE TNUM=20 AND LEGNUM=2').fetchone()==('Perth',))
ss=statements('M1-Q6');c.execute(ss[0]);ok('MESSAGE excludes trucks with 100 or fewer trips',c.execute('SELECT * FROM MESSAGE').fetchall()==[])
for n in range(1000,1096):c.execute("INSERT INTO TRIP VALUES (?,123,'USED',?)",(n,f'{2020+(n-1000)//365}-'+f'{1+((n-1000)//28)%12:02d}-'+f'{1+(n-1000)%28:02d}'))
c.execute('DROP TABLE MESSAGE');c.execute(ss[0]);ok('MESSAGE excludes exact boundary100',c.execute('SELECT * FROM MESSAGE').fetchall()==[])
for n in range(1096,1101):c.execute("INSERT INTO TRIP VALUES (?,123,'USED',?)",(n,f'{2020+(n-1000)//365}-'+f'{1+((n-1000)//28)%12:02d}-'+f'{1+(n-1000)%28:02d}'))
c.execute('DROP TABLE MESSAGE');c.execute(ss[0]);ok('MESSAGE contains count above100',c.execute('SELECT * FROM MESSAGE').fetchall()==[('USED',105)])
rows=c.execute(ss[1]).fetchall();ok('MESSAGE display sentence punctuation',rows==[('Truck USED has been used for 105 trips.',)])

# Bank composite keys and half-open year filters.
c=newdb('银行')
c.executescript("""INSERT INTO BANK VALUES('NAB','AU','Sydney','A',1,'nab.test','EMAIL_TOKEN_12',NULL),('OTHER','AU','Sydney','B',2,'other.test','EMAIL_TOKEN_13',NULL),('EMPTY','AU','Sydney','C',3,'empty.test','EMAIL_TOKEN_06',NULL);
INSERT INTO BRANCH VALUES('NAB','one','AU','Sydney','A',10,NULL),('NAB','two','AU','Sydney','A',11,NULL),('OTHER','one','AU','Sydney','B',20,3);
INSERT INTO ACCOUNT VALUES(1,'NAB',100,'savings'),(1,'OTHER',200,'savings'),(2,'NAB',10,'checking'),(3,'NAB',20,'loan');
INSERT INTO `TRANSACTION` VALUES(1,'OTHER','2021-06-01 12:00:00',2,'deposit'),(2,'NAB','2021-01-01 00:00:00',1,'deposit'),(3,'NAB','2022-01-01 00:00:00',1,'deposit'),(1,'NAB','2019-12-31 23:59:59',1,'deposit');""")
ss=statements('M2-Q3')
for i,s in enumerate(ss[:3],1):query_results[f'M2-Q3({i})']=c.execute(s).fetchall()
ok('Bank count includes zero branch bank',('EMPTY',0) in query_results['M2-Q3(1)'])
ok('Accounts matched by bank and number and half-open date',sorted(query_results['M2-Q3(2)'])==[(1,100),(3,20)])
ok('EXISTS bank with two unknown branches once',query_results['M2-Q3(3)']==[('NAB','EMAIL_TOKEN_12')])
c.execute(ss[3].replace('BIGINT UNSIGNED','INTEGER'));c.execute(ss[4]);ok('Transaction totals initialized including zero',sorted(c.execute('SELECT account_num,bank_name,total_transactions FROM ACCOUNT'))==[(1,'NAB',1),(1,'OTHER',1),(2,'NAB',1),(3,'NAB',1)])
c.execute(ss[5]);ok('Only 2019 transaction deleted',c.execute("SELECT COUNT(*) FROM `TRANSACTION` WHERE tr_date_time<'2020-01-01'").fetchone()[0]==0 and c.execute('SELECT COUNT(*) FROM `TRANSACTION`').fetchone()[0]==3)

# Referential actions execute in SQLite too; MySQL TRUNCATE is not simulated.
c=sqlite3.connect(':memory:');c.execute('PRAGMA foreign_keys=ON');l04=statements('L04')
for s in l04[:5]:c.execute(s.replace(' ENGINE=InnoDB',''))
ok('ON UPDATE CASCADE propagates key',c.execute('SELECT * FROM PracticeChild').fetchall()==[(101,2,2)])
c.execute(l04[6]);ok('ON DELETE CASCADE deletes child',c.execute('SELECT * FROM PracticeChild').fetchall()==[])

more_nf=[('L07(1)','ABC',[('AB','C'),('C','B'),('C','A')],['AB','C'],'BCNF'),('L07(2)','ABCD',[('A','B'),('B','D'),('C','B')],['AC'],'1NF'),('L07(3)','ABCD',[('AB','C'),('C','D'),('D','A'),('D','B')],['AB','C','D'],'BCNF')]
for label,attrs,fds,keys,nf in more_nf:ok(label+' exhaustive minimal keys and F+ normal forms',analyse(attrs,fds)==(keys,nf))
def projections_join(attrs,rows,parts):
    out=[{}]
    for part in parts:
        projection=[dict(zip(part,r)) for r in {tuple(row[attrs.index(a)] for a in part) for row in rows}]
        out=[dict(left,**right) for left in out for right in projection if all(left[a]==right[a] for a in left.keys()&right.keys())]
    return {tuple(r[a] for a in attrs) for r in out}
abc=[('a1','b','c1'),('a2','b','c2')];abcd=[('a1','b','c1','d'),('a2','b','c2','d')]
for label,attrs,rows,parts in [('p9','ABC',abc,['AB','CB']),('p11','ABC',abc,['AB','BC']),('p15','ABCD',abcd,['AB','BC','BD'])]:
    result=projections_join(attrs,rows,parts);ok(label+' source decomposition counterexample has spurious tuples',len(result)==4 and len(rows)==2)
for label,attrs,rows,parts in [('p9 corrected','ABC',abc,['CB','AC']),('p11 corrected','ABC',abc,['AB','AC']),('p15 corrected','ABCD',abcd,['AC','AB','BD'])]:ok(label+' retains original pairs',projections_join(attrs,rows,parts)==set(rows))

# Completeness, English questions, links and private-path hygiene.
ok('54 source blocks, 48 unique, 158 subquestions',len(E)==54 and sum(not q['canonical'] for q in E.values())==48 and sum(len(q['parts']) for q in E.values())==158)
for q in E.values():
    ok(q['id']+' detailed analysis for every part',bool(q['canonical']) or all(p['goal'] and len(p['steps'])>=3 and p['check'] and p['pitfall'] for p in q['parts']))
    ok(q['id']+' question is English',not re.search('[\u4e00-\u9fff]',q['question']))
    for image in re.findall(r'!\[[^\]]*\]\(([^)]+)\)',q['question']):ok(q['id']+' original diagram exists',(ROOT/image).is_file())
ok('Six primary areas covered',{'Conceptual','Logical','Normalization','SELECT','DDL/DML','Access'}<=set(c['area'] for c in bank['coverage']))
ok('Auditing and concurrency visibly extended',all(E[id]['priority']=='extension' for id in ['M2-Q4','M2-Q6']))
for i in range(1,7):ok('Mock3 duplicate source links to canonical question '+str(i),E[f'M3-Q{i}']['canonical']==f'M1-Q{i}' and f'#m1-q{i}' in E[f'M3-Q{i}']['question'])
manifest=json.loads((ROOT/'tests/source-manifest.json').read_text())
for row in manifest['english_questions']:ok(row['id']+' anonymized edition fingerprint',hashlib.sha256(E[row['id']]['question'].encode()).hexdigest()==row['sha256'])
for row in manifest['images']:ok(row['path']+' unchanged original image',hashlib.sha256((ROOT/row['path']).read_bytes()).hexdigest()==row['sha256'])
for p in ROOT.rglob('*'):
    if not p.is_file() or p.suffix not in ['.html','.json','.js','.mjs','.css','.md','.sql','.py']:continue
    src=p.read_text();forbidden='|'.join(['/Us'+'ers/','file'+':/'+'/','plugin'+':/'+'/','/var/'+'folders/']);ok('Portable file '+str(p.relative_to(ROOT)),not re.search(forbidden,src))
html=(ROOT/'index.html').read_text()
ok('Public edition labelled anonymized',bank['publicEdition']['anonymized'])
for q in E.values():
    text=q['question']+'\n'+q['answer']
    for value in re.findall(r"IDENTIFIED BY\s*'([^']*)'",text,re.I):ok(q['id']+' password placeholder',value.startswith('[') and value.endswith(']'))
    ok(q['id']+' no literal email contacts',not re.search(r'\b[A-Za-z0-9_.+-]+@[A-Za-z0-9.-]+\b',text))
for ctx in bank['contexts'].values():
    text=ctx.get('data','')
    ok(ctx['title']+' no email or phone literal',not re.search(r'\b[A-Za-z0-9_.+-]+@[A-Za-z0-9.-]+\b|(?<!\d)0[2-9]\d{8}(?!\d)',text))
ok('No remote scripts or styles',not re.search(r'<script[^>]+src=|<link[^>]+(?:stylesheet|fonts)',html))
embedded=json.loads(re.search(r'const BANK=(.*?);</script>',html,re.S)[1])
ok('Eight full attribute diagrams pre-rendered',sum(q['answerHTML'].count('class="diagram"') for q in embedded['questions'])==8 and all(w in html for w in ['academic_degree_achieved','admission_date','learningObjectives','AuthorID','RoomNumber']))
ok('Answers hidden until tab selection','id="panel-answer" role="tabpanel" aria-labelledby="tab-answer" class="content" hidden' in html)
report={'date':bank['version'],'status':'passed','checks':checks,'check_count':len(checks),'normalization_cases':len(nf_cases)+len(more_nf),'query_results':query_results,'executed_engine':'SQLite in-memory with stated dialect adapters','limitations':['Not a MySQL execution certificate. MySQL 26.7 failed to initialize an isolated temporary instance with SIGSEGV; no existing database was accessed.','MySQL-only ALTER, authentication, GRANT/REVOKE, audit and concurrency statements were statically reviewed with version boundaries; not run against MySQL.','UI DOM tests and HTTPS browser inspection are reported separately; student mastery is not inferred.']}
(ROOT/'tests/results.json').write_text(json.dumps(report,ensure_ascii=False,indent=2))
print(json.dumps({'status':'passed','checks':len(checks),'normalization_cases':report['normalization_cases'],'query_results_recorded':len(query_results)}))

