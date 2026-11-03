# CSIT884 · 闭卷输出速记表

2026-11-04 核查版。配合完整记忆笔记使用。Review = Week 13 点名；Lab detail = 练习需要的细节。此表是复习工具，不是官方排除范围。

## 01 · CSS 与 HTML

**Review**：CSS 记 `property: value;`；多项用分号。Inline 在元素的 style；document 在 head 的 style；external 用 link。

`font-size`、`color`、`background-color`、`padding`、`text-align`、`vertical-align`、`border-style`、`border-color`、`border-width`、`border`、`border-collapse`、`border-spacing`。

`.class` 可重复，`#id` 应唯一；`E F` 是后代，`E > F` 是直接子元素。border-spacing 与 separate 配合。

HTML：`html/head/title/body`；`h1/p`；`ul/ol/li`；`table/tr/th/td`；`img src`；`a href target="_blank"`；`&nbsp;`；entity 为 `&#编号;` 或 `&#x十六进制;`。

## 02 · 找元素，再选择 property

```javascript
var e = document.getElementById("theId");
```

显示 HTML：`e.innerHTML`；文本框/select/textarea：`e.value`；checkbox：`e.checked`；图片：`e.src`；样式：`e.style.color`、`e.style.fontSize`。

function/method 调用有括号，property 读写不这样调用。getElementById 的参数不带 #。

数字计算前按需要 `Number(field.value)`。JS 区分大小写，要求注释和有意义的名字。

## 03 · Form 与 validation

`action` = 服务地址；`method` = GET/POST；`name` = 参数名；`value` = 提交值；`id` = 页面定位。

checkbox 同名可多值；radio 同组同 name。参数名/值严格照 documentation。reset 恢复默认值。

```html
<form action="/search" method="get" onsubmit="return validateForm()">
```

验证失败 `return false`；通过 `return true`；`trim()` 检查两端空白。正确后清旧错误；只做题目要求的 validation。

## 04 · Random 与 timer

```javascript
var dice = Math.floor(Math.random() * 6) + 1;
var index = Math.floor(Math.random() * images.length);
var timer = setInterval(tick, 1000);
clearInterval(timer);
```

random 不含 1；array index 从 0 开始。传 tick，不是 tick()；毫秒单位；timer 保存到停止函数能访问的位置。

Lab detail：用 null 状态防止重复 Start；停止后改回 null。题目若要求 reset，再恢复数值并重画页面。

## 05 · JSON

object `{}`，array `[]`；属性名/字符串双引号；number/boolean 不加引号；无尾随逗号。

```javascript
var text = JSON.stringify(obj, null, 2);
var obj = JSON.parse(text);
```

stringify：JS 值→文本；parse：文本→JS 值。`obj.items[0].code`：array→object→field。

Lab detail：JSON 验证用 try/catch。checkbox 映射 checked，cp 等数字用 Number。

## 06 · XML 与 DTD

XML：声明放第一行开头（本课要求）；唯一 root；标签大小写/嵌套/关闭正确；attribute 值有引号；记录完整。

```xml
<!ELEMENT student (name,mark)>
<!ATTLIST student id CDATA #REQUIRED>
<!ELEMENT name (#PCDATA)>
<!ELEMENT mark (#PCDATA)>
```

internal DTD 放 `<!DOCTYPE 根名 [ ... ]>` 中。`+` 至少 1，`*` 0 或多，`?` 0 或 1，逗号规定顺序。只问 XML 不加 DTD。

## 07 · XSD

只有文本且无 attribute/child：simple；有 child 或 attribute：complex。

`complexType → sequence → child elements → /sequence → attributes`。

`minOccurs/maxOccurs` 控制数量；`unbounded` 无上限。attribute 必需写 `use="required"`。

`simpleType → restriction base → minInclusive/maxInclusive 或 enumeration`。编号按题意保留 string；不要丢前导零。

## 08 · AJAX / XMLHttpRequest

