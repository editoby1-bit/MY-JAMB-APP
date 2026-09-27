#!/usr/bin/env node
// Teach Me explanation pre-generator.
//
// Generates one explanation per official question, ONCE, using the Message
// Batches API (half price, asynchronous), and writes them to one JSON file
// per subject that the app downloads only when a student taps Teach Me.
// Questions without a pre-made explanation (e.g. added after the last run)
// still work: the app falls back to /api/teach, which generates and caches.
//
// Alongside each explanation it asks a second, separate question — "is the
// marked answer actually correct?" — and writes any disagreements to
// answer-check.json, so wrong answers in the bank get caught for review.
//
// The lookup key for each question is computed with the app's OWN
// teachCacheKey / qHash / normalizePassageBank functions, read straight out
// of app.js at runtime, so the keys here can never drift from the app's.
//
// Usage (normally run by .github/workflows/explanations.yml):
//   ANTHROPIC_API_KEY=... node tools/explanations/generate.mjs [options]
//     --limit N        only generate N missing explanations (trial run)
//     --subject NAME   only this subject (e.g. english)
//     --force          regenerate everything, not just missing ones
//     --resume ID      collect results of an earlier batch instead of
//                      submitting a new one (if a run timed out waiting)
//     --dry-run        show what would be generated; no API calls

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import Anthropic from '@anthropic-ai/sdk';

const MODEL = process.env.TEACH_MODEL || 'claude-opus-5';
const PROMPT_VERSION = 1;

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..', '..');

// ── Which app are we in? ────────────────────────────────────────────────
const APPS = {
  jamb: {
    bankFiles: ['questions.js', 'imported-questions.js'], appFile: 'app.js', outDir: 'explanations',
    bankVars: ['QUESTION_BANK'], fns: ['qHash', 'teachCacheKey'],
  },
  mea: {
    bankFiles: ['data/questions.js'], appFile: 'js/app.js', outDir: 'data/explanations',
    bankVars: ['EXAM_BANK', 'SUBJECTS'], fns: ['teachCacheKey'],
  },
};
const appId = fs.existsSync(path.join(root, 'js/app.js')) ? 'mea' : 'jamb';
const APP = APPS[appId];

// ── Args ────────────────────────────────────────────────────────────────
const argv = process.argv.slice(2);
const arg = name => { const i = argv.indexOf(name); return i >= 0 ? argv[i + 1] : undefined; };
const LIMIT = arg('--limit') ? parseInt(arg('--limit'), 10) : Infinity;
const ONLY_SUBJECT = arg('--subject') || null;
const FORCE = argv.includes('--force');
const RESUME = arg('--resume') || null;
const DRY = argv.includes('--dry-run');

// ── Pull functions out of app.js by name (brace-matched) ────────────────
function extractFunction(src, name) {
  const start = src.indexOf(`function ${name}(`);
  if (start < 0) throw new Error(`app.js has no function ${name} — the app changed; update this script`);
  let i = src.indexOf('{', start), depth = 0;
  for (; i < src.length; i++) {
    if (src[i] === '{') depth++;
    else if (src[i] === '}' && --depth === 0) return src.slice(start, i + 1);
  }
  throw new Error(`Could not find the end of function ${name}`);
}

const appSrc = fs.readFileSync(path.join(root, APP.appFile), 'utf8');
// Every bank file the page loads, in order (imported papers extend the bank).
const bankSrc = APP.bankFiles.filter(f => fs.existsSync(path.join(root, f)))
  .map(f => fs.readFileSync(path.join(root, f), 'utf8')).join('\n;\n');
const bankVarsObj = `{ ${APP.bankVars.join(', ')} }`;
const loaded = new Function(`${bankSrc}\n;return ${bankVarsObj};`)();
const bank = loaded[APP.bankVars[0]];
const SUBJECT_NAMES = loaded.SUBJECTS || {};

const helpers = new Function(
  `${APP.fns.map(n => extractFunction(appSrc, n)).join('\n')}\n` +
  `${extractFunction(appSrc, 'normalizePassageBank')}\n` +
  `return { ${APP.fns.join(', ')}, normalizePassageBank };`
)();
helpers.normalizePassageBank(bank);

