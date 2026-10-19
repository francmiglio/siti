/* ==========================================================================
   A M'arcord piada & cascioni — script del sito (vanilla, nessuna libreria, nessun dato salvato)
   la piadina che gira con lo scroll · testata · menu · comparse · "aperto ora" · carte che si inclinano
   ========================================================================== */
(function () {
  'use strict';

  var doc = document.documentElement;
  var ridotto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var rete = navigator.connection || {};
  var osserva = 'IntersectionObserver' in window;

  /* ---------- IL PALCO ----------
     <section class="palco" data-n="285" data-tappe="0,71,142,213,284">: una sola fila di fotogrammi
     (assets/seq/piada/f-001.webp ...) in cui la piadina fa quattro giri, e a ogni giro la farcitura diventa la successiva.
     Lo scroll sceglie il fotogramma: tra una tappa e l'altra la piadina gira, sulle tappe si ferma e compare il testo.
     I fotogrammi sono disegnati su un <canvas> (fluido anche tornando indietro, a differenza di un video) e arrivano
     a ondate: prima uno ogni otto, poi gli altri; finché uno manca si disegna il più vicino già arrivato.
     Con "riduci movimento" o risparmio dati il palco non parte e resta l'elenco delle piadine con le foto ferme. */
  var palco = document.querySelector('.palco');
  var scena = null;
  if (palco && !ridotto && !rete.saveData && osserva && palco.querySelector('canvas').getContext) {
    (function () {
      var n = parseInt(palco.getAttribute('data-n'), 10);
      var tappe = palco.getAttribute('data-tappe').split(',').map(Number);
      var giri = tappe.length - 1;
      var versione = palco.getAttribute('data-v') || '';
      var tela = palco.querySelector('.palco-tela'), ctx = tela.getContext('2d');
      var pannelli = [].slice.call(palco.querySelectorAll('.tappa'));
      var punti = [].slice.call(palco.querySelectorAll('[data-vai]'));
      var sfondo = getComputedStyle(doc).getPropertyValue('--ardesia').trim() || '#1b140d';
      var fotogrammi = new Array(n), ultimo = -1, tappaOra = -2;
      var W = 0, H = 0, puntaX = 0, puntaY = 0, sx = 0, sy = 0;
      var s = { f: 0, vista: true };

      palco.classList.add('viva');

      function indirizzo(i) { return 'assets/seq/piada/f-' + ('00' + (i + 1)).slice(-3) + '.webp' + (versione ? '?v=' + versione : ''); }
      (function carica() {
        var ordine = [], messo = {};
        function metti(k) { if (k < n && !messo[k]) { messo[k] = 1; ordine.push(k); } }
        metti(0);
        for (var k = 0; k < 24; k++) metti(k);            // l'inizio del primo giro, tutto in fila: è quello che si vede subito
        for (k = 0; k < n; k += 8) metti(k);
        tappe.forEach(metti);
        for (k = 0; k < n; k += 4) metti(k);
        for (k = 0; k < n; k += 2) metti(k);
        for (k = 0; k < n; k++) metti(k);
        var fila = 0;
        function prossimo() {
          if (fila >= ordine.length) return;
          var i = ordine[fila++], im = new Image();
          im.decoding = 'async';
          im.onload = function () { fotogrammi[i] = im; if (i === 0) { misura(); palco.classList.add('pronta'); } ultimo = -1; sveglia(); prossimo(); };
          im.onerror = prossimo;
          im.src = indirizzo(i);
        }
        for (var q = 0; q < 5; q++) prossimo();
      })();

      function misura() {
        var r = tela.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        var w = Math.round(r.width * dpr), h = Math.round(r.height * dpr);
        if (w && h && (tela.width !== w || tela.height !== h)) { tela.width = w; tela.height = h; ultimo = -1; }
        W = tela.width; H = tela.height;
      }
      function vicino(i) {
        if (fotogrammi[i]) return fotogrammi[i];
        for (var d = 1; d < n; d++) { if (fotogrammi[i - d]) return fotogrammi[i - d]; if (fotogrammi[i + d]) return fotogrammi[i + d]; }
        return null;
      }
      function dolce(t) { t = Math.min(1, Math.max(0, t)); return t * t * (3 - 2 * t); }

      // Dove si trova la sezione rispetto allo scroll (0..1) → fotogramma e tappa da mostrare.
      function bersaglio() {
        var r = palco.getBoundingClientRect(), corsa = r.height - window.innerHeight;
        var u = corsa > 0 ? Math.min(1, Math.max(0, -r.top / corsa)) : 0;
        var x = u * giri, g = Math.min(giri - 1, Math.floor(x)), t = x - g;
        // nel primo giro la piadina parte subito (nessun tratto a vuoto); negli altri sosta un attimo sulla tappa
        var avanza = g === 0 ? dolce(t / 0.82) : dolce((t - 0.1) / 0.74);
        var tappa = -1;
        if (t < (g === 0 ? 0.2 : 0.16)) tappa = g; else if (t > 0.64) tappa = g + 1;
        if (u >= 1) tappa = giri;
        return { f: tappe[g] + avanza * (tappe[g + 1] - tappe[g]), tappa: tappa, u: u };
      }

      s.disegna = function () {
        var b = bersaglio();
        s.f += (b.f - s.f) * 0.16;
        if (Math.abs(b.f - s.f) < 0.02) s.f = b.f;
        sx += (puntaX - sx) * 0.06; sy += (puntaY - sy) * 0.06;

        if (b.tappa !== tappaOra) {
          tappaOra = b.tappa;
          pannelli.forEach(function (p) { p.classList.toggle('attiva', parseInt(p.getAttribute('data-i'), 10) === tappaOra); });
        }
        var corrente = Math.round(b.u * giri);
        punti.forEach(function (p, k) { if (k === corrente) p.setAttribute('aria-current', 'true'); else p.removeAttribute('aria-current'); });
        palco.classList.toggle('partita', b.u > 0.015);

        var i = Math.floor(s.f), resto = s.f - i;
        var chiave = Math.round(s.f * 20) / 20 + Math.round(sx * 2) * 1e-4 + Math.round(sy * 2) * 1e-7;
        if (chiave !== ultimo && W) {
          var im = vicino(Math.min(n - 1, i));
          if (im) {
            // Il fotogramma non riempie lo schermo: sta su un fondo dello stesso colore, con i bordi sfumati.
            // Largo: piadina grande a destra, testi a sinistra. Stretto: piadina in alto, testi sotto.
            var largo = W >= 900 * (W / tela.clientWidth) && W / H > 1.1;
            var fw, fh, cx, cy, prop = im.naturalWidth / im.naturalHeight;
            if (largo) { fh = H * 1.2; fw = fh * prop; cx = W * 0.685; cy = H * 0.47; }
            else { fw = Math.min(W * 1.5, H * 0.74 * prop); fh = fw / prop; cx = W * 0.5; cy = H * 0.29; }
            var x = cx - fw / 2 + sx, y = cy - fh / 2 + sy;
            ctx.globalAlpha = 1;
            ctx.fillStyle = sfondo;
            ctx.fillRect(0, 0, W, H);
            ctx.drawImage(im, x, y, fw, fh);
            var dopo = resto > 0.04 && i + 1 < n ? fotogrammi[i + 1] : null;
            if (dopo && fotogrammi[i] === im) { ctx.globalAlpha = resto; ctx.drawImage(dopo, x, y, fw, fh); ctx.globalAlpha = 1; }
            sfuma(x, y, fw, fh);
            ultimo = chiave;
          }
        }
        return Math.abs(b.f - s.f) > 0.02 || Math.abs(puntaX - sx) > 0.3 || Math.abs(puntaY - sy) > 0.3;
      };
      function sfuma(x, y, w, h) {
        var m = w * 0.14, g;
        g = ctx.createLinearGradient(x, 0, x + m, 0); g.addColorStop(0, sfondo); g.addColorStop(1, 'rgba(27,20,13,0)');
        ctx.fillStyle = g; ctx.fillRect(x - 1, y - 1, m + 1, h + 2);
        g = ctx.createLinearGradient(x + w, 0, x + w - m, 0); g.addColorStop(0, sfondo); g.addColorStop(1, 'rgba(27,20,13,0)');
        ctx.fillStyle = g; ctx.fillRect(x + w - m, y - 1, m + 1, h + 2);
        m = h * 0.14;
        g = ctx.createLinearGradient(0, y, 0, y + m); g.addColorStop(0, sfondo); g.addColorStop(1, 'rgba(27,20,13,0)');
        ctx.fillStyle = g; ctx.fillRect(x - 1, y - 1, w + 2, m + 1);
        g = ctx.createLinearGradient(0, y + h, 0, y + h - m); g.addColorStop(0, sfondo); g.addColorStop(1, 'rgba(27,20,13,0)');
        ctx.fillStyle = g; ctx.fillRect(x - 1, y + h - m, w + 2, m + 1);
      }
      s.misura = misura;

      // Il puntatore sposta appena la piadina: dà profondità senza distrarre.
      if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        palco.addEventListener('pointermove', function (e) {
          var dpr = W / (tela.clientWidth || 1);
          puntaX = (e.clientX / window.innerWidth - 0.5) * -26 * dpr;
          puntaY = (e.clientY / window.innerHeight - 0.5) * -16 * dpr;
          sveglia();
        });
      }
      // I punti in basso portano alla piadina scelta.
      punti.forEach(function (p) {
        p.addEventListener('click', function () {
          var k = parseInt(p.getAttribute('data-vai'), 10);
          var r = palco.getBoundingClientRect(), corsa = r.height - window.innerHeight;
          var u = k === 0 ? 0 : (k - 1 + 0.9) / giri;
          window.scrollTo({ top: window.scrollY + r.top + corsa * Math.min(1, u) + (k === giri ? 2 : 0), behavior: 'smooth' });
        });
      });
      new IntersectionObserver(function (v) { s.vista = v[0].isIntersecting; if (s.vista) { misura(); sveglia(); } }).observe(palco);
      scena = s;
    })();
  }

  /* ---------- Un solo ciclo per tutto il movimento ---------- */
  var nastro = document.querySelector('[data-nastro]');
  var ultimaY = window.scrollY || 0, velocita = 0, spinta = 0, attivo = false;
  var soglia = palco && scena ? function () { return palco.offsetHeight - window.innerHeight * 0.45; } : function () { return 120; };
  function ciclo() {
    var y = window.scrollY || 0, delta = y - ultimaY, ancora = false;
    ultimaY = y;
    velocita += (delta - velocita) * 0.12;
    var giu = y > soglia();
    doc.classList.toggle('scesa', giu);
    if (!doc.classList.contains('menu-aperto')) {
      if (delta > 3 && giu && y > soglia() + 300) doc.classList.add('nascosta');
      else if (delta < -3 || !giu) doc.classList.remove('nascosta');
    }
    if (scena && scena.vista && scena.disegna()) ancora = true;
    if (nastro && !ridotto) {
      spinta += (Math.max(-3, Math.min(3, velocita / 14)) - spinta) * 0.08;
      nastro.style.animationDuration = (40 / (1 + Math.abs(spinta) * 1.6)).toFixed(2) + 's';
    }
    if (Math.abs(velocita) > 0.05) ancora = true;
    if (ancora) requestAnimationFrame(ciclo); else attivo = false;
  }
  function sveglia() { if (!attivo) { attivo = true; requestAnimationFrame(ciclo); } }
  window.addEventListener('scroll', sveglia, { passive: true });
  window.addEventListener('resize', function () { if (scena) scena.misura(); sveglia(); });
  sveglia();

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
  if (osserva && !ridotto) {
    var oss = new IntersectionObserver(function (voci) {
      voci.forEach(function (v) { if (v.isIntersecting) { v.target.classList.add('visibile'); oss.unobserve(v.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    [].forEach.call(elementi, function (el) { oss.observe(el); });
  } else [].forEach.call(elementi, function (el) { el.classList.add('visibile'); });

  /* ---------- Carte che si inclinano verso il puntatore ---------- */
  if (!ridotto && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    [].forEach.call(document.querySelectorAll('[data-inclina]'), function (c) {
      c.addEventListener('pointermove', function (e) {
        var r = c.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        c.style.transition = 'transform .12s linear';
        c.style.transform = 'rotateY(' + (x * 7).toFixed(2) + 'deg) rotateX(' + (-y * 6).toFixed(2) + 'deg) translateZ(8px)';
      });
      c.addEventListener('pointerleave', function () { c.style.transition = 'transform .7s cubic-bezier(.2,.8,.2,1)'; c.style.transform = ''; });
    });
  }

  /* ---------- Aperto ora? Calcolato dagli orari scritti nella pagina, sull'ora italiana ---------- */
  (function () {
    var orari;
    try { orari = JSON.parse(document.body.getAttribute('data-orari')); } catch (e) { return; }
    var parti = {};
    try {
      new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Rome', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date()).forEach(function (p) { parti[p.type] = p.value; });
    } catch (e) { return; }
    var g = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(parti.weekday);
    var ora = (parseInt(parti.hour, 10) % 24) * 60 + parseInt(parti.minute, 10);
    var minuti = function (t) { var x = t.split(':'); return parseInt(x[0], 10) * 60 + parseInt(x[1], 10); };
    var nomi = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
    var testo = '', aperto = false;
    (orari[g] || []).forEach(function (f) {
      if (ora >= minuti(f[0]) && ora < minuti(f[1])) { aperto = true; testo = 'Aperto ora · fino a' + (f[1] === '24:00' ? ' mezzanotte' : 'lle ' + f[1]); }
    });
    if (!aperto) {
      var dopo = (orari[g] || []).filter(function (f) { return minuti(f[0]) > ora; })[0];
      if (dopo) testo = 'Chiuso ora · apre oggi alle ' + dopo[0];
      else for (var k = 1; k <= 7; k++) {
        var d = (g + k) % 7;
        if ((orari[d] || []).length) { testo = 'Chiuso ora · apre ' + (k === 1 ? 'domani' : nomi[d]) + ' alle ' + orari[d][0][0]; break; }
      }
    }
    [].forEach.call(document.querySelectorAll('[data-adesso]'), function (el) { el.textContent = testo; el.classList.toggle('aperto', aperto); el.hidden = !testo; });
    var riga = document.querySelector('tr[data-giorno="' + g + '"]');
    if (riga) riga.classList.add('oggi');
  })();

  /* ---------- Pagina del menu: evidenzia la sezione che si sta leggendo ---------- */
  var indice = document.querySelector('.menu-indice');
  if (indice && osserva) {
    var voci = {};
    [].forEach.call(indice.querySelectorAll('a'), function (a) { voci[a.getAttribute('href').slice(1)] = a; });
    var ossMenu = new IntersectionObserver(function (v) {
      v.forEach(function (x) {
        if (!x.isIntersecting) return;
        Object.keys(voci).forEach(function (id) { voci[id].classList.toggle('qui', id === x.target.id); });
        var a = voci[x.target.id];
        if (a) indice.scrollTo({ left: a.offsetLeft - indice.clientWidth / 2 + a.offsetWidth / 2, behavior: ridotto ? 'auto' : 'smooth' });
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    [].forEach.call(document.querySelectorAll('.menu-sezione'), function (sez) { ossMenu.observe(sez); });
  }

  /* ---------- FAQ: una sola risposta aperta ---------- */
  [].forEach.call(document.querySelectorAll('.faq'), function (faq) {
    faq.addEventListener('toggle', function (e) {
      if (!e.target.open) return;
      [].forEach.call(faq.querySelectorAll('details[open]'), function (d) { if (d !== e.target) d.open = false; });
    }, true);
  });

  var anno = document.querySelector('[data-anno]');
  if (anno) anno.textContent = new Date().getFullYear();
})();
