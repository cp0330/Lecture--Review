# CSIT884 · Assignment-led practice

8 assignment-style tasks; 29 lab/classroom supplements. Questions are English. Hints, explanations and references are separate in the web workspace.

Original assignment points appear only where supplied. They are not final-exam topic weights.

## A1-1 HTML instructions page

Assignment practice · A1 Q1 · adapted instructions-page task

1. Use HTML only, with no CSS, to create a web page called workshop.html. Use the practice identity Maya Lee / 2026001 / mayal@uowmail.edu.au.
2. On the top of the page, display the main large heading "How do I register for a study workshop?". Below it, display a smaller heading containing the student number and email.
3. Use the information in the supplied table to write the registration steps in your own words. Display the steps in an unordered list.
4. Below the list, display a link with the text "Click here to read more about study workshops" and the address https://workshops.example/. When the user clicks the link, it must open in a new tab.

### Information to use

| Step | Information |
| --- | --- |
| Check the workshop list | Choose a workshop and check its date. |
| Complete the form | Enter your student number and university email. |
| Review your details | Check the workshop and your contact details. |
| Submit the request | Submit the form before the closing date. |
| Read the confirmation | Check your university email for the result. |

Source/adaptation: A1 Q1 uses Academic Consideration and an external reading task. This adaptation supplies fictional workshop information, so HTML practice is self-contained. The required heading, identity, list and new-tab link follow the assignment form.

## A1-2 HTML coordinator table

Assignment practice · A1 Q2 · adapted coordinator-table task

1. Use HTML only, with no CSS, to create coordinators.html. On the top of the page, display a large heading containing CSIT884, the practice student number and full name: 2026001, Maya Lee.
2. Below the heading, use a table with a visible border to display the three supplied coordinator records. The table headers must be Coordinator name, Subject code, Consultation hours and Picture. Each coordinator must appear in a separate row.
3. In the Consultation hours column, display the hours using an ordered list.
4. In the Picture column, display the supplied picture for that coordinator at 100 by 100 pixels. Use the full image address. Each row must use a different picture.

### Supplied practice records

| Coordinator | Subject | Consultation hours | Full image address |
| --- | --- | --- | --- |
| Alex Green | CSIT884 | Tuesday 10:00–11:00; Thursday 14:00–15:00 | https://cp0330.github.io/Lecture--Review/CSIT884/assets/team1.svg |
| Sam Brown | CSIT882 | Monday 09:00–10:00; Friday 11:00–12:00 | https://cp0330.github.io/Lecture--Review/CSIT884/assets/team2.svg |
| Robin White | CSIT985 | Wednesday 13:00–14:00 | https://cp0330.github.io/Lecture--Review/CSIT884/assets/team3.svg |

Source/adaptation: A1 Q2 uses the learner’s actual subject coordinators and pictures from uow.edu.au. These names, hours and supplied image addresses are fictional practice data; the original domain requirement is adapted explicitly.

## A2-1 HTML page elements

Assignment practice · A2 Q1 · clarified HTML task

1. Use HTML only to create a web page. Use the practice identity Maya Lee / 2026001.
2. Display a table with a visible border, two rows and four columns. In every cell of the first row, display 2026001. In every cell of the second row, display Maya Lee.
3. Display an unordered list containing four animal names of your choice.
4. Display a link with the text "Click here" and the address https://spider.example/. When the user clicks the link, it must open in a new tab.
5. Display FROG, then exactly five non-breaking spaces, then EMU.

Source/adaptation: The original A2 Q1 says both four columns and three columns. This practice explicitly uses two rows and four columns. The original link destination is replaced with a fictional practice domain.

## A2-2 A page with required CSS methods

Assignment practice · A2 Q2 · CSS task

1. Use HTML and CSS to create a web page. Use the practice identity Maya Lee / 2026001 / mayal@uowmail.edu.au, and the country Australia.
2. Display the full name at a font size of 50px using inline CSS.
3. Display the student number in blue using inline CSS.
4. Display two paragraphs: one containing the country and one containing the email. Use document CSS with a class selector to give both paragraphs a dashed orange border.
5. Display a large heading "City of Wollongong". Use document CSS with an ID selector to set its text colour to purple and its background colour to gray.

Source/adaptation: 

