# CSIT884 · 按 Week 13 整理的记忆笔记

目的：闭卷时能写出正确语法、选择正确的函数或属性，并把代码步骤接起来。

笔记用中文解释，专业术语和代码保留英文。末尾自测问题全部用英语。题库题目仍保持全英语。

**来源标记**：Review = Week 13 明确提及的主题或写法；Lab detail = 对应 lab/assignment/lecture 补齐的实现细节；Lecture extra = 已教、但复习课没有展开的补充。标记说明来源，不代表出题概率。

老师明确要求“从 lab 列清单”的是 CSS properties。以下分组、默写目标及示例由我根据材料整理，不是老师发出的官方记忆清单，也不是期末排除范围。代码中的名字、数据和路径是练习示例。

## 00 · 先记什么，哪些直接读题

**先达到这四个目标：**

- 能默写 HTML 骨架及三种 CSS 写法。
- 能区分 function/method（调用操作）与 property（读取或设置值）。
- 能写出页面修改、form validation、timer、JSON、XHR、DOM、Canvas、drag and drop、storage 的基本流程。
- 能把题目给的参数、数据、条件和显示格式填入这些流程。

| 要记住的规则或语法 | 通常由题目给定、需要准确使用的内容 |
| --- | --- |
| CSS property、selector、三种 CSS 位置 | 指定颜色、字号、class/id 名称 |
| form 的 action/method/name/value 如何连接 | service URL、参数名和合法值；Week 13 明确说会给 documentation |
| 函数名、大小写、参数顺序、返回值用途 | JSON 字段和示例数据 |
| HTML entity 的写法 | 需要的 emoji 编号；老师说明会给，不要求背全部编号 |
| 状态更新、循环、条件、开始/停止逻辑 | 题目要求的时间间隔、数值范围、停止条件 |

**使用方法**：每次只处理一个主题。先读用途，遮住代码默写，再用对应题验证。不会的新主题先学 lecture/lab 示例；“看懂”和“能独立写”分开记录。主练现为 A1–A4 的八个 assignment 风格任务，Q01–Q29 作为 lab/课堂补充。知识点、技术规则及勘误仍适用。更新日期：2026-11-06。

## 01 · CSS properties：老师明确要求整理的清单

来源：Review；CSS lab Part 1/2/3；CSS lecture。对应 Q02。

先记语法：`property: value;`。冒号连接属性和值，分号分隔多个声明。需要单位的长度要按要求写单位。

| Property | 用途 | 最小写法 | 易错点 |
| --- | --- | --- | --- |
| `font-size` | 字号 | `font-size: 50px;` | 不把 HTML font 的 size 数值与 px 混为一谈 |
| `color` | 文字颜色 | `color: orange;` | 不写成 background-color |
| `background-color` | 背景颜色 | `background-color: lightgray;` | 名称中有连字符 |
| `padding` | 内容与边框之间的内边距 | `padding: 20px;` | 内边距不是外边距 |
| `text-align` | 水平对齐 | `text-align: right;` | 表格各列按题目分别设置 |
| `vertical-align` | 表格单元格等的垂直对齐 | `vertical-align: top;` | 不能把它当成所有 block 元素通用的垂直居中方法 |
| `border-style` | 边框线型 | `border-style: dashed;` | 常见 solid/dashed/dotted/none |
| `border-color` | 边框颜色 | `border-color: black;` | 与文字 color 分开 |
| `border-width` | 边框宽度 | `border-width: 2px;` | 按题目给单位和数值 |
| `border` | 合写宽度、线型、颜色 | `border: 1px solid black;` | 不漏线型 |
| `border-collapse` | 表格边框分离或合并 | `border-collapse: collapse;` | 设置在 table 上 |
| `border-spacing` | 相邻单元格边框之间的距离 | `border-spacing: 10px;` | 在 border-collapse: separate 时使用 |

同族属性：`padding-top`、`padding-right`、`padding-bottom`、`padding-left`。边框例如 `border-top-style`；把 top 换成 right、bottom、left，可设置其他方向；color/width 也有相同的方向写法。这些是在指定方向上设置同类样式。

**表格常用组合：**

```css
#teamTable {
  border-collapse: collapse;
}
#teamTable th, #teamTable td {
  border: 1px solid black;
  padding: 20px;
  vertical-align: top;
}
.rankColumn { text-align: right; }
.teamColumn { text-align: center; }
.memberColumn { text-align: left; }
```

**不要背错**：`border-collapse: collapse` 时不要指望 `border-spacing` 产生单元格间距。需要内侧留白用 padding。

## 02 · 三种 CSS 与 selector

来源：Review；CSS lab；A2/A4。对应 Q02。

**Inline CSS：style attribute，直接写在指定元素上。**

```html
<p style="color: blue; font-size: 50px;">Maya Lee</p>
```

**Document CSS：head 内的 style element。**

```html
<head>
  <style>
    .info { border: 2px dashed orange; }
    #heading { color: purple; }
  </style>
</head>
```

**External CSS：HTML 用 link 引入；CSS 文件只放 CSS 规则。**

```html
<link rel="stylesheet" href="competition.css">
```

```css
.info { border: 2px dashed orange; }
#heading { color: purple; }
```

| Selector | 含义 | 要记的区别 |
| --- | --- | --- |
| `p` | 所有 p 元素 | type/element selector |
| `.info` | class 为 info 的元素 | class 可给多个元素 |
| `p.info` | class 为 info 的 p 元素 | 同时满足 tag 与 class |
| `#heading` | id 为 heading 的元素 | 同一页面 id 应唯一 |
| `#table th` | table 内所有后代 th | 空格表示 descendant，层数不限 |
| `.members > li` | members 的直接 li 子元素 | `>` 表示 child，只看直接下一层 |
| `h1:hover` | 鼠标位于 h1 上时 | pseudo-class；冒号不可漏 |

