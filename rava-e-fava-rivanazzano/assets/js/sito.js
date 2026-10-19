/* La Rava e la Fava · effetti propri del sito (i comportamenti comuni sono in comune.js)
   i tre rulli del menu: ogni rullo è un cilindro a sei facce che gira su sé stesso e si ferma su un piatto a caso */
(function () {
  'use strict';
  var fermo = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var rulli = [].map.call(document.querySelectorAll('[data-rullo]'), function (el) {
    return { el: el, giro: el.querySelector('.rullo-giro'), facce: el.querySelectorAll('figure'), nome: el.querySelector('.rullo-piatto [data-nome]'), come: el.querySelector('.rullo-piatto [data-come]'), passi: 0 };
  });
  var bottone = document.querySelector('[data-gira]');
  if (!rulli.length || !bottone) return;

  function gira() {
    bottone.disabled = true;
    rulli.forEach(function (r, k) {
      var salto = 6 * (2 + k) + 1 + Math.floor(Math.random() * 5); // almeno due giri interi, poi un piatto diverso da quello di prima
      r.passi += salto;
      var tempo = fermo ? 0.01 : 1.5 + k * 0.5;
      r.giro.style.setProperty('--tempo', tempo + 's');
      r.giro.style.setProperty('--giro', (r.passi * 60) + 'deg');
      setTimeout(function () {
        var f = r.facce[((6 - (r.passi % 6)) % 6)]; // la faccia arrivata davanti
        r.nome.textContent = f.getAttribute('data-nome'); r.come.textContent = f.getAttribute('data-come');
        if (k === rulli.length - 1) bottone.disabled = false;
      }, tempo * 1000);
    });
  }
  bottone.addEventListener('click', gira);
  // un primo giro da soli, quando i rulli entrano nello schermo, per far capire che si muovono
  if (!fermo && 'IntersectionObserver' in window) {
    var oss = new IntersectionObserver(function (v) { if (v[0].isIntersecting) { oss.disconnect(); setTimeout(gira, 500); } }, { threshold: 0.6 });
    oss.observe(document.querySelector('[data-rulli]'));
  }
})();
