// Import and phone-browser check for the supplied Commerce 2001–2004 papers.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const root = path.resolve(__dirname, '..');
const context = vm.createContext({ window: {} });
const load = file => vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
load('questions.js');
for (let year = 2001; year <= 2004; year++) load(`past-questions/commerce-${year}.js`);
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
assert.equal(bank.length, 200);
assert.equal(new Set(bank.map(q => q.id)).size, 200);
for (let year = 2001; year <= 2004; year++) {
  const qs = bank.filter(q => q.year === year);
  assert.equal(printed[year].length, 50);
  assert.equal(qs.length, 50);
  assert.deepEqual(qs.map(q => q.paperQuestion), Array.from({ length: 50 }, (_, i) => i + 1));
  for (const q of qs) {
    assert.equal(q.id, `commerce-${year}-q${q.paperQuestion}`);
    assert.equal(q.printedKey, printed[year][q.paperQuestion - 1], q.id);
    assert.equal(q.options.length, 4);
    assert(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4);
    assert(q.explanation.length > 30);
    assert(q.sourceFile && q.sourcePages.length);
    assert(teach[q.teachKey]?.length > 100, q.id);
    assert(topics.lessons[topics.of[q.teachKey]], q.id);
    if (q.reviewPending) {
      assert.equal(q.answer, 'ABCD'.indexOf(q.printedKey));
      assert.equal(q.keyVerdict, 'pending'); assert(q.answerNote);
      assert.equal(q.alsoAccept, undefined);
    }
    if (q.bookletKey) {
      assert.notEqual('ABCD'[q.answer], q.bookletKey);
      assert.equal(q.keyVerdict, 'corrected'); assert(q.bookletNote);
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
assert.equal(manifest.subjects.commerce.count, 200);
assert.equal(manifest.subjects.commerce.gameCount, bank.filter(q => !q.reviewPending && !q.alsoAccept && !['none', 'noanswer'].includes(q.keyVerdict)).length);
console.log(`PASS Commerce data: 200 source records, keys, prepared teaching, ${Object.keys(topics.lessons).length} lessons and reviewed repeat groups`);

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
    for (let year = 2001; !process.env.COMMERCE_HUBS_ONLY && year <= 2004; year++) {
      await page.evaluate(() => localStorage.removeItem('jamb-free-v1'));
      await page.locator('#yearSelect').selectOption(String(year));
      await page.locator('#questionCountSelect').selectOption('all');
      await page.locator('#startBtn').click();
      const qs = bank.filter(q => q.year === year);
      await page.waitForFunction(text => document.querySelector('#questionText')?.textContent === text, qs[0].question);
      for (let i = 0; i < qs.length; i++) {
        const q = qs[i];
        assert.equal((await page.locator('#questionText').innerText()).replace(/\s+/g, ' ').trim(), q.question.replace(/\s+/g, ' ').trim());
        assert.equal(await page.locator('#optionsList .option-btn').count(), 4);
        if (q.diagram) {
          assert(await page.locator('#diagramBox').isVisible());
          assert(await page.locator('#diagramBox img').evaluate(img => img.complete && img.naturalWidth > 0));
        }
        if (q.reviewPending) {
          const other = (q.answer + 1) % 4;
          await page.locator('#optionsList .option-btn').nth(other).click();
          assert(await page.locator('#optionsList .option-btn').nth(other).evaluate(n => !n.classList.contains('correct') && !n.classList.contains('wrong')));
          assert((await page.locator('#explanationBox').innerText()).includes('Answer review pending'));
        }
        await page.locator('#optionsList .option-btn').nth(q.answer).click();
        assert(await page.locator('#optionsList .option-btn').nth(q.answer).evaluate((n, pending) => n.classList.contains(pending ? 'key-only' : 'correct'), !!q.reviewPending));
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
    await page.locator('#jambBookletClose').click();
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
    assert.equal(await page.evaluate(() => QUESTION_BANK.commerce.length), 200);
    assert.equal(await page.evaluate(() => Object.keys(window.TEACH_ME.commerce).length), 200);
    assert.equal(await page.evaluate(() => Object.keys(window.TEACH_TOPICS.commerce.lessons).length), Object.keys(topics.lessons).length);
    assert.deepEqual(errors, []);
    console.log('PASS Commerce study hubs and offline content preservation');
    await ctx.close();
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
