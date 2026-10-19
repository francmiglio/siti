/* Agriturismo La Scortia · effetti propri del sito (i comportamenti comuni sono in comune.js)
   la cartolina dell'ingresso si gira con un tocco e mostra indirizzo e telefono */
(function () {
  'use strict';
  var c = document.querySelector('[data-cartolina]');
  if (!c) return;
  c.addEventListener('click', function () {
    var girata = c.getAttribute('aria-pressed') !== 'true';
    c.setAttribute('aria-pressed', girata);
    c.setAttribute('aria-label', girata ? 'Torna alla fotografia' : 'Gira la cartolina');
  });
})();