// ── Collect questions with their app-side keys ──────────────────────────
// item: { subject, key, qType, q }
function collect() {
  const items = [], seen = new Set();
  for (const subject of Object.keys(bank)) {
    if (ONLY_SUBJECT && subject !== ONLY_SUBJECT) continue;
    const groups = appId === 'jamb'
      ? [['objective', bank[subject]]]
      : [['objective', bank[subject]?.objective], ['theory', bank[subject]?.theory]];
    for (const [qType, arr] of groups) {
      if (!Array.isArray(arr)) continue;
      for (const q of arr) {
        if (!q || typeof q.question !== 'string') continue;
        if (qType === 'objective' && !(Array.isArray(q.options) && q.options.length >= 2 && Number.isInteger(q.answer))) continue;
        const key = appId === 'jamb' ? helpers.teachCacheKey(subject, q) : helpers.teachCacheKey(q, qType);
        if (seen.has(key)) continue; // exact duplicate question — one explanation serves both
        seen.add(key);
        items.push({ subject, key, qType, q });
      }
    }
  }
  return items;
}

// ── Prompts (same wording as the app and /api/teach) ────────────────────
const L = i => String.fromCharCode(65 + i);
const subjName = s => SUBJECT_NAMES[s]?.name || s;

function explainPrompt({ subject, qType, q }) {
  const passageBlock = q.passage
    ? `\nThis question is based on the following ${q.passageTitle || 'passage'}:\n---\n${q.passage}\n---\n` : '';
  if (appId === 'jamb') {
    return `You are a JAMB/UTME exam tutor helping Nigerian students prepare.
${passageBlock}
Question: ${q.question}
Options: ${q.options.map((o, i) => L(i) + '. ' + o).join(' | ')}
Correct answer: ${L(q.answer)}. ${q.options[q.answer]}

Give a clear, concise explanation in 3-5 sentences:
1. Why the correct answer is right${q.passage ? ' — point to what in the passage supports it' : ''}
2. Briefly, why each other option is wrong (the trap in each)
3. A memory tip or key principle to remember for JAMB

Use plain English. Be encouraging. Keep it brief — students are studying under pressure.`;
  }
  const examLine = q.exam ? `\nExam: ${q.exam}` : '';
  if (qType === 'objective') {
    return `You are a WAEC/NECO exam tutor helping Nigerian students prepare for their exams.
${passageBlock}
Question: ${q.question}
Options: ${q.options.map((o, i) => L(i) + '. ' + o).join(' | ')}
Correct answer: ${L(q.answer)}. ${q.options[q.answer]}
Subject: ${subjName(subject)}${examLine}

Give a clear explanation in 3-5 sentences:
1. Why the correct answer is right — the key concept or principle${q.passage ? ', pointing to what in the passage supports it' : ''}
2. Briefly, why each other option is wrong (the trap in each)
3. A memory tip or rule to remember for the exam

Use plain English. Be encouraging. Keep it concise — students are under exam pressure.`;
  }
  return `You are a WAEC/NECO exam tutor helping a Nigerian student prepare.

Theory question: ${q.question}
Subject: ${subjName(subject)}${examLine}

The marking scheme awards points for: ${(q.markingScheme || []).map(p => p.point ?? p).join('; ')}

Explain in 4-5 sentences:
1. What the examiner is really asking for
2. The key points that must appear in a top-scoring answer
3. Common mistakes students make on this question
4. One examiner tip for maximising marks

Be specific to the Nigerian curriculum. Keep it practical and encouraging.`;
}

function checkPrompt({ subject, q }) {
  const passageBlock = q.passage ? `Passage:\n---\n${q.passage}\n---\n\n` : '';
  return `${passageBlock}Subject: ${subjName(subject)}
Question: ${q.question}
Options: ${q.options.map((o, i) => L(i) + '. ' + o).join(' | ')}
Answer marked in our question bank: ${L(q.answer)}

Is the marked answer correct? Reply with exactly one first line — AGREE, DISAGREE, or UNCLEAR — then one short sentence of reasoning. If DISAGREE, name the letter you believe is correct.`;
}

const params = content => ({
  model: MODEL,
  max_tokens: 8000,
  output_config: { effort: 'medium' },
  messages: [{ role: 'user', content }],
});

// ── Output files ────────────────────────────────────────────────────────
const outDir = path.join(root, APP.outDir);
const fileFor = subject => path.join(outDir, `${subject}.json`);
function readSubjectFile(subject) {
  try { return JSON.parse(fs.readFileSync(fileFor(subject), 'utf8')); } catch { return {}; }
}
function writeSubjectFile(subject, data) {
  fs.mkdirSync(outDir, { recursive: true });
  const { _meta, ...entries } = data;
  const sorted = Object.fromEntries(Object.keys(entries).sort().map(k => [k, entries[k]]));
  const meta = { app: appId, subject, promptVersion: PROMPT_VERSION, model: MODEL, updated: new Date().toISOString(), count: Object.keys(sorted).length };
  fs.writeFileSync(fileFor(subject), JSON.stringify({ _meta: meta, ...sorted }, null, 0) + '\n');
}
const checkFile = path.join(here, 'answer-check.json');

