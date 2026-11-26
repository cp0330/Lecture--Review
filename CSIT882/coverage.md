# 考试范围—题库覆盖关系

11 月 26 日按来源小题新增读题核对。用户确认的复习范围为 Assignment 1–4、Mock 1–3 和 Normalization；原卷和样题提供具体问法。题型起步／自测的配对是本工作台的学习安排。未获得补考卷或教师评分表。下方原矩阵保留近似变式与重复来源映射。

统计单位是“来源题组”和“小题”；重复来源仍分别保留。A29组含100个来源小题；其中去重后23组、79小题。B3组10小题；C24组75小题。总计56组185小题。

| 材料 | 题组 | 小题 | 状态 | 依据／缺口 |
|---|---:|---:|---|---|
| Assignment 1 | 2 | 2 | 已覆盖 | 原PDF全部Task页已读；安装／提交说明保留在原PDF，不当作额外考题。 |
| Assignment 2 | 2 | 7 | 已覆盖 | 原PDF全部Task页已读；安装／提交说明保留在原PDF，不当作额外考题。 |
| Assignment 3 | 3 | 15 | 已覆盖 | 原PDF全部Task页已读；安装／提交说明保留在原PDF，不当作额外考题。 |
| Assignment 4 | 4 | 19 | 已覆盖 | 原PDF全部Task页已读；安装／提交说明保留在原PDF，不当作额外考题。 |
| Mock Examination 1 | 6 | 21 | 已覆盖 | 按转发文字、图及现存原文核对；Mock原始PDF和独立评分表未提供。 |
| Mock Examination 2 | 6 | 15 | 已覆盖 | 按转发文字、图及现存原文核对；Mock原始PDF和独立评分表未提供。 |
| Mock Examination 3 | 6 | 21 | 已覆盖 | 按转发文字、图及现存原文核对；Mock原始PDF和独立评分表未提供。 |

## 逐题对应矩阵

Original Question链接指向[questions.md](./questions.md)中的完整英文题面；全部原文及完整字段同时存在于`bank.json.coverage`，没有补造缺失教师原题。每题的中文翻译与详细教学在工作台同一题号下。

