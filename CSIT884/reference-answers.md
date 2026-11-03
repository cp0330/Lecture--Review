# CSIT884 参考答案

先独立作答，再对照行为与检查点。下列为经验证的参考实现；分项分数是练习建议，其他正确实现也可接受。

## Q01 HTML only: a competition page

先完成页面骨架，再逐项检查 tag、attribute 和题目规定的列表类型。给定的 example 域名只检查链接设置，不要求网站真实可访问。

### 参考文件

#### q01.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Coding Competition</title>
</head>
<body>
<h1>Coding Competition</h1>
<h2>Maya Lee, 2026001, mayal@uowmail.edu.au</h2>
<table border="1">
  <tr><th>Rank</th><th>Team</th><th>Members</th></tr>
  <tr><td>1st</td><td><a href="https://river.example/" target="_blank">River Team</a><br><img src="../assets/team1.svg" width="120" height="80" alt="River flag"></td>
    <td><ul><li><b>Alex</b> <i>(team leader)</i></li><li>Bo</li></ul></td></tr>
  <tr><td>2nd</td><td><a href="https://mountain.example/" target="_blank">Mountain Team</a><br><img src="../assets/team2.svg" width="120" height="80" alt="Mountain flag"></td>
    <td><ul><li><b>Chen</b> <i>(team leader)</i></li><li>Dee</li></ul></td></tr>
</table>
<ol><li>Register</li><li>Practice</li><li>Compete</li></ol>
<p>FROG&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EMU &#128516;</p>
</body>
</html>
```

### 对比要点

- The table has three rows and three columns, including the header row. Both images are 120 by 80 pixels. Both links have target="_blank".
- There is no CSS. Use ul and ol in the correct places. The browser must display all five spaces.

### 常见错误

- 连续输入五个普通空格会被折叠。
- HTML-only 题不要擅自加入 CSS。

### 自评（练习用，10 分）

- Page structure and practice identity：2 分
- Table and both list types：3 分
- Images and links in new tabs：3 分
- Bold, italic, spaces and character entity：2 分

## Q02 Required CSS methods and selectors

先按每条要求确定样式放在哪里，再写 selector。外部 CSS 接收的是规则本身，HTML 负责用 link 引入。

### 参考文件

#### q02.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>CSS methods</title>
<style>
#heading { color: purple; background-color: lightgray; }
.info { border: 2px dashed orange; padding: 10px; }
#teamTable { border-collapse: collapse; }
#teamTable th, #teamTable td { border: 1px solid black; padding: 12px; vertical-align: top; }
#teamTable .rank { text-align: right; }
.members > li { color: green; }
</style>
</head>
<body>
<h1 id="heading">City Coding Teams</h1>
<p style="font-size:50px;">Maya Lee</p>
<p style="color:blue;">2026001</p>
<p class="info">Australia</p><p class="info">mayal@uowmail.edu.au</p>
<table id="teamTable">
 <tr><th class="rank">Rank</th><th>Members</th></tr>
 <tr><td class="rank">1</td><td><ul class="members"><li>Alex</li><li>Bo</li></ul></td></tr>
</table>
</body>
</html>
```

#### q02-external.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>CSS external</title>
<link rel="stylesheet" href="q02.css">
</head>
<body>
<h1 id="heading">City Coding Teams</h1>
<p style="font-size:50px;">Maya Lee</p>
<p style="color:blue;">2026001</p>
<p class="info">Australia</p><p class="info">mayal@uowmail.edu.au</p>
<table id="teamTable">
 <tr><th class="rank">Rank</th><th>Members</th></tr>
 <tr><td class="rank">1</td><td><ul class="members"><li>Alex</li><li>Bo</li></ul></td></tr>
</table>
</body>
</html>
```

#### q02.css

```css
#heading { color: purple; background-color: lightgray; }
.info { border: 2px dashed orange; padding: 10px; }
#teamTable { border-collapse: collapse; }
#teamTable th, #teamTable td { border: 1px solid black; padding: 12px; vertical-align: top; }
#teamTable .rank { text-align: right; }
.members > li { color: green; }
```

### 对比要点

- Both HTML pages have the same appearance.
- Use > for direct children in the green list rule. Do not replace it with a space.
- Use . for a class and # for an ID. Do not put style tags inside the CSS file.

### 常见错误

- 做出相同外观但用错指定方式，仍不满足题意。
- 把 child selector 写成 descendant selector 会扩大匹配范围。

### 自评（练习用，10 分）

- Required inline/document CSS and selectors：4 分
- Table, descendant and child selectors：3 分
- Conversion to external CSS：3 分

## Q03 Click events, counters and added content

计数变量放在函数外，才能跨多次点击保留。累加内容与覆盖内容是两个不同要求。

### 参考文件

#### q03.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Click events</title>
<script>
var clickCount = 0;
function sayHi() {
  // Send the two required messages.
  alert("Hi");
  console.log("Maya Lee");
}
function increase() {
  // Save the count outside this function.
  clickCount = clickCount + 1;
  document.getElementById("count").innerHTML = clickCount;
}
function addButton() {
  // Append new content without replacing earlier buttons.
  var holder = document.getElementById("buttons");
  holder.innerHTML += "<button>CSIT884</button>";
}
</script>
</head>
<body>
<p onclick="sayHi()">Maya Lee</p>
<button onclick="increase()">2026001</button><p id="count">0</p>
<p onclick="addButton()">mayal@uowmail.edu.au</p><div id="buttons"></div>
</body>
</html>
```

### 对比要点

- After three counter-button clicks, the counter shows 3.
- After two email clicks, there are two new buttons. The counter does not change.

### 常见错误

- 把 counter 在每次调用时重新声明为 0。
- 用 = 覆盖全部内容而没有累加。

### 自评（练习用，10 分）

- Alert and console output：2 分
- Counter state and display：3 分
- Adding buttons without replacing earlier ones：3 分
- Structure, names and comments：2 分

## Q04 value, src and the Enter key

先把公共更新功能写成参数化函数，再让按钮和键盘事件共用。这里的条件表达式也可换成 if/else。

### 参考文件

