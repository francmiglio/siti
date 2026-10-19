/* Da Claudia · effetti propri del sito (i comportamenti comuni sono in comune.js)
   la vetrina: scegliendo colore e piani cambia la fotografia della torta. In home la scelta viene portata alla pagina dell'ordine. */
(function () {
  'use strict';
  var vetrina = document.querySelector('[data-vetrina]');
  if (!vetrina) return;
  var img = vetrina.querySelector('[data-torta-img]'), colore = 'rosa', piani = '2';
  var nomi = { '1': 'un piano', '2': 'due piani', '3': 'tre piani' };
  function file() { return 'assets/img/torta-' + piani + '-' + colore + '-900.webp'; }

  // se si arriva dalla home con una scelta già fatta (ordina.html?c=azzurro&p=3), la si ritrova selezionata
  var q = new URLSearchParams(location.search);
  [['c', 'colore'], ['p', 'piani']].forEach(function (v) {
    var el = q.get(v[0]) && document.querySelector('input[data-' + v[1] + '="' + q.get(v[0]) + '"]');
    if (el) el.checked = true;
  });

  function leggi() {
    var c = document.querySelector('input[data-colore]:checked'), p = document.querySelector('input[data-piani]:checked');
    if (c) colore = c.getAttribute('data-colore');
    if (p) piani = p.getAttribute('data-piani');
  }
  function mostra(subito) {
    leggi();
    var nuovo = file();
    [].forEach.call(document.querySelectorAll('[data-porta-scelta]'), function (a) { a.href = 'ordina.html?c=' + colore + '&p=' + piani; });
    if (img.getAttribute('src') === nuovo) return;
    var alt = 'Una torta a ' + nomi[piani] + ' color ' + colore + ', con frutti di bosco';
    if (subito) { img.src = nuovo; img.alt = alt; return; }
    vetrina.classList.add('cambia');
    var pre = new Image();
    pre.onload = pre.onerror = function () { setTimeout(function () { img.src = nuovo; img.alt = alt; vetrina.classList.remove('cambia'); }, 180); };
    pre.src = nuovo;
  }
  [].forEach.call(document.querySelectorAll('input[data-colore], input[data-piani]'), function (i) { i.addEventListener('change', function () { mostra(false); }); });
  mostra(true);
})();
