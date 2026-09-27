#!/usr/bin/env node
// Question-bank audit: flags questions that look written ABOUT a paper rather
// than copied FROM one, or that can't work as stored (missing passage or
// diagram, lost italics, broken options, duplicates).
//
// It cannot prove a question is genuine — only the source papers can — so
// the report is a checklist to compare against the PDFs, not a verdict.
//
//   node tools/audit/audit-bank.mjs > audit-report.md

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const isMea = fs.existsSync(path.join(root, 'js/app.js'));
const files = isMea ? ['data/questions.js'] : ['questions.js', 'imported-questions.js'];
const src = files.filter(f => fs.existsSync(path.join(root, f))).map(f => fs.readFileSync(path.join(root, f), 'utf8')).join('\n;\n');
const loaded = new Function(`${src}\n;return { bank: ${isMea ? 'EXAM_BANK' : 'QUESTION_BANK'}, names: typeof SUBJECTS !== 'undefined' ? SUBJECTS : {} };`)();
const { bank, names } = loaded;

// Flatten, including passage groups ({passage, questions:[...]}).
const all = [];
for (const subject of Object.keys(bank)) {
  const groups = isMea ? [['objective', bank[subject].objective || []], ['theory', bank[subject].theory || []]] : [['objective', bank[subject]]];
  for (const [type, arr] of groups) {
    arr.forEach((e, i) => {
      if (e && Array.isArray(e.questions)) e.questions.forEach((q, k) => all.push({ subject, type, ref: `${i + 1}.${k + 1}`, q: { ...q, passage: e.passage, year: q.year ?? e.year, exam: q.exam ?? e.exam } }));
      else if (e) all.push({ subject, type, ref: `${i + 1}`, q: e });
    });
  }
}

const L = i => String.fromCharCode(65 + i);
const norm = s => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const checks = [
  {
    id: 'written-about', title: 'Phrased as if written about a paper, not copied from one',
    why: 'Real papers never say "the JAMB passage…" or "is commonly tested". These look written around a paper, so the question itself may not be genuine.',
    test: ({ q }) => /\b(JAMB|UTME|WAEC|NECO|GCE|NABTEB)\b[^.?]{0,40}\b(passage|comprehension|extract|examiners?|question paper|often|usually|typically|commonly|frequently|tests?|tested|asks?)\b|\b(commonly|frequently|often) (tested|asked|examined)\b|\bin (the|a) (JAMB|UTME|WAEC|NECO) (exam|paper)/i.test(q.question),
  },
  {
    id: 'missing-passage', title: 'Refers to a passage, poem or extract that is not in the app',
    why: 'Students can\'t answer these — the text they depend on isn\'t shown.',
    // Long questions (> 500 chars) usually carry their passage/poem inline.
    test: ({ q }) => !q.passage && String(q.question).length < 500 && /\b(the|this|above|following) (passage(?! of)|extract|excerpt|poem|stanza|comprehension|text)\b|\baccording to the (passage|writer|author|extract|text)\b|\bthe (writer|author|poet|narrator)('s)?\b/i.test(q.question),
  },
  {
    id: 'placeholder', title: 'Placeholder text instead of real content',
    why: 'A bracketed description such as "[Comprehension passage about …]" stands where the real passage or text should be.',
    test: ({ q }) => /\[[^\]]{12,}\]/.test(q.question) || (q.options || []).some(o => /\[[^\]]{12,}\]/.test(o)),
  },
  {
    id: 'missing-diagram', title: 'Mentions a diagram, figure or table that is not attached',
    why: 'The question relies on a picture or table the app doesn\'t have.',
    test: ({ q }) => !q.diagram && /\bwithout (using )?(mathematical )?tables\b/i.test(q.question) === false && /\b(diagram|figure|fig\.|graph|table|chart|illustration)\s+(\d+|[A-Z]\b|above|below|shown)|\b(shown|illustrated|represented) (above|below|in the (diagram|figure))|\bthe (diagram|figure|graph) (above|below)\b/i.test(q.question),
  },
  {
    id: 'lost-emphasis', title: 'Depends on italics/underlining the app can\'t show',
    why: 'The instruction points at a marked word, but no word is marked (e.g. in CAPITALS), so the question is ambiguous.',
    test: ({ q }) => /\b(underlined|in italics|italicized|italicised|in bold|highlighted|stressed (word|syllable))\b/i.test(q.question) && !/[A-Z]{2,}|\*\*/.test(q.question.replace(/\b(JAMB|UTME|WAEC|NECO|GCE|NABTEB)\b/g, '')),
  },
  {
    id: 'broken', title: 'Broken structure',
    why: 'Wrong option count, blank or repeated options, or an answer that points outside the options.',
    test: ({ type, q }) => {
      if (type !== 'objective') return false;
      const o = q.options || [];
      if (o.length < 4 || o.length > 5) return `${o.length} options`;
      if (o.some(x => !String(x).trim())) return 'blank option';
      // Exact comparison: case and symbols matter (PHO-to-graph vs pho-TO-graph, −2 vs 2).
      if (new Set(o.map(x => String(x).trim().replace(/\s+/g, ' '))).size !== o.length) return 'repeated option';
      if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= o.length) return `answer ${q.answer} is not one of the options`;
      return false;
    },
  },
  {
    id: 'explanation-mismatch', title: 'Explanation names a different answer letter',
    why: 'The written explanation says one letter is correct but the marked answer is another — one of them is wrong.',
    test: ({ type, q }) => {
      if (type !== 'objective' || !q.explanation || !Number.isInteger(q.answer)) return false;
      const m = String(q.explanation).match(/\b(?:answer|correct (?:option|answer)) (?:is )?\(?([A-E])\)?\b/i);
      return m && m[1].toUpperCase() !== L(q.answer) ? `explanation says ${m[1].toUpperCase()}, marked ${L(q.answer)}` : false;
    },
  },
];

