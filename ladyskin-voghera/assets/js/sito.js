/* LadySkin · effetti propri del sito (i comportamenti comuni sono in comune.js)
   fotografie sospese dell'apertura · filo di siero che scende con lo scorrimento · spiegazione della voce scelta */
(function () {
  'use strict';
  var fermo = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Le tre fotografie dell'apertura si muovono a velocità diverse mentre si scorre: sembrano a profondità diverse */
  var sospesi = document.querySelector('[data-sospesi]');
  var pezzi = sospesi ? [[sospesi.querySelector('.f1'), -0.06], [sospesi.querySelector('.f2'), -0.16], [sospesi.querySelector('.f3'), 0.1], [sospesi.querySelector('.goccia-grande'), -0.28]] : [];

  /* Il filo: la parte bordeaux si allunga quanto si è scesi lungo il metodo, e i passi si accendono uno dopo l'altro */
  var area = document.querySelector('.filo-area'), passi = [].slice.call(document.querySelectorAll('.passi li'));

  var inCorso = false;
  function aggiorna() {
    inCorso = false;
    var y = window.scrollY;
    if (!fermo) pezzi.forEach(function (p) { if (p[0]) p[0].style.setProperty('--y', (y * p[1]).toFixed(1)); });
    if (area) {
      var r = area.getBoundingClientRect(), avanti = Math.max(0, Math.min(1, (innerHeight * 0.72 - r.top) / r.height));
      area.style.setProperty('--avanti', avanti.toFixed(3));
      passi.forEach(function (li, i) { li.classList.toggle('fatto', fermo || avanti > i / passi.length + 0.04); });
    }
  }
  window.addEventListener('scroll', function () { if (!inCorso) { inCorso = true; requestAnimationFrame(aggiorna); } }, { passive: true });
  window.addEventListener('resize', aggiorna);
  aggiorna();

  /* Scelta guidata: toccando una voce compare la sua spiegazione */
  var qui = document.querySelector('[data-spiega-qui]');
  [].forEach.call(document.querySelectorAll('.scelta-voci input'), function (c) {
    function mostra() { if (qui) qui.textContent = c.getAttribute('data-spiega'); }
    c.addEventListener('change', mostra); c.addEventListener('focus', mostra);
    c.parentNode.addEventListener('pointerenter', mostra);
  });
})();
