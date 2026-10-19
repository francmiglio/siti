/* ==========================================================================
   Materaxissimi — script del sito (vanilla). Le foto 3D sono in profondita.js.
   menu · testata · comparse · ripresa "strati" guidata dallo scorrimento · video in loop ·
   guida alla portanza · aperto/chiuso adesso · modulo (WhatsApp / e-mail) · consenso cookie + mappa
   ========================================================================== */
(function () {
  'use strict';

  var doc = document.documentElement;
  var MX = window.MX || {};
  var ridotto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var piccolo = function () { return window.matchMedia('(max-width: 760px)').matches; };
  var limita = function (v, a, b) { return Math.min(b, Math.max(a, v)); };

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
    menu.addEventListener('click', function (e) { if (e.target.closest('a, button')) impostaMenu(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && doc.classList.contains('menu-aperto')) { impostaMenu(false); bottone.focus(); } });
  }

  /* ---------- Testata ---------- */
  var testata = document.querySelector('.testata');
  var ultimoY = window.scrollY || 0;
  function aggiornaTestata() {
    var y = window.scrollY || 0;
    testata.classList.toggle('piena', y > 30 || !document.querySelector('[data-strati]'));
    if (!doc.classList.contains('menu-aperto')) {
      if (y > ultimoY + 4 && y > window.innerHeight * 0.8) testata.classList.add('via');
      if (y < ultimoY - 4) testata.classList.remove('via');
    }
    ultimoY = y;
  }

  /* ---------- Comparse ---------- */
  var elementi = document.querySelectorAll('[data-appare]');
  if ('IntersectionObserver' in window && !ridotto) {
    var oss = new IntersectionObserver(function (voci) {
      voci.forEach(function (v) { if (v.isIntersecting) { v.target.classList.add('visibile'); oss.unobserve(v.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    elementi.forEach(function (el) { oss.observe(el); });
  } else elementi.forEach(function (el) { el.classList.add('visibile'); });

  /* ---------- Ripresa "strati": il materasso si apre scorrendo ---------- */
  var sezStrati = document.querySelector('[data-strati]');
  var video = sezStrati && sezStrati.querySelector('.strati-video');
  var etichette = sezStrati ? [].slice.call(sezStrati.querySelectorAll('.strato-etichetta')) : [];
  var durata = 0, obiettivo = 0, attuale = 0, idFrame = 0;
  if (video) {
    video.src = video.getAttribute(piccolo() ? 'data-src-piccolo' : 'data-src-grande');
    video.addEventListener('loadedmetadata', function () { durata = video.duration || 0; posizionaEtichette(); richiedi(); });
    // iOS sposta il video solo dopo un primo avvio
    var sblocca = function () { video.play().then(function () { video.pause(); }).catch(function () {}); };
    video.addEventListener('loadeddata', sblocca, { once: true });
  }
  function avanzamento(el) {
    var r = el.getBoundingClientRect();
    var corsa = r.height - window.innerHeight;
    return corsa > 0 ? limita(-r.top / corsa, 0, 1) : 0;
  }
  // Le etichette seguono lo strato anche quando il video è ritagliato (object-fit: cover)
  function posizionaEtichette() {
    if (!video) return;
    var box = video.getBoundingClientRect();
    var vw = video.videoWidth || 1280, vh = video.videoHeight || 720;
    var scala = Math.max(box.width / vw, box.height / vh);
    var alto = (box.height - vh * scala) / 2;
    etichette.forEach(function (el) {
      var y = alto + (parseFloat(el.getAttribute('data-y')) / 100) * vh * scala;
      el.style.top = y.toFixed(1) + 'px';
    });
  }
  function passo() {
    idFrame = 0;
    attuale += (obiettivo - attuale) * (ridotto ? 1 : 0.16);
    if (Math.abs(obiettivo - attuale) < 0.0005) attuale = obiettivo;
    var p = attuale;
    sezStrati.style.setProperty('--p', p.toFixed(4));
    // 0 → 0.14 fermo sul letto; 0.14 → 0.8 il materasso si apre; poi etichette
    var t = limita((p - 0.14) / 0.66, 0, 1);
    if (durata && Math.abs(video.currentTime - t * (durata - 0.06)) > 0.02) video.currentTime = t * (durata - 0.06);
    var vis = limita((p - 0.8) / 0.1, 0, 1);
    etichette.forEach(function (el, i) {
      var v = limita(vis * 1.6 - i * 0.12, 0, 1);
      el.style.opacity = v.toFixed(3);
      el.style.transform = 'translate(-50%, -50%) translateY(' + ((1 - v) * 10).toFixed(1) + 'px)';
    });
    if (attuale !== obiettivo) idFrame = requestAnimationFrame(passo);
  }
  function richiedi() {
    if (!sezStrati) return;
    obiettivo = avanzamento(sezStrati);
    if (!idFrame) idFrame = requestAnimationFrame(passo);
  }

  /* ---------- Video in loop quando visibili ---------- */
  document.querySelectorAll('video[data-auto]').forEach(function (v) {
    if (ridotto) return;
    var caricato = false;
    new IntersectionObserver(function (voci) {
      voci.forEach(function (x) {
        if (x.isIntersecting) {
          if (!caricato) { v.src = v.getAttribute(piccolo() ? 'data-src-piccolo' : 'data-src-grande'); caricato = true; }
          v.play().catch(function () {});
        } else v.pause();
      });
    }, { threshold: 0.35 }).observe(v);
  });

  var inAttesa = false;
  window.addEventListener('scroll', function () {
    if (inAttesa) return;
    inAttesa = true;
    requestAnimationFrame(function () { inAttesa = false; aggiornaTestata(); richiedi(); });
  }, { passive: true });
  window.addEventListener('resize', function () { posizionaEtichette(); richiedi(); }, { passive: true });
  aggiornaTestata();
  posizionaEtichette();
  richiedi();

  /* ---------- Guida alla portanza ---------- */
  var guida = document.querySelector('[data-guida]');
  var PORTANZE = [['Morbido', 'Accoglienza avvolgente: per chi è leggero e dorme spesso sul fianco.'], ['Medio', 'L’equilibrio tra accoglienza e sostegno: la scelta più versatile.'], ['Rigido', 'Sostegno deciso: per chi dorme supino o ha un peso più importante.'], ['Extra rigido', 'Superficie ferma e indeformabile: per chi vuole la massima stabilità.']];
  function calcolaGuida() {
    var pos = parseInt(guida.querySelector('[name=posizione]:checked').value, 10);
    var corp = parseInt(guida.querySelector('[name=corporatura]:checked').value, 10);
    // fianco → più accoglienza; schiena/pancia → più sostegno; corporatura robusta → più sostegno
    var livello = limita(Math.round(pos * 0.75 + corp * 1.1 - 0.15), 0, 3);
    guida.querySelector('[data-portanza-nome]').textContent = PORTANZE[livello][0];
    guida.querySelector('[data-portanza-testo]').textContent = PORTANZE[livello][1];
    guida.style.setProperty('--livello', livello);
    var b = guida.querySelector('[data-messaggio-guida]');
    var testiPos = ['sul fianco', 'sulla schiena', 'a pancia in giù'], testiCorp = ['esile', 'media', 'robusta'];
    b.setAttribute('data-messaggio', 'Dalla guida del sito: dormo ' + testiPos[pos] + ', corporatura ' + testiCorp[corp] + ' → portanza consigliata ' + PORTANZE[livello][0] + '. Vorrei provarla con un consulente.');
  }
  if (guida) { guida.addEventListener('change', calcolaGuida); calcolaGuida(); }

  /* ---------- Aperto adesso? (ora di Voghera) ---------- */
  var orari = MX.orari || {};
  var nomiGiorni = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
  var minuti = function (s) { var p = s.split(':'); return parseInt(p[0], 10) * 60 + parseInt(p[1], 10); };
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
      if (t.minuti >= minuti(oggi[i][0]) && t.minuti < minuti(oggi[i][1])) return { aperto: true, testo: 'Showroom aperto ora · fino alle ' + oggi[i][1] };
      if (t.minuti < minuti(oggi[i][0])) return { aperto: false, testo: 'Chiuso · apriamo alle ' + oggi[i][0] };
    }
    for (var g = 1; g <= 7; g++) {
      var gg = (t.giorno + g) % 7;
      if (orari[gg] && orari[gg].length) return { aperto: false, testo: 'Chiuso · riapriamo ' + (g === 1 ? 'domani' : nomiGiorni[gg]) + ' alle ' + orari[gg][0][0] };
    }
    return { aperto: false, testo: '' };
  }
  function mostraStato() {
    var s = statoApertura();
    document.querySelectorAll('[data-stato]').forEach(function (el) { el.textContent = s.testo; el.classList.toggle('aperto', s.aperto); });
  }
  mostraStato();
  setInterval(mostraStato, 60000);

  /* ---------- Richiesta: WhatsApp o e-mail con il messaggio già scritto ---------- */
  var finestra = document.getElementById('richiesta-finestra');
  function apriRichiesta(messaggio) {
    if (!finestra) return;
    var f = finestra.querySelector('form');
    if (messaggio) f.querySelector('[name="messaggio"]').value = messaggio;
    if (typeof finestra.showModal === 'function') finestra.showModal(); else finestra.setAttribute('open', '');
    setTimeout(function () { var c = f.querySelector('[name="nome"]'); if (c) c.focus(); }, 60);
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-apri-richiesta]');
    if (b) { e.preventDefault(); apriRichiesta(b.getAttribute('data-messaggio')); return; }
    if (finestra && (e.target.closest('[data-chiudi-richiesta]') || e.target === finestra)) finestra.close();
  });
  document.querySelectorAll('form[data-modulo]').forEach(function (form) {
    var errore = form.querySelector('.modulo-errore');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var via = (e.submitter && e.submitter.value) || 'whatsapp';
      var d = {};
      ['nome', 'telefono', 'cosa', 'misura', 'dove', 'comune', 'messaggio'].forEach(function (k) { var c = form.elements[k]; d[k] = c ? c.value.trim() : ''; });
      form.querySelectorAll('.campo').forEach(function (c) { c.classList.remove('errore'); });
      var mancano = ['nome', 'telefono'].filter(function (k) { return !d[k]; });
      if (mancano.length) {
        mancano.forEach(function (k) { form.elements[k].closest('.campo').classList.add('errore'); });
        errore.textContent = 'Scrivi nome e telefono: così possiamo richiamarti. Il resto è facoltativo.';
        errore.hidden = false;
        form.elements[mancano[0]].focus();
        return;
      }
      errore.hidden = true;
      var righe = ['Richiesta: ' + d.cosa, 'Nome: ' + d.nome, 'Telefono: ' + d.telefono, d.misura && 'Misura: ' + d.misura, 'Consulenza: ' + d.dove, d.comune && 'Comune: ' + d.comune, d.messaggio && '\n' + d.messaggio].filter(Boolean);
      if (via === 'email') {
        location.href = 'mailto:' + MX.email + '?subject=' + encodeURIComponent('Richiesta consulenza dal sito: ' + d.cosa) + '&body=' + encodeURIComponent('Buongiorno,\n\n' + righe.join('\n') + '\n\nGrazie.');
      } else {
        window.open('https://wa.me/' + MX.wa + '?text=' + encodeURIComponent('Buongiorno Materaxissimi!\n' + righe.join('\n')), '_blank', 'noopener');
      }
      if (finestra && finestra.open) setTimeout(function () { finestra.close(); }, 400);
    });
  });

  /* ---------- Barra azioni: si nasconde su blocco contatti e piede (desktop) ---------- */
  var barra = document.querySelector('.barra-azioni');
  var zone = document.querySelectorAll('.contatto-fine, .piede, .strati');
  if (barra && zone.length && 'IntersectionObserver' in window) {
    var dentro = new Set();
    var ossBarra = new IntersectionObserver(function (voci) {
      voci.forEach(function (v) { if (v.isIntersecting) dentro.add(v.target); else dentro.delete(v.target); });
      barra.classList.toggle('nascosta', dentro.size > 0 && !piccolo());
    }, { threshold: 0.1 });
    zone.forEach(function (z) { ossBarra.observe(z); });
  }

  /* ---------- FAQ: una risposta aperta alla volta ---------- */
  document.querySelectorAll('.faq').forEach(function (faq) {
    faq.addEventListener('toggle', function (e) {
      if (!e.target.open) return;
      faq.querySelectorAll('details[open]').forEach(function (d) { if (d !== e.target) d.open = false; });
    }, true);
  });

  /* ---------- Consenso cookie (Linee guida Garante 2021) + mappa ---------- */
  var CHIAVE = 'mx-consenso', SEI_MESI = 1000 * 60 * 60 * 24 * 182;
  var memoria = {
    leggi: function () { try { return JSON.parse(localStorage.getItem(CHIAVE)); } catch (e) { return null; } },
    scrivi: function (v) { try { localStorage.setItem(CHIAVE, JSON.stringify(v)); } catch (e) {} }
  };
  var consenso = memoria.leggi();
  if (consenso && (!consenso.data || Date.now() - consenso.data > SEI_MESI)) consenso = null;
  var banner = document.querySelector('.consenso-cookie');
  var ascoltatori = [];
  function applica(s) { consenso = { esterni: !!s.esterni, data: Date.now() }; memoria.scrivi(consenso); chiudiBanner(); ascoltatori.forEach(function (f) { f(); }); }
  function dettagli(si) {
    banner.querySelector('.consenso-dettagli').hidden = !si;
    banner.querySelector('[data-consenso="personalizza"]').hidden = si;
    banner.querySelector('[data-consenso="salva"]').hidden = !si;
  }
  function apriBanner(conDettagli) {
    if (!banner) return;
    banner.hidden = false;
    banner.querySelector('[data-categoria="esterni"]').checked = !!(consenso && consenso.esterni);
    dettagli(!!conDettagli);
    requestAnimationFrame(function () { banner.classList.add('visibile'); });
  }
  function chiudiBanner() { if (!banner) return; banner.classList.remove('visibile'); setTimeout(function () { banner.hidden = true; }, 400); }
  if (banner) {
    banner.addEventListener('click', function (e) {
      var b = e.target.closest('[data-consenso]');
      if (!b) return;
      var a = b.getAttribute('data-consenso');
      if (a === 'accetta') applica({ esterni: true });
      else if (a === 'rifiuta') applica({ esterni: false });
      else if (a === 'personalizza') dettagli(true);
      else if (a === 'salva') applica({ esterni: banner.querySelector('[data-categoria="esterni"]').checked });
    });
    if (!consenso) setTimeout(function () { apriBanner(false); }, 1500);
  }
  document.querySelectorAll('[data-preferenze-cookie]').forEach(function (b) { b.addEventListener('click', function () { apriBanner(true); }); });
  document.addEventListener('click', function (e) { if (e.target.closest('[data-carica-esterni]')) applica({ esterni: true }); });
  document.querySelectorAll('[data-mappa]').forEach(function (box) {
    var vicino = false;
    function carica() {
      if (box.querySelector('iframe')) return;
      var av = box.querySelector('.mappa-avviso'); if (av) av.remove();
      var f = document.createElement('iframe');
      f.src = box.getAttribute('data-mappa'); f.title = 'Mappa: Materaxissimi, Strada Bobbio 24, Voghera'; f.loading = 'lazy'; f.referrerPolicy = 'no-referrer-when-downgrade';
      box.appendChild(f);
    }
    function avviso() {
      if (box.querySelector('.mappa-avviso') || box.querySelector('iframe')) return;
      var d = document.createElement('div');
      d.className = 'mappa-avviso';
      d.innerHTML = '<p class="titolo-m">Strada Bobbio, 24 · Voghera</p><p>La mappa interattiva è fornita da Google Maps, che può installare cookie di terze parti.</p><button class="pulsante contorno" type="button" data-carica-esterni>Mostra la mappa</button>';
      box.appendChild(d);
    }
    function decidi() {
      if (consenso && consenso.esterni) { if (vicino) carica(); }
      else { var f = box.querySelector('iframe'); if (f) f.remove(); avviso(); }
    }
    ascoltatori.push(decidi);
    if ('IntersectionObserver' in window) new IntersectionObserver(function (v) { if (v[0].isIntersecting) { vicino = true; decidi(); } }, { rootMargin: '400px 0px' }).observe(box);
    else vicino = true;
    decidi();
  });

  var anno = document.querySelector('[data-anno]');
  if (anno) anno.textContent = new Date().getFullYear();
})();
