// Preview only: keep real account data, free sessions and payment keys isolated.
(() => {
  const prefix = 'jamb-offline-preview:';
  const original = window.localStorage;
  const keys = () => Array.from({ length: original.length }, (_, i) => original.key(i)).filter(k => k?.startsWith(prefix));
  const isolated = {
    getItem: key => original.getItem(prefix + key),
    setItem: (key, value) => original.setItem(prefix + key, value),
    removeItem: key => original.removeItem(prefix + key),
    clear: () => keys().forEach(key => original.removeItem(key)),
    key: index => keys()[index]?.slice(prefix.length) ?? null,
    get length() { return keys().length; }
  };
  Object.defineProperty(window, 'localStorage', { value: isolated });
  const realFetch = window.fetch.bind(window);
  window.fetch = (input, options) => {
    const url = new URL(typeof input === 'string' || input instanceof URL ? input : input.url, location.href);
    if (url.hostname === 'editoby-api.vercel.app') return Promise.reject(new Error('Live services are disabled in this test version.'));
    return realFetch(input, options);
  };
  window.PaystackPop = { setup() {
    alert('Payments are disabled in this test version.');
    return { openIframe() {} };
  } };
  document.addEventListener('DOMContentLoaded', () => {
    const banner = document.createElement('aside');
    banner.textContent = 'TEST VERSION · Offline study only · Your live app is unchanged';
    banner.style.cssText = 'background:#d8f5ea;color:#124b3c;text-align:center;padding:12px;font:600 14px/1.4 system-ui;border-bottom:1px solid #84c9b3';
    document.body.prepend(banner);
  });
})();
