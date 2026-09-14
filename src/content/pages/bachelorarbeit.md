---
{
  "title": "Bachelorarbeit — Jan Huber",
  "source": "https://www.jan-huber.ch/bachelorarbeit",
  "path": "/bachelorarbeit",
  "seo": [
    {
      "property": "og:site_name",
      "content": "Jan Huber"
    },
    {
      "property": "og:title",
      "content": "Bachelorarbeit — Jan Huber"
    },
    {
      "property": "og:url",
      "content": "https://www.jan-huber.ch/bachelorarbeit"
    },
    {
      "property": "og:type",
      "content": "website"
    },
    {
      "itemprop": "name",
      "content": "Bachelorarbeit — Jan Huber"
    },
    {
      "itemprop": "url",
      "content": "https://www.jan-huber.ch/bachelorarbeit"
    },
    {
      "name": "twitter:title",
      "content": "Bachelorarbeit — Jan Huber"
    },
    {
      "name": "twitter:url",
      "content": "https://www.jan-huber.ch/bachelorarbeit"
    },
    {
      "name": "twitter:card",
      "content": "summary"
    },
    {
      "name": "description",
      "content": ""
    }
  ],
  "structuredData": [
    {
      "url": "https://www.jan-huber.ch",
      "name": "Jan Huber",
      "@context": "http://schema.org",
      "@type": "WebSite"
    }
  ],
  "lang": "de-CH",
  "canonicalPath": "/bachelorarbeit",
  "heading": "Bachelorarbeit",
  "heroImage": "/media/89888187c6-bildschirmfoto-2022-07-05-um-20.02.14.png"
}
---

<span id="page-section-62c479d358912e35f2015069"></span>





<span id="page-section-62c479d358912e35f201506b"></span>

### Troldejæger

Automatische Erkennung von Troll-Kommentaren in Schweizer Online-Zeitungen

Troldejæger wurde von Abinas Kuganathan, Jan Huber und Joel Hirzel als Bachelorarbeit an der Ostschweizer Fachhochschule entwickelt.

<iframe class="video-embed" src="https://player.vimeo.com/video/727116488?h=c624de9d20&amp;app_id=122963&amp;dnt=1" title="Vorstellung Bachelorarbeit Troll-Erkennung" loading="lazy" allow="fullscreen; picture-in-picture" allowfullscreen></iframe>

<p class="button-link"><a href="https://eprints.ost.ch/id/eprint/1051/"> GANZE THESIS LESEN </a></p>

Auf den meisten Schweizer Nachrichten-Websites können die Benutzer Artikel kommentieren. In der Regel gibt es Richtlinien für die Kommentierung und die Kommentare durchlaufen vor der Veröffentlichung einen Moderationsprozess. Unangemessene Kommentare werden oft als &quot;Troll&quot;-Kommentare bezeichnet. Die Definition von &quot;Online-Trolling&quot; ist jedoch zweideutig. Trolling kann von harmlosen Witzen bis hin zu Mobbing oder staatlich geförderter Propaganda reichen.

Um unangemessene Kommentare herauszufiltern, verlassen sich die meisten Zeitungen in der Schweiz stark auf die manuelle Moderation. In dieser Arbeit wurden verschiedene Machine Learning Modelle trainiert, um unangemessene Kommentare automatisch zu erkennen.

Es wurden mehrere Klassifizierungsalgorithmen entwickelt, um <strong>Hassreden</strong> (83% richtige Ergebnisse), <strong>themenfremde Kommentare</strong> (80% richtige Ergebnisse) und <strong>staatlich gelenkte Propaganda</strong> (91% richtige Ergebnisse) zu erkennen. Diese Klassifikatoren wurden mit Daten aus verschiedenen Quellen trainiert. Bei Kommentaren der größten Schweizer Zeitung, 20 Minuten, können die Algorithmen in 71% der Fälle korrekt vorhersagen, ob ein Kommentar akzeptiert oder abgelehnt wird.

Die Klassifikatoren können das menschliche Moderationsteam in der Arbeit unterstützen. Die Genauigkeit reicht nicht aus, um den Moderationsprozess vollständig zu automatisieren. Stattdessen können die Algorithmen dazu verwendet werden, die extremsten Kommentare automatisch zu entfernen. Um die Ergebnisse zugänglich zu machen, wurde eine Webanwendung entwickelt. Mit der Applikation können Benutzer:innen ihre eigenen Kommentare analysieren oder bestehende Kommentare von 20minuten.ch untersuchen.

<figure class="content-figure">
<img src="/media/239b292e88-0.png" alt="" width="2048" height="1092" loading="lazy" decoding="async">
<figcaption><p>In der Applikation sind Quellen für Zeitungsartikel und Kommentare hinterlegt.</p></figcaption>
</figure>

<figure class="content-figure">
<img src="/media/a72c889c08-1.png" alt="" width="2348" height="1576" loading="lazy" decoding="async">
<figcaption><p>Anzeige der neusten Artikel von 20 Minuten</p></figcaption>
</figure>

<figure class="content-figure">
<img src="/media/6224c2deff-2.png" alt="" width="1820" height="1582" loading="lazy" decoding="async">
<figcaption><p>Für die einzelnen Artikel können die Kommentare analysiert werden.</p></figcaption>
</figure>

<figure class="content-figure">
<img src="/media/5e90fbff85-3.png" alt="" width="1278" height="856" loading="lazy" decoding="async">
<figcaption><p>Ausserdem können eigene (benutzerdefinierte) Kommentare analysiert werden.</p></figcaption>
</figure>

<figure class="content-figure">
<img src="/media/db0540c654-4.png" alt="" width="1388" height="864" loading="lazy" decoding="async">
<figcaption><p>Die Algorithmen analysieren unterschiedliche Merkmale des Kommentars.</p></figcaption>
</figure>
