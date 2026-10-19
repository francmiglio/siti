/* Vineria Derthona · effetti propri del sito (i comportamenti comuni sono in comune.js)
   il calice si riempie scorrendo e si inclina con il mouse · la carta mostra il piatto su cui ci si ferma · il contatore dei vini */
(function () {
  'use strict';
  var fermo = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var calice = document.querySelector('[data-calice]');
  if (calice) {
    var pieno = function () { calice.style.setProperty('--pieno', Math.min(1, 0.3 + window.scrollY / 700).toFixed(3)); };
    window.addEventListener('scroll', pieno, { passive: true }); pieno();
    if (!fermo && window.matchMedia('(hover: hover)').matches) {
      window.addEventListener('pointermove', function (e) { calice.style.setProperty('--inclina', ((e.clientX / innerWidth - .5) * 26).toFixed(1)); }, { passive: true });
    }
  }

  // la carta: passando sopra un piatto (o toccandolo) cambia la fotografia accanto
  var carta = document.querySelector('[data-carta]');
  if (carta) {
    var voci = carta.querySelectorAll('.carta-lista li'), figure = carta.querySelectorAll('.carta-foto figure');
    var mostra = function (i) { [].forEach.call(voci, function (v, k) { v.classList.toggle('su', k === i); }); [].forEach.call(figure, function (f, k) { f.classList.toggle('su', k === i); }); };
    [].forEach.call(voci, function (v, i) { ['pointerenter', 'focus', 'click'].forEach(function (ev) { v.addEventListener(ev, function () { mostra(i); }); }); });
  }

  // il numero dei vini sale da zero quando entra nello schermo
  var conta = document.querySelector('[data-conta]');
  if (conta && !fermo && 'IntersectionObserver' in window) {
    var fine = +conta.getAttribute('data-conta'); conta.textContent = '0';
    var oss = new IntersectionObserver(function (v) {
      if (!v[0].isIntersecting) return; oss.disconnect();
      var t0 = performance.now();
      (function passo(t) { var p = Math.min(1, (t - t0) / 1600); conta.textContent = Math.round(fine * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(passo); })(t0);
    }, { threshold: 0.6 });
    oss.observe(conta);
  }
})();
