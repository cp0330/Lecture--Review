"use strict";

const STATE_KEY = "csit881-round-two-v1";
const labels = {
  unseen: "待测",
  independent: "独立通过",
  assisted: "提示后通过",
  review: "待复测"
};
const byId = id => document.getElementById(id);
const article = byId("question");
const controls = {
  search: byId("search"),
  section: byId("section"),
  status: byId("status"),
  previous: byId("previous"),
  next: byId("next")
};
let questions = [];
let selected = null;
let answersPromise = null;
let storageAvailable = true;
let records = readRecords();

function element(tag, text, className) {
  const result = document.createElement(tag);
  if (text !== undefined) result.textContent = text;
  if (className) result.className = className;
  return result;
}

function readRecords() {
  try {
    const raw = JSON.parse(localStorage.getItem(STATE_KEY) || "{}");
    return raw && typeof raw === "object" && !Array.isArray(raw) ? raw : {};
  } catch {
    storageAvailable = false;
    return {};
  }
}

function save() {
  try {
    localStorage.setItem(STATE_KEY, JSON.stringify(records));
  } catch {
    storageAvailable = false;
  }
}

function fresh(question) {
  return {
    status: "unseen", draft: "", note: "", seenHint: false, seenAnswer: false,
    submission: null, order: Object.keys(question.blocks || {})
  };
}

function record(question) {
  if (!records[question.id]) records[question.id] = fresh(question);
  return records[question.id];
}

function statusOf(question) {
  const value = records[question.id]?.status;
  return Object.hasOwn(labels, value) ? value : "unseen";
}

function button(title, handler, className) {
  const result = element("button", title, className);
  result.type = "button";
  result.addEventListener("click", handler);
  return result;
}

function badge(status, text) {
  return element("span", text || labels[status], "status " + status);
}

function filtered() {
  const term = controls.search.value.trim().toLowerCase();
  return questions.filter(question => {
    const searchable = [question.id, question.title, question.kind, ...question.sources].join(" ").toLowerCase();
    return (!term || searchable.includes(term))
      && (!controls.section.value || question.section === controls.section.value)
      && (!controls.status.value || statusOf(question) === controls.status.value);
  });
}

function drawList() {
  const shown = filtered();
  byId("count").textContent = shown.length + " / " + questions.length + " 题";
  const list = byId("question-list");
  const items = shown.map(question => {
    const link = element("a", undefined, "question-link");
    link.href = "#" + question.id;
    if (question.id === selected?.id) link.setAttribute("aria-current", "true");
    link.append(element("span", question.id, "number"), badge(statusOf(question)),
      element("span", question.title, "question-title"));
    link.addEventListener("click", event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      openQuestion(question, true);
    });
    return link;
  });
  const lastScroll = list.scrollTop;
  list.replaceChildren(...items);
  list.scrollTop = lastScroll;
  if (!shown.length) list.append(element("p", "没有符合筛选条件的题目。", "caption"));
  const position = shown.findIndex(question => question.id === selected?.id);
  controls.previous.disabled = position <= 0;
  controls.next.disabled = position === -1 || position >= shown.length - 1;
  const counts = {unseen: 0, independent: 0, assisted: 0, review: 0};
  questions.forEach(question => counts[statusOf(question)]++);
  byId("totals").replaceChildren(...Object.keys(counts).map(
    status => badge(status, labels[status] + " " + counts[status])
  ));
}

function openQuestion(question, focus = false) {
  if (!question) return;
  selected = question;
  if (location.hash !== "#" + question.id) history.replaceState(null, "", "#" + question.id);
  drawList();
  renderQuestion(question);
  if (focus) {
    article.scrollIntoView({block: "start"});
    article.querySelector("h2").focus({preventScroll: true});
  }
}

function adjustSelection() {
  const shown = filtered();
  if (shown.length && !shown.some(question => question.id === selected?.id)) {
    openQuestion(shown[0]);
  } else {
    drawList();
  }
}

function moveSelection(delta) {
  const shown = filtered();
  const index = shown.findIndex(question => question.id === selected?.id);
  if (index >= 0) openQuestion(shown[index + delta], true);
}

function svgElement(tag, attributes = {}) {
  const result = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (const [name, value] of Object.entries(attributes)) result.setAttribute(name, value);
  return result;
}

