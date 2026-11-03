# CSIT884 Practice Bank: 20 Core Questions and 9 Coverage Drills

Exam: 11 November 2026, 09:00-12:00. Questions and answers are separate.
## Selection and scope

- These are practice questions based on the supplied materials. They are not leaked exam questions or an official prediction paper.
- Start with eight questions: the lecturer stressed these skills, and they appear repeatedly in assignments or labs. Then complete the other twelve questions, which have direct lab or classroom examples and were named in the review.
- The order is a study judgement, not a statistical probability. Assignment marks do not tell us the final-exam topic weights. The lecturer said any taught topic may appear.
- Q21–Q29 are coverage drills added after a source audit. They cover missing task forms and lecture details. They do not change the core study order. Less repeated facts such as XHTML, index.html and variable scope remain recall checks in the notes; they are not officially excluded from the exam.
- Each question gives its practice identity, data, service and constraints. Ambiguous original instructions have been made clear.
- Each 10-mark checklist is for practice self-assessment. It is not the official marking scheme.

## Coverage drills

After the core rounds, use Q21–Q29 to check merged cells, CSS spacing/cascade, events, Array/String/Date, validation, DTD/XSD, DOM group selection and object-array storage. Q23 and Q27 directly cover additional APIs named in Week 13. The other drills add taught implementation details, not an exam probability.

## Rules for programming questions

1. Add short JavaScript comments. Use meaningful names and complete every stated requirement.
2. Follow the required HTML-only, inline/document/external CSS, class or ID method.
3. Use the classroom XMLHttpRequest method for AJAX. Do not replace it with fetch or another library.
4. Do not add validation that is not requested. Include each error or failure case that is requested.
5. Your code does not need to match the reference word for word. It must meet the required behaviour, data, methods and structure. Test it in a browser.

## How to use this set

- Open questions.html. Each question has an answer box, checks and a self-assessment checklist. Drafts are saved in this browser and can also be exported.
- Full reference answers are in the separate answers.html and reference-answers.md files. Runnable source files are in answers/. The question page does not contain reference code.
- The answer box records text; it does not run your code. Save your own HTML files in my-work/ and open them through the local practice server.
- On macOS, double-click Start-practice.command. You can also run `python3 serve.py` from this folder, then open http://127.0.0.1:8765/questions.html. Keep the server window open while practising.
- Q07, Q08, Q14, Q15 and Q25 need the local server to test requests. Other HTML examples can be opened directly. Use the same server address when testing Q19 storage.
- The fixed practice identity is Maya Lee / 2026001 / mayal@uowmail.edu.au. It is sample data, not your real identity.

## Practice order

First round: Q01, Q02, Q03, Q05, Q07, Q10, Q14, Q15.

Second round: Q04, Q06, Q08, Q09, Q11, Q12, Q13, Q16, Q17, Q18, Q19, Q20.

The second round still covers topics named by the lecturer, including XML/DTD/XSD, Canvas, drag and drop, DOM and storage. Complete it even if a topic did not appear in a particular assignment.

## Question index

| Question | Topic | Order | Suggested minutes |
| --- | --- | --- | --- |
| Q01 | HTML only: a competition page | First round | 30 |
| Q02 | Required CSS methods and selectors | First round | 30 |
| Q03 | Click events, counters and added content | First round | 20 |
| Q04 | value, src and the Enter key | Second round | 25 |
| Q05 | Animation: one timer, reset and restart | First round | 30 |
| Q06 | Random slideshow | Second round | 20 |
| Q07 | Web form: follow the service documentation | First round | 25 |
| Q08 | Form validation: a random addition question | Second round | 30 |
| Q09 | JSON: correct the structure and data types | Second round | 15 |
| Q10 | JSON: convert between an object and form fields | First round | 25 |
| Q11 | XML: represent a complete student record | Second round | 20 |
| Q12 | DTD: define the XML structure | Second round | 20 |
| Q13 | XSD: nested complex types and restrictions | Second round | 35 |
| Q14 | AJAX: display an object and an array of objects | First round | 40 |
| Q15 | AJAX: query parameters, nested data and required CSS | First round | 40 |
| Q16 | Canvas: a triangle and its three medians | Second round | 35 |
| Q17 | Drag and drop: matching, counting and added images | Second round | 35 |
| Q18 | DOM: create, insert, replace, remove and total | Second round | 40 |
| Q19 | JSON validation and localStorage | Second round | 25 |
| Q20 | JavaScript styles and a hover transform | Second round | 20 |
| Q21 | HTML: merged cells and page links | Coverage drill | 20 |
| Q22 | CSS: spacing, lists and conflicting rules | Coverage drill | 20 |
| Q23 | Events: swap images and handle text input | Coverage drill | 25 |
| Q24 | JavaScript: arrays, strings and dates | Coverage drill | 25 |
| Q25 | Form validation: built-in rules and JavaScript rules | Coverage drill | 25 |
| Q26 | XML schemas: external DTD and text with an attribute | Coverage drill | 25 |
| Q27 | DOM: select groups by tag and class | Coverage drill | 15 |
| Q28 | Storage: save, restore and delete an object array | Coverage drill | 30 |
| Q29 | Calculator: read an operation and check an answer | Coverage drill | 15 |

## Q01 HTML only: a competition page

Use HTML only to build a competition page.

Suggested time: 30 minutes | Sources: Final review: HTML; A1 Q1/Q2; A2 Q1; L01

### Requirements

