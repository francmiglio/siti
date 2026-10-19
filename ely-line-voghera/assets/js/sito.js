/* Ely Line · effetti propri del sito (i comportamenti comuni sono in comune.js)
   la tonalità scelta gira la fotografia in 3D e cambia il colore di tutto il sito · lo skyline si muove a tre profondità */
(function () {
  'use strict';
  var radice = document.documentElement, fermo = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var carte = [].slice.call(document.querySelectorAll('[data-carta] figure')), bottoni = [].slice.call(document.querySelectorAll('[data-tono]'));
  var frase = document.querySelector('[data-frase]'), ora = 0, toccato = false;
  function scegli(i) {
    if (i === ora) return;
    carte[ora].classList.remove('su'); carte[ora].classList.add('giu'); // quella di prima esce girando
    var vecchia = carte[ora]; setTimeout(function () { vecchia.classList.remove('giu'); }, 950);
    carte[i].classList.add('su');
    radice.style.setProperty('--tono', carte[i].getAttribute('data-c'));
    frase.textContent = carte[i].getAttribute('data-f');
    bottoni.forEach(function (b, k) { b.setAttribute('aria-pressed', k === i ? 'true' : 'false'); });
    ora = i;
  }
  bottoni.forEach(function (b, i) { b.addEventListener('click', function () { toccato = true; scegli(i); }); });
  // finché nessuno tocca, le tonalità passano da sole ogni quattro secondi
  if (!fermo && carte.length) setInterval(function () { if (!toccato && !document.hidden && window.scrollY < innerHeight * 0.6) scegli((ora + 1) % carte.length); }, 4000);

  // skyline: si sposta con il mouse e con lo scorrimento, ogni fila a una velocità diversa
  var sky = document.querySelector('.skyline');
  if (sky && !fermo) {
    window.addEventListener('pointermove', function (e) { sky.style.setProperty('--mx', ((e.clientX / innerWidth - .5) * -30).toFixed(1)); }, { passive: true });
    window.addEventListener('scroll', function () { sky.style.setProperty('--sy', (window.scrollY * 0.06).toFixed(1)); }, { passive: true });
  }
})();
