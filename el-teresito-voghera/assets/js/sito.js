/* ==========================================================================
   El Teresito — script del sito (vanilla, nessuna libreria, nessun dato salvato)
   ripiani del banco · testata · "aperto ora" · messaggio dell'ordine su WhatsApp
   ========================================================================== */
(function () {
  'use strict';

  var doc = document.documentElement;
  var ridotto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var osserva = 'IntersectionObserver' in window;

  /* ---------- I ripiani del banco ----------
     Ogni ripiano scorre di lato: con il dito, con il trascinamento del mouse, con le frecce da tastiera.
     Mentre la pagina scende, i ripiani del banco avanzano piano in direzioni opposte, come vassoi spinti sul marmo.
     Appena qualcuno li tocca, lo scorrimento automatico di quel ripiano si ferma. */
  var ripiani = [].map.call(document.querySelectorAll('.ripiano'), function (el) {
    var r = { el: el, verso: parseInt(el.getAttribute('data-ripiano') || '0', 10), toccato: false, base: 0 };
    var giu = false, x0 = 0, s0 = 0, mosso = false;
    el.addEventListener('pointerdown', function (e) {
      if (e.pointerType !== 'mouse') { r.toccato = true; return; }
      giu = true; mosso = false; x0 = e.clientX; s0 = el.scrollLeft;
    });
    window.addEventListener('pointermove', function (e) {
      if (!giu) return;
      var d = e.clientX - x0;
      if (Math.abs(d) > 4) { mosso = true; r.toccato = true; el.classList.add('preso'); }
      el.scrollLeft = s0 - d;
    });
    window.addEventListener('pointerup', function () { giu = false; el.classList.remove('preso'); });
    el.addEventListener('click', function (e) { if (mosso) { e.preventDefault(); mosso = false; } });
    el.addEventListener('wheel', function (e) { if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) r.toccato = true; }, { passive: true });
    el.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      r.toccato = true;
      el.scrollBy({ left: (e.key === 'ArrowRight' ? 1 : -1) * 260, behavior: ridotto ? 'auto' : 'smooth' });
      e.preventDefault();
    });
    return r;
  });
  // il secondo ripiano parte già spostato, così i due non sono allineati
  ripiani.forEach(function (r) { if (r.verso < 0) { r.base = Math.min(140, r.el.scrollWidth - r.el.clientWidth); r.el.scrollLeft = r.base; } });

  /* ---------- Un solo ciclo per lo scorrimento ---------- */
  var ultimaY = window.scrollY || 0, attivo = false;
  function ciclo() {
    var y = window.scrollY || 0, delta = y - ultimaY;
    ultimaY = y;
    doc.classList.toggle('scesa', y > window.innerHeight * 0.6);
    if (delta > 4 && y > window.innerHeight) doc.classList.add('nascosta');
    else if (delta < -4 || y < 200) doc.classList.remove('nascosta');
    if (!ridotto) ripiani.forEach(function (r) {
      if (r.toccato || !r.verso) return;
      var rett = r.el.getBoundingClientRect();
      if (rett.bottom < 0 || rett.top > window.innerHeight) return;
      var corsa = r.el.scrollWidth - r.el.clientWidth;
      r.el.scrollLeft = Math.max(0, Math.min(corsa, r.base + r.verso * y * 0.22));
    });
    attivo = false;
  }
  function sveglia() { if (!attivo) { attivo = true; requestAnimationFrame(ciclo); } }
  window.addEventListener('scroll', sveglia, { passive: true });
  sveglia();

  /* ---------- Aperto ora? Dagli orari scritti nella pagina, sull'ora italiana ---------- */
  (function () {
    var orari, parti = {};
    try {
      orari = JSON.parse(document.body.getAttribute('data-orari'));
      new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Rome', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date()).forEach(function (p) { parti[p.type] = p.value; });
    } catch (e) { return; }
    var g = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(parti.weekday);
    var ora = (parseInt(parti.hour, 10) % 24) * 60 + parseInt(parti.minute, 10);
    var min = function (t) { var x = t.split(':'); return parseInt(x[0], 10) * 60 + parseInt(x[1], 10); };
    var nomi = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
    var testo = '', aperto = false;
    (orari[g] || []).forEach(function (f) { if (ora >= min(f[0]) && ora < min(f[1])) { aperto = true; testo = 'Aperto ora, fino alle ' + f[1]; } });
    if (!aperto) {
      var dopo = (orari[g] || []).filter(function (f) { return min(f[0]) > ora; })[0];
      if (dopo) testo = 'Chiuso ora: riapre oggi alle ' + dopo[0];
      else for (var k = 1; k <= 7; k++) {
        var d = (g + k) % 7;
        if ((orari[d] || []).length) { testo = 'Chiuso ora: riapre ' + (k === 1 ? 'domani' : nomi[d]) + ' alle ' + orari[d][0][0]; break; }
      }
    }
    [].forEach.call(document.querySelectorAll('[data-adesso]'), function (el) { el.textContent = testo; el.classList.toggle('aperto', aperto); el.hidden = !testo; });
    var riga = document.querySelector('tr[data-giorno="' + g + '"]');
    if (riga) riga.classList.add('oggi');
  })();

  /* ---------- Ordine: compone il messaggio e apre WhatsApp. Niente viene inviato o salvato dal sito. ---------- */
  var modulo = document.querySelector('[data-ordine]');
  if (modulo) {
    var numero = document.body.getAttribute('data-wa');
    var giorno = modulo.querySelector('[name=giorno]'), errore = modulo.querySelector('.ordine-errore');
    try { var oggi = new Date(); giorno.min = new Date(oggi.getTime() - oggi.getTimezoneOffset() * 60000).toISOString().slice(0, 10); } catch (e) {}
    giorno.addEventListener('input', function () { giorno.removeAttribute('aria-invalid'); errore.hidden = true; });
    modulo.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(modulo), v = function (n) { return (d.get(n) || '').toString().trim(); };
      if (!v('giorno')) { giorno.setAttribute('aria-invalid', 'true'); errore.hidden = false; giorno.focus(); return; }
      var data = new Date(v('giorno') + 'T12:00:00');
      var righe = ['Buongiorno, vorrei ordinare una torta.', ''];
      righe.push('• Occasione: ' + v('occasione'));
      if (v('persone')) righe.push('• Persone: ' + v('persone'));
      righe.push('• Ritiro: ' + data.toLocaleDateString('it-IT', { weekday: 'long', day: 'numeric', month: 'long' }));
      if (v('gusto')) righe.push('• Gusti o idee: ' + v('gusto'));
      if (v('scritta')) righe.push('• Scritta: «' + v('scritta') + '»');
      if (v('nome')) righe.push('', 'Nome: ' + v('nome'));
      window.open('https://wa.me/' + numero + '?text=' + encodeURIComponent(righe.join('\n')), '_blank', 'noopener');
    });
  }

  var anno = document.querySelector('[data-anno]');
  if (anno) anno.textContent = new Date().getFullYear();
})();
