# CSIT884 · Reference answers

解析与分级提示见学习页面的对应视图；完整源码默认单独打开。

原 assignment 分值仅用于对应任务，不是期末预测。

## A1-1 HTML instructions page

来源：A1 Q1 · adapted instructions-page task

### 解题分析

- 按要求从上到下排列四个区域。页面只有内容与结构，不需要 JavaScript 或 CSS。
- 给定资料可以用自己的表达组织，但五个步骤都要保留；不要为了“step-by-step”擅自把指定的 unordered list 改成 ordered list。
- 新标签链接同时检查地址、显示文字和打开方式。

### a1-1.html

```html
<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Study workshop registration</title></head><body><h1>How do I register for a study workshop?</h1><h2>2026001, mayal@uowmail.edu.au</h2><ul><li>Choose a suitable workshop from the list and note when it will run.</li><li>Fill in the form with your student number and university email address.</li><li>Check that you chose the right workshop and entered the correct contact details.</li><li>Send the request before registration closes.</li><li>Look in your university email for the confirmation.</li></ul><a href="https://workshops.example/" target="_blank">Click here to read more about study workshops</a></body></html>
```

## A1-2 HTML coordinator table

来源：A1 Q2 · adapted coordinator-table task

### 解题分析

- 表头为四个 th；每位 coordinator 对应一行，形成 4×4 的逻辑网格。
- consultation hours 是一个单元格内的 ol，不是为每个时间另外增加整行。
- 图片的 src 使用完整 URL，尺寸同时约束宽和高；三个不同地址防止误用同一张图。

### a1-2.html

```html
<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Subject coordinators</title></head><body><h1>CSIT884, 2026001, Maya Lee</h1><table border="1"><tr><th>Coordinator name</th><th>Subject code</th><th>Consultation hours</th><th>Picture</th></tr><tr><td>Alex Green</td><td>CSIT884</td><td><ol><li>Tuesday 10:00–11:00</li><li>Thursday 14:00–15:00</li></ol></td><td><img src="https://cp0330.github.io/Lecture--Review/CSIT884/assets/team1.svg" width="100" height="100" alt="Alex Green"></td></tr><tr><td>Sam Brown</td><td>CSIT882</td><td><ol><li>Monday 09:00–10:00</li><li>Friday 11:00–12:00</li></ol></td><td><img src="https://cp0330.github.io/Lecture--Review/CSIT884/assets/team2.svg" width="100" height="100" alt="Sam Brown"></td></tr><tr><td>Robin White</td><td>CSIT985</td><td><ol><li>Wednesday 13:00–14:00</li></ol></td><td><img src="https://cp0330.github.io/Lecture--Review/CSIT884/assets/team3.svg" width="100" height="100" alt="Robin White"></td></tr></table></body></html>
```

## A2-1 HTML page elements

来源：A2 Q1 · clarified HTML task

### 解题分析

- 题目已消除原文三列/四列矛盾，按两行四列检查即可。
- 无序列表、外链与空格是独立要求，可逐项完成。
- 普通连续空格会折叠，使用五个 non-breaking space 后再看实际输出。

### a2-1.html

```html
<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>HTML elements</title></head><body><table border="1"><tr><td>2026001</td><td>2026001</td><td>2026001</td><td>2026001</td></tr><tr><td>Maya Lee</td><td>Maya Lee</td><td>Maya Lee</td><td>Maya Lee</td></tr></table><ul><li>Cat</li><li>Dog</li><li>Frog</li><li>Emu</li></ul><a href="https://spider.example/" target="_blank">Click here</a><p>FROG&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EMU</p></body></html>
```

## A2-2 A page with required CSS methods

来源：A2 Q2 · CSS task

### 解题分析

- 同样的视觉效果未必满足题意：inline、document、class、ID 都属于明确条件。
- class 让两个段落复用规则；ID 标识唯一标题。
- external CSS 转换是补充 Q02 的任务，不属于这道 assignment 主练的必做部分。

### a2-2.html

```html
<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Required CSS methods</title><style>.info {border-style:dashed;border-color:orange} #city {color:purple;background-color:gray}</style></head><body><p style="font-size:50px">Maya Lee</p><p style="color:blue">2026001</p><p class="info">Australia</p><p class="info">mayal@uowmail.edu.au</p><h1 id="city">City of Wollongong</h1></body></html>
```

## A2-3 Click events on a page

来源：A2 Q3 · JavaScript task