1. Save your page as q01.html. Use HTML only. Do not use a style attribute, a style element or an external CSS file. Set the page title to Coding Competition. Use this practice identity: Maya Lee / 2026001 / mayal@uowmail.edu.au.

2. Use h1 to display Coding Competition. Use h2 to display the name, student number and email.

3. Create a table with a visible border. Use the column headings Rank, Team and Members. Add two data rows: 1st / River and 2nd / Mountain.

4. In the River cell, add the link River Team to https://river.example/. Open it in a new tab. On the next line, display ../assets/team1.svg at 120 pixels wide and 80 pixels high. Do the same for Mountain, using https://mountain.example/ and ../assets/team2.svg.

5. Use an unordered list for each team. River has Alex and Bo. Mountain has Chen and Dee. Make Alex and Chen bold. After each leader name, add (team leader) in italic.

6. Below the table, add an ordered list: Register, Practice, Compete. Display FROG and EMU with exactly five non-breaking spaces between them. Add a smiley face using the given decimal character entity number 128516.

### Self-check

- The table has three rows and three columns, including the header row. Both images are 120 by 80 pixels. Both links have target="_blank".
- There is no CSS. Use ul and ol in the correct places. The browser must display all five spaces.

### Practice self-assessment: 10 marks

- Page structure and practice identity: 2 marks
- Table and both list types: 3 marks
- Images and links in new tabs: 3 marks
- Bold, italic, spaces and character entity: 2 marks

## Q02 Required CSS methods and selectors

Use the required CSS method and selector.

Suggested time: 30 minutes | Sources: Final review: CSS; A2 Q2; A4 selector requirements; L02

### Requirements

1. Create q02.html. Use h1 to display City Coding Teams, with id="heading". Use document CSS and an ID selector to set purple text and a lightgray background.

2. Display Maya Lee at 50px using inline CSS. Display 2026001 in blue using inline CSS.

3. Create two p elements. Display Australia in one and mayal@uowmail.edu.au in the other. Give both class="info". Use document CSS and a class selector to set a 2px dashed orange border and 10px padding.

4. Create a table with id="teamTable". Use the headings Rank and Members. Add one data row: 1 and an unordered list containing Alex and Bo. Give the list class="members".

5. Use descendant selectors to select all th and td elements inside teamTable. Set a 1px solid black border, 12px padding and vertical-align: top. Set border-collapse: collapse on the table. Give the Rank cells class="rank" and right-align them.

6. Use a child selector to make the direct li children of members green.

7. Also create q02-external.html and q02.css. Move only the document CSS to q02.css. Keep the inline CSS. Use a link element to load the CSS file. Both pages must look the same.

### Self-check

- Both HTML pages have the same appearance.
- Use > for direct children in the green list rule. Do not replace it with a space.
- Use . for a class and # for an ID. Do not put style tags inside the CSS file.

### Practice self-assessment: 10 marks

- Required inline/document CSS and selectors: 4 marks
- Table, descendant and child selectors: 3 marks
- Conversion to external CSS: 3 marks

## Q03 Click events, counters and added content

Handle clicks and keep the page state.

Suggested time: 20 minutes | Sources: Final review: JavaScript and onclick; A2 Q3; L03 Q1/Q5/Q6

### Requirements

1. Display the clickable name Maya Lee. When clicked, show an alert containing Hi and write Maya Lee to the console.

2. Display a button labelled 2026001. Below it, display a counter starting at 0. Increase it by 1 each time the button is clicked.

3. Display the clickable email mayal@uowmail.edu.au. Each click adds one button labelled CSIT884 below the email. Keep all earlier buttons.

4. Add short JavaScript comments that explain the purpose of the main steps.

### Self-check

- After three counter-button clicks, the counter shows 3.
- After two email clicks, there are two new buttons. The counter does not change.

### Practice self-assessment: 10 marks

- Alert and console output: 2 marks
- Counter state and display: 3 marks
- Adding buttons without replacing earlier ones: 3 marks
- Structure, names and comments: 2 marks

## Q04 value, src and the Enter key

Read a command and update the page.

Suggested time: 25 minutes | Sources: Final review: value, src and events; L03 Q2/Q3/Q7

### Requirements

1. Display Cat and Dog buttons, a read-only status text field, an img element and a command text field.

2. When Cat is clicked, set the status field to Cat selected and show ../assets/cat.svg. The Dog button shows Dog selected and ../assets/dog.svg.

3. In the command field, pressing Enter executes display cat or display dog. Use the same update function as the buttons. For any other command, show an alert containing Invalid command. Keep the previous image and status.

4. Execute a command only on Enter, not on other keys. You do not need to ignore letter case or remove spaces.

### Self-check

- Both the buttons and valid commands change the image and status.
- display bird followed by Enter shows an alert and keeps the previous image.

### Practice self-assessment: 10 marks

- Button behaviour: 3 marks
- Correct use of value and src: 3 marks
- Enter key and invalid commands: 3 marks
- Comments and function reuse: 1 marks

## Q05 Animation: one timer, reset and restart

Start, stop and reset an equation animation.

Suggested time: 30 minutes | Sources: Final review: setInterval/clearInterval; A3 Q1; L06 Q4

### Requirements

1. Use the fixed practice student number 2026001. Initially display 1 + 2026001 = 2026002. Use inline CSS to make it red and 60px.

2. Display two clickable texts: Start Animation in orange and Stop Animation in purple.

