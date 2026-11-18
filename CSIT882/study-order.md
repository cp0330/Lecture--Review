# 有限时间的复习顺序

按掌握程度推进，不绑定每天固定时长。每学完一组，先独立写，再对答案；部分掌握或未掌握的进入错题复习。留出两轮完整模拟，不能把所有时间用来看解析。

1. **SQL起步**：A3-T2 → A3-T3 → M1-Q3。先会读输出列和WHERE，再会JOIN、COUNT、GROUP BY及零匹配。只在当前题的知识卡中补规则。
2. **直接操作**：A3-T1 → A2-T2 → M1-Q4。练CREATE/ALTER、约束、INSERT/UPDATE/DELETE、外键依赖和SOURCE；每次核对改哪些行。
3. **设计题**：A1-T1/T2 → A2-T1 → M1-Q1/Q2 → M2-Q1/Q2。先画对象、标识和multiplicity，再转PK/CK/FK、superset、多值与qualifier。
4. **Normalization主练**：A4-T4四题逐一按七步独立推导；先找全keys，再判断2NF、3NF和BCNF。四题都稳定后再选S07变式，不先扩展decomposition。
5. **高级查询**：A4-T1 → A4-T2。掌握nested、correlated、WITH、Views及关联DDL/DML；少量V01/V02检验条件变化后是否仍会写。
6. **权限及剩余原题**：A4-T3 → M1-Q5/Q6 → M2-Q3/Q4/Q5/Q6。权限按用户、操作、对象、转授四项写；Auditing和Transactions原题保留假设边界。
7. **第一轮独立模拟**：选Mock 1或2，默认180分钟可自调；全程隐藏答案，结束才复盘。原卷无Normalization，另独立做A4-T4。
8. **修错后第二轮模拟**：先重练错误小题，再选另一原卷或Custom Mock（含Normalization）。Mock 3与Mock 1内容相同，可用于重复熟练度训练，不当作新的陌生题。

自评“已掌握”建议以不看提示、能解释条件、能在合理时间完成为依据；工作台不替你判断掌握。不要把已保存稿件、旧版勾选或看过答案当作高分保证。
