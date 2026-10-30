// Run after editing content: node tools/build-content-manifest.cjs
// Metadata only: never changes questions, explanations or answer rulings.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const context = vm.createContext({ window: {} });
const read = file => fs.readFileSync(path.join(root, file));
const digest = data => crypto.createHash('sha256').update(data).digest('hex');
vm.runInContext(read('questions.js').toString(), context);
const subjects = JSON.parse(vm.runInContext('JSON.stringify(Object.keys(QUESTION_BANK))', context));
const manifest = { schema: 1, subjects: {}, files: {} };
for (const subject of subjects) {
  const scripts = fs.readdirSync(path.join(root, 'past-questions'))
    .filter(f => f.startsWith(subject + '-') && f.endsWith('.js')).sort().map(f => 'past-questions/' + f);
  for (const file of [`teach/${subject}.js`, `teach/${subject}-topics.js`]) {
    if (fs.existsSync(path.join(root, file))) scripts.push(file);
  }
  for (const file of scripts) vm.runInContext(read(file).toString(), context, { filename: file });
  const raw = JSON.parse(vm.runInContext(`JSON.stringify(QUESTION_BANK[${JSON.stringify(subject)}])`, context));
  const flat = raw.flatMap(q => Array.isArray(q.questions) ? q.questions.map(x => ({ ...x, passage: q.passage, passageId: q.passageId || 'passage', year: x.year ?? q.year })) : [q]);
  const years = {};
  for (const q of flat) if (q.year) years[q.year] = (years[q.year] || 0) + 1;
  const images = [...new Set([...JSON.stringify(raw).matchAll(/past-questions\/img\/[A-Za-z0-9_.-]+/g)].map(m => m[0]))].sort();
  const study = JSON.parse(vm.runInContext(`JSON.stringify({lessons: window.TEACH_TOPICS?.[${JSON.stringify(subject)}]?.lessons || {}, repeats: window.TEACH_TOPICS?.[${JSON.stringify(subject)}]?.repeats || {}, teach: window.TEACH_ME?.[${JSON.stringify(subject)}] || {}})`, context));
  const games = flat.filter(q => !q.reviewPending && Array.isArray(q.options) && q.options.length >= 2 && !q.passage && !q.passageId && !q.alsoAccept && q.keyVerdict !== 'none' && q.keyVerdict !== 'noanswer');
  const norm = text => String(text || '').toLowerCase().replace(/<[^>]+>/g, '').replace(/[^a-z0-9]/g, '');
  const byText = new Map();
  for (const q of flat) {
    if (q.administrative || !q.question || !q.year) continue;
    const variant = study.repeats[q.id];
    const key = variant ? 'reviewed:' + variant : norm(q.question) + '|' + (q.passage ? norm(q.passage).slice(0, 80) : '');
    const options = new Set((q.options || []).map(norm));
    const groups = byText.get(key) || [];
    let group = groups.find(g => variant || [...options].filter(o => g.options.has(o)).length >= Math.min(3, options.size));
    if (!group) { group = { options, count: 0 }; groups.push(group); }
    group.count++;
    byText.set(key, groups);
  }
  const repeats = [...byText.values()].flat().filter(g => g.count >= 2).length;
  manifest.subjects[subject] = {
    scripts, images, years, count: flat.length, repeats,
    lessons: Object.keys(study.lessons).length,
    traps: Object.values(study.teach).some(text => /The trap:\s*/.test(text)),
    tricky: { multi: flat.filter(q => !q.administrative && Array.isArray(q.alsoAccept) && q.alsoAccept.length && q.keyVerdict !== 'none').length, none: flat.filter(q => !q.administrative && ['none', 'noanswer'].includes(q.keyVerdict)).length },
    gameCount: games.length,
    memoryCount: games.filter(q => q.question.length <= 70 && q.options[q.answer].length <= 22).length
  };
}
// The booklet annotations span subjects and are shared by every package.
for (const subject of subjects) manifest.subjects[subject].scripts.push('booklet/errors.js');
for (const s of Object.values(manifest.subjects)) for (const file of [...s.scripts, ...s.images]) {
  const data = read(file);
  manifest.files[file] = { sha256: digest(data), bytes: data.length };
}
manifest.version = digest(JSON.stringify(manifest)).slice(0, 16);
fs.writeFileSync(path.join(root, 'content-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`Manifest ${manifest.version}: ${subjects.length} subjects, ${Object.keys(manifest.files).length} files`);
