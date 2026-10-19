/* Il Gabbiano · effetti propri del sito (i comportamenti comuni sono in comune.js)
   la linea tra mare e terra si sposta con il dito, il mouse o le frecce · i piatti cambiano lato girandosi */
(function () {
  'use strict';
  var diviso = document.querySelector('[data-diviso]'), linea = document.querySelector('[data-linea]');
  if (diviso && linea) {
    var toccato = false;
    linea.addEventListener('input', function () { toccato = true; diviso.style.setProperty('--taglio', linea.value + '%'); });
    // finché nessuno la tocca, la linea oscilla piano per far capire che si può spostare
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      var t0 = performance.now();
      (function onda(t) { if (toccato) return; var v = 50 + Math.sin((t - t0) / 1400) * 16; diviso.style.setProperty('--taglio', v.toFixed(1) + '%'); linea.value = v; requestAnimationFrame(onda); })(t0);
    }
  }
  var piatti = document.querySelector('.piatti');
  [].forEach.call(document.querySelectorAll('[data-scegli]'), function (b) {
    b.addEventListener('click', function () {
      piatti.setAttribute('data-lato', b.getAttribute('data-scegli'));
      [].forEach.call(document.querySelectorAll('[data-scegli]'), function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
    });
  });
})();
