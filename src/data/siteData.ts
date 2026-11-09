// =============================================================================
// PaThS 2027 – Dati del Sito e Contenuti Modificabili
// Chiunque debba aggiornare testi, date o sezioni può farlo direttamente qui!
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
  speakerOrPlace: string;
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
}

// ---- Info Generali Evento ----
export const eventInfo = {
  edition: "2027",
  title: "PaThS 2027 – Padova Theoretical School",
  subtitle: "Prima edizione della Padova Theoretical School",
  dates: "15–19 Marzo 2027",
  city: "Padova",
  location: "Università degli Studi di Padova",
  organizer: "AISF – Associazione Italiana Studenti di Fisica",
  localCommittee: "Comitato Locale di Padova",
  email: "paths@ai-sf.it",
  instagramAisf: "https://www.instagram.com/aisf_padova?exln=MTN1MzRpYmg3ejVhZg==",
  // Sostituisci "#" con il link del profilo Instagram di PaThS quando sarà creato:
  instagramPaths: "#",
  websiteAISF: "https://ai-sf.it",
  participantsCount: "48",
  participantsDetail: "40 nazionali + 8 posti riservati UniPd",
  schoolDays: "5",
  feeAccommodation: "120€",
  feeNoAccommodation: "70€",
  
  // Link predefinito a Google Form (può essere sovrascritto o integrato col form nativo)
  googleFormUrl: "https://forms.gle/INSERISCI_QUI_IL_LINK",
  // Action URL del Google Form per submit trasparente (se desiderato)
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
  badge: "Focus Edizione Corrente",
  pill: "Corrispondenza AdS/CFT",
  description: "Dualità tra gravità quantistica e teorie di campo, principio olografico e applicazioni.",
  link: "https://it.wikipedia.org/wiki/Corrispondenza_AdS/CFT",
  linkText: "Approfondisci su Wikipedia",
};

export const generalTopics: TopicItem[] = [
  {
    id: "qg-cosmo",
    symbol: "∞",
    title: "Quantum Gravity, Cosmologia",
    description: "Teoria delle stringhe, gravità quantistica e AdS/CFT",
  },
  {
    id: "cond-matt",
    symbol: "ψ",
    title: "Materia Condensata",
    description: "Fenomeni emergenti e fasi esotiche della materia",
  },
  {
    id: "particle-phys",
    symbol: "⚛",
    title: "Fisica delle Particelle",
    description: "Interazioni fondamentali e fisica ad alta energia",
  },
  {
    id: "quantum-info",
    symbol: "Q",
    title: "Informazione Quantistica",
    description: "Sistemi complessi e computazione quantistica",
  },
];

