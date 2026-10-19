/* ==========================================================================
   SerEsté — script del sito (vanilla, nessuna libreria, nessun dato salvato)
   menu · comparse e foto che si svelano · movimento dell'apertura · aperto/chiuso adesso · promo a scadenza
   ========================================================================== */
(function () {
  'use strict';

  var doc = document.documentElement;
  var SE = window.SE || {};
  var ridotto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Menu ---------- */
  var bottone = document.querySelector('.menu-apri');
  var menu = document.getElementById('menu');
  function impostaMenu(aperto) {
    doc.classList.toggle('menu-aperto', aperto);
    bottone.setAttribute('aria-expanded', aperto ? 'true' : 'false');
    bottone.setAttribute('aria-label', aperto ? 'Chiudi il menu' : 'Apri il menu');
    menu.inert = !aperto;
  }
  if (bottone && menu) {
    menu.inert = true;
    bottone.addEventListener('click', function () { impostaMenu(!doc.classList.contains('menu-aperto')); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) impostaMenu(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && doc.classList.contains('menu-aperto')) { impostaMenu(false); bottone.focus(); } });
  }

  /* ---------- Comparse: testi che salgono, foto che si svelano ---------- */
  var elementi = document.querySelectorAll('[data-appare], .foto');
  if ('IntersectionObserver' in window && !ridotto) {
    var oss = new IntersectionObserver(function (voci) {
      voci.forEach(function (v) { if (v.isIntersecting) { v.target.classList.add('visibile'); oss.unobserve(v.target); } });
    }, { rootMargin: '0px 0px -10% 0px' });
    elementi.forEach(function (el) { oss.observe(el); });
  } else elementi.forEach(function (el) { el.classList.add('visibile'); });

  /* ---------- Scroll: linea sotto la testata e foto d'apertura che si avvicina ---------- */
  var fotoEroe = document.querySelector('.eroe-foto');
  var inAttesa = false;
  function scorri() {
    var y = window.scrollY || 0;
    doc.classList.toggle('scesa', y > 8);
    if (fotoEroe && !ridotto) fotoEroe.style.setProperty('--s', Math.min(1, y / window.innerHeight).toFixed(3));
  }
  window.addEventListener('scroll', function () {
    if (inAttesa) return;
    inAttesa = true;
    requestAnimationFrame(function () { inAttesa = false; scorri(); });
  }, { passive: true });
  scorri();

  /* ---------- Ora e data di Voghera, qualunque sia il fuso del visitatore ---------- */
  function adessoRoma() {
    try {
      var parti = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Rome', year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
      var m = {};
      parti.forEach(function (p) { m[p.type] = p.value; });
      return { giorno: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(m.weekday), minuti: (parseInt(m.hour, 10) % 24) * 60 + parseInt(m.minute, 10), data: m.year + '-' + m.month + '-' + m.day };
    } catch (e) { var d = new Date(); return { giorno: d.getDay(), minuti: d.getHours() * 60 + d.getMinutes(), data: d.toISOString().slice(0, 10) }; }
  }

  /* ---------- Aperto adesso? ---------- */
  var orari = SE.orari || {};
  var nomiGiorni = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
  var minuti = function (s) { var p = s.split(':'); return parseInt(p[0], 10) * 60 + parseInt(p[1], 10); };
  var ora = function (s) { return s.replace(/^0/, ''); };
  function statoApertura() {
    var t = adessoRoma();
    var oggi = orari[t.giorno] || [];
    for (var i = 0; i < oggi.length; i++) {
      if (t.minuti >= minuti(oggi[i][0]) && t.minuti < minuti(oggi[i][1])) return { aperto: true, testo: 'Aperto ora · fino alle ' + ora(oggi[i][1]) };
      if (t.minuti < minuti(oggi[i][0])) return { aperto: false, testo: (i === 0 ? 'Chiuso · apre alle ' : 'In pausa · riapre alle ') + ora(oggi[i][0]) };
    }
    for (var g = 1; g <= 7; g++) {
      var gg = (t.giorno + g) % 7;
      if (orari[gg] && orari[gg].length) return { aperto: false, testo: 'Chiuso · riapre ' + (g === 1 ? 'domani' : nomiGiorni[gg]) + ' alle ' + ora(orari[gg][0][0]) };
    }
    return { aperto: false, testo: '' };
  }
  function mostraStato() {
    var s = statoApertura();
    document.querySelectorAll('[data-stato]').forEach(function (el) { el.textContent = s.testo; el.classList.toggle('aperto', s.aperto); });
  }
  mostraStato();
  setInterval(mostraStato, 60000);

  /* ---------- Promozioni: dopo la scadenza spariscono da sole, anche senza rigenerare il sito ---------- */
  var oggi = adessoRoma().data;
  document.querySelectorAll('[data-fino]').forEach(function (el) { if (oggi > el.getAttribute('data-fino')) el.hidden = true; });

  /* ---------- FAQ: una sola risposta aperta ---------- */
  document.querySelectorAll('.faq').forEach(function (faq) {
    faq.addEventListener('toggle', function (e) {
      if (!e.target.open) return;
      faq.querySelectorAll('details[open]').forEach(function (d) { if (d !== e.target) d.open = false; });
    }, true);
  });

  var anno = document.querySelector('[data-anno]');
  if (anno) anno.textContent = new Date().getFullYear();
})();
