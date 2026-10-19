/* ==========================================================================
   Jalila Il Bellessere — script del sito (vanilla, nessuna libreria, nessun dato salvato)
   menu · testata che si nasconde · titoli che salgono parola per parola · comparse · parallasse morbida delle foto
   clip che partono quando entrano nello schermo · nastro che segue lo scroll · numeri che contano · striscia da trascinare
   Tutto il movimento usa solo transform e opacity dentro un unico requestAnimationFrame: resta fluido anche sui telefoni.
   ========================================================================== */
(function () {
  'use strict';

  var doc = document.documentElement;
  var JB = window.JB || {};
  var ridotto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var osserva = 'IntersectionObserver' in window;

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
    [].forEach.call(menu.querySelectorAll('li'), function (li, k) { li.style.setProperty('--k', k); });
    bottone.addEventListener('click', function () { impostaMenu(!doc.classList.contains('menu-aperto')); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) impostaMenu(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && doc.classList.contains('menu-aperto')) { impostaMenu(false); bottone.focus(); } });
  }

  /* ---------- Pulsante fisso: si chiude toccando fuori o con Esc ---------- */
  var fisso = document.querySelector('.fisso');
  if (fisso) {
    document.addEventListener('click', function (e) { if (fisso.open && !fisso.contains(e.target)) fisso.open = false; });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fisso.open = false; });
  }

  /* ---------- Titoli: ogni parola sale da sotto la propria riga ---------- */
  var titoli = [].slice.call(document.querySelectorAll('[data-righe], main .titolo-l, main .titolo-xl'));
  titoli.forEach(function (t) {
    if (ridotto) return;
    t.setAttribute('data-righe', '');
    var n = 0;
    (function incarta(nodo) {
      [].slice.call(nodo.childNodes).forEach(function (figlio) {
        if (figlio.nodeType === 3) {
          var pezzi = document.createDocumentFragment();
          figlio.textContent.split(/(\s+)/).forEach(function (p) {
            if (!p) return;
            if (/^\s+$/.test(p)) { pezzi.appendChild(document.createTextNode(' ')); return; }
            var fuori = document.createElement('span'); fuori.className = 'parola';
            var dentro = document.createElement('span'); dentro.textContent = p; dentro.style.setProperty('--n', n++);
            fuori.appendChild(dentro); pezzi.appendChild(fuori);
          });
          nodo.replaceChild(pezzi, figlio);
        } else if (figlio.nodeType === 1) incarta(figlio);
      });
    })(t);
  });

  /* ---------- Comparse: testi, cornici e titoli entrano quando arrivano nello schermo ---------- */
  var elementi = document.querySelectorAll('[data-appare], [data-righe], .foto');
  if (osserva && !ridotto) {
    var oss = new IntersectionObserver(function (voci) {
      voci.forEach(function (v) { if (v.isIntersecting) { v.target.classList.add('visibile'); oss.unobserve(v.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    elementi.forEach(function (el) { oss.observe(el); });
  } else elementi.forEach(function (el) { el.classList.add('visibile'); });

  /* ---------- Clip: si caricano quando si avvicinano, girano solo mentre si vedono ---------- */
  var rete = navigator.connection || {};
  var clip = [].slice.call(document.querySelectorAll('.foto.clip'));
  if (clip.length && osserva && !ridotto && !rete.saveData) {
    var ossClip = new IntersectionObserver(function (voci) {
      voci.forEach(function (v) {
        var video = v.target.querySelector('video');
        if (v.isIntersecting) {
          if (!video.src) {
            video.src = video.getAttribute('data-src');
            video.addEventListener('playing', function () { v.target.classList.add('parte'); }, { once: true });
          }
          var avvio = video.play();
          if (avvio && avvio.catch) avvio.catch(function () {});
        } else if (video.src) video.pause();
      });
    }, { rootMargin: '200px 0px' });
    clip.forEach(function (c) { ossClip.observe(c); });
  }

  /* ---------- Movimento legato allo scroll: un solo ciclo, valori ammorbiditi ----------
     - testata: si nasconde scendendo e torna appena si risale
     - foto [data-parallasse]: l'immagine scorre piano dentro la cornice
     - nastro: accelera e cambia verso seguendo lo scroll */
  var parallassi = [].slice.call(document.querySelectorAll('[data-parallasse]')).map(function (el) { return { el: el, y: 0, vista: false }; });
  if (osserva) {
    var ossPar = new IntersectionObserver(function (voci) {
      voci.forEach(function (v) { parallassi.forEach(function (p) { if (p.el === v.target) p.vista = v.isIntersecting; }); });
    }, { rootMargin: '120px 0px' });
    parallassi.forEach(function (p) { ossPar.observe(p.el); });
  }
  var nastro = document.querySelector('[data-nastro]');
  var ultimaY = window.scrollY || 0, velocita = 0, spinta = 0, attivo = false;

  function ciclo() {
    var y = window.scrollY || 0, alta = window.innerHeight;
    var delta = y - ultimaY;
    ultimaY = y;
    velocita += (delta - velocita) * 0.12;
    doc.classList.toggle('scesa', y > 8);
    if (!doc.classList.contains('menu-aperto')) {
      if (delta > 3 && y > 320) doc.classList.add('nascosta');
      else if (delta < -3 || y < 120) doc.classList.remove('nascosta');
    }
    var ancora = Math.abs(velocita) > 0.05;
    if (!ridotto) {
      parallassi.forEach(function (p) {
        if (!p.vista) return;
        var r = p.el.getBoundingClientRect();
        var meta = ((r.top + r.height / 2) / alta - 0.5) * -9; // da +4,5% a -4,5% attraversando lo schermo
        p.y += (meta - p.y) * 0.1;
        if (Math.abs(meta - p.y) > 0.02) ancora = true;
        p.el.style.setProperty('--y', p.y.toFixed(3));
      });
      if (nastro) {
        spinta += (Math.max(-3, Math.min(3, velocita / 14)) - spinta) * 0.08;
        nastro.style.animationDuration = (46 / (1 + Math.abs(spinta) * 1.6)).toFixed(2) + 's';
        nastro.style.animationDirection = spinta < -0.25 ? 'reverse' : 'normal';
      }
    }
    if (ancora) requestAnimationFrame(ciclo); else attivo = false;
  }
  function sveglia() { if (!attivo) { attivo = true; requestAnimationFrame(ciclo); } }
  window.addEventListener('scroll', sveglia, { passive: true });
  window.addEventListener('resize', sveglia);
  sveglia();

  /* ---------- Numeri che contano fino al valore ---------- */
  var contatori = document.querySelectorAll('[data-conta]');
  if (contatori.length && osserva && !ridotto) {
    var forma = function (n) { return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); };
    var ossConta = new IntersectionObserver(function (voci) {
      voci.forEach(function (v) {
        if (!v.isIntersecting) return;
        ossConta.unobserve(v.target);
        var fine = parseFloat(v.target.getAttribute('data-conta')), inizio = performance.now(), durata = 1600;
        (function passo(ora) {
          var t = Math.min(1, (ora - inizio) / durata);
          v.target.textContent = forma(fine * (1 - Math.pow(1 - t, 4)));
          if (t < 1) requestAnimationFrame(passo);
        })(inizio);
      });
    }, { rootMargin: '0px 0px -10% 0px' });
    contatori.forEach(function (c) { c.textContent = '0'; ossConta.observe(c); });
  } else contatori.forEach(function (c) { c.textContent = String(c.getAttribute('data-conta')).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); });

  /* ---------- Striscia di Instagram: si trascina con il mouse (col dito scorre da sola) ---------- */
  [].forEach.call(document.querySelectorAll('[data-trascina]'), function (striscia) {
    var giu = false, partenza = 0, scorrimento = 0, mosso = 0;
    striscia.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse') return; giu = true; mosso = 0; partenza = e.clientX; scorrimento = striscia.scrollLeft; });
    window.addEventListener('pointermove', function (e) {
      if (!giu) return;
      mosso = Math.abs(e.clientX - partenza);
      if (mosso > 4) striscia.classList.add('trascina');
      striscia.scrollLeft = scorrimento - (e.clientX - partenza);
    });
    window.addEventListener('pointerup', function () { giu = false; setTimeout(function () { striscia.classList.remove('trascina'); }, 0); });
    striscia.addEventListener('click', function (e) { if (mosso > 6) e.preventDefault(); }, true); // un trascinamento non apre il link
  });

  /* ---------- Ora di Voghera e Stradella, qualunque sia il fuso del visitatore ---------- */
  function adessoRoma() {
    try {
      var parti = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Rome', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
      var m = {};
      parti.forEach(function (p) { m[p.type] = p.value; });
      return { giorno: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(m.weekday), minuti: (parseInt(m.hour, 10) % 24) * 60 + parseInt(m.minute, 10) };
    } catch (e) { var d = new Date(); return { giorno: d.getDay(), minuti: d.getHours() * 60 + d.getMinutes() }; }
  }

  /* ---------- Aperto adesso? Un cartellino per ogni sede: <p data-stato="voghera"> ---------- */
  var nomiGiorni = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
  var minuti = function (s) { var p = s.split(':'); return parseInt(p[0], 10) * 60 + parseInt(p[1], 10); };
  var ora = function (s) { return s.replace(/^0/, ''); };
  function statoApertura(orari) {
    var t = adessoRoma();
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
    document.querySelectorAll('[data-stato]').forEach(function (el) {
      var orari = (JB.orari || {})[el.getAttribute('data-stato')];
      if (!orari) return;
      var s = statoApertura(orari);
      el.textContent = s.testo;
      el.classList.toggle('aperto', s.aperto);
    });
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

  var anno = document.querySelector('[data-anno]');
  if (anno) anno.textContent = new Date().getFullYear();
})();
