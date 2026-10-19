/* Soleluna · script del sito (nessuna libreria, nessun dato salvato)
   sole/luna secondo l'ora · "aperto ora" · fotografie che si inclinano · ingressi leggeri */
(function () {
  'use strict';
  var radice = document.documentElement;
  var fermo = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  [].forEach.call(document.querySelectorAll('[data-anno]'), function (el) { el.textContent = new Date().getFullYear(); });

  // l'ora di Tortona, qualunque sia il fuso di chi guarda
  var p = {};
  new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Rome', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false })
    .formatToParts(new Date()).forEach(function (x) { p[x.type] = x.value; });
  var oggi = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(p.weekday);
  var ora = p.hour + ':' + p.minute;

  /* ---------- Sole o luna ----------
     All'apertura la pagina sceglie da sola: sole dalle 6 alle 16, luna nel resto del giorno.
     I due riquadri "Pranzo" e "Cena" cambiano l'aspetto a mano. */
  function momento(quale) {
    radice.setAttribute('data-momento', quale);
    [].forEach.call(document.querySelectorAll('[data-scegli]'), function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-scegli') === quale ? 'true' : 'false'); });
    var colore = document.querySelector('meta[name="theme-color"]');
    if (colore) colore.setAttribute('content', quale === 'sole' ? '#f6f0e2' : '#0d0c0a');
  }
  momento(ora >= '06:00' && ora < '16:00' ? 'sole' : 'luna');
  [].forEach.call(document.querySelectorAll('[data-scegli]'), function (b) { b.addEventListener('click', function () { momento(b.getAttribute('data-scegli')); }); });

  /* ---------- Aperto ora ---------- */
  var orari = {};
  try { orari = JSON.parse(document.body.getAttribute('data-orari') || '{}'); } catch (e) {}
  var nomi = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
  var riga = document.querySelector('tr[data-giorno="' + oggi + '"]');
  if (riga) riga.classList.add('oggi');
  var fasce = orari[oggi] || [], testo = '';
  for (var i = 0; i < fasce.length; i++) {
    if (ora >= fasce[i][0] && ora < fasce[i][1]) { testo = 'Aperto ora · fino alle ' + fasce[i][1]; break; }
    if (ora < fasce[i][0]) { testo = 'Chiuso ora · riapre alle ' + fasce[i][0]; break; }
  }
  if (!testo) for (var g = 1; g <= 7; g++) {
    var d = (oggi + g) % 7;
    if ((orari[d] || []).length) { testo = 'Chiuso ora · riapre ' + (g === 1 ? 'domani' : nomi[d]) + ' alle ' + orari[d][0][0]; break; }
  }
  [].forEach.call(document.querySelectorAll('[data-aperto]'), function (el) { el.textContent = testo; if (testo.indexOf('Aperto') === 0) el.classList.add('si'); });

  /* ---------- Fotografie che si inclinano verso il puntatore (solo con il mouse) ---------- */
  if (!fermo && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    [].forEach.call(document.querySelectorAll('.inclina'), function (el) {
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        el.style.transform = 'rotateY(' + (x * 7).toFixed(2) + 'deg) rotateX(' + (-y * 7).toFixed(2) + 'deg) translateZ(8px)';
      });
      el.addEventListener('pointerleave', function () { el.style.transform = ''; });
    });
  }

  /* ---------- Ingressi leggeri ---------- */
  var blocchi = document.querySelectorAll('.sezione > *');
  if (!fermo && 'IntersectionObserver' in window) {
    var oss = new IntersectionObserver(function (voci) { voci.forEach(function (v) { if (v.isIntersecting) { v.target.classList.add('visto'); oss.unobserve(v.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
    [].forEach.call(blocchi, function (b) { if (b.getBoundingClientRect().top > innerHeight * .9) { b.classList.add('entra'); oss.observe(b); } });
  }
})();