## A2-3 Click events on a page

Assignment practice · A2 Q3 · JavaScript task

1. Use HTML and JavaScript to create a web page. Display the practice full name Maya Lee. Whenever the user clicks the name, display an alert message "Hi" and write Maya Lee to the console.
2. Display a button labelled 2026001. The first click displays 1 below the button. Further clicks display 2, 3, and so on. You may display 0 before the first click.
3. Display the email mayal@uowmail.edu.au. The first click on the email adds one button labelled CSIT884 below it. The second click gives two buttons, the third gives three, and so on. Keep the buttons already added.

Source/adaptation: 

## A3-1 Start, stop and restart an animation

Assignment practice · A3 Q1 · animation task

1. Use the practice student number 2026001. Create a web page that initially displays 1 + 2026001 = 2026002. Use inline CSS to make the equation red and 60px.
2. Display two clickable texts: "Start Animation" in orange and "Stop Animation" in purple.
3. When the user clicks Start Animation, update the equation every second. After one second, display 3 + 2026001 = 2026004. After another second, display 5 + 2026001 = 2026006. Continue with 7, 9, and so on.
4. When the user clicks Stop Animation, stop the updates and display the original equation: 1 + 2026001 = 2026002.
5. If the user clicks Start Animation again, start the sequence again with 3 after one second, then 5, 7, and so on.

Source/adaptation: The assignment requires the learner’s own student number. This public practice uses a fixed sample identity. The reference also prevents duplicate timers; that lab robustness detail is not a new assignment marking item.

## A3-2 A short-URL request form

Assignment practice · A3 Q2 · web-form service contract

1. Create a web page containing a form for a customer to request a short URL. The service documentation is supplied below.
2. Use three text fields: one for the customer email, one for the original long URL, and one for the activation date.
3. Use radio buttons for the payment method. The customer can choose Apple Pay, PayPal, AliPay or WeChat Pay.
4. Display a Submit button and a Reset button. The form must explicitly use the action, method, parameter names and values in the service documentation. Do not add input validation.

### Service documentation

| Item | Required value |
| --- | --- |
| Action | /short-url on the local practice server |
| Method | GET |
| user | Customer email |
| longurl | Original long URL |
| adate | Activation date |
| pmethod | 100 = Apple Pay; 200 = PayPal; 300 = AliPay; 400 = WeChat Pay |

Source/adaptation: The original fictional service is http://urlservice.org/form. The runnable practice substitutes /short-url on the local practice server. Parameter names and payment values are retained.

## A4-1 A weather information page

Assignment practice · A4 · complete AJAX and CSS task

1. Create a web page. On the top, display a heading containing the practice student number and name: 2026001, Maya Lee.
2. Below the heading, display a table with a visible border, four columns and six rows. The headers are City, Country, Latitude and Longitude. Display the five supplied city records in the remaining rows.
3. Below the table, display two text fields for the user to enter latitude and longitude. Display a button labelled "Get Weather JSON".
4. When the user enters coordinates and clicks the button, construct the request URL from those inputs and obtain the corresponding JSON. You must use the XMLHttpRequest AJAX method taught in this subject.
5. Display User Query with the entered coordinates. Then display a bordered Weather information table containing Elevation, Time, Interval, Temperature and Generationtime (ms), using the response data. Follow the supplied target layout.
6. Use document CSS and a class selector to make the temperature orange and 50px. The class name must equal the practice family name, lee.
7. Use document CSS and an ID selector to make "Weather information" purple and 50px. The ID must equal the practice email username, mayal.
8. You may assume valid numeric input. Test several coordinate pairs, including Wollongong and New York. Each new request must display the result for the current input.

### City records

| City | Country | Latitude | Longitude |
| --- | --- | --- | --- |
| Wollongong | Australia | -34.4278 | 150.8931 |
| New York | USA | 40.7128 | -74.006 |
| Paris | France | 48.8566 | 2.3522 |
| Tokyo | Japan | 35.6762 | 139.6503 |
| Auckland | New Zealand | -36.8509 | 174.7645 |

### Service documentation