| Source／Original Question | Topic／Question Type | Required Skills | Related Questions | Exam Relevance | Coverage Status |
|---|---|---|---|---|---|
| Mock Examination 1 / [M1-Q1](./questions.md#m1-q1) | Conceptual modelling · 概念图； | Class / attribute / 对象类别与属性；Identifier / 唯一标识；Multiplicity / 关联两端的数量范围；Many-to-many / association attribute / 多对多与关联属性；Generalization / inheritance / 泛化与继承；Multivalued / optional / derived / 多值、可选与可计算属性 | M3-Q1 | A：教师作业／模拟原题：完整保留 | 已覆盖 |
| Mock Examination 1 / [M1-Q2](./questions.md#m1-q2) | Logical design · 关系模式； | Primary / candidate / foreign key / 主键、候选键与外键；Qualified association / 用局部值限定的关联；Many-to-many / association attribute / 多对多与关联属性；Superset method / 超集法实现泛化 | M3-Q2 | A：教师作业／模拟原题：完整保留 | 已覆盖 |
| Mock Examination 1 / [M1-Q3](./questions.md#m1-q3) | SQL Fundamentals · 基础查询；Joins · 连接与零匹配, Nested queries · 嵌套查询, Aggregate queries · 分组统计 | SELECT / projection / 选择输出列；WHERE / predicate / 逐行筛选条件；BETWEEN / date range / 区间筛选；JOIN / join condition / 连接及连接条件；Nested query / 嵌套查询；EXISTS / NOT EXISTS / 存在与不存在；COUNT / grain / 计数与计数单位；GROUP BY / aggregate / 分组与聚合；UNION / UNION ALL / 合并结果集；DISTINCT / 删除重复结果行 | M3-Q3 | A：教师作业／模拟原题：完整保留 | 已覆盖 |
| Mock Examination 1 / [M1-Q4](./questions.md#m1-q4) | DDL / DML · 结构与数据操作； | Primary / candidate / foreign key / 主键、候选键与外键；CHECK / UNIQUE / NOT NULL / 值限制、唯一与必填；DECIMAL(p,s) / 精确数值的位数；WHERE / predicate / 逐行筛选条件；INSERT / UPDATE / DELETE / 增加、修改和删除行 | M3-Q4 | A：教师作业／模拟原题：完整保留 | 已覆盖 |
| Mock Examination 1 / [M1-Q5](./questions.md#m1-q5) | Access control · 权限； | CREATE USER / account host / 创建用户及主机范围；USE / SOURCE / client commands / 选库与处理SQL脚本；GRANT / privilege scope / 授予权限与对象范围；WITH GRANT OPTION / 权限转授；INSERT / UPDATE / DELETE / 增加、修改和删除行；SELECT / projection / 选择输出列；JOIN / join condition / 连接及连接条件；COUNT / grain / 计数与计数单位；View / dependency / 视图与依赖；SQL SECURITY DEFINER / 由视图定义者权限读取底表；LEFT JOIN / 保留左侧未匹配行的连接；GROUP BY / aggregate / 分组与聚合 | M3-Q5 | A：教师作业／模拟原题：完整保留 | 已覆盖 |
| Mock Examination 1 / [M1-Q6](./questions.md#m1-q6) | DDL / DML · 结构与数据操作； | SELECT / projection / 选择输出列；COUNT / grain / 计数与计数单位；GROUP BY / aggregate / 分组与聚合；HAVING / 聚合后的筛选；Primary / candidate / foreign key / 主键、候选键与外键；CHECK / UNIQUE / NOT NULL / 值限制、唯一与必填；CONCAT / column alias / 合成姓名与输出列别名；COMMIT / ROLLBACK / 提交与回滚；ALTER TABLE / 修改表结构；INSERT / UPDATE / DELETE / 增加、修改和删除行 | M3-Q6 | A：教师作业／模拟原题：完整保留 | 已覆盖 |
| Mock Examination 2 / [M2-Q1](./questions.md#m2-q1) | Conceptual modelling · 概念图； | Class / attribute / 对象类别与属性；Identifier / 唯一标识；Multiplicity / 关联两端的数量范围；Many-to-many / association attribute / 多对多与关联属性；Generalization / inheritance / 泛化与继承；Multivalued / optional / derived / 多值、可选与可计算属性；Qualified association / 用局部值限定的关联 | — | A：教师作业／模拟原题：完整保留 | 已覆盖 |
| Mock Examination 2 / [M2-Q2](./questions.md#m2-q2) | Logical design · 关系模式； | Primary / candidate / foreign key / 主键、候选键与外键；Qualified association / 用局部值限定的关联；Many-to-many / association attribute / 多对多与关联属性；Superset method / 超集法实现泛化；Multivalued / optional / derived / 多值、可选与可计算属性 | — | A：教师作业／模拟原题：完整保留 | 已覆盖 |
| Mock Examination 2 / [M2-Q3](./questions.md#m2-q3) | Joins · 连接与零匹配；Nested queries · 嵌套查询, DDL / DML · 结构与数据操作 | SELECT / projection / 选择输出列；JOIN / join condition / 连接及连接条件；COUNT / grain / 计数与计数单位；LEFT JOIN / 保留左侧未匹配行的连接；GROUP BY / aggregate / 分组与聚合；WHERE / predicate / 逐行筛选条件；Nested query / 嵌套查询；EXISTS / NOT EXISTS / 存在与不存在；NULL / IS NULL / 未知值及空值判断；INSERT / UPDATE / DELETE / 增加、修改和删除行；ALTER TABLE / 修改表结构；DECIMAL(p,s) / 精确数值的位数；CHECK / UNIQUE / NOT NULL / 值限制、唯一与必填；Primary / candidate / foreign key / 主键、候选键与外键 | — | A：教师作业／模拟原题：完整保留 | 已覆盖 |
| Mock Examination 2 / [M2-Q4](./questions.md#m2-q4) | Auditing · 审计原题； | Statement auditing / 语句活动审计；GRANT / privilege scope / 授予权限与对象范围；SELECT / projection / 选择输出列；WHERE / predicate / 逐行筛选条件；INSERT / UPDATE / DELETE / 增加、修改和删除行；Primary / candidate / foreign key / 主键、候选键与外键；ORDER BY / 结果排序；CHECK / UNIQUE / NOT NULL / 值限制、唯一与必填 | — | A：教师作业／模拟原题：完整保留 | 已覆盖 |
| Mock Examination 2 / [M2-Q5](./questions.md#m2-q5) | Access control · 权限； | USE / SOURCE / client commands / 选库与处理SQL脚本；CREATE USER / account host / 创建用户及主机范围；GRANT / privilege scope / 授予权限与对象范围；WITH GRANT OPTION / 权限转授；View / dependency / 视图与依赖；SQL SECURITY DEFINER / 由视图定义者权限读取底表；SELECT / projection / 选择输出列；WHERE / predicate / 逐行筛选条件 | — | A：教师作业／模拟原题：完整保留 | 已覆盖 |
| Mock Examination 2 / [M2-Q6](./questions.md#m2-q6) | Transactions · 并发原题； | Isolation level / row lock / 隔离级别与行锁；COMMIT / ROLLBACK / 提交与回滚；WHERE / predicate / 逐行筛选条件；INSERT / UPDATE / DELETE / 增加、修改和删除行；JOIN / join condition / 连接及连接条件 | — | A：教师作业／模拟原题：完整保留 | 已覆盖 |
| Mock Examination 3 / [M3-Q1](./questions.md#m3-q1) | Conceptual modelling · 概念图； | Class / attribute / 对象类别与属性；Identifier / 唯一标识；Multiplicity / 关联两端的数量范围；Many-to-many / association attribute / 多对多与关联属性；Generalization / inheritance / 泛化与继承；Multivalued / optional / derived / 多值、可选与可计算属性 | M1-Q1 | A：教师作业／模拟原题：完整保留 | 已覆盖 |
| Mock Examination 3 / [M3-Q2](./questions.md#m3-q2) | Logical design · 关系模式； | Primary / candidate / foreign key / 主键、候选键与外键；Qualified association / 用局部值限定的关联；Many-to-many / association attribute / 多对多与关联属性；Superset method / 超集法实现泛化 | M1-Q2 | A：教师作业／模拟原题：完整保留 | 已覆盖 |
| Mock Examination 3 / [M3-Q3](./questions.md#m3-q3) | SQL Fundamentals · 基础查询；Joins · 连接与零匹配, Nested queries · 嵌套查询, Aggregate queries · 分组统计 | SELECT / projection / 选择输出列；WHERE / predicate / 逐行筛选条件；BETWEEN / date range / 区间筛选；JOIN / join condition / 连接及连接条件；Nested query / 嵌套查询；EXISTS / NOT EXISTS / 存在与不存在；COUNT / grain / 计数与计数单位；GROUP BY / aggregate / 分组与聚合；UNION / UNION ALL / 合并结果集；DISTINCT / 删除重复结果行 | M1-Q3 | A：教师作业／模拟原题：完整保留 | 已覆盖 |
| Mock Examination 3 / [M3-Q4](./questions.md#m3-q4) | DDL / DML · 结构与数据操作； | Primary / candidate / foreign key / 主键、候选键与外键；CHECK / UNIQUE / NOT NULL / 值限制、唯一与必填；DECIMAL(p,s) / 精确数值的位数；WHERE / predicate / 逐行筛选条件；INSERT / UPDATE / DELETE / 增加、修改和删除行 | M1-Q4 | A：教师作业／模拟原题：完整保留 | 已覆盖 |
| Mock Examination 3 / [M3-Q5](./questions.md#m3-q5) | Access control · 权限； | CREATE USER / account host / 创建用户及主机范围；USE / SOURCE / client commands / 选库与处理SQL脚本；GRANT / privilege scope / 授予权限与对象范围；WITH GRANT OPTION / 权限转授；INSERT / UPDATE / DELETE / 增加、修改和删除行；SELECT / projection / 选择输出列；JOIN / join condition / 连接及连接条件；COUNT / grain / 计数与计数单位；View / dependency / 视图与依赖；SQL SECURITY DEFINER / 由视图定义者权限读取底表；LEFT JOIN / 保留左侧未匹配行的连接；GROUP BY / aggregate / 分组与聚合 | M1-Q5 | A：教师作业／模拟原题：完整保留 | 已覆盖 |
| Mock Examination 3 / [M3-Q6](./questions.md#m3-q6) | DDL / DML · 结构与数据操作； | SELECT / projection / 选择输出列；COUNT / grain / 计数与计数单位；GROUP BY / aggregate / 分组与聚合；HAVING / 聚合后的筛选；Primary / candidate / foreign key / 主键、候选键与外键；CHECK / UNIQUE / NOT NULL / 值限制、唯一与必填；CONCAT / column alias / 合成姓名与输出列别名；COMMIT / ROLLBACK / 提交与回滚；ALTER TABLE / 修改表结构；INSERT / UPDATE / DELETE / 增加、修改和删除行 | M1-Q6 | A：教师作业／模拟原题：完整保留 | 已覆盖 |
| Assignment 1 / [A1-T1](./questions.md#a1-t1) | Conceptual modelling · 概念图； | Class / attribute / 对象类别与属性；Identifier / 唯一标识；Multiplicity / 关联两端的数量范围；Many-to-many / association attribute / 多对多与关联属性 | — | A：教师作业／模拟原题：完整保留 | 已覆盖 |
| Assignment 1 / [A1-T2](./questions.md#a1-t2) | Conceptual modelling · 概念图； | Class / attribute / 对象类别与属性；Identifier / 唯一标识；Multiplicity / 关联两端的数量范围；Many-to-many / association attribute / 多对多与关联属性；Generalization / inheritance / 泛化与继承 | — | A：教师作业／模拟原题：完整保留 | 已覆盖 |
| Assignment 2 / [A2-T1](./questions.md#a2-t1) | Logical design · 关系模式； | Primary / candidate / foreign key / 主键、候选键与外键；Qualified association / 用局部值限定的关联；Many-to-many / association attribute / 多对多与关联属性；Superset method / 超集法实现泛化；Multivalued / optional / derived / 多值、可选与可计算属性 | — | A：教师作业／模拟原题：完整保留 | 已覆盖 |
| Assignment 2 / [A2-T2](./questions.md#a2-t2) | DDL / DML · 结构与数据操作； | Primary / candidate / foreign key / 主键、候选键与外键；CHECK / UNIQUE / NOT NULL / 值限制、唯一与必填；DECIMAL(p,s) / 精确数值的位数；ALTER TABLE / 修改表结构；INSERT / UPDATE / DELETE / 增加、修改和删除行；WHERE / predicate / 逐行筛选条件；JOIN / join condition / 连接及连接条件 | — | A：教师作业／模拟原题：完整保留 | 已覆盖 |
| Assignment 3 / [A3-T1](./questions.md#a3-t1) | DDL / DML · 结构与数据操作； | ALTER TABLE / 修改表结构；DECIMAL(p,s) / 精确数值的位数；CHECK / UNIQUE / NOT NULL / 值限制、唯一与必填；INSERT / UPDATE / DELETE / 增加、修改和删除行；WHERE / predicate / 逐行筛选条件；Primary / candidate / foreign key / 主键、候选键与外键 | — | A：教师作业／模拟原题：完整保留 | 已覆盖 |
| Assignment 3 / [A3-T2](./questions.md#a3-t2) | SQL Fundamentals · 基础查询；Aggregate queries · 分组统计 | SELECT / projection / 选择输出列；WHERE / predicate / 逐行筛选条件；BETWEEN / date range / 区间筛选；CONCAT / column alias / 合成姓名与输出列别名；COUNT / grain / 计数与计数单位；GROUP BY / aggregate / 分组与聚合；HAVING / 聚合后的筛选；ORDER BY / 结果排序；AVG / MAX / SUM / 对选定行计算统计值 | — | A：教师作业／模拟原题：完整保留 | 已覆盖 |
| Assignment 3 / [A3-T3](./questions.md#a3-t3) | Joins · 连接与零匹配；Aggregate queries · 分组统计 | SELECT / projection / 选择输出列；JOIN / join condition / 连接及连接条件；COUNT / grain / 计数与计数单位；CONCAT / column alias / 合成姓名与输出列别名；GROUP BY / aggregate / 分组与聚合；HAVING / 聚合后的筛选；ORDER BY / 结果排序；WHERE / predicate / 逐行筛选条件；LEFT JOIN / 保留左侧未匹配行的连接；NULL / IS NULL / 未知值及空值判断 | — | A：教师作业／模拟原题：完整保留 | 已覆盖 |
| Assignment 4 / [A4-T1](./questions.md#a4-t1) | Nested queries · 嵌套查询；Correlated queries · 相关子查询 | SELECT / projection / 选择输出列；WHERE / predicate / 逐行筛选条件；AVG / MAX / SUM / 对选定行计算统计值；Nested query / 嵌套查询；CONCAT / column alias / 合成姓名与输出列别名；COUNT / grain / 计数与计数单位；GROUP BY / aggregate / 分组与聚合；HAVING / 聚合后的筛选；JOIN / join condition / 连接及连接条件；MAX / ties / 最大值与并列；Correlated subquery / 相关子查询；ORDER BY / 结果排序；EXISTS / NOT EXISTS / 存在与不存在 | — | A：教师作业／模拟原题：完整保留 | 已覆盖 |
| Assignment 4 / [A4-T2](./questions.md#a4-t2) | WITH / CTE · 命名中间结果；Views · 视图, DDL / DML · 结构与数据操作 | SELECT / projection / 选择输出列；WHERE / predicate / 逐行筛选条件；JOIN / join condition / 连接及连接条件；CONCAT / column alias / 合成姓名与输出列别名；WITH / CTE / 命名公共表表达式；DISTINCT / 删除重复结果行；View / dependency / 视图与依赖；SQL SECURITY DEFINER / 由视图定义者权限读取底表；COUNT / grain / 计数与计数单位；LEFT JOIN / 保留左侧未匹配行的连接；GROUP BY / aggregate / 分组与聚合；Primary / candidate / foreign key / 主键、候选键与外键；CHECK / UNIQUE / NOT NULL / 值限制、唯一与必填；ALTER TABLE / 修改表结构；DECIMAL(p,s) / 精确数值的位数；INSERT / UPDATE / DELETE / 增加、修改和删除行；HAVING / 聚合后的筛选 | — | A：教师作业／模拟原题：完整保留 | 已覆盖 |
| Assignment 4 / [A4-T3](./questions.md#a4-t3) | Access control · 权限； | CREATE USER / account host / 创建用户及主机范围；GRANT / privilege scope / 授予权限与对象范围；WITH GRANT OPTION / 权限转授；INSERT / UPDATE / DELETE / 增加、修改和删除行；Primary / candidate / foreign key / 主键、候选键与外键；SELECT / projection / 选择输出列；JOIN / join condition / 连接及连接条件；COUNT / grain / 计数与计数单位；CONCAT / column alias / 合成姓名与输出列别名；View / dependency / 视图与依赖；SQL SECURITY DEFINER / 由视图定义者权限读取底表；LEFT JOIN / 保留左侧未匹配行的连接；GROUP BY / aggregate / 分组与聚合 | — | A：教师作业／模拟原题：完整保留 | 已覆盖 |
| Assignment 4 / [A4-T4](./questions.md#a4-t4) | Normalization · 范式证明； | Functional dependency / 函数依赖；Attribute closure X⁺ / 属性闭包；Superkey / candidate key / 超键与候选键；Prime / non-prime attribute / 主属性与非主属性；Partial dependency / 2NF / 部分依赖与第二范式；Transitive dependency / 3NF / 传递依赖与第三范式；BCNF / Boyce–Codd范式 | — | A：教师作业／模拟原题：完整保留 | 已覆盖 |
| Supplementary practice / [S01](./questions.md#s01) | Conceptual modelling · 概念图； | Class / attribute / 对象类别与属性；Identifier / 唯一标识；Multiplicity / 关联两端的数量范围；Many-to-many / association attribute / 多对多与关联属性 | — | C：按需参考；不进入主要练习 | 按需参考 |
| Supplementary practice / [S02](./questions.md#s02) | Conceptual modelling · 概念图； | Class / attribute / 对象类别与属性；Identifier / 唯一标识；Multiplicity / 关联两端的数量范围；Many-to-many / association attribute / 多对多与关联属性 | — | C：按需参考；不进入主要练习 | 按需参考 |
| Supplementary practice / [S03](./questions.md#s03) | Logical design · 关系模式； | Primary / candidate / foreign key / 主键、候选键与外键；Qualified association / 用局部值限定的关联；Many-to-many / association attribute / 多对多与关联属性；Superset method / 超集法实现泛化 | — | C：按需参考；不进入主要练习 | 按需参考 |
| Supplementary practice / [S04](./questions.md#s04) | Logical design · 关系模式； | Primary / candidate / foreign key / 主键、候选键与外键；Qualified association / 用局部值限定的关联；Many-to-many / association attribute / 多对多与关联属性；Superset method / 超集法实现泛化 | — | C：按需参考；不进入主要练习 | 按需参考 |
| Supplementary practice / [S05](./questions.md#s05) | Normalization · 范式证明； | Functional dependency / 函数依赖；Attribute closure X⁺ / 属性闭包；Superkey / candidate key / 超键与候选键；Prime / non-prime attribute / 主属性与非主属性；Partial dependency / 2NF / 部分依赖与第二范式；Transitive dependency / 3NF / 传递依赖与第三范式；BCNF / Boyce–Codd范式 | — | C：按需参考；不进入主要练习 | 按需参考 |
| Supplementary practice / [S06](./questions.md#s06) | Normalization · 范式证明； | Functional dependency / 函数依赖；Attribute closure X⁺ / 属性闭包；Superkey / candidate key / 超键与候选键；Prime / non-prime attribute / 主属性与非主属性；Partial dependency / 2NF / 部分依赖与第二范式；Transitive dependency / 3NF / 传递依赖与第三范式；BCNF / Boyce–Codd范式 | — | C：按需参考；不进入主要练习 | 按需参考 |
| Supplementary practice / [S07](./questions.md#s07) | Normalization · 范式证明； | Functional dependency / 函数依赖；Attribute closure X⁺ / 属性闭包；Superkey / candidate key / 超键与候选键；Prime / non-prime attribute / 主属性与非主属性；Partial dependency / 2NF / 部分依赖与第二范式；Transitive dependency / 3NF / 传递依赖与第三范式；BCNF / Boyce–Codd范式 | A4-T4 | B：直接改变核心题的条件或FD，检验迁移 | 已覆盖 |
| Supplementary practice / [S08](./questions.md#s08) | Normalization · 范式证明； | Functional dependency / 函数依赖；Attribute closure X⁺ / 属性闭包；Superkey / candidate key / 超键与候选键；Prime / non-prime attribute / 主属性与非主属性；Partial dependency / 2NF / 部分依赖与第二范式；Transitive dependency / 3NF / 传递依赖与第三范式；BCNF / Boyce–Codd范式 | — | C：按需参考；不进入主要练习 | 按需参考 |
| Supplementary practice / [S09](./questions.md#s09) | Normalization · 范式证明； | Functional dependency / 函数依赖；Attribute closure X⁺ / 属性闭包；Superkey / candidate key / 超键与候选键；Prime / non-prime attribute / 主属性与非主属性；Partial dependency / 2NF / 部分依赖与第二范式；Transitive dependency / 3NF / 传递依赖与第三范式；BCNF / Boyce–Codd范式 | — | C：按需参考；不进入主要练习 | 按需参考 |
| Supplementary practice / [S10](./questions.md#s10) | Normalization · 范式证明； | Functional dependency / 函数依赖；Attribute closure X⁺ / 属性闭包；Superkey / candidate key / 超键与候选键；Prime / non-prime attribute / 主属性与非主属性；Partial dependency / 2NF / 部分依赖与第二范式；Transitive dependency / 3NF / 传递依赖与第三范式；BCNF / Boyce–Codd范式 | — | C：按需参考；不进入主要练习 | 归档 |
| Supplementary practice / [S11](./questions.md#s11) | SQL Fundamentals · 基础查询； | SELECT / projection / 选择输出列；WHERE / predicate / 逐行筛选条件；CONCAT / column alias / 合成姓名与输出列别名；NULL / IS NULL / 未知值及空值判断 | — | C：按需参考；不进入主要练习 | 按需参考 |
| Supplementary practice / [S12](./questions.md#s12) | SQL Fundamentals · 基础查询； | SELECT / projection / 选择输出列；JOIN / join condition / 连接及连接条件；UNION / UNION ALL / 合并结果集 | — | C：按需参考；不进入主要练习 | 按需参考 |
| Supplementary practice / [S13](./questions.md#s13) | SQL Fundamentals · 基础查询； | SELECT / projection / 选择输出列；WHERE / predicate / 逐行筛选条件；CONCAT / column alias / 合成姓名与输出列别名；EXISTS / NOT EXISTS / 存在与不存在；JOIN / join condition / 连接及连接条件；COUNT / grain / 计数与计数单位；LEFT JOIN / 保留左侧未匹配行的连接；GROUP BY / aggregate / 分组与聚合 | — | C：按需参考；不进入主要练习 | 归档 |
| Supplementary practice / [S14](./questions.md#s14) | DDL / DML · 结构与数据操作； | Primary / candidate / foreign key / 主键、候选键与外键；CHECK / UNIQUE / NOT NULL / 值限制、唯一与必填；DECIMAL(p,s) / 精确数值的位数；SELECT / projection / 选择输出列；JOIN / join condition / 连接及连接条件；COUNT / grain / 计数与计数单位；INSERT / UPDATE / DELETE / 增加、修改和删除行；LEFT JOIN / 保留左侧未匹配行的连接；GROUP BY / aggregate / 分组与聚合；ALTER TABLE / 修改表结构；WHERE / predicate / 逐行筛选条件 | — | C：按需参考；不进入主要练习 | 按需参考 |
| Supplementary practice / [S15](./questions.md#s15) | Access control · 权限； | CREATE USER / account host / 创建用户及主机范围；GRANT / privilege scope / 授予权限与对象范围；WITH GRANT OPTION / 权限转授；SQL SECURITY DEFINER / 由视图定义者权限读取底表 | — | C：按需参考；不进入主要练习 | 按需参考 |
| Supplementary practice / [S16](./questions.md#s16) | Access control · 权限； | GRANT / privilege scope / 授予权限与对象范围；WITH GRANT OPTION / 权限转授；SQL SECURITY DEFINER / 由视图定义者权限读取底表；SELECT / projection / 选择输出列 | — | C：按需参考；不进入主要练习 | 归档 |
| SELECT lectures / [L01](./questions.md#l01) | SQL Fundamentals · 基础查询； | SELECT / projection / 选择输出列；AVG / MAX / SUM / 对选定行计算统计值；WHERE / predicate / 逐行筛选条件 | — | C：按需参考；不进入主要练习 | 按需参考 |
| SELECT lectures / [L02](./questions.md#l02) | SQL Fundamentals · 基础查询； | SELECT / projection / 选择输出列；WHERE / predicate / 逐行筛选条件；DISTINCT / 删除重复结果行；EXISTS / NOT EXISTS / 存在与不存在 | — | C：按需参考；不进入主要练习 | 归档 |
| SELECT lectures / [L03](./questions.md#l03) | SQL Fundamentals · 基础查询； | SELECT / projection / 选择输出列；WHERE / predicate / 逐行筛选条件；EXISTS / NOT EXISTS / 存在与不存在 | — | C：按需参考；不进入主要练习 | 按需参考 |
| DDL and advanced DDL/DML / [L04](./questions.md#l04) | DDL / DML · 结构与数据操作； | INSERT / UPDATE / DELETE / 增加、修改和删除行；Primary / candidate / foreign key / 主键、候选键与外键；CHECK / UNIQUE / NOT NULL / 值限制、唯一与必填；SELECT / projection / 选择输出列；WHERE / predicate / 逐行筛选条件；COMMIT / ROLLBACK / 提交与回滚；ALTER TABLE / 修改表结构；DECIMAL(p,s) / 精确数值的位数 | — | C：按需参考；不进入主要练习 | 归档 |
| Logical Design / [L05](./questions.md#l05) | Logical design · 关系模式； | Primary / candidate / foreign key / 主键、候选键与外键；Qualified association / 用局部值限定的关联；Many-to-many / association attribute / 多对多与关联属性；Superset method / 超集法实现泛化 | — | C：按需参考；不进入主要练习 | 归档 |
| Discretionary Access Control / [L06](./questions.md#l06) | Access control · 权限； | INSERT / UPDATE / DELETE / 增加、修改和删除行；GRANT / privilege scope / 授予权限与对象范围；WITH GRANT OPTION / 权限转授；Primary / candidate / foreign key / 主键、候选键与外键；SQL SECURITY DEFINER / 由视图定义者权限读取底表 | — | C：按需参考；不进入主要练习 | 归档 |
| Functional dependencies and normalization / [L07](./questions.md#l07) | Normalization · 范式证明； | Functional dependency / 函数依赖；Attribute closure X⁺ / 属性闭包；Superkey / candidate key / 超键与候选键；Prime / non-prime attribute / 主属性与非主属性；Partial dependency / 2NF / 部分依赖与第二范式；Transitive dependency / 3NF / 传递依赖与第三范式；BCNF / Boyce–Codd范式 | — | C：按需参考；不进入主要练习 | 归档 |
| SELECT lectures / [L08](./questions.md#l08) | SQL Fundamentals · 基础查询； | SELECT / projection / 选择输出列；JOIN / join condition / 连接及连接条件；LEFT JOIN / 保留左侧未匹配行的连接；COUNT / grain / 计数与计数单位；WHERE / predicate / 逐行筛选条件；NULL / IS NULL / 未知值及空值判断；UNION / UNION ALL / 合并结果集 | — | C：按需参考；不进入主要练习 | 归档 |
| SELECT lectures / [L09](./questions.md#l09) | SQL Fundamentals · 基础查询； | SELECT / projection / 选择输出列；WHERE / predicate / 逐行筛选条件；JOIN / join condition / 连接及连接条件 | — | C：按需参考；不进入主要练习 | 按需参考 |
| AI-generated Variant / [V01](./questions.md#v01) | Correlated queries · 相关子查询；Nested queries · 嵌套查询 | SELECT / projection / 选择输出列；WHERE / predicate / 逐行筛选条件；JOIN / join condition / 连接及连接条件；CONCAT / column alias / 合成姓名与输出列别名；Correlated subquery / 相关子查询；EXISTS / NOT EXISTS / 存在与不存在；AVG / MAX / SUM / 对选定行计算统计值；Nested query / 嵌套查询；MAX / ties / 最大值与并列；ORDER BY / 结果排序 | A4-T1 | B：直接改变核心题的条件或FD，检验迁移 | 已覆盖 |
| AI-generated Variant / [V02](./questions.md#v02) | SQL Fundamentals · 基础查询；Joins · 连接与零匹配, Aggregate queries · 分组统计 | SELECT / projection / 选择输出列；WHERE / predicate / 逐行筛选条件；BETWEEN / date range / 区间筛选；JOIN / join condition / 连接及连接条件；COUNT / grain / 计数与计数单位；CONCAT / column alias / 合成姓名与输出列别名；LEFT JOIN / 保留左侧未匹配行的连接；GROUP BY / aggregate / 分组与聚合；ORDER BY / 结果排序；HAVING / 聚合后的筛选 | A3-T2, A3-T3 | B：直接改变核心题的条件或FD，检验迁移 | 已覆盖 |

## 未能独立核实的材料与条件

- Mock原始PDF与独立评分表缺失；目前只能核对用户转发的完整文字、图片与Mock 2 Q3–Q5原文文件。Mock 3收到的内容与Mock 1相同，两卷仍完整保留。
- 随附Solution.pdf及Assignment2_Solution.pdf已读；其作者身份没有独立认证，不将文件名当作官方评分保证。A3/A4的solution脚本是空模板，不是假装已有官方答案。
- 教师在21Review.pdf pp5、10给出3小时作答、15分钟提交及六类内容。用户确认本次延期考试按Assignment／Mock形式并另有Normalization；新的正式日期、独立题分和延期考试特别规则没有提供。
- Assignment 1–4的题目、关联原图和共享schema均可追踪；没有缺失的Assignment任务。原PDF安装、运行、提交步骤保留在本地原文件中，训练其相关操作，不把行政说明变成新题型。
- 题面中的capacity条件冲突、城市输出形式、局部标识假设和事务引擎差异均保留并明确说明，见审查报告。


## 逐小题读题覆盖

每行链接进入对应小题，英文证据也可用于定位核对。Mock 3 留有自己的原图和作答记录。材料、答案出处、图和归档题见上方矩阵及页面内的答案来源标签。

| 入口 | 对应重复来源 | 读题问题数 | 核对的英文证据 | 小题类型 |
|---|---|---:|---|---|
| [M1-Q1(1)](./index.html#learn/M1-Q1/1) | 独立题号 | 3 | unique code, unique title / one or two academic members / together with a date when each qualification has been acquired | conceptual |
| [M1-Q2(1)](./index.html#learn/M1-Q2/1) | 独立题号 | 2 | collection of relational schemas / superset method must be used | logical |
| [M1-Q3(1)](./index.html#learn/M1-Q3/1) | 独立题号 | 3 | registration numbers of trucks / capacity in a range / 100 inclusive and 500 inclusive | fundamentals |
| [M1-Q3(2)](./index.html#learn/M1-Q3/2) | 独立题号 | 2 | first and the last names of all drivers / who are on leave | joins |
| [M1-Q3(3)](./index.html#learn/M1-Q3/3) | 独立题号 | 2 | registration numbers of all trucks / not been used for any trips | nested |
| [M1-Q3(4)](./index.html#learn/M1-Q3/4) | 独立题号 | 2 | together with total number of trips / no need to include | aggregate |
| [M1-Q3(5)](./index.html#learn/M1-Q3/5) | 独立题号 | 2 | all departure cities / together with the names of all destination cities | fundamentals |
| [M1-Q4(1)](./index.html#learn/M1-Q4/1) | 独立题号 | 2 | a skill can be possessed by many drivers / some skills are not possessed by any driver | ddl-dml |
| [M1-Q4(2)](./index.html#learn/M1-Q4/2) | 独立题号 | 2 | second and third leg / of a trip 36 | ddl-dml |
| [M1-Q4(3)](./index.html#learn/M1-Q4/3) | 独立题号 | 2 | trip number 26 / after the present date of trip 26 | ddl-dml |
| [M1-Q4(4)](./index.html#learn/M1-Q4/4) | 独立题号 | 2 | Add one more leg / ends in the same city it started from | ddl-dml |
| [M1-Q4(5)](./index.html#learn/M1-Q4/5) | 独立题号 | 2 | destination of the first leg is Perth / a trip 20 has 2 legs | ddl-dml |
| [M1-Q5(1)](./index.html#learn/M1-Q5/1) | 独立题号 | 2 | as a default database / two new users USER_A and USER_B | access |
| [M1-Q5(2)](./index.html#learn/M1-Q5/2) | 独立题号 | 2 | EMPLOYEE and DRIVER / cannot be propagated | access |
| [M1-Q5(3)](./index.html#learn/M1-Q5/3) | 独立题号 | 2 | insert the rows / can be propagated | access |
| [M1-Q5(4)](./index.html#learn/M1-Q5/4) | 独立题号 | 2 | all relational tables in csit115 database / update privilege | access |
| [M1-Q5(5)](./index.html#learn/M1-Q5/5) | 独立题号 | 2 | total number trips performed by each driver / to a user USER_B | access |
| [M1-Q6(1)](./index.html#learn/M1-Q6/1) | 独立题号 | 2 | must consist of two columns / more than 100 trips | ddl-dml |
| [M1-Q6(2)](./index.html#learn/M1-Q6/2) | 独立题号 | 2 | list the contents of a relational table MESSAGE / Truck PKR856 has been used for 120 trips. | ddl-dml |
| [M1-Q6(3)](./index.html#learn/M1-Q6/3) | 独立题号 | 2 | contents of a relational table MESSAGE permanent / make the contents of a relational table MESSAGE permanent | ddl-dml |
| [M1-Q6(4)](./index.html#learn/M1-Q6/4) | 独立题号 | 2 | drop a relational table MESSAGE / Finally | ddl-dml |
| [M2-Q1(1)](./index.html#learn/M2-Q1/1) | 独立题号 | 3 | unique within a ward / admitted to and discharged from a hospital many times / not allowed to use any artificial identifiers | conceptual |
| [M2-Q2(1)](./index.html#learn/M2-Q2/1) | 独立题号 | 2 | foreign keys (if any) / superset method must be used | logical |
| [M2-Q3(1)](./index.html#learn/M2-Q3/1) | 独立题号 | 2 | For each bank / listed as zero (0) | joins |
| [M2-Q3(2)](./index.html#learn/M2-Q3/2) | 独立题号 | 2 | no bank transactions in 2021 / account numbers and balance on each account | nested |
| [M2-Q3(3)](./index.html#learn/M2-Q3/3) | 独立题号 | 2 | unknow total number of employees / at least one branch | nested |
| [M2-Q3(4)](./index.html#learn/M2-Q3/4) | 独立题号 | 2 | Insert appropriate information into the new structures / on each bank account | ddl-dml |
| [M2-Q3(5)](./index.html#learn/M2-Q3/5) | 独立题号 | 2 | all bank transactions submitted in a year 2019 / not allowed to drop and/or suspend any referential integrity constraints | ddl-dml |
| [M2-Q4(1)](./index.html#learn/M2-Q4/1) | 独立题号 | 2 | a selected group of users on a selected group of relational tables / in the comments provide the comprehensive explanation | auditing |
| [M2-Q5(1)](./index.html#learn/M2-Q5/1) | 独立题号 | 2 | root has already connected / nominate the database as its default database | access |
| [M2-Q5(2)](./index.html#learn/M2-Q5/2) | 独立题号 | 2 | included in SQL script dbcreate.sql / within a database banks | access |
| [M2-Q5(3)](./index.html#learn/M2-Q5/3) | 独立题号 | 2 | new user account called admin / with a password | access |
| [M2-Q5(4)](./index.html#learn/M2-Q5/4) | 独立题号 | 2 | CREATE TABLE and CREATE VIEW / rights to propagate the privilege to the other users | access |
| [M2-Q5(5)](./index.html#learn/M2-Q5/5) | 独立题号 | 2 | all bank transactions submitted in 2021 / no rights to propagate | access |
| [M2-Q6(1)](./index.html#learn/M2-Q6/1) | 独立题号 | 2 | account_num = 1 / after each UPDATE statement | transactions |
| [M2-Q6(2)](./index.html#learn/M2-Q6/2) | 独立题号 | 2 | READ UNCOMMITTED / WHERE account_num = 2 | transactions |
| [M3-Q1(1)](./index.html#learn/M3-Q1/1) | M1-Q1 | 3 | unique code, unique title / one or two academic members / together with a date when each qualification has been acquired | conceptual |
| [M3-Q2(1)](./index.html#learn/M3-Q2/1) | M1-Q2 | 2 | collection of relational schemas / superset method must be used | logical |
| [M3-Q3(1)](./index.html#learn/M3-Q3/1) | M1-Q3 | 3 | registration numbers of trucks / capacity in a range / 100 inclusive and 500 inclusive | fundamentals |
| [M3-Q3(2)](./index.html#learn/M3-Q3/2) | M1-Q3 | 2 | first and the last names of all drivers / who are on leave | joins |
| [M3-Q3(3)](./index.html#learn/M3-Q3/3) | M1-Q3 | 2 | registration numbers of all trucks / not been used for any trips | nested |
| [M3-Q3(4)](./index.html#learn/M3-Q3/4) | M1-Q3 | 2 | together with total number of trips / no need to include | aggregate |
| [M3-Q3(5)](./index.html#learn/M3-Q3/5) | M1-Q3 | 2 | all departure cities / together with the names of all destination cities | fundamentals |
| [M3-Q4(1)](./index.html#learn/M3-Q4/1) | M1-Q4 | 2 | a skill can be possessed by many drivers / some skills are not possessed by any driver | ddl-dml |
| [M3-Q4(2)](./index.html#learn/M3-Q4/2) | M1-Q4 | 2 | second and third leg / of a trip 36 | ddl-dml |
| [M3-Q4(3)](./index.html#learn/M3-Q4/3) | M1-Q4 | 2 | trip number 26 / after the present date of trip 26 | ddl-dml |
| [M3-Q4(4)](./index.html#learn/M3-Q4/4) | M1-Q4 | 2 | Add one more leg / ends in the same city it started from | ddl-dml |
| [M3-Q4(5)](./index.html#learn/M3-Q4/5) | M1-Q4 | 2 | destination of the first leg is Perth / a trip 20 has 2 legs | ddl-dml |
| [M3-Q5(1)](./index.html#learn/M3-Q5/1) | M1-Q5 | 2 | as a default database / two new users USER_A and USER_B | access |
| [M3-Q5(2)](./index.html#learn/M3-Q5/2) | M1-Q5 | 2 | EMPLOYEE and DRIVER / cannot be propagated | access |
| [M3-Q5(3)](./index.html#learn/M3-Q5/3) | M1-Q5 | 2 | insert the rows / can be propagated | access |
| [M3-Q5(4)](./index.html#learn/M3-Q5/4) | M1-Q5 | 2 | all relational tables in csit115 database / update privilege | access |
| [M3-Q5(5)](./index.html#learn/M3-Q5/5) | M1-Q5 | 2 | total number trips performed by each driver / to a user USER_B | access |
| [M3-Q6(1)](./index.html#learn/M3-Q6/1) | M1-Q6 | 2 | must consist of two columns / more than 100 trips | ddl-dml |
| [M3-Q6(2)](./index.html#learn/M3-Q6/2) | M1-Q6 | 2 | list the contents of a relational table MESSAGE / Truck PKR856 has been used for 120 trips. | ddl-dml |
| [M3-Q6(3)](./index.html#learn/M3-Q6/3) | M1-Q6 | 2 | contents of a relational table MESSAGE permanent / make the contents of a relational table MESSAGE permanent | ddl-dml |
| [M3-Q6(4)](./index.html#learn/M3-Q6/4) | M1-Q6 | 2 | drop a relational table MESSAGE / Finally | ddl-dml |
| [A1-T1(1)](./index.html#learn/A1-T1/1) | 独立题号 | 3 | ISBN uniquely identifies / at most one Member at a time / must end with your Student ID | conceptual |
| [A1-T2(1)](./index.html#learn/A1-T2/1) | 独立题号 | 3 | either an Undergraduate student or a Postgraduate student / up to four subjects in a semester / fixing all errors | conceptual |
| [A2-T1(1)](./index.html#learn/A2-T1/1) | 独立题号 | 2 | Identify each feature / state the transformation applied | logical |
| [A2-T1(2)](./index.html#learn/A2-T1/2) | 独立题号 | 2 | candidate keys (if any), and foreign keys (if any) / parent relation schema (referenced) before its child | logical |
| [A2-T2(1)](./index.html#learn/A2-T2/1) | 独立题号 | 2 | consistent with your logical design / parent table (referenced) before its child table | ddl-dml |
| [A2-T2(2)](./index.html#learn/A2-T2/2) | 独立题号 | 2 | after the table has already been created / no two guests have the same email address | ddl-dml |
| [A2-T2(3)](./index.html#learn/A2-T2/3) | 独立题号 | 2 | two rooms for each hotel / before inserting data into its child table | ddl-dml |
| [A2-T2(4)](./index.html#learn/A2-T2/4) | 独立题号 | 2 | all rooms belonging to one of the hotels / by 10% | ddl-dml |
| [A2-T2(5)](./index.html#learn/A2-T2/5) | 独立题号 | 2 | Do not delete the other hotel / before deleting data from its parent table | ddl-dml |
| [A3-T1(1)](./index.html#learn/A3-T1/1) | 独立题号 | 2 | Modify the structure and consistency constraint / positive value not larger than 9999.99 | ddl-dml |
| [A3-T1(2)](./index.html#learn/A3-T1/2) | 独立题号 | 2 | possessed by a participant and a qualification level required by a workshop / positive values no more than 10 | ddl-dml |
| [A3-T1(3)](./index.html#learn/A3-T1/3) | 独立题号 | 2 | workshopNo=9 / two qualification requirements | ddl-dml |
| [A3-T1(4)](./index.html#learn/A3-T1/4) | 独立题号 | 2 | participantNo=3 / all qualification levels possessed by the participant increase by 1 | ddl-dml |
| [A3-T1(5)](./index.html#learn/A3-T1/5) | 独立题号 | 2 | participantNo=10 / all information related to this participant | ddl-dml |
| [A3-T2(1)](./index.html#learn/A3-T2/1) | 独立题号 | 3 | workshop number, title, category and fee / of all workshops / between 150.00 and 220.00 | fundamentals |
| [A3-T2(2)](./index.html#learn/A3-T2/2) | 独立题号 | 2 | participant number and full name / who live in Sydney | fundamentals |
| [A3-T2(3)](./index.html#learn/A3-T2/3) | 独立题号 | 2 | participant number for all participants / more than 3 | aggregate |
| [A3-T2(4)](./index.html#learn/A3-T2/4) | 独立题号 | 2 | workshop number, title, fee and category / ascending order of category, then in descending order of fee | fundamentals |
| [A3-T2(5)](./index.html#learn/A3-T2/5) | 独立题号 | 2 | the average fee / in the TECHNOLOGY category | aggregate |
| [A3-T3(1)](./index.html#learn/A3-T3/1) | 独立题号 | 2 | more than 2 qualifications / ascending order of last name and first name | aggregate |
| [A3-T3(2)](./index.html#learn/A3-T3/2) | 独立题号 | 2 | workshop number, title and category / no qualification requirements | joins |
| [A3-T3(3)](./index.html#learn/A3-T3/3) | 独立题号 | 2 | Participants who have not enrolled in a workshop must also be included / ascending order of the total number of enrolments | joins |
| [A3-T3(4)](./index.html#learn/A3-T3/4) | 独立题号 | 2 | total number of trainers assigned to each workshop / no trainer assigned must also be included | joins |
| [A3-T3(5)](./index.html#learn/A3-T3/5) | 独立题号 | 2 | trainer number and full name / not been assigned to any workshop | joins |
| [A4-T1(1)](./index.html#learn/A4-T1/1) | 独立题号 | 2 | workshop number, title and fee / higher than the average fee of all workshops | nested |
| [A4-T1(2)](./index.html#learn/A4-T1/2) | 独立题号 | 2 | and at least one BUSINESS workshop / Cancelled enrolments must not contribute to either condition | nested |
| [A4-T1(3)](./index.html#learn/A4-T1/3) | 独立题号 | 2 | Count workshop assignments, not enrolments / assigned to at least two workshops | nested |
| [A4-T1(4)](./index.html#learn/A4-T1/4) | 独立题号 | 2 | highest recorded for that qualification name / Order by qualification name, then participant number | correlated |
| [A4-T1(5)](./index.html#learn/A4-T1/5) | 独立题号 | 2 | current fee of 200.00 or more / participants who have completed at least one workshop | correlated |
| [A4-T2(1)](./index.html#learn/A4-T2/1) | 独立题号 | 3 | regardless of their status / at least one trainer whose organisation is 'UOW' / at least two named common table expressions | cte |
| [A4-T2(2)](./index.html#learn/A4-T2/2) | 独立题号 | 2 | PARTICIPANT_02 SAMPLE has enrolled / drop the views in dependency order | views |
| [A4-T2(3)](./index.html#learn/A4-T2/3) | 独立题号 | 2 | one CREATE TABLE ... AS SELECT / both the primary key and a foreign key | ddl-dml |
| [A4-T2(4)](./index.html#learn/A4-T2/4) | 独立题号 | 2 | by 10 places / at least two trainers | ddl-dml |
| [A4-T2(5)](./index.html#learn/A4-T2/5) | 独立题号 | 2 | BUSINESS workshops whose current fee is less than / then remove the information from the parent table | ddl-dml |
| [A4-T3(1)](./index.html#learn/A4-T3/1) | 独立题号 | 2 | before @ / passwords are up to you | access |
| [A4-T3(2)](./index.html#learn/A4-T3/2) | 独立题号 | 2 | all relational tables in the database csit882 / must not be allowed to propagate | access |
| [A4-T3(3)](./index.html#learn/A4-T3/3) | 独立题号 | 2 | INSERT, UPDATE and DELETE / must not be allowed to propagate | access |
| [A4-T3(4)](./index.html#learn/A4-T3/4) | 独立题号 | 2 | only the workshop number, title, category and fee / allowed to grant the same privileges | access |
| [A4-T3(5)](./index.html#learn/A4-T3/5) | 独立题号 | 2 | including participants with no qualifications / privileges on this view | access |
| [A4-T4(1)](./index.html#learn/A4-T4/1) | 独立题号 | 3 | A \to B, A \to C, C \to D / derivations of minimal keys / testing the validity of all normal forms | normalization |
| [A4-T4(2)](./index.html#learn/A4-T4/2) | 独立题号 | 3 | A \to C, B \to D / derivations of minimal keys / testing the validity of all normal forms | normalization |
| [A4-T4(3)](./index.html#learn/A4-T4/3) | 独立题号 | 3 | A \to B, B \to C, C \to A, C \to D / derivations of minimal keys / testing the validity of all normal forms | normalization |
| [A4-T4(4)](./index.html#learn/A4-T4/4) | 独立题号 | 3 | AB \to C, AB \to D, C \to B / derivations of minimal keys / testing the validity of all normal forms | normalization |