`class="info special"` 表示一个元素有两个 class。多个 selector 共用规则可用逗号，例如 `h1, h2`。

**Lecture extra · cascade（层叠规则）与 link/list：** 对同一元素的同一属性，先考虑来源、重要性等层级，再比较适用规则的 specificity；不要简化成“永远后写覆盖前写”。在同一普通 author 样式层内，ID 通常比 class 具体，class 比 type 具体；同 specificity 等条件相同时，后写规则生效。普通 inline 样式通常高于普通样式表规则；不要把它推广到所有 !important 情况。见 M5。对应 Q22。

```css
.topics { list-style-type: square; }
a:link { color: blue; }
a:visited { color: purple; }
a:hover { color: orange; }
a:active { color: red; }
```

link / visited / hover / active 顺序可避免相同 specificity 下 hover 等被前后规则意外覆盖。visited 可读样式受浏览器隐私限制。

**评分要求**：题目指定 inline、document、external、class 或 id，就使用指定方式。相同外观不等于满足全部要求。

## 03 · HTML 骨架与高频标签

来源：Review；HTML lecture/lab；A1/A2。对应 Q01。

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Practice</title>
  <script>
    function sayHi() {
      // Show a message when the button is clicked.
      alert("Hi");
    }
  </script>
</head>
<body>
  <h1>My page</h1>
  <button onclick="sayHi()">Click me</button>
</body>
</html>
```

这里沿用课上常见的 head 布局；JavaScript 并非只能放 head，JSbasics 第 4 页也列出放在 body 末尾的方式。

| 内容 | 最小写法 |
| --- | --- |
| 标题、段落 | `<h1>Title</h1>`、`<h2>Details</h2>`、`<p>Text</p>` |
| 粗体、斜体、上下标 | `<b>Alex</b>`、`<i>leader</i>`、`x<sub>1</sub><sup>2</sup>` |
| 本课 HTML-only 的字号/颜色 | `<font size="5" color="blue">Text</font>`；有 CSS 要求时按题目改用 CSS |
| 无序列表 | `<ul><li>Alex</li><li>Bo</li></ul>` |
| 有序列表 | `<ol><li>Register</li><li>Practise</li></ol>` |
| 表格 | `<table border="1"><tr><th>Name</th></tr><tr><td>Alex</td></tr></table>` |
| 合并单元格 | `<td colspan="2">Heading</td>`、`<td rowspan="2">Monday</td>` |
| 本课 HTML-only 的单元格对齐 | `<td align="right" valign="top">Text</td>`；CSS 题使用 text-align/vertical-align |
| 图片 | `<img src="cat.png" width="100" height="100" alt="cat">` |
| 新标签链接 | `<a href="https://example.com" target="_blank">Read more</a>` |
| 页内链接 | `<a href="#details">Details</a>` 对应 `<h2 id="details">Details</h2>` |
| 换行、水平线 | `<br>`、`<hr>` |
| 分区与行内容器 | `<div>...</div>`、`<span>...</span>` |
| HTML 注释 | `<!-- comment -->` |

**Lecture extra · Q21 的结构：** `dl` 包住 description list；`dt` 是术语，`dd` 是解释。`pre` 保留空格和换行，`code` 表示代码内容，普通 code 元素本身不保证保留所有空白。colspan 跨列、rowspan 跨行；被上一行占住的位置不要再补一个 td。

**HTML attribute**：写在 start tag 内，如 `name="author"`。`href` 用于链接地址，`src` 用于图片等资源地址。

**空元素**：本课常见 `img/input/br/hr` 没有内容和结束标签；不要把“多数标签成对”记成“所有 HTML 标签必须成对”。XML 的规则更严格。

| Character entity | 含义 |
| --- | --- |
| `&nbsp;` | non-breaking space，多空格显示常用 |
| `&lt;`、`&gt;` | `<`、`>` |
| `&amp;` | `&` |
| `&quot;`、`&apos;` | 双引号、单引号 |
| `&#128516;` | 十进制编号的笑脸示例 |
| `&#x1F438;` | 十六进制编号的青蛙示例 |

连续普通空格通常会折叠；按题目要求使用 entity。emoji 编号若已给定，重点是会写 entity，不是背一大串编号。

## 04 · 页面修改三步与 function/property 区分

来源：Review；JSbasics/JS2；L03/L09。对应 Q03/Q04/Q10。

**三步：给元素 id → getElementById → 读写正确 property。**

```html
<input id="nameInput" type="text">
<span id="message"></span>
<img id="animal" alt="animal">
```

```javascript
var nameField = document.getElementById("nameInput");
var name = nameField.value;
document.getElementById("message").innerHTML = "Hi " + name;
document.getElementById("animal").src = "cat.png";
```

| 名称 | 类型 | 正确用法 | 记忆点 |
| --- | --- | --- | --- |
| `getElementById()` | method | `document.getElementById("message")` | 返回元素；找不到返回 null |
| `.innerHTML` | property | `display.innerHTML = html;` | 设置/读取内部 HTML；课堂常用于显示已构造内容 |
| `.value` | property | `field.value = "Hi";` | text field、select、textarea 的值 |
| `.checked` | property | `checkbox.checked = true;` | checkbox 的选中状态是 boolean |
| `.src` | property | `image.src = "cat.png";` | 图片地址 |
| `.style.color` | property | `heading.style.color = "pink";` | JS 改样式 |
| `.length` | property | `list.length` | 数量，不写 length() |

调用 function/method 使用括号；读写 property 通常不加调用括号。`field.value()`、`image.src()` 都不是这里需要的写法。

**id 字符串要匹配**：CSS 写 `#message`，但 `getElementById("message")` 的参数不带 #。大小写、拼写错误会导致找不到元素。

**数字输入：**

```javascript
var number1 = Number(document.getElementById("input1").value);
var number2 = Number(document.getElementById("input2").value);
var result = number1 + number2;
```

