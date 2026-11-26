# CSIT884 · 补考编程工作台

在此目录运行 `python3 serve.py`，自动打开题库。已有服务运行时访问 http://127.0.0.1:8765/questions.html 。

母题按 E1 → E3 → E2 → E4 → E5 练，再做 M1。两道变式可从各母题打开。每题有独立草稿，参考答案默认关闭。按主要错因或 Needs another try 筛选。跨浏览器、端口或从旧线上地址转入本地时，先在旧版导出备份，在新版导入。

[新版覆盖矩阵](audit.html) · [运行和备份](setup.html) · [可运行参考](answers.html)

## Separate learning views

- My Answer contains your code and work controls.
- Hints contains three levels: understand the task, recall the topic, then plan the steps.
- Explanation covers requirements, data/state, steps and mistakes, without a full implementation.
- Reference Answer contains the source. Each code block starts closed and must be opened deliberately.

Only one view is visible at a time. The reference tab also lets you expand a read-only copy of your latest draft. Returning to My Answer keeps the draft and cursor. Status is self-reported; help views are recorded for the current attempt. New attempt saves the old attempt and starts blank.

Source assignment points are shown for corresponding tasks, not invented final-exam weights. Supplements use outcome checks instead of a universal ten-point score. Other implementations may be correct when they meet all stated conditions.

## Drafts and older backups

Drafts stay in the current browser and origin. Nothing is uploaded by the workspace. Export all progress creates a v2 JSON backup containing drafts, checks, help history and previous attempts.

The original 884-bank-Qxx and 884-check-Qxx values are not deleted or overwritten. In v2, old drafts appear under Previous drafts and attempts on the corresponding Q task. Use this draft copies the code into the current answer; old checks do not grade a rewritten task. The eight assignment tasks and the supplementary-exam tasks each keep separate IDs.

Import accepts v1 and v2 backups. A v1 backup is imported as previous-version drafts and keeps current answers. A v2 backup replaces matching current records after confirmation. Export before replacing work you may need.

GitHub Pages, file URLs, localhost, another browser and another device do not share storage. Use export/import to move work.

## Run and verify

The answer box stores text and does not execute or automatically grade it. Save your own HTML under my-work/. On macOS, open Start-practice.command, or run python3 serve.py in the extracted folder and visit http://127.0.0.1:8765/questions.html.

The local server supports /search, /short-url and /weather. GitHub Pages provides no such backend. Weather responses are fixed practice data. A1-2 deliberately uses supplied absolute online image URLs; bundled images can be used with absolute localhost URLs for offline adaptation.

Original course PDFs, screenshots, private records and learner feedback are not published. Earlier audit/validation documents in archive describe the previous version, not the current interface.