### 解题分析

- 姓名事件输出 alert 和 console；学号事件更新数字；email 事件增加新按钮，三者互不干扰。
- 计数状态放在可持续访问的位置，每次点击后先更新数据再更新页面。
- 追加动作必须保留先前节点。原分项为 1/1/3，新增按钮是该 assignment 的主要分项。

### a2-3.html

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

## A3-1 Start, stop and restart an animation

来源：A3 Q1 · animation task

### 解题分析

- 初始化奇数为 1。每次 tick 加 2，再计算奇数与学号的和。
- Stop 清理定时任务，还要把奇数恢复为 1 并立即刷新显示。
- restart 从重置后的状态启动，所以第一秒回到 3。防重复 timer 是参考实现的健壮性，不另算原 assignment 分。

### a3-1.html

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

## A3-2 A short-URL request form

来源：A3 Q2 · web-form service contract

### 解题分析

- 以服务契约为准：email 控件的参数名是 user，原 URL 是 longurl，日期是 adate。
- pmethod 的显示标签与实际代码不同。四个 radio 共用 pmethod，value 分别为 100/200/300/400。
- 浏览器负责 GET 编码与拼接参数，不需要另写 JavaScript URL 构造。未要求 validation 时不添加。

### a3-2.html

```html
<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Short-URL request</title></head><body><h1>Request a short URL</h1><form action="/short-url" method="get">
<p><label>Customer email: <input type="text" name="user"></label></p>
<p><label>Original long URL: <input type="text" name="longurl"></label></p>
<p><label>Activation date: <input type="text" name="adate"></label></p>
<p>Payment method:<br><label><input type="radio" name="pmethod" value="100">Apple Pay</label><br><label><input type="radio" name="pmethod" value="200">PayPal</label><br><label><input type="radio" name="pmethod" value="300">AliPay</label><br><label><input type="radio" name="pmethod" value="400">WeChat Pay</label></p>
<input type="submit" value="Submit"><input type="reset" value="Reset"></form></body></html>
```

## A4-1 A weather information page

来源：A4 · complete AJAX and CSS task

### 解题分析

- 先完成静态身份、五城市表与两个输入。城市表仅提供可测试坐标，不代替读取输入。
- 点击时创建一个请求，URL 使用本次输入。异步完成且成功后再 parse 和显示；结果读取 current.time/current.interval/current.temperature_2m。
- 输入值显示在 User Query；服务响应值显示在 weather table。两者含义分开，不能照抄截图里的固定数值。
- 显示模板携带 lee 与 mayal，document CSS 才能分别匹配温度单元格与标题。主分项按 A4 的 1/1/6/1/1 保留。

### a4-1.html

```html
<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Weather information</title><style>.lee {color:orange;font-size:50px} #mayal {color:purple;font-size:50px}</style><script>
function getWeather() {
  // Build the query from the values entered for this request.
  var latitude = document.getElementById("latitude").value;
  var longitude = document.getElementById("longitude").value;
  var url = "/weather?latitude=" + encodeURIComponent(latitude) + "&longitude=" + encodeURIComponent(longitude) + "&current=temperature_2m";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4) {
      if (xhttp.status == 200) { displayWeather(JSON.parse(xhttp.responseText), latitude, longitude); }
      else { document.getElementById("weatherDisplay").textContent = "Request failed: " + xhttp.status; }
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
function displayWeather(weather, latitude, longitude) {
  // Response values, rather than copied sample numbers, supply the result.
  var output = "<table border='1'><tr><th colspan='2'>User Query</th></tr><tr><td>Latitude</td><td>" + latitude + "</td></tr><tr><td>Longitude</td><td>" + longitude + "</td></tr></table>";
  output += "<table border='1'><tr><th colspan='2' id='mayal'>Weather information</th></tr>";
  output += "<tr><td>Elevation</td><td>" + weather.elevation + "</td></tr>";
  output += "<tr><td>Time</td><td>" + weather.current.time + "</td></tr>";
  output += "<tr><td>Interval</td><td>" + weather.current.interval + "</td></tr>";
  output += "<tr><td>Temperature</td><td class='lee'>" + weather.current.temperature_2m + "</td></tr>";
  output += "<tr><td>Generationtime (ms)</td><td>" + weather.generationtime_ms + "</td></tr></table>";
  document.getElementById("weatherDisplay").innerHTML = output;
}
</script></head><body><h1>2026001, Maya Lee</h1><table border="1"><tr><th>City</th><th>Country</th><th>Latitude</th><th>Longitude</th></tr><tr><td>Wollongong</td><td>Australia</td><td>-34.4278</td><td>150.8931</td></tr><tr><td>New York</td><td>USA</td><td>40.7128</td><td>-74.006</td></tr><tr><td>Paris</td><td>France</td><td>48.8566</td><td>2.3522</td></tr><tr><td>Tokyo</td><td>Japan</td><td>35.6762</td><td>139.6503</td></tr><tr><td>Auckland</td><td>New Zealand</td><td>-36.8509</td><td>174.7645</td></tr></table><p><label>Latitude: <input id="latitude"></label></p><p><label>Longitude: <input id="longitude"></label></p><button onclick="getWeather()">Get Weather JSON</button><div id="weatherDisplay"></div></body></html>
```

