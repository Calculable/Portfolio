# Wasserfall-Verzeichnis: Betrieb und Datenprüfung

Stand der Umsetzung: 27. September 2026. Statische Astro-Seite auf der vorhandenen Projekt-URL, keine zusätzlichen Detailrouten und keine Serverfunktion.

## Neuer Bestand

Quelle: https://overpass-api.de/api/interpreter, OSM-Datenstand 2026-09-27T12:13:18Z. Die Schweiz-Abfrage umfasst `node`, `way` und `relation` mit `waterway=waterfall`. Insgesamt 1518 Einträge: 1501 Punkte, 17 Linien, 0 Relationen. 365 benannt, 1153 unbenannt; 257 mit interpretierbarer Höhenangabe; 28 mit Wikidata-ID. Namen aus zusätzlichen OSM-Sprachen dienen als Fallback; Wikidata-Namen ergänzen die Suche, ersetzen aber nicht eigenmächtig den OSM-Namen.

Die alternative Instanz lieferte im ersten Versuch einen älteren Stand vom 1. Juni 2026. Veröffentlicht wird ausschliesslich der aktuelle Export der primären Instanz. Der Operator muss auch künftig den im Bericht angezeigten Datenstand prüfen.

Der alte CSV-Export enthält 399 Einträge. 294 OSM-Punktkennungen sind im neuen Bestand enthalten; 105 fehlen in der heutigen Abfrage. 5 der 294 besitzen aktuell keinen Namen. Mögliche Ursachen sind Löschungen, umklassifizierte Objekte oder eine andere Gebietsauswahl. Alte Einträge werden deshalb nicht automatisch als aktuell importiert. Die Originale auf dem Desktop bleiben unverändert.

OSM-Typ plus ID sind die stabilen technischen Schlüssel. Keine identischen IDs werden übernommen. Gleiche Namen reichen nicht zum Zusammenführen: einzelne Kaskaden können eigene Einträge sein. Der initiale Prüfbericht nennt 2 Gruppen gemeinsamer Wikidata-IDs und 9 nahe Paare mit gleichem Namen (Gruppen können sich überlappen). Diese bleiben sichtbar, bis eine fachliche Prüfung eine begründete Korrektur ergibt.

## Fotos: vorhanden und fehlend

42 Wasserfall-Einträge besitzen insgesamt 46 Bildverweise: 17 `image`-Tags aus OSM, 5 `wikimedia_commons`-Tags und 24 P18-Verweise aus Wikidata. 39 der 42 Einträge sind benannt. Mehrfachverweise können dasselbe Bild oder denselben Wasserfall betreffen; 46 Verweise sind **nicht** 46 eindeutige freigegebene Fotos.

Die Verweise enthalten Commons-Dateiseiten, direkte Bildadressen, mindestens eine Commons-Kategorie und auch eine fremde CDN-Adresse. Eine Kategorie ist keine einzelne Bilddatei. Gegenüber den 55 Verweisen im historischen CSV handelt es sich um einen neuen Quellenbestand; alte Verweise werden nicht ungeprüft angehängt.

Für eine spätere Galerie fehlen pro Bild: Prüfung der tatsächlichen Zuordnung, Urheber/gewünschte Namensnennung, Lizenzversion und Lizenzlink, Commons-Quelldateiseite bzw. Berechtigung des externen Anbieters, Bearbeitungsvermerk, Prüfung zusätzlicher Rechte sowie eine passende lokal optimierte Bilddatei. Die Lizenz von Wikidata gilt nicht automatisch für die referenzierten Bilder. Alle `rightsVerified`-Werte sind ausdrücklich `false`. Keine referenzierten Wasserfallfotos wurden heruntergeladen oder eingebaut. Das dekorative Titelbild ist eine separat generierte Illustration.

## Website und Datenschutz

