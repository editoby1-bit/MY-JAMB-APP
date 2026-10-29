// Import and phone-browser check for the supplied Commerce 2001–2012 papers.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const root = path.resolve(__dirname, '..');
const context = vm.createContext({ window: {} });
const load = file => vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
load('questions.js');
for (let year = 2001; year <= 2012; year++) load(`past-questions/commerce-${year}.js`);
load('teach/commerce.js'); load('teach/commerce-topics.js');
const bank = JSON.parse(vm.runInContext('JSON.stringify(QUESTION_BANK.commerce)', context));
const teach = context.window.TEACH_ME.commerce;
const topics = context.window.TEACH_TOPICS.commerce;
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'content-manifest.json')));
const printed = {
  2001: 'BCABCBACCCCCDDDABDABBDBDADCCCDCCCCDDDACCCDCABCABCC',
  2002: 'CBACCDBAAADADCDBDDBDACAABDDBCABDCCABDDBABDABDADCBB',
  2003: 'ADDDCCAADBADCDDACBDABCAAADDACABCDCCADBABAACABABAAB',
  2004: 'BACDADAAADBDCBCBBADBADCDABCBCACBBDABCDAACADCDBDAAD'
};
Object.assign(printed, {"2005": ["A", "D", "C", "D", "D", "A", "D", "A", "B", "C", "C", "B", "C", "A", "C", "B", "B", "A", "C", "B", "B", "B", "D", "A", "C", "C", "B", "C", "D", "C", "B", "C", "B", "A", "B", "A", "D", "B", "C/D", "D", "B", "A", "A", "B", "A", "B", "A", "A", "C", "D"], "2006": ["D", "B", "C", "C", "A", "A", "B", "A", "C", "D", "C", "D", "C", "A", "A", "D", "D", "D", "A", "B", "A", "D", "C", "B", "D", "A", "C", "D", "A", "C", "A", "B", "B", "C", "D", "A", "D", "B", "C", "D", "D", "D", "A", "C", "D", "B", "B", "D", "C", "C"], "2007": ["D", "D", "C", "D", "A", "C", "A", "C", "D", "D", "B", "D", "C", "A", "B", "D", "B", "C", "B", "C", "A", "C", "A", "B", "C", "A", "C", "B", "A", "B", "A", "B", "A", "D", "B", "D", "C", "B", "A", "B", "C", "A", "D", "D", "A", "D", "B", "A", "C", "B"], "2008": ["A", "D", "B", "B", "D", "B", "A", "C", "A", "A", "A", "B", "B", "C", "B", "C", "C", "C", "A", "A", "B", "B", "C", "B", "B", "C", "B", "B", "C", "C", "C", "C", "C", "D", "D", "A", "B", "A", "B", "B", "B", "C", "C", "D", "C", "C", "A", "C", "B", "C"]});
Object.assign(printed, {"2009": ["C", "B", "C", "A", "C", "D", "A", "C", "D", "A", "D", "B", "A", "C", "B", "C", "C", "B", "A", "B", "B", "B", "A", "B", "D", "B", "B", "C", "A", "A", "A", "D", "C", "B", "B", "A", "D", "D", "D", "A", "D", "B", "C", "C", "D", "C", "A", "D", "C", "D"], "2010": ["*", "B", "A", "B", "C", "C", "A", "C", "D", "A", "C", "B", "C", "C", "C", "D", "C", "A", "C", "C", "B", "D", "D", "B", "C", "B", "C", "A", "A", "D", "D", "C", "B", "D", "C", "A", "B", "D", "A", "A", "C", "D", "C", "A", "D", "A", "C", "C", "D", "D"], "2011": ["*", "C", "D", "C", "B", "C", "D", "A", "A", "B", "*", "C", "B", "A", "A", "B", "B", "A", "A", "A", "B", "C", "D", "A", "D", "A", "B", "D", "A", "C", "C", "D", "D", "C", "C", "A", "D", "C", "B", "B", "C", "A", "C", "B", "D", "A", "D", "C", "C", "A"], "2012": ["*", "B", "B", "C", "C", "B", "A", "D", "D", "D", "B", "D", "B", "C", "D", "A", "A", "B", "D", "B", "C", "D", "C", "D", "C", "D", "A", "B", "B", "D", "B", "C", "D", "D", "A", "B", "D", "B", "C", "D", "A", "B", "B", "A", "C", "A", "B", "C", "A", "C"]});
assert.equal(bank.length, 600);
assert.equal(new Set(bank.map(q => q.id)).size, 600);
for (let year = 2001; year <= 2012; year++) {
  const qs = bank.filter(q => q.year === year);
  assert.equal(printed[year].length, 50);
  assert.equal(qs.length, 50);
  assert.deepEqual(qs.map(q => q.paperQuestion), Array.from({ length: 50 }, (_, i) => i + 1));
  for (const q of qs) {
    assert.equal(q.id, `commerce-${year}-q${q.paperQuestion}`);
    assert.equal(q.printedKey, printed[year][q.paperQuestion - 1], q.id);
    assert.equal(q.options.length, ['commerce-2005-q39', 'commerce-2007-q26'].includes(q.id) ? 3 : 4, q.id);
    assert(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length);
    assert(q.explanation.length > 30);
    if (q.keyVerdict && q.answerNote) assert.equal(q.keyAnswer, q.printedKey, q.id + ' source-key display');
    assert(q.sourceFile && q.sourcePages.length);
    assert(teach[q.teachKey]?.length > 100, q.id);
    if (q.year >= 2009) { const words = teach[q.teachKey].trim().split(/\s+/).length; assert(words >= 100 && words <= 180, q.id + ' teaching length'); }
    assert(topics.lessons[topics.of[q.teachKey]], q.id);
    if (q.reviewPending) {
      assert.equal(q.answer, 'ABCD'.indexOf(q.printedKey));
      assert.equal(q.keyVerdict, 'pending'); assert(q.answerNote);
      assert.equal(q.alsoAccept, undefined);
    }
    if (q.bookletKey) {
      if (q.keyVerdict !== 'noanswer') {
        assert.notEqual('ABCD'[q.answer], q.bookletKey);
        assert.equal(q.keyVerdict, 'corrected');
      }
      assert(q.bookletNote);
    }
  }
}
for (const lesson of Object.values(topics.lessons)) {
  const words = lesson.body.trim().split(/\s+/).length;
  assert(words >= 300 && words <= 450, lesson.title + ': ' + words);
}
const groupRows = new Map();
for (const [id, group] of Object.entries(topics.repeats || {})) {
  const q = bank.find(q => q.id === id); assert(q);
  const rows = groupRows.get(group) || []; rows.push(q); groupRows.set(group, rows);
}
for (const rows of groupRows.values()) assert(new Set(rows.map(q => q.year)).size >= 2);
assert.equal(manifest.subjects.commerce.count, 600);
assert.equal(bank.filter(q => q.reviewPending).length, 0);
assert.equal(bank.filter(q => q.year <= 2004 && q.keyVerdict === 'corrected').length, 21);
assert.equal(bank.filter(q => q.year <= 2004 && q.keyVerdict === 'multiple').length, 7);
assert.equal(bank.filter(q => q.year <= 2004 && q.keyVerdict === 'noanswer').length, 2);
assert.deepEqual(bank.find(q => q.id === 'commerce-2001-q46').alsoAccept, [0, 3]);
assert.equal(bank.find(q => q.id === 'commerce-2004-q31').answer, 3);
assert.equal(bank.find(q => q.id === 'commerce-2002-q48').answer, 1);
assert.equal(bank.find(q => q.id === 'commerce-2003-q43').answer, 3);
for (const [id, primary] of [['commerce-2003-q28', 2], ['commerce-2003-q30', 1]]) { const q = bank.find(q => q.id === id); assert.equal(q.answer, primary); assert.deepEqual(q.alsoAccept, [0]); }
assert(bank.find(q => q.id === 'commerce-2001-q13').answerNote.includes('570'));
assert(bank.find(q => q.id === 'commerce-2001-q21').answerNote.includes('2,764.50'));
assert.equal(manifest.subjects.commerce.tricky.multi, bank.filter(q => q.alsoAccept?.length).length);
assert.equal(manifest.subjects.commerce.tricky.none, bank.filter(q => !q.administrative && ['none', 'noanswer'].includes(q.keyVerdict)).length);
assert.equal(manifest.subjects.commerce.gameCount, bank.filter(q => !q.reviewPending && !q.alsoAccept && !['none', 'noanswer'].includes(q.keyVerdict)).length);
console.log(`PASS Commerce data: 600 source records, keys, prepared teaching, ${Object.keys(topics.lessons).length} lessons and reviewed repeat groups`);

