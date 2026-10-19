/* ==========================================================================
   CGA Motors — LA RUOTA 3D (Three.js, tutto costruito in codice: nessun modello da scaricare)
   Pneumatico con battistrada e scritte sul fianco, cerchio in lega a 5 razze, disco forato,
   pinza rossa CGA, mozzo e ammortizzatore. Con lo scroll della sezione [data-ruota] la ruota
   si "esplode" lungo l'asse e ogni pezzo porta al suo servizio (etichette HTML [data-parte]).
   Senza WebGL, con "riduci movimento" o da file:// resta l'immagine statica (poster).
   ========================================================================== */
import * as THREE from 'three';
import { RoomEnvironment } from './vendor/RoomEnvironment.js';
import { RoundedBoxGeometry } from './vendor/RoundedBoxGeometry.js';

const sezione = document.querySelector('[data-ruota]');
const scena3d = sezione && sezione.querySelector('.ruota-tela');
if (sezione && scena3d) {
  // le scritte su pneumatico e pinza si disegnano col font del sito: prima lo si carica (max 1,5 s)
  const font = document.fonts ? Promise.all([document.fonts.load('800 96px Archivo'), document.fonts.load('italic 900 96px Archivo')]) : Promise.resolve();
  Promise.race([font, new Promise((r) => setTimeout(r, 1500))]).then(avvia, avvia);
}

