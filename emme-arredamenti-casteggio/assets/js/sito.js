/* ==========================================================================
   Spazio Emme — script condiviso (vanilla, ~nessuna dipendenza).
   1. intro col logo   2. menu   3. transizione ad arco tra le pagine
   4. ENTRATA: ripresa Higgsfield guidata dallo scroll   5. percorso 3D
   6. portale "prossimo ambiente"   7. comparse, parallasse, cursore
   ========================================================================== */
(function () {
  'use strict';

  var doc = document.documentElement;
  var movimentoRidotto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var conn = navigator.connection || {};
  // Con "risparmio dati" o rete 2G non scarichiamo i video: resta il fotogramma iniziale.
  var risparmio = !!conn.saveData || /(^|-)2g$/.test(conn.effectiveType || '');
  var sessione = {
    leggi: function (k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } },
    scrivi: function (k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} },
    togli: function (k) { try { sessionStorage.removeItem(k); } catch (e) {} }
  };
  var limita = function (v, a, b) { return Math.min(b, Math.max(a, v)); };
  var altezza = window.innerHeight;
  window.addEventListener('resize', function () { altezza = window.innerHeight; aggiornaTutto(); }, { passive: true });

  /* ---------- 1. Intro ---------- */
  var intro = document.querySelector('.intro');
  if (doc.classList.contains('con-intro') && intro) {
    sessione.scrivi('emme-intro', '1');
    var chiudiIntro = function () {
      intro.classList.add('via');
      setTimeout(function () { doc.classList.remove('con-intro'); intro.remove(); }, 1300);
    };
    setTimeout(chiudiIntro, movimentoRidotto ? 200 : 2300);
    intro.addEventListener('click', chiudiIntro);
  } else if (intro) {
    intro.remove();
  }

  /* ---------- 2. Menu ---------- */
  var bottoneMenu = document.querySelector('.menu-apri');
  var menu = document.getElementById('menu');
  function impostaMenu(aperto) {
    doc.classList.toggle('menu-aperto', aperto);
    bottoneMenu.setAttribute('aria-expanded', aperto ? 'true' : 'false');
    bottoneMenu.querySelector('.menu-parola').textContent = aperto ? 'Chiudi' : 'Menu';
    menu.inert = !aperto;
    if (aperto) { var primo = menu.querySelector('a'); primo && primo.focus({ preventScroll: true }); }
  }
  if (bottoneMenu && menu) {
    menu.inert = true;
    bottoneMenu.addEventListener('click', function () { impostaMenu(!doc.classList.contains('menu-aperto')); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && doc.classList.contains('menu-aperto')) { impostaMenu(false); bottoneMenu.focus(); }
    });
    var anteprime = menu.querySelectorAll('.menu-anteprima img');
    menu.querySelectorAll('.menu-lista a').forEach(function (a, i) {
      a.addEventListener('mouseenter', function () {
        anteprime.forEach(function (img, j) { img.classList.toggle('attiva', j === i); });
      });
    });
  }

  /* ---------- 3. Transizione ad arco tra gli ambienti ---------- */
  var velo = document.querySelector('.velo');
  function apriVelo() {
    if (!velo) return;
    requestAnimationFrame(function () {
      velo.classList.add('apre');
      setTimeout(function () { doc.classList.remove('in-arrivo'); velo.classList.remove('apre'); }, 1250);
    });
  }
  if (doc.classList.contains('in-arrivo')) {
    sessione.togli('emme-transizione');
    apriVelo();
  }
  window.addEventListener('pageshow', function (e) {
    // Ritorno con il tasto "indietro" (bfcache): il velo non deve restare chiuso.
    if (e.persisted && velo) { velo.classList.remove('chiude'); doc.classList.remove('in-arrivo'); }
  });
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a || !velo || movimentoRidotto) return;
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (a.target === '_blank' || a.hasAttribute('download')) return;
    var url = new URL(a.href, location.href);
    if (url.origin !== location.origin || !/\.html$|\/$/.test(url.pathname)) return;
    if (url.pathname === location.pathname && url.hash) return;
    e.preventDefault();
    var nome = velo.querySelector('.velo-nome');
    if (nome) nome.textContent = a.getAttribute('data-ambiente') || '';
    velo.classList.add('chiude');
    sessione.scrivi('emme-transizione', '1');
    setTimeout(function () { location.href = url.href; }, 900);
  });

  /* ---------- Testata che si compatta / nasconde ---------- */
  var testata = document.querySelector('.testata');
  var ultimoY = 0;
  function aggiornaTestata(y) {
    if (!testata) return;
    testata.classList.toggle('compatta', y > 40);
    testata.classList.toggle('via', y > ultimoY && y > altezza * .8 && !doc.classList.contains('menu-aperto'));
    ultimoY = y;
  }

  /* ---------- 4. ENTRATA: la ripresa si "attraversa" con lo scroll ---------- */
  var entrate = [].slice.call(document.querySelectorAll('[data-entrata]')).map(function (sez) {
    var video = sez.querySelector('video');
    var stato = { sez: sez, video: video, pronto: false, obiettivo: 0, attuale: 0, p: 0 };
    if (!video || risparmio || movimentoRidotto) return stato;
    var carica = function () {
      if (video.dataset.caricato) return;
      video.dataset.caricato = '1';
      video.querySelectorAll('source[data-src]').forEach(function (s) { s.src = s.dataset.src; });
      video.load();
    };
    video.addEventListener('loadeddata', function () {
      stato.pronto = true;
      // Su iOS il primo seek funziona solo dopo un play(): lo avviamo e fermiamo subito.
      var pr = video.play();
      if (pr && pr.then) pr.then(function () { video.pause(); scrub(stato); }).catch(function () {});
    });
    // La ripresa della prima schermata parte subito dopo il load; le altre quando si avvicinano.
    if (sez.hasAttribute('data-subito')) {
      if (document.readyState === 'complete') carica(); else window.addEventListener('load', carica);
    } else if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (voci, oss) {
        if (voci[0].isIntersecting) { carica(); oss.disconnect(); }
      }, { rootMargin: '150% 0px' }).observe(sez);
    } else carica();
    return stato;
  });

  function avanzamento(el) {
    var r = el.getBoundingClientRect();
    var corsa = r.height - altezza;
    return corsa > 0 ? limita(-r.top / corsa, 0, 1) : 0;
  }

  var scrubInCorso = false;
  function scrub() {
    if (scrubInCorso) return;
    scrubInCorso = true;
    requestAnimationFrame(function passo() {
      var attivo = false;
      entrate.forEach(function (s) {
        if (!s.pronto || !s.video.duration) return;
        s.obiettivo = s.p * (s.video.duration - 0.05);
        var d = s.obiettivo - s.attuale;
        if (Math.abs(d) > 0.004) {
          s.attuale += d * 0.16;
          attivo = true;
          if (!s.video.seeking) s.video.currentTime = s.attuale;
        }
      });
      if (attivo) requestAnimationFrame(passo); else scrubInCorso = false;
    });
  }

  /* ---------- 5. Percorso 3D: corridoio di archi ---------- */
  var percorsi = [].slice.call(document.querySelectorAll('[data-percorso]')).map(function (sez) {
    var porte = [].slice.call(sez.querySelectorAll('.porta'));
    var stretto = window.matchMedia('(max-width: 699px)');
    porte.forEach(function (p, i) {
      p.style.setProperty('--i', i);
    });
    var impostaLati = function () {
      porte.forEach(function (p, i) {
        var lato = i % 2 === 0 ? -1 : 1;
        p.style.setProperty('--x', (stretto.matches ? lato * 6 : lato * 16) + 'vw');
      });
    };
    impostaLati();
    stretto.addEventListener && stretto.addEventListener('change', impostaLati);
    return {
      sez: sez,
      mondo: sez.querySelector('.percorso-mondo'),
      intro: sez.querySelector('.percorso-intro'),
      conta: sez.querySelector('[data-conta]'),
      porte: porte
    };
  });
  var PASSO = 1400;
  function aggiornaPercorso(pc) {
    if (movimentoRidotto) return;
    var p = avanzamento(pc.sez);
    var n = pc.porte.length;
    // la camera parte 900px davanti alla prima porta e la oltrepassa per ultima
    var z = -900 + p * ((n - 1) * PASSO + 1500);
    pc.mondo.style.setProperty('--z', z.toFixed(1));
    pc.sez.style.setProperty('--p', p.toFixed(4));
    var attiva = 0;
    pc.porte.forEach(function (porta, i) {
      var dist = i * PASSO - z; // distanza dalla camera (positiva = davanti)
      var op = dist < 250 ? limita((dist + 150) / 400, 0, 1) : limita(1 - (dist - 2400) / 1600, 0, 1);
      porta.style.opacity = op.toFixed(3);
      porta.style.visibility = op < 0.01 ? 'hidden' : 'visible';
      porta.style.pointerEvents = dist > 150 && dist < 1500 ? 'auto' : 'none';
      if (dist > 150) attiva = attiva || i + 1;
    });
    if (pc.conta) pc.conta.textContent = String(Math.max(1, attiva || n)).padStart(2, '0') + ' / ' + String(n).padStart(2, '0');
    if (pc.intro) pc.intro.style.opacity = limita(1 - p * 8, 0, 1).toFixed(3);
  }

  /* ---------- 6. Portale "prossimo ambiente" + soglie ---------- */
  var portali = [].slice.call(document.querySelectorAll('[data-portale]'));
  var soglie = [].slice.call(document.querySelectorAll('.soglia'));

  /* ---------- 7a. Parallasse delle immagini in galleria ---------- */
  var parallasse = [].slice.call(document.querySelectorAll('.quadro-cornice img, [data-parallasse]'));

  function aggiornaTutto() {
    var y = window.scrollY || window.pageYOffset;
    aggiornaTestata(y);
    if (movimentoRidotto) return;
    entrate.forEach(function (s) {
      s.p = avanzamento(s.sez);
      s.sez.style.setProperty('--p', s.p.toFixed(4));
    });
    scrub();
    percorsi.forEach(aggiornaPercorso);
    portali.forEach(function (sez) {
      var r = sez.getBoundingClientRect();
      if (r.bottom < 0 || r.top > altezza) return;
      sez.style.setProperty('--p', avanzamento(sez).toFixed(4));
    });
    soglie.forEach(function (sez) {
      var r = sez.getBoundingClientRect();
      if (r.bottom < 0) return;
      sez.style.setProperty('--p', limita(-r.top / r.height, 0, 1).toFixed(4));
    });
    parallasse.forEach(function (img) {
      var r = img.parentElement.getBoundingClientRect();
      if (r.bottom < -100 || r.top > altezza + 100) return;
      var v = ((r.top + r.height / 2) - altezza / 2) / altezza; // -1..1 circa
      img.style.setProperty('--v', limita(v, -1.2, 1.2).toFixed(3));
    });
  }

  var inAttesa = false;
  window.addEventListener('scroll', function () {
    if (inAttesa) return;
    inAttesa = true;
    requestAnimationFrame(function () { inAttesa = false; aggiornaTutto(); });
  }, { passive: true });
  aggiornaTutto();

  /* ---------- 7b. Comparse allo scroll ---------- */
  var daMostrare = document.querySelectorAll('[data-appare], [data-righe], .rivela');
  if ('IntersectionObserver' in window && !movimentoRidotto) {
    var oss = new IntersectionObserver(function (voci) {
      voci.forEach(function (v) {
        if (v.isIntersecting) { v.target.classList.add('visibile'); oss.unobserve(v.target); }
      });
    }, { rootMargin: '0px 0px -12% 0px' });
    daMostrare.forEach(function (el) { oss.observe(el); });
  } else {
    daMostrare.forEach(function (el) { el.classList.add('visibile'); });
  }

  /* ---------- 7c. Cursore (solo mouse) ---------- */
  var cursore = document.querySelector('.cursore');
  if (cursore && window.matchMedia('(hover: hover) and (pointer: fine)').matches && !movimentoRidotto) {
    var mx = -100, my = -100, cx = -100, cy = -100, muove = false;
    window.addEventListener('pointermove', function (e) {
      mx = e.clientX; my = e.clientY;
      var t = e.target.closest ? e.target : null;
      var porta = t && t.closest('.porta, .prossimo-arco, [data-cursore="entra"]');
      var link = t && t.closest('a, button, label, input, select, textarea');
      cursore.classList.toggle('su-porta', !!porta);
      cursore.classList.toggle('su-link', !porta && !!link);
      if (!muove) { muove = true; requestAnimationFrame(segui); }
    }, { passive: true });
    var segui = function () {
      cx += (mx - cx) * 0.2; cy += (my - cy) * 0.2;
      cursore.style.transform = 'translate3d(' + cx.toFixed(1) + 'px,' + cy.toFixed(1) + 'px,0)';
      if (Math.abs(mx - cx) + Math.abs(my - cy) > 0.3) requestAnimationFrame(segui); else muove = false;
    };
  } else if (cursore) {
    cursore.remove();
  }

  /* ---------- Riprese in loop (progetti): si caricano vicino alla vista, girano solo se visibili ---------- */
  var autoVideo = document.querySelectorAll('video[data-auto]');
  if (autoVideo.length && 'IntersectionObserver' in window && !risparmio && !movimentoRidotto) {
    var ossVideo = new IntersectionObserver(function (voci) {
      voci.forEach(function (v) {
        var vid = v.target;
        if (v.isIntersecting) {
          if (!vid.dataset.caricato) {
            vid.dataset.caricato = '1';
            vid.querySelectorAll('source[data-src]').forEach(function (s) { s.src = s.dataset.src; });
            vid.load();
          }
          var pr = vid.play();
          if (pr && pr.catch) pr.catch(function () {});
        } else if (vid.dataset.caricato) {
          vid.pause();
        }
      });
    }, { rootMargin: '25% 0px' });
    autoVideo.forEach(function (v) { ossVideo.observe(v); });
  }

  /* ---------- Consenso cookie (Linee guida Garante 2021): nulla di terze parti senza "Accetta" ---------- */
  var CHIAVE = 'emme-consenso';
  var SEI_MESI = 1000 * 60 * 60 * 24 * 182;
  var memoria = {
    leggi: function () { try { return JSON.parse(localStorage.getItem(CHIAVE)); } catch (e) { return null; } },
    scrivi: function (v) { try { localStorage.setItem(CHIAVE, JSON.stringify(v)); } catch (e) {} }
  };
  var consenso = memoria.leggi();
  if (consenso && (!consenso.data || Date.now() - consenso.data > SEI_MESI)) consenso = null;
  var banner = document.querySelector('.consenso-cookie');
  var ascoltatoriConsenso = [];

  function applicaConsenso(scelte) {
    consenso = { mappe: !!scelte.mappe, data: Date.now() };
    memoria.scrivi(consenso);
    chiudiBanner();
    ascoltatoriConsenso.forEach(function (f) { f(consenso); });
  }
  function apriBanner(dettagli) {
    if (!banner) return;
    banner.hidden = false;
    doc.classList.add('banner-aperto');
    var box = banner.querySelector('[data-categoria="mappe"]');
    if (box) box.checked = !!(consenso && consenso.mappe);
    mostraDettagli(!!dettagli);
    requestAnimationFrame(function () { banner.classList.add('visibile'); });
  }
  function chiudiBanner() {
    if (!banner) return;
    banner.classList.remove('visibile');
    doc.classList.remove('banner-aperto');
    setTimeout(function () { banner.hidden = true; }, 400);
  }
  function mostraDettagli(si) {
    banner.querySelector('.consenso-dettagli').hidden = !si;
    banner.querySelector('[data-consenso="personalizza"]').hidden = si;
    banner.querySelector('[data-consenso="salva"]').hidden = !si;
  }
  if (banner) {
    banner.addEventListener('click', function (e) {
      var b = e.target.closest('[data-consenso]');
      if (!b) return;
      var azione = b.getAttribute('data-consenso');
      if (azione === 'accetta') applicaConsenso({ mappe: true });
      else if (azione === 'rifiuta') applicaConsenso({ mappe: false });
      else if (azione === 'personalizza') mostraDettagli(true);
      else if (azione === 'salva') applicaConsenso({ mappe: banner.querySelector('[data-categoria="mappe"]').checked });
    });
    // Il banner compare dopo l'intro, per non coprirla.
    if (!consenso) setTimeout(function () { apriBanner(false); }, doc.classList.contains('con-intro') ? 2600 : 600);
  }
  document.querySelectorAll('[data-preferenze-cookie]').forEach(function (b) {
    b.addEventListener('click', function () { apriBanner(true); });
  });

  /* ---------- Mappa: con consenso si carica da sola vicino alla vista, altrimenti riquadro con invito ---------- */
  document.querySelectorAll('[data-mappa-auto]').forEach(function (box) {
    var inVista = false;
    var carica = function () {
      if (box.querySelector('iframe')) return;
      var avviso = box.querySelector('.mappa-avviso');
      if (avviso) avviso.remove();
      var f = document.createElement('iframe');
      f.src = box.getAttribute('data-mappa-auto');
      f.title = 'Mappa: Spazio Emme, Via Torino 23/A, Casteggio';
      f.referrerPolicy = 'no-referrer-when-downgrade';
      f.setAttribute('allowfullscreen', '');
      f.addEventListener('load', function () { box.classList.add('caricata'); });
      box.appendChild(f);
    };
    var mostraAvviso = function () {
      if (box.querySelector('.mappa-avviso') || box.querySelector('iframe')) return;
      var d = document.createElement('div');
      d.className = 'mappa-avviso';
      d.innerHTML = '<p class="titolo-m">Via Torino, 23/A<br><em>Casteggio</em></p>' +
        '<p>La mappa interattiva è fornita da Google Maps, che può installare cookie di terze parti.</p>' +
        '<button class="pulsante" type="button">Mostra la mappa</button>' +
        '<p class="mappa-avviso-nota">Cliccando accettate i cookie di Google Maps. <a class="link-sottile" href="cookie-policy.html">Dettagli</a></p>';
      d.querySelector('button').addEventListener('click', function () {
        applicaConsenso({ mappe: true });
      });
      box.appendChild(d);
    };
    var decidi = function () {
      if (consenso && consenso.mappe) { if (inVista) carica(); }
      else {
        var f = box.querySelector('iframe');
        if (f) { f.remove(); box.classList.remove('caricata'); }
        mostraAvviso();
      }
    };
    ascoltatoriConsenso.push(decidi);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (voci) {
        if (voci[0].isIntersecting) { inVista = true; decidi(); }
      }, { rootMargin: '400px 0px' }).observe(box);
    } else { inVista = true; }
    decidi();
  });

  /* ---------- Pulsante WhatsApp fisso: nascosto durante intro, menu e nella prima schermata ---------- */
  var wa = document.querySelector('.whatsapp-fisso');
  if (wa) {
    // ...e anche quando la mappa è in vista, per non coprirne i comandi.
    var sopraMappa = false;
    var mappa = document.querySelector('.mappa');
    if (mappa && 'IntersectionObserver' in window) {
      new IntersectionObserver(function (voci) { sopraMappa = voci[0].isIntersecting; aggiornaWa(); }, { rootMargin: '0px 0px -80px 0px' }).observe(mappa);
    }
    var aggiornaWa = function () { wa.classList.toggle('visibile', (window.scrollY || 0) > altezza * 0.6 && !sopraMappa); };
    window.addEventListener('scroll', aggiornaWa, { passive: true });
    aggiornaWa();
  }

  /* ---------- Modulo contatti: compone l'e-mail (nessun server necessario) ---------- */
  var modulo = document.querySelector('[data-modulo]');
  if (modulo) {
    modulo.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!modulo.reportValidity()) return;
      var d = new FormData(modulo);
      var corpo = 'Nome: ' + d.get('nome') + '\nTelefono: ' + (d.get('telefono') || '-') +
        '\nAmbiente: ' + d.get('ambiente') + '\n\n' + d.get('messaggio');
      var dest = modulo.getAttribute('data-email');
      location.href = 'mailto:' + dest + '?subject=' + encodeURIComponent('Richiesta appuntamento showroom — ' + d.get('nome')) +
        '&body=' + encodeURIComponent(corpo);
    });
  }

  var anno = document.querySelector('[data-anno]');
  if (anno) anno.textContent = new Date().getFullYear();
})();
