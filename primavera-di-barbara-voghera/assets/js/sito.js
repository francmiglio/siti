/* La Primavera di Barbara · effetti propri del sito (i comportamenti comuni sono in comune.js)
   il fiore di fotografie: sboccia all'apertura, ruota piano mentre si scorre e si inclina verso il puntatore */
(function () {
  'use strict';
  var fermo = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fiore = document.querySelector('[data-fiore]');
  if (!fiore || fermo) return;
  var giro = fiore.querySelector('.fiore-giro');

  // parte chiuso e sboccia appena la prima fotografia è pronta
  fiore.classList.add('chiuso');
  var prima = fiore.querySelector('img');
  function sboccia() { requestAnimationFrame(function () { setTimeout(function () { fiore.classList.remove('chiuso'); }, 150); }); }
  if (prima.complete) sboccia(); else { prima.addEventListener('load', sboccia); setTimeout(sboccia, 2500); }

  // ruota di qualche grado con lo scorrimento
  var inCorso = false;
  window.addEventListener('scroll', function () {
    if (inCorso) return; inCorso = true;
    requestAnimationFrame(function () { inCorso = false; giro.style.setProperty('--giro', (window.scrollY * 0.05).toFixed(2) + 'deg'); });
  }, { passive: true });

  // con il mouse il fiore si inclina, come se lo si guardasse da un lato
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    fiore.addEventListener('pointermove', function (e) {
      var r = fiore.getBoundingClientRect();
      giro.style.setProperty('--ry', (((e.clientX - r.left) / r.width - .5) * 22).toFixed(1) + 'deg');
      giro.style.setProperty('--rx', (-((e.clientY - r.top) / r.height - .5) * 22).toFixed(1) + 'deg');
    });
    fiore.addEventListener('pointerleave', function () { giro.style.setProperty('--ry', '0deg'); giro.style.setProperty('--rx', '0deg'); });
  }
})();