#### q04.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Commands</title>
<script>
function showAnimal(name) {
  // Text fields use value; images use src.
  document.getElementById("status").value = name == "cat" ? "Cat selected" : "Dog selected";
  document.getElementById("animal").src = "../assets/" + name + ".svg";
}
function runCommand(event) {
  // Only the Enter key executes a command.
  if (event.key != "Enter") { return; }
  var command = document.getElementById("command").value;
  if (command == "display cat") { showAnimal("cat"); }
  else if (command == "display dog") { showAnimal("dog"); }
  else { alert("Invalid command"); }
}
</script>
</head>
<body>
<button onclick="showAnimal('cat')">Cat</button><button onclick="showAnimal('dog')">Dog</button>
<input id="status" readonly><br><img id="animal" width="100" alt="Selected animal"><br>
Enter command: <input id="command" onkeydown="runCommand(event)">
</body>
</html>
```

### 对比要点

- Both the buttons and valid commands change the image and status.
- display bird followed by Enter shows an alert and keeps the previous image.

### 常见错误

- 输入框内容用 value，图片地址用 src。
- 事件函数要接收 event，不能让每个键都提交命令。

### 自评（练习用，10 分）

- Button behaviour：3 分
- Correct use of value and src：3 分
- Enter key and invalid commands：3 分
- Comments and function reuse：1 分

## Q05 Animation: one timer, reset and restart

timer 保存是否正在运行；firstNumber 保存动画的当前数值。停止时两种状态都需要恢复。

### 参考文件

#### q05.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Equation animation</title>
<script>
var studentNumber = 2026001;
var firstNumber = 1;
var timer = null;
function showEquation() {
  // Add numbers before constructing the output string.
  var result = firstNumber + studentNumber;
  document.getElementById("equation").innerHTML = firstNumber + " + " + studentNumber + " = " + result;
}
function tick() { firstNumber += 2; showEquation(); }
function startAnimation() {
  // A running animation must not be started again.
  if (timer != null) { return; }
  timer = setInterval(tick, 1000);
}
function stopAnimation() {
  // This task requires a reset, not only a pause.
  clearInterval(timer);
  timer = null;
  firstNumber = 1;
  showEquation();
}
</script>
</head>
<body>
<p id="equation" style="color:red;font-size:60px;">1 + 2026001 = 2026002</p>
<span style="color:orange;cursor:pointer;" onclick="startAnimation()">Start Animation</span>
<span style="color:purple;cursor:pointer;" onclick="stopAnimation()">Stop Animation</span>
</body>
</html>
```

### 对比要点

- After Start, the first number changes to 3 and then 5 at one-second intervals.
- Clicking Start several times quickly still increases the number by only 2 each second.
- Stop immediately restores 1. The equation then stays unchanged until Start is clicked.

### 常见错误

- setInterval(tick(), 1000) 会立刻调用函数，应传 tick。
- 只 clearInterval 而没有将 timer 改回 null，后续可能无法启动。

### 自评（练习用，10 分）

- Initial page and required styles：2 分
- Interval and equation updates：3 分
- Only one running timer：2 分
- Stop, reset and restart：3 分

## Q06 Random slideshow

用 array.length 决定随机范围，可以随图片数量调整。停止后没有清空 src，因为题目要求保留。

### 参考文件

#### q06.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Slideshow</title>
<script>
var images = ["../assets/team1.svg", "../assets/team2.svg", "../assets/team3.svg", "../assets/team4.svg", "../assets/team5.svg", "../assets/team6.svg"];
var slideshowTimer = null;
function showRandomImage() {
  // Math.floor maps the result to a valid array index.
  var index = Math.floor(Math.random() * images.length);
  document.getElementById("slide").src = images[index];
}
function startSlideshow() {
  if (slideshowTimer == null) { slideshowTimer = setInterval(showRandomImage, 1200); }
}
function stopSlideshow() {
  clearInterval(slideshowTimer);
  slideshowTimer = null;
}
</script>
</head>
<body>
<button onclick="startSlideshow()">Start Slideshow</button><button onclick="stopSlideshow()">Stop Slideshow</button>
<br><img id="slide" width="240" height="160" alt="Slideshow">
</body>
</html>
```

### 对比要点

- Every displayed path is one of the six array items.
- After Stop, the image stays visible and does not change.

### 常见错误

- 随机索引加 1 会漏掉第一项，并可能访问越界。
- 1200 毫秒与 1.2 毫秒不同。

### 自评（练习用，10 分）

- Array and correct random index range：4 分
- Image update every 1200ms：2 分
- One timer, stopping and restarting：3 分
- Comments：1 分

## Q07 Web form: follow the service documentation

name 决定参数名，value 决定被选项提交的值。多个同名 checkbox 可以生成多个 sub 参数。reset 恢复默认状态。

### 参考文件

#### q07.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Library form</title>
</head>
<body>
<h1>Library book search</h1>
<form id="searchForm" action="/search" method="get" >
 Author: <input type="text" name="author" id="author"><br>
 Year: <input type="text" name="year" id="year"><br>
 Subject:<br>
 <label><input type="checkbox" name="sub" value="mth">Mathematics</label>
 <label><input type="checkbox" name="sub" value="cs">Computer Science</label>
 <label><input type="checkbox" name="sub" value="bio">Biology</label><br>
 Format:
 <label><input type="radio" name="format" value="p" checked>Print</label>
 <label><input type="radio" name="format" value="e">Electronic</label><br>
 
 <input type="submit" value="Search"><input type="reset" value="Clear">
</form>
</body>
</html>
```

### 对比要点

- Each name matches the documentation. The submitted value is the service value, not the displayed label.
- Clear empties the text fields, clears the subject choices and restores Print.
- After starting the local server, submit the form and check the received parameters. Parameter order does not change their meaning.

### 常见错误

- id 不能代替 name。
- radio 使用不同 name 会失去单选分组。

### 自评（练习用，10 分）

- Correct action and method：2 分
- Text fields, checkboxes and parameter names：3 分
- Radio group, default choice and values：3 分
- Submit and reset：2 分

## Q08 Form validation: a random addition question

返回 false 的关键是 form 中也写 return。题目数据是页面状态，应在用户作答期间保持一致。

### 参考文件

#### q08.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Math validation</title>
<script>
var first = 0;
var second = 0;
function newQuestion() {
  // Generate once, then keep the displayed problem for validation.
  first = Math.floor(Math.random() * 10) + 1;
  second = Math.floor(Math.random() * 10) + 1;
  document.getElementById("question").innerHTML = first + " + " + second;
}
function validateForm() {
  var answer = document.getElementById("answer").value;
  if (answer.trim() == "" || Number(answer) != first + second) {
    document.getElementById("error").innerHTML = "Wrong!";
    return false;
  }
  document.getElementById("error").innerHTML = "";
  return true;
}
function resetQuestion() {
  document.getElementById("error").innerHTML = "";
  newQuestion();
}
</script>
</head>
<body onload="newQuestion()">
<h1>Library book search</h1>
<form id="searchForm" action="/search" method="get" onsubmit="return validateForm()" onreset="resetQuestion()">
 Author: <input type="text" name="author" id="author"><br>
 Year: <input type="text" name="year" id="year"><br>
 Subject:<br>
 <label><input type="checkbox" name="sub" value="mth">Mathematics</label>
 <label><input type="checkbox" name="sub" value="cs">Computer Science</label>
 <label><input type="checkbox" name="sub" value="bio">Biology</label><br>
 Format:
 <label><input type="radio" name="format" value="p" checked>Print</label>
 <label><input type="radio" name="format" value="e">Electronic</label><br>
 
 Prove you are not a robot: <span id="question"></span> = <input id="answer" type="text" size="4">
 <span id="error" style="color:red;"></span><br>
 <input type="submit" value="Search"><input type="reset" value="Clear">
