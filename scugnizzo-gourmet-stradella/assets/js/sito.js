/* Scugnizzo · script del sito (nessuna libreria, nessun dato salvato)
   muro di maioliche · giostra delle pizze · "aperto ora" · fotografie che si inclinano · ingressi leggeri */
(function () {
  'use strict';
  var fermo = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var topo = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  [].forEach.call(document.querySelectorAll('[data-anno]'), function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------- Il muro di maioliche ----------
     La fotografia viene divisa in piastrelle: ognuna ha davanti una maiolica e dietro il suo pezzo di foto.
     All'apertura si girano a onda e compongono la pizza; passandoci sopra una piastrella torna maiolica per un attimo.
     Senza script, o con il movimento ridotto, resta la fotografia intera. */
  var muro = document.querySelector('[data-muro]');
  if (muro && !fermo) {
    var img = muro.querySelector('img');
    var col = window.innerWidth < 600 ? 4 : 5;
    var griglia = document.createElement('div');
    griglia.className = 'muro-griglia';
    griglia.style.setProperty('--col', col);
    griglia.setAttribute('aria-hidden', 'true');
    var pezzi = [], disegni = ['a', 'b', 'c'];
    function monta() {
      var src = img.currentSrc || img.src;
      for (var r = 0; r < col; r++) for (var c = 0; c < col; c++) {
        var p = document.createElement('div'); p.className = 'pia';
        var d = document.createElement('span'); d.className = 'davanti'; d.style.backgroundImage = 'url(assets/img/maiolica-' + disegni[(r * 2 + c) % 3] + '.svg)';
        var t = document.createElement('span'); t.className = 'dietro'; t.style.backgroundImage = 'url("' + src + '")';
        t.style.backgroundPosition = (col === 1 ? 0 : c / (col - 1) * 100) + '% ' + (col === 1 ? 0 : r / (col - 1) * 100) + '%';
        p.appendChild(d); p.appendChild(t); griglia.appendChild(p); pezzi.push({ el: p, r: r, c: c });
      }
      muro.appendChild(griglia); muro.classList.add('pronto');
      pezzi.forEach(function (x) { setTimeout(function () { x.el.classList.add('girata'); }, 350 + (x.r + x.c) * 85); });
      function rigira(el) { if (!el.classList.contains('girata')) return; el.classList.remove('girata'); setTimeout(function () { el.classList.add('girata'); }, 1100); }
      pezzi.forEach(function (x) { x.el.addEventListener('pointerenter', function () { rigira(x.el); }); });
      // ogni tanto una piastrella a caso si rigira da sola, finché l'apertura è in vista
      var vista = true;
      if ('IntersectionObserver' in window) new IntersectionObserver(function (v) { vista = v[0].isIntersecting; }).observe(muro);
      setInterval(function () { if (vista && !document.hidden) rigira(pezzi[Math.floor(Math.random() * pezzi.length)].el); }, 2600);
      if (topo) {
        muro.addEventListener('pointermove', function (e) { var b = muro.getBoundingClientRect(); griglia.style.transform = 'rotateY(' + (((e.clientX - b.left) / b.width - .5) * 9).toFixed(2) + 'deg) rotateX(' + (-((e.clientY - b.top) / b.height - .5) * 9).toFixed(2) + 'deg)'; });
        muro.addEventListener('pointerleave', function () { griglia.style.transform = ''; });
      }
    }
    if (img.complete && img.naturalWidth) monta(); else img.addEventListener('load', monta);
  }

  /* ---------- La giostra delle pizze ----------
     Sei piatti su un anello: si trascina con il dito o con il mouse, si gira con le frecce o con i due pulsanti.
     Al rilascio l'anello si ferma sul piatto più vicino e sotto compaiono nome e ingredienti. */
  var giostra = document.querySelector('[data-giostra]');
  if (giostra) {
    var anello = giostra.querySelector('.anello'), piatti = [].slice.call(giostra.querySelectorAll('.piatto')), n = piatti.length, passo = 360 / n;
    var nome = document.querySelector('[data-nome]'), ing = document.querySelector('[data-ing]');
    var giro = 0, x0 = 0, g0 = 0, giu = false, mosso = false;
    function mostra() {
      anello.style.setProperty('--giro', giro + 'deg');
      var k = ((Math.round(-giro / passo) % n) + n) % n;
      piatti.forEach(function (p, i) { p.classList.toggle('davanti', i === k); });
      if (nome.textContent !== piatti[k].getAttribute('data-nome')) { nome.textContent = piatti[k].getAttribute('data-nome'); ing.textContent = piatti[k].getAttribute('data-ing'); }
    }
    function vai(d) { giro = Math.round(giro / passo) * passo - d * passo; mostra(); }
    giostra.addEventListener('pointerdown', function (e) { giu = true; mosso = false; x0 = e.clientX; g0 = giro; });
    window.addEventListener('pointermove', function (e) {
      if (!giu) return;
      var d = e.clientX - x0;
      if (!mosso && Math.abs(d) > 6) { mosso = true; giostra.classList.add('presa'); }
      if (mosso) { giro = g0 + d * (120 / giostra.clientWidth) * 1.6; mostra(); }
    });
    function lascia() { if (!giu) return; giu = false; giostra.classList.remove('presa'); if (mosso) { giro = Math.round(giro / passo) * passo; mostra(); } }
    window.addEventListener('pointerup', lascia); window.addEventListener('pointercancel', lascia);
    giostra.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight') { vai(1); e.preventDefault(); } if (e.key === 'ArrowLeft') { vai(-1); e.preventDefault(); } });
    [].forEach.call(document.querySelectorAll('[data-giro]'), function (b) { b.addEventListener('click', function () { vai(+b.getAttribute('data-giro')); }); });
    mostra();
  }

  /* ---------- Aperto ora (ora di Stradella, qualunque sia il fuso di chi guarda) ---------- */
  var orari = {};
  try { orari = JSON.parse(document.body.getAttribute('data-orari') || '{}'); } catch (e) {}
  var p = {};
  new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Rome', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date()).forEach(function (x) { p[x.type] = x.value; });
  var oggi = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(p.weekday), ora = p.hour + ':' + p.minute;
  var nomi = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
  var riga = document.querySelector('tr[data-giorno="' + oggi + '"]');
  if (riga) riga.classList.add('oggi');
  var fasce = orari[oggi] || [], testo = '';
  for (var i = 0; i < fasce.length; i++) {
    if (ora >= fasce[i][0] && ora < fasce[i][1]) { testo = 'Aperto ora · fino alle ' + fasce[i][1]; break; }
    if (ora < fasce[i][0]) { testo = 'Chiuso ora · riapre alle ' + fasce[i][0]; break; }
  }
  if (!testo) for (var g = 1; g <= 7; g++) { var d = (oggi + g) % 7; if ((orari[d] || []).length) { testo = 'Chiuso ora · riapre ' + (g === 1 ? 'domani' : nomi[d]) + ' alle ' + orari[d][0][0]; break; } }
  [].forEach.call(document.querySelectorAll('[data-aperto]'), function (el) { el.textContent = testo; if (testo.indexOf('Aperto') === 0) el.classList.add('si'); });

  /* ---------- Fotografie che si inclinano verso il puntatore (solo con il mouse) ---------- */
  if (!fermo && topo) [].forEach.call(document.querySelectorAll('.inclina'), function (el) {
    el.addEventListener('pointermove', function (e) { var r = el.getBoundingClientRect(); el.style.transform = 'rotateY(' + (((e.clientX - r.left) / r.width - .5) * 7).toFixed(2) + 'deg) rotateX(' + (-((e.clientY - r.top) / r.height - .5) * 7).toFixed(2) + 'deg) translateZ(8px)'; });
    el.addEventListener('pointerleave', function () { el.style.transform = ''; });
  });

  /* ---------- Ingressi leggeri (solo per ciò che sta sotto la prima schermata) ---------- */
  if (!fermo && 'IntersectionObserver' in window) {
    var oss = new IntersectionObserver(function (voci) { voci.forEach(function (v) { if (v.isIntersecting) { v.target.classList.add('visto'); oss.unobserve(v.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
    [].forEach.call(document.querySelectorAll('.sezione > *, .fascia > div'), function (b) { if (b.getBoundingClientRect().top > innerHeight * .9) { b.classList.add('entra'); oss.observe(b); } });
  }
})();
