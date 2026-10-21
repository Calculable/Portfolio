# Portfolio

## Lokal starten

Voraussetzung: Node.js 24 und npm.

```sh
npm ci
npm run dev
```

Die lokale Adresse wird im Terminal angezeigt.

## Build und Vorschau

Bei jeder Webseitenänderung immer auch eine lokale Vorschau starten, die geänderten Seiten prüfen und die lokale Vorschau-Adresse bereitstellen.

```sh
npm run build
npm run preview
```

Der Build liegt in `dist/`.

## Veröffentlichen

Nur auf ausdrücklichen Wunsch des Nutzers deployen. Auch Commit und Push benötigen eine ausdrückliche Aufforderung. Ein Auftrag zu Webseitenänderungen oder zur lokalen Vorschau ist keine Freigabe zur Veröffentlichung.

Vor einer autorisierten Veröffentlichung die Änderungen lokal prüfen. Ein Push auf `main` veröffentlicht die Website automatisch über GitHub Pages:

```sh
git push origin main
```

Website: https://www.jan-huber.ch/
