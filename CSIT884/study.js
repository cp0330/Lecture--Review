/* Question drafts use the original keys so earlier browser work remains available. */
const cards = [...document.querySelectorAll('.question-card')];
const links = [...document.querySelectorAll('.q-link')];
const byId = id => document.getElementById(id);
function read(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
function write(key, value) { try { localStorage.setItem(key, value); return true; } catch (e) { return false; } }
function state(id) { return read('884-state-' + id) || (read('884-bank-' + id)?.trim() ? 'working' : 'new'); }
let active;
function report(message) { byId('backup-status').textContent = message; }
function updateProgress() {
  let count = 0;
  cards.forEach(card => {
    const id = card.id, value = state(id);
    links.find(a => a.dataset.id === id).dataset.state = value;
    byId('state-' + id).value = value;
    if (value === 'checked') count++;
    const checked = [...card.querySelectorAll('[data-check]')].filter(e => e.checked).reduce((sum, e) => sum + Number(e.dataset.marks), 0);
    byId('score-' + id).textContent = checked + '/10 checklist marks · self-assessed';
  });
  byId('progress-text').textContent = count + '/' + cards.length + ' marked Checked';
  byId('progress-bar').style.width = (100 * count / cards.length) + '%';
}
function matching() {
  const text = byId('search').value.toLowerCase().trim();
  return cards.filter(card => {
    return (!text || card.dataset.search.includes(text)) &&
      (!byId('round-filter').value || card.dataset.round === byId('round-filter').value) &&
      (!byId('topic-filter').value || card.dataset.topic === byId('topic-filter').value) &&
      (!byId('state-filter').value || state(card.id) === byId('state-filter').value);
  });
}
function filterList() {
  const matches = matching(), ids = matches.map(c => c.id);
  links.forEach(a => a.hidden = !ids.includes(a.dataset.id));
  byId('list-count').textContent = matches.length + ' questions shown';
  byId('no-results').hidden = !!matches.length;
  byId('workspace-empty').hidden = !!matches.length;
  cards.forEach(card => card.hidden = !matches.length || card.id !== active);
  const position = ids.indexOf(active);
  byId('previous').disabled = position <= 0;
  byId('next').disabled = position < 0 || position >= ids.length - 1;
  byId('position').textContent = position >= 0 ? (position + 1) + ' of ' + ids.length + ' in this list' : 'Current question is outside this filter';
  return matches;
}
function selectQuestion(id, move = false) {
  if (!byId(id)?.classList.contains('question-card')) id = cards[0].id;
  active = id;
  cards.forEach(card => card.hidden = card.id !== id);
  links.forEach(a => a.setAttribute('aria-current', String(a.dataset.id === id)));
  write('884-last-question', id);
  document.title = id + ' · CSIT884 Practice';
  filterList();
  if (move) {
    if (matchMedia('(max-width:760px)').matches) { byId('question-menu').open = false; byId('backup-menu').open = false; }
    byId(id).scrollIntoView({block: 'start'});
    byId(id).querySelector('h2').focus({preventScroll:true});
  }
}
cards.forEach(card => {
  const id = card.id, box = byId('answer-' + id);
  box.value = read('884-bank-' + id) || '';
  box.addEventListener('input', () => {
    const ok = write('884-bank-' + id, box.value);
    // New drafts can be In progress, but are never marked Checked automatically.
    if (state(id) === 'new' && box.value.trim()) write('884-state-' + id, 'working');
    byId('saved-' + id).textContent = ok ? 'Saved in this browser · export a backup to keep a separate copy.' : 'Storage unavailable. Export your answer before leaving.';
    updateProgress(); filterList();
  });
  card.querySelectorAll('[data-check]').forEach(check => {
    check.checked = read('884-check-' + check.dataset.check) === 'true';
    check.addEventListener('change', () => { if (!write('884-check-' + check.dataset.check, String(check.checked))) byId('saved-' + id).textContent = 'Checklist could not be saved in this browser.'; updateProgress(); });
  });
  byId('state-' + id).addEventListener('change', e => {
    if (!write('884-state-' + id, e.target.value)) byId('saved-' + id).textContent = 'Status could not be saved in this browser.';
    updateProgress(); filterList();
  });
});
links.forEach(a => a.addEventListener('click', () => selectQuestion(a.dataset.id, true)));
window.addEventListener('hashchange', () => selectQuestion(location.hash.slice(1), true));
['search','round-filter','topic-filter','state-filter'].forEach(id => byId(id).addEventListener('input', () => { const list = filterList(); if (list.length && !list.some(card => card.id === active)) { location.hash = list[0].id; } }));
byId('clear-filters').addEventListener('click', () => { ['search','round-filter','topic-filter','state-filter'].forEach(id => byId(id).value = ''); filterList(); });
function step(direction) { const list = matching(), index = list.findIndex(c => c.id === active), next = list[index + direction]; if (next) location.hash = next.id; }
byId('previous').addEventListener('click', () => step(-1));
byId('next').addEventListener('click', () => step(1));
function download(text, name, type = 'text/plain;charset=utf-8') {
  const url = URL.createObjectURL(new Blob([text], {type}));
  const a = document.createElement('a'); a.href = url; a.download = name; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function exportAnswer(id) { download(byId('answer-' + id).value, id + '-my-answer.txt'); }
function exportAll() {
  const questions = {};
  cards.forEach(card => { const id = card.id; questions[id] = {answer: byId('answer-' + id).value, state: state(id), checks: [...card.querySelectorAll('[data-check]')].map(c => c.checked)}; });
  download(JSON.stringify({format:'csit884-practice', version:1, savedAt:new Date().toISOString(), questions}, null, 2), 'CSIT884-progress.json', 'application/json');
  report('Backup exported. It contains your answers and self-checks.');
}
byId('export-all').addEventListener('click', exportAll);
byId('import-file').addEventListener('change', async e => {
  const file = e.target.files[0]; if (!file) return;
  try {
    const data = JSON.parse(await file.text());
    if (data.format !== 'csit884-practice' || data.version !== 1 || !data.questions || typeof data.questions !== 'object') throw Error('Not a supported CSIT884 backup.');
    const changes = [];
    cards.forEach(card => {
      const item = data.questions[card.id]; if (!item) return;
      if (typeof item.answer !== 'string' || !['new','working','review','checked'].includes(item.state) || !Array.isArray(item.checks) || item.checks.length !== card.querySelectorAll('[data-check]').length || !item.checks.every(c => typeof c === 'boolean')) throw Error('The backup has invalid question data.');
      if (byId('answer-' + card.id).value !== item.answer || state(card.id) !== item.state || [...card.querySelectorAll('[data-check]')].some((c,i) => c.checked !== item.checks[i])) changes.push([card,item]);
    });
    if (!changes.length) { report('No changes to import.'); return; }
    if (!confirm('Import will replace saved answers and checks for ' + changes.length + ' questions. Export a backup first if needed. Continue?')) { report('Import cancelled. Your work was kept.'); return; }
    let saved = true;
    changes.forEach(([card,item]) => {
      byId('answer-' + card.id).value = item.answer;
      saved = write('884-bank-' + card.id, item.answer) && saved;
      saved = write('884-state-' + card.id, item.state) && saved;
      card.querySelectorAll('[data-check]').forEach((c,i) => { c.checked = item.checks[i]; saved = write('884-check-' + c.dataset.check, String(c.checked)) && saved; });
    });
    updateProgress(); filterList(); report(saved ? 'Backup imported and saved.' : 'Imported on screen, but storage is unavailable. Export before leaving.');
  } catch (error) { report('Import failed: ' + error.message); }
  finally { e.target.value = ''; }
});
let answerDocument;
async function toggleReference(id) {
  const panel = byId('reference-' + id), card = byId(id), button = byId('compare-' + id);
  if (!panel.hidden) { panel.hidden = true; card.classList.remove('compare-open'); button.textContent = 'Compare reference'; button.setAttribute('aria-expanded','false'); return; }
  panel.hidden = false; card.classList.add('compare-open'); button.textContent = 'Hide reference'; button.setAttribute('aria-expanded','true');
  const target = panel.querySelector('.reference-content');
  if (target.dataset.loaded) return;
  try {
    if (!answerDocument) {
      const response = await fetch('answers.html'); if (!response.ok) throw Error('Reference page unavailable');
      answerDocument = new DOMParser().parseFromString(await response.text(), 'text/html');
    }
    target.replaceChildren(answerDocument.getElementById(id).cloneNode(true));
    const section = target.querySelector('section'); section.removeAttribute('id');
    section.className = ''; section.querySelector('.back-question')?.remove();
    target.dataset.loaded = 'true';
  } catch (error) {
    target.replaceChildren(); const p = document.createElement('p'); p.textContent = 'Open the separate reference page to compare. For side-by-side comparison, use the online site or the local practice server.';
    const a = document.createElement('a'); a.href = 'answers.html#' + id; a.target = '_blank'; a.rel = 'noopener'; a.textContent = 'Open ' + id + ' reference'; target.append(p,a);
  }
}
async function copyCode(button) {
  const code = button.closest('.file').querySelector('pre code').textContent;
  try { await navigator.clipboard.writeText(code); button.textContent = 'Copied'; setTimeout(() => button.textContent = 'Copy code', 1500); }
  catch (e) { const range = document.createRange(); range.selectNodeContents(button.closest('.file').querySelector('pre code')); const selection = getSelection(); selection.removeAllRanges(); selection.addRange(range); button.textContent = 'Selected: use Copy'; }
}
updateProgress();
if (matchMedia('(max-width:760px)').matches) { byId('question-menu').open = false; byId('backup-menu').open = false; }
selectQuestion(location.hash.slice(1) || read('884-last-question') || cards[0].id, !!location.hash);
