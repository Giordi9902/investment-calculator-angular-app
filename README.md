# Investment Calculator 💰

Un'applicazione web moderna e interattiva per calcolare il rendimento degli investimenti nel tempo. Il calcolatore permette di visualizzare i risultati anno per anno, mostrando l'interesse maturato, il valore totale dell'investimento e l'ammontare complessivo investito.

## 📋 Descrizione del Progetto

Investment Calculator è un'applicazione sviluppata con Angular che consente agli utenti di:

- Inserire un investimento iniziale
- Definire un investimento annuale ricorrente
- Impostare il tasso di rendimento atteso
- Specificare la durata dell'investimento
- Visualizzare una tabella dettagliata con i risultati anno per anno

L'applicazione calcola automaticamente:

- L'interesse maturato per ogni anno
- Il valore dell'investimento alla fine di ogni anno
- L'interesse totale accumulato
- L'ammontare totale investito

## 🚀 Tecnologie Utilizzate

### Framework e Librerie Principali

- **Angular 20.0.0** - Framework JavaScript per applicazioni web
- **TypeScript 5.8.2** - Superset tipizzato di JavaScript
- **RxJS 7.8.0** - Libreria per la programmazione reattiva
- **Angular Forms** - Gestione dei form e validazione input
- **Angular Router** - Navigazione e routing dell'applicazione

### Architettura Angular

- **Standalone Components** - Componenti autonomi senza moduli NgModule
- **Signals** - Sistema di reattività nativo di Angular per la gestione dello stato
- **Dependency Injection** - Servizi iniettabili per la logica di business
- **Template-driven Forms** - Form gestiti tramite template HTML

### Strumenti di Sviluppo

- **Angular CLI 20.0.5** - Tool da riga di comando per lo sviluppo
- **Jasmine & Karma** - Framework per unit testing
- **TypeScript Compiler** - Compilazione del codice TypeScript
- **Prettier** - Formattazione automatica del codice

## 📦 Prerequisiti

Prima di iniziare, assicurati di avere installato:

- **Node.js** (versione 18.x o superiore)
- **npm** (viene installato automaticamente con Node.js)
- **Angular CLI** (opzionale, ma consigliato)

Per installare Angular CLI globalmente:

```bash
npm install -g @angular/cli
```

## 🛠️ Installazione

1. Clona il repository:

```bash
git clone https://github.com/Giordi9902/investment-calculator-angular-app.git
cd investment-calculator
```

2. Installa le dipendenze:

```bash
npm install
```

## 🏃 Esecuzione in Sviluppo

Per avviare il server di sviluppo locale:

```bash
npm start
```

oppure:

```bash
ng serve
```

Una volta avviato il server, apri il browser e naviga su `http://localhost:4200/`. L'applicazione si ricaricherà automaticamente ogni volta che modifichi i file sorgente.

## 🔨 Build di Produzione

Per compilare il progetto per la produzione:

```bash
npm run build
```

oppure:

```bash
ng build
```

Questo compilerà il progetto e salverà gli artefatti di build nella directory `dist/`. La build di produzione ottimizza automaticamente l'applicazione per prestazioni e velocità, includendo:

- Minificazione del codice
- Tree-shaking per rimuovere codice inutilizzato
- Ottimizzazione delle immagini e degli asset
- Compilazione Ahead-of-Time (AOT)

### Build in Modalità Watch

Per compilare automaticamente il progetto ogni volta che apporti modifiche:

```bash
npm run watch
```

## 🧪 Testing

Per eseguire gli unit test con il test runner [Karma](https://karma-runner.github.io):

```bash
npm test
```

oppure:

```bash
ng test
```

## 📁 Struttura del Progetto

```
investment-calculator/
├── src/
│   ├── app/
│   │   ├── header/              # Componente header
│   │   ├── user-input/          # Componente form di input
│   │   ├── investments-results/ # Componente tabella risultati
│   │   ├── investment.service.ts # Servizio per i calcoli
│   │   ├── investment-input.ts   # Interfacce TypeScript
│   │   └── app.ts               # Componente root
│   ├── index.html               # HTML principale
│   ├── main.ts                  # Entry point dell'applicazione
│   └── styles.css               # Stili globali
├── public/                      # Asset statici
├── angular.json                 # Configurazione Angular
├── package.json                 # Dipendenze e script npm
└── tsconfig.json               # Configurazione TypeScript
```

## 🎯 Funzionalità Principali

- **Interfaccia Intuitiva**: Form semplice e user-friendly per l'inserimento dei dati
- **Calcolo in Tempo Reale**: Risultati calcolati istantaneamente all'invio del form
- **Visualizzazione Dettagliata**: Tabella completa con breakdown anno per anno
- **Gestione Reattiva dello Stato**: Utilizzo di Angular Signals per una reattività ottimale
- **Design Responsive**: Layout adattivo per tutti i dispositivi

## 📝 Licenza

Questo progetto è stato creato a scopo educativo.

## 🔗 Risorse Aggiuntive

- [Documentazione Angular](https://angular.dev)
- [Angular CLI Reference](https://angular.dev/tools/cli)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [RxJS Documentation](https://rxjs.dev/)
