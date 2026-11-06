# CSIT884 查缺补漏与勘误 · 2026-11-04

核查范围：Week 13 转录、16 份 lecture PDF、已提供的 lab 题目，以及 A1–A4。原始 lecture、截图和个人学习记录不上传；这里只发布自编题目、参考代码和整理笔记。

## 筛选结论

保留 Q01–Q20 的两轮重点。Q21–Q29 是 9 道补漏练习。Week 13 没给各主题出题概率，且明确说所有已教主题均可能出现，不能把练习顺序当成官方预测。

| 新题 | 补齐的能力 | 依据及层级 |
| --- | --- | --- |
| Q21 | rowspan/colspan、anchor、dl/pre、HTML-only 属性 | HTML lecture；沿用 L01/A1/A2 的页面构造形式 |
| Q22 | border-spacing、list/link rules、cascade 条件 | CSS lecture 与 L02；补充实现细节 |
| Q23 | mouseover 交换 src、focus/blur/change/select、prompt/confirm | Week 13 明确点名 events；L03 Q8；Event lecture |
| Q24 | Array push/indexOf/splice、String、Date | JSbasics；补充课件技能，不提高为预测重点 |
| Q25 | 内建约束、trim、双 email 检查、清除旧错误 | FormValidation lecture；Week 13 onsubmit return；L05 题型 |
| Q26 | external DTD、带属性文本的 XSD、schema 连接 | XMLDTD/XSD lecture；Week 13 simple/complex 区别 |
| Q27 | getElementsByTagName/ClassName 与循环 | Week 13 逐项点名；DOM lecture p. 6 |
| Q28 | object array 持久化、删除指定 ID、removeItem | WebStorage lecture task-list example；Q19 原来只覆盖 raw draft |
| Q29 | select 三种运算、数字转换、正确/错误更新 | L06 Q2；补齐直接 lab 题型 |

## 错误、遗漏与表述修正

- XSD 课件第 4–6 页的单文件名 `xsi:schemaLocation="student.xsd"` 连接不正确。无 targetNamespace 示例应使用 `xsi:noNamespaceSchemaLocation`；新增 Q26 和笔记例子，保留课程的 XSD 技术。
- Q19 原答案只检查 typeof(Storage)。实际 storage 被浏览器禁用时仍可能抛异常；补 try/catch，使验证功能仍可工作。这是健壮性补充，不冒充老师的新评分要求。
- 原题库并非每个复习点都经过直接练习。已补上鼠标换图、多个 DOM 查询 API、object-array storage 和 calculator；未把出现过语法名称等同于学生已会写。
- 保留已核对的校正：clearRect 后两个参数为宽、高；removeChild/replaceChild 在实际父节点调用；reset 恢复默认值；JavaScript object 属性名可以有引号。
- 补清 CSS cascade 的适用条件、Date 月份与日期区别、indexOf 的 -1、prompt Cancel 与空字符串区别、XML well-formed 与 valid 区别。
- Week 13 明确要求整理的是 CSS properties 清单；常用函数和默写模板是根据资料整理的复习工具，不是老师要求提交的官方清单。
- 原 A2 的列数描述有矛盾，未复制进自编题；slideshow 的随机规则、XSD 的 occurrence/属性必需性在新题中明确写出。
- GitHub Pages 不提供本地 /search 和 /weather，页面明确标注并提供下载包。天气为固定练习响应，不是实时数据。

## 尚需保持的边界

44 项均有可定位的题目或笔记，**不等于已经穷尽全部 API 和所有出题组合**。例如 scope/hoisting、XHTML/default index、Date/String 的较少使用方法、其他 transform 仍作为笔记回忆点；没有虚构成老师公布的独立大题。完成程序测试也不能判定学生掌握或保证考试分数。

题干、要求、检查表与题库 UI 全英语；笔记和参考解释用中文帮助理解。参考实现允许其他满足同样条件的写法。每题 10 分是练习自评，不是官方评分细则。

## 主要材料定位

- Week 13 转录字符约：33745–35517 CSS；35900–38200 页面修改与 events；38200–42900 form/validation/random/timer；42900–47400 XML/DTD/XSD/JSON；47400–52356 XHR/Canvas/drag and drop/DOM/storage。转录无时间戳，不虚构分钟数。
- A1 HTML-only 信息页与 coordinator 表；A2 HTML/CSS/events；A3 reset/restart 动画与 GET form；A4 输入驱动天气 XHR 与指定 class/id。
- L01–L14 是已归档的主题组编号，不代表 14 次正式 lab；用户所称 10 次 lab 尚无完整的 Moodle 周次映射。
- HTML：合并格 36–37 页、pre 45 页、XHTML 60–66 页；CSS：link/list 29–31 页、cascade 35 页；JSbasics：String 61–62 页、Date 63–70 页、Array 71–75 页；Event：5–19 页；DOM：6 页；XSD simpleContent：11 页；WebStorage task-list：5–31 页。
- 同名 CSIT884-L02A-CSS.pdf 必须区分：lecture 目录为 35 页 CSS；Lab&Assignment 目录为 3 页 AJAX 指南。

## 规范核对来源