| Item | Required value |
| --- | --- |
| Endpoint | /weather on the local practice server |
| Method | GET |
| Parameters | latitude; longitude; current=temperature_2m |
| Sample query | /weather?latitude=-34.4278&longitude=150.8931&current=temperature_2m |
| Response fields | latitude, longitude, elevation, generationtime_ms; current.time, current.interval, current.temperature_2m |

### Sample response

```text
{"latitude":-34.4278,"longitude":150.8931,"elevation":32,"generationtime_ms":0.12,"current":{"time":"2026-11-06T09:00","interval":900,"temperature_2m":18.5}}
```

Source/adaptation: A4 uses Open-Meteo. This practice substitutes a documented local endpoint and fixed response data, so it works without a live weather service. The full five-city table and assignment task structure are retained.

## Q01 A competition information page

Lab supplement · Final review: HTML; A1 Q1/Q2; A2 Q1; L01

1. Create q01.html using HTML only, with no CSS. Set the page title to Coding Competition. Display a large heading Coding Competition, then a smaller heading with Maya Lee / 2026001 / mayal@uowmail.edu.au.
2. Display a bordered table with the headings Rank, Team and Members. The two data rows are 1st / River and 2nd / Mountain.
3. For River, display a River Team link to https://river.example/ and, on the next line, ../assets/team1.svg at 120 by 80 pixels. For Mountain, use https://mountain.example/ and ../assets/team2.svg with the same size. Both links must open in a new tab.
4. Display each team’s members in an unordered list. River: Alex and Bo; Mountain: Chen and Dee. Make Alex and Chen bold and add (team leader) in italic after each name.
5. Below the table, display an ordered list containing Register, Practice and Compete. Then display FROG, five non-breaking spaces and EMU. Add a smiley face using the supplied decimal character entity number 128516.

Source/adaptation: Supplementary practice based on the listed lab/lecture material. It is not an assignment marking scheme.

## Q02 CSS selectors and an external stylesheet

Lab supplement · Final review: CSS; A2 Q2; A4 selector requirements; L02

1. Create q02.html with a heading City Coding Teams, name Maya Lee, student number 2026001, and paragraphs Australia and mayal@uowmail.edu.au.
2. Use document CSS and an ID selector for the heading: purple text and lightgray background. Use inline CSS for the name at 50px and the student number in blue.
3. Give both paragraphs class info. Use document CSS with that class to give them a 2px dashed orange border and 10px padding.
4. Add a table with ID teamTable, column headings Rank and Members, and a row containing 1 and a list of Alex and Bo. Give the list class members and the Rank cells class rank.
5. Use descendant selectors for the table cells: a 1px solid black border, 12px padding and top vertical alignment. Collapse the table borders and right-align the Rank cells. Use a child selector to make the direct list items green.
6. Create q02-external.html and q02.css. Move the document CSS into the CSS file, keep the inline CSS, and link the stylesheet. Both versions must have the same appearance.

Source/adaptation: Supplementary practice based on the listed lab/lecture material. It is not an assignment marking scheme.

## Q03 Clicking text and adding buttons

Lab supplement · Final review: JavaScript and onclick; A2 Q3; L03 Q1/Q5/Q6

1. Create a web page displaying Maya Lee. Clicking the name must show the alert Hi and write Maya Lee to the console.
2. Display a button labelled 2026001 and a counter initially showing 0. Each click increases that counter by one.
3. Display mayal@uowmail.edu.au. Each click on the email adds one CSIT884 button below it. Keep all earlier buttons.

Source/adaptation: Supplementary practice based on the listed lab/lecture material. It is not an assignment marking scheme.

## Q04 Animal buttons and text commands

Lab supplement · Final review: value, src and events; L03 Q2/Q3/Q7

1. Create a page with Cat and Dog buttons, a read-only status field, an image and a command field.
2. Clicking Cat displays Cat selected and ../assets/cat.svg. Clicking Dog displays Dog selected and ../assets/dog.svg.
3. When the user enters display cat or display dog in the command field and presses Enter, display the same corresponding result as the buttons.
4. Any other command followed by Enter must show the alert Invalid command and keep the previous result. Other keys do not execute a command. Commands are case-sensitive and spaces do not need to be removed.

Source/adaptation: Supplementary practice based on the listed lab/lecture material. It is not an assignment marking scheme.

## Q05 Animation with a single running sequence

Lab supplement · Final review: setInterval/clearInterval; A3 Q1; L06 Q4

