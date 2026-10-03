// tools/build-topics.js — builds teach/<subject>-topics.js: short topic
// lessons ("Learn the topic" under Teach Me) and which topic each question
// belongs to.
//
//   node tools/build-topics.js <subject> <lessons.txt> <map.txt>
//
// lessons.txt: blocks "## <id> | <title>" followed by the lesson text.
// map.txt: lines "<n> <id>" or "<a>-<b> <id>", where n is the question's
// position in the subject's bank (same order as tools/build-teach.js).
// Questions already mapped in an existing file keep their topic if not in
// map.txt, so new years can be added on their own.
const fs = require("fs"), vm = require("vm");
const [subject, lessonsSrc, mapSrc] = process.argv.slice(2);
const c = {}; vm.createContext(c);
vm.runInContext(fs.readFileSync("questions.js", "utf8") + ";this.Q=QUESTION_BANK;", c);
for (const f of fs.readdirSync("past-questions").filter(f => f.startsWith(subject + "-")).sort()) vm.runInContext(fs.readFileSync("past-questions/" + f, "utf8"), c);
const flat = []; c.Q[subject].forEach(e => e.questions ? e.questions.forEach(q => flat.push({ ...q, passageId: e.passageId })) : flat.push(e));
const key = q => (q.passageId || "") + "|" + q.question + "|" + q.options.join("|");

let existing = { lessons: {}, of: {} };
try { const ctx = { window: {} }; vm.createContext(ctx); vm.runInContext(fs.readFileSync(`teach/${subject}-topics.js`, "utf8"), ctx); existing = ctx.window.TEACH_TOPICS[subject]; } catch {}

const lessons = { ...existing.lessons };
for (const block of fs.readFileSync(lessonsSrc, "utf8").split(/^## /m).slice(1)) {
  const nl = block.indexOf("\n"); const [id, title] = block.slice(0, nl).split("|").map(s => s.trim());
  lessons[id] = { title, body: block.slice(nl + 1).trim() };
}
const byIndex = {};
for (const line of fs.readFileSync(mapSrc, "utf8").split("\n").filter(Boolean)) {
  const [range, id] = line.trim().split(/\s+/); const [a, b] = range.split("-").map(Number);
  for (let i = a; i <= (b ?? a); i++) byIndex[i] = id;
}
const of = {}, missing = [], unknown = new Set();
flat.forEach((q, i) => { const id = byIndex[i] || existing.of[key(q)]; if (!id) missing.push(i); else { if (!lessons[id]) unknown.add(id); of[key(q)] = id; } });
if (missing.length || unknown.size) { console.error("MISSING", missing, "UNKNOWN", [...unknown]); process.exit(1); }
fs.writeFileSync(`teach/${subject}-topics.js`, `/**
 * Topic lessons for ${subject} ("Learn the topic" under Teach Me), written in
 * advance like the Teach Me explanations: instant, offline, free. 'of' maps
 * each question (passageId|question|options) to its lesson.
 */
(window.TEACH_TOPICS = window.TEACH_TOPICS || {})[${JSON.stringify(subject)}] = ${JSON.stringify({ lessons, of }, null, 1)};
`);
const counts = {}; Object.values(of).forEach(id => counts[id] = (counts[id] || 0) + 1);
console.log("lessons", Object.keys(lessons).length, "questions mapped", Object.keys(of).length, "/", flat.length);
console.log(Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([k, v]) => k + ":" + v).join("  "));