</form>
</body>
</html>
```

### 对比要点

- A wrong answer keeps the current page open and displays Wrong!.
- After correcting the answer, the submitted parameters have only the four names defined in Q07.
- After Clear, the answer field and error message are empty. Both new numbers are within 1 to 10.

### 常见错误

- 仅调用 validateForm() 而不 return，会失去拦截效果。
- 校验时重新生成随机数，会检查另一道题的答案。

### 自评（练习用，10 分）

- Random range and stored question state：3 分
- onsubmit and false/true return values：3 分
- Error display and clearing：2 分
- Unchanged service parameters and reset：2 分

## Q09 JSON: correct the structure and data types

对象内的每个成员都要有属性名；JSON 的属性名使用双引号，boolean 写 true/false，不使用尾随逗号。JavaScript object 的属性名也可以带引号。

### 参考文件

#### q09.json

```json
{
  "firstName": "Maya",
  "lastName": "Lee",
  "subjectList": [
    {
      "code": "CSIT884",
      "title": "Web Development"
    },
    {
      "code": "CSIT882",
      "title": "Systems"
    }
  ],
  "age": 22,
  "fullTime": true
}
```

### 对比要点

- After JSON.parse, subjectList.length is 2.
- age has type number and fullTime has type boolean.

### 常见错误

- 不能把课程 array 无名地放入 object。
- "true" 是字符串，true 才是 boolean。

### 自评（练习用，10 分）

- Property names and object structure：3 分
- Array, brackets and commas：3 分
- Number and boolean types：2 分
- All data kept：2 分

## Q10 JSON: convert between an object and form fields

textarea 也是表单控件，使用 value。checkbox 的选中状态使用 checked。两个方向分别需要 stringify 和 parse。

### 参考文件

#### q10.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Subject JSON</title>
<script>
function viewJSON() {
  // Construct the required data types, not four strings.
  var subject = {};
  subject.code = document.getElementById("code").value;
  subject.title = document.getElementById("title").value;
  subject.cp = Number(document.getElementById("cp").value);
  subject.coreFlag = document.getElementById("core").checked;
  document.getElementById("jsonText").value = JSON.stringify(subject, null, 2);
}
function readJSON() {
  // Parse the text before accessing object properties.
  var subject = JSON.parse(document.getElementById("jsonText").value);
  document.getElementById("code").value = subject.code;
  document.getElementById("title").value = subject.title;
  document.getElementById("cp").value = subject.cp;
  document.getElementById("core").checked = subject.coreFlag;
}
</script>
</head>
<body>
Code: <input id="code"><br>Title: <input id="title"><br>Credit point: <input id="cp"><br>
Core subject: <input type="checkbox" id="core"><br>
<button onclick="viewJSON()">View JSON</button><button onclick="readJSON()">Read JSON</button><br>
<textarea id="jsonText" rows="12" cols="60"></textarea>
</body>
</html>
```

### 对比要点

- In the JSON, 6 has no quotes and coreFlag is true or false.
- Change the textarea data to cp=4 and coreFlag=false. Read JSON must update both controls.

### 常见错误

- 只把 JSON string 赋给变量，不能直接按 object 访问。
- checkbox.value 不是选中状态。

### 自评（练习用，10 分）

- Reading input and using correct types：3 分
- stringify and indentation：2 分
- Parsing and restoring form controls：3 分
- checked, value and comments：2 分

## Q11 XML: represent a complete student record

XML 的任务是保留数据关系。两个顶层 student 缺少共同根元素；XML 属性值必须用引号。空格和缩进可不同。

### 参考文件

#### q11.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<student number="2026001">
  <firstName>Maya</firstName>
  <lastName>Lee</lastName>
  <subjects>
    <subject code="CSIT884"><creditPoint>6</creditPoint><mark>84</mark><grade>A</grade></subject>
    <subject code="CSIT882"><creditPoint>6</creditPoint><mark>72</mark><grade>B</grade></subject>
  </subjects>
</student>
```

### 对比要点

- There is exactly one root. Both subject elements are inside subjects.
- Letter case matches. Attribute values have quotes. Do not add table-presentation tags such as th or td.

### 常见错误

- 把表头 Subject/Mark 当成一组重复的数据。
- 题目未要求 DTD，不额外加入。

### 自评（练习用，10 分）

- Declaration, single root and syntax：3 分
- Required structure and attributes：3 分
- All record data：2 分
- Explanation of both errors：2 分

## Q12 DTD: define the XML structure

DOCTYPE 名称与根一致。+ 表示一次或以上，* 表示零次或以上，? 表示零次或一次。逗号规定顺序。

### 参考文件

#### q12.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE student [
  <!ELEMENT student (firstName,lastName,subjects)>
  <!ATTLIST student number CDATA #REQUIRED>
  <!ELEMENT firstName (#PCDATA)>
  <!ELEMENT lastName (#PCDATA)>
  <!ELEMENT subjects (subject+)>
  <!ELEMENT subject (creditPoint,mark,grade)>
  <!ATTLIST subject code CDATA #REQUIRED>
  <!ELEMENT creditPoint (#PCDATA)>
  <!ELEMENT mark (#PCDATA)>
  <!ELEMENT grade (#PCDATA)>
]>
<student number="2026001">
  <firstName>Maya</firstName>
  <lastName>Lee</lastName>
  <subjects>
    <subject code="CSIT884"><creditPoint>6</creditPoint><mark>84</mark><grade>A</grade></subject>
    <subject code="CSIT882"><creditPoint>6</creditPoint><mark>72</mark><grade>B</grade></subject>
  </subjects>
</student>
```

### 对比要点

- The original XML passes DTD validation.
- Removing number or code must fail validation. Empty subjects must also fail.

### 常见错误

- DTD 的 #PCDATA 与 attribute 的 CDATA 不要混用。
- 没有声明实际存在的 attribute 会造成 DTD 不匹配。

### 自评（练习用，10 分）

- DOCTYPE and all element declarations：4 分
- Order and subject+：2 分
- Both required attributes：3 分
- Occurrence-symbol explanation：1 分

## Q13 XSD: nested complex types and restrictions

resultBatch/result 都含子元素和 attribute，因此是 complex type。attribute 声明在 sequence 后；叶子数据的取值限制放在 simpleType 中。

### 参考文件

#### q13.xsd

```xsd
<?xml version="1.0" encoding="UTF-8"?>
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <xsd:element name="resultBatch">
    <xsd:complexType>
      <xsd:sequence>
        <xsd:element name="result" minOccurs="1" maxOccurs="unbounded">
          <xsd:complexType>
            <xsd:sequence>
              <xsd:element name="contestantId" type="xsd:string"/>
              <xsd:element name="examId" type="xsd:string"/>
              <xsd:element name="score">
                <xsd:simpleType><xsd:restriction base="xsd:integer">
                  <xsd:minInclusive value="0"/><xsd:maxInclusive value="300"/>
                </xsd:restriction></xsd:simpleType>
              </xsd:element>
              <xsd:element name="band">
                <xsd:simpleType><xsd:restriction base="xsd:string">
                  <xsd:enumeration value="A"/><xsd:enumeration value="B"/>
                  <xsd:enumeration value="C"/><xsd:enumeration value="D"/>
                </xsd:restriction></xsd:simpleType>
              </xsd:element>
            </xsd:sequence>
            <xsd:attribute name="ref" type="xsd:string" use="required"/>
          </xsd:complexType>
        </xsd:element>
      </xsd:sequence>
      <xsd:attribute name="campus" type="xsd:string" use="required"/>
    </xsd:complexType>
  </xsd:element>
</xsd:schema>
```

#### q13-sample.xml

```xml
<?xml version="1.0"?>
<resultBatch campus="Sydney">
  <result ref="R001"><contestantId>00025142</contestantId><examId>WEB01</examId><score>156</score><band>C</band></result>
  <result ref="R002"><contestantId>00025143</contestantId><examId>WEB01</examId><score>280</score><band>A</band></result>
</resultBatch>
```

### 对比要点

