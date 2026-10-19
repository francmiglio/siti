/* ==========================================================================
   Rimulas — script del sito (vanilla). Il 3D delle foto è in profondita.js.
   intro · menu · transizione "a piatto" tra le pagine · scroll (carrellata, portale) ·
   comparse · aperto/chiuso adesso · barra "chiama per prenotare" · consenso cookie + mappa
   ========================================================================== */
(function () {
  'use strict';

  var doc = document.documentElement;
  var ridotto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var limita = function (v, a, b) { return Math.min(b, Math.max(a, v)); };
  var sessione = {
    leggi: function (k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } },
    scrivi: function (k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} },
    togli: function (k) { try { sessionStorage.removeItem(k); } catch (e) {} }
  };
  var altezza = window.innerHeight;
  window.addEventListener('resize', function () { altezza = window.innerHeight; aggiorna(); }, { passive: true });

  /* ---------- Intro: la rapa cresce, poi il piatto si apre ---------- */
  var intro = document.querySelector('.intro');
  if (intro && doc.classList.contains('con-intro')) {
    sessione.scrivi('rimulas-intro', '1');
    var chiudi = function () {
      intro.classList.add('via');
      setTimeout(function () { doc.classList.remove('con-intro'); intro.remove(); }, 1200);
    };
    setTimeout(chiudi, ridotto ? 200 : 2300);
    intro.addEventListener('click', chiudi);
  } else if (intro) intro.remove();

  /* ---------- Menu ---------- */
  var bottone = document.querySelector('.menu-apri');
  var menu = document.getElementById('menu');
  function impostaMenu(aperto) {
    doc.classList.toggle('menu-aperto', aperto);
    bottone.setAttribute('aria-expanded', aperto ? 'true' : 'false');
    bottone.querySelector('.menu-parola').textContent = aperto ? 'Chiudi' : 'Menu';
    menu.inert = !aperto;
  }
  if (bottone && menu) {
    menu.inert = true;
    bottone.addEventListener('click', function () { impostaMenu(!doc.classList.contains('menu-aperto')); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && doc.classList.contains('menu-aperto')) { impostaMenu(false); bottone.focus(); } });
  }

  /* ---------- Transizione: un piatto (cerchio) copre e scopre la pagina ---------- */
  var velo = document.querySelector('.velo');
  if (doc.classList.contains('in-arrivo') && velo) {
    sessione.togli('rimulas-transizione');
    requestAnimationFrame(function () {
      velo.classList.add('apre');
      setTimeout(function () { doc.classList.remove('in-arrivo'); velo.classList.remove('apre'); }, 1100);
    });
  }
  window.addEventListener('pageshow', function (e) { if (e.persisted && velo) { velo.classList.remove('chiude'); doc.classList.remove('in-arrivo'); } });
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a || !velo || ridotto || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (a.target === '_blank') return;
    var url = new URL(a.href, location.href);
    if (url.origin !== location.origin || !/\.html$|\/$/.test(url.pathname)) return;
    if (url.pathname === location.pathname) return;
    e.preventDefault();
    var r = a.getBoundingClientRect();
    velo.style.setProperty('--cx', (r.left + r.width / 2) + 'px');
    velo.style.setProperty('--cy', (r.top + r.height / 2) + 'px');
    velo.classList.add('chiude');
    sessione.scrivi('rimulas-transizione', '1');
    setTimeout(function () { location.href = url.href; }, 800);
  });

  /* ---------- Testata e scroll ---------- */
  var testata = document.querySelector('.testata');
  var ultimoY = 0;
  var sezioniScroll = [].slice.call(document.querySelectorAll('[data-carrello-sezione], [data-portale]'));
  function avanzamento(el) {
    var r = el.getBoundingClientRect();
    var corsa = r.height - altezza;
    return corsa > 0 ? limita(-r.top / corsa, 0, 1) : 0;
  }
  function aggiorna() {
    var y = window.scrollY || 0;
    if (testata) {
      testata.classList.toggle('compatta', y > 40);
      testata.classList.toggle('via', y > ultimoY && y > altezza * 0.9 && !doc.classList.contains('menu-aperto'));
    }
    ultimoY = y;
    doc.classList.toggle('oltre-apertura', y > altezza * 0.5);
    if (ridotto) return;
    sezioniScroll.forEach(function (s) {
      var r = s.getBoundingClientRect();
      if (r.bottom < -50 || r.top > altezza + 50) return;
      s.style.setProperty('--p', avanzamento(s).toFixed(4));
    });
  }
  var inAttesa = false;
  window.addEventListener('scroll', function () {
    if (inAttesa) return;
    inAttesa = true;
    requestAnimationFrame(function () { inAttesa = false; aggiorna(); });
  }, { passive: true });
  aggiorna();

  /* ---------- Comparse ---------- */
  var elementi = document.querySelectorAll('[data-appare], [data-righe], .rivela');
  if ('IntersectionObserver' in window && !ridotto) {
    var oss = new IntersectionObserver(function (voci) {
      voci.forEach(function (v) { if (v.isIntersecting) { v.target.classList.add('visibile'); oss.unobserve(v.target); } });
    }, { rootMargin: '0px 0px -10% 0px' });
    elementi.forEach(function (el) { oss.observe(el); });
  } else elementi.forEach(function (el) { el.classList.add('visibile'); });

  /* ---------- Aperto adesso? (ora di Voghera, qualunque sia il fuso del visitatore) ---------- */
  var orari = window.RIMULAS_ORARI || {};
  var nomiGiorni = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
  function oraRoma() {
    try {
      var parti = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Rome', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
      var m = {};
      parti.forEach(function (p) { m[p.type] = p.value; });
      var g = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(m.weekday);
      return { giorno: g, minuti: (parseInt(m.hour, 10) % 24) * 60 + parseInt(m.minute, 10) };
    } catch (e) { var d = new Date(); return { giorno: d.getDay(), minuti: d.getHours() * 60 + d.getMinutes() }; }
  }
  var hhmm = function (m) { return String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0'); };
  function statoApertura() {
    var t = oraRoma();
    var oggi = orari[t.giorno];
    if (oggi && t.minuti >= oggi[0] && t.minuti < oggi[1]) return { aperto: true, testo: 'Aperto ora · fino alle ' + (oggi[1] >= 1440 ? '24:00' : hhmm(oggi[1])) };
    if (oggi && t.minuti < oggi[0]) return { aperto: false, testo: 'Oggi apriamo alle ' + hhmm(oggi[0]) };
    for (var i = 1; i <= 7; i++) {
      var g = (t.giorno + i) % 7;
      if (orari[g]) return { aperto: false, testo: 'Chiuso · riapriamo ' + (i === 1 ? 'domani' : nomiGiorni[g]) + ' alle ' + hhmm(orari[g][0]) };
    }
    return { aperto: false, testo: '' };
  }
  function mostraStato() {
    var s = statoApertura();
    document.querySelectorAll('[data-stato]').forEach(function (el) {
      el.textContent = s.testo;
      el.classList.toggle('aperto', s.aperto);
    });
  }
  mostraStato();
  setInterval(mostraStato, 60000);

  /* ---------- Consenso cookie (Linee guida Garante 2021) + mappa ---------- */
  var CHIAVE = 'rimulas-consenso';
  var SEI_MESI = 1000 * 60 * 60 * 24 * 182;
  var memoria = {
    leggi: function () { try { return JSON.parse(localStorage.getItem(CHIAVE)); } catch (e) { return null; } },
    scrivi: function (v) { try { localStorage.setItem(CHIAVE, JSON.stringify(v)); } catch (e) {} }
  };
  var consenso = memoria.leggi();
  if (consenso && (!consenso.data || Date.now() - consenso.data > SEI_MESI)) consenso = null;
  var banner = document.querySelector('.consenso-cookie');
  var ascoltatori = [];
  function applica(scelte) {
    consenso = { mappe: !!scelte.mappe, data: Date.now() };
    memoria.scrivi(consenso);
    chiudiBanner();
    ascoltatori.forEach(function (f) { f(); });
  }
  function dettagli(si) {
    banner.querySelector('.consenso-dettagli').hidden = !si;
    banner.querySelector('[data-consenso="personalizza"]').hidden = si;
    banner.querySelector('[data-consenso="salva"]').hidden = !si;
  }
  function apriBanner(conDettagli) {
    if (!banner) return;
    banner.hidden = false;
    doc.classList.add('banner-aperto');
    banner.querySelector('[data-categoria="mappe"]').checked = !!(consenso && consenso.mappe);
    dettagli(!!conDettagli);
    requestAnimationFrame(function () { banner.classList.add('visibile'); });
  }
  function chiudiBanner() {
    if (!banner) return;
    banner.classList.remove('visibile');
    doc.classList.remove('banner-aperto');
    setTimeout(function () { banner.hidden = true; }, 400);
  }
  if (banner) {
    banner.addEventListener('click', function (e) {
      var b = e.target.closest('[data-consenso]');
      if (!b) return;
      var a = b.getAttribute('data-consenso');
      if (a === 'accetta') applica({ mappe: true });
      else if (a === 'rifiuta') applica({ mappe: false });
      else if (a === 'personalizza') dettagli(true);
      else if (a === 'salva') applica({ mappe: banner.querySelector('[data-categoria="mappe"]').checked });
    });
    if (!consenso) setTimeout(function () { apriBanner(false); }, doc.classList.contains('con-intro') ? 2600 : 700);
  }
  document.querySelectorAll('[data-preferenze-cookie]').forEach(function (b) { b.addEventListener('click', function () { apriBanner(true); }); });

  document.querySelectorAll('[data-mappa]').forEach(function (box) {
    var vicino = false;
    function carica() {
      if (box.querySelector('iframe')) return;
      var av = box.querySelector('.mappa-avviso');
      if (av) av.remove();
      var f = document.createElement('iframe');
      f.src = box.getAttribute('data-mappa');
      f.title = 'Mappa: Rimulas, Via Severino Grattoni 8, Voghera';
      f.referrerPolicy = 'no-referrer-when-downgrade';
      f.addEventListener('load', function () { box.classList.add('caricata'); });
      box.appendChild(f);
    }
    function avviso() {
      if (box.querySelector('.mappa-avviso') || box.querySelector('iframe')) return;
      var d = document.createElement('div');
      d.className = 'mappa-avviso';
      d.innerHTML = '<p class="titolo-m">Via Severino Grattoni, 8<br><em>Voghera</em></p>' +
        '<p>La mappa interattiva è fornita da Google Maps, che può installare cookie di terze parti.</p>' +
        '<button class="pulsante" type="button">Mostra la mappa</button>' +
        '<p class="nota">Cliccando accettate i cookie di Google Maps. <a href="cookie-policy.html">Dettagli</a></p>';
      d.querySelector('button').addEventListener('click', function () { applica({ mappe: true }); });
      box.appendChild(d);
    }
    function decidi() {
      if (consenso && consenso.mappe) { if (vicino) carica(); }
      else { var f = box.querySelector('iframe'); if (f) { f.remove(); box.classList.remove('caricata'); } avviso(); }
    }
    ascoltatori.push(decidi);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (v) { if (v[0].isIntersecting) { vicino = true; decidi(); } }, { rootMargin: '400px 0px' }).observe(box);
    } else vicino = true;
    decidi();
  });

  var anno = document.querySelector('[data-anno]');
  if (anno) anno.textContent = new Date().getFullYear();
})();