3. After Start is clicked, increase the first number by 2 every 1000ms: 3, 5, 7 and so on. Update the sum on the right. The first change happens after one second.

4. Clicking Start again while the animation is running must not create another timer or reset the current sequence.

5. Stop must stop the animation and restore the original equation. After another Start click, the first change is again to 3 after one second.

### Self-check

- After Start, the first number changes to 3 and then 5 at one-second intervals.
- Clicking Start several times quickly still increases the number by only 2 each second.
- Stop immediately restores 1. The equation then stays unchanged until Start is clicked.

### Practice self-assessment: 10 marks

- Initial page and required styles: 2 marks
- Interval and equation updates: 3 marks
- Only one running timer: 2 marks
- Stop, reset and restart: 3 marks

## Q06 Random slideshow

Show one random image every 1.2 seconds.

Suggested time: 20 minutes | Sources: Final review: random numbers and animation; L06 Q5; Animation B slideshow

### Requirements

1. Create an array with six image paths: ../assets/team1.svg through ../assets/team6.svg.

2. After Start Slideshow is clicked, show one randomly selected image every 1200ms. The index must be from 0 to 5. The same image may appear twice in a row. Show the first image after 1.2 seconds.

3. Stop Slideshow stops the updates and keeps the last image. Start begins random updates again.

4. There must be only one timer, even after several Start clicks.

### Self-check

- Every displayed path is one of the six array items.
- After Stop, the image stays visible and does not change.

### Practice self-assessment: 10 marks

- Array and correct random index range: 4 marks
- Image update every 1200ms: 2 marks
- One timer, stopping and restarting: 3 marks
- Comments: 1 marks

## Q07 Web form: follow the service documentation

Build a form that matches the service documentation.

Suggested time: 25 minutes | Sources: Final review: web-form marking requirements; A3 Q2; L04

### Requirements

1. The practice service is /search on the current website. It accepts GET requests. The included local server displays the received parameters.

2. The parameters are author, year, sub and format. Use text fields for author and year, checkboxes for sub, and radio buttons for format.

3. sub accepts multiple values: mth for Mathematics, cs for Computer Science, and bio for Biology.

4. format accepts one value: p for Print or e for Electronic. Put both radio buttons in the same group. Select Print by default.

5. Add a Search submit button and a Clear reset button. Do not add validation.

6. For author smith, year 2024, subjects Mathematics and Biology, and format Electronic, submit author=smith&year=2024&sub=mth&sub=bio&format=e.

### Self-check

- Each name matches the documentation. The submitted value is the service value, not the displayed label.
- Clear empties the text fields, clears the subject choices and restores Print.
- After starting the local server, submit the form and check the received parameters. Parameter order does not change their meaning.

### Practice self-assessment: 10 marks

- Correct action and method: 2 marks
- Text fields, checkboxes and parameter names: 3 marks
- Radio group, default choice and values: 3 marks
- Submit and reset: 2 marks

## Q08 Form validation: a random addition question

Validate the answer before submitting the form.

Suggested time: 30 minutes | Sources: Final review: form validation and random numbers; L05; Form Validation B

### Requirements

1. Extend the complete Q07 form. On page load, generate and store two random integers from 1 to 10. Display their addition question and an answer field.

2. Call a validation function from onsubmit and use its return value. Do not give the answer field a name. Do not submit the maths question as a service parameter.

3. For an empty or wrong answer, show Wrong! in red and stop submission. For a correct answer, clear the error message and submit normally.

4. Check the question currently shown. Do not generate new numbers during validation. Clear resets the form, generates a new question and clears Wrong!.

5. Validate only the maths answer. Do not add extra rules such as requiring author or year.

### Self-check

- A wrong answer keeps the current page open and displays Wrong!.
- After correcting the answer, the submitted parameters have only the four names defined in Q07.
- After Clear, the answer field and error message are empty. Both new numbers are within 1 to 10.

### Practice self-assessment: 10 marks

- Random range and stored question state: 3 marks
- onsubmit and false/true return values: 3 marks
- Error display and clearing: 2 marks
- Unchanged service parameters and reset: 2 marks

## Q09 JSON: correct the structure and data types

Correct the JSON without losing any data.

Suggested time: 15 minutes | Sources: Final review: JSON syntax; L09 Q1/Q2

### Requirements

1. Correct the JSON below and save it as q09.json. Name the subject array subjectList. Keep all data. age must be a number and fullTime must be a boolean.

2. Incorrect JSON:
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

### Self-check

- After JSON.parse, subjectList.length is 2.
- age has type number and fullTime has type boolean.

### Practice self-assessment: 10 marks

- Property names and object structure: 3 marks
- Array, brackets and commas: 3 marks
- Number and boolean types: 2 marks
- All data kept: 2 marks

## Q10 JSON: convert between an object and form fields

Convert form data to JSON and read it back.

Suggested time: 25 minutes | Sources: Final review: stringify/parse; L09 Q3/Q4

### Requirements

1. Display three text fields for code, title and credit point, a Core subject checkbox, and a textarea.

2. View JSON constructs an object with code, title, cp and coreFlag. cp must be a number and coreFlag a boolean. Use JSON.stringify(..., null, 2) to display it in the textarea.

3. Read JSON uses JSON.parse on the textarea content. Fill the three text fields and checkbox from the resulting object.

4. Test with CSIT884 / Web Development / 6 / true. Assume all input is valid. Error handling is not required.

### Self-check

- In the JSON, 6 has no quotes and coreFlag is true or false.
- Change the textarea data to cp=4 and coreFlag=false. Read JSON must update both controls.