`"2" + "3"` 是 `"23"`；`Number("2") + Number("3")` 才是 `5`。题目若要求验证空输入，先检查空字符串，再转换；`Number("")` 会得到 0。

## 05 · Events 与输出

来源：Review；Event lecture；L03；A2。对应 Q03/Q04/Q17。

| Event | 何时触发 |
| --- | --- |
| `onclick` | 点击元素，按钮、图片、文字都可以 |
| `onmouseover` / `onmouseout` | 鼠标进入 / 离开元素 |
| `onmousedown` / `onmouseup` | 按下 / 松开鼠标按钮 |
| `onload` | 相关资源加载完成；body 常用于初始化 |
| `onfocus` / `onblur` | 获得 / 失去焦点 |
| `onchange` | 值被确认改变；文本框通常在改动后失去焦点时，select 在提交选择时 |
| `onselect` | 在文本框/textarea 中选中文字；不是“选中下拉选项” |
| `onsubmit` | 提交 form，常用来校验 |
| `ondragstart` / `ondragover` / `ondrop` | 开始拖动 / 拖过目标 / 放下 |

```html
<button onclick="showMessage('Hi')">Click me</button>
<body onload="loadData()">
```

上面是两种独立的事件绑定写法示意；完整页面只使用一个 body。

```javascript
function showMessage(message) {
  // Send the message to two different outputs.
  alert(message);
  console.log(message);
}
```

**Lab detail：Enter 命令。**

```html
<input id="command" onkeydown="runCommand(event)">
```

```javascript
function runCommand(event) {
  if (event.key == "Enter") {
    var command = document.getElementById("command").value;
    console.log(command);
  }
}
```

**直接练习补齐：Q23。** mouseover 交换图片时，先保存旧值，不能直接连续覆盖成同一张图。

```javascript
var left = document.getElementById("left");
var right = document.getElementById("right");
var oldSource = left.src;
left.src = right.src;
right.src = oldSource;
```

这是函数内片段，需结合两个已有 img 及 onmouseover handler。若显示 alt，也应跟着更新。

**Lecture/Lab detail**：`confirm("Continue?")` 返回 true/false；`prompt("Answer?")` 通常返回输入字符串，点击 Cancel 返回 null。使用数字答案时按需要转换或比较，不把取消当成正确回答。

## 06 · Web form：action、method、name、value

来源：Review；WebForm lecture/lab；A3 Q2。对应 Q07。

| 名称 | 回答的问题 | 示例 |
| --- | --- | --- |
| `action` | 提交给哪个服务？ | `/search` 或题目给定完整 URL |
| `method` | 用哪种请求方法？ | `get` / `post`，严格按题目 |
| `name` | 服务参数叫什么？ | `author`、`sub` |
| `value` | 这个选项提交什么值？ | `mth`、`bio` |
| `id` | 页面中如何定位这个元素？ | `authorInput`，供 JS/CSS 使用 |

**id 不代替 name。显示文字不代替 value。**

```html
<form action="/search" method="get">
  Author: <input type="text" id="authorInput" name="author">
  Year: <input type="text" name="year">
  <label><input type="checkbox" name="sub" value="mth">Mathematics</label>
  <label><input type="checkbox" name="sub" value="bio">Biology</label>
  <label><input type="radio" name="format" value="p" checked>Print</label>
  <label><input type="radio" name="format" value="e">Electronic</label>
  <input type="submit" value="Search">
  <input type="reset" value="Clear">
</form>
```

checkbox 可提交同名参数的多个值；radio 同组要用相同 name。上述例子可产生 `author=smith&year=2024&sub=mth&sub=bio&format=e`。

```html
<select name="day">
  <option value="mon">Monday</option>
  <option value="fri" selected>Friday</option>
</select>
<textarea name="comment" rows="4" cols="30"></textarea>
```

**评分两部分**：控件和页面是否符合要求；参数名、参数值、action/method 是否匹配服务 documentation。

**容易背错的 reset**：它恢复默认值，不保证把所有东西清空；例如默认 Print 在 reset 后仍选中。见来源 M3。

## 07 · Form validation：必须记住 return 的传递

来源：Review；FormValidation lecture/lab。对应 Q08。

```html
<form action="/search" method="get" onsubmit="return validateForm()">
  <input id="email" name="email" type="text">
  <span id="error"></span>
  <input type="submit" value="Submit">
</form>
```

```javascript
function validateForm() {
  var email = document.getElementById("email").value;
  if (email.trim() == "") {
    document.getElementById("error").innerHTML = "Email is required";
    return false;
  }
  document.getElementById("error").innerHTML = "";
  return true;
}
```

- 检查不通过：显示错误，return false；检查通过：清掉旧错误，return true。
- form 上的 `return` 也要写，否则没有把函数结果交给提交事件。
- `trim()` 去掉两端空白；可识别只输入空格的情况。它不会删除字符串中间全部空格。
- 随机数学题：页面生成题时保存两数；校验时检查同一题。不要校验时突然换题。
- Week 13 明确说：题目要求 validation 才做，不自行添加未要求的检查。

**Lab detail：内建约束（Q25）** `required`、`minlength/maxlength`、`min/max`、`type="email"`、`pattern`。题目若指定 JavaScript validation，要按指定方法实现；HTML 内建校验与 JS 自定义逻辑是不同写法。

**最小例子：只在题目要求这些限制时使用。**

```html
<input name="quantity" type="number" min="1" max="5" step="1" required>
<input name="code" pattern="[A-Z]{3}" required>
<input name="email" type="email" required>
```

pattern 匹配整个值；此处限制恰好三个大写英文字母。空值还需 required。要独立练 JS validation，可在相应 form 上用 novalidate 跳过内建检查；否则内建检查可能先拦住提交。

## 08 · Random、counter 与 timer