function drawDiagram(diagram) {
  const figure = element("figure", undefined, "diagram");
  figure.lang = "en";
  figure.append(element("figcaption", diagram.label));
  const svg = svgElement("svg", {role: "img"});
  const title = svgElement("title");
  title.textContent = diagram.label;
  const description = svgElement("desc");
  svg.append(title, description);
  const nodes = [];
  const edges = [];

  function layTree(node, x, y, offset) {
    nodes.push({node, x, y});
    (diagram.edges[node] || []).forEach((child, direction) => {
      if (child === null) return;
      const childX = x + (direction === 0 ? -offset : offset);
      const childY = y + 63;
      edges.push({x, y, childX, childY, label: direction === 0 ? "L" : "R"});
      layTree(child, childX, childY, offset / 2);
    });
  }

  if (diagram.type === "tree") {
    layTree(diagram.root, 320, 27, 150);
    svg.setAttribute("viewBox", "0 0 640 " + (Math.max(...nodes.map(n => n.y)) + 30));
    description.textContent = "Root " + diagram.root + ". "
      + Object.entries(diagram.edges).map(([parent, [left, right]]) =>
        parent + ": left " + (left ?? "none") + ", right " + (right ?? "none")).join(". ");
  } else {
    const names = [...diagram.nodes, "None"];
    names.forEach((node, index) => {
      const x = 115 + 88 * index;
      nodes.push({node, x, y: 44});
      if (index > 0) edges.push({x: x - 62, y: 44, childX: x - 27, childY: 44});
    });
    svg.setAttribute("viewBox", "0 0 " + (125 + 88 * names.length) + " 89");
    description.textContent = diagram.head + " points to " + names.join(", then ");
    const head = svgElement("text", {x: 57, y: 15});
    head.textContent = diagram.head;
    svg.append(head, svgElement("line", {x1: 64, y1: 20, x2: 90, y2: 38, class: "edge"}));
    svg.append(svgElement("path", {d: "M 81 36 L 90 38 L 86 30", class: "edge", fill: "none"}));
  }
  for (const {x, y, childX, childY, label} of edges) {
    svg.append(svgElement("line", {x1: x, y1: y, x2: childX, y2: childY, class: "edge"}));
    if (label) {
      const text = svgElement("text", {x: (x + childX) / 2 + (label === "L" ? -5 : 5), y: (y + childY) / 2 - 7, class: "edge-label"});
      text.textContent = label;
      svg.append(text);
    } else {
      svg.append(svgElement("path", {d: "M " + (childX - 7) + " " + (childY - 4) + " L " + childX + " " + childY
        + " L " + (childX - 7) + " " + (childY + 4), class: "edge", fill: "none"}));
    }
  }
  for (const {node, x, y} of nodes) {
    const shape = diagram.type === "tree"
      ? svgElement("circle", {cx: x, cy: y, r: 17, class: "node"})
      : svgElement("rect", {x: x - 25, y: y - 16, width: 50, height: 32, rx: 5, class: "node"});
    const name = svgElement("text", {x, y});
    name.textContent = node;
    svg.append(shape, name);
  }
  figure.append(svg);
  return figure;
}

function drawExamples(question) {
  const container = element("section", undefined, "examples");
  container.append(element("h3", question.examples.length === 1 ? "Example" : "Examples"));
  const givenLabel = question.kind === "Program" ? "Input" : question.kind === "Function" ? "Test" : "Given";
  for (const sample of question.examples) {
    const pair = element("div", undefined, "example");
    for (const [label, content] of [[givenLabel, sample.given], ["Result", sample.expected]]) {
      if (!content) continue;
      const column = element("div");
      const output = element("pre", content.trimEnd().length ? content.replace(/\n$/, "") : content);
      column.append(element("p", label, "caption"), output);
      pair.append(column);
    }
    container.append(pair);
  }
  return container;
}

function getAnswers() {
  if (!answersPromise) {
    answersPromise = fetch("answers.json").then(response => {
      if (!response.ok) throw Error("Unable to fetch answers");
      return response.json();
    }).catch(error => {
      answersPromise = null;
      throw error;
    });
  }
  return answersPromise;
}