1. Create a page initially displaying 1 + 2026001 = 2026002 in red at 60px using inline CSS. Display clickable Start Animation in orange and Stop Animation in purple.
2. Start increases the first number by two every second and updates the sum. The first change is to 3 after one second, followed by 5, 7, and so on.
3. Clicking Start several times while running must still produce only one update per second and must not reset the sequence.
4. Stop stops the updates and restores the original equation. A later Start begins again at 3 after one second.

Source/adaptation: Supplementary practice based on the listed lab/lecture material. It is not an assignment marking scheme.

## Q06 A random slideshow

Lab supplement · Final review: random numbers and animation; L06 Q5; Animation B slideshow

1. Create a web page with Start Slideshow and Stop Slideshow buttons. Use the six supplied pictures, ../assets/team1.svg through ../assets/team6.svg.
2. After Start, display a randomly selected picture every 1.2 seconds. The first picture appears after 1.2 seconds. The same picture may appear twice in a row.
3. Stop keeps the last picture and stops further updates. Start can then resume the slideshow. Repeated Start clicks must never create simultaneous slideshows.

Source/adaptation: Supplementary practice based on the listed lab/lecture material. It is not an assignment marking scheme.

## Q07 A library search form

Lab supplement · Final review: web-form marking requirements; A3 Q2; L04

1. Create a library search form using the supplied service documentation. Use text fields for author and year, checkboxes for subjects and radio buttons for format.
2. Offer Mathematics, Computer Science and Biology. Allow more than one subject. Offer Print and Electronic formats, with Print selected initially.
3. Display Search and Clear buttons. Search submits the form; Clear restores the default form. Do not add validation.

### Service documentation

| Item | Required value |
| --- | --- |
| Action | /search on the local practice server |
| Method | GET |
| author; year | Author and publication year |
| sub | mth = Mathematics; cs = Computer Science; bio = Biology; multiple values allowed |
| format | p = Print (default); e = Electronic |

Source/adaptation: Supplementary practice based on the listed lab/lecture material. It is not an assignment marking scheme.

## Q08 A random question before form submission

Lab supplement · Final review: form validation and random numbers; L05; Form Validation B

1. Create the library form shown in the supplied starting file, with an addition question and an answer field.
2. On page load, display two random integers from 1 to 10 as an addition question.
3. When the user submits an empty or incorrect answer, display Wrong! in red and prevent submission. A correct answer clears the message and submits the library parameters normally.
4. The question stays the same until Clear is clicked. Clear restores the form, creates a new question and removes the error. Do not send the question or answer as service parameters. Validate only the maths answer.

### Starting form

[Starting form](data/starters/q08-start.html)

Source/adaptation: Supplementary practice based on the listed lab/lecture material. It is not an assignment marking scheme.

## Q09 Correct an invalid JSON document

Lab supplement · Final review: JSON syntax; L09 Q1/Q2

1. Correct the supplied JSON and save it as q09.json. Keep all data. The subject array must be named subjectList, age must be a number, and fullTime must be a boolean.

### Supplied document

```json
{
 "firstName":"Maya",
 "lastName":"Lee",
 [ {"code":"CSIT884","title":"Web Development"},
   {"code":"CSIT882","title":"Systems"} ],
 age:22,
 "fullTime":True,
}
```

Source/adaptation: Supplementary practice based on the listed lab/lecture material. It is not an assignment marking scheme.

## Q10 Convert subject data to and from JSON

Lab supplement · Final review: stringify/parse; L09 Q3/Q4

1. Create a page with text fields for subject code, title and credit point, a Core subject checkbox, a textarea, and View JSON and Read JSON buttons.
2. When View JSON is clicked, construct a subject object from the fields and display its JSON in the textarea with two-space indentation. Its properties are code, title, cp and coreFlag. cp is numeric and coreFlag is boolean.
3. When Read JSON is clicked, reconstruct the subject from the textarea and display its values in the fields and checkbox.
4. Test with CSIT884, Web Development, 6 and a selected checkbox. You may assume valid input; error handling is not required.

Source/adaptation: Supplementary practice based on the listed lab/lecture material. It is not an assignment marking scheme.

## Q11 Write a student record in XML