### Practice self-assessment: 10 marks

- Reading input and using correct types: 3 marks
- stringify and indentation: 2 marks
- Parsing and restoring form controls: 3 marks
- checked, value and comments: 2 marks

## Q11 XML: represent a complete student record

Represent the student record as XML.

Suggested time: 20 minutes | Sources: Final review: XML data and root element; L07 Q1/Q3

### Requirements

1. Write q11.xml. Put the XML declaration at the start of the first line. Write XML only; do not add a DTD.

2. Use student as the root, with the required attribute number="2026001". Its child elements, in order, are firstName containing Maya, lastName containing Lee, and subjects.

3. subjects contains two subject elements. Each has a code attribute and these child elements in order: creditPoint, mark, grade.

4. The records are CSIT884 / 6 / 84 / A and CSIT882 / 6 / 72 / B. Keep all data.

5. After your XML, explain separately why two student elements at the top level break the single-root rule, and why number=2026001 needs quotes. Do not put these explanations inside the XML file.

### Self-check

- There is exactly one root. Both subject elements are inside subjects.
- Letter case matches. Attribute values have quotes. Do not add table-presentation tags such as th or td.

### Practice self-assessment: 10 marks

- Declaration, single root and syntax: 3 marks
- Required structure and attributes: 3 marks
- All record data: 2 marks
- Explanation of both errors: 2 marks

## Q12 DTD: define the XML structure

Write an internal DTD that matches the XML.

Suggested time: 20 minutes | Sources: Final review: XML/DTD; L07 Q4; XMLDTD lecture

### Requirements

1. Copy Q11 to q12.xml. Add an internal DTD between the XML declaration and the student element.

2. The children of student must be firstName, lastName and subjects, in that order. subjects must contain one or more subject elements.

3. The children of subject must be creditPoint, mark and grade, in that order. Use #PCDATA for the text-only elements.

4. student.number and subject.code must both be required CDATA attributes.

5. In a separate sentence, explain the allowed numbers of occurrences for subject+, subject* and subject?.

### Self-check

- The original XML passes DTD validation.
- Removing number or code must fail validation. Empty subjects must also fail.

### Practice self-assessment: 10 marks

- DOCTYPE and all element declarations: 4 marks
- Order and subject+: 2 marks
- Both required attributes: 3 marks
- Occurrence-symbol explanation: 1 marks

## Q13 XSD: nested complex types and restrictions

Define the structure and restrictions with XSD.

Suggested time: 35 minutes | Sources: Final review: simple/complex types; L08 Q1/Q2/Q3

### Requirements

1. Write q13.xsd for this XML:
```xml
<?xml version="1.0"?>
<resultBatch campus="Sydney">
  <result ref="R001"><contestantId>00025142</contestantId><examId>WEB01</examId><score>156</score><band>C</band></result>
  <result ref="R002"><contestantId>00025143</contestantId><examId>WEB01</examId><score>280</score><band>A</band></result>
</resultBatch>
```

2. resultBatch contains one or more result elements, with no upper limit. campus and ref are required string attributes.

3. Each result has exactly one of each child element, in the shown order. contestantId and examId are strings. Keep leading zeros in identifiers.

4. score is an integer from 0 to 300, including both limits. band can only be A, B, C or D.

5. Use xsd:schema, complexType, sequence and simpleType/restriction. Explain separately why resultBatch and result are complex types.

### Self-check

- The given XML is valid. Scores 0 and 300 are valid.
- Reject scores 301 and 1.5, band E, a missing ref, or a resultBatch with no result.

### Practice self-assessment: 10 marks

- Schema and nested structure: 3 marks
- Occurrence limits and order: 2 marks
- Score and band restrictions: 3 marks
- Attributes, types and explanation: 2 marks

## Q14 AJAX: display an object and an array of objects

Request JSON and display the response.

Suggested time: 40 minutes | Sources: Final review: XHR, parse and display; L11 Q1/Q2; A4 request/display workflow

### Requirements

1. Start the local server. The data files are ../data/faculty.json and ../data/airports.json. Their full contents are included in the data folder.

2. Add Get Faculty Details and Search Airport buttons. Each sends an XMLHttpRequest with onreadystatechange, asynchronous GET and send. Do not use fetch, Axios or jQuery.

3. When readyState is 4, check status==200. Only then read responseText and call JSON.parse. On failure, display Request failed: followed by the status in the correct output area.

4. For faculty, read the object fields and display Name, Abbreviation, Email and Website.

5. For airports, display Search Query and a bordered table with Airport, ICAO, IATA and Location columns. Add one row per record. Location is city + ", " + country. Use a loop; do not hard-code the three airports.

6. A new click replaces the relevant result area. Do not add a second full table below the first.

### Self-check

- The current airport table has a header and three records. It must still work if the number of data records changes.
- Requesting a JSON file that does not exist displays the failure message.
- The code checks both response completion and request success.

### Practice self-assessment: 10 marks

- Classroom XHR workflow and status handling: 4 marks
- JSON.parse and object fields: 2 marks
- Array loop and complete table: 3 marks
- Repeated display and comments: 1 marks

## Q15 AJAX: query parameters, nested data and required CSS

Build a weather request from user input.

Suggested time: 40 minutes | Sources: Final review: AJAX/CSS; A4; L11

### Requirements

