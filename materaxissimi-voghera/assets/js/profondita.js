/* ==========================================================================
   Rimulas — FOTO 3D con mappa di profondità (WebGL 1, nessuna libreria).
   Ogni <figure class="foto3d" data-3d="nome"> contiene la foto vera (<img>, resta per SEO e come riserva).
   Qui sopra si aggiunge un <canvas> che ridisegna la foto spostando ogni pixel in base alla sua profondità
   (assets/img/<nome>-profondita.webp, calcolata con Depth Anything V2): è una vera parallasse 3D.

   Attributi:
     data-forza="0.04"   ampiezza dello spostamento 3D
     data-fuoco="0.5"    profondità che resta ferma (0 = sfondo, 1 = primo piano)
     data-carrello        la sezione genitore [data-carrello-sezione] guida una carrellata in avanti (dolly) con lo scroll
   Input: mouse (desktop), inclinazione del telefono (dove consentito senza permessi), scroll, respiro automatico.
   ========================================================================== */
(function () {
  'use strict';

  var ridotto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var figure = [].slice.call(document.querySelectorAll('.foto3d[data-3d]'));
  if (!figure.length || ridotto) return;

  // WebGL disponibile?
  var prova = document.createElement('canvas');
  var glProva = prova.getContext('webgl') || prova.getContext('experimental-webgl');
  if (!glProva) return;
  var perdi = glProva.getExtension('WEBGL_lose_context');
  if (perdi) perdi.loseContext();

  var piccolo = window.matchMedia('(max-width: 800px)').matches;
  var DPR = Math.min(window.devicePixelRatio || 1, piccolo ? 1.75 : 1.5);
  var MAX_ATTIVE = piccolo ? 4 : 6; // contesti WebGL contemporanei (i telefoni ne reggono pochi)

  var VS = 'attribute vec2 p; varying vec2 v; void main(){ v = p * 0.5 + 0.5; v.y = 1.0 - v.y; gl_Position = vec4(p, 0.0, 1.0); }';
  var FS = [
    'precision mediump float;',
    'uniform sampler2D uImg; uniform sampler2D uProf;',
    'uniform vec2 uScala; uniform vec2 uScarto;',   // object-fit: cover
    'uniform vec2 uSposta;',                        // parallasse (x, y)
    'uniform float uCarrello;',                     // carrellata in avanti 0..1
    'uniform float uFuoco; uniform float uEntrata;',
    'varying vec2 v;',
    'void main(){',
    '  vec2 uv = v * uScala + uScarto;',
    '  vec2 c = vec2(0.5, 0.52);',
    '  vec2 q = uv;',
    // Iterazioni a punto fisso: la profondità si legge dove il pixel "finirà", così i bordi non si strappano.
    '  for (int i = 0; i < 5; i++) {',
    '    float d = texture2D(uProf, q).r;',
    '    float k = d - uFuoco;',
    '    vec2 r = uv - uSposta * k;',
    '    q = c + (r - c) / (1.0 + uCarrello * (0.32 + d * 0.3));',
    '  }',
    '  q = clamp(q, 0.002, 0.998);',
    '  vec3 col = texture2D(uImg, q).rgb;',
    // Vignetta morbida e comparsa iniziale
    '  vec2 w = v - 0.5;',
    '  col *= 1.0 - dot(w, w) * 0.35;',
    '  gl_FragColor = vec4(col * uEntrata, uEntrata);',
    '}'
  ].join('\n');

  function compila(gl, tipo, src) {
    var s = gl.createShader(tipo);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return s;
  }

  function caricaImmagine(src) {
    return new Promise(function (ok, ko) {
      var i = new Image();
      i.decoding = 'async';
      i.onload = function () { ok(i); };
      i.onerror = ko;
      i.src = src;
    });
  }

  // ---------- Stato condiviso degli input ----------
  var puntatore = { x: 0, y: 0, attivo: false };
  var inclinazione = { x: 0, y: 0, attiva: false };
  window.addEventListener('pointermove', function (e) {
    if (e.pointerType !== 'mouse') return;
    puntatore.x = (e.clientX / window.innerWidth) * 2 - 1;
    puntatore.y = (e.clientY / window.innerHeight) * 2 - 1;
    puntatore.attivo = true;
  }, { passive: true });
  document.addEventListener('mouseleave', function () { puntatore.attivo = false; });
  // Android e browser che non chiedono il permesso: il telefono inclinato muove la scena.
  if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission !== 'function') {
    window.addEventListener('deviceorientation', function (e) {
      if (e.gamma == null) return;
      inclinazione.x = Math.max(-1, Math.min(1, e.gamma / 25));
      inclinazione.y = Math.max(-1, Math.min(1, (e.beta - 45) / 25));
      inclinazione.attiva = true;
    }, { passive: true });
  }

  // ---------- Una scena per figura ----------
  function Scena(fig) {
    this.fig = fig;
    this.nome = fig.getAttribute('data-3d');
    this.forza = parseFloat(fig.getAttribute('data-forza') || '0.035');
    this.fuoco = parseFloat(fig.getAttribute('data-fuoco') || '0.45');
    this.sezioneCarrello = fig.hasAttribute('data-carrello') ? fig.closest('[data-carrello-sezione]') : null;
    // Percorso a tappe: la foto occupa solo un tratto [da, a] dello scroll della sezione (es. la camminata in sala)
    var seg = (fig.getAttribute('data-segmento') || '').split(',').map(parseFloat);
    this.segmento = seg.length === 2 && !isNaN(seg[0]) ? seg : null;
    this.sx = 0; this.sy = 0; this.carrello = 0; this.entrata = 0;
    this.visibile = false; this.attiva = false; this.inCaricamento = false;
    this.fase = Math.random() * 6.28;
  }

  Scena.prototype.avvia = function () {
    var self = this;
    if (this.attiva || this.inCaricamento) return;
    this.inCaricamento = true;
    var larg = piccolo ? 720 : 1440;
    Promise.all([
      caricaImmagine('assets/img/' + this.nome + '-' + larg + '.webp'),
      caricaImmagine('assets/img/' + this.nome + '-profondita.webp')
    ]).then(function (imm) {
      self.inCaricamento = false;
      if (!self.visibile) return; // uscita di vista nel frattempo
      self.crea(imm[0], imm[1]);
    }).catch(function () { self.inCaricamento = false; });
  };

  Scena.prototype.crea = function (foto, prof) {
    var c = document.createElement('canvas');
    c.className = 'foto3d-tela';
    c.setAttribute('aria-hidden', 'true');
    var gl = c.getContext('webgl', { alpha: true, antialias: false, premultipliedAlpha: true, powerPreference: 'low-power' });
    if (!gl) return;
    var prog = gl.createProgram();
    gl.attachShader(prog, compila(gl, gl.VERTEX_SHADER, VS));
    gl.attachShader(prog, compila(gl, gl.FRAGMENT_SHADER, FS));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);
    var buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    var loc = gl.getAttribLocation(prog, 'p');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    var tex = function (unita, img) {
      var t = gl.createTexture();
      gl.activeTexture(gl.TEXTURE0 + unita);
      gl.bindTexture(gl.TEXTURE_2D, t);
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
    };
    tex(0, foto);
    tex(1, prof);
    gl.uniform1i(gl.getUniformLocation(prog, 'uImg'), 0);
    gl.uniform1i(gl.getUniformLocation(prog, 'uProf'), 1);
    this.u = {
      scala: gl.getUniformLocation(prog, 'uScala'), scarto: gl.getUniformLocation(prog, 'uScarto'),
      sposta: gl.getUniformLocation(prog, 'uSposta'), carrello: gl.getUniformLocation(prog, 'uCarrello'),
      fuoco: gl.getUniformLocation(prog, 'uFuoco'), entrata: gl.getUniformLocation(prog, 'uEntrata')
    };
    this.gl = gl; this.tela = c; this.fotoW = foto.naturalWidth; this.fotoH = foto.naturalHeight;
    this.fig.appendChild(c);
    this.misura();
    this.attiva = true;
    this.fig.classList.add('foto3d-pronta');
  };

  Scena.prototype.misura = function () {
    if (!this.tela) return;
    var r = this.fig.getBoundingClientRect();
    var tetto = Math.min(1, 2048 / Math.max(r.width * DPR, r.height * DPR, 1));
    var w = Math.max(1, Math.round(r.width * DPR * tetto)), h = Math.max(1, Math.round(r.height * DPR * tetto));
    if (this.tela.width !== w || this.tela.height !== h) { this.tela.width = w; this.tela.height = h; }
    this.gl.viewport(0, 0, w, h);
    // object-fit: cover + un filo di margine (sovrascansione) perché lo spostamento non mostri i bordi
    var ra = r.width / r.height, rf = this.fotoW / this.fotoH, margine = 1 + this.forza * 1.6;
    var sx = 1, sy = 1;
    if (ra > rf) sy = rf / ra; else sx = ra / rf;
    sx /= margine; sy /= margine;
    var pos = (this.fig.getAttribute('data-posizione') || '50 50').split(' ').map(function (n) { return parseFloat(n) / 100; });
    this.gl.uniform2f(this.u.scala, sx, sy);
    this.gl.uniform2f(this.u.scarto, (1 - sx) * pos[0], (1 - sy) * pos[1]);
    this.gl.uniform1f(this.u.fuoco, this.fuoco);
  };

  Scena.prototype.spegni = function () {
    if (!this.attiva) return;
    var est = this.gl.getExtension('WEBGL_lose_context');
    if (est) est.loseContext();
    this.tela.remove();
    this.tela = null; this.gl = null; this.attiva = false; this.entrata = 0; this.nato = 0;
    this.fig.classList.remove('foto3d-pronta');
  };

  Scena.prototype.disegna = function (t, altezza) {
    if (!this.attiva) return;
    var r = this.fig.getBoundingClientRect();
    // Obiettivo dello spostamento: mouse > inclinazione > respiro automatico; lo scroll aggiunge sempre la verticale.
    var tx, ty;
    if (puntatore.attivo) { tx = puntatore.x; ty = puntatore.y * 0.6; }
    else if (inclinazione.attiva) { tx = inclinazione.x; ty = inclinazione.y * 0.6; }
    else { tx = Math.sin(t * 0.00035 + this.fase) * 0.55; ty = Math.cos(t * 0.00027 + this.fase) * 0.3; }
    var centro = (r.top + r.height / 2) / altezza - 0.5; // -0.5 (sopra) .. 0.5 (sotto)
    ty += centro * 1.4;
    this.sx += (tx - this.sx) * 0.06;
    this.sy += (ty - this.sy) * 0.06;
    var carr = 0;
    if (this.sezioneCarrello) {
      carr = avanzamentoSezione(this.sezioneCarrello, altezza);
      if (this.segmento) carr = Math.min(1, Math.max(0, (carr - this.segmento[0]) / (this.segmento[1] - this.segmento[0])));
    }
    this.carrello += (carr - this.carrello) * 0.12;
    // Nella camminata la camera avanza e scivola di lato, come chi entra e si guarda attorno
    if (this.segmento) this.sx += ((this.carrello - 0.5) * (this.fig.getAttribute('data-verso') === 'sinistra' ? -0.9 : 0.9) - this.sx) * 0.05;
    // comparsa in ~0,6 s, indipendente dai fotogrammi al secondo
    if (!this.nato) this.nato = t;
    this.entrata = Math.min(1, (t - this.nato) / 600);
    var gl = this.gl;
    gl.uniform2f(this.u.sposta, this.sx * this.forza, this.sy * this.forza);
    gl.uniform1f(this.u.carrello, this.carrello * 1.1);
    gl.uniform1f(this.u.entrata, this.entrata);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  };

  function avanzamentoSezione(sez, h) {
    var s = sez.getBoundingClientRect();
    var corsa = s.height - h;
    return corsa > 0 ? Math.min(1, Math.max(0, -s.top / corsa)) : 0;
  }

  var scene = figure.map(function (f) { return new Scena(f); });

  // Attiva solo le scene vicine alla vista, e al massimo MAX_ATTIVE (le più vicine al centro).
  // Nelle sezioni a tappe conta solo la tappa corrente e le vicine.
  function gestisci() {
    var h = window.innerHeight;
    var candidati = scene.filter(function (s) {
      var r = s.fig.getBoundingClientRect();
      s.visibile = r.bottom > -h * 0.3 && r.top < h * 1.3 && r.width > 0;
      s.distanza = Math.abs(r.top + r.height / 2 - h / 2);
      if (s.visibile && s.segmento && s.sezioneCarrello) {
        var p = avanzamentoSezione(s.sezioneCarrello, h);
        var margine = 0.06;
        s.visibile = p > s.segmento[0] - margine && p < s.segmento[1] + margine;
        s.distanza = p < s.segmento[0] ? s.segmento[0] - p : p > s.segmento[1] ? p - s.segmento[1] : 0;
      }
      return s.visibile;
    }).sort(function (a, b) { return a.distanza - b.distanza; });
    var tenere = candidati.slice(0, MAX_ATTIVE);
    scene.forEach(function (s) {
      if (tenere.indexOf(s) >= 0) { s.avvia(); if (s.attiva) s.misura(); } else { s.visibile = false; s.spegni(); }
    });
  }

  var ultima = 0;
  function ciclo(t) {
    requestAnimationFrame(ciclo);
    if (document.hidden) return;
    if (t - ultima > 250) { gestisci(); ultima = t; }
    var h = window.innerHeight;
    for (var i = 0; i < scene.length; i++) scene[i].disegna(t, h);
  }
  window.addEventListener('resize', function () { piccolo = window.matchMedia('(max-width: 800px)').matches; scene.forEach(function (s) { s.misura(); }); }, { passive: true });
  gestisci();
  requestAnimationFrame(ciclo);
})();
