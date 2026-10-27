const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const base = process.env.JAMB_TEST_URL || 'http://127.0.0.1:8001/';
(async () => {
  const browser = await chromium.launch({ executablePath: '/usr/bin/chromium', args: ['--no-sandbox'] });
  try {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
    await context.route('**/*', r => r.request().url().startsWith(base) ? r.continue() : r.abort());
    const page = await context.newPage(); const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    async function open() {
      await page.goto(base);
      await page.waitForFunction(() => window.JambContent?.manifest && document.querySelector('#subjectSelect').options.length > 1);
      await page.evaluate(async () => {
        await navigator.serviceWorker.ready;
        if (!navigator.serviceWorker.controller) await new Promise(resolve => navigator.serviceWorker.addEventListener('controllerchange', resolve, { once: true }));
      });
    }
    await open();
    await page.locator('#subjectSelect').selectOption('mathematics');
    assert.match(await page.locator('#subjectOfflineStatus').textContent(), /Not saved/);
    // One downloaded file is insufficient: a subject must be complete.
    await page.evaluate(async () => {
      const m = JambContent.manifest; const f = m.subjects.mathematics.scripts[0];
      const key = new URL(f, document.baseURI).href + '?content=' + m.files[f].sha256;
      await (await caches.open('jamb-content-v1')).put(key, await fetch(key));
      await JambContent.refreshSaved();
    });
    assert.equal(await page.evaluate(() => JambContent.isSaved('mathematics')), false);
    console.log('PASS empty and partial downloads are not labelled saved');
    assert(await page.evaluate(() => JambContent.run('Prepare Mathematics', () => JambContent.ensure(['mathematics']))));
    await page.waitForFunction(() => JambContent.isSaved('mathematics'));
    assert.match(await page.locator('#subjectSelect option[value="mathematics"]').textContent(), /Saved offline/);
    assert.match(await page.locator('#subjectOfflineStatus').textContent(), /all available years/);
    assert.match(await page.locator('#comboSubject1 option[value="mathematics"]').textContent(), /Saved offline/);
    await page.locator('#subjectOfflineStatus').scrollIntoViewIfNeeded();
    await page.screenshot({ path: '/workspace/artifacts/jamb-saved-offline-indicator.png' });
    console.log('PASS completed subject is marked in single-subject and combo pickers');
    await context.setOffline(true); await open();
    await page.locator('#subjectSelect').selectOption('mathematics');
    assert.equal(await page.evaluate(() => JambContent.isSaved('mathematics')), true);
    assert.match(await page.locator('#subjectOfflineStatus').textContent(), /Saved offline/);
    console.log('PASS saved status survives an offline reload');
    const file = await page.evaluate(async () => {
      const m = JambContent.manifest, f = m.subjects.mathematics.images[0];
      await (await caches.open('jamb-content-v1')).delete(new URL(f, document.baseURI).href + '?content=' + m.files[f].sha256);
      await JambContent.refreshSaved();
      return f;
    });
    assert.equal(await page.evaluate(() => JambContent.isSaved('mathematics')), false);
    assert.doesNotMatch(await page.locator('#subjectSelect option[value="mathematics"]').textContent(), /Saved offline/);
    console.log('PASS missing diagram removes saved status');
    await context.setOffline(false); await open();
    assert(await page.evaluate(() => JambContent.run('Restore package', () => JambContent.ensure(['mathematics']))));
    assert.equal(await page.evaluate(() => JambContent.isSaved('mathematics')), true);
    const originalHash = await page.evaluate(file => JambContent.manifest.files[file].sha256, file);
    await page.evaluate(async file => {
      JambContent.manifest.files[file].sha256 = 'f'.repeat(64);
      await JambContent.refreshSaved();
    }, file);
    assert.equal(await page.evaluate(() => JambContent.isSaved('mathematics')), false);
    console.log('PASS stale package version is not labelled saved');
    await page.evaluate(async ({ file, originalHash }) => {
      JambContent.manifest.files[file].sha256 = originalHash;
      await JambContent.refreshSaved();
    }, { file, originalHash });
    assert.equal(await page.evaluate(() => JambContent.isSaved('mathematics')), true);
    await page.evaluate(async () => {
      await caches.delete('jamb-app-v2');
      await JambContent.refreshSaved();
    });
    assert.equal(await page.evaluate(() => JambContent.isSaved('mathematics')), false);
    assert.deepEqual(errors, []);
    console.log('PASS missing app shell removes offline-readiness status');
    await context.close();
  } finally { await browser.close(); }
})().catch(err => { console.error(err); process.exitCode = 1; });
