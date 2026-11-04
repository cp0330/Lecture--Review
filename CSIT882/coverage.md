# 考点核查

依据：21Review.pdf p10、Week13 transcript、三套模拟题及Assignment 1–4。六个广义范围不等于固定题序、分值或每类恰好一大题。

| 范围 | 考点 | 对应题目 | 资料依据 |
| --- | --- | --- | --- |
| Conceptual | Classes, attributes and identifiers | M1-Q1, M2-Q1, A1-T1, A1-T2 | Object Data Model pp8–15; A1 pp3–4 |
| Conceptual | Composite and alternative identifiers | M1-Q1, M2-Q1, S02 | Mock1 Q1 employee/name combination; Mock2 Q1 hospital identifiers |
| Conceptual | Multiplicities and role directions | M1-Q1, A1-T2, L09 | Object Data Model associations; A1 p4 |
| Conceptual | Multivalued, optional and derived attributes | M2-Q1, S01, S06 | Object Data Model pp9–15; hospital model |
| Conceptual | Association attributes and repeated events | M2-Q1, S01, S03 | Hospital admission; flight role; Logical Design pp10–12 |
| Conceptual | Local identifiers and qualifiers | M2-Q1, S02, S03 | Hospital buildings/decks/employees; Logical Design pp15–16 |
| Conceptual | Generalization and subtype properties | M1-Q1, A1-T2, S04 | Object Data Model; A1 student subtypes |
| Conceptual | Self-association and role names | L09 | SELECT Statement (3) pp24–31, model instruction added |
| Logical | Primary, candidate and composite foreign keys | M1-Q2, M2-Q2, A2-T1 | Logical Design pp17–19,28–29,42–43 |
| Logical | Multivalued attribute transformation | M2-Q2, A2-T1, S03 | Logical Design pp6–9 |
| Logical | Many-to-many and association attributes | M1-Q2, M2-Q2, A2-T1 | Logical Design pp10–14 |
| Logical | Qualified association transformation | M1-Q2, M2-Q2, A2-T1 | Logical Design pp15–16 |
| Logical | One-to-one merge and nullable identifiers | A2-T1, S04 | Logical Design pp20–21; course-style CK convention distinguished |
| Logical | Superset method | M1-Q2, M2-Q2, A2-T1, S04, L05 | Logical Design pp22–23; required explicitly by original tasks |
| Logical | Subset and association methods（方法补强） | L05 | Logical Design pp24–27; compare methods only when asked |
| Logical | Parent-before-child and classroom schema format | M1-Q2, M2-Q2, A2-T1 | Logical Design pp42–43; Week13 |
| Normalization | Functional dependencies and attribute closure | S05, A4-T4, L07 | lecture B 05–06; A4 Task4 |
| Normalization | All minimal keys and prime attributes | A4-T4, S07, S08, S09, L07 | A4 Task4; lecture B 06,08–09 |
| Normalization | 1NF and repeating groups | S06 | lecture B 07 pp3–4 |
| Normalization | Full and partial dependency; 2NF | A4-T4, S07, S09, L07 | lecture B 07 pp6–15 |
| Normalization | 3NF versus BCNF with justification | A4-T4, S08, L07 | lecture B 08–09; Review p10; Week13 |
| Normalization | Lossless decomposition and dependency preservation（方法补强） | S10, L07 | lecture B 09; extra method depth, not promised exam part |
| SELECT | Projection, filters, Boolean conditions and sorting | M1-Q3, A3-T2, S11 | SELECT (1)–(2); A3 Task2 |
| SELECT | NULL, empty strings and three-valued logic | M2-Q3, S11, L03 | SELECT (2) pp21–22; SELECT (5) p10 |
| SELECT | Row functions, strings, arithmetic and dates | S11, L01 | SELECT (1) pp19,24; trip date update |
| SELECT | COUNT, SUM, AVG and MAX | A3-T2, A3-T3, A4-T1, L01 | SELECT (1) p21; A3/A4 |
| SELECT | GROUP BY and HAVING | M1-Q3, A3-T2, A3-T3 | SELECT (2) pp27–34 |
| SELECT | JOIN and LEFT/RIGHT/FULL OUTER JOIN | A3-T3, M2-Q3, L08 | SELECT (3)–(4), including p18; MySQL full-join emulation |
| SELECT | Self-join and alias roles | S12, L09 | SELECT (3) pp24–31 |
| SELECT | UNION, duplicates, intersection and difference | M1-Q3, S12, L02 | SELECT (2) pp11–14 |
| SELECT | Nested queries, EXISTS and anti-joins | M1-Q3, A4-T1, L03 | SELECT (5); A4 Task1 |
| SELECT | Correlated queries, ties and universal conditions | A4-T1, S13 | SELECT (5); A4 Task1(4)–(5) |
| SELECT | CTE and derived tables | A4-T2, S13 | Views pp3–17; A4 Task2(1) |
| SELECT | View dependencies and drop order | A4-T2 | Views pp18–25; A4 Task2(2) |
| SELECT | Independent counts without join multiplication | S13, A3-T3 | A3 Task3; aggregation grain check |
| DDL/DML | CREATE TABLE and suitable types | A2-T2, A3-T1, M1-Q4 | DDL pp5–14; A2 Task2 |
| DDL/DML | CHECK, UNIQUE, NOT NULL and numeric capacity | A2-T2, A3-T1, S14 | DDL pp7–14; A3 Task1 |
| DDL/DML | ALTER add/drop/modify/rename and constraints | A3-T1, L04 | DDL pp20–26 |
| DDL/DML | INSERT, UPDATE, DELETE and parent/child order | M1-Q4, A2-T2, A3-T1 | DML pp5–17; A2/A3 |
| DDL/DML | CTAS and INSERT SELECT | M1-Q6, A4-T2, S14 | Advanced DDL/DML pp6–10 |
| DDL/DML | Subquery-driven UPDATE and DELETE | M2-Q3, A4-T2 | Advanced DDL/DML pp12–17 |
| DDL/DML | Referential actions CASCADE | L04 | DDL p13; DML p17 |
| DDL/DML | TRUNCATE, COMMIT, ROLLBACK and implicit commit | M1-Q6, S14, L04 | Advanced DDL/DML pp3–4; Data Integrity |
| Access | CREATE/ALTER/DROP USER and database management | M1-Q5, M2-Q5, L06 | Discretionary Access Control pp3–6 |
| Access | Database/table/column scopes and GRANT OPTION | M1-Q5, M2-Q5, A4-T3 | Discretionary Access Control pp13–21 |
| Access | Roles, activation, inheritance and ADMIN OPTION | S15, L06 | Discretionary Access Control pp23–25; MySQL role semantics |
| Access | REVOKE and multiple effective privilege sources | S16, L06 | Discretionary Access Control p13; additive privilege levels |
| Access | Views for restricted rows/columns and summaries | M1-Q5, M2-Q5, A4-T3 | Discretionary Access Control; original view tasks |
| Extension | Statement auditing and concurrency conditions | M2-Q4, M2-Q6 | Original Mock2 Q4/Q6; outside the six independently named final topics |

原始模拟没有Normalization，现由A4-T4、S05–S10和L07覆盖。Mock 1和收到的Mock 3重复，仍保留全部来源。Auditing、Concurrency按扩展保留；其他generalization methods和decomposition不冒充必出的独立小题。