1. Use the practice identity Maya Lee / 2026001 / mayal@uowmail.edu.au. Display a heading with the name and student number. Add latitude and longitude text fields and a Get Weather JSON button.

2. The practice endpoint is /weather on the current website. Use GET parameters latitude, longitude and current=temperature_2m. The package includes this local endpoint. Do not call a live external service. Build the URL from user input, not a fixed location.

3. Use the classroom XMLHttpRequest workflow. Handle status==200 and failure. The response has this structure:
```json
{"latitude":-34.43,"longitude":150.89,"elevation":32,"generationtime_ms":0.12,"current":{"time":"2026-11-03T09:00","interval":900,"temperature_2m":18.5}}
```

4. Display the input coordinates under User Query. Under Weather information, use a table to display Elevation, Time, Interval, Temperature and Generationtime(ms). Read every weather value from the response.

5. Use document CSS and a class selector for the temperature: the class name must be lee, the colour orange, and the font size 50px.

6. Use document CSS and an ID selector for Weather information: the ID must be mayal, the colour purple, and the font size 50px. Do not use inline CSS for these two styles.

7. Assume valid numeric input. Test at least (-34.43,150.89) and (40.71,-74.01). The fixed test responses are in data/weather-cases.json.

### Self-check

- The temperatures are 18.5 for the first test and 14.7 for the second. Both the request and result change when the input changes.
- Read current.time and current.temperature_2m from the nested current object, not from the top level.

### Practice self-assessment: 10 marks

- Input-based URL and classroom XHR: 4 marks
- Nested fields and complete display: 3 marks
- Required document CSS class and ID: 2 marks
- Failure handling and comments: 1 marks

## Q16 Canvas: a triangle and its three medians

Draw a triangle and its three medians.

Suggested time: 35 minutes | Sources: Final review: canvas; L12 Q1

### Requirements

1. Display six text fields for the x/y coordinates of A, B and C. Use default points (80,20), (20,160) and (260,160). Set the canvas width to 320 and height to 200.

2. Draw triangle clears the old canvas and draws a closed triangle from the input. Use a 3px purple outline and a plum fill.

3. Draw three white median lines, each 2px wide. A median joins a vertex to the midpoint of the opposite side. The midpoint is ((x1+x2)/2,(y1+y2)/2).

4. Label A, B and C in black, using 16px Arial. Assume valid, non-collinear points (not on one straight line) inside the canvas. Do not add geometry validation.

### Self-check

- Change one coordinate and draw again. No old triangle remains.
- Each median ends at the midpoint of the opposite side, not at another vertex.

### Practice self-assessment: 10 marks

- Numeric input and 2D context: 2 marks
- Clear, closed path, stroke and fill: 3 marks
- Three midpoints and median lines: 3 marks
- Labels and required styles: 2 marks

## Q17 Drag and drop: matching, counting and added images

Update the matching target after a drop.

Suggested time: 35 minutes | Sources: Final review: dragstart/drop/dragover; L12 Q2/Q3

### Requirements

1. Create DOG and CAT drop areas. Each has a counter starting at 0 and an area for added images. Below them, display source images ../assets/cat.svg and ../assets/dog.svg.

2. Set draggable=true on each source image. On dragstart, store the animal identifier in dataTransfer.

3. On dragover, call preventDefault to allow a drop.

4. Only a matching drop increases that animal counter by 1 and adds one image to that target. Keep both source images.

5. A wrong match changes nothing. Repeated correct drops add more images. A drop on text or an image inside a target must still be handled as a drop on that area.

### Self-check

- Drop dog onto DOG twice and cat onto CAT once. The counters and added-image counts are 2 and 1.
- Dropping cat onto DOG changes neither counter.

### Practice self-assessment: 10 marks

- Three events and dataTransfer: 4 marks
- Correct matching rule: 2 marks
- Counters and image additions: 3 marks
- Keep source images and handle child targets: 1 marks

## Q18 DOM: create, insert, replace, remove and total

Maintain a book order with DOM methods.

Suggested time: 40 minutes | Sources: Final review: DOM methods; L13; DOM lecture; A2 dynamic content

### Requirements

1. Display text fields for title, product code and quantity, an empty ul, and Total 0. Assume valid title/code and a positive integer quantity.

2. Add last creates a li containing code: title x quantity and appends it to the list. Add first creates the same type of item and inserts it before the first item.

3. Use createElement/createTextNode to create the item. Use appendChild and insertBefore for the two insertions. Store the quantity on the li with setAttribute("data-quantity",...).

4. Replace last creates an item from the current input and uses replaceChild on the last item. Remove last uses removeChild. If the list is empty, these two buttons do nothing.

5. Total is the sum of all quantities. On replacement or removal, read the old quantity with getAttribute. Do not just count li elements.

### Self-check

- Add last: Book A/A1/5, then Book B/B1/2. Total is 7.
- Add first: Book C/C1/3. The order is C/A/B and Total is 10.
- Replace last with Book D/D1/4. Total is 12. Remove last. Total is then 8.

### Practice self-assessment: 10 marks

- Element/text creation and attributes: 3 marks
- appendChild and insertBefore: 2 marks
- replaceChild and removeChild: 2 marks
- Total updates and empty-list behaviour: 3 marks

## Q19 JSON validation and localStorage

Validate JSON and restore the previous input.

Suggested time: 25 minutes | Sources: Final review: local storage and JSON; L14 Q1/Q2

### Requirements

1. Display a textarea for raw JSON text and a Validate JSON button. Valid JSON shows JSON is valid in green. Invalid JSON shows Error: and the parsing error message in red.