// Run per-question checks.
const found = Object.fromEntries(checks.map(c => [c.id, []]));
for (const item of all) {
  for (const c of checks) {
    const r = c.test(item);
    if (r) found[c.id].push({ ...item, note: typeof r === 'string' ? r : '' });
  }
}

// Duplicates (same normalised question text within a subject).
const dupes = [];
const seen = new Map();
for (const item of all) {
  const k = item.subject + '|' + norm(item.q.question);
  if (seen.has(k)) {
    const first = seen.get(k);
    const clash = isMea && (first.q.year !== item.q.year || first.q.exam !== item.q.exam);
    dupes.push({ ...item, note: `same as #${first.ref}${clash ? ` — but labelled ${first.q.exam || '?'} ${first.q.year || '?'} vs ${item.q.exam || '?'} ${item.q.year || '?'}` : ''}` });
  } else seen.set(k, item);
}

// ── Report ──────────────────────────────────────────────────────────────
const subjName = s => names[s]?.name || s;
const snippet = s => String(s).replace(/\s+/g, ' ').slice(0, 140) + (String(s).length > 140 ? '…' : '');
const line = it => `- **${subjName(it.subject)}** #${it.ref}${isMea ? ` (${it.q.exam || '?'} ${it.q.year || '?'})` : ''}${it.type === 'theory' ? ' [theory]' : ''}: ${snippet(it.q.question)}${it.note ? ` — _${it.note}_` : ''}`;

const flaggedRefs = new Set([...Object.values(found).flat(), ...dupes].map(it => it.subject + it.type + it.ref));
const out = [];
out.push(`# Question bank audit — ${isMea ? 'My Exams App' : 'My JAMB App'}`);
out.push('');
out.push(`${all.length} questions scanned; **${flaggedRefs.size}** flagged at least once. ` +
  `"#" numbers are the question's position in its subject's list in the question file.`);
out.push('');
out.push('This scan cannot prove a question is genuine. It lists questions to compare against the source papers.');
if (!isMea) {
  const withYear = all.filter(it => it.q.year).length;
  out.push('');
  out.push(`**Traceability:** ${withYear} of ${all.length} questions record which year's paper they came from. Without a year, a question can't be checked against a specific paper.`);
}
out.push('');
out.push('| Check | Count |');
out.push('|---|---|');
for (const c of checks) out.push(`| ${c.title} | ${found[c.id].length} |`);
out.push(`| Duplicate questions | ${dupes.length} |`);
for (const c of checks) {
  if (!found[c.id].length) continue;
  out.push('', `## ${c.title} (${found[c.id].length})`, '', c.why, '', ...found[c.id].map(line));
}
if (dupes.length) out.push('', `## Duplicate questions (${dupes.length})`, '', 'The same question appears more than once in a subject. Where the copies carry different exam/year labels, at least one label is wrong.', '', ...dupes.map(line));
console.log(out.join('\n'));
