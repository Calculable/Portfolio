# Portfolio

## Suchmaschinen während der Entwicklung

Alle Seiten behalten während der Migration `noindex`. Der Tag steht in
`src/layouts/PageLayout.astro` und `src/layouts/PortfolioLayout.astro`.
Erst beim ausdrücklich freigegebenen Suchmaschinen-Start entfernen. Keine
Crawling-Sperre ergänzen: Suchmaschinen müssen `noindex` lesen können.

Die Astro-Webseite enthält die von Squarespace übernommenen öffentlichen Inhalte.
**Die Migration wird nach Freigabe vom 14.09.2026 auf GitHub Pages veröffentlicht.
Der Domainumzug und die Suchmaschinen-Freigabe bleiben separat.**
Anforderungen, Seiten-Checkliste, Entscheidungen und Prüfungen: [MIGRATION.md](MIGRATION.md).

Bisher veröffentlichte Version: https://calculable.github.io/Portfolio/

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

## Inhalte bearbeiten

- `src/content/projects.json`: Projektliste der Startseite (Reihenfolge, Titel, Beschreibung, Bild und Link).
- `src/content/pages/home/index.md`: Einleitung der Startseite und ihre Alias-URL `/jan-huber-portfolio`.
- `src/content/pages/kontakt/index.md`: Kontakttext, Impressum und Basin-Formular.
- `src/content/pages/fotoorte-zuercher-oberland/`: ein Markdown-Dokument pro Fotoort.
- Jedes Projekt hat einen Ordner: `index.md` ist die Projektseite; `contact.md` und `privacy-policy.md` liegen bei der zugehörigen App.
- Ordnernamen bestimmen keine URLs. Massgeblich ist ausschliesslich `path` im Frontmatter. Beispiel: `endless-peaks/index.md` bleibt unter `/endless-peaks-app` erreichbar.
- `public/media/`: lokale Bilder, Favicon und das Video. Referenz im Inhalt: `/media/dateiname.jpg`.
- `src/styles/content.css`: Gestaltung der übernommenen Inhalte.
- `src/components/SiteHeader.astro` und `SiteFooter.astro`: gemeinsame Navigation; das mobile Menü klappt über einen Button auf.
- Der Terminal-Look der Startseite steht in `src/styles/content.css`; die Einleitung bleibt in `home/index.md` editierbar.
- `astro.config.mjs`: Domain und Basispfad. Beim späteren Domainumzug anpassen.

Jede Markdown-Datei beginnt mit Frontmatter zwischen zwei `---`-Zeilen.
Die JSON-Schreibweise ist gültiges YAML. Die SEO-Felder wurden um leere und
redundante Squarespace-Angaben bereinigt. `path` bestimmt die URL, `title` den Browser-Titel und `seo` die Beschreibungs- und Social-Media-
Meta-Tags; `structuredData` enthält die strukturierten Suchmaschineninformationen.
`heading` ist die sichtbare Projektüberschrift; optional zeigen `heroIcon` ein kleines
App-Icon und `heroImage` ein kompaktes Titelbild (jeweils `/media/...`).
Nach dem zweiten `---` stehen die Texte als Markdown. Einfache Bilder verwenden
Markdown; ein unmittelbar folgender kursiver Absatz wird zur sichtbaren Bildlegende:

```md
![Beschreibung des Bildes](/media/dateiname.jpg)

*Bildlegende unter dem Foto.*
```

Die Bildlegende ist optional. `src/lib/content-images.js` erzeugt beim Build die
passenden `figure`/`figcaption`-Elemente und ergänzt Lazy Loading. Die Abmessungen
übernommener Bilder stehen separat in `src/content/image-dimensions.json`.
Neue Bilder funktionieren auch ohne diesen Eintrag; bekannte Abmessungen vermeiden
Layoutsprünge während des Ladens. Bilder mit komplexeren Beschriftungen oder
besonderen Layouts behalten HTML. Karten/Videos und Formulare brauchen weiterhin HTML.

Die ungenutzten Squarespace-Sprungmarken (`page-section-…`) wurden entfernt.
Erhalten bleibt die tatsächlich verwendete Sprungmarke der Projektliste: Der
Link „Software“ auf der Startseite scrollt dorthin. Neue Sprungmarken nur für
tatsächlich verwendete Links anlegen.

Gemeinsam erzeugt das Layout Canonical-URL, Open-Graph-Seitenadresse/Seitenname
und den vorläufigen `noindex`-Tag. Open Graph liefert auch die Titel, Beschreibung
und Bilder für Twitter/X; nur `twitter:card` wird separat angegeben. Strukturierte
Artikeldaten bleiben bei Fotoorten erhalten; allgemeine WebSite-Daten stehen nur
auf der Startseite.

Für eine Textänderung nur den Inhalt unter dem zweiten `---` bearbeiten. Bei einer
SEO-Änderung die betreffenden Titel/Beschreibungen in `seo` ebenfalls anpassen.
Interne Links immer ohne `/Portfolio` schreiben, z. B. `/kontakt` oder
`/fotoorte-zuercher-oberland/bachtel`. Das Layout ergänzt den konfigurierten Basispfad.
`aliases` gibt zusätzliche URLs für denselben Inhalt an. Die Startseite und
`/jan-huber-portfolio` teilen sich deshalb dieselbe Datei.

Neue Seiten: einen Projektordner mit `index.md` anlegen bzw. eine `.md`-Datei kopieren, `path`, `canonicalPath`, `source`, Titel und
SEO bearbeiten, anschließend Inhalt ersetzen. Keine neue Astro-Seite nötig.
Die Sitemap wird automatisch aus den kanonischen Seiten-URLs erzeugt.

## Projekte auf der Startseite pflegen

