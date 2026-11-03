# CSIT884 · 20 Core Questions + 9 Coverage Drills

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
- Full reference answers are in the separate answers.html and reference-answers.md files. Runnable source files are in answers/. Reference code is loaded only when you choose Compare reference, or open the separate answer page.
- The answer box records text; it does not run your code. Save your own HTML files in my-work/ and open them through the local practice server.
- On macOS, double-click Start-practice.command. You can also run `python3 serve.py` from this folder, then open http://127.0.0.1:8765/questions.html. Keep the server window open while practising.
- Q07, Q08, Q14, Q15 and Q25 need the local server to test requests. Other HTML examples can be opened directly. Use the same server address when testing Q19 storage.
- The fixed practice identity is Maya Lee / 2026001 / mayal@uowmail.edu.au. It is sample data, not your real identity.

## Practice order

First round: Q01, Q02, Q03, Q05, Q07, Q10, Q14, Q15.

Second round: Q04, Q06, Q08, Q09, Q11, Q12, Q13, Q16, Q17, Q18, Q19, Q20.

The second round still covers topics named by the lecturer, including XML/DTD/XSD, Canvas, drag and drop, DOM and storage. Complete it even if a topic did not appear in a particular assignment.

## Source guide

- Final-exam review: week13.txt. It covers required CSS methods, JavaScript comments, form parameters and values, XML/DTD instructions, XSD types, JSON conversions, XHR, Canvas, drag and drop, DOM and storage.
- A1: the supplied HTML-only information page and coordinator-table questions.
- A2: A2-884.pdf, with separate HTML, CSS and JavaScript tasks.
- A3: A3-884.pdf, with animation reset/restart and a GET service form.
- A4: A4.pdf, with an input-based weather request and required document CSS class/ID rules.
- L01-L14: the fourteen archived topic groups supplied in this chat. This does not mean there are fourteen official lab sessions.
- Related lectures: HTML, CSS, JSbasics, JS2, Event, Animation, WebForm, FormValidation, XMLDTD, XSD, JSON, JSCSS, AJAX, DOM, DragDropCanvas and WebStorage.
- These practice questions include their own service documentation and fixed data. They do not require live eBay, UOW or weather-service access.

## Timed practice sets

- Set A: Q01, Q05, Q07, Q13, Q15. Five questions, 50 practice marks, 180 minutes including checking.
- Set B: Q02, Q10, Q14, Q17, Q19. Five questions, 50 practice marks, 180 minutes including checking.
- These sets reuse bank questions. They are not predictions of the actual exam.

## Files

- questions.html / questions.md: English questions.
- answers.html / reference-answers.md: separate reference answers, with Chinese explanations.
- My-answers.md / my-work/: your answers.
- answers/: runnable source; data/ and assets/: fixed data and images.
- Start-practice.command / serve.py: local practice server; Python standard library only.

## Updated study workspace · 4 November 2026

- [Overview](index.html) · [Question workspace](questions.html) · [Reference answers](answers.html)
- [Memory notes](notes.html) · [Quick sheet](quick-notes.html)
- [Coverage audit and corrections](audit.md) · [Validation record](validation.md)
- [Run your code](setup.html) · [Download practice pack](practice-pack.zip)

The question UI is English. Memory notes and reference explanations use Chinese with English terms and code. Q01–Q20 keep the original core order. Q21–Q29 add source-backed gap drills; no exam probability is claimed.

The workspace shows one question at a time. Search by task/API, filter by topic/round/status, keep a draft, compare the reference beside your answer, and export/import a JSON backup. Status and checklist marks are self-assessed. Drafts are not automatically marked correct or mastered.

Browser storage stays on the current origin, browser and device. Earlier 884-bank-Qxx and 884-check-Qxx keys remain compatible on the same origin. Files opened locally, localhost and GitHub Pages do not share storage; use Export all progress and Import backup to move work.

GitHub Pages hosts reading and draft tools. It has no /search or /weather backend. Download the pack and run python3 serve.py for the form/weather tasks. Weather responses are fixed practice data, not live weather. The pack uses only the Python standard library.

The repository contains generated study materials and reference implementations. Original lecture PDFs, screenshots, personal background and learning-feedback records are not included.
