/* Osteria del Vecio Alpin · effetti propri del sito (i comportamenti comuni sono in comune.js)
   la porta: le due ante della facciata si aprono in 3D e scoprono la sala. Si apre da sola dopo un attimo, con il pulsante, e scorrendo. */
(function () {
  'use strict';
  var porta = document.querySelector('[data-porta]'), bottone = document.querySelector('[data-porta-bottone]');
  if (!porta) return;
  var aperta = false;
  function metti(v) { aperta = v; porta.style.setProperty('--apri', v ? 1 : 0); if (bottone) { bottone.setAttribute('aria-pressed', v); bottone.querySelector('span').textContent = v ? 'Chiudi la porta' : 'Apri la porta'; } }
  if (bottone) bottone.addEventListener('click', function () { metti(!aperta); });
  porta.addEventListener('click', function () { metti(!aperta); });
  setTimeout(function () { metti(true); }, 1400); // l'invito a entrare
  window.addEventListener('scroll', function () { if (!aperta && window.scrollY > 80) metti(true); }, { passive: true });
})();
