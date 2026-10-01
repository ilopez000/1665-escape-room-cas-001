// =====================================================================
//  CAS 001 · L'EMPRESA DEL PAPER · Escape room de la sessió 1 del MP 1665
//  Tot el contingut del joc és aquí: narrativa, teoria i proves.
//  Per canviar una pregunta o afegir-ne una, només cal tocar aquest fitxer.
// =====================================================================

export type Categoria = string;

/** Classificar cada element en una de les categories (IT / OT / Frontera...). */
export interface ProvaClassificar {
  tipus: 'classificar';
  titol: string;
  enunciat: string;
  categories: Categoria[];
  elements: { text: string; correcta: Categoria; perque: string }[];
  pista: string;
}

/** Marcar totes les targetes que compleixen una condició. */
export interface ProvaSeleccionar {
  tipus: 'seleccionar';
  titol: string;
  enunciat: string;
  /** Text que surt a la targeta quan està marcada. */
  etiqueta: string;
  missatgeOk: string;
  elements: { text: string; sector: string; correcta: boolean; perque: string }[];
  pista: string;
}

/** Relacionar cada fila amb una opció de cada columna (desplegables). */
export interface ProvaAparellar {
  tipus: 'aparellar';
  titol: string;
  enunciat: string;
  columnes: { nom: string; opcions: string[] }[];
  files: { text: string; correctes: string[]; perque: string }[];
  pista: string;
}

/** Construir una cadena en l'ordre correcte triant blocs. */
export interface ProvaSequencia {
  tipus: 'sequencia';
  titol: string;
  enunciat: string;
  /** Rètols dels dos extrems de la cadena. */
  inici: string;
  final: string;
  missatgeOk: string;
  ordre: string[];
  intrusos: { text: string; perque: string }[];
  pista: string;
}

/** Preguntes de resposta única, una darrere l'altra. */
export interface ProvaQuiz {
  tipus: 'quiz';
  titol: string;
  enunciat: string;
  preguntes: { pregunta: string; opcions: string[]; correcta: number; perque: string }[];
  pista: string;
}

export type Prova = ProvaClassificar | ProvaSeleccionar | ProvaAparellar | ProvaSequencia | ProvaQuiz;

export interface Sala {
  id: number;
  codi: string;
  nom: string;
  lloc: string;
  icona: string;
  /** Missatge de la unitat que obre la sala (ambientació). */
  transmissio: string[];
  teoria: { titol: string; html: string }[];
  ideaClau: string;
  proves: Prova[];
  fragment: { posicio: number; lletra: string };
  missatgeFinal: string;
}

export const CLAU_MESTRA = 'ORIGEN';

export const INTRO = {
  titol: "CAS 001 · L'EMPRESA DEL PAPER",
  subtitol: 'Agència Dada · detectius digitals',
  transmissio: [
    'Missatge de veu entrant · Sra. Ferrer, gerent de Distribucions Ferrer.',
    '«Perdem comandes, les factures surten equivocades i els clients es queixen que ningú no sap on és el seu encàrrec.»',
    '«Tenim ordinadors nous, tenim web i tenim Instagram. Tothom diu que ja som digitals… però alguna cosa no funciona.»',
    '«He deixat la contrasenya de la caixa forta, on guardo tots els documents del cas, partida en sis pistes repartides per l\'empresa.»',
    '«Necessito un detectiu que entengui què vol dir de debò digitalitzar una empresa. Vostè és la meva última esperança.»',
  ],
};