2. Use JSON.parse and try/catch. Check JSON syntax only. Do not require a particular set of properties.

3. After each edit, store the raw text under localStorage key csit884-json-draft, including invalid JSON text. Clear the old validation message when the user edits.

4. On page load, use getItem to restore the textarea. If there is no saved text, leave it empty. Do not stringify the draft again and add escaped quotes.

5. Use typeof(Storage) to check support. JSON validation must still work if storage is not supported.

### Self-check

- {"code":"CSIT884","cp":6} is valid. {code:"CSIT884"} is invalid.
- Enter invalid text and reload. The exact text returns. Correct it and validate again; the message becomes green.
- The exact error wording can differ between browsers. Do not require one fixed character position.

### Practice self-assessment: 10 marks

- parse and try/catch: 3 marks
- Result, colour and clearing old messages: 2 marks
- Raw-text saving and onload restoration: 4 marks
- Storage support check: 1 marks

## Q20 JavaScript styles and a hover transform

Change styles and animate a hover effect.

Suggested time: 20 minutes | Sources: Final review: CSS with JavaScript; L10; CSS with JS B

### Requirements

1. Use h1 to display University of Wollongong. Initially it is black, centred and 32px. Add Green, Orange and Blue buttons.

2. Use JavaScript to change the existing heading through style.color. Do not rebuild the whole h1 element.

3. Add a font-size text field and an Apply Size button. Read a valid number and use style.fontSize to apply it in pixels.

4. Use document CSS for a 0.3s transform transition on the heading. On hover, use scale(2). When the pointer leaves, restore the original scale.

5. Apply the transition only to transform. Colour changes do not need a transition.

### Self-check

- Orange makes the text orange. Entering 40 and clicking Apply Size sets 40px.
- After the hover transition, the computed transform has a scale of 2. Leaving restores it. Hover does not change the font-size input value.

### Practice self-assessment: 10 marks

- Initial page and styles: 2 marks
- JavaScript color and fontSize: 4 marks
- Hover transform and transition: 3 marks
- Functions and comments: 1 marks

## Q21 HTML: merged cells and page links

Complete this coverage drill after the two core rounds.

Suggested time: 20 minutes | Sources: HTML lecture pp. 17–18, 36–37, 45, 58–66; L01 HTML-only task form

### Requirements

1. Create q21.html using HTML only. Do not use CSS. Add a link labelled Go to terms that points to an element with id="terms" on the same page.

2. Create a table with a visible border and three logical columns. Its first row is one th cell reading Lab timetable and spanning all three columns. Its second row contains the headings Day, Time and Topic.

3. The third row is Monday / 09:00 / HTML. The fourth row is [the same Monday cell] / 10:00 / CSS. Use rowspan for Monday, so it appears once across these two rows. Right-align both time cells and align them to the top using HTML attributes.

4. At terms, create a description list: HTML means Page structure; CSS means Page style. Use dl, dt and dd. Add a pre element showing two lines, A then two spaces then B on the first line, and C on the second line.

5. Use the course font element to display Practice only in blue with size="5". This exercise uses the legacy HTML attributes taught in the course. In CSS questions, follow the required CSS method instead.

### Self-check

- The first cell has colspan="3". Monday has rowspan="2". The table has four tr elements.
- Go to terms changes the page fragment to #terms. The two spaces in pre remain visible.

### Practice self-assessment: 10 marks

- Table structure and merged cells: 4 marks
- HTML alignment and font attributes: 2 marks
- Page link and description list: 2 marks
- Preformatted text and no CSS: 2 marks

## Q22 CSS: spacing, lists and conflicting rules

Complete this coverage drill after the two core rounds.

Suggested time: 20 minutes | Sources: CSS lecture: borders, lists, links and cascading; L02 CSS table exercise

### Requirements

1. Create q22.html with document CSS. Add a two-cell table with id="demoTable". Set border-collapse: separate and border-spacing: 10px on the table; set 1px solid black borders and 8px padding on its cells.

2. Add ul id="topics" containing HTML and CSS. Make its markers square using list-style-type. Add a link to https://example.com/ inside a container with class="links". Set unvisited links blue, visited links purple, hovered links orange, and active links red. Use the order link, visited, hover, active.

3. Add <p id="note" class="info">Check the selector</p>. In this order, write p {color:green}, .info {color:orange}, #note {color:purple}, then .info {color:blue}. All rules are ordinary document CSS without !important.

4. Below the paragraph, explain in English which rule controls its colour and why. Also explain what border-spacing would do if border-collapse changed to collapse.

### Self-check

- The paragraph is purple: the ID selector has higher specificity than the class and type selectors in these rules.
- The table has separated borders. With collapse, border-spacing has no effect; padding still adds space inside cells.

### Practice self-assessment: 10 marks

- Separated borders, spacing and padding: 3 marks
- List and link pseudo-classes: 3 marks
- Required conflicting rules: 2 marks
- Correct explanations: 2 marks

## Q23 Events: swap images and handle text input

Complete this coverage drill after the two core rounds.

Suggested time: 25 minutes | Sources: Week 13: mouseover, focus, blur, change and select; Event lecture pp. 5–19; L03 Q8

### Requirements

1. Create q23.html. Display ../assets/cat.svg and ../assets/dog.svg side by side at 120 by 100 pixels. Each mouseover on either image swaps the two src values. Keep the image elements in place. Also update each alt value to match its image.