## Q01 A competition information page

来源：Final review: HTML; A1 Q1/Q2; A2 Q1; L01

### 解题分析

- 先完成页面骨架，再逐项检查 tag、attribute 和题目规定的列表类型。给定的 example 域名只检查链接设置，不要求网站真实可访问。
- 链接用 href，图片用 src；列表嵌在 Members 单元格中。
- 先完成一支队伍的整行，再复制另一行并换数据；entity 末尾不要漏分号。

### q01.html

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

## Q02 CSS selectors and an external stylesheet

来源：Final review: CSS; A2 Q2; A4 selector requirements; L02

### 解题分析

- 先按每条要求确定样式放在哪里，再写 selector。外部 CSS 接收的是规则本身，HTML 负责用 link 引入。
- 空格 selector 匹配后代；> 只匹配直接子元素。
- 外部文件只接收 CSS 规则；原 HTML 中的 inline CSS 仍保留。

### q02.html

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

### q02-external.html

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

### q02.css

```css
#heading { color: purple; background-color: lightgray; }
.info { border: 2px dashed orange; padding: 10px; }
#teamTable { border-collapse: collapse; }
#teamTable th, #teamTable td { border: 1px solid black; padding: 12px; vertical-align: top; }
#teamTable .rank { text-align: right; }
.members > li { color: green; }
```

## Q03 Clicking text and adding buttons

来源：Final review: JavaScript and onclick; A2 Q3; L03 Q1/Q5/Q6

### 解题分析

- 计数变量放在函数外，才能跨多次点击保留。累加内容与覆盖内容是两个不同要求。
- 计数变量要跨点击保留；新增按钮不能替换现有内容。
- 先分别测试姓名、计数、追加，再测试交替点击，确认状态没有互相影响。

### q03.html

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

## Q04 Animal buttons and text commands

来源：Final review: value, src and events; L03 Q2/Q3/Q7

### 解题分析

- 先把公共更新功能写成参数化函数，再让按钮和键盘事件共用。这里的条件表达式也可换成 if/else。
- 文本框读写 value，图像来源读写 src；命令要先判断 Enter。
- 可复用一个显示动物的函数；无效命令只 alert，不改图像和状态。

### q04.html

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

## Q05 Animation with a single running sequence

来源：Final review: setInterval/clearInterval; A3 Q1; L06 Q4

### 解题分析

- timer 保存是否正在运行；firstNumber 保存动画的当前数值。停止时两种状态都需要恢复。
- 用一个保存 timer ID 的状态判断动画是否已经运行。
- 首次 Start 只有在 timer 未运行时建立 interval；Stop 清理后把 timer 状态恢复，再重置等式。

### q05.html

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

## Q06 A random slideshow

来源：Final review: random numbers and animation; L06 Q5; Animation B slideshow

### 解题分析

- 用 array.length 决定随机范围，可以随图片数量调整。停止后没有清空 src，因为题目要求保留。
- 索引从 0 开始，最大为图片数量减一。
- 每次 tick 用 floor(random × array.length) 选择，再设置 img.src；Stop 保留 src。

### q06.html

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

## Q07 A library search form

来源：Final review: web-form marking requirements; A3 Q2; L04

### 解题分析

- name 决定参数名，value 决定被选项提交的值。多个同名 checkbox 可以生成多个 sub 参数。reset 恢复默认状态。
- checkbox 可以同名不同值；radio 同组也同名，但只能选一个。
- 提交的 name/value 与显示标签分开检查；Reset 应回到默认 Print。

### q07.html

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

## Q08 A random question before form submission

