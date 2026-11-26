// Tutti i testi e i link della landing in un posto solo.
// I link segnati con TODO vanno sostituiti con quelli veri.

const DM = "https://ig.me/m/leonardo_leone_official";

export const site = {
  nome: "Leonardo Leone",
  handle: "@leonardo_leone_official",
  motto: "Sapere è Potere",
  bio: "Ti spiego soldi, lavoro e attualità senza giri di parole. Poi ti do il primo passo concreto da fare.",
  // Metti la foto in /public/leonardo.jpg e imposta qui il percorso: "/leonardo.jpg"
  foto: "" as string,

  instagram: "https://www.instagram.com/leonardo_leone_official/",
  dm: DM,

  social: [
    { nome: "Instagram", url: "https://www.instagram.com/leonardo_leone_official/" },
    { nome: "YouTube", url: "https://www.youtube.com/" }, // TODO link canale
    { nome: "TikTok", url: "https://www.tiktok.com/" }, // TODO link profilo
    { nome: "Facebook", url: "https://www.facebook.com/" }, // TODO link pagina
  ],

  regali: [
    {
      parola: "MONEY",
      titolo: "La guida per far lavorare i tuoi soldi",
      testo: "Se hai soldi fermi sul conto li stai già perdendo. Ti mando la guida gratuita per partire anche con poco.",
      url: DM,
    },
    {
      parola: "CASA",
      titolo: "Guadagnare con le case, anche se hai già un lavoro",
      testo: "Il metodo per creare una seconda entrata con gli immobili, senza lasciare il tuo lavoro.",
      url: DM,
    },
  ],

  scuola: {
    nome: "Leone Master School",
    instagram: "https://www.instagram.com/leone.master.school/",
    url: "https://www.instagram.com/leone.master.school/", // TODO pagina del corso
    punti: [
      "Un percorso passo passo: niente teoria fine a se stessa",
      "Si parte dal tuo punto di partenza, anche con poco capitale",
      "Casi veri, numeri veri, domande vere a cui rispondiamo",
    ],
  },

  link: [
    { titolo: "Scopri la Leone Master School", sotto: "Il percorso completo", url: "https://www.instagram.com/leone.master.school/" }, // TODO
    { titolo: "Guarda le dirette e i video lunghi", sotto: "YouTube", url: "https://www.youtube.com/" }, // TODO
    { titolo: "Scrivimi in privato", sotto: "Rispondo io o il mio team", url: DM },
  ],

  faq: [
    {
      d: "Cosa fate esattamente?",
      r: "Insegno a gestire e far crescere i tuoi soldi: investimenti, immobili e seconde entrate. Sui social trovi i contenuti gratuiti; nella Leone Master School trovi il percorso completo, passo passo.",
    },
    {
      d: "Quanto costa il corso?",
      r: "Dipende dal percorso giusto per te. Scrivimi in DM: ti spieghiamo opzioni e prezzi senza impegno.",
    },
    {
      d: "Come si partecipa?",
      r: "Scrivi la parola chiave in DM (MONEY o CASA) per il regalo gratuito, oppure scrivimi direttamente: ti diciamo come entrare.",
    },
    {
      d: "Serve un capitale per iniziare?",
      r: "No, non serve partire con grandi cifre. Il primo passo è mettere ordine nei soldi che hai già, e da lì si costruisce.",
    },
    {
      d: "Non è la solita fuffa da guru?",
      r: "Dubitare è giusto. Per questo partiamo da contenuti gratuiti: guardali, verifica i numeri e decidi tu. Nessuno ti promette soldi facili.",
    },
  ],
};