- [W3C XML Schema §2.6](https://www.w3.org/TR/xmlschema-1/#Instance_Document_Constructions)：schema 连接。
- [MDN specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Specificity)：cascade 的比较条件。
- [MDN Web Storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)：storage 存在与实际可用的区别。
- Canvas、DOM、form reset 的原有核对链接见完整记忆笔记。

## 44 项覆盖定位

“Notes recall only” 明确表示只在笔记中补充，没有声称该项已通过独立编程题覆盖。其他行的“+ notes”同理。

| 编号 | 能力 | 题目或回忆点 | 笔记 |
| --- | --- | --- | --- |
| K01 | HTML 骨架、title、heading、段落 | Q01 | [笔记](notes.html#s5) |
| K02 | ul/ol/li、嵌套列表 | Q01 | [笔记](notes.html#s5) |
| K03 | table/tr/th/td、行列、尺寸、对齐 | Q01, Q02 | [笔记](notes.html#s5) |
| K04 | rowspan/colspan | Q21 | [笔记](notes.html#s5) |
| K05 | 图片 src/alt/尺寸、绝对/相对路径 | Q01 | [笔记](notes.html#s5) |
| K06 | a/href/target、页内锚点 | Q01, Q21 | [笔记](notes.html#s5) |
| K07 | 文本格式、font、entity、空格、emoji | Q01, Q21 | [笔记](notes.html#s5) |
| K08 | XHTML 规则、description list、pre/code、index.html | Q21 + notes | [笔记](notes.html#s21) |
| K09 | inline/document/external CSS 及 link | Q02 | [笔记](notes.html#s4) |
| K10 | class/id/type selector | Q02 | [笔记](notes.html#s4) |
| K11 | descendant 与 child selector | Q02 | [笔记](notes.html#s4) |
| K12 | 字体、颜色、背景、padding、border、alignment | Q02, Q20 | [笔记](notes.html#s3) |
| K13 | border-collapse/border-spacing | Q22 | [笔记](notes.html#s3) |
| K14 | CSS list properties、link/visited 等 pseudo class、cascade | Q22 + notes | [笔记](notes.html#s4) |
| K15 | var/let、scope、hoisting、template literals | Notes recall only | [笔记](notes.html#s21) |
| K16 | 类型、Number、运算、if/for、function/参数 | Q03–Q08, Q24, Q29 | [笔记](notes.html#s6) |
| K17 | console.log 与 alert | Q03 | [笔记](notes.html#s7) |
| K18 | getElementById；innerHTML/value/src | Q03, Q04, Q10 | [笔记](notes.html#s6) |
| K19 | checkbox.checked 与 boolean | Q10 | [笔记](notes.html#s11) |
| K20 | 点击、mouseover、load、focus/blur/change/select 等事件 | Q23 + Q03/Q19 initialization | [笔记](notes.html#s7) |
| K21 | Enter 键触发、命令判断、无效命令 | Q04 | [笔记](notes.html#s7) |
| K22 | counter、状态切换、重复追加内容 | Q03, Q05, Q17, Q18 | [笔记](notes.html#s10) |
| K23 | String API、Date API、Array API | Q24, Q28 + notes | [笔记](notes.html#s21) |
| K24 | 随机整数范围与随机数学题 | Q06, Q08 | [笔记](notes.html#s10) |
| K25 | setInterval/clearInterval、单一 timer | Q05, Q06 | [笔记](notes.html#s10) |
| K26 | 停止与重置/重启的区别 | Q05 | [笔记](notes.html#s10) |
| K27 | form/action/method/name/value/GET、控件选择 | Q07 | [笔记](notes.html#s8) |
| K28 | checkbox 多值、radio 单选、select、textarea、submit/reset | Q07, Q10, Q25, Q28, Q29 | [笔记](notes.html#s8) |
| K29 | HTML built-in validation 与 JS validation | Q08, Q25 | [笔记](notes.html#s9) |
| K30 | XML well-formed、单根、引号、大小写、完整数据 | Q11 | [笔记](notes.html#s12) |
| K31 | DTD internal/external、ELEMENT/ATTLIST、次数/顺序/选择 | Q12, Q26 + notes | [笔记](notes.html#s13) |
| K32 | XSD simple/complex、sequence、attribute、嵌套 | Q13 | [笔记](notes.html#s14) |
| K33 | XSD enum、范围、occurrence、simpleContent/extension | Q13, Q26 | [笔记](notes.html#s14) |
| K34 | 合法 JSON、object/array、嵌套、类型 | Q09–Q10, Q14–Q15 | [笔记](notes.html#s11) |
| K35 | stringify/parse、筛选、缩进、双向控件映射 | Q10 + notes for replacer | [笔记](notes.html#s11) |
| K36 | JSON 语法验证与异常处理 | Q19 | [笔记](notes.html#s20) |
| K37 | element.style 与 camelCase、hover scale、transition/transform | Q20 + notes | [笔记](notes.html#s17) |
| K38 | XHR 生命周期、异步回调、readyState/status、失败分支 | Q14–Q15 | [笔记](notes.html#s15) |
| K39 | 构造 URL、嵌套 JSON 读取、循环生成表格 | Q15 | [笔记](notes.html#s15) |
| K40 | Canvas context、坐标、path/stroke/fill/text/clear | Q16 | [笔记](notes.html#s18) |
| K41 | dragstart/dragover/drop、dataTransfer、preventDefault、匹配规则 | Q17 | [笔记](notes.html#s19) |
| K42 | DOM 节点创建、插入、删除、替换、attribute API | Q18, Q27 | [笔记](notes.html#s16) |
| K43 | 数量累加、条目数与总数量区分 | Q18 | [笔记](notes.html#s16) |
| K44 | localStorage/sessionStorage、key/value、初始化、JSON 持久化 | Q19, Q28 + notes for sessionStorage | [笔记](notes.html#s20) |
