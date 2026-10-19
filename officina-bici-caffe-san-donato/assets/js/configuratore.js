/* ==========================================================================
   Configuratore "La tua bici in officina" (pagina porta-la-bici.html)
   Script classico, NON compilato: si modifica e si ricarica, senza npm run build.

   ► Per cambiare tipi di bici, interventi, testi o contatti basta modificare
     l'oggetto CONFIGURATORE qui sotto. La logica (più in basso) non va toccata.
   ========================================================================== */

var CONFIGURATORE = {
  // Dove arrivano le richieste. Compaiono i pulsanti dei canali compilati; "Chiama" c'è sempre.
  // Lasciando un campo vuoto il suo pulsante sparisce (se mancano entrambi: "Copia la richiesta").
  contatti: {
    telefono: '', // vuoto = quello di strumenti/dati.js (02 514035)
    whatsapp: '393384097066', // PROVVISORIO: numero con prefisso internazionale, solo cifre
    email: 'francescoscogna04@gmail.com', // PROVVISORIA
  },

  // Tipi di bici. "modello3d" sceglie la bici disegnata: citta | corsa | mtb | elettrica
  tipi: [
    { id: 'citta', nome: 'Città', descrizione: 'City bike, olandese, pieghevole', modello3d: 'citta' },
    { id: 'corsa', nome: 'Corsa', descrizione: 'Da strada, gravel, scatto fisso', modello3d: 'corsa' },
    { id: 'mtb', nome: 'Mountain bike', descrizione: 'MTB e bici da sterrato', modello3d: 'mtb' },
    { id: 'elettrica', nome: 'Elettrica', descrizione: 'E-bike a pedalata assistita', modello3d: 'elettrica' },
  ],
  tipoIniziale: 'citta',

  // Interventi. "evidenzia" = parti della bici 3D che si illuminano:
  // telaio | cerchi | pneumatici | trasmissione | catena | freni | componenti
  interventi: [
    { id: 'tagliando', nome: 'Tagliando', descrizione: 'Controllo completo e regolazioni', evidenzia: ['trasmissione', 'catena', 'freni', 'pneumatici'] },
    { id: 'freni', nome: 'Freni', descrizione: 'Frenano poco o fischiano', evidenzia: ['freni'] },
    { id: 'cambio', nome: 'Cambio', descrizione: 'Rapporti che saltano, catena che cade', evidenzia: ['trasmissione', 'catena'] },
    { id: 'foratura', nome: 'Foratura', descrizione: "Gomma a terra, camera d'aria", evidenzia: ['pneumatici'] },
    { id: 'restauro', nome: 'Restauro', descrizione: 'Rimettere in sesto una bici vecchia', evidenzia: ['telaio', 'cerchi'] },
  ],

  // Voci del menu "Quando pensi di passare?" (la prima è quella predefinita).
  quando: ['Non so ancora', 'Domani mattina', 'Nei prossimi giorni', 'Sabato'],

  testi: {
    saluto: 'Ciao! Vorrei portare la bici in officina.',
    firma: '(richiesta preparata dal sito)',
    oggettoEmail: 'Richiesta riparazione bici',
    vuoto: 'Scegli il tipo di bici e almeno un intervento.',
    mancano: 'Scegli almeno un intervento: così la richiesta è completa.',
    whatsapp: 'Invia su WhatsApp',
    email: 'Invia per e-mail',
    copia: 'Copia la richiesta',
    copiata: 'Richiesta copiata: incollala dove preferisci, oppure chiamaci e leggicela.',
    nonCopiata: 'Il telefono non ci ha permesso di copiare: seleziona il testo della richiesta qui sopra, oppure chiamaci.',
    apertoWhatsapp: 'Si sta aprendo WhatsApp con la richiesta già scritta: controlla e premi Invia.',
    apertaEmail: 'Si sta aprendo la posta con la richiesta già scritta: controlla e premi Invia.',
  },
};

/* ==========================================================================
   Logica (non serve modificarla)
   ========================================================================== */