export const SALES: Sala[] = [
  // ------------------------------------------------------------------ ESCENA 01
  {
    id: 1,
    codi: 'ESCENA 01',
    nom: 'Les normes de l\'agència',
    lloc: 'El despatx de l\'Agència Dada',
    icona: '✉',
    transmissio: [
      'Abans d\'acceptar el cas, l\'agència et dona el manual del detectiu.',
      'Aquí no es treballa a cegues: has de saber què s\'investiga, com es valora la feina i quines són les normes.',
    ],
    teoria: [
      {
        titol: 'De què va aquest mòdul',
        html: '<p>El fan tots els primers cursos: <strong>AFI, CI, GAT, MK i TR</strong>. No aprendràs a programar ni a muntar ordinadors: aprendràs a <strong>mirar una empresa del teu sector</strong> i entendre com hi circula la informació, què es fa encara a mà, on es perd temps i quina tecnologia li aniria bé.</p><p>El mòdul té <strong>sis blocs (AEA)</strong>, un per cada RA. Els tres primers es treballen amb el projecte <strong>PR1</strong> i els tres últims amb el <strong>PR2</strong>, tots dos individuals i sobre la mateixa empresa.</p>',
      },
      {
        titol: 'Com s\'avalua',
        html: '<ul><li>Els sis RA pesen igual: <strong>16,67%</strong> cadascun.</li><li>Dins de cada RA: <strong>fase del projecte 80%</strong> + <strong>test 20%</strong>.</li><li>Cal un <strong>5</strong> a cada RA, i el test compta a partir d\'un <strong>4</strong>: per sota, el RA queda pendent.</li><li>Les <strong>10 activitats d\'aula</strong> no posen nota però són obligatòries.</li></ul><p>Exemple: fase 6,5 i test 7 → 0,80 × 6,5 + 0,20 × 7 = <strong>6,60</strong>.</p>',
      },
      {
        titol: 'Normes de joc',
        html: '<ul><li>Tot és <strong>individual</strong>. Una empresa per persona i grup: <strong>mana l\'ordre de reserva</strong>.</li><li>Es lliura a la tasca de l\'aula virtual: <strong>un correu no compta</strong>.</li><li>Nom dels fitxers: <code>1665_AA1_Cognom1Cognom2_Nom_Grup</code>.</li><li>Pots fer servir IA per aprendre, però declares quina eina i per a què. <strong>La IA no coneix la teva empresa.</strong></li><li>Cap dada personal de treballadors, clients o hostes.</li></ul>',
      },
    ],
    ideaClau: 'Aquest mòdul no va de tecnologia: va de com treballa una empresa. La tecnologia és l\'eina; el que mires sempre és el procés i les persones que el fan.',
    proves: [
      {
        tipus: 'quiz',
        titol: 'Enigma 1 · L\'examen d\'entrada',
        enunciat: 'L\'agència només accepta detectius que coneixen les normes. Respon les cinc preguntes.',
        preguntes: [
          {
            pregunta: 'Fase del projecte: 6,5. Test: 7. Quina és la nota del RA?',
            opcions: ['6,60', '6,75', '6,50', '7,00'],
            correcta: 0,
            perque: '0,80 × 6,5 + 0,20 × 7 = 5,20 + 1,40 = 6,60.',
          },
          {
            pregunta: 'Fase del projecte: 6,5. Test: 3,5. Què passa amb aquell RA?',
            opcions: [
              'Queda pendent, perquè el test no arriba a 4',
              'Aprova amb un 5,90',
              'Aprova perquè la fase és més important',
              'Es fa la mitjana amb el RA següent',
            ],
            correcta: 0,
            perque: 'La mitjana donaria 5,90, però el test compta a partir d\'un 4.',
          },
          {
            pregunta: 'Quin d\'aquests noms de fitxer és correcte per lliurar l\'AA1?',
            opcions: [
              '1665_AA1_GarciaPuig_Marta_GAT1',
              'activitat1_marta.docx',
              'AA1 Marta García (definitiu).docx',
              'GAT1_Marta_1665',
            ],
            correcta: 0,
            perque: 'El format és 1665_AA1_Cognom1Cognom2_Nom_Grup.',
          },
          {
            pregunta: 'Un company del teu grup ja ha reservat l\'empresa que volies. Què fas?',
            opcions: [
              'Passo a la segona opció que portava pensada',
              'La faig igualment, ja que el treball és individual',
              'La comparteixo amb ell',
              'Escric al professor perquè decideixi qui se la queda',
            ],
            correcta: 0,
            perque: 'Una empresa per persona i grup, i mana l\'ordre de reserva.',
          },
          {
            pregunta: 'Pots demanar a un assistent d\'IA que t\'expliqui com treballa la teva empresa?',
            opcions: [
              'No: no la coneix i t\'inventarà dades; tot el que poses ha de tenir una font',
              'Sí, si després ho copies amb les teves paraules',
              'Sí, perquè la IA té accés a totes les empreses',
              'Només si és una empresa gran',
            ],
            correcta: 0,
            perque: 'La IA serveix per entendre conceptes, no per inventar-se la teva empresa.',
          },
        ],
        pista: 'Fes el càlcul amb 0,80 i 0,20, i recorda que el test ha d\'arribar a 4. Mana l\'ordre de reserva.',
      },
    ],
    fragment: { posicio: 5, lletra: 'E' },
    missatgeFinal: 'Benvingut/da a l\'Agència Dada. Ja coneixes les normes del cas.',
  },

  // ------------------------------------------------------------------ ESCENA 02
  {
    id: 2,
    codi: 'ESCENA 02',
    nom: 'Mites i realitats',
    lloc: 'La sala de reunions de Distribucions Ferrer',
    icona: '❝',
    transmissio: [
      'A la sala de reunions, els caps de departament t\'expliquen per què creuen que l\'empresa ja és digital.',
      'Algunes frases són tòpics. Separa el que és mite del que és realitat.',
    ],
    teoria: [
      {
        titol: 'Una empresa plena de pantalles',
        html: '<p>Tenir servidors i ordinadors <strong>no vol dir estar digitalitzat</strong>. Si la informació viu en papers, correus solts i al cap de persones concretes, l\'empresa no ho està encara que tingui els millors equips.</p><p>La pregunta és sempre la mateixa: <strong>com hi circula la informació?</strong></p>',
      },
      {
        titol: 'Els tòpics de sempre',
        html: '<ul><li>Una <strong>xarxa social és un canal</strong>: si les comandes que hi arriben es copien a mà, el procés no està digitalitzat.</li><li><strong>Escanejar</strong> els papers canvia el suport, però la feina continua sent manual.</li><li>Digitalitzar treu <strong>tasques repetitives</strong>; les persones passen a controlar, atendre i millorar, si l\'empresa les forma.</li><li><strong>Tots els sectors</strong> funcionen amb dades: gestoria, port, hotel, botiga, magatzem.</li><li>No és cosa d\'informàtica: canvia <strong>com s\'organitza tota l\'empresa</strong>.</li></ul>',
      },
    ],
    ideaClau: 'Tots els tòpics tenen una part de veritat, però cap no és la definició: digitalitzar va de processos i de dades, no d\'aparells.',
    proves: [
      {
        tipus: 'classificar',
        titol: 'Enigma 2 · Detector de tòpics',
        enunciat: 'Classifica cada frase que has sentit a la reunió.',
        categories: ['Mite', 'Realitat'],
        elements: [
          { text: '«Digitalitzar és comprar ordinadors.»', correcta: 'Mite', perque: 'Una empresa plena de pantalles pot no estar digitalitzada.' },
          { text: 'Una xarxa social és un canal; si les comandes es copien a mà, el procés no està digitalitzat.', correcta: 'Realitat', perque: 'El canal no canvia el procés.' },
          { text: '«Si tenim Instagram, ja som digitals.»', correcta: 'Mite', perque: 'Instagram és un canal, no un procés digitalitzat.' },
          { text: 'Escanejar papers canvia el suport, però la feina continua sent manual.', correcta: 'Realitat', perque: 'Això és digititzar, no digitalitzar.' },
          { text: '«Escanejar els papers ja és digitalitzar.»', correcta: 'Mite', perque: 'Només canvia el suport.' },
          { text: '«Digitalitzar treu llocs de feina.»', correcta: 'Mite', perque: 'Desapareixen tasques repetitives, no necessàriament persones.' },
          { text: 'Les persones passen a controlar, atendre i millorar, si l\'empresa les forma.', correcta: 'Realitat', perque: 'La feina canvia de tipus.' },
          { text: '«El meu sector no és tecnològic.»', correcta: 'Mite', perque: 'Tots els sectors funcionen amb dades.' },
          { text: '«Això és cosa del departament d\'informàtica.»', correcta: 'Mite', perque: 'Canvia com s\'organitza tota l\'empresa.' },
          { text: 'Digitalitzar canvia qui decideix, amb quina informació i quins perfils calen.', correcta: 'Realitat', perque: 'És un canvi d\'organització, no només tècnic.' },
        ],
        pista: 'Les frases entre cometes són el que diu la gent a la reunió. Les altres són el que en diu el manual del detectiu.',
      },
    ],
    fragment: { posicio: 2, lletra: 'R' },
    missatgeFinal: 'Tòpics desmuntats. Ja saps que tenir aparells no vol dir estar digitalitzat.',
  },

  // ------------------------------------------------------------------ ESCENA 03
  {
    id: 3,
    codi: 'ESCENA 03',
    nom: 'Tres graus de canvi',
    lloc: 'L\'arxiu del soterrani',
    icona: '▤',
    transmissio: [
      'A l\'arxiu hi ha caixes i més caixes de papers. Algú ha començat a escanejar-los.',
      'Abans de jutjar, has de saber distingir tres paraules que tothom confon.',
    ],
    teoria: [
      {
        titol: 'Digitització',
        html: '<p>Passar un suport analògic a format digital <strong>sense canviar el procés</strong>. El paper passa a PDF, però algú l\'ha de continuar llegint i teclejant.</p><p><em>Exemple</em>: escanejar les factures en PDF.</p>',
      },
      {
        titol: 'Digitalització',
        html: '<p>Redissenyar el procés perquè funcioni amb <strong>dades capturades a l\'origen</strong>, que viatgen soles d\'un sistema a l\'altre.</p><p><em>Exemple</em>: la factura electrònica que entra sola a la comptabilitat.</p><p>Digitalitzar és <strong>convertir l\'activitat de l\'empresa en dades que es poden processar, connectar i aprofitar automàticament</strong>.</p>',
      },
      {
        titol: 'Transformació digital',
        html: '<p>Les dades <strong>canvien com decideix i què ven l\'empresa</strong>: el model de negoci o l\'organització.</p><p><em>Exemple</em>: la gestoria ofereix als clients un tauler de tresoreria actualitzat.</p>',
      },
    ],
    ideaClau: 'Cada paraula va un pas més enllà: digititzar canvia el suport, digitalitzar canvia el procés i la transformació digital canvia el negoci.',
    proves: [
      {
        tipus: 'classificar',
        titol: 'Enigma 3 · Ordena l\'arxiu',
        enunciat: 'Cada caixa de l\'arxiu té un exemple d\'un sector. Posa-la al prestatge que li toca.',
        categories: ['Digitització', 'Digitalització', 'Transformació'],
        elements: [
          { text: 'AFI · Escanejar les factures en PDF', correcta: 'Digitització', perque: 'Canvia el suport, no el procés.' },
          { text: 'AFI · Factura electrònica que entra sola a la comptabilitat', correcta: 'Digitalització', perque: 'La dada viatja sola.' },
          { text: 'AFI · La gestoria ofereix als clients un tauler de tresoreria actualitzat', correcta: 'Transformació', perque: 'És un servei nou gràcies a les dades.' },
          { text: 'CI · Escanejar el certificat d\'origen i enviar-lo per correu', correcta: 'Digitització', perque: 'Continua sent un document per llegir.' },
          { text: 'CI · Documents d\'exportació electrònics i despatx de duana telemàtic', correcta: 'Digitalització', perque: 'El procés funciona amb dades.' },
          { text: 'GAT · Passar el llibre de reserves a un Excel', correcta: 'Digitització', perque: 'Les reserves es continuen copiant a mà.' },
          { text: 'GAT · Reserves de tots els canals que entren soles al programa de gestió hotelera', correcta: 'Digitalització', perque: 'La dada s\'introdueix un sol cop.' },
          { text: 'GAT · Preus que s\'ajusten a la demanda i serveis personalitzats per a cada hoste', correcta: 'Transformació', perque: 'Les dades canvien què ven i com.' },
          { text: 'MK · Fotografiar els tiquets de la botiga', correcta: 'Digitització', perque: 'Només canvia el suport.' },
          { text: 'MK · La marca passa a vendre per subscripció amb recomanacions personalitzades', correcta: 'Transformació', perque: 'Canvia el model de negoci.' },
          { text: 'TR · Albarà digital signat al mòbil del conductor, amb la ubicació', correcta: 'Digitalització', perque: 'Es captura a l\'origen.' },
          { text: 'TR · Vendre un servei de seguiment en temps real amb franja de lliurament', correcta: 'Transformació', perque: 'És un servei nou basat en dades.' },
        ],
        pista: 'Si algú l\'ha de continuar llegint i teclejant, és digitització. Si la dada viatja sola, és digitalització. Si l\'empresa ven o decideix diferent, és transformació.',
      },
    ],
    fragment: { posicio: 1, lletra: 'O' },
    missatgeFinal: 'Arxiu ordenat. Ja no confondràs escanejar amb digitalitzar.',
  },

  // ------------------------------------------------------------------ ESCENA 04
  {
    id: 4,
    codi: 'ESCENA 04',
    nom: 'La dada que es repeteix',
    lloc: 'El magatzem i l\'oficina',
    icona: '✎',
    transmissio: [
      'Segueixes una comanda de Distribucions Ferrer des que entra fins que es cobra.',
      'L\'error s\'amaga en els moments en què algú torna a escriure el que un altre ja havia escrit.',
    ],
    teoria: [
      {
        titol: 'La prova de la dada única',
        html: '<p>Un procés està digitalitzat si <strong>la dada s\'introdueix una sola vegada i a prop d\'on passa el fet</strong>.</p><p>Si algú ha de tornar a teclejar el que un altre ja havia escrit, aquell procés no està digitalitzat: està <strong>informatitzat a trossos</strong>.</p>',
      },
      {
        titol: 'Cada còpia és una oportunitat',
        html: '<p>Cada vegada que una dada es torna a escriure, hi pot haver un error, es perd temps i ningú no sap quina és la versió bona.</p><p>Per això, cada vegada que es torna a teclejar una dada, <strong>hi ha una oportunitat de digitalitzar</strong>.</p>',
      },
      {
        titol: 'El procés d\'extrem a extrem',
        html: '<p>És el recorregut complet <strong>des que el client demana fins que l\'empresa cobra</strong> (i analitza). Per trobar on es trenca la dada, cal mirar-lo sencer, no un departament sol.</p>',
      },
    ],
    ideaClau: 'Una dada, un sol cop, a l\'origen. Si es torna a teclejar, el procés està informatitzat a trossos.',
    proves: [
      {
        tipus: 'seleccionar',
        titol: 'Enigma 4 · Segueix la comanda',
        enunciat: 'Aquests són els passos d\'una comanda a Distribucions Ferrer. Marca TOTS els moments en què algú torna a teclejar una dada que ja existia.',
        etiqueta: '✎ RETECLEJAT',
        missatgeOk: 'Ho tens: has trobat totes les vegades que la comanda es torna a escriure.',
        elements: [
          { text: 'El client envia la comanda per correu electrònic', sector: 'Pas 1', correcta: false, perque: 'Aquí la dada neix: és l\'origen.' },
          { text: 'L\'administrativa copia la comanda del correu a un Excel', sector: 'Pas 2', correcta: true, perque: 'La comanda ja era al correu.' },
          { text: 'El magatzem imprimeix l\'Excel i prepara la comanda', sector: 'Pas 3', correcta: false, perque: 'Es llegeix, però no es torna a escriure.' },
          { text: 'El cap de magatzem passa les unitats preparades a l\'Excel d\'estocs', sector: 'Pas 4', correcta: true, perque: 'Les unitats ja eren a la comanda.' },
          { text: 'Comptabilitat torna a escriure la comanda al programa de facturació', sector: 'Pas 5', correcta: true, perque: 'Tercera vegada que s\'escriu la mateixa comanda.' },
          { text: 'El conductor porta l\'albarà en paper i el client el signa', sector: 'Pas 6', correcta: false, perque: 'És un fet nou: la signatura del client.' },
          { text: 'A l\'oficina, algú tecleja l\'albarà signat al programa', sector: 'Pas 7', correcta: true, perque: 'L\'albarà ja existia en paper.' },
          { text: 'El client rep la factura per correu', sector: 'Pas 8', correcta: false, perque: 'S\'envia, no es torna a escriure.' },
          { text: 'Algú passa les dades de la factura a l\'Excel de cobraments', sector: 'Pas 9', correcta: true, perque: 'La factura ja era al programa de facturació.' },
          { text: 'El comercial truca al client per saber si està content', sector: 'Pas 10', correcta: false, perque: 'No es copia cap dada.' },
        ],
        pista: 'N\'hi ha 5. Fixa\'t en els verbs «copia», «passa», «torna a escriure» i «tecleja».',
      },
    ],
    fragment: { posicio: 6, lletra: 'N' },
    missatgeFinal: 'Has trobat on es perd la informació: la mateixa comanda s\'escriu cinc vegades.',
  },

  // ------------------------------------------------------------------ ESCENA 05
  {
    id: 5,
    codi: 'ESCENA 05',
    nom: 'L\'escala de maduresa',
    lloc: 'El despatx de la gerent',
    icona: '▲',
    transmissio: [
      'La Sra. Ferrer et pregunta: «I doncs, som una empresa digital o no?»',
      'La resposta no és sí o no. Has de situar l\'empresa en una escala, i justificar-ho.',
    ],
    teoria: [
      {
        titol: 'Cinc nivells, no dos',
        html: '<ol><li><strong>Paper i memòria</strong>: fulls, llibretes, missatges personals. Si la persona marxa, la informació marxa amb ella.</li><li><strong>Illes digitals</strong>: cada departament té el seu Excel o programa i les dades es copien d\'un a l\'altre.</li><li><strong>Sistemes integrats</strong>: un sistema central (ERP, programa hoteler, de transport…) i la resta s\'hi connecta.</li><li><strong>Dades en temps real</strong>: sensors, màquines i canals en línia alimenten el sistema sense que ningú hi intervingui.</li><li><strong>Decisió automatitzada</strong>: els models proposen o prenen decisions: preus, rutes, estocs, manteniment.</li></ol>',
      },
      {
        titol: 'Pistes que es veuen des de fora',
        html: '<ul><li>Només hi ha un telèfon; comandes per missatge → <strong>nivell 1</strong>.</li><li>Formulari web que genera un correu que algú ha de tornar a picar → <strong>nivell 2</strong>.</li><li>Ofertes de feina que demanen experiència amb un ERP o un CRM concret → <strong>nivell 3</strong>.</li><li>Seguiment de la comanda o l\'enviament en temps real → <strong>nivell 4</strong>.</li><li>Preus que canvien segons el dia o la demanda → <strong>nivell 5</strong>.</li></ul>',
      },
    ],
    ideaClau: 'Una empresa no és «digital» o «no digital»: es mou per una escala de cinc nivells, i cal justificar-ho amb fets.',
    proves: [
      {
        tipus: 'sequencia',
        titol: 'Enigma 5A · Munta l\'escala',
        enunciat: 'Col·loca els cinc nivells de maduresa en ordre. Hi ha dos esglaons falsos que no hi han de ser.',
        inici: '▼ MENYS MADURA',
        final: '▲ MÉS MADURA',
        missatgeOk: 'Escala muntada: del paper a la decisió automatitzada.',
        ordre: ['1 · Paper i memòria', '2 · Illes digitals', '3 · Sistemes integrats', '4 · Dades en temps real', '5 · Decisió automatitzada'],
        intrusos: [
          { text: 'Tenir perfil a Instagram', perque: 'Un canal no és un nivell de maduresa.' },
          { text: 'Comprar ordinadors nous', perque: 'Els aparells no diuen com circula la informació.' },
        ],
        pista: 'Comença pel paper i acaba quan les dades ja prenen decisions. Al mig: illes, sistema central i temps real.',
      },
      {
        tipus: 'aparellar',
        titol: 'Enigma 5B · Llegeix les pistes',
        enunciat: 'Per a cada pista trobada des de fora, tria el nivell que indica.',
        columnes: [
          {
            nom: 'Nivell',
            opcions: ['1 · Paper i memòria', '2 · Illes digitals', '3 · Sistemes integrats', '4 · Dades en temps real', '5 · Decisió automatitzada'],
          },
        ],
        files: [
          { text: 'Les comandes es fan per missatge al mòbil del propietari', correctes: ['1 · Paper i memòria'], perque: 'La informació viu en missatges personals.' },
          { text: 'El formulari web genera un correu que algú ha de tornar a picar', correctes: ['2 · Illes digitals'], perque: 'Hi ha eines digitals, però no es parlen.' },
          { text: 'Una oferta de feina demana experiència amb un ERP concret', correctes: ['3 · Sistemes integrats'], perque: 'Té un sistema central.' },
          { text: 'El client pot seguir l\'enviament en temps real', correctes: ['4 · Dades en temps real'], perque: 'Les dades arriben soles al sistema.' },
          { text: 'Els preus canvien segons el dia o la demanda', correctes: ['5 · Decisió automatitzada'], perque: 'Un model decideix el preu.' },
          { text: 'Càtering Delta passa les comandes a mà a un Excel i apunta les temperatures en un full', correctes: ['2 · Illes digitals'], perque: 'Hi ha Excel, però les dades es copien a mà.' },
        ],
        pista: 'Missatges personals → 1. Coses digitals que no es parlen → 2. Un sistema central → 3. Dades que arriben soles → 4. Decisions automàtiques → 5.',
      },
    ],
    fragment: { posicio: 3, lletra: 'I' },
    missatgeFinal: 'Diagnòstic fet: Distribucions Ferrer és al nivell 2, illes digitals.',
  },

  // ------------------------------------------------------------------ ESCENA 06
  {
    id: 6,
    codi: 'ESCENA 06',
    nom: 'Treball de camp',
    lloc: 'Al carrer, buscant pistes',
    icona: '◉',
    transmissio: [
      'Últim pas: un bon detectiu no opina, demostra.',
      'Separa els fets de les opinions i aprèn a triar l\'empresa que investigaràs tot el curs.',
    ],
    teoria: [
      {
        titol: 'Una evidència és un fet, no una opinió',
        html: '<p><strong>Mal fet</strong>: «L\'empresa està poc digitalitzada.»</p><p><strong>Ben fet</strong>: «Nivell 2: les reserves entren per telèfon i es copien a mà a un Excel. Ho sé perquè al web només hi ha un telèfon de contacte.»</p><p>Una evidència és un <strong>fet observable i comprovable</strong> que justifica una afirmació, i porta la seva <strong>font</strong>.</p>',
      },
      {
        titol: 'On busca un detectiu digital',
        html: '<ul><li>Les <strong>ofertes de feina</strong>: diuen quins programes fa servir l\'empresa.</li><li>El <strong>web</strong>: si només hi ha un telèfon, o si pots comprar i reps confirmació a l\'instant.</li><li>Les <strong>ressenyes</strong>: queixes de factures equivocades o esperes llargues indiquen que la dada es trenca.</li></ul>',
      },
      {
        titol: 'La teva empresa per a tot el curs',
        html: '<p>Tries una <strong>empresa real del teu sector</strong> que t\'acompanyarà a les deu activitats i als dos projectes. Per exemple: <strong>AFI</strong> gestoria o assessoria · <strong>CI</strong> exportadora, transitari o agent de duanes · <strong>GAT</strong> hotel, càmping o casa rural · <strong>MK</strong> botiga en línia o agència · <strong>TR</strong> transportista o operador logístic.</p>',
      },
    ],
    ideaClau: 'Sense font, la dada no val. Tot el que diguis de la teva empresa ho has de poder ensenyar.',
    proves: [
      {
        tipus: 'classificar',
        titol: 'Enigma 6A · Fet o opinió?',
        enunciat: 'Aquestes són les notes de la teva llibreta. Quines serveixen com a evidència?',
        categories: ['Evidència', 'Opinió'],
        elements: [
          { text: 'L\'empresa està poc digitalitzada.', correcta: 'Opinió', perque: 'No diu per què ni d\'on ho treu.' },
          { text: 'Al web només hi ha un telèfon i un correu de contacte; no es pot reservar en línia.', correcta: 'Evidència', perque: 'Es pot comprovar entrant al web.' },
          { text: 'Una oferta de feina publicada demana experiència amb un ERP concret.', correcta: 'Evidència', perque: 'És un fet amb font: l\'oferta.' },
          { text: 'Segur que tenen un programa molt bo.', correcta: 'Opinió', perque: 'És una suposició.' },
          { text: 'Tres ressenyes recents es queixen de factures equivocades.', correcta: 'Evidència', perque: 'Es pot comptar i comprovar.' },
          { text: 'Em sembla que són una empresa moderna.', correcta: 'Opinió', perque: 'És una impressió personal.' },
          { text: 'En comprar a la botiga en línia, la confirmació arriba a l\'instant.', correcta: 'Evidència', perque: 'S\'ha observat i es pot repetir.' },
          { text: 'Una IA m\'ha dit que fan servir un CRM.', correcta: 'Opinió', perque: 'La IA no coneix l\'empresa: cal una font real.' },
        ],
        pista: 'Pregunta\'t: ho podria comprovar una altra persona mirant el mateix lloc? Si sí, és evidència.',
      },
      {
        tipus: 'aparellar',
        titol: 'Enigma 6B · A quin cicle encaixa?',
        enunciat: 'L\'agència té cinc clients nous. Assigna cada empresa al cicle que l\'hauria de triar.',
        columnes: [{ nom: 'Cicle', opcions: ['AFI', 'CI', 'GAT', 'MK', 'TR'] }],
        files: [
          { text: 'Assessoria fiscal i laboral d\'una pime', correctes: ['AFI'], perque: 'Factures, impostos i nòmines.' },
          { text: 'Transitari que contracta el transport i despatxa a duana', correctes: ['CI'], perque: 'Documents d\'exportació i duanes.' },
          { text: 'Càmping amb bungalous i restaurant', correctes: ['GAT'], perque: 'Reserves, estades i valoracions.' },
          { text: 'Botiga de roba amb canal en línia propi', correctes: ['MK'], perque: 'Campanyes, venda en línia i postvenda.' },
          { text: 'Operador logístic d\'última milla', correctes: ['TR'], perque: 'Rutes, càrrega i lliurament amb prova.' },
          { text: 'Agent de duanes del port', correctes: ['CI'], perque: 'Despatx de duana i documents.' },
        ],
        pista: 'Pensa en el procés clau: impostos (AFI), duanes (CI), reserves (GAT), campanyes (MK), rutes (TR).',
      },
    ],
    fragment: { posicio: 4, lletra: 'G' },
    missatgeFinal: 'Llibreta neta: només hi queden fets amb font. Tens les sis pistes de la contrasenya.',
  },
];