```javascript
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4) {
    if (xhttp.status == 200) {
      var obj = JSON.parse(xhttp.responseText);
      display(obj);
    } else {
      // Display the request failure.
    }
  }
};
xhttp.open("GET", "data.json", true);
xhttp.send();
```

Review：用课堂 XHR，不换 fetch。display 必须会读嵌套数据、循环 array、构造所需 HTML；URL 从本次输入生成。

## 09 · DOM

查找：`getElementById(id)` / `getElementsByTagName(tag)` / `getElementsByClassName(className)`。

创建：`createElement(tag)` / `createTextNode(text)`。加入：`parent.appendChild(child)` / `parent.insertBefore(newChild, oldChild)`。

```javascript
parent.removeChild(child);
parent.replaceChild(newChild, oldChild);
element.setAttribute("data-quantity", 3);
var quantity = Number(element.getAttribute("data-quantity"));
```

在实际父节点调用删除/替换；replace 是新在前、旧在后。创建后还要接入 DOM。

## 10 · Canvas

`canvas → getContext("2d") → clearRect → beginPath → moveTo/lineTo → closePath → fill/stroke`。

style properties：fillStyle、strokeStyle、lineWidth、font；文字函数 fillText/strokeText。

```javascript
ctx.clearRect(0, 0, canvas.width, canvas.height);
```

后两项是宽/高。左上角 (0,0)，x 右、y 下。输入坐标先转数字。

## 11 · Drag and drop

源：`draggable="true"` + dragstart。

目标：dragover + drop；dragover 调用 preventDefault。

```javascript
event.dataTransfer.setData("animal", event.target.id);
var animal = event.dataTransfer.getData("animal");
event.preventDefault();
```

set/get 用相同 key；匹配后才计数/加图。内部子元素也可能成为 event.target。需保留源图时创建副本，不移动原节点。

## 12 · Style 与 storage

CSS `font-size` / `background-color` → JS `fontSize` / `backgroundColor`。值如 `"50px"`。

```javascript
localStorage.setItem("tasks", JSON.stringify(tasks));
var saved = localStorage.getItem("tasks");
if (saved != null) { tasks = JSON.parse(saved); }
localStorage.removeItem("tasks");
```

原始 textarea 文本直接存字符串，不额外 stringify；对象/数组先 stringify。首次 null；onload 恢复。localStorage 跨会话，sessionStorage 针对页会话。

## 使用顺序

先通过完整笔记理解每项用途，再遮住代码默写，最后回题库实际写题。速记表省略了完整上下文，出现卡点时回对应章节。

来源：Week 13 复习课，配合已提供的 lecture、lab 和 assignment。Canvas 参数、DOM 父子关系、form reset 的校正依据见完整笔记的 MDN 来源说明。

## 查漏卡 · Q21–Q29

- 合并格：colspan 跨列，rowspan 跨行；下一行不重复写被占用位置。dl/dt/dd 是术语列表；pre 保留空白。
- CSS：同普通样式层内先比较 specificity，同条件再看先后；不能只背“后写覆盖”。link/visited/hover/active；list-style-type。
- Events：mouseover 换 src 先保存旧值；focus/blur；change 与 select 不同；prompt Cancel 是 null，confirm Cancel 是 false。
- Array：push 追加；indexOf 找不到 -1；先判断再 splice；slice 不含 end。Date 月份 0–11；getDay 周几，getDate 月内日期。
- Validation：题目要求时再用 required/min/max/step/pattern；onsubmit 要返回 false/true；旧错误要清除。
- XSD：文本带 attribute 用 complexType → simpleContent → extension。无 targetNamespace 的连接用 xsi:noNamespaceSchemaLocation。well-formed 不等于 valid。
- DOM：getElementsByTagName/ClassName 返回集合，参数不带 CSS 的 # 或 .；用 length、索引和循环。
- Storage：object array 要 stringify/parse；raw draft 直接存；removeItem 只删本题 key。typeof 检查不保证读写一定成功。
- Calculator：select.value 读 option 的 value；显示 x，计算用 *；+ 前必须按需求转 Number。

