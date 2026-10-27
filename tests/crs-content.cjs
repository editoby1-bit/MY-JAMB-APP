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
for (let year = 2001; year <= 2008; year++) load(`past-questions/crs-${year}.js`);
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
  2008: 'BCABCBBDBDDCDBBDCACBDABCAADAABACACDDCADABACACCBCBC'
};
assert.equal(bank.length, 450);
assert.equal(new Set(bank.filter(q => q.year).map(q => q.id)).size, 400);
for (const q of bank) {
  assert.equal(q.options.length, 4); assert(q.explanation);
  assert(teach[key(q)]?.length > 100); assert(topics.lessons[topics.of[key(q)]]);
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
for (let year = 2001; year <= 2008; year++) {
  const qs = bank.filter(q => q.year === year);
  assert.equal(qs.length, 50);
  assert.deepEqual(qs.map(q => q.paperQuestion), Array.from({ length: 50 }, (_, i) => i + 1));
}
assert.equal(bank.filter(q => q.bookletKey).length, 24);
assert.equal(bank.filter(q => q.alsoAccept).length, 27);
assert.equal(bank.filter(q => q.keyVerdict === 'noanswer').length, 1);
assert.equal(Object.keys(topics.lessons).length, 20);
for (const id of ['crs-2005-q44', 'crs-2006-q42', 'crs-2007-q20', 'crs-2008-q17', 'crs-2008-q38']) assert.equal(topics.of[key(bank.find(q => q.id === id))], 'joshua-judges');
for (const lesson of Object.values(topics.lessons)) {
  const words = lesson.body.split(/\s+/).length;
  assert(words >= 300 && words <= 450, lesson.title);
}
console.log('PASS all 400 paper questions, printed-key provenance, 50 starter explanations and 20 topic lessons');
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
    for (let year = 2001; year <= 2008; year++) {
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
        if (q.keyVerdict) await page.locator('#explanationBox .key-check').waitFor({ state: 'visible' });
        if (i < qs.length - 1) await page.locator('#nextBtn').click();
      }
      await page.locator('#submitBtn').click();
      await page.locator('#resultScore').waitFor({ state: 'visible' });
      assert.equal(await page.locator('#resultScore').textContent(), '100%');
      console.log(`PASS CRS ${year}: 50 questions rendered, accepted alternatives scored and notes displayed`);
      await page.locator('#restartBtn').click();
    }
    await page.locator('#jambBookletBanner').click();
    await page.locator('#bkSubjectSelect').selectOption('crs');
    await page.waitForFunction(() => document.querySelectorAll('#jambBookletBody .trap-item').length === 24);
    await page.locator('#jambBookletClose').click();
    await page.locator('#jambKeyPointsBanner').click();
    await page.locator('#kpSubjectSelect').selectOption('crs');
    await page.waitForFunction(() => document.querySelectorAll('#jambKeyPointsBody details, #jambKeyPointsBody [data-locked]').length === 20);
    await page.locator('#jambKeyPointsClose').click();
    await page.locator('#jambTrapsBanner').click();
    await page.locator('#trapSubjectSelect').selectOption('crs');
    await page.locator('#jambTrapsBody details').first().waitFor();
    await page.locator('#jambTrapsClose').click();
    await page.locator('#jambTrickyBanner').click();
    assert(await page.locator('.tricky-subject[data-subject="crs"][data-kind="multi"]').count());
    assert.deepEqual(errors, []);
    await page.evaluate(async () => { await navigator.serviceWorker.ready; });
    await ctx.setOffline(true); await page.reload();
    await page.waitForFunction(() => window.JambContent?.manifest && document.querySelector('#subjectSelect')?.options.length > 1);
    assert(await page.evaluate(() => JambContent.run('Offline CRS', () => JambContent.ensure(['crs']))));
    assert.equal(await page.evaluate(() => QUESTION_BANK.crs.length), 450);
    assert.equal(await page.evaluate(() => Object.keys(window.TEACH_ME.crs).length), 450);
    console.log('PASS CRS Wrong Answers, Key Points, Exam Traps, Tricky Questions and offline teaching data');
    await ctx.close();
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