2. Add a code text field. Focus gives it a lightyellow background; blur restores white. A change event converts its text to uppercase. Selecting text in it displays Text selected in a separate message span.

3. Add a span labelled Press here. Mousedown changes its text to Release me. Mouseup changes it to Thank you. Mouseout restores Press here.

4. Add a Rename button. On click, use prompt to ask for a label. Cancel keeps the current heading. Any entered string, including an empty one, replaces the heading text.

5. Add a Clear label button. Use confirm before clearing the heading. Cancel keeps it unchanged. Add short comments.

### Self-check

- Moving onto the first image swaps cat/dog; leaving and entering again swaps them back.
- Type ab12, then leave the field: it becomes AB12. Selecting text shows the message.
- Prompt Cancel is null. It must not display the word null or be treated as an empty string.

### Practice self-assessment: 10 marks

- Image swap and matching alt text: 3 marks
- Focus, blur, change and select: 3 marks
- Mouse press/release/out: 1 marks
- Prompt, confirm and cancellation: 3 marks

## Q24 JavaScript: arrays, strings and dates

Complete this coverage drill after the two core rounds.

Suggested time: 25 minutes | Sources: JSbasics lecture: String pp. 61–62, Date pp. 63–70, Array pp. 71–75; L06 input/output task form

### Requirements

1. Create q24.html. Start with the array ["CSIT884", "CSIT882"]. Add a text field and Add, Remove and Show buttons. Assume each entered subject code is valid.

2. Add trims both ends, converts the code to uppercase and appends it using push. Allow duplicate codes. Remove applies the same conversion, uses indexOf, then removes only the first match using splice. If not found, do nothing.

3. Show displays every array item in order and the number of items. Also display the first four characters of the current text-field value after trimming and uppercase conversion, using slice.

4. On Show, create new Date(2026, 10, 11, 9, 0, 0) and display 2026-11-11 9:0:0 and weekday 3. Construct the values with Date getters. This is local time. Zero-padding is not required.

5. Also show the next calendar date by making a copy of that Date and using setDate. The original date must remain 11. Explain in one sentence why the constructor uses 10 for November.

### Self-check

- Add csit985, remove CSIT882, then Show: the list is CSIT884, CSIT985 and the count is 2.
- Removing a missing code must not remove the last item. The next date is 12. November is month index 10.

### Practice self-assessment: 10 marks

- Array push, search and safe removal: 4 marks
- String conversion and slice: 2 marks
- Date construction, getters and next date: 3 marks
- Output, explanation and comments: 1 marks

## Q25 Form validation: built-in rules and JavaScript rules

Complete this coverage drill after the two core rounds.

Suggested time: 25 minutes | Sources: FormValidation lecture pp. 4–6, 8–22; Week 13: onsubmit return; L05 task form

### Requirements

1. Create q25.html with two separate GET forms, both using action="/search". Part A uses built-in HTML validation only. Add email (required, type=email), quantity (required integer from 1 to 5), and code (required, exactly three uppercase ASCII letters). Use names email, quantity and code. Add a Submit A button.

2. Part B uses JavaScript validation only. Use novalidate on this form. Add two text fields named email and email2, plus a Submit B button. Both fields are required after trimming, and their trimmed values must match exactly. Do not check email format in Part B.

3. Use onsubmit="return validateEmails()". Display separate red messages beside the two fields. On each attempt, clear old messages, then show Email is required or Confirmation is required when empty. When both are non-empty but unequal, show Emails do not match beside the second field.

4. Return false on failure and true on success. On success, replace both field values with the trimmed values before normal submission. Add reset buttons and clear the custom messages on reset.

### Self-check

- Part A rejects an empty email, quantity 0 or 6, quantity 1.5, and code ab1. It accepts a valid email, quantity 1 or 5, and ABC.
- Part B rejects spaces-only input and different strings. Two equal trimmed strings submit. A later valid attempt must remove old error messages.

### Practice self-assessment: 10 marks

- Part A constraints and parameter names: 4 marks
- Part B exact checks and separate messages: 3 marks
- Return value, trimming and normal submission: 2 marks
- Reset and comments: 1 marks

## Q26 XML schemas: external DTD and text with an attribute

Complete this coverage drill after the two core rounds.

Suggested time: 25 minutes | Sources: XMLDTD lecture pp. 25–38; XSD lecture p. 11; Week 13: attributes require a complex type

### Requirements

1. Use this XML structure: <catalog><book code="B01"><title>Web basics</title><price currency="AUD">39.50</price></book></catalog>. Write a complete q26.xml with an XML declaration and an external DTD reference to q26.dtd.

2. Write q26.dtd. A catalog contains one or more book elements. Each book has title then price, and a required code attribute. Both title and price contain text. The currency attribute is required. Use CDATA for both attributes.

3. Write q26.xsd for the same data structure. The title and both attributes are strings. The price text is decimal. Use complexType, simpleContent and extension for price. Both attributes are required. Allow one or more books.

4. A separate file q26-schema.xml must contain the same data without a DOCTYPE and link to the no-target-namespace schema using xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" and xsi:noNamespaceSchemaLocation="q26.xsd".

5. Explain why DTD text content alone does not enforce a decimal price, while the XSD does.

### Self-check

- Both XML samples validate against their stated DTD or XSD. The XSD rejects price text free and a missing currency attribute.
- External DTD declarations are not wrapped in a DOCTYPE block inside the .dtd file. A price with an attribute cannot be defined only as xsd:decimal.

