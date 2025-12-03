⚽ Gestione Leghe Fantacalcio (FantaLeague Manager)

Un'applicazione web full-stack per la gestione completa delle leghe di Fantacalcio. L'obiettivo è fornire agli amministratori di lega tutti gli strumenti necessari per organizzare, gestire e comunicare con i partecipanti in modo efficiente.

⚙️ Stack Tecnologico

Il progetto adotta un'architettura moderna con frontend e backend:

    Frontend: Sviluppato con React, per una user experience dinamica e reattiva.

    Backend: Realizzato con Node.js (probabilmente con Express o framework similari) per gestire l'API, l'autenticazione sicura e la logica di business.

    Database: HeidiSQL

✨ Funzionalità Attuali (Work in Progress)

Attualmente, l'applicazione si concentra sulle seguenti aree, sebbene sia in fase di sviluppo attivo:

    Pannello Amministratore: L'unica interfaccia utente completa al momento, accessibile dopo la registrazione.

    Gestione Utenti/Partecipanti:

        Implementazione di un'operazione CRUD per aggiungere e gestire i partecipanti alla lega.

        Sistema di registrazione utenti sicuro (implementato nel backend con Node.js).

    Dashboard Amministratore:

        Home Page (Struttura Base): La pagina principale che ospiterà i Widget.

        Sistema di Notifiche/Avvisi: Tramite i vari Widget, l'amministratore può pubblicare avvisi e novità rilevanti per la competizione.

🚀 Come Avviare il Progetto

Segui questi passaggi per avviare l'applicazione in locale. Assicurati di avere Node.js e npm installati sul tuo sistema.

1. Clonazione e Configurazione del Frontend

Apri il terminale e segui le istruzioni:
Bash

# Scarica il progetto (se non l'hai già fatto)

git clone https://github.com/TommasoGalistu/fantaweb.git
cd <NOME_CARTELLA_PROGETTO>

# Installazione delle dipendenze

npm install

# Avvio del frontend

npm run dev

2. Configurazione e Avvio del Backend

Apri un nuovo terminale separato per il backend:
Bash

# Spostati nella directory del backend

cd backend

# Installazione delle dipendenze

npm install

# Avvio del server backend (solitamente su porta 3000 o similare)

node server.js

Dopo aver avviato entrambi i servizi, visita l'indirizzo del frontend nel tuo browser per registrarti e accedere al pannello amministratore.