/** Prova final: s'hi arriba després d'obrir la caixa forta. */
export const PROVA_FINAL: ProvaQuiz = {
  tipus: 'quiz',
  titol: 'L\'informe per a la Sra. Ferrer',
  enunciat: 'Abans de tancar el cas, la gerent et fa cinc preguntes. Respon-les totes bé.',
  preguntes: [
    {
      pregunta: 'Què vol dir digitalitzar una empresa?',
      opcions: [
        'Convertir la seva activitat en dades que es poden processar, connectar i aprofitar automàticament',
        'Comprar ordinadors i programes nous',
        'Escanejar tots els papers en PDF',
        'Obrir perfils a les xarxes socials',
      ],
      correcta: 0,
      perque: 'És la definició del mòdul: va de processos i dades, no d\'aparells.',
    },
    {
      pregunta: 'Què diu la prova de la dada única?',
      opcions: [
        'Que la dada s\'introdueix un sol cop i a prop d\'on passa el fet',
        'Que cada departament ha de tenir la seva còpia de les dades',
        'Que només hi pot haver un ordinador a l\'empresa',
        'Que les dades s\'han de guardar en paper per seguretat',
      ],
      correcta: 0,
      perque: 'Si es torna a teclejar, el procés està informatitzat a trossos.',
    },
    {
      pregunta: 'Distribucions Ferrer té Excel a cada departament i les comandes es copien d\'un a l\'altre. Quin nivell té?',
      opcions: ['2 · Illes digitals', '1 · Paper i memòria', '3 · Sistemes integrats', '4 · Dades en temps real'],
      correcta: 0,
      perque: 'Hi ha eines digitals que no es comuniquen entre elles.',
    },
    {
      pregunta: 'Quin d\'aquests exemples és transformació digital?',
      opcions: [
        'Un transportista que ven un servei de seguiment en temps real amb franja de lliurament',
        'Un transportista que escaneja els albarans signats',
        'Un transportista que compra tauletes per als conductors',
        'Un transportista que obre un compte a Instagram',
      ],
      correcta: 0,
      perque: 'Les dades canvien què ven l\'empresa.',
    },
    {
      pregunta: 'Què és una evidència?',
      opcions: [
        'Un fet observable i comprovable que justifica una afirmació',
        'L\'opinió d\'un expert',
        'El que et respon un assistent d\'IA',
        'Una impressió després de mirar el web',
      ],
      correcta: 0,
      perque: 'I sempre porta la seva font.',
    },
  ],
  pista: 'Recorda: dades i processos, una dada un sol cop, illes digitals, canvi de negoci i fets amb font.',
};

export const RANGS = [
  { minim: 90, nom: 'Inspector/a en cap', text: 'Cas resolt de manera impecable. L\'Agència Dada et vol al capdavant del pròxim cas.' },
  { minim: 75, nom: 'Detectiu/a sènior', text: 'Molt bona investigació: domines els conceptes clau de la digitalització.' },
  { minim: 55, nom: 'Detectiu/a', text: 'Cas tancat. Repassa les escenes on vas tenir més errors.' },
  { minim: 0, nom: 'Detectiu/a en pràctiques', text: 'Has resolt el cas, però amb dificultats. Torna-hi per millorar el rang.' },
];

export const CHECKLIST = [
  'Tinc l\'empresa reservada al full del meu grup.',
  'Sé explicar amb les meves paraules la diferència entre digitització, digitalització i transformació digital.',
  'Sé dir els cinc nivells de maduresa digital.',
  'He començat la fitxa de l\'empresa i hi he anotat les fonts.',
  'Sé què he de buscar per a la sessió 2.',
];

/** Punts: cada enigma dona 100 XP; cada error en treu i cada pista també. */
export const PUNTS = { pany: 100, error: 10, pista: 30, minimPany: 30, integritatError: 4 };