Lab supplement · Final review: XML data and root element; L07 Q1/Q3

1. Write q11.xml to represent the supplied complete student record. Write XML only, without a DTD. Put the XML declaration at the start of the first line.
2. Use a student root with a number attribute. Use firstName, lastName and subjects in that order. Each subject has a code attribute and creditPoint, mark and grade children in that order.
3. The student is Maya Lee, number 2026001. The subjects are CSIT884 / 6 / 84 / A and CSIT882 / 6 / 72 / B. Keep all records and values.

Source/adaptation: Supplementary practice based on the listed lab/lecture material. It is not an assignment marking scheme.

## Q12 Write an internal DTD

Lab supplement · Final review: XML/DTD; L07 Q4; XMLDTD lecture

1. The supplied XML describes a student and subject records. Create q12.xml with the same data and a corresponding internal DTD.
2. student contains firstName, lastName and subjects in that order. subjects contains one or more subject records. Each subject contains creditPoint, mark and grade in that order.
3. The number attribute on student and the code attribute on subject are required. All element text and both attributes are text data.

### XML to constrain

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

Source/adaptation: Supplementary practice based on the listed lab/lecture material. It is not an assignment marking scheme.

## Q13 Write an XSD for exam results

Lab supplement · Final review: simple/complex types; L08 Q1/Q2/Q3

1. Write q13.xsd for the supplied XML. resultBatch contains one or more result records, with no upper limit. campus and ref are required string attributes.
2. Each result contains exactly one contestantId, examId, score and band, in that order. contestantId and examId are strings, including any leading zeros.
3. score must be an integer from 0 to 300 inclusive. band must be A, B, C or D.

### Supplied document

```xml
<?xml version="1.0"?>
<resultBatch campus="Sydney">
  <result ref="R001"><contestantId>00025142</contestantId><examId>WEB01</examId><score>156</score><band>C</band></result>
  <result ref="R002"><contestantId>00025143</contestantId><examId>WEB01</examId><score>280</score><band>A</band></result>
</resultBatch>
```

Source/adaptation: Supplementary practice based on the listed lab/lecture material. It is not an assignment marking scheme.

## Q14 Load faculty and airport details

Lab supplement · Final review: XHR, parse and display; L11 Q1/Q2; A4 request/display workflow

1. Create a page with Get Faculty Details and Search Airport buttons. Use the supplied faculty.json and airports.json files.
2. When Get Faculty Details is clicked, use the classroom XMLHttpRequest method to obtain the faculty JSON. Display Name, Abbreviation, Email and Website.
3. When Search Airport is clicked, use the same AJAX method to obtain the airport JSON. Display Search Query and a bordered table with Airport, ICAO, IATA and Location columns. Display every airport record. Location is city followed by country.
4. Each click replaces that result area. If a request fails, display Request failed: followed by its status number.

### faculty.json

```json
{
  "name": "Faculty of Engineering and Information Sciences",
  "abbreviation": "EIS",
  "email": "eis@uow.edu.au",
  "web": "www.uow.edu.au/engineering-information-sciences"
}
```

### airports.json

```json
{
  "searchQuery": "Australia",
  "searchResult": [
    {
      "airportName": "Sydney Airport",
      "ICAO": "YSSY",
      "IATA": "SYD",
      "city": "Sydney",
      "country": "Australia"
    },
    {
      "airportName": "Canberra Airport",
      "ICAO": "YSCB",
      "IATA": "CBR",
      "city": "Canberra",
      "country": "Australia"
    },
    {
      "airportName": "Brisbane Airport",
      "ICAO": "YBBN",
      "IATA": "BNE",
      "city": "Brisbane",
      "country": "Australia"
    }
  ]
}
```

Source/adaptation: Supplementary practice based on the listed lab/lecture material. It is not an assignment marking scheme.

## Q15 Request and display weather data

Lab supplement · Final review: AJAX/CSS; A4; L11

1. Create a page headed Maya Lee, 2026001. Display latitude and longitude text fields and a Get Weather JSON button.
2. Use the supplied local weather-service documentation. On click, request the coordinates entered by the user using the classroom XMLHttpRequest method. Display request failures with the status number.
3. Display the entered coordinates under User Query. Display Weather information and a bordered table containing Elevation, Time, Interval, Temperature and Generationtime(ms), from the response.
4. Use document CSS: a class selector named lee makes the temperature orange and 50px; an ID selector named mayal makes Weather information purple and 50px.
5. You may assume valid numeric input. Test both supplied coordinate pairs.