### Practice self-assessment: 10 marks

- XML data and external DTD reference: 2 marks
- Correct DTD and required attributes: 2 marks
- XSD simpleContent, decimal and repetition: 4 marks
- Schema link and explanation: 2 marks

## Q27 DOM: select groups by tag and class

Complete this coverage drill after the two core rounds.

Suggested time: 15 minutes | Sources: Week 13: getElementsByTagName/getElementsByClassName; DOM lecture p. 6

### Requirements

1. Create q27.html with three p elements. The first reads HTML and has class="topic"; the second reads CSS and has class="topic"; the third reads Notes and has no class.

2. Add buttons Count paragraphs, Colour topics and Add topic. Count paragraphs uses document.getElementsByTagName("p") and shows the count in a span, not a p.

3. Colour topics uses document.getElementsByClassName("topic") and a loop to turn every matching element orange. Do not use querySelectorAll for this task.

4. Add topic creates a new p with class="topic" and text JavaScript, then appends it inside a div. Use createElement and createTextNode. Each click adds another paragraph. A later count or colour action must include the new paragraphs.

### Self-check

- Initial paragraph count is 3. Add twice, then count again: it is 5.
- After Colour topics, HTML, CSS and all new JavaScript paragraphs are orange. Notes keeps its normal colour.

### Practice self-assessment: 10 marks

- Tag-name lookup and count: 3 marks
- Class-name lookup and loop: 3 marks
- Dynamic creation and updated results: 3 marks
- Comments and correct output element: 1 marks

## Q28 Storage: save, restore and delete an object array

Complete this coverage drill after the two core rounds.

Suggested time: 30 minutes | Sources: Week 13: local storage; WebStorage lecture pp. 5–31, task-list example

### Requirements

1. Create q28.html. Add a task text field, an urgency select with High, Medium and Low (default), and an Add task button. Assume valid non-empty input and working localStorage.

2. Keep tasks in an array of objects with numeric id, string task and string urgency. Use new Date().getTime() for the first new ID and ensure later IDs are larger even if two tasks are added in the same millisecond.

3. On Add, append an object, display all tasks in an unordered list, and save the array as JSON under csit884-tasks. Each item needs its own Delete button. Delete only that ID, update the display and save the new array.

4. On load, read the key, check for null, parse saved JSON and restore the list. A first visit starts with an empty list. Use JSON.stringify to save and JSON.parse to restore.

5. Add Clear tasks. It empties the array and list and calls removeItem for csit884-tasks. Keep unrelated localStorage keys.

6. Explain in English how replacing localStorage with sessionStorage changes persistence after closing a tab. Also display the current array in a read-only textarea using JSON.stringify(tasks, null, 2).

### Self-check

- Add Read notes/High and Practise AJAX/Low, reload: both return with the same IDs and urgency values.
- Delete the first item, reload: only the second returns. Clear tasks and reload: the list is empty and the tasks key is absent.
- The JSON contains an array of objects. It is not [object Object], and IDs are unique.

### Practice self-assessment: 10 marks

- Array, controls and display: 2 marks
- Unique IDs and deleting the correct item: 2 marks
- JSON save and first-load restoration: 3 marks
- removeItem and storage explanation: 2 marks
- Formatted JSON and comments: 1 marks

## Q29 Calculator: read an operation and check an answer

Complete this coverage drill after the two core rounds.

Suggested time: 15 minutes | Sources: L06 Q2: addition, subtraction and multiplication; JS2 input/output; Week 13: value and functions

### Requirements

1. Create q29.html with three text fields and a select between the first two fields. The select displays +, - and x, with values add, subtract and multiply. Place = before the third text field and add a Check button.

2. The first two fields contain numbers. The third contains the user's proposed answer. Assume all three inputs are valid integers and all results fit normal JavaScript number precision. Do not add validation.

3. On Check, read the select value and convert the three input strings to numbers. Use the chosen operation to calculate the expected answer. Display Correct! for an equal answer, otherwise Incorrect, please try again.

4. Each check replaces the previous message. Add comments and use meaningful variable names.

### Self-check

- 10 x 5 = 50 shows Correct!; 14 - 5 = 11 shows Incorrect, please try again.
- 10 + 5 = 15 must be correct. A previous incorrect message must disappear after a correct answer.

### Practice self-assessment: 10 marks

- Controls and operation values: 2 marks
- Numeric conversion and three operations: 4 marks
- Answer comparison and replaced message: 3 marks
- Comments and names: 1 marks

## Source guide

- Final-exam review: week13.txt. It covers required CSS methods, JavaScript comments, form parameters and values, XML/DTD instructions, XSD types, JSON conversions, XHR, Canvas, drag and drop, DOM and storage.
- A1: the supplied HTML-only information page and coordinator-table questions.
- A2: A2-884.pdf, with separate HTML, CSS and JavaScript tasks.
- A3: A3-884.pdf, with animation reset/restart and a GET service form.
- A4: A4.pdf, with an input-based weather request and required document CSS class/ID rules.
- L01-L14: the fourteen archived topic groups supplied in this chat. This does not mean there are fourteen official lab sessions.
- Related lectures: HTML, CSS, JSbasics, JS2, Event, Animation, WebForm, FormValidation, XMLDTD, XSD, JSON, JSCSS, AJAX, DOM, DragDropCanvas and WebStorage.
- These practice questions include their own service documentation and fixed data. They do not require live eBay, UOW or weather-service access.