来源：Review；JS2/Animation B；L06；A3 Q1。对应 Q03/Q05/Q06/Q08。

| 写法 | 结果 |
| --- | --- |
| `Math.random()` | 从 0 到 1 的随机小数，包含 0、不包含 1 |
| `Math.floor(Math.random() * 10)` | 整数 0–9 |
| `Math.floor(Math.random() * 10) + 1` | 整数 1–10 |
| `Math.floor(Math.random() * 6) + 1` | 骰子值 1–6 |
| `Math.floor(Math.random() * images.length)` | 有效 array index，0 到 length−1 |

`Math.floor()` 是向下取整。整数端点 a 到 b（包含两端，且 a ≤ b）可写 `Math.floor(Math.random() * (b - a + 1)) + a`。

**timer：两个参数，保存返回的 ID。**

```html
<button onclick="startCounter()">Start</button>
<button onclick="stopCounter()">Stop</button>
<span id="count">0</span>
```

```javascript
var count = 0;
var timer = null;

function tick() {
  count += 1;
  document.getElementById("count").innerHTML = count;
}
function startCounter() {
  // Keep only one active timer.
  if (timer != null) { return; }
  timer = setInterval(tick, 1000);
}
function stopCounter() {
  clearInterval(timer);
  timer = null;
}
```

`setInterval(tick, 1000)`：传函数，不写 tick()；1000 是毫秒。timer 在两个处理函数都能访问的位置保存，本课常用函数外的变量。

**Lab detail：只停止、停止并重置是不同要求。** 上例 Stop 保留当前 count；若题目如 A3 要恢复初始值，还须 `count = 0`（或题目指定的初值）并更新页面。重新开始的第一步、递增量和起始时刻都按题目处理。

## 09 · JSON：语法、类型与两个转换函数

来源：Review；JSON lecture/lab。对应 Q09/Q10。

```json
{
  "code": "CSIT884",
  "cp": 6,
  "coreFlag": true,
  "teachers": [
    {"firstName": "Maya"},
    {"firstName": "Alex"}
  ]
}
```

- object 用 `{}`，array 用 `[]`。对象成员是 name/value pair，用冒号连接。
- JSON 属性名和字符串用双引号；数字与 boolean 不加引号；没有尾随逗号。
- JavaScript object 的属性名可以带引号，也可以在合法标识符条件下省略引号。不要记成“object 不能有引号”。
- JSON 文本与 JavaScript object 是不同东西。JSON 本身还可表示其他 JSON 值；本课程主要练 object/array。

| Function | 方向 | 用法 |
| --- | --- | --- |
| `JSON.stringify(value)` | JS 值 → JSON string | 用于显示、保存或传输文本 |
| `JSON.parse(text)` | JSON string → 对应 JS 值 | 课堂通常还原为 object/array，再访问字段 |

```javascript
var subject = {code: "CSIT884", cp: 6, coreFlag: true};
var jsonText = JSON.stringify(subject, null, 2);
var restored = JSON.parse(jsonText);
console.log(restored.code);
```

**老师要求这两个函数记熟。** `null, 2` 是课件的缩进写法，2 表示两格缩进；只有一个参数也能转换。

**双向控件映射：** 读取 cp 时用 Number；读取 checkbox 时用 checked；textarea 用 value；解析后通过 object 字段填回对应控件。

```javascript
var subject = {};
subject.cp = Number(document.getElementById("cp").value);
subject.coreFlag = document.getElementById("core").checked;
document.getElementById("jsonText").value = JSON.stringify(subject, null, 2);
```

**Lecture extra · 只输出指定字段：** `JSON.stringify(subject, ["code", "cp"], 2)` 的第二个参数是允许的 property 名称数组；`null` 表示不做这类筛选。此数组会应用于遇到的 object，不是按 array 索引筛选条目。

嵌套读取：`student.subjectList[0].code`。顺序是“取 array → 取第一个 object → 取 code”。

## 10 · XML：正确结构与数据完整

来源：Review；XMLDTD lecture；week7；L07。对应 Q11。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<studentList>
  <student number="2026001">
    <firstName>Maya</firstName>
    <mark>84</mark>
  </student>
  <student number="2026002">
    <firstName>Alex</firstName>
    <mark>72</mark>
  </student>
