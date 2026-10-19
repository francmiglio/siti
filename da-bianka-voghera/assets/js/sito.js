/* Da Bianka · effetti propri del sito (i comportamenti comuni sono in comune.js)
   la scala dei biondi: un ventaglio 3D di fotografie mosso dal cursore, dal trascinamento, dai tocchi e dalle frecce */
(function () {
  'use strict';
  var v = document.querySelector('[data-ventaglio]'), cursore = document.querySelector('[data-cursore]');
  if (!v || !cursore) return;
  var carte = [].slice.call(v.querySelectorAll('figure')), nome = document.querySelector('[data-scala-nome]'), scelto = document.querySelector('[data-tono-scelto]');
  function vai(i) {
    i = Math.max(0, Math.min(carte.length - 1, i));
    v.style.setProperty('--ora', i); cursore.value = i;
    carte.forEach(function (c, k) { c.classList.toggle('ora', k === i); });
    var n = carte[i].getAttribute('data-nome'); nome.textContent = n;
    if (scelto) scelto.value = n; // finisce nel messaggio: "Mi piace il colore: ..."
  }
  cursore.addEventListener('input', function () { vai(+cursore.value); });
  carte.forEach(function (c, k) { c.addEventListener('click', function () { if (!mosso) vai(k); }); });
  var x0 = 0, i0 = 0, giu = false, mosso = false;
  v.addEventListener('pointerdown', function (e) { giu = true; mosso = false; x0 = e.clientX; i0 = +cursore.value; });
  window.addEventListener('pointermove', function (e) { if (!giu) return; var d = e.clientX - x0; if (Math.abs(d) > 8) mosso = true; if (mosso) vai(i0 - Math.round(d / (v.clientWidth * 0.16))); });
  window.addEventListener('pointerup', function () { giu = false; setTimeout(function () { mosso = false; }, 0); });
  vai(+cursore.value);
})();
