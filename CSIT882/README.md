# CSIT882 · Exam Practice

[打开题库](https://cp0330.github.io/Lecture--Review/CSIT882/)

题目保留英文，优先用课程资料中的原文；公开版样例身份、联系方式和密码已统一匿名化，见[说明](privacy.md)。解析使用中文，专业术语、表名、列名和SQL保留英文。按小题展开步骤，先自己作答，再对照解析。

- **54个来源任务块，48个去重题目组，158个小题**。三套模拟全部保留；收到的Mock 3与Mock 1重复。
- Assignment 1–4共11个Task；16组原范围补充题；本次新增L01–L09课件补充。
- [六个范围及对应练习](coverage.md)：Conceptual、Logical、Normalization、SELECT、DDL/DML、Access control。
- [核查与勘误](audit.md) · [验证及限制](validation.md) · [资料来源](sources.md)。
- Auditing和Concurrency按原模拟扩展保留；alternate generalization methods与decomposition按方法补强标明，不声称老师保证会以独立题出现。

## 使用

1. 从左侧选择一个题目组，在Question阅读英文题面。需要SQL schema时点击“查看表结构 / 数据”。
2. 在“我的作答”先完成。草稿自动保存在当前浏览器；跨设备用JSON导出/导入。同题导入保留较新时间记录。
3. 在“详细解析”选择小题，逐步核对；“参考答案”提供完整SQL、schema或conceptual schema。
4. “已独立作答”只是个人记录，不表示系统判定正确或已掌握。旧版同浏览器的记录键继续沿用。

一次只显示一道题；键盘可切换tabs；原题图和完整conceptual schema可放大；手机可展开筛选；打印本题仅输出英文题面及所需schema，不打印答案。答题数据不上传服务器。

也可下载[英文题目](questions.md)、[解析全文](answers.md)或index.html。页面无远程脚本依赖；下载离线时请同时保留assets目录中的原题图。

## 数据与重建

bank.json是题目、答案、小题步骤、考点与勘误的结构化源文件。app.js与study.css是界面源码。index.html为预渲染发布结果。

```sh
npm install
npm run build
npm test
```

构建需要Node.js与Python 3；marked 17.0.5和@viz-js/viz 3.25.0版本已固定。也可用CSIT882_NODE_MODULES指定已安装依赖的目录。测试只用临时内存数据库，不连接已有业务库。MySQL专属DDL、权限、审计和并发的验证边界见validation.md。