In `src/content/projects.json` entspricht jeder Eintrag einem Projekt. Einträge
verschieben, um die Reihenfolge zu ändern; einen Eintrag kopieren, um ein Projekt
hinzuzufügen. `title`, `description`, `image` und `url` bearbeiten. Für eine noch
nicht verfügbare Projektseite `url: null` setzen; dann erscheinen keine Links.
`width` und `height` sind die ursprünglichen Bildabmessungen. Kein HTML und keine Änderung am Layout nötig.

## Generierte Dateien und Migrationsarchiv

- `dist/`: vollständig generierte Website für GitHub Pages. Nicht von Hand ändern;
  der nächste Build ersetzt diese Dateien. Nicht in Git eingecheckt.
- `migration/`: Herkunftsnachweise und Original-Sitemap für die Übernahme. Darin
  dokumentieren `assets.json` und `video.json`, woher die lokalen Medien stammen.
  `source/*.html` sind lokale Original-Snapshots, nicht in Git eingecheckt.
  Das Archiv wird nicht auf der Website veröffentlicht. Der Link-Audit verwendet
  die Original-Sitemap, der Quellenvergleich die lokalen HTML-Snapshots.
- `scripts/`: Hilfen für Import und Prüfung. Die Import-Skripte dokumentieren die
  ursprüngliche Übernahme; sie dürfen nicht über die manuell gepflegte neue
  Ordnerstruktur und SEO-Felder laufen.

## Migration prüfen

```sh
ASTRO_TELEMETRY_DISABLED=1 npm run build
python3 scripts/audit-site.py
```

`audit-site.py` prüft alle lokalen Seiten-, Anker- und Medienlinks und die
vollständige Abdeckung der ursprünglichen Sitemap. `scripts/check-content.py`
vergleicht die Texte/Bilder mit den lokalen Original-HTML-Snapshots; es erhält
die Dateinamen ohne `.html` als Argumente. `migration/assets.json` hält die Herkunft
der Medien fest. Die Import-Skripte sind einmalige Migrationshilfen, keine
Laufzeit-Abhängigkeit. **Nicht über später manuell bearbeitete Inhalte importieren.**

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
- `site_source` enthält `jan-huber-astro`.
- `form_source` enthält den jeweiligen Seitenpfad zur Unterscheidung der Formulare.

Bei weiteren Webseiten/Formularen die versteckten Werte in der jeweiligen Markdown-Datei
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

Die Galerie verwendet Justified Gallery (mit gebündeltem jQuery), optimierte
responsive Bilder und ein natives
Dialogfenster mit Vanilla JavaScript. Die Zeilen passen sich automatisch der
verfügbaren Breite an; Bildbeschreibungen bleiben ausgeblendet. Ohne JavaScript
bleibt ein einfaches CSS Grid sichtbar. Klick, Pfeiltasten und horizontales Wischen
wechseln die Fotos; Escape schliesst das Fenster. Ohne JavaScript öffnet ein
Bildlink das grosse Bild direkt. Header und Footer sind eigene Astro-Komponenten.

SEO: Titel, Beschreibung, Canonical-URL, Open Graph, Twitter-Vorschau,
strukturierte CollectionPage/ImageGallery-Daten und Bild-Alternativtexte sind
enthalten. Die neue Seite behält `noindex` in `src/layouts/PortfolioLayout.astro`.
Für die spätere Freigabe auch den Tag in `PageLayout.astro` entfernen.
Die Datenschutz-Verknüpfung führt zur übertragenen Datenschutzerklärung.

Justified Gallery ist auf Version 3.8.1 fixiert. Die Integration übergibt die
Bildabmessungen direkt als Layout-Daten, damit die Bibliothek nicht alle grossen
Fallback-Bilder vorlädt. Der Browser wählt über `srcset` die passende Bildgrösse. Nach der Layout-Berechnung
lädt der Browser weitere Bilder mit nativem `loading="lazy"`. Alle Bilder besitzen
von Anfang an echte `src`/`srcset`-Adressen, damit sie auch ohne Galerie-Skript
laden. Die ersten zwei Bilder werden sofort geladen.
Bei einem Bibliotheks-Update diesen Integrationspunkt erneut prüfen.

## Besucherstatistik (GoatCounter)

`src/components/Analytics.astro` wird in beiden Seitenlayouts eingebunden. Das
Skript sendet Seitenaufrufe an `https://janhuber.goatcounter.com/count`.
Dashboard: https://janhuber.goatcounter.com/ (privat, Anmeldung erforderlich).

Es wird nur in Produktions-Builds und nur auf dem Host aus `astro.config.mjs`
(`site`) geladen. Lokale Entwicklungs- und Build-Vorschauen laden das externe
Skript nicht. Auch bei `navigator.doNotTrack === '1'` wird es nicht geladen.
Keine zusätzlichen Klick-, Formular- oder Download-Ereignisse sind eingerichtet.
Die Canonical-URLs dienen GoatCounter zur Zuordnung der Seiten; der aktuelle
`/Portfolio`-Präfix bleibt zunächst in den Statistikpfaden.

Beim Domainumzug `site` in der Astro-Konfiguration und „Your site“ in GoatCounter
aktualisieren. Die Statistik verwendet danach die neuen Seitenpfade. Die
Datenschutzerklärung beschreibt den Dienst und muss bei Änderungen seiner
Datenerfassung entsprechend angepasst werden.

Einrichtung und Content-Cleanup wurden am 14.09.2026 zur Veröffentlichung
freigegeben. Auf der veröffentlichten Website werden Seitenaufrufe erfasst. Die E-Mail-Bestätigung im
GoatCounter-Konto steht noch aus. Die Dashboard-Einstellung bleibt privat;
Speicherung einzelner Seitenaufrufe bleibt deaktiviert.
