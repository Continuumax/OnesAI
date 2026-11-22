/* ============================================================
   One'sAI — site.js  (v6)
   Language switch + sample shuffle. Nothing else.
   ============================================================ */
(function () {
  'use strict';

  var I18N = window.ONESAI_I18N;
  var LANG_KEY = 'onesai.lang';
  var lang = 'en';
  try { var saved = localStorage.getItem(LANG_KEY); if (saved && I18N[saved]) lang = saved; } catch (e) {}

  var SHOW = 3;
  var rowsEl = document.getElementById('rows');
  var current = [];

  function pick(pool) {
    var out = [];
    while (out.length < Math.min(SHOW, pool.length)) {
      var i = Math.floor(Math.random() * pool.length);
      if (out.indexOf(i) === -1) out.push(i);
    }
    return out;
  }

  function makeRow(pool, idx) {
    var item = pool[idx];
    var dict = I18N[lang];

    var li = document.createElement('li');
    li.className = 'sample';

    var meta = document.createElement('span');
    meta.className = 'sample-meta';
    var song = document.createElement('span');
    song.textContent = item.song;
    var mid = document.createElement('span');
    mid.className = 'mid';
    mid.setAttribute('aria-hidden', 'true');
    mid.textContent = ' · ' + item.s;
    meta.appendChild(song);
    meta.appendChild(mid);

    var line = document.createElement('span');
    line.className = 'sample-line';
    line.textContent = item.line;

    var src = document.createElement('span');
    src.className = 'sample-src';
    src.textContent = dict['src.' + item.src];

    li.appendChild(meta);
    li.appendChild(line);
    li.appendChild(src);
    return li;
  }

  function buildRows(indices, animate) {
    var pool = I18N[lang].pool;
    var items = indices.map(function (i) { return makeRow(pool, i); });

    if (!animate) {
      rowsEl.innerHTML = '';
      items.forEach(function (li) { rowsEl.appendChild(li); });
      return;
    }

    var old = Array.prototype.slice.call(rowsEl.children);
    old.forEach(function (li) { li.classList.add('swap'); });
    window.setTimeout(function () {
      rowsEl.innerHTML = '';
      items.forEach(function (li, pos) {
        li.classList.add('swap');
        rowsEl.appendChild(li);
        window.setTimeout(function () { li.classList.remove('swap'); }, 50 + pos * 70);
      });
    }, 180);
  }

  function applyLang(next) {
    lang = next;
    var dict = I18N[lang];
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}

    document.documentElement.lang = lang;
    if (dict['meta.title']) document.title = dict['meta.title'];
    var md = document.querySelector('meta[name="description"]');
    if (md && dict['meta.desc']) md.setAttribute('content', dict['meta.desc']);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n')];
      if (typeof v === 'string') el.textContent = v;
    });
    document.querySelectorAll('.langs button').forEach(function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      b.classList.toggle('on', on);
    });

    current = pick(dict.pool);
    buildRows(current, false);
  }

  document.getElementById('shuffle').addEventListener('click', function () {
    current = pick(I18N[lang].pool);
    buildRows(current, true);
  });

  document.querySelectorAll('.langs button').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
  });

  applyLang(lang);
})();
