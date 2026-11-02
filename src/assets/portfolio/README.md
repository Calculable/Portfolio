# Bilder hinzufügen

JPG, JPEG, PNG, WebP oder AVIF hier ablegen (Unterordner sind auch möglich),
committen und pushen. Keine Liste und kein Code müssen angepasst werden.
Astro erstellt automatisch passende WebP-Bildgrössen für die Galerie.

Neue Bilder stehen zuerst. Als Hinzufügedatum gilt der erste Git-Commit des
Bildes (nicht das Aufnahmedatum oder das Änderungsdatum). Bei gleichem Datum
entscheidet der Dateiname. Das Ersetzen eines Bildes verändert seinen Platz
nicht; Git-erkennbare Umbenennungen behalten das Datum ebenfalls.
Uncommittete Bilder verwenden in der lokalen Vorschau ihr Dateidatum.

Für Exporte aus «Fertige Bilder» den exakten Katalogdateinamen einschliesslich
Endung verwenden. Der Katalog verweist relativ zu diesem Webprojekt auf die Datei.
Für umbenannte Fotos bewahrt `src/content/portfolio-photos.json` die bisherigen
beschreibenden Galerienamen und Hinzufügedaten für Alternativtext und Sortierung.
Für neue Fotos ohne Eintrag werden Dateiname und Git-Historie verwendet.
