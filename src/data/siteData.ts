// =============================================================================
// PaThS 2027 – Dati del Sito e Contenuti Ufficiali
// Allineati alla Proposta di Progetto Ufficiale PaThS (AISF Comitato Locale di Padova)
// =============================================================================

export interface TopicItem {
  id: string;
  symbol: string;
  title: string;
  description: string;
  isFeatured?: boolean;
  badge?: string;
  pill?: string;
  link?: string;
  linkText?: string;
}

export interface DayScheduleRow {
  time: string;
  title: string;
  speaker?: string;
  location?: string;
  speakerOrPlace?: string;
  speakerRole?: string;
  tag?: string;
}

export interface DayProgram {
  id: string;
  dayNumber: number;
  dayName: string;
  title: string;
  schedule: DayScheduleRow[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LocationItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  address: string;
  image: string;
  alt: string;
  mapLink: string;
  isLogo?: boolean;
}

// ---- Info Generali Evento ----
export const eventInfo = {
  edition: "2027",
  title: "PaThS 2027 – Padova Theoretical Physics School",
  subtitle: "Prima edizione della Padova Theoretical Physics School",
  dates: "15–19 Marzo 2027",
  city: "Padova",
  location: "Università degli Studi di Padova",
  organizer: "AISF – Associazione Italiana Studenti di Fisica",
  localCommittee: "Comitato Locale di Padova",
  email: "paths@ai-sf.it",
  instagramAisf: "https://www.instagram.com/aisf_padova?exln=MTN1MzRpYmg3ejVhZg==",
  instagramPaths: "https://www.instagram.com/paths.padova",
  websiteAISF: "https://ai-sf.it",
  participantsCount: "48",
  participantsDetail: "40 nazionali (con alloggio) + 8 riservati UniPd (senza alloggio)",
  schoolDays: "5",
  feeAccommodation: "120€",
  feeNoAccommodation: "70€",

  googleFormUrl: "https://forms.gle/INSERISCI_QUI_IL_LINK",
  googleFormAction: "https://docs.google.com/forms/d/e/INSERISCI_FORM_ID_QUI/formResponse",
};

// ---- Link Navigazione ----
export const navLinks = [
  { label: "Cos'è PaThS", href: "#about" },
  { label: "Aree", href: "#topics" },
  { label: "Programma", href: "#program" },
  { label: "Luoghi", href: "#locations" },
  { label: "Logistica", href: "#logistics" },
  { label: "Sponsor", href: "#sponsors" },
  { label: "FAQ", href: "#faq" },
  { label: "Contatti", href: "#contact" },
];

// ---- Aree Tematiche ----
export const featuredTopic: TopicItem = {
  id: "ads-cft",
  symbol: "∂",
  title: "AdS/CFT e Olografia",
  badge: "Focus Edizione 2027",
  pill: "Modulo CFT (prof. Volpato) + Modulo AdS (prof. Massai)",
  description: "Approfondimento organico della corrispondenza AdS/CFT: dualità tra gravità quantistica nello spazio anti-de Sitter e teorie di campo conformi al bordo, principio olografico e applicazioni avanzate.",
  link: "https://it.wikipedia.org/wiki/Corrispondenza_AdS/CFT",
  linkText: "Approfondisci la corrispondenza AdS/CFT",
};

export const generalTopics: TopicItem[] = [
  {
    id: "qg-cosmo",
    symbol: "∞",
    title: "Quantum Gravity & String Theory",
    description: "Gravità quantistica, cosmologia teorica e teoria delle stringhe.",
  },
  {
    id: "cond-matt",
    symbol: "ψ",
    title: "Fisica della Materia Condensata",
    description: "Fasi esotiche, ordine topologico e fenomeni quantistici emergenti.",
  },
  {
    id: "particle-phys",
    symbol: "⚛",
    title: "Particelle & Interazioni Fondamentali",
    description: "Modello Standard, teorie di gauge e fisica delle alte energie.",
  },
  {
    id: "quantum-info",
    symbol: "Q",
    title: "Informazione Quantistica & Sistemi Complessi",
    description: "Entanglement quantistico, dinamiche non lineari e complessità teorica.",
  },
];

// ---- Programma delle 5 Giornate (Estratto fedelmente dal Programma Ufficiale) ----
export const programDays: DayProgram[] = [
  {
    id: "day1",
    dayNumber: 1,
    dayName: "Lunedì",
    title: "Accoglienza e Apertura",
    schedule: [
      {
        time: "09:00 – 14:30",
        title: "Arrivi e Registrazione partecipanti",
        location: "Hotel (Hotello Padova)",
        tag: "Check-in",
      },
      {
        time: "14:30 – 15:30",
        title: "Cerimonia di Apertura",
        location: "Aula Rostagni DFA",
        tag: "Apertura Istituzionale",
      },
      {
        time: "15:30 – 16:30",
        title: "Coffee Break",
        location: "Giardino DFA",
        tag: "Pausa",
      },
      {
        time: "16:30 – 18:00",
        title: "Talk di Apertura",
        location: "Aula Rostagni DFA",
        tag: "Opening Talk",
      },
      {
        time: "20:30 – 23:00",
        title: "Physics & Drinks – Aperitivo di Benvenuto",
        location: "Birrone Padova",
        tag: "Social AISF",
      },
    ],
  },
  {
    id: "day2",
    dayNumber: 2,
    dayName: "Martedì",
    title: "Didattica e Workshop",
    schedule: [
      {
        time: "09:00 – 10:30",
        title: "Lecture 1 (Modulo CFT)",
        speaker: "Prof. Roberto Volpato (UniPD - INFN)",
        location: "Palazzo del Monte di Pietà",
        tag: "Modulo CFT",
      },
      {
        time: "10:30 – 11:00",
        title: "Coffee Break",
        location: "Palazzo del Monte di Pietà",
        tag: "Pausa",
      },
      {
        time: "11:00 – 12:30",
        title: "Lecture 2 (Modulo CFT)",
        speaker: "Prof. Roberto Volpato (UniPD - INFN)",
        location: "Palazzo del Monte di Pietà",
        tag: "Modulo CFT",
      },
      {
        time: "13:00 – 14:30",
        title: "Pausa Pranzo",
        location: "Mensa convenzionata ESU",
        tag: "Pranzo",
      },
      {
        time: "14:30 – 16:00",
        title: "Lecture 1 (Modulo AdS)",
        speaker: "Prof. Stefano Massai (UniPD)",
        location: "Palazzo del Monte di Pietà",
        tag: "Modulo AdS",
      },
      {
        time: "16:00 – 16:30",
        title: "Coffee Break",
        location: "Palazzo del Monte di Pietà",
        tag: "Pausa",
      },
      {
        time: "16:30 – 18:00",
        title: "Workshop Metodologico e Computazionale",
        location: "INAF, La Specola (TBD)",
        tag: "Workshop",
      },
      {
        time: "19:00 – 20:30",
        title: "Cena convenzionata",
        location: "Ristorante convenzionato (TBD)",
        tag: "Cena",
      },
      {
        time: "20:30 – 23:00",
        title: "Caccia al Tesoro Culturale / Tour di Padova",
        location: "Centro Storico di Padova",
        tag: "Social AISF",
      },
    ],
  },
  {
    id: "day3",
    dayNumber: 3,
    dayName: "Mercoledì",
    title: "Moduli e Trasferta Culturale",
    schedule: [
      {
        time: "09:00 – 10:30",
        title: "Lecture 3 (Modulo CFT)",
        speaker: "Prof. Roberto Volpato (UniPD - INFN)",
        location: "Palazzo del Monte di Pietà",
        tag: "Modulo CFT",
      },
      {
        time: "10:30 – 11:00",
        title: "Coffee Break",
        location: "Palazzo del Monte di Pietà",
        tag: "Pausa",
      },
      {
        time: "11:00 – 12:30",
        title: "Lecture 2 (Modulo AdS)",
        speaker: "Prof. Stefano Massai (UniPD)",
        location: "Palazzo del Monte di Pietà",
        tag: "Modulo AdS",
      },
      {
        time: "13:00 – 14:30",
        title: "Pausa Pranzo",
        location: "Mensa convenzionata ESU",
        tag: "Pranzo",
      },
      {
        time: "14:30 – 16:00",
        title: "Lecture 3 (Modulo AdS)",
        speaker: "Prof. Stefano Massai (UniPD)",
        location: "Palazzo del Monte di Pietà",
        tag: "Modulo AdS",
      },
      {
        time: "16:00 – 17:00",
        title: "Research Talk",
        speaker: "Contributo INFN",
        location: "Palazzo del Monte di Pietà",
        tag: "Research Talk",
      },
      {
        time: "18:00 – 22:00",
        title: "Bacaro Tour a Venezia (escursione sociale in treno)",
        location: "Venezia",
        tag: "Escursione Culturale",
      },
      {
        time: "22:00 – late",
        title: "Mercolegin (serata libera per chi desidera)",
        location: "Padova",
        tag: "Social",
      },
    ],
  },
  {
    id: "day4",
    dayNumber: 4,
    dayName: "Giovedì",
    title: "Lectio Magistralis e Poster",
    schedule: [
      {
        time: "09:00 – 11:00",
        title: "Lectio Magistralis",
        speaker: "Contributo INAF",
        location: "Palazzo del Monte di Pietà",
        tag: "Lectio Magistralis",
      },
      {
        time: "11:00 – 12:30",
        title: "Poster Session PhD & Aperitivo / Coffee Break",
        location: "Palazzo del Monte di Pietà",
        tag: "Poster Session",
      },
      {
        time: "12:30 – 14:30",
        title: "Pranzo & Tempo libero",
        location: "Centro di Padova",
        tag: "Pranzo",
      },
      {
        time: "14:30 – 15:30",
        title: "Parallel Sessions (Parte 1)",
        speaker: "Proposte degli studenti",
        location: "Palazzo del Monte di Pietà",
        tag: "Parallel Sessions",
      },
      {
        time: "15:30 – 16:00",
        title: "Coffee Break",
        location: "Palazzo del Monte di Pietà",
        tag: "Pausa",
      },
      {
        time: "16:00 – 17:00",
        title: "Parallel Sessions (Parte 2)",
        speaker: "Proposte degli studenti",
        location: "Palazzo del Monte di Pietà",
        tag: "Parallel Sessions",
      },
      {
        time: "20:00 – 24:00",
        title: "Serata Finale (Cena sociale inclusa)",
        location: "Birrone Padova",
        tag: "Cena Sociale",
      },
    ],
  },
  {
    id: "day5",
    dayNumber: 5,
    dayName: "Venerdì",
    title: "Chiusura e Saluti",
    schedule: [
      {
        time: "10:30 – 12:00",
        title: "Lectio Magistralis Conclusiva",
        speaker: "Prof. Gianguido Dall'Agata (UniPD - INFN)",
        location: "Palazzo Bo, Aula Nievo",
        tag: "Lectio Magistralis",
      },
      {
        time: "12:00 – 13:00",
        title: "Saluti istituzionali & Chiusura Scuola",
        location: "Palazzo Bo, Aula Nievo",
        tag: "Chiusura",
      },
      {
        time: "13:00 in poi",
        title: "Partenze partecipanti",
        location: "Stazione Centrale di Padova",
        tag: "Partenze",
      },
    ],
  },
];

// ---- Luoghi dell'Evento (Allineati al Progetto) ----
export const locationsList: LocationItem[] = [
  {
    id: "monte-pieta",
    badge: "Sede Didattica Principale",
    title: "Palazzo del Monte di Pietà",
    description: "Sede centrale delle lezioni teoriche dei Moduli CFT e AdS, dei research talks INFN, della Poster Session PhD, della Lectio Magistralis INAF e delle sessioni parallele.",
    address: "Piazza Duomo, 14 – Padova",
    image: "/images/palazzo_monte_pieta.jpg",
    alt: "Palazzo del Monte di Pietà – Sede didattica PaThS",
    mapLink: "https://maps.google.com/?q=Palazzo+del+Monte+di+Pieta+Piazza+Duomo+Padova",
    isLogo: false,
  },
  {
    id: "dfa",
    badge: "Apertura & Registrazione",
    title: 'DFA "G. Galilei" – Aula Rostagni',
    description: "L'Aula Rostagni e il Chiostro/Giardino del Dipartimento di Fisica e Astronomia ospiteranno la Cerimonia di Apertura ufficiale, il talk introduttivo e il welcome coffee break.",
    address: "Via Francesco Marzolo, 8 – Padova",
    image: "/images/logo_dfa.svg",
    alt: "Dipartimento di Fisica e Astronomia G. Galilei – Aula Rostagni",
    mapLink: "https://maps.google.com/?q=Dipartimento+di+Fisica+e+Astronomia+Galileo+Galilei+Padova",
    isLogo: true,
  },
  {
    id: "palazzo-bo",
    badge: "Lectio Magistralis & Chiusura",
    title: "Palazzo Bo – Aula Nievo",
    description: "La prestigiosa sede storica centrale dell'Ateneo patavino accoglierà la Lectio Magistralis conclusiva del prof. Dall'Agata e i saluti istituzionali finali.",
    address: "Via VIII Febbraio, 2 – Padova",
    image: "/images/palazzo_bo.jpg",
    alt: "Palazzo Bo – Università degli Studi di Padova",
    mapLink: "https://maps.google.com/?q=Palazzo+Bo+Padova",
    isLogo: false,
  },
  {
    id: "specola",
    badge: "Workshop Pratico",
    title: "INAF – Osservatorio La Specola",
    description: "La storica torre e osservatorio astronomico della Specola accoglierà la sessione laboratoriale e di calcolo computazionale d'avanguardia.",
    address: "Vicolo dell'Osservatorio, 5 – Padova",
    image: "/images/specola.jpg",
    alt: "INAF Osservatorio Astronomico La Specola Padova",
    mapLink: "https://maps.google.com/?q=Osservatorio+Astronomico+La+Specola+Padova",
    isLogo: false,
  },
  {
    id: "hotello",
    badge: "Alloggio Convenzionato",
    title: "Hotello Padova",
    description: "Struttura moderna e centralissima riservata ai 40 partecipanti della quota con alloggio, situata a soli 10 minuti a piedi dalla stazione FS e da tutte le aule.",
    address: "Corso del Popolo, 2 – Padova",
    image: "/images/hotello.jpg",
    alt: "Hotello Padova – Alloggio partecipanti",
    mapLink: "https://maps.google.com/?q=Hotello+Padova",
    isLogo: true,
  },
  {
    id: "birrone",
    badge: "Eventi Sociali & Gala",
    title: "Birrone Padova",
    description: "Punto di riferimento conviviale padovano: ospiterà l'aperitivo di benvenuto Physics & Drinks del lunedì e la Cena Sociale conclusiva del giovedì.",
    address: "Via Trieste, 5c – Padova",
    image: "/images/birrone.png",
    alt: "Birrone Padova – Eventi sociali PaThS",
    mapLink: "https://maps.google.com/?q=Birrone+Padova+Via+Belzoni",
    isLogo: true,
  },
];

// ---- FAQ ----
export const faqList: FaqItem[] = [
  {
    question: "Chi può partecipare a PaThS?",
    answer: "PaThS è <strong>aperta a tutti gli studenti di Fisica</strong> afferenti ad AISF. L'offerta scientifica è calibrata specificamente per studenti del <strong>3° anno della Triennale, studenti di Laurea Magistrale e Dottorandi</strong> interessati alla fisica teorica contemporanea.",
  },
  {
    question: "Quanto costa partecipare e cosa comprende la quota?",
    answer: "Sono previste due quote di partecipazione grazie ai contributi AISF e istituzionali:<br />• <strong>120€ – Quota con alloggio (40 posti nazionali):</strong> comprende 4 notti presso Hotello Padova, tutti i pasti (pranzi e cene convenzionate o e-coupon mensa), coffee break, cena sociale al Birrone Padova, biglietto treno a/r per l'escursione sociale a Venezia, welcome kit didattico e accesso completo a tutte le lezioni, workshop e talks.<br />• <strong>70€ – Quota senza alloggio (8 posti riservati studenti UniPD):</strong> comprende tutti i pasti (pranzi e cene), coffee break, cena sociale, transfer per l'escursione a Venezia, kit studente e accesso integrale a tutte le sessioni scientifiche e sociali.",
  },
  {
    question: "Dove si svolgono le lezioni e le attività?",
    answer: "Le attività didattiche e sociali sono tutte nel centro di Padova e raggiungibili comodamente a piedi:<br />• <strong>Palazzo del Monte di Pietà:</strong> sede didattica principale per le lectures dei Moduli CFT e AdS, research talks, sessioni parallele e poster session.<br />• <strong>Aula Rostagni (DFA):</strong> cerimonia e talk di apertura.<br />• <strong>Palazzo Bo (Aula Nievo):</strong> Lectio Magistralis conclusiva e chiusura istituzionale.<br />• <strong>INAF La Specola:</strong> workshop computazionale.<br />• <strong>Birrone Padova:</strong> eventi sociali (Physics & Drinks e Serata Finale).",
  },
  {
    question: "Quali sono i moduli scientifici e i docenti di questa edizione?",
    answer: "L'edizione 2027 ruota attorno all'approfondimento della corrispondenza <strong>AdS/CFT e Olografia</strong>:<br />• <strong>Modulo CFT (3 lezioni):</strong> tenuto dal <em>prof. Roberto Volpato</em> (Università di Padova - INFN).<br />• <strong>Modulo AdS (3 lezioni):</strong> tenuto dal <em>prof. Stefano Massai</em> (Università di Padova).<br />• <strong>Lectio Magistralis:</strong> <em>prof. Gianguido Dall'Agata</em> (UniPD - INFN) e contributo <em>INAF</em>.<br />• <strong>Research Talks & Workshop:</strong> contributi di ricercatori INFN, workshop computazionale e poster session PhD.",
  },
  {
    question: "Qual è il programma sociale e culturale?",
    answer: "<p class=\"mb-3\">PaThS integra momenti scientifici e convivialità secondo la migliore tradizione AISF:</p><ul class=\"space-y-2 pl-1\"><li class=\"flex items-start gap-2.5\"><span class=\"text-terracotta font-bold mt-0.5\">•</span><span><strong>Lunedì:</strong> <em>Physics & Drinks</em> con aperitivo e spritz padovano al Birrone Padova.</span></li><li class=\"flex items-start gap-2.5\"><span class=\"text-terracotta font-bold mt-0.5\">•</span><span><strong>Martedì:</strong> <em>Caccia al Tesoro Culturale / Tour di Padova</em> a squadre tra le piazze storiche.</span></li><li class=\"flex items-start gap-2.5\"><span class=\"text-terracotta font-bold mt-0.5\">•</span><span><strong>Mercoledì:</strong> Trasferta in treno e <em>Bacaro Tour a Venezia</em>, seguito da Mercolegin a Padova per chi lo desidera.</span></li><li class=\"flex items-start gap-2.5\"><span class=\"text-terracotta font-bold mt-0.5\">•</span><span><strong>Giovedì:</strong> <em>Serata Finale</em> con cena sociale inclusa al Birrone Padova.</span></li></ul>",
  },
  {
    question: "Come faccio a iscrivermi?",
    answer: "Puoi iscriverti tramite il form ufficiale cliccando sul pulsante <strong>'Iscriviti Ora'</strong> in cima alla pagina. Per qualsiasi domanda o chiarimento, puoi contattarci via email all'indirizzo <a href=\"mailto:paths@ai-sf.it\" class=\"text-terracotta font-bold hover:underline\">paths@ai-sf.it</a> oppure scriverci in direct sulla pagina <a href=\"https://www.instagram.com/paths.padova\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-terracotta font-bold hover:underline\">Instagram di PaThS</a>.",
  },
];
