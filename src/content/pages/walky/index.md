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
      "content": "10 Jahre Walky: Die Fussgängersimulation wurde in eine Webapplikation und die iPhone-App Walky Go migriert."
    },
    {
      "name": "twitter:card",
      "content": "summary"
    },
    {
      "name": "description",
      "content": "10 Jahre Walky: Die Fussgängersimulation wurde in eine Webapplikation und die iPhone-App Walky Go migriert."
    }
  ],
  "lang": "de-CH",
  "canonicalPath": "/walky",
  "heading": "Walky",
  "heroIcon": "/media/fa8abb576b-2016_walky.jpg"
}
---

### Was ist Walky?

Walky ist eine Fussgängersimulation, die im Rahmen eines Schulprojekts in Zusammenarbeit mit Pascal Andermatt (<a href="https://github.com/pandermatt">GitHub</a>, <a href="https://pandermatt.ch/">Homepage</a>) entstanden ist. Benutzer und Benutzerinnen können in der Applikation beliebige Umgebungen aufzeichnen und beobachten, wie sich die simulierten Fussgänger verhalten, um möglichst schnell ein Zielpunkt zu erreichen.

<iframe class="video-embed" src="https://player.vimeo.com/video/469197709?app_id=122963&amp;wmode=opaque&amp;dnt=1" title="Walky Fussg&amp;auml;ngersimulation" loading="lazy" allow="fullscreen; picture-in-picture" allowfullscreen></iframe>

### Weshalb gibt es Fussgängersimulationen?

Walky ist eine spielerische Applikation zur Unterhaltung und zum Kennenlernen bestimmter Algorithmen. In der Praxis haben Fussgängersimulationen auch praktische Nutzen, zum Beispiel…

- …zur Konstruktion von Gebäuden und Inneneinrichtungen oder dem Optimieren des Pendlerflusses an Bahnhöfen
- …zur Planung von Grossanlässen und Verhindern von Massenpanik

### Wie funktioniert die Simulation?

Zur Vorhersage des Fussgängerverhaltens werden verschiedene Algorithmen eingesetzt (<a href="https://de.wikipedia.org/wiki/QuickHull">Quick Hull</a>, Polygon offset, <a href="https://de.wikipedia.org/wiki/Dijkstra-Algorithmus">Dijkstra</a>). Dazu wird die gezeichnete Umgebung des Benutzers im Hintergrund in einen Graphen umgewandelt. Die Fussgänger werden immer versuchen, den kürzesten Weg zum Ziel zu finden, müssen dabei jedoch auch Rücksicht auf andere Fussgänger nehmen.

### OpenStreetMap-Integration

Walky bietet die Möglichkeit, echte Umgebungskarten aus <a href="https://www.openstreetmap.ch/">OpenStreetMap</a> in die Applikation zu importieren. Dabei werden die Gebäude-Koordinaten eingelesen und können als Umgebung für die Simulation verwendet werden.

<figure class="content-figure">
<img src="/media/b81e9d8c5c-walky_winti.jpg" alt="" width="1600" height="862" loading="lazy" decoding="async">
<figcaption><p><strong>Einlesen von echten Kartendaten</strong></p><p>Auf diesem Screenshot befindet sich ein Kartenausschnitt aus der Stadt Winterthur</p></figcaption>
</figure>

### Weitere Funktionen

<div class="walky-original-features">
<article>
<span class="walky-feature-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="13" height="14" rx="3"/><path d="m16 10 5-3v10l-5-3z"/></svg></span>
<h4 id="simulation-aufnehmen">Simulation aufnehmen</h4>
<p>Simulationen aufzeichnen und als hochauflösende Filmsequenzen speichern.</p>
</article>
<article>
<span class="walky-feature-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h13l4 4v13a1 1 0 0 1-1 1Z"/><path d="M7 3v6h9V3M7 21v-8h10v8"/></svg></span>
<h4 id="karten-teilen">Karten teilen</h4>
<p>Eigene Umgebungskarten als Datei speichern und später wieder einlesen.</p>
</article>
<article>
<span class="walky-feature-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="14" cy="4" r="2"/><path d="m7 21 3-6 3 2v4M5 12l4-4 4 1 3 4h4M13 9l-3 6"/></svg></span>
<h4 id="fussgänger">Fussgänger anpassen</h4>
<p>Eigenschaften wie die Geschwindigkeit für jeden Fussgänger individuell festlegen.</p>
</article>
</div>