来源：Final review: form validation and random numbers; L05; Form Validation B

### 解题分析

- 返回 false 的关键是 form 中也写 return。题目数据是页面状态，应在用户作答期间保持一致。
- 生成问题时保存两数；提交时不要重新抽取随机数。
- 失败返回 false，成功返回 true；form 的提交事件也必须传递该返回值。

### q08.html

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

## Q09 Correct an invalid JSON document

来源：Final review: JSON syntax; L09 Q1/Q2

### 解题分析

- 对象内的每个成员都要有属性名；JSON 的属性名使用双引号，boolean 写 true/false，不使用尾随逗号。JavaScript object 的属性名也可以带引号。
- 检查属性名引号、boolean 大小写和末尾逗号。
- 为数组加 subjectList 属性名；用 JSON 的小写 true，并保持 age 是数字。

### q09.json

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

## Q10 Convert subject data to and from JSON

来源：Final review: stringify/parse; L09 Q3/Q4

### 解题分析

- textarea 也是表单控件，使用 value。checkbox 的选中状态使用 checked。两个方向分别需要 stringify 和 parse。
- cp 是 number；checkbox 的选中状态是 boolean。
- 读取 cp 时做数值转换；checkbox 用 checked。stringify 写入 textarea.value，parse 后反向赋回控件。

### q10.html

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

## Q11 Write a student record in XML

来源：Final review: XML data and root element; L07 Q1/Q3

### 解题分析

- XML 的任务是保留数据关系。两个顶层 student 缺少共同根元素；XML 属性值必须用引号。空格和缩进可不同。
- 先写唯一 root，再按题目顺序放身份和每一条 subject。
- 属性值要有引号；相同记录重复 subject 标签，不额外增加第二个 root。

### q11.xml

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

## Q12 Write an internal DTD

来源：Final review: XML/DTD; L07 Q4; XMLDTD lecture

### 解题分析

- DOCTYPE 名称与根一致。+ 表示一次或以上，* 表示零次或以上，? 表示零次或一次。逗号规定顺序。
- + 表示至少一条；文本元素与属性的声明语法不同。
- ELEMENT 描述内容，ATTLIST 描述 required 属性；DOCTYPE 的名称必须等于 root。

### q12.xml

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

## Q13 Write an XSD for exam results

来源：Final review: simple/complex types; L08 Q1/Q2/Q3

### 解题分析

- resultBatch/result 都含子元素和 attribute，因此是 complex type。attribute 声明在 sequence 后；叶子数据的取值限制放在 simpleType 中。
- 有子元素或 attribute 的元素需要 complex type；score/band 的值用限制。
- sequence 内声明子元素，sequence 后声明 attributes；score 用 integer restriction，band 用 enumeration。

### q13.xsd

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

### q13-sample.xml

```xml
<?xml version="1.0"?>
<resultBatch campus="Sydney">
  <result ref="R001"><contestantId>00025142</contestantId><examId>WEB01</examId><score>156</score><band>C</band></result>
  <result ref="R002"><contestantId>00025143</contestantId><examId>WEB01</examId><score>280</score><band>A</band></result>
</resultBatch>
```

## Q14 Load faculty and airport details

来源：Final review: XHR, parse and display; L11 Q1/Q2; A4 request/display workflow

### 解题分析

- 异步回调负责确认请求结果；parse 负责把字符串变成数据；display 函数负责把数据变成页面。最后一步通常是主要代码量。此题服务数据视为可信、格式正确的练习数据。
- 请求回调取得数据后，显示函数才读取相应字段。
- 按数组长度循环生成行；请求完成且 status 成功后 parse，否则只在对应输出区显示失败状态。

### q14.html

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

## Q15 Request and display weather data

来源：Final review: AJAX/CSS; A4; L11

### 解题分析

- 请求地址与显示内容都要由输入/响应驱动。encodeURIComponent 编码参数值，若本题只允许数字也可用直接拼接；XHR 技术要求仍必须满足。
- 每次点击重新读坐标，构造 query，不能固定写某个城市。
- 成功时读取 current 下的字段；最后检查 class=lee、id=mayal 与 document CSS 规则一致。

### q15.html

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

## Q16 Draw a triangle and its medians

来源：Final review: canvas; L12 Q1

### 解题分析

- 先画填充三角形，再画白色中线，最后写标签，避免后画的填充遮住线。clearRect 的后两个参数是宽和高。
- 读入的坐标是字符串，计算中点之前先转数字。
- 清空画布后开始新 path；每条中线连接一个顶点和对边中点，填色和描边分别设置。