- The given XML is valid. Scores 0 and 300 are valid.
- Reject scores 301 and 1.5, band E, a missing ref, or a resultBatch with no result.

### 常见错误

- contestantId 使用 integer 会丢失“编号是字符串”的约定。
- 只写 string/integer 而没写范围和枚举，不满足全部约束。

### 自评（练习用，10 分）

- Schema and nested structure：3 分
- Occurrence limits and order：2 分
- Score and band restrictions：3 分
- Attributes, types and explanation：2 分

## Q14 AJAX: display an object and an array of objects

异步回调负责确认请求结果；parse 负责把字符串变成数据；display 函数负责把数据变成页面。最后一步通常是主要代码量。此题服务数据视为可信、格式正确的练习数据。

### 参考文件

#### q14.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>AJAX display</title>
<script>
function loadJSON(url, kind) {
  // Use the XMLHttpRequest technique taught in the subject.
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4) {
      if (xhttp.status == 200) {
        var obj = JSON.parse(xhttp.responseText);
        if (kind == "faculty") { displayFaculty(obj); }
        else { displayAirports(obj); }
      } else {
        document.getElementById(kind + "Display").innerHTML = "Request failed: " + xhttp.status;
      }
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
function displayFaculty(obj) {
  var html = "<p>Name: " + obj.name + "<br>Abbreviation: " + obj.abbreviation;
  html += "<br>Email: " + obj.email + "<br>Website: " + obj.web + "</p>";
  document.getElementById("facultyDisplay").innerHTML = html;
}
function displayAirports(obj) {
  // Build rows from the response array, whatever its length is.
  var html = "<p>Search Query: " + obj.searchQuery + "</p>";
  html += "<table border='1'><tr><th>Airport</th><th>ICAO</th><th>IATA</th><th>Location</th></tr>";
  for (var i = 0; i < obj.searchResult.length; i++) {
    var airport = obj.searchResult[i];
    html += "<tr><td>" + airport.airportName + "</td><td>" + airport.ICAO;
    html += "</td><td>" + airport.IATA + "</td><td>" + airport.city + ", " + airport.country + "</td></tr>";
  }
  html += "</table>";
  document.getElementById("airportsDisplay").innerHTML = html;
}
</script>
</head>
<body>
<button onclick="loadJSON('../data/faculty.json','faculty')">Get Faculty Details</button><div id="facultyDisplay"></div>
<button onclick="loadJSON('../data/airports.json','airports')">Search Airport</button><div id="airportsDisplay"></div>
</body>
</html>
```

### 对比要点

- The current airport table has a header and three records. It must still work if the number of data records changes.
- Requesting a JSON file that does not exist displays the failure message.
- The code checks both response completion and request success.

### 常见错误

- AJAX 名称不要求必须使用 XML 数据。
- 用固定 HTML 把截图抄出来，不能适应数据变化。

### 自评（练习用，10 分）

- Classroom XHR workflow and status handling：4 分
- JSON.parse and object fields：2 分
- Array loop and complete table：3 分
- Repeated display and comments：1 分

## Q15 AJAX: query parameters, nested data and required CSS

请求地址与显示内容都要由输入/响应驱动。encodeURIComponent 编码参数值，若本题只允许数字也可用直接拼接；XHR 技术要求仍必须满足。

### 参考文件

#### q15.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Weather AJAX</title>
<style>
.lee { color: orange; font-size: 50px; }
#mayal { color: purple; font-size: 50px; }
</style>
<script>
function getWeather() {
  // Construct the query from the user's current input.
  var latitude = document.getElementById("latitude").value;
  var longitude = document.getElementById("longitude").value;
  var url = "/weather?latitude=" + encodeURIComponent(latitude) + "&longitude=" + encodeURIComponent(longitude) + "&current=temperature_2m";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4) {
      if (xhttp.status == 200) {
        var obj = JSON.parse(xhttp.responseText);
        displayWeather(obj, latitude, longitude);
      } else {
        document.getElementById("weatherDisplay").innerHTML = "Request failed: " + xhttp.status;
      }
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
function displayWeather(obj, latitude, longitude) {
  // Keep the query input separate from the server response data.
  var html = "<p>User Query: Latitude " + latitude + ", Longitude " + longitude + "</p>";
  html += "<h2 id='mayal'>Weather information</h2><table border='1'>";
  html += "<tr><td>Elevation</td><td>" + obj.elevation + "</td></tr>";
  html += "<tr><td>Time</td><td>" + obj.current.time + "</td></tr>";
  html += "<tr><td>Interval</td><td>" + obj.current.interval + "</td></tr>";
  html += "<tr><td>Temperature</td><td class='lee'>" + obj.current.temperature_2m + "</td></tr>";
  html += "<tr><td>Generationtime(ms)</td><td>" + obj.generationtime_ms + "</td></tr></table>";
  document.getElementById("weatherDisplay").innerHTML = html;
}
</script>
</head>
<body>
<h1>Maya Lee, 2026001</h1>
Latitude: <input id="latitude"><br>Longitude: <input id="longitude"><br>
<button onclick="getWeather()">Get Weather JSON</button><div id="weatherDisplay"></div>
</body>
</html>
```

### 对比要点

- The temperatures are 18.5 for the first test and 14.7 for the second. Both the request and result change when the input changes.
- Read current.time and current.temperature_2m from the nested current object, not from the top level.

### 常见错误

- 只更换输入文字却没有更换 URL。
- class 名、id 或 CSS 方式与题目不一致。

### 自评（练习用，10 分）

- Input-based URL and classroom XHR：4 分
- Nested fields and complete display：3 分
- Required document CSS class and ID：2 分
- Failure handling and comments：1 分

## Q16 Canvas: a triangle and its three medians

先画填充三角形，再画白色中线，最后写标签，避免后画的填充遮住线。clearRect 的后两个参数是宽和高。

### 参考文件

#### q16.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Triangle</title>
<script>
function drawTriangle() {
  var ax = Number(document.getElementById("ax").value), ay = Number(document.getElementById("ay").value);
  var bx = Number(document.getElementById("bx").value), by = Number(document.getElementById("by").value);
  var cx = Number(document.getElementById("cx").value), cy = Number(document.getElementById("cy").value);
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  // Clear the previous drawing, then create a fresh path.
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.lineTo(cx, cy); ctx.closePath();
  ctx.fillStyle = "plum"; ctx.fill();
  ctx.strokeStyle = "purple"; ctx.lineWidth = 3; ctx.stroke();
  // Each median ends at the midpoint of the opposite side.
  ctx.strokeStyle = "white"; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo((bx + cx) / 2, (by + cy) / 2); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(bx, by); ctx.lineTo((ax + cx) / 2, (ay + cy) / 2); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo((ax + bx) / 2, (ay + by) / 2); ctx.stroke();
  ctx.fillStyle = "black"; ctx.font = "16px Arial";
  ctx.fillText("A", ax + 4, ay - 4); ctx.fillText("B", bx + 4, by - 4); ctx.fillText("C", cx + 4, cy - 4);
}
</script>
</head>
<body>
A: X <input id="ax" value="80" size="4"> Y <input id="ay" value="20" size="4"><br>
B: X <input id="bx" value="20" size="4"> Y <input id="by" value="160" size="4"><br>
C: X <input id="cx" value="260" size="4"> Y <input id="cy" value="160" size="4"><br>
<canvas id="canvas" width="320" height="200" style="border:1px solid black;"></canvas><br>
<button onclick="drawTriangle()">Draw triangle</button>
</body>
</html>
```

### 对比要点

- Change one coordinate and draw again. No old triangle remains.
- Each median ends at the midpoint of the opposite side, not at another vertex.

### 常见错误

- 输入框读出字符串，中点计算前必须转 number。
- 忘记 beginPath 会把之前的路径一并重画。

### 自评（练习用，10 分）

- Numeric input and 2D context：2 分
- Clear, closed path, stroke and fill：3 分
- Three midpoints and median lines：3 分
- Labels and required styles：2 分

## Q17 Drag and drop: matching, counting and added images

目标动物通过事件处理函数参数传入，不依赖 event.target.id；这样 drop 到区内子元素时仍可正确判断。新图没有复制原 id。

### 参考文件

#### q17.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Animal drop</title>
<style>
#dogZone, #catZone { border: 1px solid black; padding: 20px; min-height: 70px; margin: 10px; font-size: 32px; }
</style>
<script>
var counts = {dog: 0, cat: 0};
function startDrag(event) {
  // Transfer the source identity, not the image itself.
  event.dataTransfer.setData("animal", event.target.id);
}
function allowDrop(event) { event.preventDefault(); }
function dropAnimal(event, targetAnimal) {
  event.preventDefault();
  var sourceAnimal = event.dataTransfer.getData("animal");
  if (sourceAnimal != targetAnimal) { return; }
  counts[targetAnimal] += 1;
  document.getElementById(targetAnimal + "Count").innerHTML = counts[targetAnimal];
  // Create a copy without moving or duplicating the source ID.
  var image = document.createElement("img");
  image.src = document.getElementById(sourceAnimal).src;
  image.width = 60; image.alt = sourceAnimal; image.draggable = false;
  document.getElementById(targetAnimal + "Copies").appendChild(image);
}
</script>
</head>
<body>
<div id="dogZone" ondragover="allowDrop(event)" ondrop="dropAnimal(event,'dog')">DOG <span id="dogCount">0</span><span id="dogCopies"></span></div>
<div id="catZone" ondragover="allowDrop(event)" ondrop="dropAnimal(event,'cat')">CAT <span id="catCount">0</span><span id="catCopies"></span></div>
<img id="cat" src="../assets/cat.svg" width="100" draggable="true" ondragstart="startDrag(event)" alt="cat">
<img id="dog" src="../assets/dog.svg" width="100" draggable="true" ondragstart="startDrag(event)" alt="dog">
</body>
</html>
```

### 对比要点

- Drop dog onto DOG twice and cat onto CAT once. The counters and added-image counts are 2 and 1.
- Dropping cat onto DOG changes neither counter.

### 常见错误

- 直接 append 原图片会把源图片移走。
- 把 target.id 当成接收区 ID，会在目标包含子元素时出错。

### 自评（练习用，10 分）

- Three events and dataTransfer：4 分
- Correct matching rule：2 分
- Counters and image additions：3 分
- Keep source images and handle child targets：1 分

## Q18 DOM: create, insert, replace, remove and total

DOM 操作必须在实际父节点 list 上执行。数量字符串用 Number 转换后参与加减；firstElementChild/lastElementChild 避开空白文本节点。

### 参考文件

#### q18.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Book order</title>
<script>
var total = 0;
function makeItem() {
  var title = document.getElementById("title").value;
  var code = document.getElementById("code").value;
  var quantity = Number(document.getElementById("quantity").value);
  var li = document.createElement("li");
  li.setAttribute("data-quantity", quantity);
  li.appendChild(document.createTextNode(code + ": " + title + " x " + quantity));
  return li;
}
function showTotal() { document.getElementById("total").innerHTML = total; }
function addBook(atFirst) {
  var list = document.getElementById("orders");
  var li = makeItem();
  if (atFirst) { list.insertBefore(li, list.firstElementChild); }
  else { list.appendChild(li); }
  total += Number(li.getAttribute("data-quantity"));
  showTotal();
}
function replaceLast() {
  var list = document.getElementById("orders");
  var old = list.lastElementChild;
  if (old == null) { return; }
  var li = makeItem();
  // Replace the old quantity instead of adding the new quantity twice.
  total += Number(li.getAttribute("data-quantity")) - Number(old.getAttribute("data-quantity"));
  list.replaceChild(li, old);
  showTotal();
}
function removeLast() {
  var list = document.getElementById("orders");
  var old = list.lastElementChild;
  if (old == null) { return; }
  total -= Number(old.getAttribute("data-quantity"));
  list.removeChild(old);
  showTotal();
}
</script>
</head>
<body>
Title: <input id="title"><br>Code: <input id="code"><br>Quantity: <input id="quantity"><br>
<button onclick="addBook(false)">Add last</button><button onclick="addBook(true)">Add first</button>
<button onclick="replaceLast()">Replace last</button><button onclick="removeLast()">Remove last</button>
<ul id="orders"></ul><p>Total: <span id="total">0</span></p>
</body>
</html>
```

### 对比要点

- Add last: Book A/A1/5, then Book B/B1/2. Total is 7.
- Add first: Book C/C1/3. The order is C/A/B and Total is 10.
- Replace last with Book D/D1/4. Total is 12. Remove last. Total is then 8.

### 常见错误

- 用 document.removeChild 删除普通 li，父子关系不匹配。
- 把 quantity 字符串相加会得到 52，而不是 7。

### 自评（练习用，10 分）

- Element/text creation and attributes：3 分
- appendChild and insertBefore：2 分
- replaceChild and removeChild：2 分
- Total updates and empty-list behaviour：3 分

## Q19 JSON validation and localStorage

保存的是用户原文；解析成功与否只影响验证结果。首次 getItem 返回 null，不能把 null 字样当用户内容显示。textContent 是安全显示纯文本的同类 DOM 属性，换用合适的纯文本节点也可以。

### 参考文件

#### q19.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>JSON validator</title>
<script>
function storageSupported() { return typeof(Storage) != "undefined"; }
function loadDraft() {
  if (storageSupported()) {
    try {
      var draft = localStorage.getItem("csit884-json-draft");
      if (draft != null) { document.getElementById("draft").value = draft; }
    } catch (error) { /* Validation remains available when storage is blocked. */ }
  }
}
function saveDraft() {
  // Preserve raw text even when its JSON syntax is invalid.
  if (storageSupported()) {
    try {
      localStorage.setItem("csit884-json-draft", document.getElementById("draft").value);
    } catch (error) { /* Keep the current input usable without storage. */ }
  }
  document.getElementById("message").textContent = "";
}
function validateJSON() {
  var message = document.getElementById("message");
  try {
    JSON.parse(document.getElementById("draft").value);
    message.style.color = "green";
    message.textContent = "JSON is valid";
  } catch (error) {
    message.style.color = "red";
    // textContent displays an error as text rather than interpreting HTML.
    message.textContent = "Error: " + error.message;
  }
}
</script>
</head>
<body onload="loadDraft()">
<p>Enter JSON to validate:</p><textarea id="draft" rows="12" cols="65" oninput="saveDraft()"></textarea><br>
<button onclick="validateJSON()">Validate JSON</button><span id="message"></span>
</body>
</html>
```

### 对比要点

- {"code":"CSIT884","cp":6} is valid. {code:"CSIT884"} is invalid.
- Enter invalid text and reload. The exact text returns. Correct it and validate again; the message becomes green.
- The exact error wording can differ between browsers. Do not require one fixed character position.

### 常见错误

- 只保存合法 JSON，会丢失用户尚未完成的草稿。
- JSON.parse 放在 try 外面，异常时没有按题意更新错误信息。

### 自评（练习用，10 分）

- parse and try/catch：3 分
- Result, colour and clearing old messages：2 分
- Raw-text saving and onload restoration：4 分
- Storage support check：1 分

## Q20 JavaScript styles and a hover transform

CSS 的 font-size 在 JavaScript style 中写成 fontSize。transform 决定变换，transition 决定变化过程；本题明确使用 transform 放大。

### 参考文件

#### q20.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Change styles</title>
<style>
#heading { color: black; text-align: center; font-size: 32px; transition: transform 0.3s; }
#heading:hover { transform: scale(2); }
</style>
<script>
function changeColor(color) {
  // Change the existing element's style.
  document.getElementById("heading").style.color = color;
}
function applySize() {
  var size = Number(document.getElementById("fontSize").value);
  document.getElementById("heading").style.fontSize = size + "px";
}
</script>
</head>
<body>
<h1 id="heading">University of Wollongong</h1>
<button onclick="changeColor('green')">Green</button><button onclick="changeColor('orange')">Orange</button><button onclick="changeColor('blue')">Blue</button>
<br>Font size: <input id="fontSize" value="32"><button onclick="applySize()">Apply Size</button>
</body>
</html>
```

### 对比要点

- Orange makes the text orange. Entering 40 and clicking Apply Size sets 40px.
- After the hover transition, the computed transform has a scale of 2. Leaving restores it. Hover does not change the font-size input value.

### 常见错误

- style.font-size 不是正确的点号属性写法。
- 把 transition 写成 all 会超出只过渡 transform 的要求。

### 自评（练习用，10 分）

- Initial page and styles：2 分
- JavaScript color and fontSize：4 分
- Hover transform and transition：3 分
- Functions and comments：1 分

## Q21 HTML: merged cells and page links

合并后按逻辑列数数格子：rowspan 占用的下一行位置不再添加 td。font、align、valign 是本课程原练习使用的旧式 HTML，不能推广为现代网页的首选写法。

### 参考文件

#### q21.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>HTML coverage drill</title>
</head>
<body>
<a href="#terms">Go to terms</a>
<table border="1">
 <tr><th colspan="3">Lab timetable</th></tr>
 <tr><th>Day</th><th>Time</th><th>Topic</th></tr>
 <tr><td rowspan="2">Monday</td><td align="right" valign="top">09:00</td><td>HTML</td></tr>
 <tr><td align="right" valign="top">10:00</td><td>CSS</td></tr>
</table>
<h2 id="terms">Terms</h2>
<dl><dt>HTML</dt><dd>Page structure</dd><dt>CSS</dt><dd>Page style</dd></dl>
<pre>A  B
C</pre>
<font size="5" color="blue">Practice only</font>
</body>
</html>
```

### 对比要点

- The first cell has colspan="3". Monday has rowspan="2". The table has four tr elements.
- Go to terms changes the page fragment to #terms. The two spaces in pre remain visible.

### 常见错误

- rowspan 的下一行仍补上 Monday 单元格，会造成多余列。
- href="#terms" 的目标是 id，不是另一个文件。

### 自评（练习用，10 分）

- Table structure and merged cells：4 分
- HTML alignment and font attributes：2 分
- Page link and description list：2 分
- Preformatted text and no CSS：2 分

## Q22 CSS: spacing, lists and conflicting rules

这里明确排除了 !important、不同来源等因素，才能直接比较 specificity（选择器具体程度）。同一优先级和相同 specificity 才比较后出现的规则。浏览器为隐私限制对 visited 的读取，不能仅靠脚本读取颜色来判定访问历史。

### 参考文件

#### q22.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>CSS coverage drill</title>
<style>
#demoTable { border-collapse: separate; border-spacing: 10px; }
#demoTable td { border: 1px solid black; padding: 8px; }
#topics { list-style-type: square; }
.links a:link { color: blue; }
.links a:visited { color: purple; }
.links a:hover { color: orange; }
.links a:active { color: red; }
p { color: green; }
.info { color: orange; }
#note { color: purple; }
.info { color: blue; }
</style>
</head>
<body>
<table id="demoTable"><tr><td>HTML</td><td>CSS</td></tr></table>
<ul id="topics"><li>HTML</li><li>CSS</li></ul>
<div class="links"><a href="https://example.com/">Example</a></div>
<p id="note" class="info">Check the selector</p>
<p>The ID rule makes the paragraph purple. In these ordinary rules, its specificity is higher than a class or type selector.</p>
<p>With collapsed borders, border-spacing has no effect. Padding still adds space inside each cell.</p>
</body>
</html>
```

### 对比要点

- The paragraph is purple: the ID selector has higher specificity than the class and type selectors in these rules.
- The table has separated borders. With collapse, border-spacing has no effect; padding still adds space inside cells.

### 常见错误

- 不能把 cascade 简化成“后写一定覆盖前写”。
- border-spacing 与 padding 作用位置不同。

### 自评（练习用，10 分）

- Separated borders, spacing and padding：3 分
- List and link pseudo-classes：3 分
- Required conflicting rules：2 分
- Correct explanations：2 分

## Q23 Events: swap images and handle text input

先保存左图旧 src 再覆盖，否则两图会变成同一来源。onselect 是选中文字；onchange 是值被确认改变。prompt 取消与输入空字符串是两种结果。

### 参考文件

#### q23.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Event coverage drill</title>
<script>
function swapImages() {
  // Save the first values before replacing them.
  var left = document.getElementById("left");
  var right = document.getElementById("right");
  var oldSource = left.src;
  var oldAlt = left.alt;
  left.src = right.src;
  left.alt = right.alt;
  right.src = oldSource;
  right.alt = oldAlt;
}
function renameLabel() {
  var label = prompt("Enter a label");
  if (label !== null) { document.getElementById("heading").textContent = label; }
}
function clearLabel() {
  if (confirm("Clear the label?")) { document.getElementById("heading").textContent = ""; }
}
</script>
</head>
<body>
<h1 id="heading">Animal practice</h1>
<img id="left" src="../assets/cat.svg" alt="cat" width="120" height="100" onmouseover="swapImages()">
<img id="right" src="../assets/dog.svg" alt="dog" width="120" height="100" onmouseover="swapImages()">
<p><label>Code: <input id="code" onfocus="this.style.backgroundColor='lightyellow'" onblur="this.style.backgroundColor='white'" onchange="this.value=this.value.toUpperCase()" onselect="document.getElementById('message').textContent='Text selected'"></label><span id="message"></span></p>
<p><span id="press" onmousedown="this.textContent='Release me'" onmouseup="this.textContent='Thank you'" onmouseout="this.textContent='Press here'">Press here</span></p>
<button onclick="renameLabel()">Rename</button><button onclick="clearLabel()">Clear label</button>
</body>
</html>
```

### 对比要点

- Moving onto the first image swaps cat/dog; leaving and entering again swaps them back.
- Type ab12, then leave the field: it becomes AB12. Selecting text shows the message.
- Prompt Cancel is null. It must not display the word null or be treated as an empty string.

### 常见错误

- CSS hover 放大没有练到 JavaScript mouseover 交换状态。
- prompt 的返回值不能仅用 if(label) 判断：这样会错误忽略空字符串。

### 自评（练习用，10 分）

- Image swap and matching alt text：3 分
- Focus, blur, change and select：3 分
- Mouse press/release/out：1 分
- Prompt, confirm and cancellation：3 分

## Q24 JavaScript: arrays, strings and dates

indexOf 找不到返回 -1；splice(-1,1) 会删除最后一项。Date 的月份索引从 0 开始，getDay 是周几，getDate 是月内日期。复制 Date 再改日期，避免修改原对象。

### 参考文件

#### q24.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>JavaScript data drill</title>
<script>
var subjects = ["CSIT884", "CSIT882"];
function codeValue() { return document.getElementById("subject").value.trim().toUpperCase(); }
function addSubject() { subjects.push(codeValue()); }
function removeSubject() {
  var index = subjects.indexOf(codeValue());
  // A missing value returns -1; do not pass that to splice.
  if (index !== -1) { subjects.splice(index, 1); }
}
function showSubjects() {
  var output = "";
  for (var i = 0; i < subjects.length; i++) { output += subjects[i] + "\n"; }
  var exam = new Date(2026, 10, 11, 9, 0, 0);
  var next = new Date(exam.getTime());
  next.setDate(next.getDate() + 1);
  output += "Count: " + subjects.length + "\nPrefix: " + codeValue().slice(0, 4);
  output += "\n" + exam.getFullYear() + "-" + (exam.getMonth() + 1) + "-" + exam.getDate();
  output += " " + exam.getHours() + ":" + exam.getMinutes() + ":" + exam.getSeconds();
  output += "\nWeekday: " + exam.getDay() + "\nNext date: " + next.getDate();
  document.getElementById("result").textContent = output;
}
</script>
</head>
<body>
<label>Subject code: <input id="subject"></label>
<button onclick="addSubject()">Add</button><button onclick="removeSubject()">Remove</button><button onclick="showSubjects()">Show</button>
<pre id="result"></pre><p>The month index starts at 0, so November uses 10.</p>
</body>
</html>
```

### 对比要点

- Add csit985, remove CSIT882, then Show: the list is CSIT884, CSIT985 and the count is 2.
- Removing a missing code must not remove the last item. The next date is 12. November is month index 10.

### 常见错误

- 忽略 -1 检查会删除错误条目。
- 直接写 next = exam 只是同一个 Date 的另一个引用。

### 自评（练习用，10 分）

- Array push, search and safe removal：4 分
- String conversion and slice：2 分
- Date construction, getters and next date：3 分
- Output, explanation and comments：1 分

## Q25 Form validation: built-in rules and JavaScript rules

Part A 和 Part B 分开，避免浏览器先拦住提交而误以为 JavaScript 分支已经运行。pattern 默认要求整个输入匹配；只在题目要求时添加 validation。

### 参考文件

#### q25.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Form validation drill</title>
<style>
#emailError, #emailError2 { color: red; }
</style>
<script>
function clearErrors() {
  document.getElementById("emailError").textContent = "";
  document.getElementById("emailError2").textContent = "";
}
function validateEmails() {
  clearErrors();
  var first = document.getElementById("email");
  var second = document.getElementById("email2");
  var email = first.value.trim();
  var confirmation = second.value.trim();
  var valid = true;
  // Check emptiness first, then compare the two non-empty values.
  if (email === "") { document.getElementById("emailError").textContent = "Email is required"; valid = false; }
  if (confirmation === "") { document.getElementById("emailError2").textContent = "Confirmation is required"; valid = false; }
  if (valid && email !== confirmation) { document.getElementById("emailError2").textContent = "Emails do not match"; valid = false; }
  if (valid) { first.value = email; second.value = confirmation; }
  return valid;
}
</script>
</head>
<body>
<h1>Part A</h1><form action="/search" method="get">
 <label>Email: <input name="email" type="email" required></label>
 <label>Quantity: <input name="quantity" type="number" min="1" max="5" step="1" required></label>
 <label>Code: <input name="code" pattern="[A-Z]{3}" required></label>
 <button type="submit">Submit A</button><button type="reset">Reset A</button>
</form>
<h1>Part B</h1><form action="/search" method="get" novalidate onsubmit="return validateEmails()" onreset="clearErrors()">
 <label>Email: <input id="email" name="email" type="text"></label><span id="emailError"></span><br>
 <label>Confirm: <input id="email2" name="email2" type="text"></label><span id="emailError2"></span><br>
 <button type="submit">Submit B</button><button type="reset">Reset B</button>
</form>
</body>
</html>
```

### 对比要点

- Part A rejects an empty email, quantity 0 or 6, quantity 1.5, and code ab1. It accepts a valid email, quantity 1 or 5, and ABC.
- Part B rejects spaces-only input and different strings. Two equal trimmed strings submit. A later valid attempt must remove old error messages.

### 常见错误

- type=number 不会自己表达 1–5 的范围，需 min/max/step。
- 只写 onsubmit="validateEmails()" 会丢失 false 返回值。

### 自评（练习用，10 分）

- Part A constraints and parameter names：4 分
- Part B exact checks and separate messages：3 分
- Return value, trimming and normal submission：2 分
- Reset and comments：1 分

## Q26 XML schemas: external DTD and text with an attribute

DTD 的 #PCDATA 只声明文本内容，不能限制为 decimal。带 attribute 的纯文本元素需要 complexType + simpleContent。无 targetNamespace 的 schema 用 noNamespaceSchemaLocation；课件单独写 schemaLocation="student.xsd" 的连接示例应按此修正。

### 参考文件

#### q26.xml

```xml
<?xml version="1.0"?>
<!DOCTYPE catalog SYSTEM "q26.dtd">
<catalog><book code="B01"><title>Web basics</title><price currency="AUD">39.50</price></book></catalog>
```

#### q26.dtd

```dtd
<!ELEMENT catalog (book+)>
<!ELEMENT book (title,price)>
<!ATTLIST book code CDATA #REQUIRED>
<!ELEMENT title (#PCDATA)>
<!ELEMENT price (#PCDATA)>
<!ATTLIST price currency CDATA #REQUIRED>
```

#### q26.xsd

```xsd
<?xml version="1.0"?>
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema">
 <xsd:element name="catalog"><xsd:complexType><xsd:sequence>
  <xsd:element name="book" minOccurs="1" maxOccurs="unbounded"><xsd:complexType><xsd:sequence>
   <xsd:element name="title" type="xsd:string"/>
   <xsd:element name="price"><xsd:complexType><xsd:simpleContent>
    <xsd:extension base="xsd:decimal"><xsd:attribute name="currency" type="xsd:string" use="required"/></xsd:extension>
   </xsd:simpleContent></xsd:complexType></xsd:element>
  </xsd:sequence><xsd:attribute name="code" type="xsd:string" use="required"/></xsd:complexType></xsd:element>
 </xsd:sequence></xsd:complexType></xsd:element>
</xsd:schema>
```

#### q26-schema.xml

```xml
<?xml version="1.0"?>
<catalog xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="q26.xsd">
 <book code="B01"><title>Web basics</title><price currency="AUD">39.50</price></book>
</catalog>
```

### 对比要点

- Both XML samples validate against their stated DTD or XSD. The XSD rejects price text free and a missing currency attribute.
- External DTD declarations are not wrapped in a DOCTYPE block inside the .dtd file. A price with an attribute cannot be defined only as xsd:decimal.

### 常见错误

- 不要把属性放到 xsd:sequence 内。
- xsi:schemaLocation 需要 namespace/location 配对，不能把单个文件名当作该属性的正确一般写法。

### 自评（练习用，10 分）

- XML data and external DTD reference：2 分
- Correct DTD and required attributes：2 分
- XSD simpleContent, decimal and repetition：4 分
- Schema link and explanation：2 分

## Q27 DOM: select groups by tag and class

getElementById 返回单个元素；getElementsByTagName 和 getElementsByClassName 返回集合，需 length、索引和循环。class 参数不带点；点属于 CSS selector 写法。

### 参考文件

#### q27.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>DOM group selection</title>
<script>
function countParagraphs() {
  document.getElementById("count").textContent = document.getElementsByTagName("p").length;
}
function colourTopics() {
  var topics = document.getElementsByClassName("topic");
  for (var i = 0; i < topics.length; i++) { topics[i].style.color = "orange"; }
}
function addTopic() {
  // Create the element, set its class, then attach it to the document.
  var paragraph = document.createElement("p");
  paragraph.setAttribute("class", "topic");
  paragraph.appendChild(document.createTextNode("JavaScript"));
  document.getElementById("extra").appendChild(paragraph);
}
</script>
</head>
<body>
<p class="topic">HTML</p><p class="topic">CSS</p><p>Notes</p>
<button onclick="countParagraphs()">Count paragraphs</button><button onclick="colourTopics()">Colour topics</button><button onclick="addTopic()">Add topic</button>
<span id="count"></span><div id="extra"></div>
</body>
</html>
```

### 对比要点

- Initial paragraph count is 3. Add twice, then count again: it is 5.
- After Colour topics, HTML, CSS and all new JavaScript paragraphs are orange. Notes keeps its normal colour.

### 常见错误

- 集合本身不是一个 p，不能直接 topics.style.color。
- 用 p 显示计数会让该计数段落也进入结果。

### 自评（练习用，10 分）

- Tag-name lookup and count：3 分
- Class-name lookup and loop：3 分
- Dynamic creation and updated results：3 分
- Comments and correct output element：1 分

## Q28 Storage: save, restore and delete an object array

这与 Q19 保存原始 textarea 字符串不同：array/object 先 stringify，读回后 parse。删除用稳定 ID，避免数组索引因删除而变化；Clear 只移除本题自己的 key。

### 参考文件

#### q28.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Stored task list</title>
<script>
var tasks = [];
var lastId = 0;
function loadTasks() {
  var saved = localStorage.getItem("csit884-tasks");
  if (saved !== null) { tasks = JSON.parse(saved); }
  for (var i = 0; i < tasks.length; i++) { lastId = Math.max(lastId, tasks[i].id); }
  displayTasks();
}
function saveTasks() { localStorage.setItem("csit884-tasks", JSON.stringify(tasks)); }
function displayTasks() {
  var list = document.getElementById("tasks");
  list.innerHTML = "";
  for (var i = 0; i < tasks.length; i++) {
    var item = document.createElement("li");
    item.appendChild(document.createTextNode(tasks[i].task + " / " + tasks[i].urgency + " "));
    var button = document.createElement("button");
    button.textContent = "Delete";
    button.setAttribute("data-id", tasks[i].id);
    button.onclick = function() { deleteTask(Number(this.getAttribute("data-id"))); };
    item.appendChild(button);
    list.appendChild(item);
  }
  document.getElementById("json").value = JSON.stringify(tasks, null, 2);
}
function addTask() {
  // Keep IDs unique even when the clock returns the same millisecond.
  lastId = Math.max(new Date().getTime(), lastId + 1);
  tasks.push({id: lastId, task: document.getElementById("task").value, urgency: document.getElementById("urgency").value});
  saveTasks();
  displayTasks();
}
function deleteTask(id) {
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) { tasks.splice(i, 1); break; }
  }
  saveTasks();
  displayTasks();
}
function clearTasks() {
  tasks = [];
  localStorage.removeItem("csit884-tasks");
  displayTasks();
}
</script>
</head>
<body onload="loadTasks()">
<label>Task: <input id="task"></label>
<label>Urgency: <select id="urgency"><option>High</option><option>Medium</option><option selected>Low</option></select></label>
<button onclick="addTask()">Add task</button><button onclick="clearTasks()">Clear tasks</button>
<ul id="tasks"></ul><textarea id="json" rows="10" cols="65" readonly></textarea>
<p>localStorage normally keeps data across browser sessions. sessionStorage keeps data for the page session; reloading keeps it, but closing the tab ends that session.</p>
</body>
</html>
```

### 对比要点

- Add Read notes/High and Practise AJAX/Low, reload: both return with the same IDs and urgency values.
- Delete the first item, reload: only the second returns. Clear tasks and reload: the list is empty and the tasks key is absent.
- The JSON contains an array of objects. It is not [object Object], and IDs are unique.

### 常见错误

- 直接 setItem(key,tasks) 会把对象转换成无用字符串。
- 使用 localStorage.clear() 会清掉同 origin 下其他题目的草稿。

### 自评（练习用，10 分）

- Array, controls and display：2 分
- Unique IDs and deleting the correct item：2 分
- JSON save and first-load restoration：3 分
- removeItem and storage explanation：2 分
- Formatted JSON and comments：1 分

## Q29 Calculator: read an operation and check an answer

原题库练到数值转换和条件判断，但没有直接要求按 select 的三种运算检查答案。补题把这个 lab 题型独立保留。显示 x，对应 JavaScript 运算符是 *。

### 参考文件

#### q29.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Check an arithmetic answer</title>
<script>
function checkAnswer() {
  // Input values are strings until converted for arithmetic.
  var first = Number(document.getElementById("first").value);
  var second = Number(document.getElementById("second").value);
  var answer = Number(document.getElementById("answer").value);
  var operation = document.getElementById("operation").value;
  var expected;
  if (operation === "add") { expected = first + second; }
  else if (operation === "subtract") { expected = first - second; }
  else { expected = first * second; }
  document.getElementById("result").textContent = answer === expected ? "Correct!" : "Incorrect, please try again.";
}
</script>
</head>
<body>
<input id="first" aria-label="First number">
<select id="operation" aria-label="Operation"><option value="add">+</option><option value="subtract">-</option><option value="multiply">x</option></select>
<input id="second" aria-label="Second number"> = <input id="answer" aria-label="Your answer">
<button onclick="checkAnswer()">Check</button><span id="result"></span>
</body>
</html>
```

### 对比要点

- 10 x 5 = 50 shows Correct!; 14 - 5 = 11 shows Incorrect, please try again.
- 10 + 5 = 15 must be correct. A previous incorrect message must disappear after a correct answer.

### 常见错误

- 10 与 5 若保留为字符串，+ 得到 105。
- option 显示的符号与提交/读取的 value 可以不同。

### 自评（练习用，10 分）

- Controls and operation values：2 分
- Numeric conversion and three operations：4 分
- Answer comparison and replaced message：3 分
- Comments and names：1 分