function avvia() {
  const prova = document.createElement('canvas');
  if (!(prova.getContext('webgl2') || prova.getContext('webgl'))) return;
  // Solo ora la sezione diventa "a scorrimento" (vedi .ruota-attiva in stile.css): se il 3D non parte resta una sezione normale
  document.documentElement.classList.add('ruota-attiva');

  const ridotto = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let piccolo = matchMedia('(max-width: 860px)').matches;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, piccolo ? 1.6 : 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.domElement.setAttribute('aria-hidden', 'true');
  scena3d.appendChild(renderer.domElement);

  const scena = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scena.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scena.environmentIntensity = 0.85;

  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 50);

  // Luci: bordo rosso da dietro (il colore CGA), chiave bianca, riempimento freddo
  const rim = new THREE.DirectionalLight(0xff2a14, 5.5); rim.position.set(-4, 2.5, -3.5); scena.add(rim);
  const rim2 = new THREE.DirectionalLight(0xff3b1f, 2.2); rim2.position.set(4, -1, -3); scena.add(rim2);
  const chiave = new THREE.DirectionalLight(0xffffff, 2.2); chiave.position.set(3, 4, 5); scena.add(chiave);
  const riemp = new THREE.DirectionalLight(0xffffff, 0.45); riemp.position.set(-3, -2, 4); scena.add(riemp);

  const ruota = new THREE.Group();
  scena.add(ruota);

  // ---------- Materiali ----------
  const anisotropia = renderer.capabilities.getMaxAnisotropy();
  const gomma = new THREE.MeshPhysicalMaterial({ color: 0x121213, roughness: 0.86, metalness: 0, sheen: 0.25, sheenColor: 0x333333 });
  const battistrada = new THREE.MeshPhysicalMaterial({ color: 0x151516, roughness: 0.9, bumpMap: texBattistrada(), bumpScale: 3.2 });
  battistrada.bumpMap.anisotropy = anisotropia;
  const lega = new THREE.MeshPhysicalMaterial({ color: 0x3b3e44, metalness: 1, roughness: 0.34, clearcoat: 1, clearcoatRoughness: 0.1 });
  const tornito = new THREE.MeshPhysicalMaterial({ color: 0xc4c8ce, metalness: 1, roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.06 });
  const diamantato = new THREE.MeshPhysicalMaterial({ color: 0xd9dde2, metalness: 1, roughness: 0.14, clearcoat: 1, clearcoatRoughness: 0.05 });
  const canale = new THREE.MeshStandardMaterial({ color: 0x1a1c20, metalness: 0.9, roughness: 0.45, side: THREE.DoubleSide });
  const acciaio = new THREE.MeshStandardMaterial({ color: 0x9a9ea4, metalness: 1, roughness: 0.32 });
  const ghisa = new THREE.MeshStandardMaterial({ color: 0x3a3c40, metalness: 0.85, roughness: 0.55 });
  const rosso = new THREE.MeshPhysicalMaterial({ color: 0xd0140c, metalness: 0.1, roughness: 0.32, clearcoat: 1, clearcoatRoughness: 0.08 });
  const cromo = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 1, roughness: 0.08 });
  const molla = new THREE.MeshPhysicalMaterial({ color: 0xd0140c, metalness: 0.3, roughness: 0.35, clearcoat: 0.8 });

  // ---------- Pezzi (ognuno con la sua posizione "esplosa") ----------
  const parti = {};
  function parte(nome, esplosa, gira) {
    const g = new THREE.Group();
    g.userData = { esplosa: new THREE.Vector3(...esplosa), gira };
    ruota.add(g);
    parti[nome] = g;
    return g;
  }

  // PNEUMATICO: sezione rivoluzionata attorno all'asse + fascia battistrada + scritte sul fianco
  const pneu = parte('pneumatico', [0, 0, 0], true);
  const profilo = [];
  const arco = (cx, cy, r, a0, a1, n) => { for (let i = 0; i <= n; i++) { const a = a0 + (a1 - a0) * (i / n); profilo.push(new THREE.Vector2(cx + Math.cos(a) * r, cy + Math.sin(a) * r)); } };
  profilo.push(new THREE.Vector2(0.675, 0.185));
  arco(0.735, 0.185, 0.045, Math.PI, Math.PI / 2, 5);            // tallone anteriore
  profilo.push(new THREE.Vector2(0.9, 0.232));                    // fianco
  arco(0.93, 0.16, 0.075, Math.PI / 2 + 0.35, 0, 10);              // spalla anteriore
  profilo.push(new THREE.Vector2(1.005, -0.16));
  arco(0.93, -0.16, 0.075, 0, -Math.PI / 2 - 0.35, 10);           // spalla posteriore
  profilo.push(new THREE.Vector2(0.78, -0.232));
  arco(0.735, -0.185, 0.045, -Math.PI / 2, -Math.PI, 5);
  profilo.push(new THREE.Vector2(0.675, -0.185));
  const lathe = new THREE.LatheGeometry(profilo.reverse(), 160);
  lathe.rotateX(Math.PI / 2);
  pneu.add(new THREE.Mesh(lathe, gomma));
  const fascia = new THREE.CylinderGeometry(1.009, 1.009, 0.29, 200, 1, true);
  fascia.rotateX(Math.PI / 2);
  pneu.add(new THREE.Mesh(fascia, battistrada));
  const fianco = new THREE.Mesh(new THREE.RingGeometry(0.76, 0.925, 160), new THREE.MeshStandardMaterial({ map: texFianco(0.925), transparent: true, roughness: 0.6, polygonOffset: true, polygonOffsetFactor: -2 }));
  fianco.position.z = 0.2335;
  pneu.add(fianco);

  // CERCHIO: canale, labbro, razze estruse (5 razze), anello diamantato
  const cerchio = parte('cerchio', [0, 0, 1.15], true);
  const canaleGeo = new THREE.CylinderGeometry(0.662, 0.662, 0.4, 120, 1, true);
  canaleGeo.rotateX(Math.PI / 2);
  cerchio.add(new THREE.Mesh(canaleGeo, canale));
  const labbro = new THREE.Mesh(new THREE.TorusGeometry(0.668, 0.019, 16, 160), diamantato);
  labbro.position.z = 0.2;
  cerchio.add(labbro);
  const faccia = new THREE.Shape();
  faccia.absarc(0, 0, 0.64, 0, Math.PI * 2, false);
  const polare = (r, a) => new THREE.Vector2(Math.cos(a) * r, Math.sin(a) * r);
  for (let k = 0; k < 5; k++) {
    const c = Math.PI / 2 + k * (Math.PI * 2 / 5) + Math.PI / 5;   // centro della finestra
    const fuori = 0.44, dentro = 0.21;                              // mezze aperture angolari (rad)
    const pts = [];
    for (let i = 0; i <= 14; i++) pts.push(polare(0.585, c - fuori + (2 * fuori) * (i / 14)));
    for (let i = 0; i <= 8; i++) pts.push(polare(0.235, c + dentro - (2 * dentro) * (i / 8)));
    const foro = new THREE.Path(pts.reverse());
    foro.closePath();
    faccia.holes.push(foro);
  }
  faccia.holes.push(new THREE.Path().absarc(0, 0, 0.075, 0, Math.PI * 2, true));
  const facciaGeo = new THREE.ExtrudeGeometry(faccia, { depth: 0.05, bevelEnabled: true, bevelThickness: 0.018, bevelSize: 0.012, bevelSegments: 3, curveSegments: 64 });
  const facciaMesh = new THREE.Mesh(facciaGeo, [tornito, lega]); // bicolore: facce diamantate, fianchi delle razze scuri
  facciaMesh.position.z = 0.1;
  cerchio.add(facciaMesh);
  const anello = new THREE.Mesh(new THREE.RingGeometry(0.595, 0.652, 160), diamantato);
  anello.position.z = 0.169;
  cerchio.add(anello);

  // COPRIMOZZO CGA + bulloni
  const tappo = parte('tappo', [0, 0, 1.95], true);
  const logoTex = new THREE.CanvasTexture(document.createElement('canvas'));
  const tappoMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.104, 0.035, 64), lega);
  const tappoFronte = new THREE.Mesh(new THREE.CircleGeometry(0.094, 64), new THREE.MeshPhysicalMaterial({ map: logoTex, metalness: 0.3, roughness: 0.3, clearcoat: 1 }));
  tappoFronte.position.z = 0.1935;
  tappo.add(tappoFronte);
  tappoMesh.rotation.x = Math.PI / 2;
  tappoMesh.position.z = 0.175;
  tappo.add(tappoMesh);
  caricaLogo(logoTex);
  for (let k = 0; k < 5; k++) {
    const b = new THREE.Mesh(new THREE.CylinderGeometry(0.021, 0.021, 0.05, 6), cromo);
    b.rotation.x = Math.PI / 2;
    const a = Math.PI / 2 + k * Math.PI * 2 / 5;
    b.position.set(Math.cos(a) * 0.15, Math.sin(a) * 0.15, 0.165);
    tappo.add(b);
  }

  // DISCO FRENO forato + campana
  const disco = parte('disco', [0, 0, -1.1], true);
  const discoShape = new THREE.Shape();
  discoShape.absarc(0, 0, 0.555, 0, Math.PI * 2, false);
  discoShape.holes.push(new THREE.Path().absarc(0, 0, 0.2, 0, Math.PI * 2, true));
  [0.32, 0.4, 0.48].forEach((r, j) => {
    for (let i = 0; i < 20; i++) {
      const a = (i / 20) * Math.PI * 2 + j * 0.09;
      discoShape.holes.push(new THREE.Path().absarc(Math.cos(a) * r, Math.sin(a) * r, 0.013, 0, Math.PI * 2, true));
    }
  });
  const discoGeo = new THREE.ExtrudeGeometry(discoShape, { depth: 0.045, bevelEnabled: false, curveSegments: 72 });
  const discoMesh = new THREE.Mesh(discoGeo, acciaio);
  discoMesh.position.z = -0.06;
  disco.add(discoMesh);
  const campana = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.12, 48), ghisa);
  campana.rotation.x = Math.PI / 2;
  campana.position.z = 0.0;
  disco.add(campana);

  // PINZA rossa con scritta CGA (non gira con la ruota)
  const pinza = parte('pinza', [0, 0.1, -1.1], false);
  const pinzaShape = new THREE.Shape();
  const a0 = Math.PI * 0.3, a1 = Math.PI * 0.68;
  pinzaShape.absarc(0, 0, 0.605, a0, a1, false);
  pinzaShape.absarc(0, 0, 0.4, a1, a0, true);
  const pinzaGeo = new THREE.ExtrudeGeometry(pinzaShape, { depth: 0.16, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.028, bevelSegments: 5, curveSegments: 32 });
  const pinzaMesh = new THREE.Mesh(pinzaGeo, rosso);
  pinzaMesh.position.z = -0.115;
  pinza.add(pinzaMesh);
  const scritta = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 0.066), new THREE.MeshStandardMaterial({ map: texScritta(), transparent: true, roughness: 0.4, polygonOffset: true, polygonOffsetFactor: -2 }));
  const am = (a0 + a1) / 2;
  scritta.position.set(Math.cos(am) * 0.5, Math.sin(am) * 0.5, 0.0755);
  scritta.rotation.z = am - Math.PI / 2;
  pinza.add(scritta);

  // MOZZO + AMMORTIZZATORE con molla (compare quando la ruota si apre)
  const mozzo = parte('mozzo', [0, 0, -1.9], false);
  const fuso = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.16, 0.26, 40), ghisa);
  fuso.rotation.x = Math.PI / 2;
  fuso.position.z = -0.22;
  mozzo.add(fuso);
  const braccio = new THREE.Mesh(new RoundedBoxGeometry(0.16, 0.62, 0.12, 3, 0.04), ghisa);
  braccio.position.set(0, 0.36, -0.3);
  mozzo.add(braccio);
  const stelo = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.9, 24), cromo);
  stelo.position.set(0, 1.05, -0.3);
  mozzo.add(stelo);
  const corpo = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.55, 32), ghisa);
  corpo.position.set(0, 0.85, -0.3);
  mozzo.add(corpo);
  const elica = new THREE.Curve();
  elica.getPoint = (t) => new THREE.Vector3(Math.cos(t * Math.PI * 2 * 6.5) * 0.13, 0.78 + t * 0.62, Math.sin(t * Math.PI * 2 * 6.5) * 0.13 - 0.3);
  mozzo.add(new THREE.Mesh(new THREE.TubeGeometry(elica, 260, 0.02, 10, false), molla));
  const piattello = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.025, 40), ghisa);
  piattello.position.set(0, 0.77, -0.3);
  mozzo.add(piattello);
  const piattello2 = piattello.clone();
  piattello2.position.y = 1.41;
  mozzo.add(piattello2);
  const materialiMozzo = [ghisa, cromo, molla];

  // Ombra morbida a terra
  const ombraCanvas = document.createElement('canvas');
  ombraCanvas.width = ombraCanvas.height = 128;
  const oc = ombraCanvas.getContext('2d');
  const grad = oc.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, 'rgba(0,0,0,0.75)');
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  oc.fillStyle = grad;
  oc.fillRect(0, 0, 128, 128);
  const ombra = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 0.9), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(ombraCanvas), transparent: true, depthWrite: false }));
  ombra.rotation.x = -Math.PI / 2;
  ombra.position.y = -1.04;
  scena.add(ombra);

  // ---------- Etichette HTML ancorate ai pezzi ----------
  const ancore = {
    pneumatico: new THREE.Vector3(0.1, -0.99, 0.1),
    cerchio: new THREE.Vector3(0, 0.66, 0.2),
    pinza: new THREE.Vector3(0, -0.53, -0.02),
    mozzo: new THREE.Vector3(0, 1.36, -0.3),
    tappo: new THREE.Vector3(0, 0, 0.2),
  };
  const etichette = [].slice.call(sezione.querySelectorAll('[data-parte]')).map((el) => ({ el, parte: el.getAttribute('data-parte') }));

  // ---------- Stato ----------
  let avanz = 0, avanzVis = 0;
  const punt = { x: 0, y: 0, vx: 0, vy: 0 };
  let giro = 0, visibile = true, primo = true;

  addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    punt.x = (e.clientX / innerWidth) * 2 - 1;
    punt.y = (e.clientY / innerHeight) * 2 - 1;
  }, { passive: true });

  function misura() {
    piccolo = matchMedia('(max-width: 860px)').matches;
    const r = scena3d.getBoundingClientRect();
    renderer.setSize(r.width, r.height, false);
    camera.aspect = r.width / Math.max(1, r.height);
    camera.updateProjectionMatrix();
  }
  addEventListener('resize', misura, { passive: true });
  misura();

  new IntersectionObserver((v) => { visibile = v[0].isIntersecting; }, { rootMargin: '100px' }).observe(sezione);

  const lisc = (x) => x * x * (3 - 2 * x);
  const tmp = new THREE.Vector3();

  let tPrec = 0;
  function aggiorna(t) {
    const dt = Math.min(0.25, tPrec ? (t - tPrec) / 1000 : 0.016);
    tPrec = t;
    const r = sezione.getBoundingClientRect();
    const corsa = r.height - innerHeight;
    avanz = corsa > 0 ? Math.min(1, Math.max(0, -r.top / corsa)) : 0;
    avanzVis += (avanz - avanzVis) * (primo ? 1 : 1 - Math.exp(-dt * 6));
    sezione.style.setProperty('--p', avanzVis.toFixed(4));
    // La ruota comincia ad aprirsi appena la sezione si ferma: 0.02 → 0.55 si apre; da 0.5 compaiono le etichette
    const e = lisc(Math.min(1, Math.max(0, (avanzVis - 0.02) / 0.53)));
    const k = 1 - Math.exp(-dt * 3);
    punt.vx += (punt.x - punt.vx) * k;
    punt.vy += (punt.y - punt.vy) * k;

    if (!ridotto) giro += (1 - e * 0.92) * 0.4 * dt;
    for (const nome in parti) {
      const p = parti[nome];
      p.position.copy(p.userData.esplosa).multiplyScalar(e);
      if (p.userData.gira) p.rotation.z = -giro;
    }
    materialiMozzo.forEach((m) => { m.transparent = e < 0.99; m.opacity = Math.min(1, e * 1.6); });
    parti.mozzo.visible = e > 0.02;

    // Inquadratura: di 3/4 davanti → di lato per vedere i pezzi uno dietro l'altro
    const respiro = ridotto ? 0 : Math.sin(t * 0.0006) * 0.03;
    ruota.rotation.y = -0.38 - e * 0.64 + punt.vx * 0.2;
    ruota.rotation.x = 0.06 + e * 0.1 - punt.vy * 0.08 + respiro;
    ruota.position.y = (piccolo ? 0.05 : 0) + e * -0.05;
    ruota.position.x = 0;
    const dist = (piccolo ? 5.4 : 5.0) + e * (piccolo ? 2.6 : 3.9);
    camera.position.set(0, 0.32 + e * 0.4, dist);
    camera.lookAt(ruota.position.x * 0.6, 0.05 + e * 0.12, 0);
    ombra.scale.set(1 + e * 1.1, 1 + e * 0.4, 1);
    ombra.position.x = ruota.position.x;

    renderer.render(scena, camera);

    // etichette
    const vis = Math.min(1, Math.max(0, (avanzVis - 0.5) / 0.12));
    const rc = scena3d.getBoundingClientRect();
    const rs = sezione.querySelector('.ruota-palco').getBoundingClientRect();
    etichette.forEach((et) => {
      const p = parti[et.parte];
      if (!p) return;
      // l'ancora segue la posizione del pezzo ma non la sua rotazione (le etichette non girano con la ruota)
      tmp.copy(ancore[et.parte]).add(p.position);
      ruota.localToWorld(tmp);
      tmp.project(camera);
      const x = rc.left - rs.left + (tmp.x * 0.5 + 0.5) * rc.width;
      const y = rc.top - rs.top + (-tmp.y * 0.5 + 0.5) * rc.height;
      et.el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      et.el.classList.toggle('a-sinistra', x > rs.width - 250);
      et.el.classList.toggle('a-destra', x < 250);
      et.el.style.opacity = vis;
      et.el.style.pointerEvents = vis > 0.5 ? 'auto' : 'none';
      et.el.tabIndex = vis > 0.5 ? 0 : -1;
    });
    if (primo) { primo = false; sezione.classList.add('ruota-pronta'); }
  }

  function ciclo(t) {
    requestAnimationFrame(ciclo);
    if (!visibile || document.hidden) return;
    aggiorna(t);
  }
  requestAnimationFrame(ciclo);

  // ---------- Texture disegnate al volo ----------
  function texBattistrada() {
    const c = document.createElement('canvas');
    c.width = 2048; c.height = 256;
    const x = c.getContext('2d');
    x.fillStyle = '#bbb'; x.fillRect(0, 0, c.width, c.height);
    x.fillStyle = '#111';
    [0.3, 0.5, 0.7].forEach((f) => x.fillRect(0, c.height * f - 9, c.width, 18));   // scanalature
    x.strokeStyle = '#111'; x.lineCap = 'round';
    const n = 64;
    for (let i = 0; i < n; i++) {
      const px = (i / n) * c.width;
      x.lineWidth = 10;
      x.beginPath(); x.moveTo(px, 0); x.lineTo(px + 26, c.height * 0.3); x.stroke();                 // intagli esterni
      x.beginPath(); x.moveTo(px + 32, c.height); x.lineTo(px + 6, c.height * 0.7); x.stroke();
      x.lineWidth = 5;
      x.beginPath(); x.moveTo(px + 14, c.height * 0.32); x.lineTo(px + 26, c.height * 0.48); x.stroke(); // lamelle
      x.beginPath(); x.moveTo(px + 30, c.height * 0.52); x.lineTo(px + 18, c.height * 0.68); x.stroke();
    }
    const t = new THREE.CanvasTexture(c);
    t.wrapS = THREE.RepeatWrapping;
    t.repeat.set(2, 1);
    t.rotation = 0;
    return t;
  }

  function texFianco(rEsterno) {
    const c = document.createElement('canvas');
    c.width = c.height = 2048;
    const x = c.getContext('2d');
    const scala = 1024 / rEsterno;
    x.translate(1024, 1024);
    x.fillStyle = 'rgba(235,235,235,0.92)';
    x.textAlign = 'center';
    x.textBaseline = 'middle';
    const giro = (testo, raggio, centro, peso, dim, verso) => {
      x.font = `${peso} ${dim}px Archivo, Arial, sans-serif`;
      const spazi = dim * 0.18;
      const larg = [...testo].map((ch) => x.measureText(ch).width + spazi);
      const tot = larg.reduce((a, b) => a + b, 0);
      let ang = centro - (verso * tot / 2) / (raggio * scala);
      [...testo].forEach((ch, i) => {
        const a = ang + verso * (larg[i] / 2) / (raggio * scala);
        x.save();
        x.rotate(a);
        x.translate(0, -raggio * scala * verso);
        x.fillText(ch, 0, 0);
        x.restore();
        ang += verso * larg[i] / (raggio * scala);
      });
    };
    giro('CGA MOTORS', 0.845, 0, '800', 96, 1);
    x.fillStyle = 'rgba(210,210,210,0.7)';
    giro('VOGHERA · DAL 1984', 0.845, 0, '600', 58, -1);
    x.fillStyle = 'rgba(208,20,12,0.95)';
    [Math.PI / 2, -Math.PI / 2].forEach((a) => { x.beginPath(); x.arc(Math.sin(a) * 0.845 * scala, -Math.cos(a) * 0.845 * scala, 14, 0, Math.PI * 2); x.fill(); });
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 8;
    return t;
  }

  function texScritta() {
    const c = document.createElement('canvas');
    c.width = 512; c.height = 170;
    const x = c.getContext('2d');
    x.fillStyle = '#fff';
    x.font = 'italic 900 140px Archivo, Arial, sans-serif';
    x.textAlign = 'center';
    x.textBaseline = 'middle';
    x.fillText('CGA', 256, 92);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }

  function caricaLogo(tex) {
    const c = document.createElement('canvas');
    c.width = c.height = 512;
    const x = c.getContext('2d');
    x.fillStyle = '#d0140c';
    x.fillRect(0, 0, 512, 512);
    tex.image = c;
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.needsUpdate = true;
    fetch(sezione.getAttribute('data-logo')).then((r) => r.text()).then((svg) => {
      const img = new Image();
      img.onload = () => {
        const w = 360, h = w * img.height / img.width;
        x.drawImage(img, 256 - w / 2, 256 - h / 2, w, h);
        tex.needsUpdate = true;
      };
      img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg.replace(/currentColor/g, '#ffffff'));
    }).catch(() => {});
  }
}
