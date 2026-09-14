---
{
  "title": "Walky Fussgängersimulation — Jan Huber",
  "source": "https://www.jan-huber.ch/walky",
  "path": "/walky",
  "seo": [
    {
      "property": "og:title",
      "content": "Walky Fussgängersimulation — Jan Huber"
    },
    {
      "property": "og:type",
      "content": "website"
    },
    {
      "property": "og:description",
      "content": "Eine spielerische Fussgängersimulation, entwickelt an der Informatikmittelschule in Winterthur."
    },
    {
      "name": "twitter:card",
      "content": "summary"
    },
    {
      "name": "description",
      "content": "Eine spielerische Fussgängersimulation, entwickelt an der Informatikmittelschule in Winterthur. "
    }
  ],
  "lang": "de-CH",
  "canonicalPath": "/walky",
  "heading": "Walky",
  "heroIcon": "/media/fa8abb576b-2016_walky.jpg"
}
---

## Was ist Walky?

Walky ist eine Fussgängersimulation, die im Rahmen eines Schulprojekts in Zusammenarbeit mit Pascal Andermatt (<a href="https://github.com/pandermatt">GitHub</a>, <a href="https://pandermatt.ch/">Homepage</a>) entstanden ist. Benutzer und Benutzerinnen können in der Applikation beliebige Umgebungen aufzeichnen und beobachten, wie sich die simulierten Fussgänger verhalten, um möglichst schnell ein Zielpunkt zu erreichen.

<iframe class="video-embed" src="https://player.vimeo.com/video/469197709?app_id=122963&amp;wmode=opaque&amp;dnt=1" title="Walky Fussg&amp;auml;ngersimulation" loading="lazy" allow="fullscreen; picture-in-picture" allowfullscreen></iframe>

## Weshalb gibt es Fussgängersimulationen?

Walky ist eine spielerische Applikation zur Unterhaltung und zum Kennenlernen bestimmter Algorithmen. In der Praxis haben Fussgängersimulationen auch praktische Nutzen, zum Beispiel…

- …zur Konstruktion von Gebäuden und Inneneinrichtungen oder dem Optimieren des Pendlerflusses an Bahnhöfen
- …zur Planung von Grossanlässen und Verhindern von Massenpanik

## Wie funktioniert die Simulation?

Zur Vorhersage des Fussgängerverhaltens werden verschiedene Algorithmen eingesetzt (<a href="https://de.wikipedia.org/wiki/QuickHull">Quick Hull</a>, Polygon offset, <a href="https://de.wikipedia.org/wiki/Dijkstra-Algorithmus">Dijkstra</a>). Dazu wird die gezeichnete Umgebung des Benutzers im Hintergrund in einen Graphen umgewandelt. Die Fussgänger werden immer versuchen, den kürzesten Weg zum Ziel zu finden, müssen dabei jedoch auch Rücksicht auf andere Fussgänger nehmen.

## OpenStreetMap-Integration

Walky bietet die Möglichkeit, echte Umgebungskarten aus <a href="https://www.openstreetmap.ch/">OpenStreetMap</a> in die Applikation zu importieren. Dabei werden die Gebäude-Koordinaten eingelesen und können als Umgebung für die Simulation verwendet werden.

<figure class="content-figure">
<img src="/media/b81e9d8c5c-walky_winti.jpg" alt="" width="1600" height="862" loading="lazy" decoding="async">
<figcaption><p><strong>Einlesen von echten Kartendaten</strong></p><p>Auf diesem Screenshot befindet sich ein Kartenausschnitt aus der Stadt Winterthur</p></figcaption>
</figure>

## Weitere Funktionen

### Simulation aufnehmen

📹

Die Fussgängersimulationen können aufgezeichnet und als hochauflösende Filmsequenzen gespeichert werden.

### Karten teilen

💾

Erstellte Umgebungskarten können direkt auf der Festplatte gespeichert und von dort wieder eingelesen werden.

### Fussgänger

🚶‍♀️

Für jeden Fussgänger lassen sich Attribute wie die Geschwindigkeit anpassen, um eine möglichst realistische Simulation zu ermöglichen
