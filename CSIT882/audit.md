# 2026-11-04 · 题库核查

现有45个任务块扩充为54个：48个去重题目组、158个小题；6个重复来源。新增L01–L09为课件补充或按课件方法编写的练习，不冒充正式模拟题。

## 核查口径

1. 保留三套模拟及Assignment 1–4原英文要求（公开版示例身份、联系值与密码按用户要求匿名化），明确重复映射。
2. 对照老师六个范围逐项查缺，保留来源、页码与扩展边界。
3. 按小题提供目标、推理步骤、核对方法和易错点。
4. 分开报告实际执行、穷举FD推导和MySQL静态复核，学习掌握度仍由独立作答验证。

## E01 · Conceptual answers need complete class boxes

Bank improvement · M1-Q1, M2-Q1, A1-T1, A1-T2, S01, L09

旧页面的关系图只显示类名，attributes和identifiers另在表中，不能直接作为完整UML图复制。

图中补齐attributes、ID标签和qualifiers；医院的自然identifier假设仍单独列出。

## E02 · Use the required relational-schema notation

Bank correction · M1-Q2, M2-Q2, S03, S04

旧答案使用PK:/FK:和解释性CK行，和课件指定的PRIMARY KEY / FOREIGN KEY格式不完全一致。

统一为PRIMARY KEY =、CANDIDATE KEYn =、FOREIGN KEYn = ... REFERENCES ...。可空子类标识按课程CK惯例列出，严格理论差异另说明。

## E03 · Capacity query conflicts with CHECK

Original ambiguity · M1-Q3

题目查询100–500容量，但TRUCK CHECK要求CAPACITY<100。

保留原题和查询；解释在CHECK生效的合法数据上结果为空，不擅自修改容量或查询WEIGHT。

## E04 · Database names and city result shape

Original ambiguity · M1-Q3, M1-Q5

原题一处把transport改写成csit115；城市查询未明确一列名单或两列配对。

数据库名按原文保留；城市两种解释分别给出，不能声称结果等价。

## E05 · Natural identifiers and minimum participation

Original underspecification · M2-Q1, M1-Q1, A1-T2

顾问未明示唯一属性；合同/入院组合唯一性、若干关联下限及must/at most措辞需解释。

保留原题，不添加人工ID；列清本参考设计采用的假设，用户可据老师要求调整。

## E06 · NOT IN with NULL can invalidate an anti-join

Source correction · L03

SELECT (5) p10直接用NOT IN，但COURSE.offered_by允许NULL。子查询出现NULL时，未匹配部门可能变成UNKNOWN而被过滤。

采用相关NOT EXISTS，或在NOT IN子查询排除NULL；加入含未分配课程的测试。

## E07 · Some two-table decompositions are lossy

Source correction · S10, L07

Normalization(3) p9给CB+AB，p11给AB+BC的备选分解，p15给AB+BC+BD；在相应FD下缺少应保留的配对关系，不能仅凭分表都是二元关系判断lossless。

S10使用CB+AC；p11正确选择AB+AC；L07(2)使用AC+AB+BD并说明C→B未局部保持，可加CB保持该FD。提供可检查的spurious-tuples反例。

## E08 · Set operations and SQL restrictions depend on version

Version boundary · L02, M2-Q6

课件的“MySQL不支持INTERSECT”不适用于当前所有版本；原并发SQL还涉及同表子查询UPDATE与事务边界。

保留课堂可兼容IN/NOT EXISTS方法；并发题区分MySQL、Oracle模型和字面执行失败，不给出无条件唯一余额。

[官方参考](https://dev.mysql.com/doc/refman/8.4/en/set-operations.html)

## E09 · GRANT OPTION is scoped and additive

Privilege boundary · M2-Q5, S16

已有banks.* GRANT OPTION时，再授同库view SELECT可能仍可传播；表级REVOKE不覆盖数据库级或role来源。

按连续小题在独立report schema开放受限view；撤权检查所有来源。没有宣称每条GRANT只影响刚列出的权限。

[官方参考](https://dev.mysql.com/doc/refman/8.4/en/grant.html)

## E10 · Separate executed tests from static MySQL review

Validation limit · 

本机MySQL 26.7初始化独立临时实例时SIGSEGV，未连用户现有数据库。

使用内存SQLite验证查询、FK/DML及反例；MySQL专属DDL、权限和并发依官方文档静态核对，不冒称全套MySQL实跑通过。

## 可检查的lossy decomposition反例

以下均使用满足给定FD的原关系。投影后再natural join多出不在原关系中的配对，即spurious tuples。

1. 课件p9：R(A,B,C)={(a1,b,c1),(a2,b,c2)}满足AB→C、C→B。分成AB、CB后，join还会产生(a1,b,c2)、(a2,b,c1)，所以该分解有损。CB+AC满足交集C→CB，可无损。
2. 课件p11：R(A,B,C)={(a1,b,c1),(a2,b,c2)}满足A→B。AB+BC同样产生上述假配对；AB+AC的交集A决定AB，可无损。
3. 课件p15：R(A,B,C,D)={(a1,b,c1,d),(a2,b,c2,d)}满足A→B、B→D、C→B。AB+BC+BD会任意重新配对A与C；AC+AB+BD可无损，但单独不能保持C→B。加上CB投影可保持该FD。

这些结论由tests/validate.py中的投影与join反例验证，不依赖图中红字是否写了normal form。

## 公开版匿名化

题目、答案、数据和测试使用一致代号；不发布原值与代号对应表。题意、数值、日期、NULL位置与结果结构保留。见[匿名化说明](privacy.md)。