### Service documentation

| Item | Required value |
| --- | --- |
| Endpoint | /weather on the local practice server |
| Method | GET |
| Parameters | latitude; longitude; current=temperature_2m |
| Sample query | /weather?latitude=-34.4278&longitude=150.8931&current=temperature_2m |
| Response fields | latitude, longitude, elevation, generationtime_ms; current.time, current.interval, current.temperature_2m |

### Sample response

```text
{"latitude":-34.43,"longitude":150.89,"elevation":32,"generationtime_ms":0.12,"current":{"time":"2026-11-03T09:00","interval":900,"temperature_2m":18.5}}
```

### Test pairs

| Latitude | Longitude |
| --- | --- |
| -34.43 | 150.89 |
| 40.71 | -74.01 |

Source/adaptation: Supplementary practice based on the listed lab/lecture material. It is not an assignment marking scheme.

## Q16 Draw a triangle and its medians

Lab supplement · Final review: canvas; L12 Q1

1. Create a page with six text fields for the x and y coordinates of triangle vertices A, B and C, a canvas of 320 by 200 pixels, and a Draw triangle button. Initially use A(80,20), B(20,160) and C(260,160).
2. When the button is clicked, clear the old drawing and draw the triangle from the input. Use a 3px purple outline and a plum fill.
3. Draw three white median lines at 2px and label A, B and C in black 16px Arial. A median joins a vertex to the midpoint of the opposite side. The midpoint of two points is ((x1+x2)/2, (y1+y2)/2).
4. You may assume valid, non-collinear points inside the canvas. Geometry validation is not required.

Source/adaptation: Supplementary practice based on the listed lab/lecture material. It is not an assignment marking scheme.

## Q17 Match animals by drag and drop

Lab supplement · Final review: dragstart/drop/dragover; L12 Q2/Q3

1. Create DOG and CAT drop areas, each with a counter initially showing 0 and space for added images. Below them, display the supplied cat and dog images.
2. Allow the source images to be dragged. A correct matching drop increases that animal’s counter by one and adds one copy of its picture in the target area. Keep both source images.
3. A wrong match changes nothing. Repeated correct drops add further pictures. Drops on text or a picture inside the target must count for that target area.

Source/adaptation: Supplementary practice based on the listed lab/lecture material. It is not an assignment marking scheme.

## Q18 Add books to an order

Lab supplement · Final review: DOM methods; L13; DOM lecture; A2 dynamic content

1. Create a page with three text fields for a book title, a product code and a quantity. Display an Add to order button and an unordered list.
2. When the user clicks the button, add an item in the format code: title x quantity. Keep all earlier items.
3. Display the total number of books ordered, initially 0. An order of 5 books followed by an order of 2 books must give a total of 7.
4. You may assume valid titles, product codes and positive integer quantities.

### Optional extension

- DOM extension: add Add first, Replace last and Remove last buttons. Use the corresponding DOM node methods and update the total after each action. Empty-list actions do nothing. The separate extension reference is q18.html.

Source/adaptation: Supplementary practice based on the listed lab/lecture material. It is not an assignment marking scheme.

## Q19 Validate JSON and restore the last input

Lab supplement · Final review: local storage and JSON; L14 Q1/Q2

1. Create a page with a textarea and a Validate JSON button. Valid JSON displays JSON is valid in green. Invalid JSON displays Error: and the parser’s message in red.
2. Check JSON syntax only. No particular properties are required. The exact error wording may differ between browsers.
3. Store the raw input in localStorage under csit884-json-draft after each edit, including invalid JSON. Restore it when the page next loads. If there is no saved input, start empty.
4. Editing clears the old validation message. Validation must remain available if storage is unsupported or unavailable.

Source/adaptation: Supplementary practice based on the listed lab/lecture material. It is not an assignment marking scheme.

## Q20 Change a heading’s colour and size

Lab supplement · Final review: CSS with JavaScript; L10; CSS with JS B