</studentList>
```

- 本课作答写 XML declaration，并放在第一行开头，前面不加空行或空格。一般 XML 规则中 declaration 可选；week7 老师另有明确的课程作答要求。
- 恰好一个 root element，包住其余所有元素。
- tag 大小写敏感；正确关闭并嵌套。空元素可用 `<item/>`。
- attribute 值必须有引号。
- XML 保存数据，不是复刻表格排版。按截图保留姓名、编号、每条课程记录及其字段；不要只写部分数据。
- 多条同类记录可放进明确的 list 容器。
- `<` 与 `&` 等在数据中按需要转义为 entity；不要把标签边界符号当普通文本。
- 只问 XML 就写 XML；问到 DTD 才加 DTD。

## 11 · DTD：记声明、顺序与次数

来源：Review（DTD 按题意写）；XMLDTD lecture；L07 Q4。对应 Q12。

下面是完整的 internal DTD 示例。DOCTYPE 的名字与 XML root 相同。

```xml
<?xml version="1.0"?>
<!DOCTYPE studentList [
  <!ELEMENT studentList (student+)>
  <!ELEMENT student (firstName,mark)>
  <!ATTLIST student number CDATA #REQUIRED>
  <!ELEMENT firstName (#PCDATA)>
  <!ELEMENT mark (#PCDATA)>
]>
<studentList>
  <student number="2026001">
    <firstName>Maya</firstName>
    <mark>84</mark>
  </student>
</studentList>
```

| 写法 | 记忆含义 |
| --- | --- |
| `<!ELEMENT firstName (#PCDATA)>` | 文本元素 |
| `(firstName,mark)` | 两个子元素按此顺序出现 |
| `student+` | 1 次或以上 |
| `student*` | 0 次或以上 |
| `student?` | 0 或 1 次 |
| `CDATA #REQUIRED` | 该 attribute 必须存在 |
| `CDATA #IMPLIED` | 可选 attribute，没有默认值 |
| `CDATA "default"` | 默认属性值 |
| `CDATA #FIXED "value"` | 固定属性值 |

选择写法是 `(child1|child2)`。文本元素用 `#PCDATA`；attribute 类型示例用 `CDATA`，不要混写。

**Lecture extra：external DTD** 用 `<!DOCTYPE studentList SYSTEM "student.dtd">` 引用，声明单独放在 student.dtd。题目要求 internal 时不要自行换成 external。

## 12 · XSD：simpleType、complexType、sequence、restriction

来源：Review；XSD lecture；L08。对应 Q13。

| 情况 | 类型/写法 |
| --- | --- |
| 只有文本，没有 child element，也没有 attribute | simple type |
| 含 child elements | complex type |
| 含 attributes，即使只是文本内容 | complex type |
| 子元素按顺序出现 | xsd:sequence |
| 限定允许的取值 | simpleType + restriction |

**基本结构：child elements 在 sequence，attributes 写在 sequence 后。**

```xml
<?xml version="1.0"?>
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <xsd:element name="studentList">
    <xsd:complexType>
      <xsd:sequence>
        <xsd:element name="student" minOccurs="1" maxOccurs="unbounded">
          <xsd:complexType>
            <xsd:sequence>
              <xsd:element name="firstName" type="xsd:string"/>
              <xsd:element name="mark" type="xsd:integer"/>
            </xsd:sequence>
            <xsd:attribute name="number" type="xsd:string" use="required"/>
          </xsd:complexType>
        </xsd:element>
      </xsd:sequence>
    </xsd:complexType>
  </xsd:element>
</xsd:schema>
```

`minOccurs="1" maxOccurs="unbounded"` 是至少一条、数量无上限；省略 minOccurs/maxOccurs 的默认值各为 1。`use="required"` 表示 attribute 必须存在。

**Lab detail：数字范围与枚举。下面两个 element 是可放入 schema 相应位置的片段。**

```xml
<xsd:element name="score">
  <xsd:simpleType>
    <xsd:restriction base="xsd:integer">
      <xsd:minInclusive value="0"/>
      <xsd:maxInclusive value="300"/>
    </xsd:restriction>
  </xsd:simpleType>
</xsd:element>
<xsd:element name="band">
  <xsd:simpleType>
    <xsd:restriction base="xsd:string">
      <xsd:enumeration value="A"/>
      <xsd:enumeration value="B"/>
      <xsd:enumeration value="C"/>
      <xsd:enumeration value="D"/>
    </xsd:restriction>
  </xsd:simpleType>
</xsd:element>
```

Inclusive 包含边界。编号如 `00025142` 按题目用 string，不能因为全是数字就擅自改为 integer。

常见 type：`xsd:string`、`xsd:integer`、`xsd:decimal`、`xsd:boolean`、`xsd:date`、`xsd:dateTime`、`xsd:anyURI`。选择取决于题目说明。

**Lecture extra：文本带 attribute。** 如 `<price code="SALE">39.50</price>` 使用 complexType + simpleContent + extension，而不是只写 simpleType。

```xml
<xsd:element name="price">
  <xsd:complexType>
    <xsd:simpleContent>
      <xsd:extension base="xsd:decimal">
        <xsd:attribute name="code" type="xsd:string"/>
      </xsd:extension>
    </xsd:simpleContent>
  </xsd:complexType>
</xsd:element>
```

**Schema 连接示例校正（Q26）：** 课件 XSD 第 4–6 页把单个文件名写成 `xsi:schemaLocation="student.xsd"`。对没有 targetNamespace 的示例，应写下面的连接。`schemaLocation` 的值用于 namespace URI 与文件位置的配对；不是单个文件名。见 M4。

```xml
<student xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:noNamespaceSchemaLocation="student.xsd">
  <firstName>Maya</firstName>
</student>
```

这只演示 instance document 的连接语法；内容仍需与实际 student.xsd 定义相匹配。well-formed 是符合 XML 语法；valid 还要求符合所用 DTD/XSD，二者不能混为一谈。

## 13 · AJAX：必须能默写的课堂 XHR 流程

来源：Review；AJAX lecture；L11；A4。对应 Q14/Q15。

**记忆链：create → handler → open/send → readyState/status → responseText → parse → display。**

Week 13 明确要求使用本课的 `XMLHttpRequest` 技术；不能用 fetch 等其他技术替代指定写法。

HTML 页面部分：

```html
<button onclick="loadData()">Load data</button>
<div id="result"></div>
```

JavaScript 部分；这里假设服务提供格式正确的示例 JSON：

```javascript
function loadData() {
  // 1. Create a request and register its callback.
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4) {
      if (xhttp.status == 200) {
        // 2. Read JSON text and reconstruct the object.
        var obj = JSON.parse(xhttp.responseText);
        display(obj);
      } else {
        document.getElementById("result").innerHTML =
          "Request failed: " + xhttp.status;
      }
    }
  };
  // 3. Send an asynchronous GET request.
  xhttp.open("GET", "data.json", true);
  xhttp.send();
}

function display(obj) {
  // 4. Build the required output from the actual response.
  var html = "<h2>" + obj.name + "</h2><ul>";
  for (var i = 0; i < obj.items.length; i++) {
    html += "<li>" + obj.items[i].title + "</li>";
  }
  html += "</ul>";
  document.getElementById("result").innerHTML = html;
}
```

对应 data.json 示例：

```json
{"name":"Library","items":[{"title":"Book A"},{"title":"Book B"}]}
```

| 名称 | 含义 |
| --- | --- |
| `new XMLHttpRequest()` | 建立 request object |
| `onreadystatechange` | 状态变化时运行的回调 property |
| `readyState == 4` | 请求处理完成 |
| `status == 200` | 本课示例中的成功状态判断 |
| `responseText` | 服务返回的文本，不是已解析 object |
| `open("GET", url, true)` | 方法、地址、异步标记 |
| `send()` | 发出请求 |

**别只背请求壳子**：必须会按 JSON 结构读取嵌套字段、遍历 array、构造指定 HTML。例如 `weather.current.temperature_2m`，或循环生成机场表格。

输入驱动的 URL 按文档拼接参数，例如 `"/weather?latitude=" + latitude + "&longitude=" + longitude`。不要把某个城市的坐标固定写在请求里。

## 14 · DOM：查找、创建、插入、删除、替换

来源：Review；DOM lecture；L13。对应 Q18。

| Method | 用途与最小写法 |
| --- | --- |
| `document.getElementById("orders")` | 查找一个 id 对应元素 |
| `document.getElementsByTagName("li")` | 按 tag 找一组元素，用 length 和索引访问 |
| `document.getElementsByClassName("info")` | 按 class 找一组元素，参数不带点 |
| `document.createElement("li")` | 创建 element node，尚未加入页面 |
| `document.createTextNode(message)` | 创建 text node |
| `parent.appendChild(child)` | 加到父节点末尾 |
| `parent.insertBefore(newChild, oldChild)` | 插入到指定现有子节点之前 |
| `parent.removeChild(child)` | 从实际父节点删除其子节点 |
| `parent.replaceChild(newChild, oldChild)` | 用新节点替换旧节点；新在前，旧在后 |
| `element.getAttribute("data-quantity")` | 读取 attribute；本例得到数量字符串 |
| `element.setAttribute("data-quantity", 3)` | 设置 attribute |

```html
<ul id="orders"></ul>
```

```javascript
var list = document.getElementById("orders");
var li = document.createElement("li");
var text = document.createTextNode("Book A x 3");
li.appendChild(text);
li.setAttribute("data-quantity", 3);
list.appendChild(li);
```

**Q27 组查找：** 返回集合的方法要循环，不把整个集合当成一个 element。HTMLCollection 通常是 live collection：DOM 变化会反映在集合中。循环时不要一边删匹配项一边盲目增加索引，否则可能跳过元素。

```javascript
var topics = document.getElementsByClassName("topic");
for (var i = 0; i < topics.length; i++) {
  topics[i].style.color = "orange";
}
```

创建不等于显示；必须把节点接入页面中的 DOM tree。数量参与加减时用 `Number(...)` 转换。

**课件写法纠正**：删除普通 li 应在其实际父节点上调用，不直接套用 `document.removeChild(li)`。参见 M2。

## 15 · JavaScript 修改 CSS

来源：Review；CSS with JavaScript lecture；L10。对应 Q20。

```javascript
var heading = document.getElementById("heading");
heading.style.color = "pink";
heading.style.fontSize = "50px";
heading.style.backgroundColor = "lightgray";
```

| CSS property | JavaScript property |
| --- | --- |
| `font-size` | `style.fontSize` |
| `font-style` | `style.fontStyle` |
| `background-color` | `style.backgroundColor` |
| `border-bottom-style` | `style.borderBottomStyle` |
| `border-left-color` | `style.borderLeftColor` |
| `padding-right` | `style.paddingRight` |

连字符写法转为 camelCase。不要写 `heading.style.font-size` 或课件示意式 `style.[property]` 当作实际点号代码。

**Lecture extra：transition 与 transform。**

```css
#heading {
  transition: transform 0.3s ease-in-out;
}
#heading:hover {
  transform: scale(2);
}
```

transition 指定变化过程；transform 指定旋转/位移/缩放/倾斜。课件列出 `rotate()`、`translate()`、`scale()`、`skew()`。transition 合写顺序为 property、duration、timing-function、delay。

## 16 · Canvas：先 context，再 path，再画

来源：Review；Canvas lecture；L12 Q1。对应 Q16。

```html
<canvas id="canvas" width="320" height="200"></canvas>
```

```javascript
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.beginPath();
ctx.moveTo(80, 20);
ctx.lineTo(20, 160);
ctx.lineTo(260, 160);
ctx.closePath();
ctx.fillStyle = "plum";
ctx.fill();
ctx.strokeStyle = "purple";
ctx.lineWidth = 3;
ctx.stroke();

ctx.font = "16px Arial";
ctx.fillStyle = "black";
ctx.fillText("A", 84, 16);
```

| 名称 | 记忆点 |
| --- | --- |
| `getContext("2d")` | 取得绘图 context |
| `beginPath()` | 开始新路径，避免和旧路径混在一起 |
| `moveTo(x,y)` | 设置路径起点/移动当前点 |
| `lineTo(x,y)` | 添加线段 |
| `closePath()` | 连接回该子路径起点 |
| `stroke()` / `fill()` | 描边 / 填充 |
| `strokeStyle` / `fillStyle` / `lineWidth` | 样式 properties，不是调用函数 |
| `font` | 绘图文字字体 property |
| `fillText(text,x,y)` / `strokeText(text,x,y)` | 实心文字 / 描边文字 |
| `clearRect(x,y,width,height)` | 从指定点清除宽×高的区域 |

画布左上角为 (0,0)，x 向右、y 向下。对边中点用输入数字的平均值，先 Number 转换，再计算。

**课件写法纠正**：clearRect 后两个参数是 width/height，不是右下角坐标。清全图使用 `canvas.width, canvas.height`。参见 M1。

## 17 · Drag and drop：两个对象、三个事件

来源：Review；DragDropCanvas lecture；L12 Q2/Q3。对应 Q17。

```html
<img id="cat" src="cat.png" draggable="true" ondragstart="startDrag(event)" alt="cat">
<div ondragover="allowDrop(event)" ondrop="dropAnimal(event, 'cat')">CAT</div>
<span id="count">0</span>
```

```javascript
var correctDrops = 0;
function startDrag(event) {
  event.dataTransfer.setData("animal", event.target.id);
}
function allowDrop(event) {
  // Allow the target to receive a drop.
  event.preventDefault();
}
function dropAnimal(event, expectedAnimal) {
  event.preventDefault();
  var draggedAnimal = event.dataTransfer.getData("animal");
  if (draggedAnimal == expectedAnimal) {
    correctDrops += 1;
    document.getElementById("count").innerHTML = correctDrops;
  }
}
```

**记忆链**：源元素 draggable → dragstart 存 ID → dragover 允许 drop → drop 取 ID → 判断匹配 → 更新页面。

- `setData` 和 `getData` 使用同一个 key，本例为 animal。
- `event.target` 是实际触发目标，可能是接收区中的子元素。上例用参数明确目标动物，避免把内部文字/图片误当外层接收区。
- 要求源图保留时，创建一张新图片加入目标，不把原图片节点直接移走；新图不要复制原 id。

## 18 · Web storage 与 JSON validation

来源：Review（点名 storage）；WebStorage lecture；L14。对应 Q19/Q28。

| 名称 | 用法与区别 |
| --- | --- |
| `localStorage.setItem(key, text)` | 按 key 保存字符串 |
| `localStorage.getItem(key)` | 读取字符串；不存在时返回 null |
| `localStorage.removeItem(key)` | 删除指定 key |
| `localStorage` | 通常跨会话保留，无预设过期时间；用户清除等情况会移除 |
| `sessionStorage` | 同一页会话内保存，刷新仍在；关闭相应标签页后结束 |
| `typeof(Storage) != "undefined"` | 课件中的支持检查；不保证任何环境下都一定能成功写入 |

Q28 补齐 lecture 的 task-list 流程：array of objects → stringify → setItem；初始化 getItem → null 检查 → parse → display；删除指定 ID 后再次保存；Clear 用 removeItem 清本题 key。不要用 localStorage.clear() 顺手清掉其他题目的草稿。Date 的毫秒时间可能重复，若题目要求唯一 ID 还需额外处理。

Storage 按 origin 区分（protocol + host + port）。测试时使用同一地址；改变端口或 host 可能看到另一份存储。

**保存 object/array：先 stringify，读取后 parse。**

```javascript
var tasks = [{task: "Read notes", urgency: "High"}];
localStorage.setItem("tasks", JSON.stringify(tasks));

var saved = localStorage.getItem("tasks");
if (saved != null) {
  tasks = JSON.parse(saved);
}
```

**保存 textarea 草稿：直接存原始字符串，包括尚未写对的 JSON。**

```javascript
function saveDraft() {
  var text = document.getElementById("draft").value;
  localStorage.setItem("jsonDraft", text);
}
function loadDraft() {
  var saved = localStorage.getItem("jsonDraft");
  if (saved != null) {
    document.getElementById("draft").value = saved;
  }
}
```

用 body 的 onload 调用 loadDraft；输入事件或题目规定的时机调用 saveDraft。上面代码假设该练习环境允许 storage。typeof 检查只能表明 API 存在；实际 getItem/setItem 仍可能抛异常。Q19 参考答案补了 try/catch，使 storage 被禁用时仍能编辑和验证。见 M6。这是运行健壮性补充，不增加老师未要求的评分项。

**Lab detail：验证 JSON 语法需要处理 parse 抛出的异常。**

```javascript
function validateJSON() {
  var text = document.getElementById("draft").value;
  var result = document.getElementById("result");
  try {
    JSON.parse(text);
    result.style.color = "green";
    result.textContent = "JSON is valid";
  } catch (error) {
    result.style.color = "red";
    result.textContent = "Error: " + error.message;
  }
}
```

textContent 用于显示纯文字；此处是为错误信息补充的 DOM 写法。浏览器的具体报错文字可不同，重点是成功/失败判断正确。语法合法不等于符合某个业务数据格式；该 lab 只要求 JSON 语法验证。

## 19 · 少量 lecture 补充：先掌握核心，再回查

来源：JSbasics、Animation B、CSS with JS、FormValidation lecture；不是 Week 13 新增的额外范围。

| 内容 | 最少要认得的写法与边界 |
| --- | --- |
| Array | `list[i]`、`list.length`、`list.push(item)`、`list.splice(index,1)`、`list.indexOf(item)`；索引从 0，找不到通常返回 −1 |
| 遍历 | `for (var i=0; i<list.length; i++) { ... }`；循环体里的省略号必须换成实际任务 |
| String | `text.length`、`toUpperCase()`、`toLowerCase()`、`indexOf()`、`includes()`、`slice(start,end)`；slice 不包含 end |
| Date | `new Date()`、`getHours/getMinutes/getSeconds`、`getTime()`；getMonth 为 0–11，getDate 为月内日期，getDay 为周几 0–6 |
| Scope | var 在函数内通常是 function scope；let 是 block scope。两者在最外层声明时另按相应脚本环境处理 |
| Template literal | 反引号字符串中的 `${name}` 插入表达式值 |
| 其他 CSS | `font-family`、`font-style`、`width/height`、`margin-left`、`opacity`、`list-style-type/image`、`box-shadow` |
| Transition properties | `transition-property/duration/timing-function/delay`，或合写 `transition` |
| Transform | `rotate()`、`translate()`、`scale()`、`skew()`，用在 transform 值中 |

**Lecture extra · 需要能解释而不只眼熟：**

```javascript
function scopeExample() {
  if (true) {
    var functionValue = 1;
    let blockValue = 2;
  }
  console.log(functionValue); // 1: var belongs to this function.
  // console.log(blockValue); // ReferenceError: blockValue is outside its block.
}
```

var 的声明会提升，但赋值留在原位置：`console.log(x); var x = 1;` 在同一函数/脚本适当环境下先得到 undefined。let 在初始化前不可读取，会触发 ReferenceError；不要背成“let 提升后可以读”。这些属于 scope/hoisting 补充，不是老师公布的独立题型。

Q24 练 Array/String/Date；Q29 练 select 运算分支。`indexOf` 找不到是 -1；`splice(-1,1)` 会删最后一项，所以先检查。`slice(start,end)` 不含 end。`new Date(2026,10,11)` 是本地时间的 11 月 11 日；`getMonth()+1` 得到人类月份；`getDay()` 是周几（0 周日），`getDate()` 是月内日期。`setDate(getDate()+1)` 会处理跨月，不用自己手算天数。

HTML lecture 还讲了 index.html 作为常见默认入口，以及 XHTML 的严格语法：小写 element/attribute 名、属性值引号、正确嵌套和关闭、空元素自闭合。默认入口取决于 server 配置；不要把 XHTML 的全部规则无差别套到 HTML。它们仍列为阅读回忆点，没有伪装成老师强调的编程大题。

**这些内容仍是已教内容，不能据本笔记的排序认定为“不考”。** 需要结合题目时再回查相应 lecture；函数名必须写全，如 `now.getHours()`，不能只写词根。

## 20 · 最容易丢分的检查清单

- HTML-only 题没有擅自使用 CSS；列表、控件、selector、文件方式均按题意。
- JavaScript 有注释；函数与变量名有意义；大小写正确。
- 输入数值按需要 Number 转换；checkbox 使用 checked。
- name、value、action、method 与文档一致，不自作主张改参数。
- form 的 onsubmit 写 return；不添加未要求的 validation。
- timer ID 可被停止函数访问；重复 Start、Stop、reset/restart 按题目分别处理。
- JSON 保留正确数据类型；parse/stringify 方向正确。
- XML 单根、声明、嵌套和属性引号正确；数据不遗漏；只在要求时写 DTD。
- XSD 结构、type、次数、顺序、attribute 及取值限制匹配题意。
- AJAX 是 XMLHttpRequest；检查完成和成功；实际读取并显示响应，不硬编码截图结果。
- DOM 操作使用实际父节点；新增节点接入页面；替换参数是新在前、旧在后。
- Canvas 清除用宽高；路径与填充/描边顺序正确。
- dragover 允许 drop；匹配后才更新；源图是否保留按题意。
- Storage 首次 null、保存原文/对象两种情况分清；刷新恢复已检查。

## 21 · English recall checks

Hide the code before answering. These checks are for memory practice, not additional predicted exam questions.

- Can you write inline, document and external CSS without looking?
- What is the difference between a descendant selector and a child selector?
- Which property do you use for a text field, a checkbox and an image?
- What do action, method, name and value mean in a form?
- Why must onsubmit use the validation function's return value?
- How do you generate an integer from 1 to 10?
- How do you prevent a second animation timer from starting?
- What is the direction of JSON.stringify and JSON.parse?
- Can you write an XML document and a matching internal DTD?
- When does an XML element need a complex type in XSD?
- Can you write the classroom XMLHttpRequest workflow and display an object array?
- Which node must call removeChild or replaceChild?
- What are the four clearRect arguments?
- What must the dragover handler do?
- When should you save raw text, and when should you use JSON.stringify?
- How do rowspan and colspan change the cells you must write in the next row?
- Why does an ID rule beat a later class rule in the ordinary CSS example?
- What do prompt Cancel, an empty prompt string and confirm Cancel return?
- What does indexOf return when it cannot find a value?
- Which Date methods return the month, weekday and day of the month?
- What is the difference between a live collection and a single element?
- Why does a text element with an attribute need simpleContent in XSD?
- What do well-formed and valid mean for XML?
- What changes when localStorage is replaced with sessionStorage?
- How do var and let differ inside a block?

## 22 · 来源与校正说明

核心来源为 Week 13 转录 `week13.txt`（用户提供材料）。相关定位按转录字符位置约为：CSS 33745–35517；页面修改与 events 35900–38200；form/validation/random/timer 38200–42900；XML/DTD/XSD/JSON 42900–47400；XHR/Canvas/drag and drop/DOM/storage 47400–52356。转录没有时间戳，不虚构分钟数。

补齐语法使用了同目录中 HTML、CSS、JSbasics、JS2、Event、Animation、WebForm、FormValidation、XMLDTD、XSD、JSON、JSCSS、AJAX、DOM、DragDropCanvas、WebStorage 课件，以及已归档的 L01–L14 练习与 A1–A4。尤其：CSS lab 两份原文补全属性；JSbasics 第 4 页核对 script 位置；XSD 第 8/10/11/13/14/15 页核对类型和结构；WebStorage 第 2/4/25/30 页核对存储用法。

语音识别中的 Jason/SSD/get element 等已还原为标准技术名。例子是按课堂技术整理的自足示意，不宣称为老师原题答案。

- M1：[MDN clearRect](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect)：核对 x/y/width/height，见第 16 节。
- M2：[MDN removeChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)：核对实际父子节点关系，见第 14 节。
- M3：[MDN form reset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset)：核对恢复默认值，见第 06 节。

- M4：[W3C XML Schema §2.6](https://www.w3.org/TR/xmlschema-1/#Instance_Document_Constructions)：核对 noNamespaceSchemaLocation 与 schemaLocation。
- M5：[MDN specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Specificity)：核对层叠与 specificity 的适用前提。
- M6：[MDN Web Storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)：API 存在与存储实际可用是两回事。

本笔记用于考前复习和闭卷输出训练。Week 13 的原始考试要求仍以 Moodle 正式信息为准；记忆笔记不改变考试规则。