function renderQuestion(question) {
  const state = record(question);
  const reorder = question.kind === "Reorder";
  const statusBadge = badge(statusOf(question));
  const ui = element("div");
  const metadata = element("div", undefined, "question-meta");
  metadata.append(element("span", question.id, "number"), element("span", question.kind, "caption"), statusBadge);
  const title = element("h2", question.title);
  title.tabIndex = -1;
  title.lang = "en";
  const source = element("details", undefined, "source");
  const sourceList = element("ul");
  sourceList.append(...question.sources.map(item => element("li", item)));
  source.append(element("summary", "来源与页码"), sourceList);
  const en = element("div");
  en.lang = "en";
  en.append(element("p", question.prompt, "prompt"), element("p", question.submission, "submission"));
  for (const diagram of question.diagrams || []) en.append(drawDiagram(diagram));
  if (question.examples.length) en.append(drawExamples(question));
  ui.append(metadata, title, source, en);

  const attempt = element("section", undefined, "attempt");
  const statusLine = element("p", "", "feedback");
  statusLine.setAttribute("role", "status");
  const toolbar = element("div", undefined, "toolbar");
  const feedback = element("div");
  const grading = element("div", undefined, "grading");
  const toolNote = element("p", reorder ? "用拖放或 ↑ / ↓ 调整顺序。" :
    "提交后对照答案。编程题可在 Python 环境运行样例核对。", "caption");
  attempt.append(element("h3", "作答"), toolNote);
  let editor;
  let blocks;
  let dragged = null;
  let answer = null;
  let working = false;
  let errorText = "";

  function saveStatus(status) {
    state.status = status;
    save();
    const nextBadge = badge(status);
    statusBadge.className = nextBadge.className;
    statusBadge.textContent = nextBadge.textContent;
    drawList();
  }

  function buildBlocks(focusLabel, focusDirection) {
    blocks.replaceChildren();
    state.order.forEach((key, index) => {
      const item = element("li", undefined, "block");
      item.draggable = !state.submission && !working;
      const label = element("span", key, "letter");
      const code = element("pre", question.blocks[key]);
      code.lang = "en";
      const moves = element("div", undefined, "moves");
      for (const delta of [-1, 1]) {
        const action = button(delta === -1 ? "↑" : "↓", () => moveBlock(index, index + delta, key, delta));
        action.disabled = working || Boolean(state.submission) || index + delta < 0 || index + delta >= state.order.length;
        action.setAttribute("aria-label", key + (delta === -1 ? " 向上移动" : " 向下移动"));
        action.dataset.direction = String(delta);
        moves.append(action);
      }
      item.addEventListener("dragstart", event => {
        dragged = key;
        event.dataTransfer.setData("text/plain", key);
        event.dataTransfer.effectAllowed = "move";
      });
      item.addEventListener("dragover", event => {
        if (!working && !state.submission && dragged && dragged !== key) {
          event.preventDefault();
          item.classList.add("drag-target");
        }
      });
      item.addEventListener("dragleave", () => item.classList.remove("drag-target"));
      item.addEventListener("dragend", () => { dragged = null; });
      item.addEventListener("drop", event => {
        event.preventDefault();
        item.classList.remove("drag-target");
        if (!state.submission && dragged) moveBlock(state.order.indexOf(dragged), index);
        dragged = null;
      });
      item.append(label, code, moves);
      blocks.append(item);
      if (key === focusLabel) {
        const same = moves.querySelector('button[data-direction="' + focusDirection + '"]');
        (same.disabled ? moves.querySelector("button:enabled") : same)?.focus();
      }
    });
  }

  function moveBlock(from, to, focusLabel, focusDirection) {
    if (working || state.submission || from < 0 || to < 0 || from === to || to >= state.order.length) return;
    const [key] = state.order.splice(from, 1);
    state.order.splice(to, 0, key);
    save();
    buildBlocks(focusLabel, focusDirection);
    statusLine.textContent = key + " 已移到第 " + (to + 1) + " 位。";
  }

  function isCurrent() {
    return selected?.id === question.id && records[question.id] === state && article.firstElementChild === ui;
  }

  async function ensureAnswer() {
    answer = (await getAnswers())[question.id];
    if (!answer) throw Error("Missing answer");
  }

  async function enterSubmission() {
    if (working || state.submission) return;
    if (!reorder && !state.draft.trim()) {
      errorText = "请先填写你的作答。";
      update();
      editor.focus();
      return;
    }
    const submission = {
      draft: state.draft, order: [...state.order], helped: state.seenHint || state.seenAnswer
    };
    errorText = "";
    if (reorder) {
      working = true;
      update();
      try {
        await ensureAnswer();
        if (!isCurrent()) return;
        submission.correct = answer.order.join("") === submission.order.join("");
      } catch {
        errorText = "核对失败。作答已保留，请重试。";
        return;
      } finally {
        working = false;
        if (isCurrent()) update();
      }
    }
    state.submission = submission;
    saveStatus(reorder && submission.correct ? (submission.helped ? "assisted" : "independent") : "review");
    update();
  }

  async function reveal(which) {
    if (working) return;
    const property = which === "hint" ? "seenHint" : "seenAnswer";
    if (!state.submission && !state[property]) {
      if (!window.confirm("提交前查看会将本轮记为有提示。继续查看？")) return;
    }
    working = true;
    errorText = "";
    update();
    try {
      await ensureAnswer();
      if (!isCurrent()) return;
      state[property] = true;
      save();
    } catch {
      errorText = "答案加载失败，请重试。";
    } finally {
      working = false;
      if (isCurrent()) update();
    }
  }

  function redo() {
    if (working || !window.confirm("开始新一轮会清除本题当前作答，保留错因备注。继续？")) return;
    const next = fresh(question);
    next.note = state.note;
    next.status = state.status === "unseen" ? "unseen" : "review";
    records[question.id] = next;
    save();
    openQuestion(question);
  }

  function update() {
    if (reorder) buildBlocks();
    else editor.readOnly = Boolean(state.submission);
    const submit = button(reorder ? "提交并核对顺序" : "提交作答", enterSubmission, "primary");
    const hint = button(state.seenHint ? "已查看提示" : "查看提示", () => reveal("hint"));
    const solution = button(state.seenAnswer ? "已查看参考答案" : "查看参考答案", () => reveal("solution"));
    submit.disabled = working || Boolean(state.submission);
    hint.disabled = working || (state.seenHint && Boolean(answer));
    solution.disabled = working || (state.seenAnswer && Boolean(answer));
    toolbar.replaceChildren(submit, hint, solution, button("开始新一轮", redo));
    feedback.replaceChildren();
    if (answer && state.seenHint) {
      const hintBox = element("section", undefined, "reveal");
      hintBox.append(element("h3", "提示"), element("p", answer.hint));
      feedback.append(hintBox);
    }
    if (answer && state.seenAnswer) {
      const answerBox = element("section", undefined, "reveal");
      answerBox.append(element("h3", "参考答案"), element("p", answer.explanation));
      if (answer.order) answerBox.append(element("p", answer.order.join(" → ")));
      const code = answer.code || (answer.order && answer.order.map(key => question.blocks[key]).join("\n"));
      if (code) answerBox.append(element("pre", code));
      feedback.append(answerBox);
    }

    const pass = button("记录通过", () => saveStatus(state.submission.helped ? "assisted" : "independent"));
    const review = button("记录待复测", () => saveStatus("review"));
    pass.disabled = !state.submission || !state.seenAnswer || reorder;
    review.disabled = !state.submission;
    const noteLabel = element("label", "错因备注");
    const note = element("input");
    note.value = state.note;
    note.placeholder = "例如：少算最后一项";
    note.addEventListener("input", () => { state.note = note.value; save(); });
    noteLabel.append(note);
    grading.replaceChildren(pass, review, noteLabel);
    statusLine.textContent = errorText || (working ? "正在加载…" : "");
    if (!statusLine.textContent && state.submission) {
      if (reorder) {
        statusLine.textContent = state.submission.correct ? "顺序正确，已记录。" : "顺序有误，已记为待复测。";
      } else {
        statusLine.textContent = "作答已锁定。查看参考答案后记录结果。";
      }
    }
    if (!storageAvailable) statusLine.textContent += " 当前浏览器未能保存记录。";
  }

  if (reorder) {
    blocks = element("ol", undefined, "reorder");
    blocks.setAttribute("aria-label", "可重排的代码块");
    attempt.append(blocks);
  } else {
    const editorLabel = element("label", "你的答案", "caption");
    editor = element("textarea", undefined, question.kind === "Trace" ? "" : "code");
    editor.id = "attempt-editor";
    editor.spellcheck = false;
    editor.autocapitalize = "off";
    editor.value = state.draft;
    editor.addEventListener("input", () => { state.draft = editor.value; save(); });
    editorLabel.htmlFor = editor.id;
    attempt.append(editorLabel, editor);
  }
  attempt.append(toolbar, statusLine, feedback, grading);
  ui.append(attempt);
  article.replaceChildren(ui);
  update();
  if (state.seenHint || state.seenAnswer) {
    ensureAnswer().then(() => { if (isCurrent()) update(); }).catch(() => {
      if (isCurrent()) {
        errorText = "答案暂时无法加载，请使用查看按钮重试。";
        update();
      }
    });
  }
}

for (const control of [controls.search, controls.section, controls.status]) {
  control.addEventListener(control === controls.search ? "input" : "change", adjustSelection);
}
controls.previous.addEventListener("click", () => moveSelection(-1));
controls.next.addEventListener("click", () => moveSelection(1));
window.addEventListener("hashchange", () => {
  const target = questions.find(question => "#" + question.id === location.hash);
  if (target) openQuestion(target);
});

fetch("questions.json").then(response => {
  if (!response.ok) throw Error("Unable to fetch question bank");
  return response.json();
}).then(data => {
  questions = data;
  openQuestion(questions.find(question => "#" + question.id === location.hash) || questions[0]);
}).catch(() => {
  article.replaceChildren(element("p", "题库加载失败。请刷新页面；本地访问请通过 HTTP 打开。"));
});