(async () => {
  const browser = await chromium.launch({ executablePath: '/usr/bin/chromium', headless: true, args: ['--no-sandbox'] });
  const errors = [];
  try {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await ctx.newPage(); page.on('pageerror', e => errors.push(e.message));
    await page.goto(process.env.JAMB_TEST_URL || 'http://127.0.0.1:8001/');
    await page.waitForFunction(() => window.JambContent?.manifest && document.querySelector('#subjectSelect')?.options.length > 1);
    await page.locator('#studentName').fill('Commerce import check');
    await page.locator('#loginBtn').click();
    await page.locator('.config-btn[data-group="session"][data-value="single"]').click();
    await page.locator('.config-btn[data-group="mode"][data-value="practice"]').click();
    await page.locator('#subjectSelect').selectOption('commerce');
    for (let year = Number(process.env.COMMERCE_BROWSER_FROM || 2001); !process.env.COMMERCE_HUBS_ONLY && year <= Number(process.env.COMMERCE_BROWSER_TO || 2012); year++) {
      await page.evaluate(() => localStorage.removeItem('jamb-free-v1'));
      await page.locator('#yearSelect').selectOption(String(year));
      await page.locator('#questionCountSelect').selectOption('all');
      await page.locator('#startBtn').click();
      const qs = bank.filter(q => q.year === year);
      await page.waitForFunction(text => document.querySelector('#questionText')?.textContent === text, qs[0].question);
      for (let i = 0; i < qs.length; i++) {
        const q = qs[i];
        assert.equal((await page.locator('#questionText').innerText()).replace(/\s+/g, ' ').trim(), q.question.replace(/\s+/g, ' ').trim());
        assert.equal(await page.locator('#optionsList .option-btn').count(), q.options.length);
        if (q.diagram) {
          assert(await page.locator('#diagramBox').isVisible());
          await page.waitForFunction(() => {
            const img = document.querySelector('#diagramBox img');
            return img?.complete && img.naturalWidth > 0;
          });
          assert(await page.locator('#diagramBox img').evaluate(img => img.complete && img.naturalWidth > 0));
        }
        if (q.reviewPending) {
          const other = (q.answer + 1) % 4;
          await page.locator('#optionsList .option-btn').nth(other).click();
          assert(await page.locator('#optionsList .option-btn').nth(other).evaluate(n => !n.classList.contains('correct') && !n.classList.contains('wrong')));
          assert((await page.locator('#explanationBox').innerText()).includes('Answer review pending'));
        }
        const accepted = q.keyVerdict === 'noanswer' ? [0, 1, 2, 3] : [q.answer, ...(q.alsoAccept || [])];
        for (const answer of accepted) {
          await page.locator('#optionsList .option-btn').nth(answer).click();
          assert(await page.locator('#optionsList .option-btn').nth(answer).evaluate((n, mode) => n.classList.contains(mode === 'noanswer' ? 'no-answer' : mode === 'pending' ? 'key-only' : 'correct'), q.keyVerdict));
        }
        if (q.keyVerdict === 'noanswer') {
          assert.equal(await page.locator('#optionsList .option-btn.correct, #optionsList .option-btn.wrong').count(), 0);
          assert((await page.locator('#explanationBox').innerText()).includes(q.administrative ? 'Original exam instruction' : 'None of the four options is correct'));
        }
        if (i < qs.length - 1) await page.locator('#nextBtn').click();
      }
      await page.locator('#submitBtn').click();
      await page.locator('#resultScore').waitFor({ state: 'visible' });
      assert.equal(await page.locator('#resultScore').textContent(), '100%');
      console.log(`PASS Commerce ${year}: all 50 questions, scoring, notes and source diagrams`);
      await page.locator('#restartBtn').click();
    }
    await page.locator('#jambRepeatBanner').click();
    assert((await page.locator('.repeat-subject[data-subject="commerce"] .gtc-sub').innerText()).includes(String(groupRows.size)));
    await page.locator('#jambRepeatClose').click();
    await page.locator('#jambBookletBanner').click();
    await page.locator('#bkSubjectSelect').selectOption('commerce');
    await page.waitForFunction(count => document.querySelectorAll('#jambBookletBody .trap-item').length === count, bank.filter(q => q.bookletKey).length);
    assert.equal(await page.locator('#jambBookletBody .bk-verdict').filter({ hasText: 'No fully correct option' }).count(), bank.filter(q => q.bookletKey && q.keyVerdict === 'noanswer').length);
    for (const item of await page.locator('#jambBookletBody .trap-item').all()) {
      if ((await item.locator('.bk-verdict').innerText()).includes('No fully correct option')) {
        assert.equal(await item.locator('.bk-right').count(), 0);
      }
    }
    await page.locator('#jambBookletClose').click();
    await page.locator('#jambTrickyBanner').click();
    assert.equal((await page.locator('.tricky-subject[data-subject="commerce"][data-kind="multi"] .gtc-sub').innerText()).trim(), `${manifest.subjects.commerce.tricky.multi} questions`);
    assert.equal((await page.locator('.tricky-subject[data-subject="commerce"][data-kind="none"] .gtc-sub').innerText()).trim(), `${manifest.subjects.commerce.tricky.none} questions`);
    await page.locator('#jambTrickyClose').click();
    await page.locator('#jambKeyPointsBanner').click();
    await page.locator('#kpSubjectSelect').selectOption('commerce');
    await page.locator('#jambKeyPointsBody details, #jambKeyPointsBody [data-locked]').first().waitFor();
    await page.locator('#jambKeyPointsClose').click();
    await page.locator('#jambTrapsBanner').click();
    await page.locator('#trapSubjectSelect').selectOption('commerce');
    await page.locator('#jambTrapsBody details').first().waitFor();
    await page.locator('#jambTrapsClose').click();
    await page.evaluate(async () => { await navigator.serviceWorker.ready; });
    await ctx.setOffline(true); await page.reload();
    await page.waitForFunction(() => window.JambContent?.manifest);
    assert(await page.evaluate(() => JambContent.run('Offline Commerce', () => JambContent.ensure(['commerce']))));
    assert.equal(await page.evaluate(() => QUESTION_BANK.commerce.length), 600);
    assert.equal(await page.evaluate(() => Object.keys(window.TEACH_ME.commerce).length), 600);
    assert.equal(await page.evaluate(() => Object.keys(window.TEACH_TOPICS.commerce.lessons).length), Object.keys(topics.lessons).length);
    assert.deepEqual(errors, []);
    console.log('PASS Commerce study hubs and offline content preservation');
    await ctx.close();
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
