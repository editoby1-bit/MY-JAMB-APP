// Development check: run with Playwright installed and app served on port 8001.
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');
const base = process.env.JAMB_TEST_URL || 'http://127.0.0.1:8001/';
const root = path.resolve(__dirname, '..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'content-manifest.json')));
const hash = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const flatten = bank => Object.fromEntries(Object.entries(bank).map(([subject, arr]) => [subject, arr.flatMap((entry, gi) => !Array.isArray(entry.questions) ? [entry] : entry.questions.map((q, k) => ({ ...q, year: q.year ?? entry.year, passage: entry.passage, passageId: entry.passageId || `${subject}-passage-${gi}`, passageTitle: entry.passageTitle || 'Passage', passageInstruction: entry.instruction || '', passagePart: k + 1, passageSize: entry.questions.length })))]));
function reference() {
  const context = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(path.join(root, 'questions.js'), 'utf8'), context);
  const scripts = [...new Set(Object.values(manifest.subjects).flatMap(s => s.scripts))];
  for (const file of scripts) vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context);
  return { bank: flatten(JSON.parse(vm.runInContext('JSON.stringify(QUESTION_BANK)', context))), teach: JSON.parse(JSON.stringify(context.window.TEACH_ME)), topics: JSON.parse(JSON.stringify(context.window.TEACH_TOPICS)), booklet: JSON.parse(JSON.stringify(context.window.BOOKLET_ERRORS)) };
}
async function ready(page) {
  await page.goto(base);
  await page.waitForFunction(() => window.JambContent?.manifest && document.getElementById('subjectSelect')?.options.length > 1);
}
async function choose(page, subject) {
  await page.locator('#studentName').fill('Offline test');
  await page.locator('#loginBtn').click();
  await page.locator('.config-btn[data-group="session"][data-value="single"]').click();
  await page.locator('.config-btn[data-group="mode"][data-value="practice"]').click();
  await page.locator('#subjectSelect').selectOption(subject);
}
const passed = name => console.log('PASS ' + name);
(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium', args: ['--no-sandbox'] });
  const contexts = [];
  async function create(options = {}) {
    const context = await browser.newContext(options); contexts.push(context);
    await context.route('**/*', route => route.request().url().startsWith(base) ? route.continue() : route.abort());
    return context;
  }
  try {
    const expected = reference();
    const context = await create(); const page = await context.newPage();
    const errors = []; page.on('pageerror', e => errors.push(e.message));
    const requests = []; page.on('request', req => requests.push(req.url()));
    await ready(page);
    assert(!requests.some(url => /\/(past-questions|teach|booklet)\//.test(url)));
    assert.equal(await page.locator('#statQuestions').textContent(), String(Object.values(expected.bank).reduce((total, qs) => total + qs.length, 0)));
    passed('cold start fetches no subject content and retains full bank total');
    await choose(page, 'mathematics');
    const originalYearOptions = await page.locator('#yearSelect option').allTextContents();
    await page.locator('#yearSelect').selectOption('2008');
    await page.locator('#startBtn').click();
    await page.waitForFunction(() => JambContent.isLoaded('mathematics'));
    await page.getByText('Question 1 of 10', { exact: true }).waitFor();
    assert.deepEqual(await page.evaluate(() => JSON.parse(JSON.stringify(QUESTION_BANK.mathematics))), expected.bank.mathematics);
    assert(!requests.some(url => /past-questions\/(english|economics)-/.test(url)));
    await page.evaluate(() => document.getElementById('subjectSelect').dispatchEvent(new Event('change')));
    assert.deepEqual(await page.locator('#yearSelect option').allTextContents(), originalYearOptions);
    assert.deepEqual(errors, []);
    passed('selected paper opens; full Mathematics content preserved; other subjects untouched');

    // Load every package to prove all content, passages and lookup tables survive.
    assert(await page.evaluate(() => JambContent.run('Check subjects', () => JambContent.ensure(Object.keys(QUESTION_BANK)))));
    assert.deepEqual(await page.evaluate(() => JSON.parse(JSON.stringify(QUESTION_BANK))), expected.bank);
    assert.deepEqual(await page.evaluate(() => window.TEACH_ME), expected.teach);
    assert.deepEqual(await page.evaluate(() => window.TEACH_TOPICS), expected.topics);
    assert.deepEqual(await page.evaluate(() => window.BOOKLET_ERRORS), expected.booklet);
    passed('all question fields, passages, prepared explanations, lessons and booklet rulings match the original content');

    await page.evaluate(async () => {
      await caches.open('my-exams-app-test-sentinel');
      await navigator.serviceWorker.ready;
      if (!navigator.serviceWorker.controller) await new Promise(resolve => navigator.serviceWorker.addEventListener('controllerchange', resolve, { once: true }));
    });
    await context.setOffline(true);
    await ready(page);
    await choose(page, 'mathematics');
    await page.locator('#yearSelect').selectOption('2008');
    await page.locator('#startBtn').click();
    await page.getByText('Question 1 of 10', { exact: true }).waitFor();
    const image = manifest.subjects.mathematics.images[0];
    assert(image);
    assert.equal(await page.evaluate(async file => (await fetch(file)).status, image), 200);
    assert(await page.evaluate(() => caches.has('my-exams-app-test-sentinel')));
    passed('fresh offline page opens saved paper and diagram; unrelated app cache survives');
    await context.setOffline(false);

    // Upgrade an older installation without throwing away its downloaded files.
    const legacyContext = await create(); const legacy = await legacyContext.newPage();
    await ready(legacy);
    await legacy.evaluate(async files => {
      await navigator.serviceWorker.ready;
      if (!navigator.serviceWorker.controller) await new Promise(resolve => navigator.serviceWorker.addEventListener('controllerchange', resolve, { once: true }));
      const old = await caches.open('jamb-app-v1');
      for (const file of files) await old.put(file, await fetch(file));
    }, [...manifest.subjects.mathematics.scripts, ...manifest.subjects.mathematics.images]);
    await legacyContext.setOffline(true);
    assert(await legacy.evaluate(() => JambContent.run('Old saved papers', () => JambContent.ensure(['mathematics']))));
    assert.deepEqual(await legacy.evaluate(() => JSON.parse(JSON.stringify(QUESTION_BANK.mathematics))), expected.bank.mathematics);
    passed('previous-version cached papers migrate and open offline without redownloading');

    // Exercise every content-dependent landing point from a fresh app.
    const hubContext = await create({ serviceWorkers: 'block' }); const hub = await hubContext.newPage();
    const hubErrors = []; hub.on('pageerror', e => hubErrors.push(e.message));
    await ready(hub); await choose(hub, 'economics');
    for (const [banner, modal, body] of [
      ['jambKeyPointsBanner', 'jambKeyPointsModal', 'jambKeyPointsBody'],
      ['jambTrapsBanner', 'jambTrapsModal', 'jambTrapsBody'],
      ['jambBookletBanner', 'jambBookletModal', 'jambBookletBody']
    ]) {
      await hub.locator('#' + banner).click();
      await hub.locator('#' + body + ' details').first().waitFor();
      assert(await hub.evaluate(() => JambContent.isLoaded('economics')));
      assert.equal(await hub.evaluate(() => JambContent.isLoaded('english')), false);
      // Existing close button, scoped to the active dialog.
      await hub.locator('#' + modal + ' button').filter({ hasText: /✕|×/ }).first().click();
    }
    await hub.locator('#jambRepeatBanner').click();
    await hub.locator('.repeat-subject[data-subject="economics"]').click();
    await hub.getByText(/Question 1 of/).first().waitFor();
    assert.deepEqual(hubErrors, []);
    passed('Key Points, Exam Traps, Wrong Answers and repeat practice prepare only the chosen subject');

    const comboContext = await create({ serviceWorkers: 'block' }); const combo = await comboContext.newPage();
    await ready(combo); await choose(combo, 'mathematics');
    await combo.locator('.config-btn[data-group="session"][data-value="combo"]').click();
    await combo.locator('#startBtn').click();
    await combo.waitForFunction(() => JambContent.isLoaded('english') && JambContent.isLoaded('mathematics') && JambContent.isLoaded('physics') && JambContent.isLoaded('chemistry'));
    await combo.getByText(/Question 1 of/).first().waitFor();
    assert.equal(await combo.evaluate(() => JambContent.isLoaded('government')), false);
    passed('four-subject combo prepares required subjects without loading unrelated subjects');

    // A failed new download must leave the bank and free-session counter untouched.
    const failContext = await create({ serviceWorkers: 'block' }); const failure = await failContext.newPage();
    await ready(failure); await choose(failure, 'english');
    await failure.setViewportSize({ width: 375, height: 812 });
    const before = await failure.evaluate(() => ({ count: QUESTION_BANK.english.length, free: localStorage.getItem('jamb-free-v1') }));
    let blocked = true;
    await failure.route('**/past-questions/english-2004.js?*', route => blocked ? route.abort() : route.continue());
    await failure.locator('#startBtn').click();
    await failure.locator('#contentLoading [data-retry]').waitFor({ state: 'visible' });
    const dialogBox = await failure.locator('#contentLoading section').boundingBox();
    assert(dialogBox.width <= 375 && dialogBox.x >= 0);
    await failure.screenshot({ path: '/tmp/jamb-download-retry-mobile.png' });
    const after = await failure.evaluate(() => ({ count: QUESTION_BANK.english.length, free: localStorage.getItem('jamb-free-v1') }));
    assert.deepEqual(after, before);
    assert.equal(await failure.evaluate(() => JambContent.isLoaded('english')), false);
    blocked = false; await failure.locator('[data-retry]').click();
    await failure.getByText('Question 1 of 10', { exact: true }).waitFor();
    assert.deepEqual(await failure.evaluate(() => JSON.parse(JSON.stringify(QUESTION_BANK.english))), expected.bank.english);
    assert(await failure.evaluate(() => JambContent.run('Again', () => JambContent.ensure(['english']))));
    assert.equal(await failure.evaluate(() => QUESTION_BANK.english.length), expected.bank.english.length);
    passed('interrupted package: no partial questions or free-session charge; retry does not duplicate passages');

    // Tampering is refused even when a server returns HTTP 200.
    const corruptContext = await create({ serviceWorkers: 'block' }); const corrupt = await corruptContext.newPage();
    await ready(corrupt);
    await corrupt.route('**/past-questions/government-2001.js?*', route => route.fulfill({ status: 200, body: 'window.badContentExecuted = true;', contentType: 'application/javascript' }));
    const attempt = corrupt.evaluate(() => JambContent.run('Integrity check', () => JambContent.ensure(['government'])));
    await corrupt.locator('#contentLoading [data-retry]').waitFor({ state: 'visible' });
    assert.equal(await corrupt.evaluate(() => !!window.badContentExecuted), false);
    await corrupt.locator('[data-close]').click(); assert.equal(await attempt, false);
    passed('mismatched content is rejected before execution; error can be dismissed');

    // Same context/cache, new manifest: unchanged files are reused, changed file fetched.
    const updateContext = await create({ serviceWorkers: 'block' }); const update = await updateContext.newPage();
    await ready(update);
    assert(await update.evaluate(() => JambContent.run('Save', () => JambContent.ensure(['economics']))));
    const changedFile = 'past-questions/economics-2020.js';
    const changedBody = fs.readFileSync(path.join(root, changedFile), 'utf8') + '\nwindow.packageUpdateChecked = true;\n';
    const revised = structuredClone(manifest); revised.version = 'test-update'; revised.files[changedFile] = { sha256: hash(changedBody), bytes: Buffer.byteLength(changedBody) };
    await update.route('**/content-manifest.json', route => route.fulfill({ json: revised }));
    await update.route('**/past-questions/economics-2020.js?*', route => route.fulfill({ body: changedBody, contentType: 'application/javascript' }));
    const updates = []; update.on('request', r => { if (r.url().includes('?content=')) updates.push(r.url()); });
    await ready(update);
    assert(await update.evaluate(() => JambContent.run('Update', () => JambContent.ensure(['economics']))));
    assert(await update.evaluate(() => window.packageUpdateChecked));
    assert.equal(updates.length, 1);
    assert(updates[0].includes(changedFile));
    passed('updated manifest fetches only changed file and reuses verified saved files');

    const quotaContext = await create({ serviceWorkers: 'block' });
    await quotaContext.addInitScript(() => { Cache.prototype.put = async () => { throw new DOMException('Full', 'QuotaExceededError'); }; });
    const quota = await quotaContext.newPage(); await ready(quota);
    assert(await quota.evaluate(() => JambContent.run('Storage check', () => JambContent.ensure(['physics']))));
    assert.match(await quota.locator('#contentStorageNotice').textContent(), /could not save/);
    passed('full storage allows online use with an honest offline-saving warning');
    const noStorageContext = await create({ serviceWorkers: 'block' });
    await noStorageContext.addInitScript(() => { CacheStorage.prototype.open = async () => { throw new DOMException('Unavailable', 'SecurityError'); }; });
    const noStorage = await noStorageContext.newPage(); await ready(noStorage);
    assert(await noStorage.evaluate(() => JambContent.run('Online only', () => JambContent.ensure(['physics']))));
    assert.match(await noStorage.locator('#contentStorageNotice').textContent(), /could not save/);
    passed('unavailable browser storage does not block online practice');
    assert.deepEqual(errors, []);
  } finally {
    await Promise.all(contexts.map(c => c.close()));
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
