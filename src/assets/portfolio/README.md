# Bilder hinzufügen

JPG, JPEG, PNG, WebP oder AVIF hier ablegen (Unterordner sind auch möglich),
committen und pushen. Keine Liste und kein Code müssen angepasst werden.
Astro erstellt automatisch passende WebP-Bildgrössen für die Galerie.

Neue Bilder stehen zuerst. Als Hinzufügedatum gilt der erste Git-Commit des
Bildes (nicht das Aufnahmedatum oder das Änderungsdatum). Bei gleichem Datum
entscheidet der Dateiname. Das Ersetzen eines Bildes verändert seinen Platz
nicht; Git-erkennbare Umbenennungen behalten das Datum ebenfalls.
Uncommittete Bilder verwenden in der lokalen Vorschau ihr Dateidatum.

Sprechende Dateinamen verwenden, zum Beispiel `Sonnenaufgang-am-See.jpg`:
Daraus entstehen automatisch Bildbeschreibung, Alternativtext und Carousel-
Beschriftung. Bindestriche und Unterstriche werden zu Leerzeichen.

Die 42 übernommenen Bilder haben Nummern, damit sie innerhalb ihres gemeinsamen
Import-Commits die Reihenfolge der bisherigen Webseite behalten. Bei neuen
Bildern sind Nummern nicht nötig. Zum Entfernen ein Bild aus diesem Ordner
entfernen, committen und pushen.
