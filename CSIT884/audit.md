# CSIT884 内容与界面改版 · 2026-11-06

## 改版依据

题目的语言与任务结构以用户提供的 A1–A4 为主；lab、lecture 提供技能补练。Week 13 的考点范围继续保留，不因 assignment 未直接涉及 XML/DTD/XSD、Canvas、DOM、storage 就排除这些主题。

当前共 8 道 assignment 风格主练、22 道 lab 补充、7 道课堂补充。旧 Q01–Q29 和旧草稿保留；主练用独立稳定 ID，不把旧 library 草稿自动对应到新 short-URL 题。

## 主练与来源

| 任务 | 来源与任务形式 | 原分值或适配 |
| --- | --- | --- |
| A1-1 | A1 Q1：HTML-only 指南页，标题/身份/无序步骤/新标签链接 | 原题 Academic Consideration 改为给定的虚构 workshop 信息，避免将外部政策研究当成 HTML 训练；原材料未给分项 |
| A1-2 | A1 Q2：三位 coordinator、四列表格、ol 时间、100×100 不同图片 | 提供虚构记录和完整图片 URL；原 uow.edu.au 图片域名要求明确适配；原材料未给分项 |
| A2-1 | A2 Q1：两行四列表、四动物列表、外链、五空格 | 2/1/1/1，合计 5；原题列数冲突按四列澄清；地址使用虚构练习域名 |
| A2-2 | A2 Q2：inline 姓名/学号、document class 段落、document ID 标题 | 1/1/2/1，合计 5；不混入 external CSS 与复杂 selector |
| A2-3 | A2 Q3：姓名 alert/console、学号 counter、email 追加按钮 | 1/1/3，合计 5；固定示例身份 |
| A3-1 | A3 Q1：逐秒奇数等式、Stop reset、restart | 1/1/5/2/1，合计 10；单一 timer 防护不新增原题分值 |
| A3-2 | A3 Q2：short-URL GET 契约 | 1/2/1/1，合计 5；保留 user/longurl/adate/pmethod 和 100/200/300/400；本地端点替代原虚构 URL |
| A4-1 | A4：完整五城市表格→坐标→XHR→响应结果→指定 class/id | 1/1/6/1/1，合计 10；固定响应与本地端点替代实时天气服务 |

原 assignment 分值是来源信息，不是期末分值或出题概率。自编补充取消统一 10 分，以可观察结果自检。所有 JavaScript 仍遵守课程的注释、命名和指定技术要求。

## 题目、提示、解析、参考答案

题目及控件语言为英语，采用 Create / Display / When the user clicks / Your program must 等 assignment 常用结构。必须遵守的技术限制仍在题干；实现顺序和局部方法移入提示。

- My Answer：代码输入、保存、导出、作答状态与历史。
- Hints：逐级帮助理解任务、回忆知识点、计划步骤。
- Explanation：读题约束、数据/状态与流程、样例检查和常见错误；不混入整段实现。
- Reference Answer：完整代码；代码块默认关闭，主动展开。

四个区域互斥显示。默认作答，返回后保留代码、光标及滚动位置。提示、解析和源码是否查看会记录到当前 attempt，但不会自动判定学生已经掌握。

## 补充练习的整理

- Q01/Q02 等原跨来源组合题保留为补充，主练题不再承受它们的全部扩展要求。
- Q08 提供完整起始 form；Q12 提供待约束 XML；Q09/Q13/Q22/Q26 的给定代码独立放到资料区，减少跨题依赖。
- Q18 基础订单与 insert/replace/remove 扩展分开，基础参考只有 Add to order。
- Q28 同毫秒 ID 碰撞列为可选健壮性扩展；参考实现可更健壮，不增加基础任务评分条件。
- 课堂 API 专项（例如 Q27）仍可明确指定对应方法，避免把技术考查条件误删成提示。

## 原有勘误与材料边界

保留 schema 连接、clearRect 宽高、DOM 实际父节点、reset 默认值、JSON/object 引号等核对。来源定位详见记忆笔记及下方主题表。XSD 文本带属性、external DTD、Date/scope 等课堂细节没有伪装成 assignment 原题。

原 A2 的列数矛盾、slideshow 随机规则以及模拟接口适配均明确说明。没有上传原始 PDF、截图或个人学习记录。A1 练习记录和步骤是虚构资料，不声称是真实 coordinator、学校办事流程或政策。

## 44 项知识点定位

Assignment 列为空表示主练未直接覆盖；需要使用对应补充题或笔记。Notes recall only 仍代表仅在笔记回忆中覆盖，不代表独立编程题已检验该知识点。

