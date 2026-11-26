# 从一道英文题开始
打开首页选「从第一道开始」。先写理解，可以只写一个关键词。点「核对我的理解」比较英文证据、中文含义和对作答的影响。需要解法再开讲解，独立作答会另开空白稿。可以只练读题后返回首页。「继续学习」保留小题、局部关系和阶段。

**第一轮 SQL**　[A3-T2(1)](./index.html#learn/A3-T2/1) → [M1-Q3(1)](./index.html#learn/M1-Q3/1) → [A3-T3(1)](./index.html#learn/A3-T3/1) → [A3-T3(2)](./index.html#learn/A3-T3/2) → [A3-T3(3)](./index.html#learn/A3-T3/3) → [A3-T3(4)](./index.html#learn/A3-T3/4)。先查给定 schema，圈出要返回的列，再确定一行代表谁。做完卡车题能解释边界，才转入 JOIN、计数和零匹配。

**第一轮概念图**　[A1-T1(1) · Copy → Book](./index.html#learn/A1-T1/1/copy) → [A1-T1(1) · Book → Copy](./index.html#learn/A1-T1/1/book) → [A1-T1(1) · Book ↔ Author](./index.html#learn/A1-T1/1/author) → [A1-T1(1) · Member ↔ Copy](./index.html#learn/A1-T1/1/member) → [A1-T1(1)](./index.html#learn/A1-T1/1) → [A1-T2(1) · 局部自测 · Lecturer 与 Subject](./index.html#learn/A1-T2/1/lecturer) → [M1-Q1(1)](./index.html#learn/M1-Q1/1)。固定一端，再数另一端。核对 Book → Copy 后可看随附图的局部，完整参考图在讲解内另行展开。

## 题型路线

整题只有一个任务时，(1) 表示工作台唯一作答格。选题与通过标准为题库的训练安排。含「局部」的入口只抽取原题中的一条规则，双 CTE 的短变式是额外编写的独立自测。

| 题型 | 起步 | 自测 | 为什么这样选 | 做到什么可以继续 |
|---|---|---|---|---|
| 短 SQL | [A3-T2(1)](./index.html#learn/A3-T2/1) | [M1-Q3(1)](./index.html#learn/M1-Q3/1) | 先对上英文名和列名，再换到运输库读边界。 | 查 schema 独立写查询，能解释两个端点和原表约束的区别。 |
| 连接与分组 | [A3-T3(1)](./index.html#learn/A3-T3/1) | [A3-T3(3)](./index.html#learn/A3-T3/3) | 先练连接后按人计数，再引入零报名者。 | 能区分 WHERE 和 HAVING，解释零匹配时应计哪一列。 |
| 零匹配 | [A3-T3(3)](./index.html#learn/A3-T3/3) | [M2-Q3(1)](./index.html#learn/M2-Q3/1) | 把每位参与者换成每家银行。 | 没有子行的父对象也输出一行且计数为零。 |
| NULL 与存在性 | [A3-T3(2)](./index.html#learn/A3-T3/2) | [M2-Q3(3)](./index.html#learn/M2-Q3/3) | 分清没有子行和已有子行的某列未知。 | 能处理 NULL，多家符合的分行也只输出一次银行。 |
| 概念图 | [A1-T1(1) · Copy → Book](./index.html#learn/A1-T1/1/copy) | [A1-T2(1) · 局部自测 · Lecturer 与 Subject](./index.html#learn/A1-T2/1/lecturer) | 先读一个方向，再用讲师规则自测。 | 能说清固定谁、数谁、两端上下限及标注位置。 |
| 长概念图 | [M1-Q1(1)](./index.html#learn/M1-Q1/1) | [M2-Q1(1)](./index.html#learn/M2-Q1/1) | 从大学规则迁移到医院的局部编号和重复事件。 | 标识有作用域、关联属性有归属、子类继承正确，并遵守禁止新增标识的要求。 |
| 逻辑设计 | [A2-T1(2)](./index.html#learn/A2-T1/2) | [M1-Q2(1)](./index.html#learn/M1-Q2/1) | 先按课件格式写酒店，再转换给定图。 | 逐表写属性和完整 PK、CK、FK，用指定超集法。接着做 M2-Q2 航班图。 |
| 限定关联与子类 | [A2-T1(1)](./index.html#learn/A2-T1/1) | [M2-Q2(1)](./index.html#learn/M2-Q2/1) | 先解释图中特征的转换，再识别航班图中的限制。 | 复合外键不漏列，能写明额外唯一性、适用条件和外键不能保证的规则。 |
| DDL | [A3-T1(1)](./index.html#learn/A3-T1/1) | [A3-T1(2)](./index.html#learn/A3-T1/2) | 从一列费用约束迁移到两列等级约束。 | 类型能容纳上限，约束同时检查严格下限和包含上限。 |
| DML 与外键 | [A2-T2(4)](./index.html#learn/A2-T2/4) | [A2-T2(5)](./index.html#learn/A2-T2/5) | 在同一组已插入酒店记录上先改价，再删依赖。 | 只处理目标酒店，按外键顺序删行；再做 M1-Q4(2) 核对复合定位。 |
| 嵌套查询 | [A4-T1(1)](./index.html#learn/A4-T1/1) | [A4-T1(2)](./index.html#learn/A4-T1/2) | 从一次总体平均迁移到两个同时成立的存在条件。 | 用嵌套写法，两个类别都满足且都排除取消。 |
| 相关子查询 | [A4-T1(5)](./index.html#learn/A4-T1/5) | [A4-T1(4)](./index.html#learn/A4-T1/4) | 从按人关联迁移到按资格名关联。 | 内层确实引用外层，最高并列不遗漏，顺序正确。 |
| WITH / CTE | [A4-T2(1)](./index.html#learn/A4-T2/1) | [A4-T2(1) · 短变式 · 两个 CTE（题库自拟）](./index.html#learn/A4-T2/1/cte) | 原卷只要求一次双 CTE，短变式换输出粒度。 | 空白写出两个具名 CTE，保留所有报名状态并避免重复。 |
| 视图 | [A4-T2(2)](./index.html#learn/A4-T2/2) | [A4-T3(5)](./index.html#learn/A4-T3/5) | 先练视图依赖和删除，再用汇总视图提供有限信息。 | 解释依赖次序，按人汇总含零，权限只给目标视图。 |
| 用户与权限 | [A4-T3(4)](./index.html#learn/A4-T3/4) | [M1-Q5(3)](./index.html#learn/M1-Q5/3) | 先辨认列级转授，再跨两张表授予写入权。 | 逐项说明用户、操作、对象、转授权，按范围写 GRANT。 |
| 审计 | [M2-Q4(1) · 局部带学 · 审计范围](./index.html#learn/M2-Q4/1/audit) | [M2-Q4(1)](./index.html#learn/M2-Q4/1) | 只有一道审计原题，先划出范围，再独立完成整题。 | 逐句注释采集、筛选、报告和恢复，并说明日志语义。 |
| 事务 | [M2-Q6(1)](./index.html#learn/M2-Q6/1) | [M2-Q6(2)](./index.html#learn/M2-Q6/2) | 从同一行上等待，换成读写不同账户。 | 逐条列两行余额、等待与提交时点，写明引擎和事务假设。 |
| Normalization | [A4-T4(1)](./index.html#self/A4-T4/1) | [A4-T4(4)](./index.html#learn/A4-T4/4) | 先在第 1 题独立诊断，再用第 4 题迁移。 | 找全候选键并证明最小性，逐项检查 2NF、3NF、BCNF；第 2、3 题查漏。 |

**Normalization**　先空白做 A4-T4(1)。不会启动就查闭包，漏键就查最小性与穷举表，范式判断不稳只展开对应的 2NF、3NF 或 BCNF。再独立完成 (2)、(3)、(4)。分解、无损连接和依赖保持只作选修，A4-T4 明确要求保持原属性。

**模拟**　留一份陌生原卷完整计时练。Mock 1 与 Mock 3 的转发版本相同，第二轮改用 Mock 2。三份原卷均不含范式题，另做 A4-T4，或选含 Normalization 的 Custom Mock。原卷自评按题面要求进行，暂无教师分项评分表。