// ---- Programma delle 5 Giornate ----
export const programDays: DayProgram[] = [
  {
    id: "day1",
    dayNumber: 1,
    dayName: "Lunedì",
    title: "Accoglienza e Apertura",
    schedule: [
      { time: "09:00–14:30", title: "Arrivi e Registrazione partecipanti", speakerOrPlace: "Hotello Padova" },
      { time: "14:30–15:30", title: "Cerimonia di Apertura", speakerOrPlace: "Palazzo Bo" },
      { time: "15:30–16:30", title: "☕ Coffee Break", speakerOrPlace: "Palazzo Bo" },
      { time: "16:30–18:00", title: "Talk di Apertura", speakerOrPlace: "Palazzo Bo" },
      { time: "20:30–23:00", title: "🍺 Physics & Drinks – Aperitivo con spritz padovano", speakerOrPlace: "Birrone Padova" },
    ],
  },
  {
    id: "day2",
    dayNumber: 2,
    dayName: "Martedì",
    title: "Didattica e Workshop",
    schedule: [
      { time: "09:00–10:30", title: "Lecture 1 – Modulo 1", speakerOrPlace: "Scuola Galileiana" },
      { time: "10:30–11:00", title: "☕ Coffee Break", speakerOrPlace: "Scuola Galileiana" },
      { time: "11:00–12:30", title: "Lecture 2 – Modulo 1", speakerOrPlace: "Scuola Galileiana" },
      { time: "13:00–14:30", title: "🍽️ Pausa Pranzo", speakerOrPlace: "Mensa convenzionata" },
      { time: "14:30–16:00", title: "Lecture 1 – Modulo 2", speakerOrPlace: "Scuola Galileiana" },
      { time: "16:00–16:30", title: "☕ Coffee Break", speakerOrPlace: "Scuola Galileiana" },
      { time: "16:30–18:00", title: "💻 Workshop Computazionale", speakerOrPlace: "Aula Informatica / Lab" },
      { time: "19:00–20:30", title: "🍽️ Cena convenzionata", speakerOrPlace: "Padova" },
      { time: "20:30–23:00", title: "🏛️ Caccia al Tesoro / Tour di Padova", speakerOrPlace: "Centro Storico di Padova" },
    ],
  },
  {
    id: "day3",
    dayNumber: 3,
    dayName: "Mercoledì",
    title: "Moduli e Trasferta Culturale",
    schedule: [
      { time: "09:00–10:30", title: "Lecture 3 – Modulo 1", speakerOrPlace: "Scuola Galileiana" },
      { time: "10:30–11:00", title: "☕ Coffee Break", speakerOrPlace: "Scuola Galileiana" },
      { time: "11:00–12:30", title: "Lecture 2 – Modulo 2", speakerOrPlace: "Scuola Galileiana" },
      { time: "13:00–14:30", title: "🍽️ Pausa Pranzo", speakerOrPlace: "Mensa convenzionata" },
      { time: "14:30–16:00", title: "Lecture 3 – Modulo 2", speakerOrPlace: "Scuola Galileiana" },
      { time: "16:00–17:00", title: "🔬 Research Talk", speakerOrPlace: "Scuola Galileiana" },
      { time: "18:00–22:00", title: "🚂 Bacaro Tour a Venezia", speakerOrPlace: "Escursione culturale a Venezia in treno" },
      { time: "22:00 – …", title: "🌙 Mercolegin (libero per chi vuole)", speakerOrPlace: "Padova" },
    ],
  },
  {
    id: "day4",
    dayNumber: 4,
    dayName: "Giovedì",
    title: "Lectio Magistralis e Poster Session",
    schedule: [
      { time: "09:00–11:00", title: "🎓 Lectio Magistralis", speakerOrPlace: "Palazzo Bo" },
      { time: "11:00–12:30", title: "📋 Poster Session PhD & Aperitivo / Coffee Break", speakerOrPlace: "Atrio / Chiostro" },
      { time: "12:30–14:30", title: "🍽️ Pranzo & Tempo libero", speakerOrPlace: "Centro di Padova" },
      { time: "14:30–15:30", title: "Parallel Sessions – Parte 1", speakerOrPlace: "Aule Parallele DFA" },
      { time: "15:30–16:00", title: "☕ Coffee Break", speakerOrPlace: "DFA" },
      { time: "16:00–17:00", title: "Parallel Sessions – Parte 2", speakerOrPlace: "Aule Parallele DFA" },
      { time: "20:00–24:00", title: "🎉 Serata Finale (cena sociale inclusa)", speakerOrPlace: "Ristorante storico Padova" },
    ],
  },
  {
    id: "day5",
    dayNumber: 5,
    dayName: "Venerdì",
    title: "Chiusura e Saluti",
    schedule: [
      { time: "10:30–12:00", title: "🎓 Lectio Magistralis", speakerOrPlace: "Palazzo Bo" },
      { time: "12:00–13:00", title: "🏛️ Saluti istituzionali & Chiusura Scuola", speakerOrPlace: "Palazzo Bo" },
      { time: "13:00 →", title: "🚆 Partenze partecipanti", speakerOrPlace: "Stazione Centrale di Padova" },
    ],
  },
];

// ---- Luoghi dell'Evento ----
export const locationsList: LocationItem[] = [
  {
    id: "dfa",
    badge: "Didattica & Lab",
    title: 'Dip. di Fisica e Astronomia "G. Galilei"',
    description: "Sede centrale per laboratori computazionali, sessioni di calcolo numerico e aule didattiche attrezzate per le sessioni parallele.",
    address: "Via Francesco Marzolo, 8 – Padova",
    image: "/images/dfa.jpg",
    alt: "Dipartimento di Fisica e Astronomia G. Galilei",
    mapLink: "https://maps.google.com/?q=Dipartimento+di+Fisica+e+Astronomia+Galileo+Galilei+Padova",
  },
  {
    id: "galileiana",
    badge: "Lectures & Seminari",
    title: "Scuola Galileiana di Studi Superiori",
    description: "La scuola d'eccellenza dell'Ateneo: ospiterà le lectures teoriche dei Moduli 1 e 2, i research talk e i momenti di approfondimento scientifico.",
    address: "Via Francesco Marzolo, 6 – Padova",
    image: "/images/galileiana.jpg",
    alt: "Scuola Galileiana di Studi Superiori",
    mapLink: "https://maps.google.com/?q=Scuola+Galileiana+di+Studi+Superiori+Padova",
  },
  {
    id: "palazzo-bo",
    badge: "Apertura & Chiusura",
    title: "Palazzo Bo – Sede Storica",
    description: "Cuore monumentale dell'Università di Padova: accoglierà la Cerimonia di Apertura, il Talk inaugurale, le Lectio Magistralis e i saluti istituzionali.",
    address: "Via VIII Febbraio, 2 – Padova",
    image: "/images/unipd.jpg",
    alt: "Palazzo Bo – Università degli Studi di Padova",
    mapLink: "https://maps.google.com/?q=Palazzo+Bo+Padova",
  },
  {
    id: "hotello",
    badge: "Alloggio & Check-in",
    title: "Hotello Padova",
    description: "Struttura moderna e confortevole a circa 10 minuti a piedi dalla stazione centrale di Padova e vicinissima a tutte le sedi delle lezioni.",
    address: "Corso del Popolo, 2 – Padova",
    image: "/images/hotello.jpg",
    alt: "Hotello Padova – Alloggio partecipanti",
    mapLink: "https://maps.google.com/?q=Hotello+Padova",
  },
];

