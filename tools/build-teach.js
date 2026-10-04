// tools/build-teach.js — builds teach/<subject>.js (Teach Me explanations
// written in advance) from plain-text sources.
//
//   node tools/build-teach.js <subject> <source.txt>...
//
// Each source has blocks "@@ <n>" followed by the explanation, where <n> is
// the question's position in the subject's bank (old bank first, then
// past-questions/<subject>-*.js files in name order, passages flattened).
// Entries already in teach/<subject>.js are kept for questions not covered
// by the sources, so a new year can be added without rewriting the rest.
const fs=require("fs"),vm=require("vm");
const [subject, ...srcs]=process.argv.slice(2);
const c={};vm.createContext(c);
vm.runInContext(fs.readFileSync("questions.js","utf8")+";this.Q=QUESTION_BANK;",c);
for (const f of fs.readdirSync("past-questions").filter(f=>f.startsWith(subject+"-")).sort()) vm.runInContext(fs.readFileSync("past-questions/"+f,"utf8"),c);
const flat=[]; c.Q[subject].forEach(e=> e.questions ? e.questions.forEach(q=>flat.push({...q,passageId:e.passageId})) : flat.push(e));
const key=q=>(q.passageId||"")+"|"+q.question+"|"+q.options.join("|");
const texts={};
for (const src of srcs) for (const block of fs.readFileSync(src,"utf8").split(/^@@ /m).slice(1)) {
  const nl=block.indexOf("\n"); texts[Number(block.slice(0,nl))]=block.slice(nl+1).trim();
}
let existing={};
try { const ctx={window:{}}; vm.createContext(ctx); vm.runInContext(fs.readFileSync(`teach/${subject}.js`,"utf8"),ctx); existing=ctx.window.TEACH_ME[subject]||{}; } catch {}
const out={}, missing=[];
flat.forEach((q,i)=>{ const t=texts[i]||existing[key(q)]; if(!t) missing.push(i); else out[key(q)]=t; });
if (missing.length) { console.error("MISSING", missing); process.exit(1); }
// JAMB sometimes reuses a question word for word in a later year; identical
// questions share one explanation, so compare against the unique count.
if (Object.keys(out).length!==new Set(flat.map(key)).size) { console.error("KEY CLASH", Object.keys(out).length, flat.length); process.exit(1); }
fs.mkdirSync("teach",{recursive:true});
fs.writeFileSync(`teach/${subject}.js`, `/**
 * Teach Me explanations for ${subject}, written in advance so they load
 * instantly, work offline and cost nothing per student. Keyed by
 * passageId|question|options (see teachMeKey in app.js). A question with no
 * entry here falls back to the live AI explanation.
 */
(window.TEACH_ME = window.TEACH_ME || {})[${JSON.stringify(subject)}] = ${JSON.stringify(out, null, 1)};
`);
console.log("wrote", flat.length, "explanations; avg words", Math.round(Object.values(out).reduce((a,t)=>a+t.split(/\s+/).length,0)/flat.length));
