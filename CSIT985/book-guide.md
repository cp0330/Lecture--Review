# Essay 怎样参考 Moodle Reading List

**建议选择性使用：课件定范围，主教材补解释，场景推理自己完成。** 不要求每道Essay都查多本书。零基础先理解课件和题内中文解析，再针对一个不清楚的机制或关系查书。

## 已观察的入口与核实边界

2026-11-04通过用户提供的 [Moodle Subject Reading List](https://moodle.uowplatform.edu.au/mod/lti/view.php?id=4576903) 实际查看嵌入Leganto清单，显示9项。书目来自课程列表；本次核实了列表元数据和部分出版社目录，没有逐章读取全部书的全文，不给未经核实的书内命中、电子页码或引文。

## Essay 是否必须查书、是否要参考文献

现有保存的 Assessment Task 5 公告允许lecture notes、workshop notes和Reading List列出的书，且明确允许经课程Reading List在线访问这些书；复制粘贴被禁用且不允许。允许使用不等于每题强制查书。公告没有明确要求参考文献表，也没有提供引用格式。若老师后续另有要求，应遵循新说明；不把这里的教学建议当作额外考试规则。

题库与本网站是考前学习产物，不能据此推定考试可访问。外部出版社/RFC/NIST链接用于考前核对，不扩大公告许可范围。

## McCabe第3版与课程的对应

| 问题 | 先查章节 | 重点查什么 |
|---|---|---|
| analysis / architecture / design | Ch.1 Introduction | 三活动关系、系统视角与可辩护理由 |
| 需求概念 | Ch.2 Requirements Analysis: Concepts | 类型、服务与指标 |
| 需求过程 | Ch.3 Requirements Analysis: Process | 收集、发展、记录、映射 |
| flow / flowspec | Ch.4 Flow Analysis | 源汇、方向、聚合条件 |
| 架构模型与组件 | Ch.5 Network Architecture | 模型组合、内部/外部关系 |
| addressing / routing | Ch.6 Addressing and Routing | 层次、边界、协议取舍 |
| management | Ch.7 Network Management | 数据、机制、组织与开销 |
| performance / QoS | Ch.8 Performance | 服务机制、位置与关系 |
| security / privacy | Ch.9 Security and Privacy | 资产、威胁、控制与取舍 |
| design / evaluation | Ch.10 Network Design | 方案选择、产物、依据与验证 |

对应依据是[出版社第3版目录](https://www.sciencedirect.com/book/9780123704801/network-analysis-architecture-and-design)和各周课件末尾Reading。Reading List与出版社元数据标第3版2007，部分课件引用写2010；按作者、书名和版次匹配，不擅自捏造另一版内容。

## 9项书目与选择策略

| Reading List书目 | 列表标记 | 何时选用 |
|---|---|---|
| James D. McCabe, Network Analysis, Architecture, and Design, 3rd, c2007 | Essential | 主干，优先；大部分Essay跨阶段关系可由本书补深 |
| Sudip Misra & Sumit Goswami, Network Routing: Fundamentals, Applications and Emerging Technologies, 2017 | Essential | 路由原理与扩展 |
| Larry L. Peterson & Bruce S. Davie, Computer Networks: A Systems Approach, 6th, [2019] | Essential | 系统视角与网络基础 |
| Gregory B. White, Eric A. Fisch & Udo W. Pooch, Computer System and Network Security, 1st, [2017] | Essential | 安全概念补充 |
| Paul Göransson & Chuck Black, Software Defined Networks: A Comprehensive Approach, 1st, 2014 | Recommended | Week12的SDN机制与条件；[出版社目录](https://shop.elsevier.com/books/software-defined-networks/goransson/978-0-12-416675-2) |
| Dijiang Huang, Ankur Chowdhary & Sandeep Pisharody, Software-Defined Networking and Security: From Theory to Practice, 1st, [2018] | Recommended | SDN与安全关系 |
| James F. Kurose & Keith W. Ross, Computer Networking: A Top-Down Approach, 8th Global, 2022 | Essential | 分层、传输、网络层基础；[出版社目录](https://www.pearson.com/en-gb/subject-catalog/p/Kurose-Computer-Networking-Global-Edition-8th-Edition/P200000004686/9781292405469) |
| Joseph Migga Kizza, Guide to Computer Network Security, 6th, 2024 | Essential | 安全补充，不把整书自动扩大成考试范围 |
| S.S. Shinde, Computer Network, 1st, 2000 | Recommended | 历史基础；核对年代与现代术语边界 |

除已核实的McCabe章节目录外，表中用途是基于书名和课程主题的学习建议，不冒充已阅读全文所得结论。

## 从书到自己答案的五步

1. 把题干拆成动作、对象、数量和场景。例如evaluate不止给定义，还要判断收益、代价与条件。
2. 在课件确认范围，写一个中文论证提纲，指出哪个关系解释不清。
3. 经Reading List打开对应书，在目录定位章节，再搜一个或两个专业词；不同电子平台页码可能不同，优先标题和术语。
4. 只取与题干有关的定义、机制或边界，检查上下文后用自己的短句组织。不要把整段教材或不相关历史搬入答案。
5. 回到场景：Why does this matter here? What does it require? How will it be checked?（为何在此重要，需要什么，如何验证。）若要引用，使用实际核实的作者、书名与定位，不编页码。

可以复用的论证句：The mechanism supports ____ because ____. In this scenario, ____. However, it requires ____. The result should be checked by ____.

中文顺序是“作用—原因—场景—条件—验证”。空白必须填本题知识，句式不能替代知识。
