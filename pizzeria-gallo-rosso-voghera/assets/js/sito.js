/* Pizzeria Gallo Rosso - comportamento del sito. Nessun cookie, nessuna chiamata esterna. */
(function () {
  'use strict';
  var d = document;
  var calmo = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var risparmio = navigator.connection && navigator.connection.saveData;

  // anno nel piè di pagina
  d.querySelectorAll('[data-anno]').forEach(function (e) { e.textContent = new Date().getFullYear(); });

  // testata: diventa piena dopo il primo scorrimento
  var testata = d.querySelector('.testata');
  var ultimo = -1;
  function suScroll() {
    var y = window.scrollY > 24;
    if (y !== ultimo) { testata.classList.toggle('piena', y); ultimo = y; }
  }
  window.addEventListener('scroll', suScroll, { passive: true });
  suScroll();

  // menu su telefono
  var apri = d.querySelector('.menu-apri');
  var menu = d.getElementById('menu');
  function chiudi() { d.body.classList.remove('menu-aperto'); apri.setAttribute('aria-expanded', 'false'); apri.setAttribute('aria-label', 'Apri il menu'); }
  apri.addEventListener('click', function () {
    var aperto = d.body.classList.toggle('menu-aperto');
    apri.setAttribute('aria-expanded', aperto ? 'true' : 'false');
    apri.setAttribute('aria-label', aperto ? 'Chiudi il menu' : 'Apri il menu');
  });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) chiudi(); });
  d.addEventListener('keydown', function (e) { if (e.key === 'Escape') chiudi(); });

  // comparse leggere allo scorrimento (solo opacità e spostamento)
  var rivela = d.querySelectorAll('.rivela');
  if ('IntersectionObserver' in window && !calmo) {
    var oss = new IntersectionObserver(function (voci) {
      voci.forEach(function (v) { if (v.isIntersecting) { v.target.classList.add('vista'); oss.unobserve(v.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    rivela.forEach(function (e) { oss.observe(e); });
  } else {
    rivela.forEach(function (e) { e.classList.add('vista'); });
  }

  // video d'apertura: parte da solo dopo il caricamento della pagina; se non parte resta la fotografia
  var video = d.querySelector('video[data-video]');
  if (video && !calmo && !risparmio) {
    var avvia = function () {
      video.src = video.getAttribute('data-video');
      video.muted = true;
      video.addEventListener('playing', function () { video.classList.add('parte'); }, { once: true });
      var p = video.play();
      if (p && p.catch) p.catch(function () {});
    };
    if (d.readyState === 'complete') setTimeout(avvia, 300); else window.addEventListener('load', function () { setTimeout(avvia, 300); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (v) { if (!video.src) return; if (v[0].isIntersecting) { var p = video.play(); if (p && p.catch) p.catch(function () {}); } else video.pause(); }).observe(video);
    }
  }

  // "Aperto ora": calcolato sugli orari scritti nella pagina, con l'ora italiana anche per chi guarda dall'estero
  var elenco = d.querySelector('[data-orari]');
  var stati = d.querySelectorAll('[data-stato]');
  if (elenco) {
    try {
      var orari = JSON.parse(elenco.getAttribute('data-orari'));
      var nomi = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
      var parti = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Rome', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
      var val = {}; parti.forEach(function (p) { val[p.type] = p.value; });
      var g = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(val.weekday);
      var ora = (parseInt(val.hour, 10) % 24) * 60 + parseInt(val.minute, 10);
      var minuti = function (t) { var x = t.split(':'); return (+x[0]) * 60 + (+x[1]); };
      var riga = elenco.querySelector('[data-giorno="' + g + '"]');
      if (riga) riga.classList.add('oggi');
      var testo = '', aperto = false;
      (orari[g] || []).forEach(function (f) {
        if (!testo && ora >= minuti(f[0]) && ora < minuti(f[1])) { aperto = true; testo = 'Aperto ora · fino alle ' + f[1]; }
      });
      if (!testo) {
        var dopo = (orari[g] || []).filter(function (f) { return minuti(f[0]) > ora; })[0];
        if (dopo) testo = 'Oggi apriamo alle ' + dopo[0];
        else {
          for (var i = 1; i <= 7 && !testo; i++) {
            var gg = (g + i) % 7;
            if ((orari[gg] || []).length) testo = (i === 1 ? 'Riapriamo domani' : 'Riapriamo ' + nomi[gg]) + ' alle ' + orari[gg][0][0];
          }
        }
      }
      if (testo) stati.forEach(function (s) { s.querySelector('span').textContent = testo; s.classList.toggle('aperto', aperto); s.hidden = false; });
    } catch (e) { /* senza orari leggibili il segnale resta nascosto */ }
  }
})();
