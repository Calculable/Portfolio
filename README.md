# Portfolio

Eine einfache Hello-World-Webseite mit Astro, HTML, CSS und Vanilla JavaScript.

Live: https://calculable.github.io/Portfolio/

## Lokal starten

Voraussetzung: Node.js 24 (siehe `.nvmrc`) und npm.

```sh
npm ci
npm run dev
```

Öffne die im Terminal angezeigte lokale Adresse mit dem Pfad `/Portfolio/`.

## Build und Vorschau

```sh
npm run build
npm run preview
```

Die fertige statische Webseite liegt in `dist/`.

## Dateien bearbeiten

- `src/pages/index.astro`: HTML und Seiteninhalt
- `src/styles/global.css`: Gestaltung
- `src/scripts/main.js`: Vanilla JavaScript
- `astro.config.mjs`: Domain und Basispfad
- `.github/workflows/deploy.yml`: automatische Veröffentlichung

## Veröffentlichen

Jeder Push auf `main` baut die Seite und veröffentlicht sie über GitHub Actions auf GitHub Pages.
In den Repository-Einstellungen unter **Pages → Source** ist **GitHub Actions** ausgewählt.

```sh
git add .
git commit -m "Update portfolio"
git push
```

Deployment-Anleitung: https://docs.astro.build/en/guides/deploy/github/