1. Create a page with a black, centred, 32px heading University of Wollongong and Green, Orange and Blue buttons. Clicking a button changes the existing heading to that colour using JavaScript.
2. Add a font-size field and an Apply Size button. When clicked, set the heading to the entered valid pixel size using JavaScript.
3. Use document CSS so that moving over the heading doubles its visual size with a 0.3-second transform transition. Moving away restores its original scale. Colour changes do not require a transition.

Source/adaptation: Supplementary practice based on the listed lab/lecture material. It is not an assignment marking scheme.

## Q21 Merged table cells and page links

Classroom supplement · HTML lecture pp. 17–18, 36–37, 45, 58–66; L01 HTML-only task form

1. Create q21.html using HTML only. Add a Go to terms link to the terms section on the same page.
2. Create a bordered table with three logical columns. The first row is a single heading Lab timetable across all columns. The second row has Day, Time and Topic headings.
3. Show Monday / 09:00 / HTML and Monday / 10:00 / CSS in the next two rows. Monday must appear once, covering both rows. Right-align the times and align them to the top using HTML attributes.
4. At the terms section, use a description list: HTML — Page structure; CSS — Page style. Display A, two spaces, B on one line and C on the next, preserving spaces and line breaks.
5. Use the course font element to show Practice only in blue at size 5.

Source/adaptation: Supplementary practice based on the listed lab/lecture material. It is not an assignment marking scheme.

## Q22 CSS spacing and rule selection

Classroom supplement · CSS lecture: borders, lists, links and cascading; L02 CSS table exercise

1. Create q22.html using document CSS. Add a two-cell table with ID demoTable. Use separated borders with 10px between cells. Give the cells 1px solid black borders and 8px padding.
2. Display HTML and CSS in a list with ID topics and square markers. Inside a links class container, add a link to https://example.com/. Set unvisited links blue, visited links purple, hovered links orange and active links red.
3. Use the supplied paragraph and four CSS rules without changing their order. These are ordinary document CSS rules without !important.
4. Explain which rule controls the paragraph colour, and what happens to border-spacing if the table borders are collapsed. This is a classroom explanation exercise.

### Given HTML and CSS

```text
<p id="note" class="info">Check the selector</p>

p {color:green}
.info {color:orange}
#note {color:purple}
.info {color:blue}
```

Source/adaptation: Supplementary practice based on the listed lab/lecture material. It is not an assignment marking scheme.

## Q23 Image swapping and input events

Lab supplement · Week 13: mouseover, focus, blur, change and select; Event lecture pp. 5–19; L03 Q8

1. Create a page with the supplied cat and dog pictures side by side, each 120 by 100 pixels. Whenever the pointer moves onto either picture, swap the pictures while keeping the image elements in place. Keep the alternative text correct.
2. Display a code field. Focus makes its background lightyellow; blur restores white. A change event converts its value to uppercase. Selecting text displays Text selected beside it.
3. Display Press here. Pressing the mouse on it displays Release me; releasing displays Thank you; leaving restores Press here.
4. Display a heading initially Animal practice. A Rename button asks for a new label using prompt. Any entered string replaces the heading; Cancel keeps it. A Clear label button uses confirm before clearing the heading.

### Optional extension

- You may first practise the image swap alone, then add the independent input/mouse/dialog exercises.

Source/adaptation: Supplementary practice based on the listed lab/lecture material. It is not an assignment marking scheme.

## Q24 Arrays, strings and dates

Classroom supplement · JSbasics lecture: String pp. 61–62, Date pp. 63–70, Array pp. 71–75; L06 input/output task form

1. Part A: start with subject codes CSIT884 and CSIT882. Display an input and Add, Remove and Show buttons. You may assume valid subject codes.
2. Add removes spaces at both ends, changes the code to uppercase and adds it to the end. Duplicates are allowed. Remove applies the same conversion and removes only the first matching code; a missing code changes nothing.
3. Show displays all codes in order, the item count and the first four characters of the converted input.
4. Part B: use the local date 11 November 2026 at 09:00:00. Construct and display its year, month, day, time, weekday and next calendar date using Date methods. Keep the original date unchanged. Zero-padding is not required. Parts A and B may share one page.

Source/adaptation: Supplementary practice based on the listed lab/lecture material. It is not an assignment marking scheme.

