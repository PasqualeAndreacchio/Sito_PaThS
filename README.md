# PaThS – Padova Theoretical School (Astro + Tailwind CSS)

Sito web ufficiale della **Padova Theoretical School (PaThS)**, organizzata da **AISF – Comitato Locale di Padova**.

Questo progetto è stato refattorizzato da HTML statico puro a un moderno stack basato su **[Astro](https://astro.build/)** e **[Tailwind CSS](https://tailwindcss.com/)**, progettato per:
- Essere **100% statico e ultra-veloce**, perfetto per il deployment su **GitHub Pages** (zero costi di hosting, zero server).
- Permettere a chiunque (anche a chi non conosce JavaScript) di **modificare date, testi, programma e FAQ in pochi secondi** grazie al file centralizzato `src/data/siteData.ts`.
- Offrire un **form di iscrizione nativo stilizzato con Tailwind** che invia i dati a un Google Form esterno, senza bisogno di un backend dedicato.

---

## 📁 Struttura del Progetto

```text
├── .github/workflows/deploy.yml # Workflow GitHub Actions per deploy automatico su GitHub Pages
├── public/                      # Asset statici (immagini, pdf, icone)
│   └── images/                  # Immagini dell'evento e dei luoghi
├── src/
│   ├── data/
│   │   └── siteData.ts          # ⭐ TESTI, DATE, AREE, PROGRAMMA E FAQ (Modifica qui!)
│   ├── components/
│   │   ├── Navbar.astro         # Barra di navigazione responsive con menu mobile
│   │   ├── Hero.astro           # Sezione iniziale con date e call to action
│   │   ├── About.astro          # Presentazione della scuola e numeri chiave
│   │   ├── Topics.astro         # Aree tematiche (con card in risalto per AdS/CFT)
│   │   ├── Program.astro        # Programma a fisarmonica giorno per giorno
│   │   ├── Locations.astro      # Luoghi e aule dell'evento con mappe
│   │   ├── Logistics.astro      # Alloggio, quote di partecipazione e vitto
│   │   ├── Sponsors.astro       # Patrocini istituzionali e sponsor
│   │   ├── Faq.astro            # Domande frequenti interattive
│   │   ├── RegistrationForm.astro # Form nativo Tailwind collegato a Google Forms
│   │   ├── Footer.astro         # Footer con contatti, social e copyright
│   │   └── BackToTop.astro      # Pulsante per tornare all'inizio
│   ├── layouts/
│   │   └── Layout.astro         # Layout principale con meta tag e SEO
│   └── pages/
│       └── index.astro          # Pagina principale che assembla i componenti
├── astro.config.mjs             # Configurazione di Astro e Tailwind
├── tailwind.config.mjs          # Tema, colori custom 'paths' e font
└── legacy/                      # Backup del precedente codice HTML/CSS/JS puro
```

---

## ✏️ Come Modificare i Testi (Per chi non programma)

Non è necessario toccare i file HTML o Astro! Tutti i contenuti modificabili sono raccolti in:

👉 **`src/data/siteData.ts`**

In questo file puoi modificare in semplicità:
- **Date, città e quote** (`eventInfo`)
- **Tema principale** (`featuredTopic`) e **Aree tematiche** (`generalTopics`)
- **Programma giorno per giorno** (`programDays`)
- **Luoghi, indirizzi e foto** (`locationsList`)
- **Domande frequenti** (`faqList`)

---

## 📝 Come Collegare il Form di Iscrizione a Google Moduli

Il form presente in `src/components/RegistrationForm.astro` invia direttamente i dati inseriti dall'utente a un **Google Form**, senza bisogno di configurare database o server backend.

### Passaggi di configurazione:
1. Crea il tuo Google Form su Google Drive con i campi corrispondenti (Nome, Email, Telefono, Ateneo, Corso di studi, Quota, Note).
2. Nel Google Form, clicca sui tre puntini in alto a destra ➔ **"Ottieni link precompilato"**.
3. Compila ciascun campo con un testo di prova (es. `NOME`, `EMAIL`, ecc.) e clicca **"Ottieni link"**.
4. Incolla il link negli appunti: noterai parametri del tipo `entry.123456789=NOME&entry.987654321=EMAIL`.
5. Apri `src/data/siteData.ts`:
   - Inserisci in `googleFormAction` l'URL di invio sostituendo `/viewform` con `/formResponse`.
   - Inserisci in `googleFormUrl` il link pubblico per chi volesse aprirlo direttamente su Google.
6. In `src/components/RegistrationForm.astro`, verifica che i campi `name="entry.XXXXX"` corrispondano agli ID ottenuti.

Grazie all'iframe nascosto (`target="hidden_iframe"`), l'utente invia i dati rimanendo sulla pagina e vedendo un messaggio di conferma con grafica curata.

---

## 🚀 Sviluppo Locale e Build

Se hai Node.js installato sul computer:

```bash
# 1. Installa le dipendenze
npm install

# 2. Avvia il server di sviluppo locale
npm run dev

# 3. Compila il sito statico per la produzione
npm run build
```

I file statici compilati e pronti per la pubblicazione verranno generati nella cartella `dist/`.

---

## 🌐 Pubblicazione su GitHub Pages

Il repository include già il workflow `.github/workflows/deploy.yml`.

Per attivare il deployment automatico su GitHub:
1. Vai sulle **Impostazioni (Settings)** del repository GitHub.
2. Nella barra laterale, clicca su **Pages**.
3. Sotto la voce **Build and deployment** ➔ **Source**, seleziona **GitHub Actions**.
4. A ogni `git push` sul branch `main` (o `pasquale`), il sito verrà automaticamente compilato e pubblicato online!