| ID | 能力 | Assignment 主练 | lab/课堂补充或回忆 | 笔记 |
| --- | --- | --- | --- | --- |
| K01 | HTML 骨架、title、heading、段落 | A1-1, A1-2, A2-1 | Q01 | [笔记](notes.html#s5) |
| K02 | ul/ol/li、嵌套列表 | A1-1, A1-2, A2-1 | Q01 | [笔记](notes.html#s5) |
| K03 | table/tr/th/td、行列、尺寸、对齐 | A1-2, A2-1, A4-1 | Q01, Q02 | [笔记](notes.html#s5) |
| K04 | rowspan/colspan | — | Q21 | [笔记](notes.html#s5) |
| K05 | 图片 src/alt/尺寸、绝对/相对路径 | A1-2 | Q01 | [笔记](notes.html#s5) |
| K06 | a/href/target、页内锚点 | A1-1, A2-1 | Q01, Q21 | [笔记](notes.html#s5) |
| K07 | 文本格式、font、entity、空格、emoji | A2-1 | Q01, Q21 | [笔记](notes.html#s5) |
| K08 | XHTML 规则、description list、pre/code、index.html | — | Q21 + notes | [笔记](notes.html#s21) |
| K09 | inline/document/external CSS 及 link | A2-2 | Q02 | [笔记](notes.html#s4) |
| K10 | class/id/type selector | A2-2, A4-1 | Q02 | [笔记](notes.html#s4) |
| K11 | descendant 与 child selector | — | Q02 | [笔记](notes.html#s4) |
| K12 | 字体、颜色、背景、padding、border、alignment | A2-2, A4-1 | Q02, Q20 | [笔记](notes.html#s3) |
| K13 | border-collapse/border-spacing | — | Q22 | [笔记](notes.html#s3) |
| K14 | CSS list properties、link/visited 等 pseudo class、cascade | — | Q22 + notes | [笔记](notes.html#s4) |
| K15 | var/let、scope、hoisting、template literals | — | Notes recall only | [笔记](notes.html#s21) |
| K16 | 类型、Number、运算、if/for、function/参数 | A2-3, A3-1, A4-1 | Q03–Q08, Q24, Q29 | [笔记](notes.html#s6) |
| K17 | console.log 与 alert | A2-3 | Q03 | [笔记](notes.html#s7) |
| K18 | getElementById；innerHTML/value/src | A2-3, A4-1 | Q03, Q04, Q10 | [笔记](notes.html#s6) |
| K19 | checkbox.checked 与 boolean | — | Q10 | [笔记](notes.html#s11) |
| K20 | 点击、mouseover、load、focus/blur/change/select 等事件 | A2-3, A3-1 | Q23 + Q03/Q19 initialization | [笔记](notes.html#s7) |
| K21 | Enter 键触发、命令判断、无效命令 | — | Q04 | [笔记](notes.html#s7) |
| K22 | counter、状态切换、重复追加内容 | A2-3, A3-1 | Q03, Q05, Q17, Q18 | [笔记](notes.html#s10) |
| K23 | String API、Date API、Array API | — | Q24, Q28 + notes | [笔记](notes.html#s21) |
| K24 | 随机整数范围与随机数学题 | — | Q06, Q08 | [笔记](notes.html#s10) |
| K25 | setInterval/clearInterval、单一 timer | A3-1 | Q05, Q06 | [笔记](notes.html#s10) |
| K26 | 停止与重置/重启的区别 | A3-1 | Q05 | [笔记](notes.html#s10) |
| K27 | form/action/method/name/value/GET、控件选择 | A3-2 | Q07 | [笔记](notes.html#s8) |
| K28 | checkbox 多值、radio 单选、select、textarea、submit/reset | A3-2 | Q07, Q10, Q25, Q28, Q29 | [笔记](notes.html#s8) |
| K29 | HTML built-in validation 与 JS validation | — | Q08, Q25 | [笔记](notes.html#s9) |
| K30 | XML well-formed、单根、引号、大小写、完整数据 | — | Q11 | [笔记](notes.html#s12) |
| K31 | DTD internal/external、ELEMENT/ATTLIST、次数/顺序/选择 | — | Q12, Q26 + notes | [笔记](notes.html#s13) |
| K32 | XSD simple/complex、sequence、attribute、嵌套 | — | Q13 | [笔记](notes.html#s14) |
| K33 | XSD enum、范围、occurrence、simpleContent/extension | — | Q13, Q26 | [笔记](notes.html#s14) |
| K34 | 合法 JSON、object/array、嵌套、类型 | — | Q09–Q10, Q14–Q15 | [笔记](notes.html#s11) |
| K35 | stringify/parse、筛选、缩进、双向控件映射 | — | Q10 + notes for replacer | [笔记](notes.html#s11) |
| K36 | JSON 语法验证与异常处理 | — | Q19 | [笔记](notes.html#s20) |
| K37 | element.style 与 camelCase、hover scale、transition/transform | — | Q20 + notes | [笔记](notes.html#s17) |
| K38 | XHR 生命周期、异步回调、readyState/status、失败分支 | A4-1 | Q14–Q15 | [笔记](notes.html#s15) |
| K39 | 构造 URL、嵌套 JSON 读取、循环生成表格 | A4-1 | Q15 | [笔记](notes.html#s15) |
| K40 | Canvas context、坐标、path/stroke/fill/text/clear | — | Q16 | [笔记](notes.html#s18) |
| K41 | dragstart/dragover/drop、dataTransfer、preventDefault、匹配规则 | — | Q17 | [笔记](notes.html#s19) |
| K42 | DOM 节点创建、插入、删除、替换、attribute API | — | Q18, Q27 | [笔记](notes.html#s16) |
| K43 | 数量累加、条目数与总数量区分 | — | Q18 | [笔记](notes.html#s16) |
| K44 | localStorage/sessionStorage、key/value、初始化、JSON 持久化 | — | Q19, Q28 + notes for sessionStorage | [笔记](notes.html#s20) |
