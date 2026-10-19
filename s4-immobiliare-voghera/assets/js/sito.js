/* ==========================================================================
   S4 Immobiliare — script del sito (vanilla, nessun dato salvato)
   città 3D (caricata a parte) · scheda dell'immobile scelto · filtri del catalogo · valutazione su WhatsApp · "aperto ora"
   ========================================================================== */
(function () {
  'use strict';
  var doc = document.documentElement;
  var ridotto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- La città 3D ----------
     Il programma 3D e i dati della città pesano: si caricano dopo la pagina. Finché non sono pronti, e se il dispositivo
     non regge il 3D, resta la fotografia della città. Con "riduci movimento" la città non gira da sola. */
  var segna = document.querySelector('script[data-citta]');
  var sezione = document.querySelector('.citta');
  if (segna && sezione) {
    var tela = sezione.querySelector('.citta-tela'), scheda = sezione.querySelector('.citta-scheda');
    var citta = null;
    var carica = function (src, poi) { var s = document.createElement('script'); s.src = src; s.onload = poi; document.head.appendChild(s); };
    var mostra = function (id) {
      var d = id && window.S4_IMMOBILI && window.S4_IMMOBILI[id];
      if (!d) { scheda.hidden = true; return; }
      var a = scheda.querySelector('a'), img = scheda.querySelector('img');
      a.href = 'immobile-' + id + '.html';
      if (d.f) { img.src = 'assets/img/im/' + id + '-0-640.webp'; img.alt = d.t; img.hidden = false; } else img.hidden = true;
      scheda.querySelector('.prezzo').textContent = d.p;
      scheda.querySelector('.nome').textContent = d.t;
      scheda.querySelector('.dati').innerHTML = d.d;
      scheda.hidden = false;
    };
    var avvia = function () {
      if (!window.S4Citta3D || !window.S4Citta3D.disponibile()) return;
      try {
        var strato = sezione.querySelector('.citta-luoghi'), segni = [];
        citta = window.S4Citta3D.crea(tela, { fermo: ridotto, fondo: '#dfe5ea', scelto: mostra, luoghi: function (l) {
          l.forEach(function (p, k) {
            if (!segni[k]) { segni[k] = document.createElement('span'); segni[k].textContent = p.n; if (/S4/.test(p.n)) segni[k].className = 'ufficio'; strato.appendChild(segni[k]); }
            segni[k].style.transform = 'translate(' + p.x.toFixed(1) + 'px,' + p.y.toFixed(1) + 'px) translate(-50%,-100%)';
            segni[k].style.opacity = p.ok ? 1 : 0;
          });
        }, pronta: function () {
          sezione.classList.add('viva');
          sezione.querySelector('.citta-zoom').hidden = false;
          sezione.querySelector('.citta-aiuto').hidden = false;
          // arrivo da una scheda: "Vedilo sulla città in 3D"
          var m = /[?&]immobile=(\d+)/.exec(location.search);
          if (m && citta.seleziona(m[1])) mostra(m[1]);
        } });
      } catch (e) { citta = null; }
    };
    scheda.querySelector('.chiudi').addEventListener('click', function () { scheda.hidden = true; if (citta) citta.seleziona(null); });
    sezione.addEventListener('click', function (e) { var b = e.target.closest('[data-zoom]'); if (b && citta) citta.zoom(parseInt(b.getAttribute('data-zoom'), 10)); });
    var parti = function () { carica(segna.getAttribute('data-dati'), function () { carica(segna.getAttribute('data-citta'), avvia); }); };
    if (document.readyState === 'complete') parti(); else window.addEventListener('load', parti);
  }

  /* ---------- Barra fissa su telefono ---------- */
  var attivo = false;
  function ciclo() { doc.classList.toggle('scesa', (window.scrollY || 0) > window.innerHeight * 0.5); attivo = false; }
  window.addEventListener('scroll', function () { if (!attivo) { attivo = true; requestAnimationFrame(ciclo); } }, { passive: true });

  /* ---------- Catalogo: filtri e ordinamento, tutto nella pagina ---------- */
  var filtri = document.querySelector('[data-filtri]');
  if (filtri) {
    var elenco = document.querySelector('[data-elenco]'), voci = [].slice.call(elenco.children), originale = voci.slice();
    var conta = document.querySelector('[data-conta]'), vuoto = document.querySelector('[data-vuoto]');
    var applica = function () {
      var d = new FormData(filtri), g = d.get('gruppo'), pmax = parseInt(d.get('prezzo'), 10) || 0, loc = parseInt(d.get('locali'), 10) || 0, ord = d.get('ordine'), n = 0;
      var ordinati = originale.slice();
      if (ord) ordinati.sort(function (a, b) { return (ord === 'su' ? 1 : -1) * (a.getAttribute('data-prezzo') - b.getAttribute('data-prezzo')); });
      ordinati.forEach(function (li) {
        var ok = (!g || li.getAttribute('data-gruppo') === g) && (!pmax || (li.getAttribute('data-affitto') === '0' && +li.getAttribute('data-prezzo') <= pmax)) && (!loc || +li.getAttribute('data-locali') >= loc);
        li.hidden = !ok; if (ok) n++;
        elenco.appendChild(li);
      });
      conta.textContent = n; vuoto.hidden = n > 0;
    };
    filtri.addEventListener('change', applica);
    filtri.addEventListener('submit', function (e) { e.preventDefault(); });
    document.querySelector('[data-azzera]').addEventListener('click', function () { filtri.reset(); applica(); });
  }

  /* ---------- Galleria: frecce da tastiera ---------- */
  var galleria = document.querySelector('[data-galleria]');
  if (galleria) galleria.addEventListener('keydown', function (e) {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    galleria.scrollBy({ left: (e.key === 'ArrowRight' ? 1 : -1) * galleria.clientWidth * 0.8, behavior: ridotto ? 'auto' : 'smooth' }); e.preventDefault();
  });

  /* ---------- Valutazione: compone il messaggio e apre WhatsApp. Niente viene inviato o salvato dal sito. ---------- */
  var modulo = document.querySelector('[data-valuta]');
  if (modulo) {
    var zona = modulo.querySelector('[name=zona]'), errore = modulo.querySelector('.errore');
    zona.addEventListener('input', function () { zona.removeAttribute('aria-invalid'); errore.hidden = true; });
    modulo.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(modulo), v = function (n) { return (d.get(n) || '').toString().trim(); };
      if (!v('zona')) { zona.setAttribute('aria-invalid', 'true'); errore.hidden = false; zona.focus(); return; }
      var righe = ['Buongiorno, vorrei una valutazione.', '', '• Immobile: ' + v('tipo'), '• Dove: ' + v('zona')];
      if (v('mq')) righe.push('• Metri quadri: circa ' + v('mq'));
      if (v('nome')) righe.push('', 'Nome: ' + v('nome'));
      window.open('https://wa.me/' + document.body.getAttribute('data-wa') + '?text=' + encodeURIComponent(righe.join('\n')), '_blank', 'noopener');
    });
  }

  /* ---------- Aperto ora? Dagli orari scritti nella pagina, sull'ora italiana ---------- */
  (function () {
    var orari, p = {};
    try {
      orari = JSON.parse(document.body.getAttribute('data-orari'));
      new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Rome', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date()).forEach(function (x) { p[x.type] = x.value; });
    } catch (e) { return; }
    var g = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(p.weekday), ora = (parseInt(p.hour, 10) % 24) * 60 + parseInt(p.minute, 10);
    var min = function (t) { var x = t.split(':'); return x[0] * 60 + +x[1]; }, nomi = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
    var testo = '', aperto = false;
    (orari[g] || []).forEach(function (f) { if (ora >= min(f[0]) && ora < min(f[1])) { aperto = true; testo = 'Ufficio aperto ora, fino alle ' + f[1]; } });
    if (!aperto) {
      var dopo = (orari[g] || []).filter(function (f) { return min(f[0]) > ora; })[0];
      if (dopo) testo = 'Ufficio chiuso: riapre oggi alle ' + dopo[0];
      else for (var k = 1; k <= 7; k++) { var d = (g + k) % 7; if ((orari[d] || []).length) { testo = 'Ufficio chiuso: riapre ' + (k === 1 ? 'domani' : nomi[d]) + ' alle ' + orari[d][0][0]; break; } }
    }
    [].forEach.call(document.querySelectorAll('[data-adesso]'), function (el) { el.textContent = testo; el.classList.toggle('aperto', aperto); el.hidden = !testo; });
    var riga = document.querySelector('tr[data-giorno="' + g + '"]'); if (riga) riga.classList.add('oggi');
  })();

  var anno = document.querySelector('[data-anno]');
  if (anno) anno.textContent = new Date().getFullYear();
})();