- Suche (auch Namensvarianten), optional unbenannte Einträge, scrollbare Liste mit allen Suchtreffern, Markergruppen und modales Detailfenster.
- Desktop: Karte und Liste nebeneinander; mobil untereinander. Native Dialog-Fokusführung, Escape, Fokus-Rückgabe und Textliste als Alternative zur Karte.
- Kartendaten sind lokal eingebettet; Hintergrundkarten erst nach Aktivierung. Kein API-Key, kein Standort, kein Local Storage, keine Konten.
- OSM-Standardkacheln mit sichtbarer Attribution, HTTPS, normalem Browsercache und `strict-origin-when-cross-origin` als Referrer-Policy. Keine Offline-Pakete, kein Vorladen ganzer Regionen.
- Die vorhandene GoatCounter-Seitenstatistik bleibt bestehen. Individuelle Suchtexte/Einträge werden nicht an sie gesendet. Die bestehende Datenschutzerklärung wurde um die tatsächlichen Datenflüsse des Verzeichnisses ergänzt.
- Bei Kartenausfall funktionieren Liste, Suche und Details weiter. Kartenanbieter hat keine garantierte Verfügbarkeit. Bei zunehmendem Traffic Anbieterbedingungen erneut prüfen und gegebenenfalls auf einen passenden Dienst wechseln.

## Lizenzen und Sicherheit

Der öffentliche JSON-Download enthält ODbL-Verweis, OSM-Attribution, Abfrage, Quelle und Datenstand. Wikidata-Strukturdaten: CC0. OSM-abgeleitete Daten einschliesslich Korrekturen bleiben ODbL. Bibliothekslizenzen unter `public/licenses/waterfall-libraries.txt`. Quellen:

- https://www.openstreetmap.org/copyright
- https://opendatacommons.org/licenses/odbl/1-0/
- https://operations.osmfoundation.org/policies/tiles/
- https://osmfoundation.org/wiki/Privacy_Policy
- https://www.wikidata.org/wiki/Wikidata:Licensing
- https://commons.wikimedia.org/wiki/Commons:Reusing_content_outside_Wikimedia
- https://www.edoeb.admin.ch/de/informationspflicht
- https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de (Art. 100 OR)

Hinweise warnen vor fehlendem Zugang, Privatgrundstücken/Schutzgebieten, rutschigem Gelände, Absturz, Steinschlag und Wasserstandsänderungen. Keine Touren- oder Sicherheitsberatung, keine Live-Wasserstände, keine behauptete Vollständigkeit. Haftungsausschluss nur soweit gesetzlich zulässig; zwingende Haftung bleibt unberührt. Ein Disclaimer garantiert keine vollständige Haftungsfreiheit. Keine anwaltliche Einzelfallprüfung erfolgt.

## Aktualisierung

Mac-App und Quellcode liegen im separaten privaten Projekt [Wasserfall-Exporter](https://github.com/Calculable/Wasserfall-Exporter). Lokal: `../Wasserfall Exporter/WasserfallExporter/` relativ zum Portfolio-Projektordner; Bedienung: `docs/USAGE.md` im Exporter-Projekt. Ziel ist `public/data/waterfalls.json`; anschliessend Astro bauen und Vorschau prüfen. Kein automatischer Commit, Push oder Deployment.

Vor einer Veröffentlichung: Änderungen des Datenbestands und Warnungen prüfen, Quellen-/Lizenzhinweise sichtbar lassen. Die initialen Anzahlen in diesem Dokument sind historisch; die Website berechnet sie bei jedem Build aus dem jeweiligen JSON neu.

## Durchgeführte Prüfung

- Astro-Produktionsbuild erfolgreich (88 statische Seiten).
- 6 Swift-Tests: alle Geometrietypen, getrennte OSM-ID-Bereiche, unvollständige/leere/ungültige Antworten, Korrekturen, ungeprüfte Bildrechte, mehrdeutige Höhen, Schutz fremder Dateien, Backups und veraltete Datenstände.
- 3 JavaScript-Tests einschliesslich bestehendem Fototest erfolgreich; Wasserfallsuche prüft Akzente, Aliasnamen und den Unbenannt-Schalter, externe Links werden sicher zusammengesetzt.
- Browserprüfung der Entwicklungs- und Produktionsversion: Karte laden, Markergruppen, Suche, leere Trefferliste, 1518 Einträge per Schalter, Dialog/Schliessen mit Escape. Keine beobachteten Konsolenfehler.
- Responsive Prüfung bei 1280, 390 und 320 Pixel Breite, einschliesslich Detaildialog. Keine horizontale Überbreite. Vor Kartenaktivierung keine externen Bilder in der Seite.
- Mac-App tatsächlich gestartet; Abruf mit Wikidata, Bericht und Speichern in eine temporäre Testdatei erfolgreich. Testexport enthält denselben Wasserfallbestand wie die Webseite.

Veröffentlichung erfolgt über den vorhandenen GitHub-Pages-Workflow bei einem autorisierten Push auf `main`.