// ── Main ────────────────────────────────────────────────────────────────
const items = collect();
const bySubject = new Map();
for (const it of items) {
  if (!bySubject.has(it.subject)) bySubject.set(it.subject, readSubjectFile(it.subject));
}
const existing = it => !FORCE && typeof bySubject.get(it.subject)[it.key] === 'string';
const todo = items.filter(it => !existing(it)).slice(0, LIMIT);

console.log(`${appId}: ${items.length} questions, ${items.length - items.filter(it => !existing(it)).length} already explained, ${todo.length} to generate${Number.isFinite(LIMIT) ? ` (limit ${LIMIT})` : ''}. Model ${MODEL}.`);

// Prune explanations for questions that no longer exist (e.g. edited text).
if (!ONLY_SUBJECT && !DRY) {
  const live = new Set(items.map(it => it.key));
  for (const [subject, data] of bySubject) {
    for (const k of Object.keys(data)) if (k !== '_meta' && !live.has(k)) delete data[k];
  }
}

if (DRY) {
  for (const it of todo.slice(0, 5)) console.log(`\n── ${it.subject} ${it.key} ──\n${explainPrompt(it)}`);
  process.exit(0);
}
if (!todo.length && !RESUME) {
  for (const [subject, data] of bySubject) writeSubjectFile(subject, data);
  console.log('Nothing to generate.');
  process.exit(0);
}

const client = new Anthropic();
let batchId = RESUME;
const byKey = new Map(items.map(it => [it.key, it]));

if (!batchId) {
  const requests = [];
  for (const it of todo) {
    requests.push({ custom_id: `${it.key}-x`, params: params(explainPrompt(it)) });
    if (it.qType === 'objective') requests.push({ custom_id: `${it.key}-c`, params: params(checkPrompt(it)) });
  }
  const batch = await client.messages.batches.create({ requests });
  batchId = batch.id;
  console.log(`Submitted batch ${batchId} (${requests.length} requests).`);
  if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `batch_id=${batchId}\n`);
}

// Poll — most batches finish within an hour; give up after ~5h so the
// GitHub job (6h cap) can still report the batch id for --resume.
const deadline = Date.now() + 5 * 3600 * 1000;
let batch;
for (;;) {
  batch = await client.messages.batches.retrieve(batchId);
  if (batch.processing_status === 'ended') break;
  if (Date.now() > deadline) {
    console.error(`Batch ${batchId} still running. Re-run with --resume ${batchId} (workflow input "batch_id").`);
    process.exit(2);
  }
  console.log(`…${batch.processing_status}: ${batch.request_counts.processing} still processing`);
  await new Promise(r => setTimeout(r, 60_000));
}

let ok = 0, failed = 0;
const checks = (() => { try { return JSON.parse(fs.readFileSync(checkFile, 'utf8')); } catch { return {}; } })();
for await (const res of await client.messages.batches.results(batchId)) {
  const m = res.custom_id.match(/^(.*)-([xc])$/);
  const it = m && byKey.get(m[1]);
  if (!it) continue; // question changed since the batch was submitted
  const r = res.result;
  const text = r.type === 'succeeded' && r.message.stop_reason === 'end_turn'
    ? r.message.content.filter(b => b.type === 'text').map(b => b.text).join('').trim() : '';
  if (m[2] === 'x') {
    if (text) { bySubject.get(it.subject)[it.key] = text; ok++; }
    else { failed++; console.warn(`No explanation for ${it.subject} ${it.key}: ${r.type}${r.type === 'succeeded' ? ' / ' + r.message.stop_reason : ''}`); }
  } else if (text) {
    const verdict = (text.split('\n')[0].match(/AGREE|DISAGREE|UNCLEAR/) || ['UNCLEAR'])[0];
    if (verdict === 'AGREE') delete checks[it.key];
    else checks[it.key] = {
      verdict, subject: it.subject, question: it.q.question,
      options: it.q.options.map((o, i) => `${L(i)}. ${o}`), marked: L(it.q.answer),
      reason: text.split('\n').slice(1).join(' ').trim(),
    };
  }
}

for (const [subject, data] of bySubject) writeSubjectFile(subject, data);
fs.writeFileSync(checkFile, JSON.stringify(checks, null, 2) + '\n');

const flagged = Object.values(checks).filter(c => c.verdict === 'DISAGREE').length;
const summary = `Generated ${ok} explanations (${failed} failed — the app falls back to live generation for those). ` +
  `Answer check: ${flagged} question(s) where the model disagrees with the marked answer — see tools/explanations/answer-check.json.`;
console.log(summary);
if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary + '\n');
