/* Comportamenti uguali in ogni sito LWA (nessuna libreria, nessun dato salvato). Gli effetti propri del cliente stanno in sito.js.
   anno · "aperto ora" · fotografie che si inclinano (.inclina) · ingressi leggeri · richiesta composta per WhatsApp ([data-componi]) */
(function () {
  'use strict';
  var fermo = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var topo = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  function tutti(s, f) { [].forEach.call(document.querySelectorAll(s), f); }
  tutti('[data-anno]', function (el) { el.textContent = new Date().getFullYear(); });

  /* Menu a tre linee (telefono e tablet): apre e chiude il pannello delle voci; si chiude scegliendo una voce o con Esc */
  var tasto = document.querySelector('.apri-menu');
  if (tasto) {
    var menu = function (apri) { document.body.classList.toggle('menu-aperto', apri); tasto.setAttribute('aria-expanded', apri); tasto.setAttribute('aria-label', apri ? 'Chiudi il menu' : 'Apri il menu'); };
    tasto.addEventListener('click', function () { menu(!document.body.classList.contains('menu-aperto')); });
    tutti('.voci a', function (a) { a.addEventListener('click', function () { menu(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') menu(false); });
  }

  /* Aperto ora: orari in <body data-orari> (0 = domenica), ora italiana qualunque sia il fuso di chi guarda */
  var orari = {};
  try { orari = JSON.parse(document.body.getAttribute('data-orari') || '{}'); } catch (e) {}
  var p = {};
  new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Rome', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date()).forEach(function (x) { p[x.type] = x.value; });
  var oggi = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(p.weekday), ora = p.hour + ':' + p.minute;
  var nomi = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
  window.LWA = { oggi: oggi, ora: ora, fermo: fermo, topo: topo };
  var riga = document.querySelector('tr[data-giorno="' + oggi + '"]');
  if (riga) riga.classList.add('oggi');
  var haOrari = Object.keys(orari).some(function (g) { return (orari[g] || []).length; }), testo = '';
  if (haOrari) {
    var fasce = orari[oggi] || [];
    for (var i = 0; i < fasce.length; i++) {
      if (ora >= fasce[i][0] && ora < fasce[i][1]) { testo = 'Aperto ora · fino alle ' + fasce[i][1]; break; }
      if (ora < fasce[i][0]) { testo = 'Chiuso ora · riapre alle ' + fasce[i][0]; break; }
    }
    if (!testo) for (var g = 1; g <= 7; g++) { var d = (oggi + g) % 7; if ((orari[d] || []).length) { testo = 'Chiuso ora · riapre ' + (g === 1 ? 'domani' : nomi[d]) + ' alle ' + orari[d][0][0]; break; } }
  }
  tutti('[data-aperto]', function (el) { el.textContent = testo; if (testo.indexOf('Aperto') === 0) el.classList.add('si'); });

  /* Fotografie che si inclinano verso il puntatore (solo con il mouse) */
  if (!fermo && topo) tutti('.inclina', function (el) {
    el.addEventListener('pointermove', function (e) { var r = el.getBoundingClientRect(); el.style.transform = 'rotateY(' + (((e.clientX - r.left) / r.width - .5) * 7).toFixed(2) + 'deg) rotateX(' + (-((e.clientY - r.top) / r.height - .5) * 7).toFixed(2) + 'deg) translateZ(8px)'; });
    el.addEventListener('pointerleave', function () { el.style.transform = ''; });
  });

  /* Ingressi leggeri: solo per ciò che sta sotto la prima schermata, così la pagina è completa anche senza scorrere */
  if (!fermo && 'IntersectionObserver' in window) {
    var oss = new IntersectionObserver(function (voci) { voci.forEach(function (v) { if (v.isIntersecting) { v.target.classList.add('visto'); oss.unobserve(v.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
    tutti('.sezione > *, [data-entra]', function (b) { if (b.getBoundingClientRect().top > innerHeight * .9) { b.classList.add('entra'); oss.observe(b); } });
  }

  /* Richiesta composta: <form data-componi data-inizio="Buongiorno, ..."> con campi che hanno name e data-voce.
     Alla conferma apre WhatsApp con il messaggio già scritto. Il sito non invia e non conserva nulla. */
  tutti('form[data-componi]', function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var righe = [f.getAttribute('data-inizio') || 'Buongiorno, vi scrivo dal sito.'], manca = null;
      [].forEach.call(f.elements, function (c) {
        if (!c.name || c.type === 'submit' || c.type === 'button') return;
        if ((c.type === 'radio' || c.type === 'checkbox') && !c.checked) return;
        var v = (c.value || '').trim();
        if (!v) { if (c.required && !manca) manca = c; return; }
        if (c.type === 'date') { var q = v.split('-'); v = q[2] + '/' + q[1] + '/' + q[0]; }
        righe.push((c.getAttribute('data-voce') || c.name) + ': ' + v);
      });
      var err = f.querySelector('[data-errore]');
      if (manca) { if (err) err.hidden = false; manca.focus(); return; }
      if (err) err.hidden = true;
      var numero = document.body.getAttribute('data-wa');
      window.open('https://wa.me/' + numero + '?text=' + encodeURIComponent(righe.join('\n')), '_blank', 'noopener');
    });
  });
})();