## Q25 Two ways to validate a form

Classroom supplement · FormValidation lecture pp. 4–6, 8–22; Week 13: onsubmit return; L05 task form

1. Create two separate GET forms using /search. Part A uses built-in HTML validation: email is required and must have email format; quantity is a required integer from 1 to 5; code is required and must be exactly three uppercase ASCII letters. Use parameter names email, quantity and code.
2. Part B uses JavaScript validation only, with text fields email and email2. Both must contain text after trimming, and the trimmed strings must match exactly. Do not check email format in this part.
3. On submission, clear old messages. Show separate red messages Email is required, Confirmation is required or Emails do not match where appropriate. Invalid input prevents submission. Valid input submits the trimmed values.
4. Each form has its own Submit and Reset buttons. Reset Part B also removes its custom messages.

Source/adaptation: Supplementary practice based on the listed lab/lecture material. It is not an assignment marking scheme.

## Q26 An external DTD and an XSD

Classroom supplement · XMLDTD lecture pp. 25–38; XSD lecture p. 11; Week 13: attributes require a complex type

1. Use the supplied catalog XML to write q26.xml and a corresponding external q26.dtd. A catalog contains one or more books; each book contains title then price. The code attribute on book and currency attribute on price are required. DTD element content is text.
2. Write q26.xsd for the same structure. title, code and currency are strings; the price text is decimal. Allow one or more books and require both attributes.
3. Create q26-schema.xml with the same data, no DOCTYPE, and a correct link to this no-target-namespace schema.
4. As a classroom recall check, explain why the XSD can enforce a decimal price while the DTD text declaration cannot.

### Catalog data

```xml
<?xml version="1.0"?>
<catalog><book code="B01"><title>Web basics</title><price currency="AUD">39.50</price></book></catalog>
```

Source/adaptation: Supplementary practice based on the listed lab/lecture material. It is not an assignment marking scheme.

## Q27 Select DOM element groups

Classroom supplement · Week 13: getElementsByTagName/getElementsByClassName; DOM lecture p. 6

1. Create a page with three paragraphs: HTML and CSS have class topic; Notes has no class. Display Count paragraphs, Colour topics and Add topic buttons, plus a span for the count.
2. Count paragraphs displays the number of p elements using getElementsByTagName. Colour topics turns every topic element orange using getElementsByClassName and a loop. These are required methods for this API drill.
3. Add topic creates and appends another paragraph with class topic and text JavaScript using createElement and createTextNode. Later count and colour actions must include new paragraphs.

Source/adaptation: Supplementary practice based on the listed lab/lecture material. It is not an assignment marking scheme.

## Q28 Save and restore a task list

Classroom supplement · Week 13: local storage; WebStorage lecture pp. 5–31, task-list example

1. Create a page with a task field, an urgency list offering High, Medium and Low (default), and an Add task button. Keep an array of task objects containing a numeric ID, task text and urgency.
2. Add displays another task in an unordered list and saves the complete array under localStorage key csit884-tasks. Each task has a Delete button that removes that task and saves the updated list.
3. When the page next loads, restore and display the saved tasks. A first visit starts with an empty list. A Clear tasks button empties the list and removes only this storage key.
4. Display the current array as formatted JSON in a read-only textarea. You may assume valid non-empty input and working storage.
5. For classroom recall, explain how sessionStorage changes persistence when the tab closes.

### Optional extension

- Optional robustness: ensure newly generated IDs cannot collide when two tasks are added in the same millisecond. This is not part of the basic task.

Source/adaptation: Supplementary practice based on the listed lab/lecture material. It is not an assignment marking scheme.

## Q29 Check an arithmetic answer

Lab supplement · L06 Q2: addition, subtraction and multiplication; JS2 input/output; Week 13: value and functions

1. Create a page with three text fields, an operation list and a Check button. Display the first number, operation, second number, =, and the proposed answer in that order.
2. The operation choices are +, - and x, with values add, subtract and multiply. You may assume valid integers and results within normal JavaScript number precision.
3. When Check is clicked, display Correct! if the proposed answer equals the result of the chosen operation. Otherwise display Incorrect, please try again. Each check replaces the old result.

Source/adaptation: Supplementary practice based on the listed lab/lecture material. It is not an assignment marking scheme.
