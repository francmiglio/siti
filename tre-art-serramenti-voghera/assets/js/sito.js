/* ==========================================================================
   Tre Art Serramenti — script del sito (vanilla, nessuna libreria, nessun dato salvato)
   scene legate allo scroll · menu · testata che si nasconde · comparse · schede dei materiali · preventivo su WhatsApp
   ========================================================================== */
(function () {
  'use strict';

  var doc = document.documentElement;
  var ridotto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var rete = navigator.connection || {};
  var osserva = 'IntersectionObserver' in window;

  /* ---------- SCENE: fotogrammi disegnati su canvas seguendo lo scroll ----------
     <section class="seq" data-seq="nome" data-n="72"> alta più schermi, con un palco che resta fermo.
     p = 0..1 è il punto della scena: sceglie il fotogramma e accende i testi [data-da][data-a].
     I fotogrammi (assets/seq/<nome>/f-001.webp ...) si caricano quando la scena si avvicina; finché uno manca
     si disegna il più vicino già arrivato, così non si vede mai un buco.
     La prima scena parte da sola per un tratto appena si apre il sito: nessuno "scroll a vuoto". */
  var scene = [];
  if (!ridotto && !rete.saveData && osserva) {
    [].forEach.call(document.querySelectorAll('.seq'), function (sez, indice) {
      var nome = sez.getAttribute('data-seq'), n = parseInt(sez.getAttribute('data-n'), 10);
      var tela = sez.querySelector('.seq-tela'), ctx = tela.getContext('2d');
      var testi = [].map.call(sez.querySelectorAll('[data-da]'), function (el) { return { el: el, da: parseFloat(el.getAttribute('data-da')), a: parseFloat(el.getAttribute('data-a')) }; });
      var fotogrammi = new Array(n), partita = false, ultimo = -1, arrivati = 0;
      var s = { sez: sez, p: 0, vista: indice === 0, intro: 0, prima: indice === 0, testa: 0, partenza: 0 };
      s.prontaTesta = function () { return arrivati >= s.testa; }; // i fotogrammi dell'apertura automatica sono tutti arrivati?
      sez.classList.add('seq-viva');

      function carica() {
        if (partita) return;
        partita = true;
        // Ordine di caricamento. Nella prima scena arrivano prima, tutti in fila, i fotogrammi dell'inizio (quelli
        // dell'apertura automatica, che deve essere fluida da subito); poi uno ogni quattro, poi gli altri.
        var ordine = [], testa = s.prima ? Math.ceil(n * 0.3) : 0, messo = {};
        function metti(k) { if (!messo[k]) { messo[k] = 1; ordine.push(k); } }
        for (var k = 0; k < testa; k++) metti(k);
        for (k = 0; k < n; k += 4) metti(k);
        for (k = 0; k < n; k++) metti(k);
        s.testa = testa;
        var fila = 0;
        (function prossimo() {
          if (fila >= ordine.length) return;
          var i = ordine[fila++], im = new Image();
          im.decoding = 'async';
          im.onload = function () { fotogrammi[i] = im; arrivati++; if (i === 0) { misura(); sez.classList.add('seq-pronta'); } ultimo = -1; sveglia(); prossimo(); };
          im.onerror = prossimo;
          im.src = 'assets/seq/' + nome + '/f-' + ('00' + (i + 1)).slice(-3) + '.webp';
        })();
        // quattro scaricamenti in parallelo
        for (var q = 0; q < 3; q++) (function avvia() {
          if (fila >= ordine.length) return;
          var i = ordine[fila++], im = new Image();
          im.onload = function () { fotogrammi[i] = im; arrivati++; ultimo = -1; sveglia(); avvia(); };
          im.onerror = avvia;
          im.src = 'assets/seq/' + nome + '/f-' + ('00' + (i + 1)).slice(-3) + '.webp';
        })();
      }
      function misura() {
        var r = tela.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        var w = Math.round(r.width * dpr), h = Math.round(r.height * dpr);
        if (w && h && (tela.width !== w || tela.height !== h)) { tela.width = w; tela.height = h; ultimo = -1; }
      }
      function vicino(i) { // il fotogramma già caricato più vicino a quello chiesto
        if (fotogrammi[i]) return fotogrammi[i];
        for (var d = 1; d < n; d++) { if (fotogrammi[i - d]) return fotogrammi[i - d]; if (fotogrammi[i + d]) return fotogrammi[i + d]; }
        return null;
      }
      s.misura = misura;
      s.disegna = function (meta) {
        s.p += (meta - s.p) * (s.prima && s.p < 0.24 ? 0.3 : 0.14); // segue lo scroll con morbidezza (l'apertura automatica è già ammorbidita di suo)
        if (Math.abs(meta - s.p) < 0.0006) s.p = meta;
        sez.style.setProperty('--p', s.p.toFixed(4));
        testi.forEach(function (t) { t.el.classList.toggle('attiva', s.p >= t.da && s.p < t.a); });
        // Posizione "con la virgola" tra due fotogrammi: si disegna il primo e, sopra, il successivo in trasparenza.
        // Questa dissolvenza tra fotogrammi vicini toglie gli scatti quando il movimento è lento (come all'apertura).
        var f = s.p * (n - 1), i = Math.floor(f), resto = f - i, chiave = Math.round(f * 24) / 24;
        if (chiave !== ultimo) {
          var im = vicino(i), dopo = resto > 0.04 && i + 1 < n ? fotogrammi[i + 1] : null;
          if (im && tela.width) {
            // come object-fit: cover, con lo stesso punto di ancoraggio del poster
            var stile = getComputedStyle(tela), pos = stile.objectPosition.split(' ');
            var ax = parseFloat(pos[0]) / 100, ay = parseFloat(pos[1]) / 100;
            var scala = Math[stile.objectFit === 'contain' ? 'min' : 'max'](tela.width / im.naturalWidth, tela.height / im.naturalHeight);
            ctx.clearRect(0, 0, tela.width, tela.height);
            var w = im.naturalWidth * scala, h = im.naturalHeight * scala;
            var x = (tela.width - w) * (isNaN(ax) ? 0.5 : ax), y = (tela.height - h) * (isNaN(ay) ? 0.5 : ay);
            ctx.globalAlpha = 1;
            ctx.drawImage(im, x, y, w, h);
            if (dopo && fotogrammi[i] === im) { ctx.globalAlpha = resto; ctx.drawImage(dopo, x, y, w, h); ctx.globalAlpha = 1; }
            ultimo = chiave;
          }
        }
        return Math.abs(meta - s.p) > 0.0006;
      };
      s.punto = function () {
        var r = sez.getBoundingClientRect(), corsa = r.height - window.innerHeight;
        return corsa > 0 ? Math.min(1, Math.max(0, -r.top / corsa)) : 0;
      };
      new IntersectionObserver(function (v) { if (v[0].isIntersecting) carica(); }, { rootMargin: '900px 0px' }).observe(sez);
      new IntersectionObserver(function (v) { s.vista = v[0].isIntersecting; if (s.vista) { misura(); sveglia(); } }).observe(sez);
      if (indice === 0) carica();
      scene.push(s);
    });
  }

  /* ---------- Un solo ciclo per tutto il movimento ---------- */
  var nastro = document.querySelector('[data-nastro]');
  var ultimaY = window.scrollY || 0, velocita = 0, spinta = 0, attivo = false, inizio = performance.now();
  function ciclo(ora) {
    var y = window.scrollY || 0, delta = y - ultimaY, ancora = false;
    ultimaY = y;
    velocita += (delta - velocita) * 0.12;
    doc.classList.toggle('scesa', y > window.innerHeight * 0.75);
    doc.classList.toggle('avanti', y > window.innerHeight * 0.9);
    if (!doc.classList.contains('menu-aperto')) {
      if (delta > 3 && y > window.innerHeight) doc.classList.add('nascosta');
      else if (delta < -3 || y < 200) doc.classList.remove('nascosta');
    }
    scene.forEach(function (s) {
      if (!s.vista) return;
      var meta = s.punto();
      if (s.prima) {
        // All'apertura la porta comincia ad aprirsi da sola: 0 → 22% in tre secondi, con partenza e arrivo dolci.
        // Parte solo quando i fotogrammi di quel tratto sono tutti arrivati, così non salta mai.
        if (!s.partenza && s.prontaTesta()) s.partenza = ora + 250;
        var t = s.partenza ? Math.min(1, Math.max(0, (ora - s.partenza) / 3000)) : 0;
        s.intro = 0.22 * (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
        if (t < 1) ancora = true;
        meta = Math.max(meta, s.intro);
      }
      if (s.disegna(meta)) ancora = true;
    });
    if (nastro && !ridotto) {
      spinta += (Math.max(-3, Math.min(3, velocita / 14)) - spinta) * 0.08;
      nastro.style.animationDuration = (40 / (1 + Math.abs(spinta) * 1.6)).toFixed(2) + 's';
      nastro.style.animationDirection = spinta < -0.25 ? 'reverse' : 'normal';
    }
    if (Math.abs(velocita) > 0.05) ancora = true;
    if (ancora) requestAnimationFrame(ciclo); else attivo = false;
  }
  function sveglia() { if (!attivo) { attivo = true; requestAnimationFrame(ciclo); } }
  window.addEventListener('scroll', sveglia, { passive: true });
  window.addEventListener('resize', function () { scene.forEach(function (s) { s.misura(); }); sveglia(); });
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
  var elementi = document.querySelectorAll('[data-appare], .foto');
  if (osserva && !ridotto) {
    var oss = new IntersectionObserver(function (voci) {
      voci.forEach(function (v) { if (v.isIntersecting) { v.target.classList.add('visibile'); oss.unobserve(v.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    elementi.forEach(function (el) { oss.observe(el); });
  } else elementi.forEach(function (el) { el.classList.add('visibile'); });

  /* ---------- Schede dei materiali ---------- */
  [].forEach.call(document.querySelectorAll('[data-schede]'), function (gruppo) {
    var tasti = [].slice.call(gruppo.querySelectorAll('[role=tab]'));
    function scegli(t, fuoco) {
      tasti.forEach(function (x) {
        var attivo = x === t, scheda = document.getElementById(x.getAttribute('aria-controls'));
        x.setAttribute('aria-selected', attivo ? 'true' : 'false');
        x.tabIndex = attivo ? 0 : -1;
        scheda.hidden = !attivo;
        scheda.classList.toggle('attiva', attivo);
        if (attivo) [].forEach.call(scheda.querySelectorAll('.foto'), function (f) { f.classList.add('visibile'); });
      });
      if (fuoco) t.focus();
    }
    tasti.forEach(function (t, i) {
      t.addEventListener('click', function () { scegli(t); });
      t.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') scegli(tasti[(i + 1) % tasti.length], true);
        if (e.key === 'ArrowLeft') scegli(tasti[(i - 1 + tasti.length) % tasti.length], true);
      });
    });
  });

  /* ---------- Finestra 3D (solo nella variante "3D vero") ----------
     Il programma 3D pesa: si scarica soltanto quando la sezione si avvicina. Se il dispositivo non regge il 3D,
     o se è attivo "riduci movimento", resta la fotografia e i tasti cambiano solo la scheda del materiale. */
  var scena3d = document.querySelector('[data-finestra3d]');
  if (scena3d) {
    var finestra = null, sceltaFinitura = 'pvc-bianco', sceltaApertura = 'chiusa';
    var pannello = scena3d.parentElement;
    function premi(gruppo, valore) {
      [].forEach.call(pannello.querySelectorAll('[data-' + gruppo + ']'), function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-' + gruppo) === valore ? 'true' : 'false'); });
    }
    pannello.addEventListener('click', function (e) {
      var f = e.target.closest('[data-finitura]'), a = e.target.closest('[data-apertura]');
      if (f) {
        sceltaFinitura = f.getAttribute('data-finitura'); premi('finitura', sceltaFinitura);
        var materiale = sceltaFinitura.split('-')[0], nome = pannello.querySelector('[data-nome-finitura]');
        if (nome) nome.textContent = f.getAttribute('data-nome');
        [].forEach.call(pannello.querySelectorAll('[data-scheda-finitura]'), function (s) { s.hidden = s.getAttribute('data-scheda-finitura') !== materiale; });
        if (finestra) finestra.finitura(sceltaFinitura);
      }
      if (a) { sceltaApertura = a.getAttribute('data-apertura'); premi('apertura', sceltaApertura); if (finestra) finestra.apertura(sceltaApertura); }
    });
    var sorgente = (document.querySelector('script[data-tredi]') || { getAttribute: function () { return ''; } }).getAttribute('data-tredi');
    if (sorgente && osserva && !ridotto) {
      var ossTre = new IntersectionObserver(function (v) {
        if (!v[0].isIntersecting) return;
        ossTre.disconnect();
        var s = document.createElement('script');
        s.src = sorgente;
        s.onload = function () {
          if (!window.Finestra3D || !window.Finestra3D.disponibile()) return;
          try {
            finestra = window.Finestra3D.crea(scena3d.querySelector('canvas'), function () { scena3d.classList.add('viva'); });
            finestra.finitura(sceltaFinitura, true); finestra.apertura(sceltaApertura);
          } catch (e) { finestra = null; }
        };
        document.head.appendChild(s);
      }, { rootMargin: '1200px 0px' });
      ossTre.observe(scena3d);
    }
  }

  /* ---------- Preventivo: compone un messaggio WhatsApp. Niente viene inviato o salvato dal sito. ---------- */
  var modulo = document.querySelector('[data-preventivo]');
  if (modulo) {
    var numero = (document.querySelector('.barra-fissa a.verde') || { href: '' }).href.replace(/^.*wa\.me\/(\d+).*$/, '$1');
    // i pulsanti dei prodotti e dei materiali preparano già la scelta nel modulo
    document.addEventListener('click', function (e) {
      var a = e.target.closest('[data-tipo], [data-materiale]');
      if (!a) return;
      var tipo = a.getAttribute('data-tipo'), mat = a.getAttribute('data-materiale');
      if (tipo) [].forEach.call(modulo.querySelectorAll('[name=tipo]'), function (c) {
        var parola = tipo.toLowerCase().split(/\s+/)[0].slice(0, 5);
        if (c.value.toLowerCase().indexOf(parola) > -1) c.checked = true;
      });
      if (mat) [].forEach.call(modulo.querySelectorAll('[name=materiale]'), function (c) { c.checked = c.value === mat; });
    });
    modulo.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(modulo), tipi = d.getAll('tipo');
      var righe = ['Buongiorno, vorrei un preventivo.', ''];
      righe.push('• Cosa: ' + (tipi.length ? tipi.join(', ') : 'da definire'));
      righe.push('• Materiale: ' + d.get('materiale'));
      righe.push('• Lavoro: ' + d.get('lavoro'));
      if (d.get('pezzi')) righe.push('• Pezzi: circa ' + d.get('pezzi'));
      if ((d.get('comune') || '').trim()) righe.push('• Comune: ' + d.get('comune').trim());
      if ((d.get('nome') || '').trim()) righe.push('', 'Nome: ' + d.get('nome').trim());
      window.open('https://wa.me/' + numero + '?text=' + encodeURIComponent(righe.join('\n')), '_blank', 'noopener');
    });
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
