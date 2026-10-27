const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const root = path.resolve(__dirname, '..');
const base = process.env.JAMB_TEST_URL || 'http://127.0.0.1:8001/';
const context = vm.createContext({ window: {} });
const load = f => vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), context, { filename: f });
load('questions.js');
for (let year = 2001; year <= 2012; year++) load(`past-questions/crs-${year}.js`);
load('teach/crs.js'); load('teach/crs-topics.js');
const bank = JSON.parse(vm.runInContext('JSON.stringify(QUESTION_BANK.crs)', context));
const teach = JSON.parse(JSON.stringify(context.window.TEACH_ME.crs));
const topics = JSON.parse(JSON.stringify(context.window.TEACH_TOPICS.crs));
const key = q => (q.passageId || '') + '|' + q.question + '|' + q.options.join('|');
const printed = {
  2001: 'DADBCBCBDCCDCBCAACCCBBACDACCACABABABCBDACDBACDDBBA',
  2002: 'ABDBAACDDDCCDADDCCACCADCBDDCBBDABCACAABDACACDDDCCC',
  2003: 'CACBABCACBCBDDCBCCCDABBBDACDBABBBCBDDCCBCADBAAADAA',
  2004: 'CADDDADDADCDBABABADBCBDCBCDDCABCBBDABBDBDABBACACDC',
  2005: 'CACBBBBDAAABBCADCBDACCBBCDABAACABADDABCBDACDDBAADB',
  2006: 'CDCBCBDABBDBADCBADACCDBDADCCADDBDCCCDCDADCACDDBABD',
  2007: 'DACBADABDACBCBDABDCDCDBCDDDACBCDABAADBBDCADBCBABDC',
  2008: 'BCABCBBDBDDCDBBDCACBDABCAADAABACACDDCADABACACCBCBC',
  2009: 'DBCDBABCADCABADCDABACDCDBCCADDBDCDDBABDACDCBCABDDC',
  2010: 'BCCDACACDBBCBCCCCDACBCCCACCCCDABBDDBBAABBCCBDDBBCC',
  2011: 'ACCBDCCCACBBADBDDDCBADBAABCBBDABABCCBADDCDCADBBBAD',
  2012: '*BBBDBBDBACCABBBCBDBDDCCBACCDCBDBCABBBDBDACDCBAAAB'
};
assert.equal(bank.length, 650);
assert.equal(new Set(bank.filter(q => q.year).map(q => q.id)).size, 600);
for (const q of bank) {
  assert.equal(q.options.length, 4); assert(q.explanation);
  assert(teach[key(q)]?.length > 100);
  if (q.administrative) { assert.equal(topics.of[key(q)], undefined); assert.equal(q.keyVerdict, 'noanswer'); }
  else assert(topics.lessons[topics.of[key(q)]]);
  assert(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4);
  if (q.year) {
    assert.equal(q.printedKey, printed[q.year][q.paperQuestion - 1]);
    assert.equal(q.id, `crs-${q.year}-q${q.paperQuestion}`);
    assert(q.reference && q.sourceFile && q.sourcePages.length);
  }
  if (q.alsoAccept) {
    assert(q.answerNote);
    assert.equal(new Set([q.answer, ...q.alsoAccept]).size, q.alsoAccept.length + 1);
  }
}
for (let year = 2001; year <= 2012; year++) {
  const qs = bank.filter(q => q.year === year);
  assert.equal(qs.length, 50);
  assert.deepEqual(qs.map(q => q.paperQuestion), Array.from({ length: 50 }, (_, i) => i + 1));
}
assert.equal(bank.filter(q => q.bookletKey).length, 31);
assert.equal(bank.filter(q => q.alsoAccept).length, 34);
assert.equal(bank.filter(q => q.keyVerdict === 'noanswer').length, 6);
assert.equal(Object.keys(topics.lessons).length, 27);
for (const id of ['crs-2005-q44', 'crs-2006-q42', 'crs-2007-q20', 'crs-2008-q17', 'crs-2008-q38']) assert.equal(topics.of[key(bank.find(q => q.id === id))], 'joshua-judges');
for (const lesson of Object.values(topics.lessons)) {
  const words = lesson.body.split(/\s+/).length;
  assert(words >= 300 && words <= 450, lesson.title);
}
const repeatGroups = new Map();
for (const [id, group] of Object.entries(topics.repeats)) {
  const q = bank.find(q => q.id === id); assert(q?.year && !q.administrative);
  const rows = repeatGroups.get(group) || []; rows.push(q); repeatGroups.set(group, rows);
}
assert.equal(repeatGroups.size, 41);
assert.equal(Object.keys(topics.repeats).length, 83);
assert.equal(topics.repeats['crs-2005-q31'], topics.repeats['crs-2010-q19']);
for (const rows of repeatGroups.values()) assert(new Set(rows.map(q => q.year)).size >= 2);
for (const [year, count] of Object.entries({2005:9,2006:12,2007:11,2008:9,2009:17,2010:24,2011:23,2012:21})) {
  const rows = bank.filter(q => q.year === Number(year) && /The trap:/.test(teach[key(q)]));
  assert.equal(rows.length, count, 'Authored traps for '+year);
  for (const q of rows) assert(!/Reference:|Bible reference:/.test(teach[key(q)].split('The trap:')[1]));
}
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'content-manifest.json')));
assert.equal(manifest.subjects.crs.repeats, 41);
assert.equal(manifest.subjects.crs.tricky.none, 5);
console.log('PASS repeat provenance, all authored traps, and administrative exclusion from tricky metadata');
console.log('PASS all 600 source items, printed-key provenance, 50 starter explanations and 27 topic lessons');
(async () => {
  const browser = await chromium.launch({ executablePath: '/usr/bin/chromium', args: ['--no-sandbox'] });
  try {
    const ctx = await browser.newContext();
    await ctx.route('**/*', r => r.request().url().startsWith(base) ? r.continue() : r.abort());
    const page = await ctx.newPage(); const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.goto(base);
    await page.waitForFunction(() => window.JambContent?.manifest && document.querySelector('#subjectSelect')?.options.length > 1);
    await page.locator('#studentName').fill('CRS import check');
    await page.locator('#loginBtn').click();
    await page.locator('.config-btn[data-group="session"][data-value="single"]').click();
    await page.locator('.config-btn[data-group="mode"][data-value="practice"]').click();
    await page.locator('#subjectSelect').selectOption('crs');
    for (let year = Number(process.env.JAMB_BROWSER_FROM || 2001); year <= 2012; year++) {
      // Each paper is a fresh trial in this isolated browser fixture.
      // Keep the production ten-session limit and payment logic unchanged.
      await page.evaluate(() => localStorage.removeItem('jamb-free-v1'));
      await page.locator('#yearSelect').selectOption(String(year));
      await page.locator('#questionCountSelect').selectOption('all');
      await page.locator('#startBtn').click();
      const qs = bank.filter(q => q.year === year);
      await page.waitForFunction(text => document.querySelector('#questionText')?.textContent === text, qs[0].question);
      for (let i = 0; i < qs.length; i++) {
        const q = qs[i];
        assert.equal(await page.locator('#questionText').innerText(), q.question);
        const answer = q.keyVerdict === 'noanswer' ? (q.answer + 1) % 4 : q.alsoAccept?.[0] ?? q.answer;
        await page.locator('#optionsList .option-btn').nth(answer).click();
        assert(await page.locator('#optionsList .option-btn').nth(answer).evaluate((n, noAnswer) => n.classList.contains(noAnswer ? 'no-answer' : 'correct') && n.classList.contains('selected'), q.keyVerdict === 'noanswer'));
        if (topics.repeats[q.id]) {
          const note = await page.locator('.repeat-note').innerText(); assert(note.includes('tested this point'));
          for (const row of repeatGroups.get(topics.repeats[q.id])) assert(note.includes(String(row.year)));
        }
        if (q.keyVerdict) await page.locator('#explanationBox .key-check').waitFor({ state: 'visible' });
        if (i < qs.length - 1) await page.locator('#nextBtn').click();
      }
      await page.locator('#submitBtn').click();
      await page.locator('#resultScore').waitFor({ state: 'visible' });
      assert.equal(await page.locator('#resultScore').textContent(), '100%');
      console.log(`PASS CRS ${year}: 50 questions rendered, accepted alternatives scored and notes displayed`);
      await page.locator('#restartBtn').click();
    }
    await page.locator('#jambRepeatBanner').click();
    assert((await page.locator('.repeat-subject[data-subject="crs"] .gtc-sub').innerText()).includes('41'));
    await page.locator('#jambRepeatClose').click();
    await page.locator('#jambBookletBanner').click();
    await page.locator('#bkSubjectSelect').selectOption('crs');
    await page.waitForFunction(() => document.querySelectorAll('#jambBookletBody .trap-item').length === 31);
    await page.locator('#jambBookletClose').click();
    await page.locator('#jambKeyPointsBanner').click();
    await page.locator('#kpSubjectSelect').selectOption('crs');
    await page.waitForFunction(() => document.querySelectorAll('#jambKeyPointsBody details, #jambKeyPointsBody [data-locked]').length === 27);
    await page.locator('#jambKeyPointsClose').click();
    await page.locator('#jambTrapsBanner').click();
    await page.locator('#trapSubjectSelect').selectOption('crs');
    await page.locator('#jambTrapsBody details').first().waitFor();
    await page.locator('#jambTrapsClose').click();
    await page.locator('#jambTrickyBanner').click();
    assert(await page.locator('.tricky-subject[data-subject="crs"][data-kind="multi"]').count());
    assert.equal((await page.locator('.tricky-subject[data-subject="crs"][data-kind="none"] .gtc-sub').innerText()).trim(), '5 questions');
    assert.deepEqual(errors, []);
    await page.evaluate(async () => { await navigator.serviceWorker.ready; });
    await ctx.setOffline(true); await page.reload();
    await page.waitForFunction(() => window.JambContent?.manifest && document.querySelector('#subjectSelect')?.options.length > 1);
    assert(await page.evaluate(() => JambContent.run('Offline CRS', () => JambContent.ensure(['crs']))));
    assert.equal(await page.evaluate(() => QUESTION_BANK.crs.length), 650);
    assert.equal(await page.evaluate(() => Object.keys(window.TEACH_ME.crs).length), 650);
    assert.equal(await page.evaluate(() => Object.keys(window.TEACH_TOPICS.crs.repeats).length), 83);
    console.log('PASS CRS Wrong Answers, Key Points, Exam Traps, Tricky Questions and offline teaching data');
    await ctx.close();
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
