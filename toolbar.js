(() => {
  const toggle = document.getElementById('chapterToggle');
  const menu = document.getElementById('chapterMenu');
  const minus = document.getElementById('minus');
  const plus = document.getElementById('plus');
  function close() { menu.hidden = true; toggle.setAttribute('aria-expanded', 'false'); }
  toggle.addEventListener('click', () => {
    menu.hidden = !menu.hidden;
    toggle.setAttribute('aria-expanded', String(!menu.hidden));
  });
  menu.querySelectorAll('[data-chapter]').forEach(button => {
    button.addEventListener('click', () => {
      const chapter = document.getElementById(button.dataset.chapter);
      if (!chapter) return;
      close();
      chapter.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', '#' + chapter.id);
      toggle.textContent = button.textContent + ' \u25be';
    });
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.chapter-picker')) close();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') { close(); toggle.focus(); }
  });
  const preferenceKey = 'tfsob-1-17-font-size-pt';
  let size = 19;
  try {
    const saved = localStorage.getItem(preferenceKey);
    const value = saved === null ? NaN : Number(saved);
    if (Number.isFinite(value)) size = Math.max(14, Math.min(50, Math.round(value)));
  } catch { /* Reading remains available when storage is blocked. */ }
  function applySize(save = false) {
    document.documentElement.style.setProperty('--size', size + 'pt');
    minus.disabled = size === 14;
    plus.disabled = size === 50;
    minus.setAttribute('aria-label', '글자 축소 · 현재 ' + size + 'pt');
    plus.setAttribute('aria-label', '글자 확대 · 현재 ' + size + 'pt');
    if (save) { try { localStorage.setItem(preferenceKey, String(size)); } catch {} }
  }
  minus.addEventListener('click', () => { size = Math.max(14, size - 1); applySize(true); });
  plus.addEventListener('click', () => { size = Math.min(50, size + 1); applySize(true); });
  applySize();
})();
