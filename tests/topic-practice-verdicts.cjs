// Check the actual inline renderer without changing licensing or production data.
const fs = require('node:fs'), vm = require('node:vm'), assert = require('node:assert/strict'), path = require('node:path');
const app = fs.readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8');
const start = app.indexOf('  function keyPointQuestionHtml(value) {');
const end = app.indexOf('  /* ── Exam Traps:', start);
assert(start >= 0 && end > start);
const source = app.slice(start, end);
function render(q, answer) {
  const panel = { isConnected: true, innerHTML: '', querySelectorAll: () => [], querySelector: () => ({}) };
  const sandbox = { kpPractice: { subject: 'commerce', topic: 'test', questions: [q], index: 0, answers: { 0: answer }, panel }, repeatGroup: () => null, repeatYears: () => [], window: {}, fmt: s => s, escHtml: s => String(s), document: {} };
  vm.runInNewContext(source + '\nrenderKeyPointPractice();', sandbox);
  return panel.innerHTML;
}
const q = { question: 'Reviewed source question', options: ['A', 'B', 'C', 'D'], answer: 1, explanation: 'The correct value is absent.', year: 2017, keyVerdict: 'noanswer' };
for (let answer = 0; answer < 4; answer++) {
  const html = render(q, answer);
  assert(html.includes('Attempt credited'));
  assert(!/class="kp-inline-answer (correct|wrong)"/.test(html));
  assert(html.includes('1 correct'));
}
const multiple = { ...q, keyVerdict: 'multiple', answer: 2, alsoAccept: [3] };
for (const answer of [2, 3]) {
  const html = render(multiple, answer);
  assert(html.includes('✓ Correct'));
  assert.equal((html.match(/class="kp-inline-answer correct"/g) || []).length, 2);
}
assert(render(multiple, 0).includes('✗ Not correct'));
console.log('PASS inline topic practice: defective items receive neutral credit; accepted alternatives score and display correctly');
