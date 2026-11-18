# 验证记录 · 2026-11-18

## 自动检查

- `tests/validate.py`：内容、来源指纹、图片、ID、小题号、分类、覆盖和SQL逻辑检查；最新实际数量见`tests/results.json`。
- `tests/app.test.mjs`：记录迁移／安全合并、草稿、多轮练习、自评、隐藏答案、筛选、归档、Mock顺序、暂停恢复、试用与异常保存检查；结果见`tests/ui-results.json`。
- 构建完成56组185小题，预渲染12个答案图。3个内嵌脚本语法正确；浏览器没有加载远程脚本或字体。
- 23组不同的原题英文指纹及5张原题图片保留原核对证据；Mock 3展开为与Mock 1相同的完整题面，原图对应文件保留。
- 14组范式用例经过独立枚举检验；A4-T4和S07额外核对128行全部closure表。全部candidate keys、prime属性、2NF／3NF／BCNF判断一致。
- 54组查询结果记录在JSON中；并检查NULL、零匹配、同号不同bank、日期半开区间、最高等级并列、100次边界以及外键依赖下的数据变化。

## 数据库执行边界

本轮尝试在新建临时目录启动隔离MySQL 26.7测试实例，初始化因SIGSEGV失败。没有连接、更改或重置任何已有数据库。

可执行的SELECT、View、DML及部分通用DDL在SQLite内存数据库和原样例数据上核对。MySQL日期函数等少量表达式使用明确的适配；这能验证相关输出／数据变化，不能充当MySQL语法执行证书。

MySQL专有ALTER、SOURCE、账号权限、general_log审计和并发隔离语句经过静态及文档复核，未在MySQL执行。每个核心小题的参考答案显示其验证状态。浏览器练习不连接数据库；“静态自检”只指出常见风险，不宣称语法通过或结果正确。

MySQL原始同表子查询UPDATE及事务边界问题均在Mock 2 Q6保留说明。并发题按显式事务、可执行等价语句及所述引擎给出条件结论，不省略假设。

参考官方文档：[Subquery restrictions](https://dev.mysql.com/doc/refman/8.4/en/subquery-restrictions.html)、[GRANT](https://dev.mysql.com/doc/refman/8.4/en/grant.html)、[InnoDB isolation](https://dev.mysql.com/doc/refman/8.4/en/innodb-transaction-isolation-levels.html)。

## 浏览器实测

自动事件回归已通过；真实HTTPS页面的视觉和交互验收在发布后另记于`tests/browser-results.json`。旧浏览器记录注明旧版本，不能代替本轮新功能验收。

## 来源与数据保护

Assignment 1–4题页及随附参考已读。Mock原始PDF、独立评分表及新的延期考试特别规则未提供，只能核对转发材料。所有参考的具体假设见覆盖矩阵和题目讲解，不虚构官方分值。

本地修改前已备份题库和发布源；旧浏览器记录键不覆盖。原有答案、未知题号和不同草稿保留。旧勾选不等于掌握；试用模拟不计入学习记录。公开版仅发布匿名学习内容，不发布私人学习档案、答题卡或浏览器记录。