// ---- FAQ ----
export const faqList: FaqItem[] = [
  {
    question: "Chi può partecipare a PaThS?",
    answer: "PaThS è <strong>aperta a tutti gli studenti di Fisica</strong> afferenti ad AISF. Il livello delle lezioni e l'impostazione dell'evento sono pensati principalmente per studenti del <strong>3° anno della Triennale e dell'inizio della Magistrale</strong>, ma sono benvenuti anche dottorandi e studenti di anni successivi.",
  },
  {
    question: "Quanto costa partecipare?",
    answer: "Sono previste due opzioni di iscrizione:<br />• <strong>120€ – Quota con alloggio:</strong> include alloggio in struttura convenzionata, tutti i pasti (pranzi e cene), coffee break, transfer per l'escursione a Venezia, welcome kit e partecipazione a tutte le attività scientifiche e sociali.<br />• <strong>70€ – Quota senza alloggio:</strong> include tutti i pasti (pranzi e cene), coffee break, transfer per l'escursione a Venezia, welcome kit e partecipazione a tutte le attività scientifiche e sociali.<br />Le quote sono pensate per essere massimamente accessibili a tutti gli studenti.",
  },
  {
    question: "Dove si svolge l'evento e come ci si arriva?",
    answer: "L'evento si svolge a <strong>Padova</strong>, principalmente presso il Dipartimento di Fisica e Astronomia, la Scuola Galileiana e Palazzo Bo, sede centrale dell'Università. L'alloggio (Hotello Padova) si trova a circa 10 minuti a piedi dalla Stazione Centrale. Tutti gli spostamenti durante la scuola avverranno a piedi, senza necessità di trasporti pubblici aggiuntivi.",
  },
  {
    question: "Quali sono i temi scientifici trattati?",
    answer: "Ogni anno viene scelto un <strong>topic principale</strong> attorno a cui ruota la scuola (per questa edizione: <strong>AdS/CFT e Olografia</strong>), approfondito in dettaglio tramite lectures modulari. Le aree di interesse comprendono Quantum Gravity, Cosmologia e Teoria delle Stringhe, Fisica della Materia Condensata, Fisica delle Particelle ed Interazioni Fondamentali, Informazione Quantistica e Sistemi Complessi.",
  },
  {
    question: "Ci sarà anche un programma sociale?",
    answer: "<p class=\"mb-3\">Assolutamente sì! PaThS integra le tradizionali attività sociali AISF per favorire il networking, la condivisione e il confronto informale tra tutti i partecipanti:</p><ul class=\"space-y-2 pl-1\"><li class=\"flex items-start gap-2.5\"><span class=\"text-paths-accent font-bold mt-0.5\">•</span><span><strong>Physics & Drinks:</strong> aperitivo tipico di benvenuto con lo spritz padovano al Birrone Padova.</span></li><li class=\"flex items-start gap-2.5\"><span class=\"text-paths-accent font-bold mt-0.5\">•</span><span><strong>Caccia al Tesoro Culturale & Tour:</strong> attività a squadre per le vie e le piazze del centro storico di Padova.</span></li><li class=\"flex items-start gap-2.5\"><span class=\"text-paths-accent font-bold mt-0.5\">•</span><span><strong>Bacaro Tour a Venezia:</strong> escursione culturale del mercoledì sera in treno alla scoperta dei bacari veneziani (con eventuale serata 'Mercolegin' a Padova).</span></li><li class=\"flex items-start gap-2.5\"><span class=\"text-paths-accent font-bold mt-0.5\">•</span><span><strong>Serata Finale:</strong> evento di chiusura con cena sociale inclusa per tutti i partecipanti.</span></li></ul>",
  },
  {
    question: "Come faccio a iscrivermi?",
    answer: "Puoi iscriverti tramite il form ufficiale cliccando sul pulsante <strong>'Iscriviti Ora'</strong> in cima alla pagina. Per qualsiasi domanda o chiarimento, puoi contattarci via email all'indirizzo <a href=\"mailto:paths@ai-sf.it\" class=\"text-paths-accent hover:underline\">paths@ai-sf.it</a> oppure scriverci in direct sulla pagina <a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-paths-accent hover:underline\">Instagram di PaThS</a>.",
  },
];
