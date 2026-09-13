# Portfolio

## Suchmaschinen während der Entwicklung

Die Startseite enthält `<meta name="robots" content="noindex" />` im HTML-Kopf.
Damit werden Suchmaschinen, die diese Anweisung unterstützen, angewiesen, die
Seite nicht zu indexieren. Zum öffentlichen Suchmaschinen-Start diesen Tag in
`src/pages/index.astro` entfernen; bei zusätzlichen Seiten ebenfalls `noindex`
setzen, solange das Portfolio noch nicht indexiert werden soll.
Keine Crawling-Sperre in `robots.txt` hinzufügen: Suchmaschinen müssen die Seite
abrufen können, um `noindex` zu sehen. Die Webseite bleibt per Direktlink erreichbar.

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

## Kontaktformular (Basin)

Das HTML-Formular sendet Name, E-Mail und Nachricht per POST an
`https://usebasin.com/f/ff509d632e80`. Es funktioniert ohne JavaScript.
Nach erfolgreichem Versand zeigt Basin seine Standard-Bestätigungsseite.

- Dashboard: https://usebasin.com/app/forms/75327/submissions
- Benachrichtigungen: https://usebasin.com/app/forms/75327/notification_email_settings/edit
- Der Empfänger wird ausschließlich in Basin verwaltet. Den Bestätigungslink in Basins Verifizierungs-E-Mail anklicken, um E-Mail-Benachrichtigungen zu aktivieren.
- `site_source` enthält `https://calculable.github.io/Portfolio/`.
- `form_source` enthält `portfolio-contact`.

Bei weiteren Webseiten/Formularen die versteckten Werte in `src/pages/index.astro`
entsprechend anpassen. Sie werden mit jeder Anfrage gespeichert. Versteckte
Felder sind öffentlich einsehbar und vom Absender veränderbar; sie dienen nur
der Zuordnung, nicht als Sicherheitsnachweis. Der öffentliche Basin-Endpunkt
benötigt keinen geheimen API-Schlüssel im Frontend.

## Fotoarchiv unter /portfolio/

Live: https://calculable.github.io/Portfolio/portfolio/

GitHub Pages stellt das Repository unter `/Portfolio/` bereit. Die neue Route
`/portfolio/` liegt darunter. Mit einer eigenen Domain kann dieser Repository-
Präfix später entfallen.

Bilder einfach in `src/assets/portfolio/` ablegen, committen und pushen.
Details und unterstützte Formate stehen in der README in diesem Bilderordner.
Die Sortierung erfolgt absteigend nach dem ersten Git-Commit, bei Gleichstand
nach Dateinamen. Der Deployment-Workflow lädt dafür die vollständige Git-Historie.
Die Erstübernahme enthält alle 42 Fotos von https://www.jan-huber.ch/portfolio;
die ursprüngliche Webseite wird nicht verändert und nicht für Bildaufrufe benötigt.

Die Galerie verwendet CSS Grid, optimierte responsive Bilder und ein natives
Dialogfenster mit Vanilla JavaScript. Klick, Pfeiltasten und horizontales Wischen
wechseln die Fotos; Escape schliesst das Fenster. Ohne JavaScript öffnet ein
Bildlink das grosse Bild direkt. Header und Footer sind eigene Astro-Komponenten.

SEO: Titel, Beschreibung, Canonical-URL, Open Graph, Twitter-Vorschau,
strukturierte CollectionPage/ImageGallery-Daten und Bild-Alternativtexte sind
enthalten. Die neue Seite behält `noindex` in `src/layouts/PortfolioLayout.astro`.
Für die spätere Freigabe auch den Tag auf der Startseite entfernen.
Die Datenschutz-Verknüpfung ist vorerst ein inaktiver Platzhalter.
