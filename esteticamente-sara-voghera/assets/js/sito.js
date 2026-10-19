/* ==========================================================================
   Esteticamente Sara — script del sito (vanilla, nessuna libreria)
   menu · comparse · movimento dell'apertura · aperto/chiuso adesso · filtri dello shop
   · carrello (salvato solo sul dispositivo) che invia l'ordine su WhatsApp
   ========================================================================== */
(function () {
  'use strict';

  var doc = document.documentElement;
  var ES = window.ES || {};
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

  /* ---------- Comparse ---------- */
  var elementi = document.querySelectorAll('[data-appare]');
  if ('IntersectionObserver' in window && !ridotto) {
    var oss = new IntersectionObserver(function (voci) {
      voci.forEach(function (v) { if (v.isIntersecting) { v.target.classList.add('visibile'); oss.unobserve(v.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    elementi.forEach(function (el) { oss.observe(el); });
  } else elementi.forEach(function (el) { el.classList.add('visibile'); });

  /* ---------- Apertura: lo sfondo si muove piano con lo scroll ---------- */
  var eroe = document.querySelector('.eroe');
  if (eroe && !ridotto) {
    var inAttesa = false;
    window.addEventListener('scroll', function () {
      if (inAttesa) return;
      inAttesa = true;
      requestAnimationFrame(function () {
        inAttesa = false;
        eroe.style.setProperty('--s', Math.min(1, (window.scrollY || 0) / window.innerHeight).toFixed(3));
      });
    }, { passive: true });
  }

  /* ---------- Aperto adesso? (ora di Voghera, qualunque sia il fuso del visitatore) ---------- */
  var orari = ES.orari || {};
  var nomiGiorni = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
  var minuti = function (s) { var p = s.split(':'); return parseInt(p[0], 10) * 60 + parseInt(p[1], 10); };
  var ora = function (s) { return s.replace(/^0/, ''); };
  function oraRoma() {
    try {
      var parti = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Rome', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
      var m = {};
      parti.forEach(function (p) { m[p.type] = p.value; });
      return { giorno: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(m.weekday), minuti: (parseInt(m.hour, 10) % 24) * 60 + parseInt(m.minute, 10) };
    } catch (e) { var d = new Date(); return { giorno: d.getDay(), minuti: d.getHours() * 60 + d.getMinutes() }; }
  }
  function statoApertura() {
    var t = oraRoma();
    var oggi = orari[t.giorno] || [];
    for (var i = 0; i < oggi.length; i++) {
      if (t.minuti >= minuti(oggi[i][0]) && t.minuti < minuti(oggi[i][1])) return { aperto: true, testo: 'Aperto ora · fino alle ' + ora(oggi[i][1]) };
      if (t.minuti < minuti(oggi[i][0])) return { aperto: false, testo: 'Chiuso · apre alle ' + ora(oggi[i][0]) };
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

  /* ---------- FAQ: una sola risposta aperta ---------- */
  document.querySelectorAll('.faq').forEach(function (faq) {
    faq.addEventListener('toggle', function (e) {
      if (!e.target.open) return;
      faq.querySelectorAll('details[open]').forEach(function (d) { if (d !== e.target) d.open = false; });
    }, true);
  });

  /* ---------- Carrello: resta solo sul dispositivo (localStorage "es-carrello") ---------- */
  var CHIAVE = 'es-carrello';
  var carrello = {};
  try { carrello = JSON.parse(localStorage.getItem(CHIAVE)) || {}; } catch (e) { carrello = {}; }
  var salva = function () { try { localStorage.setItem(CHIAVE, JSON.stringify(carrello)); } catch (e) {} };
  var euro = function (n) { return n.toFixed(2).replace('.', ',') + ' €'; };
  var pezzi = function () { return Object.keys(carrello).reduce(function (s, k) { return s + carrello[k]; }, 0); };

  // catalogo letto dalle schede della pagina shop (altrove serve solo il conteggio in testata)
  var catalogo = {};
  document.querySelectorAll('.prodotto[data-id]').forEach(function (el) {
    var foto = el.querySelector('img');
    catalogo[el.getAttribute('data-id')] = { el: el, nome: el.getAttribute('data-nome'), prezzo: parseFloat(el.getAttribute('data-prezzo')), max: parseInt(el.getAttribute('data-max'), 10) || 1, foto: foto ? foto.getAttribute('src') : '' };
  });
  var inShop = Object.keys(catalogo).length > 0;
  if (inShop) { Object.keys(carrello).forEach(function (id) { if (!catalogo[id]) delete carrello[id]; else carrello[id] = Math.min(carrello[id], catalogo[id].max); }); salva(); }

  var finestra = document.getElementById('carrello');
  var lista = document.querySelector('[data-carrello-lista]');
  var modulo = document.querySelector('[data-carrello-modulo]');
  var vuoto = document.querySelector('[data-carrello-vuoto]');
  var barra = document.querySelector('.carrello-apri');
  var totale = function () { return Object.keys(carrello).reduce(function (s, id) { return s + (catalogo[id] ? catalogo[id].prezzo * carrello[id] : 0); }, 0); };

  function disegna() {
    var n = pezzi();
    document.querySelectorAll('[data-conta-carrello]').forEach(function (el) { el.textContent = n; if (el.classList.contains('cestino-conta')) el.hidden = n === 0; });
    if (!inShop) return;
    document.querySelectorAll('[data-totale-carrello]').forEach(function (el) { el.textContent = euro(totale()); });
    barra.hidden = n === 0;
    vuoto.hidden = n > 0;
    modulo.hidden = n === 0;
    lista.innerHTML = '';
    Object.keys(carrello).forEach(function (id) {
      var p = catalogo[id], q = carrello[id];
      var li = document.createElement('li');
      li.innerHTML = (p.foto ? '<img src="' + p.foto + '" alt="" width="64" height="64">' : '<span></span>') +
        '<div><strong></strong><small></small></div>' +
        '<div class="quantita"><button type="button" data-meno aria-label="Togli uno"><svg class="icona" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14"/></svg></button><b></b>' +
        '<button type="button" data-piu aria-label="Aggiungi uno"><svg class="icona" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg></button></div>';
      li.setAttribute('data-id', id);
      li.querySelector('strong').textContent = p.nome;
      li.querySelector('small').textContent = euro(p.prezzo) + (q > 1 ? ' × ' + q + ' = ' + euro(p.prezzo * q) : '') + (q >= p.max ? ' · massimo disponibile' : '');
      li.querySelector('b').textContent = q;
      li.querySelector('[data-piu]').disabled = q >= p.max;
      lista.appendChild(li);
    });
    Object.keys(catalogo).forEach(function (id) {
      var p = catalogo[id], q = carrello[id] || 0, b = p.el.querySelector('[data-aggiungi] span');
      p.el.classList.toggle('aggiunto', q > 0);
      if (b) b.textContent = q > 0 ? (q >= p.max ? 'Nel carrello (' + q + ')' : 'Nel carrello (' + q + ') · aggiungi') : 'Aggiungi al carrello';
    });
  }
  function cambia(id, d) {
    var p = catalogo[id];
    if (!p) return;
    var q = Math.max(0, Math.min(p.max, (carrello[id] || 0) + d));
    if (q === 0) delete carrello[id]; else carrello[id] = q;
    salva();
    disegna();
  }
  function apriCarrello() { if (finestra && !finestra.open) { if (typeof finestra.showModal === 'function') finestra.showModal(); else finestra.setAttribute('open', ''); } }

  document.addEventListener('click', function (e) {
    var agg = e.target.closest('[data-aggiungi]');
    if (agg) { cambia(agg.closest('.prodotto').getAttribute('data-id'), 1); return; }
    var apri = e.target.closest('[data-apri-carrello]');
    if (apri && inShop) { e.preventDefault(); apriCarrello(); return; }
    if (e.target.closest('[data-chiudi-carrello]') || e.target === finestra) { finestra.close(); return; }
    var riga = e.target.closest('.carrello-lista li');
    if (riga && e.target.closest('[data-piu]')) cambia(riga.getAttribute('data-id'), 1);
    if (riga && e.target.closest('[data-meno]')) cambia(riga.getAttribute('data-id'), -1);
  });

  if (modulo) modulo.addEventListener('submit', function (e) {
    e.preventDefault();
    var nome = modulo.elements.nome.value.trim(), nota = modulo.elements.nota.value.trim();
    var errore = modulo.querySelector('.errore');
    if (!nome) { errore.hidden = false; modulo.elements.nome.focus(); return; }
    errore.hidden = true;
    var righe = Object.keys(carrello).map(function (id) { var p = catalogo[id]; return '• ' + carrello[id] + ' × ' + p.nome + ' — ' + euro(p.prezzo * carrello[id]); });
    var testo = 'Ciao Sara! Vorrei ordinare dallo shop del sito:\n\n' + righe.join('\n') + '\n\nTotale: ' + euro(totale()) + '\nNome: ' + nome + (nota ? '\nNota: ' + nota : '') + '\n\nRitiro e pago in negozio. Mi confermi la disponibilità?';
    window.open('https://wa.me/' + ES.wa + '?text=' + encodeURIComponent(testo), '_blank', 'noopener');
  });

  /* ---------- Filtri dello shop ---------- */
  var filtri = document.querySelectorAll('[data-filtro]');
  filtri.forEach(function (f) {
    f.addEventListener('click', function () {
      var c = f.getAttribute('data-filtro');
      filtri.forEach(function (x) { x.classList.toggle('attivo', x === f); x.setAttribute('aria-pressed', x === f ? 'true' : 'false'); });
      Object.keys(catalogo).forEach(function (id) { var el = catalogo[id].el; el.hidden = c !== 'tutti' && el.getAttribute('data-categoria') !== c; if (!el.hidden) el.classList.add('visibile'); });
    });
  });

  disegna();
  if (inShop && location.hash === '#carrello' && pezzi() > 0) apriCarrello();

  var anno = document.querySelector('[data-anno]');
  if (anno) anno.textContent = new Date().getFullYear();
})();
