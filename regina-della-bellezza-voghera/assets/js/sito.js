/* ==========================================================================
   Regina della Bellezza — script del sito (vanilla, nessuna libreria, nessun dato salvato)
   menu · comparse e foto che si svelano · movimento dell'apertura · aperto/chiuso adesso · promo a scadenza
   ========================================================================== */
(function () {
  'use strict';

  var doc = document.documentElement;
  var RB = window.RB || {};
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

  /* ---------- Comparse: testi che salgono, foto che si svelano ---------- */
  var elementi = document.querySelectorAll('[data-appare], .foto');
  if ('IntersectionObserver' in window && !ridotto) {
    var oss = new IntersectionObserver(function (voci) {
      voci.forEach(function (v) { if (v.isIntersecting) { v.target.classList.add('visibile'); oss.unobserve(v.target); } });
    }, { rootMargin: '0px 0px -10% 0px' });
    elementi.forEach(function (el) { oss.observe(el); });
  } else elementi.forEach(function (el) { el.classList.add('visibile'); });

  /* ---------- Scroll: linea sotto la testata e foto d'apertura che si avvicina ---------- */
  var fotoEroe = document.querySelector('.eroe-foto');
  var inAttesa = false;
  function scorri() {
    var y = window.scrollY || 0;
    doc.classList.toggle('scesa', y > 8);
    if (fotoEroe && !ridotto) fotoEroe.style.setProperty('--s', Math.min(1, y / window.innerHeight).toFixed(3));
  }
  window.addEventListener('scroll', function () {
    if (inAttesa) return;
    inAttesa = true;
    requestAnimationFrame(function () { inAttesa = false; scorri(); });
  }, { passive: true });
  scorri();

  /* ---------- Scene: il video avanza e torna indietro con lo scroll ----------
     <section class="scena" data-scena> alta più schermi, con un palco che resta fermo (sticky).
     p = 0..1 è il punto della scena: guida il fotogramma del video e accende i testi [data-da][data-a].
     Con "riduci movimento" o risparmio dati la scena resta una sezione normale con la foto (niente video). */
  var rete = navigator.connection || {};
  var scene = [].slice.call(document.querySelectorAll('[data-scena]'));
  if (scene.length && !ridotto && !rete.saveData && 'IntersectionObserver' in window) {
    scene.forEach(function (sc) {
      var video = sc.querySelector('.scena-video');
      var testi = [].slice.call(sc.querySelectorAll('[data-da]')).map(function (el) { return { el: el, da: parseFloat(el.getAttribute('data-da')), a: parseFloat(el.getAttribute('data-a')) }; });
      var durata = 0, tempo = 0, vicina = false, inVista = false, giro = 0;
      sc.classList.add('scena-viva');

      function punto() {
        var r = sc.getBoundingClientRect(), corsa = r.height - window.innerHeight;
        return corsa > 0 ? Math.min(1, Math.max(0, -r.top / corsa)) : 0;
      }
      function disegna() {
        var p = punto();
        sc.style.setProperty('--p', p.toFixed(4));
        testi.forEach(function (t) { t.el.classList.toggle('attiva', p >= t.da && p < t.a); });
        if (video && durata) {
          var meta = p * (durata - 0.08);
          tempo += (meta - tempo) * 0.22; // segue lo scroll con un filo di morbidezza
          if (Math.abs(meta - tempo) < 0.004) tempo = meta;
          if (!video.seeking && Math.abs(video.currentTime - tempo) > 0.02) { try { video.currentTime = tempo; } catch (e) {} }
        }
        if (inVista) giro = requestAnimationFrame(disegna);
      }
      // il video si scarica solo quando la scena si avvicina
      new IntersectionObserver(function (v) {
        if (!v[0].isIntersecting || vicina || !video) return;
        vicina = true;
        video.addEventListener('loadedmetadata', function () { durata = video.duration || 0; });
        video.addEventListener('loadeddata', function () { sc.classList.add('scena-pronta'); });
        video.preload = 'auto';
        video.src = video.getAttribute('data-src');
        video.load();
        // su iPhone il video accetta di essere "trascinato" solo dopo un primo avvio (muto, quindi permesso)
        var avvio = video.play();
        if (avvio && avvio.then) avvio.then(function () { video.pause(); }).catch(function () {});
      }, { rootMargin: '700px 0px' }).observe(sc);
      new IntersectionObserver(function (v) {
        inVista = v[0].isIntersecting;
        cancelAnimationFrame(giro);
        if (inVista) giro = requestAnimationFrame(disegna);
      }).observe(sc);
      disegna();
    });
  }

  /* ---------- Ora e data di Voghera, qualunque sia il fuso del visitatore ---------- */
  function adessoRoma() {
    try {
      var parti = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Rome', year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
      var m = {};
      parti.forEach(function (p) { m[p.type] = p.value; });
      return { giorno: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(m.weekday), minuti: (parseInt(m.hour, 10) % 24) * 60 + parseInt(m.minute, 10), data: m.year + '-' + m.month + '-' + m.day };
    } catch (e) { var d = new Date(); return { giorno: d.getDay(), minuti: d.getHours() * 60 + d.getMinutes(), data: d.toISOString().slice(0, 10) }; }
  }

  /* ---------- Aperto adesso? ---------- */
  var orari = RB.orari || {};
  var nomiGiorni = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
  var minuti = function (s) { var p = s.split(':'); return parseInt(p[0], 10) * 60 + parseInt(p[1], 10); };
  var ora = function (s) { return s.replace(/^0/, ''); };
  function statoApertura() {
    var t = adessoRoma();
    var oggi = orari[t.giorno] || [];
    for (var i = 0; i < oggi.length; i++) {
      if (t.minuti >= minuti(oggi[i][0]) && t.minuti < minuti(oggi[i][1])) return { aperto: true, testo: 'Aperto ora · fino alle ' + ora(oggi[i][1]) };
      if (t.minuti < minuti(oggi[i][0])) return { aperto: false, testo: (i === 0 ? 'Chiuso · apre alle ' : 'In pausa · riapre alle ') + ora(oggi[i][0]) };
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

  /* ---------- Promozioni: dopo la scadenza spariscono da sole, anche senza rigenerare il sito ---------- */
  var oggi = adessoRoma().data;
  document.querySelectorAll('[data-fino]').forEach(function (el) { if (oggi > el.getAttribute('data-fino')) el.hidden = true; });

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