### q16.html

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

## Q17 Match animals by drag and drop

来源：Final review: dragstart/drop/dragover; L12 Q2/Q3

### 解题分析

- 目标动物通过事件处理函数参数传入，不依赖 event.target.id；这样 drop 到区内子元素时仍可正确判断。新图没有复制原 id。
- dragover 默认不允许普通 drop；匹配以后才更新计数和副本。
- dataTransfer 存取同一个 key；目标动物可通过参数传入，避免内部子元素改变 event.target 后误判。

### q17.html

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

## Q18 Add books to an order

来源：Final review: DOM methods; L13; DOM lecture; A2 dynamic content

### 解题分析

- 基础题只需读输入、追加订单和更新 total；总数是 quantity 的和。q18.html 是另外的 DOM 扩展，不是基础题的必做按钮。
- 每次读入 quantity，新增一条记录，再把该数量加到总数。
- 伪代码：read fields → convert quantity → create list item → append → total += quantity → display total。

### q18-basic.html

```html
<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Book order</title><script>
var total = 0;
function addOrder() {
  // Add the requested quantity, not just one per order line.
  var title = document.getElementById("title").value;
  var code = document.getElementById("code").value;
  var quantity = Number(document.getElementById("quantity").value);
  var item = document.createElement("li");
  item.appendChild(document.createTextNode(code + ": " + title + " x " + quantity));
  document.getElementById("orders").appendChild(item);
  total += quantity;
  document.getElementById("total").textContent = total;
}
</script></head><body><label>Book title: <input id="title"></label><br><label>Product code: <input id="code"></label><br><label>Quantity: <input id="quantity"></label><br><button onclick="addOrder()">Add to order</button><ul id="orders"></ul><p>Total number of books ordered: <span id="total">0</span></p></body></html>
```

### q18.html

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

## Q19 Validate JSON and restore the last input

来源：Final review: local storage and JSON; L14 Q1/Q2

### 解题分析

- 保存的是用户原文；解析成功与否只影响验证结果。首次 getItem 返回 null，不能把 null 字样当用户内容显示。textContent 是安全显示纯文本的同类 DOM 属性，换用合适的纯文本节点也可以。
- parse 失败会抛异常；草稿保存的是原始字符串。
- try/catch 控制红绿结果；getItem 返回 null 表示首次使用。对 storage 读写也保留失败时继续验证的路径。

### q19.html

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

## Q20 Change a heading’s colour and size

来源：Final review: CSS with JavaScript; L10; CSS with JS B

### 解题分析

- CSS 的 font-size 在 JavaScript style 中写成 fontSize。transform 决定变换，transition 决定变化过程；本题明确使用 transform 放大。
- CSS 的连字符属性在 JS style 中改为 camelCase。
- fontSize 的值要包含 px；transition 只作用于 transform，hover 改 scale，离开后回原状态。

### q20.html

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

## Q21 Merged table cells and page links

来源：HTML lecture pp. 17–18, 36–37, 45, 58–66; L01 HTML-only task form

### 解题分析

- 合并后按逻辑列数数格子：rowspan 占用的下一行位置不再添加 td。font、align、valign 是本课程原练习使用的旧式 HTML，不能推广为现代网页的首选写法。
- rowspan 占住下一行的位置，下一行不能再补同一个格子。
- 页内链接用 # 与目标 ID 配合；description list 与 pre 各解决不同的内容展示问题。

### q21.html

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

## Q22 CSS spacing and rule selection

来源：CSS lecture: borders, lists, links and cascading; L02 CSS table exercise

### 解题分析

- 这里明确排除了 !important、不同来源等因素，才能直接比较 specificity（选择器具体程度）。同一优先级和相同 specificity 才比较后出现的规则。浏览器为隐私限制对 visited 的读取，不能仅靠脚本读取颜色来判定访问历史。
- 在该前提下先比较 specificity，再考虑同条件下的先后顺序。
- ID 比 class 和 type 更具体；border-spacing 只在 separate 模式产生单元格间距。

### q22.html

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

## Q23 Image swapping and input events

来源：Week 13: mouseover, focus, blur, change and select; Event lecture pp. 5–19; L03 Q8

### 解题分析

