/* Al Quinto Quarto · effetti propri del sito (i comportamenti comuni sono in comune.js)
   1. la tovaglietta: segue il puntatore e, scorrendo, si alza verso chi guarda; il toro in rilievo fa il resto
   2. il menu: schede per portata (con le frecce della tastiera) e fotografia del piatto scelto */
(function () {
  'use strict';
  var L = window.LWA || {};

  var tavolo = document.querySelector('[data-tavolo]');
  if (tavolo && !L.fermo) {
    var carta = tavolo.firstElementChild, px = 0, py = 0, sc = 0, atteso = false;
    function metti() {
      atteso = false;
      carta.style.setProperty('--lato', (px * 14).toFixed(2) + 'deg');
      carta.style.setProperty('--su', (-py * 10 - sc * 16).toFixed(2) + 'deg');
      carta.style.setProperty('--gira', (px * 4 + sc * 7).toFixed(2) + 'deg');
    }
    function chiedi() { if (!atteso) { atteso = true; requestAnimationFrame(metti); } }
    if (L.topo) window.addEventListener('pointermove', function (e) { px = e.clientX / innerWidth - .5; py = e.clientY / innerHeight - .5; chiedi(); }, { passive: true });
    window.addEventListener('scroll', function () { sc = Math.min(1, window.scrollY / (innerHeight * .8)); chiedi(); }, { passive: true });
  }

  var schede = [].slice.call(document.querySelectorAll('.portate [role="tab"]'));
  function scegli(i, fuoco) {
    schede.forEach(function (s, n) {
      var si = n === i;
      s.setAttribute('aria-selected', si); s.tabIndex = si ? 0 : -1;
      document.getElementById(s.getAttribute('aria-controls')).hidden = !si;
    });
    if (fuoco) schede[i].focus();
    var primo = document.querySelector('#' + schede[i].getAttribute('aria-controls') + ' [data-piatto]');
    if (primo && primo.getAttribute('aria-pressed') !== null) primo.click(); // la fotografia segue la portata scelta
  }
  schede.forEach(function (s, i) {
    s.addEventListener('click', function () { scegli(i); });
    s.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') scegli((i + 1) % schede.length, true);
      if (e.key === 'ArrowLeft') scegli((i - 1 + schede.length) % schede.length, true);
    });
  });

  var riquadro = document.querySelector('[data-foto]');
  if (riquadro) {
    var img = riquadro.querySelector('img'), nome = riquadro.querySelector('[data-foto-nome]'), bottoni = [].slice.call(document.querySelectorAll('[data-piatto]'));
    bottoni.forEach(function (b) {
      b.setAttribute('aria-pressed', 'false');
      function mostra() {
        if (b.getAttribute('aria-pressed') === 'true') return;
        bottoni.forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
        riquadro.classList.add('cambia');
        var nuova = new Image();
        nuova.onload = nuova.onerror = function () { img.src = b.getAttribute('data-piatto'); nome.textContent = b.getAttribute('data-nome'); riquadro.classList.remove('cambia'); };
        nuova.src = b.getAttribute('data-piatto');
      }
      b.addEventListener('click', mostra);
      if (L.topo) b.addEventListener('pointerenter', mostra);
    });
  }
})();