(function () {
  'use strict';
  var C = CONFIGURATORE;
  var modulo = document.getElementById('modulo-configuratore');
  if (!modulo) return;

  var sito = window.Officina || {};
  var datiSito = sito.dati || {};
  var telefono = C.contatti.telefono || datiSito.telefono || '';
  var telefonoLink = telefono ? 'tel:+39' + telefono.replace(/\D/g, '') : '';
  var whatsapp = (C.contatti.whatsapp || '').replace(/\D/g, '');
  var email = (C.contatti.email || '').trim();

  var riepilogo = document.getElementById('riepilogo-testo');
  var azioni = document.getElementById('configuratore-azioni');
  var esito = document.getElementById('configuratore-esito');
  var didascalia = document.getElementById('configuratore-didascalia');
  var anteprima = null; // API della bici 3D, quando pronta

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function icona(nome) {
    return '<svg aria-hidden="true" viewBox="0 0 24 24" class="icona"><use href="#icona-' + nome + '"/></svg>';
  }

  // --- Costruzione dei controlli dall'oggetto CONFIGURATORE -----------------
  function scelta(tipo, nome, voce, spuntata) {
    var id = 'scelta-' + nome + '-' + voce.id;
    return '<div class="scelta"><input type="' + tipo + '" name="' + nome + '" id="' + id + '" value="' + esc(voce.id) + '"' +
      (spuntata ? ' checked' : '') + '><label for="' + id + '"><span class="scelta__nome">' + esc(voce.nome) +
      '</span><span class="scelta__descrizione">' + esc(voce.descrizione || '') + '</span></label></div>';
  }
  modulo.querySelector('[data-opzioni="tipi"]').innerHTML = C.tipi.map(function (t) {
    return scelta('radio', 'tipo', t, t.id === C.tipoIniziale);
  }).join('');
  modulo.querySelector('[data-opzioni="interventi"]').innerHTML = C.interventi.map(function (i) {
    return scelta('checkbox', 'interventi', i, false);
  }).join('');
  modulo.querySelector('[data-opzioni="quando"]').innerHTML = C.quando.map(function (q) {
    return '<option>' + esc(q) + '</option>';
  }).join('');

  // Pulsanti: WhatsApp ed e-mail (quelli configurati), poi "Chiama" che è già nell'HTML.
  var pulsanti = [];
  if (whatsapp) pulsanti.push('<a class="pulsante pulsante--whatsapp pulsante--grande" id="invia-whatsapp" data-canale="whatsapp" href="https://wa.me/' + whatsapp + '" target="_blank" rel="noopener">' + icona('whatsapp') + esc(C.testi.whatsapp) + '</a>');
  if (email) pulsanti.push('<a class="pulsante pulsante--verde pulsante--grande" id="invia-email" data-canale="email" href="mailto:' + esc(email) + '">' + icona('posta') + esc(C.testi.email) + '</a>');
  if (!pulsanti.length) pulsanti.push('<button type="button" class="pulsante pulsante--verde" id="invia-copia" data-canale="copia">' + icona('copia') + esc(C.testi.copia) + '</button>');
  azioni.insertAdjacentHTML('afterbegin', pulsanti.join(''));
  var canali = [].slice.call(azioni.querySelectorAll('[data-canale]'));
  if (telefonoLink) azioni.querySelector('a[href^="tel:"]').setAttribute('href', telefonoLink);

  // --- Lettura dello stato e testo della richiesta --------------------------
  function trova(elenco, id) {
    for (var i = 0; i < elenco.length; i++) if (elenco[i].id === id) return elenco[i];
    return null;
  }
  function stato() {
    var fd = new FormData(modulo);
    var tipo = trova(C.tipi, fd.get('tipo'));
    var interventi = fd.getAll('interventi').map(function (id) { return trova(C.interventi, id); }).filter(Boolean);
    return {
      tipo: tipo,
      interventi: interventi,
      nome: (fd.get('nome') || '').trim(),
      quando: fd.get('quando') || '',
      note: (fd.get('note') || '').trim(),
    };
  }
  function completo(s) { return !!(s.tipo && s.interventi.length); }
  function testo(s) {
    var righe = [C.testi.saluto, ''];
    if (s.tipo) righe.push('• Bici: ' + s.tipo.nome);
    if (s.interventi.length) righe.push('• Interventi: ' + s.interventi.map(function (i) { return i.nome; }).join(', '));
    if (s.quando && s.quando !== C.quando[0]) righe.push('• Quando: ' + s.quando);
    if (s.note) righe.push('• Note: ' + s.note);
    if (s.nome) righe.push('', 'Sono ' + s.nome + '.');
    righe.push('', C.testi.firma);
    return righe.join('\n');
  }

  // Collegamenti sempre aggiornati: così funziona anche il tasto destro / "apri in nuova scheda".
  function aggiornaCollegamenti(s, ok) {
    var t = encodeURIComponent(testo(s));
    canali.forEach(function (b) {
      b.setAttribute('aria-disabled', ok ? 'false' : 'true');
      if (b.dataset.canale === 'whatsapp') b.href = 'https://wa.me/' + whatsapp + (ok ? '?text=' + t : '');
      if (b.dataset.canale === 'email') b.href = 'mailto:' + email + (ok ? '?subject=' + encodeURIComponent(C.testi.oggettoEmail) + '&body=' + t : '');
    });
  }

  var ultimoTipo = null, ultimeParti = '';
  function aggiorna() {
    var s = stato();
    var ok = completo(s);
    riepilogo.textContent = ok ? testo(s) : (s.tipo ? C.testi.mancano : C.testi.vuoto);
    aggiornaCollegamenti(s, ok);
    if (ok && !esito.hidden && esito.dataset.tipo === 'errore') esito.hidden = true;
    // Bici 3D: tipo e parti da evidenziare (solo se cambiano: niente lavoro a ogni tasto).
    var parti = [];
    s.interventi.forEach(function (i) { (i.evidenzia || []).forEach(function (p) { if (parti.indexOf(p) < 0) parti.push(p); }); });
    if (anteprima && s.tipo && s.tipo.id !== ultimoTipo) { anteprima.impostaTipo(s.tipo.modello3d); ultimoTipo = s.tipo.id; }
    if (anteprima && parti.join() !== ultimeParti) { anteprima.evidenzia(parti); ultimeParti = parti.join(); }
    if (didascalia && s.tipo) {
      didascalia.textContent = s.tipo.nome + (s.interventi.length ? ' · in ottone le parti da sistemare' : ' · trascina per girarla');
    }
  }
  modulo.addEventListener('input', aggiorna);
  modulo.addEventListener('change', aggiorna);
  modulo.addEventListener('submit', function (e) { e.preventDefault(); });

  function mostraEsito(msg, tipo) {
    esito.textContent = msg;
    esito.dataset.tipo = tipo || 'ok';
    esito.hidden = false;
  }

  azioni.addEventListener('click', function (e) {
    var b = e.target.closest('[data-canale]');
    if (!b) return;
    var s = stato();
    if (!completo(s)) {
      // Richiesta incompleta: niente invio, si porta l'utente al punto mancante.
      e.preventDefault();
      mostraEsito(s.tipo ? C.testi.mancano : C.testi.vuoto, 'errore');
      var primo = modulo.querySelector(s.tipo ? 'input[name="interventi"]' : 'input[name="tipo"]');
      if (primo) { primo.focus({ preventScroll: true }); primo.closest('fieldset').scrollIntoView({ block: 'center', behavior: sito.riduciMovimento ? 'auto' : 'smooth' }); }
      return;
    }
    aggiornaCollegamenti(s, true);
    if (b.dataset.canale === 'whatsapp') { mostraEsito(C.testi.apertoWhatsapp); return; }
    if (b.dataset.canale === 'email') { mostraEsito(C.testi.apertaEmail); return; }
    copia(testo(s));
  });

  // Ripiego se non ci sono né WhatsApp né e-mail: copia negli appunti, e lo dice solo se è riuscito.
  function copia(t) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(t).then(function () { mostraEsito(C.testi.copiata); }, function () { copiaVecchioStile(t); });
    } else {
      copiaVecchioStile(t);
    }
  }
  function copiaVecchioStile(t) {
    var a = document.createElement('textarea');
    a.value = t;
    a.style.position = 'fixed';
    a.style.opacity = '0';
    a.style.fontSize = '16px'; // niente zoom su iPhone
    document.body.appendChild(a);
    a.focus();
    a.setSelectionRange(0, t.length); // su iOS select() da solo non basta
    var riuscito = false;
    try { riuscito = document.execCommand('copy'); } catch (err) { riuscito = false; }
    document.body.removeChild(a);
    mostraEsito(riuscito ? C.testi.copiata : C.testi.nonCopiata, riuscito ? 'ok' : 'errore');
  }

  // Primo riepilogo al fotogramma successivo: non rallenta il caricamento della pagina.
  requestAnimationFrame(aggiorna);

  // --- Bici 3D ---------------------------------------------------------------
  // Finché non parte si vede l'immagine della stessa bici. Il 3D parte al primo tocco sul modulo
  // o sulla bici (su computer anche passandoci sopra col mouse): mai insieme al caricamento.
  var tela = document.getElementById('tela-configuratore');
  var avviato = false;
  function avvia3D() {
    if (avviato) return;
    avviato = true;
    modulo.removeEventListener('pointerdown', avvia3D);
    modulo.removeEventListener('focusin', avvia3D);
    tela.removeEventListener('pointerdown', avvia3D);
    if (!sito.carica3D || !sito.puo3D) {
      document.documentElement.classList.add('senza-3d');
      return;
    }
    sito.carica3D().then(function (api3d) {
      var s = stato();
      anteprima = api3d.avviaConfiguratore({
        tela: tela,
        tipo: s.tipo ? s.tipo.modello3d : 'citta',
        riduciMovimento: !!sito.riduciMovimento,
        inPausa: !!sito.inPausa,
      });
      ultimoTipo = s.tipo ? s.tipo.id : null;
      if (sito.suPausa) sito.suPausa(function (v) { anteprima.impostaPausa(v); });
      aggiorna();
      requestAnimationFrame(function () { tela.parentElement.classList.add('e-3d'); });
    }).catch(function () { document.documentElement.classList.add('senza-3d'); });
  }
  if (tela) {
    modulo.addEventListener('pointerdown', avvia3D, { passive: true });
    modulo.addEventListener('focusin', avvia3D);
    tela.addEventListener('pointerdown', avvia3D, { passive: true });
    if (!window.matchMedia('(pointer: coarse)').matches) {
      tela.parentElement.addEventListener('pointerenter', avvia3D, { once: true });
    }
  }
})();