- 先保存左图旧 src 再覆盖，否则两图会变成同一来源。onselect 是选中文字；onchange 是值被确认改变。prompt 取消与输入空字符串是两种结果。
- 交换前先保存旧值；change 不等同于 select。
- prompt 的取消值为 null；空字符串仍是输入结果。confirm 返回 boolean。

### q23.html

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

## Q24 Arrays, strings and dates

来源：JSbasics lecture: String pp. 61–62, Date pp. 63–70, Array pp. 71–75; L06 input/output task form

### 解题分析

- indexOf 找不到返回 -1；splice(-1,1) 会删除最后一项。Date 的月份索引从 0 开始，getDay 是周几，getDate 是月内日期。复制 Date 再改日期，避免修改原对象。
- indexOf 找不到返回 -1；Date 月份索引从 0 开始。
- 先判断索引再 splice；复制 Date 后再 setDate，避免修改原日期对象。

### q24.html

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

## Q25 Two ways to validate a form

来源：FormValidation lecture pp. 4–6, 8–22; Week 13: onsubmit return; L05 task form

### 解题分析

- Part A 和 Part B 分开，避免浏览器先拦住提交而误以为 JavaScript 分支已经运行。pattern 默认要求整个输入匹配；只在题目要求时添加 validation。
- 空白要在 trim 后检查；只有两项都非空时再比较。
- 每次先清旧错误，记录 valid 状态；成功时保存 trimmed 值并返回 true。

### q25.html

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

## Q26 An external DTD and an XSD

来源：XMLDTD lecture pp. 25–38; XSD lecture p. 11; Week 13: attributes require a complex type

### 解题分析

- DTD 的 #PCDATA 只声明文本内容，不能限制为 decimal。带 attribute 的纯文本元素需要 complexType + simpleContent。无 targetNamespace 的 schema 用 noNamespaceSchemaLocation；课件单独写 schemaLocation="student.xsd" 的连接示例应按此修正。
- price 有文本也有 attribute，因此不能只给它一个 simple type。
- simpleContent/extension 在 decimal 文本上添加 currency；无 targetNamespace 的 instance 用 noNamespaceSchemaLocation。

### q26.xml

```xml
<?xml version="1.0"?>
<!DOCTYPE catalog SYSTEM "q26.dtd">
<catalog><book code="B01"><title>Web basics</title><price currency="AUD">39.50</price></book></catalog>
```

### q26.dtd

```dtd
<!ELEMENT catalog (book+)>
<!ELEMENT book (title,price)>
<!ATTLIST book code CDATA #REQUIRED>
<!ELEMENT title (#PCDATA)>
<!ELEMENT price (#PCDATA)>
<!ATTLIST price currency CDATA #REQUIRED>
```

### q26.xsd

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

### q26-schema.xml

```xml
<?xml version="1.0"?>
<catalog xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="q26.xsd">
 <book code="B01"><title>Web basics</title><price currency="AUD">39.50</price></book>
</catalog>
```

## Q27 Select DOM element groups

来源：Week 13: getElementsByTagName/getElementsByClassName; DOM lecture p. 6

### 解题分析

- getElementById 返回单个元素；getElementsByTagName 和 getElementsByClassName 返回集合，需 length、索引和循环。class 参数不带点；点属于 CSS selector 写法。
- 集合要用 length 和索引；class 名参数不带 CSS 的点。
- 每次操作查询当前集合并循环；新增 p 接入页面后，下次查询就会包括它。

### q27.html

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

## Q28 Save and restore a task list

来源：Week 13: local storage; WebStorage lecture pp. 5–31, task-list example

### 解题分析

- 这与 Q19 保存原始 textarea 字符串不同：array/object 先 stringify，读回后 parse。删除用稳定 ID，避免数组索引因删除而变化；Clear 只移除本题自己的 key。
- 对象数组需要先转换为 JSON 字符串，恢复后再重建列表。
- load: getItem → null check → parse → display；add/delete 后保存；Clear 只 removeItem 本题 key。

### q28.html

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

## Q29 Check an arithmetic answer

来源：L06 Q2: addition, subtraction and multiplication; JS2 input/output; Week 13: value and functions

### 解题分析

- 原题库练到数值转换和条件判断，但没有直接要求按 select 的三种运算检查答案。补题把这个 lab 题型独立保留。显示 x，对应 JavaScript 运算符是 *。
- 先读 select 的 value 再选择运算；显示 x 时计算运算符是 *。
- 三个输入按题意转换为数字，算 expected，再比较 answer 并替换原反馈。

### q29.html

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
