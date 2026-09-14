# Migrationsarchiv

Dieses Verzeichnis dokumentiert die Übernahme von Squarespace. Es gehört nicht zur
veröffentlichten Website und ist keine Laufzeit-Abhängigkeit.

- `assets.json`: ursprüngliche öffentliche Bild-URLs und zugehörige lokale Dateien.
- `video.json`: Herkunft und Übernahme des lokal gespeicherten Videos.
- `source/sitemap.xml`: ursprüngliche Sitemap; Grundlage für `scripts/audit-site.py`.
- `source/*.html`: lokale Original-Snapshots für Quellenvergleiche (Git ignoriert sie).

Die gepflegten Inhalte stehen in `src/content/pages`, die Medien in `public/media`.
Die Quelle und URL jeder Seite stehen in ihrem Frontmatter. Ordnernamen dürfen von
den öffentlichen URLs abweichen. Die ursprünglichen Imports sind kein Mechanismus
zum Aktualisieren der inzwischen manuell bearbeiteten Website.
