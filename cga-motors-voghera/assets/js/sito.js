/* ==========================================================================
   CGA Motors — script del sito (vanilla). La ruota 3D è in ruota3d.js, le foto 3D in profondita.js.
   menu · testata · comparse · contatori · aperto/chiuso adesso · ferie · richiesta preventivo
   (compone il messaggio e apre WhatsApp o l'e-mail) · filtri flotta · catalogo usato · riprese video
   · carta fedeltà · consenso cookie
   ========================================================================== */
(function () {
  'use strict';

  var doc = document.documentElement;
  var CGA = window.CGA || {};
  var ridotto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var altezza = window.innerHeight;
  window.addEventListener('resize', function () { altezza = window.innerHeight; }, { passive: true });

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

  /* ---------- Testata: si nasconde scendendo, torna salendo ---------- */
  var testata = document.querySelector('.testata');
  var ultimoY = window.scrollY || 0;
  var inAttesa = false;

  // Apertura della home: mentre il resto le scorre sopra, la ripresa si avvicina e il testo sale (--a = 0..1)
  var apertura = document.querySelector('[data-apertura]');
  function muoviApertura(y) {
    if (!apertura) return;
    if (!ridotto) apertura.style.setProperty('--a', Math.min(1, y / (altezza * 0.9)).toFixed(3));
    var fuori = y > altezza * 1.05, video = apertura.querySelector('video');
    apertura.classList.toggle('fuori', fuori);
    if (video) { if (fuori) video.pause(); else if (video.paused) { var p = video.play(); if (p && p.catch) p.catch(function () {}); } }
  }
  muoviApertura(ultimoY);

  window.addEventListener('scroll', function () {
    if (inAttesa) return;
    inAttesa = true;
    requestAnimationFrame(function () {
      inAttesa = false;
      var y = window.scrollY || 0;
      muoviApertura(y);
      if (testata && !doc.classList.contains('menu-aperto')) testata.classList.toggle('via', y > ultimoY + 4 && y > altezza * 0.8);
      if (testata && y < ultimoY - 4) testata.classList.remove('via');
      ultimoY = y;
    });
  }, { passive: true });

  /* ---------- Comparse e contatori ---------- */
  var elementi = document.querySelectorAll('[data-appare]');
  if ('IntersectionObserver' in window && !ridotto) {
    var oss = new IntersectionObserver(function (voci) {
      voci.forEach(function (v) { if (v.isIntersecting) { v.target.classList.add('visibile'); oss.unobserve(v.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    elementi.forEach(function (el) { oss.observe(el); });
  } else elementi.forEach(function (el) { el.classList.add('visibile'); });

  var contatori = document.querySelectorAll('[data-conta]');
  if ('IntersectionObserver' in window && !ridotto) {
    var ossC = new IntersectionObserver(function (voci) {
      voci.forEach(function (v) {
        if (!v.isIntersecting) return;
        ossC.unobserve(v.target);
        var el = v.target, fine = parseInt(el.getAttribute('data-conta'), 10), inizio = fine > 1900 ? 1950 : 0, t0 = performance.now();
        var formato = function (n) { return fine >= 1000 && fine < 1900 ? n.toLocaleString('it-IT') : String(n); };
        (function passo(t) {
          var k = Math.min(1, (t - t0) / 1400), e = 1 - Math.pow(1 - k, 3);
          el.textContent = formato(Math.round(inizio + (fine - inizio) * e));
          if (k < 1) requestAnimationFrame(passo);
        })(t0);
      });
    }, { threshold: 0.6 });
    contatori.forEach(function (el) { ossC.observe(el); });
  }

  /* ---------- Aperto adesso? (ora di Voghera, qualunque sia il fuso del visitatore) ---------- */
  var orari = CGA.orari || {};
  var nomiGiorni = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
  var minuti = function (s) { var p = s.split(':'); return parseInt(p[0], 10) * 60 + parseInt(p[1], 10); };
  function oraRoma() {
    try {
      var parti = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Rome', year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
      var m = {};
      parti.forEach(function (p) { m[p.type] = p.value; });
      return { giorno: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(m.weekday), minuti: (parseInt(m.hour, 10) % 24) * 60 + parseInt(m.minute, 10), data: m.year + '-' + m.month + '-' + m.day };
    } catch (e) { var d = new Date(); return { giorno: d.getDay(), minuti: d.getHours() * 60 + d.getMinutes(), data: d.toISOString().slice(0, 10) }; }
  }
  function statoApertura() {
    var t = oraRoma();
    if (CGA.ferie && t.data >= CGA.ferie.dal && t.data <= CGA.ferie.al) return { aperto: false, testo: 'Chiusi per ferie · soccorso H24 attivo' };
    var oggi = (orari[t.giorno] || []).map(function (f) { return [minuti(f[0]), minuti(f[1])]; });
    for (var i = 0; i < oggi.length; i++) {
      if (t.minuti >= oggi[i][0] && t.minuti < oggi[i][1]) return { aperto: true, testo: 'Aperto ora · fino alle ' + orari[t.giorno][i][1] };
      if (t.minuti < oggi[i][0]) return { aperto: false, testo: (i === 0 ? 'Chiuso · apriamo alle ' : 'Pausa pranzo · riapriamo alle ') + orari[t.giorno][i][0] };
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

  /* ---------- Richiesta preventivo: WhatsApp o e-mail con il messaggio già scritto ---------- */
  var finestra = document.getElementById('richiesta-finestra');
  function apriRichiesta(servizio, messaggio) {
    if (!finestra) return;
    var f = finestra.querySelector('form');
    if (servizio) {
      var sel = f.querySelector('select[name="servizio"]');
      var voce = [].slice.call(sel.options).find(function (o) { return o.getAttribute('data-id') === servizio; });
      if (voce) sel.value = voce.value;
    }
    if (messaggio) f.querySelector('[name="messaggio"]').value = messaggio;
    if (typeof finestra.showModal === 'function') finestra.showModal(); else finestra.setAttribute('open', '');
    setTimeout(function () { var primo = f.querySelector(messaggio || servizio ? '[name="nome"]' : 'select'); if (primo) primo.focus(); }, 60);
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-apri-richiesta]');
    if (b) { e.preventDefault(); apriRichiesta(b.getAttribute('data-apri-richiesta'), b.getAttribute('data-messaggio')); return; }
    if (e.target.closest('[data-chiudi-richiesta]') || e.target === finestra) finestra.close();
  });

  document.querySelectorAll('form[data-modulo]').forEach(function (form) {
    var errore = form.querySelector('.modulo-errore');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var via = (e.submitter && e.submitter.value) || 'whatsapp';
      var d = {};
      ['servizio', 'nome', 'telefono', 'auto', 'targa', 'quando', 'messaggio'].forEach(function (k) { var c = form.elements[k]; d[k] = c ? c.value.trim() : ''; });
      form.querySelectorAll('.campo').forEach(function (c) { c.classList.remove('errore'); });
      var mancano = [];
      if (!d.servizio) mancano.push('servizio');
      if (!d.nome) mancano.push('nome');
      if (mancano.length) {
        mancano.forEach(function (k) { form.elements[k].closest('.campo').classList.add('errore'); });
        errore.textContent = 'Scegli il servizio e scrivi il tuo nome: il resto è facoltativo.';
        errore.hidden = false;
        form.elements[mancano[0]].focus();
        return;
      }
      errore.hidden = true;
      var righe = [
        'Richiesta: ' + d.servizio,
        'Nome: ' + d.nome,
        d.telefono && 'Telefono: ' + d.telefono,
        d.auto && 'Auto: ' + d.auto,
        d.targa && 'Targa / km: ' + d.targa,
        d.quando && 'Quando: ' + d.quando,
        d.messaggio && '\n' + d.messaggio
      ].filter(Boolean);
      if (via === 'email') {
        var corpo = 'Buongiorno CGA Motors,\n\n' + righe.join('\n') + '\n\nGrazie.';
        location.href = 'mailto:' + CGA.email + '?subject=' + encodeURIComponent('Richiesta dal sito: ' + d.servizio) + '&body=' + encodeURIComponent(corpo);
      } else {
        var testo = 'Ciao CGA Motors! 👋\n' + righe.join('\n');
        window.open('https://wa.me/' + CGA.wa + '?text=' + encodeURIComponent(testo), '_blank', 'noopener');
      }
      if (finestra && finestra.open) setTimeout(function () { finestra.close(); }, 400);
    });
  });

  /* ---------- Barra azioni: si nasconde sul blocco contatti e sul piede ---------- */
  var barra = document.querySelector('.barra-azioni');
  var zone = document.querySelectorAll('.contatto-fine, .piede, .testa-pagina .canali-grandi');
  if (barra && zone.length && 'IntersectionObserver' in window) {
    var dentro = new Set();
    var ossBarra = new IntersectionObserver(function (voci) {
      voci.forEach(function (v) { if (v.isIntersecting) dentro.add(v.target); else dentro.delete(v.target); });
      barra.classList.toggle('nascosta', dentro.size > 0 && window.innerWidth > 860);
    }, { threshold: 0.1 });
    zone.forEach(function (z) { ossBarra.observe(z); });
  }

  /* ---------- Filtri flotta noleggio ---------- */
  var filtri = document.querySelectorAll('[data-filtro]');
  filtri.forEach(function (f) {
    f.addEventListener('click', function () {
      var tipo = f.getAttribute('data-filtro');
      filtri.forEach(function (x) { x.classList.toggle('attivo', x === f); x.setAttribute('aria-pressed', x === f ? 'true' : 'false'); });
      document.querySelectorAll('.veicolo-scheda').forEach(function (v) { v.hidden = tipo !== 'tutti' && v.getAttribute('data-tipo') !== tipo; });
    });
  });

  /* ---------- Catalogo auto usate: filtri, ordine e galleria foto ---------- */
  var usato = document.querySelector('[data-usato]');
  if (usato) {
    var schedeUsato = [].slice.call(usato.children);
    var vuoto = document.querySelector('.usato-vuoto');
    var filtriUsato = document.querySelectorAll('.filtro[data-usato-filtro]');
    var passa = function (s, f) {
      if (f === 'tutte') return true;
      if (/^\d+$/.test(f)) return parseInt(s.getAttribute('data-prezzo'), 10) <= parseInt(f, 10);
      return (' ' + s.getAttribute('data-tag') + ' ').indexOf(' ' + f + ' ') >= 0;
    };
    var filtraUsato = function (f) {
      var visibili = 0;
      schedeUsato.forEach(function (s) { s.hidden = !passa(s, f); if (!s.hidden) { visibili++; s.classList.add('visibile'); } });
      filtriUsato.forEach(function (x) { var su = x.getAttribute('data-usato-filtro') === f; x.classList.toggle('attivo', su); x.setAttribute('aria-pressed', su ? 'true' : 'false'); });
      if (vuoto) vuoto.hidden = visibili > 0;
    };
    document.addEventListener('click', function (e) { var b = e.target.closest('[data-usato-filtro]'); if (b) filtraUsato(b.getAttribute('data-usato-filtro')); });
    var ordina = document.querySelector('[data-usato-ordina]');
    if (ordina) ordina.addEventListener('change', function () {
      var giu = ordina.value.charAt(0) === '-', chiave = 'data-' + ordina.value.replace('-', ''); // prezzo · reg (anno) · km
      schedeUsato.sort(function (a, b) { var d = parseInt(a.getAttribute(chiave), 10) - parseInt(b.getAttribute(chiave), 10); return giu ? -d : d; })
        .forEach(function (s) { s.classList.add('visibile'); usato.appendChild(s); });
    });

    // Galleria: le foto dopo la prima si scaricano solo quando servono
    usato.querySelectorAll('[data-galleria]').forEach(function (g) {
      var nastro = g.querySelector('.usato-nastro'), foto = nastro.children, conta = g.querySelector('.galleria-conta b');
      var prima = g.querySelector('.prima'), dopo = g.querySelector('.dopo');
      var scarica = function (i) { var f = foto[i]; if (f && f.hasAttribute('data-src')) { f.src = f.getAttribute('data-src'); f.removeAttribute('data-src'); } };
      var attuale = function () { return Math.round(nastro.scrollLeft / (nastro.clientWidth || 1)); };
      var aggiorna = function () {
        var i = attuale();
        scarica(i); scarica(i + 1);
        if (conta) conta.textContent = i + 1;
        prima.disabled = i <= 0;
        dopo.disabled = i >= foto.length - 1;
      };
      var attesa;
      nastro.addEventListener('scroll', function () { clearTimeout(attesa); attesa = setTimeout(aggiorna, 60); }, { passive: true });
      g.addEventListener('click', function (e) {
        var b = e.target.closest('[data-galleria-vai]');
        if (!b) return;
        var i = Math.max(0, Math.min(foto.length - 1, attuale() + parseInt(b.getAttribute('data-galleria-vai'), 10)));
        scarica(i);
        nastro.scrollTo({ left: i * nastro.clientWidth, behavior: ridotto ? 'auto' : 'smooth' });
      });
      // la seconda foto si prepara quando la scheda si avvicina, così il primo scorrimento è immediato
      if ('IntersectionObserver' in window) {
        var ossG = new IntersectionObserver(function (v) { if (v[0].isIntersecting) { scarica(1); ossG.disconnect(); } }, { rootMargin: '200px 0px' });
        ossG.observe(g);
      } else scarica(1);
      prima.disabled = true;
    });
  }

  /* ---------- Riprese video sopra le foto: partono in vista, si fermano fuori ---------- */
  var rete = navigator.connection || {};
  var figureVideo = document.querySelectorAll('.foto3d[data-video]');
  if (figureVideo.length && !ridotto && !rete.saveData && 'IntersectionObserver' in window) {
    var ossV = new IntersectionObserver(function (voci) {
      voci.forEach(function (v) {
        var fig = v.target, video = fig.querySelector('video');
        if (v.isIntersecting) {
          if (!video) {
            video = document.createElement('video');
            video.className = 'foto3d-video';
            video.muted = true; video.loop = true; video.playsInline = true;
            video.setAttribute('muted', ''); video.setAttribute('playsinline', ''); video.setAttribute('aria-hidden', 'true');
            video.preload = 'auto';
            var img = fig.querySelector('img');
            if (img && img.style.objectPosition) video.style.objectPosition = img.style.objectPosition;
            video.addEventListener('playing', function () { video.classList.add('avviato'); }, { once: true });
            video.src = fig.getAttribute('data-video');
            fig.appendChild(video);
          }
          var p = video.play();
          if (p && p.catch) p.catch(function () {});
        } else if (video) video.pause();
      });
    }, { rootMargin: '100px 0px', threshold: 0.15 });
    figureVideo.forEach(function (f) { ossV.observe(f); });
  }

  /* ---------- Carta fedeltà che segue il mouse ---------- */
  document.querySelectorAll('[data-inclina]').forEach(function (box) {
    var carta = box.querySelector('.carta');
    if (!carta || ridotto) return;
    box.addEventListener('pointermove', function (e) {
      var r = box.getBoundingClientRect();
      carta.style.setProperty('--rx', (((e.clientX - r.left) / r.width - 0.5) * 24).toFixed(2));
      carta.style.setProperty('--ry', (-((e.clientY - r.top) / r.height - 0.5) * 18).toFixed(2));
    });
    box.addEventListener('pointerleave', function () { carta.style.setProperty('--rx', 0); carta.style.setProperty('--ry', 0); });
  });

  /* ---------- FAQ: una sola risposta aperta per gruppo ---------- */
  document.querySelectorAll('.faq').forEach(function (faq) {
    faq.addEventListener('toggle', function (e) {
      if (!e.target.open) return;
      faq.querySelectorAll('details[open]').forEach(function (d) { if (d !== e.target) d.open = false; });
    }, true);
  });

  /* ---------- Consenso cookie (Linee guida Garante 2021) + mappa ---------- */
  var CHIAVE = 'cga-consenso';
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
    consenso = { esterni: !!scelte.esterni, data: Date.now() };
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
    banner.querySelector('[data-categoria="esterni"]').checked = !!(consenso && consenso.esterni);
    dettagli(!!conDettagli);
    requestAnimationFrame(function () { banner.classList.add('visibile'); });
  }
  function chiudiBanner() {
    if (!banner) return;
    banner.classList.remove('visibile');
    setTimeout(function () { banner.hidden = true; }, 400);
  }
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
    if (!consenso) setTimeout(function () { apriBanner(false); }, 1200);
  }
  document.querySelectorAll('[data-preferenze-cookie]').forEach(function (b) { b.addEventListener('click', function () { apriBanner(true); }); });
  document.addEventListener('click', function (e) { if (e.target.closest('[data-carica-esterni]')) applica({ esterni: true }); });

  function gestisciEsterno(box, url, titolo, avvisoHtml) {
    var vicino = false;
    function carica() {
      if (box.querySelector('iframe')) return;
      var av = box.querySelector('.mappa-avviso, .esterno-avviso');
      if (av) av.hidden = true;
      var f = document.createElement('iframe');
      f.src = url;
      f.title = titolo;
      f.loading = 'lazy';
      f.referrerPolicy = 'no-referrer-when-downgrade';
      box.appendChild(f);
    }
    function avviso() {
      var av = box.querySelector('.mappa-avviso, .esterno-avviso');
      if (av) { av.hidden = false; return; }
      if (!avvisoHtml) return;
      var d = document.createElement('div');
      d.className = 'mappa-avviso';
      d.innerHTML = avvisoHtml;
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
  }
  document.querySelectorAll('[data-mappa]').forEach(function (box) {
    gestisciEsterno(box, box.getAttribute('data-mappa'), 'Mappa: CGA Motors, Via Zanardi Bonfiglio 49, Voghera',
      '<p class="titolo-m">Via Zanardi Bonfiglio, 49 · Voghera</p><p>La mappa interattiva è fornita da Google Maps, che può installare cookie di terze parti.</p>' +
      '<button class="pulsante contorno" type="button" data-carica-esterni>Mostra la mappa</button><p class="nota">Cliccando accetti i contenuti esterni. <a href="cookie-policy.html">Dettagli</a></p>');
  });

  var anno = document.querySelector('[data-anno]');
  if (anno) anno.textContent = new Date().getFullYear();
})();
