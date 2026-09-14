---
{
  "title": "Bachelorarbeit — Jan Huber",
  "source": "https://www.jan-huber.ch/bachelorarbeit",
  "path": "/bachelorarbeit",
  "seo": [
    {
      "property": "og:title",
      "content": "Bachelorarbeit — Jan Huber"
    },
    {
      "property": "og:type",
      "content": "website"
    },
    {
      "name": "twitter:card",
      "content": "summary"
    }
  ],
  "lang": "de-CH",
  "canonicalPath": "/bachelorarbeit",
  "heading": "Bachelorarbeit",
  "heroIcon": "/media/1487abf97a-zeichenfl-che-1-4x.png"
}
---

## Troldejæger

Automatische Erkennung von Troll-Kommentaren in Schweizer Online-Zeitungen

Troldejæger wurde von Abinas Kuganathan, Jan Huber und Joel Hirzel als Bachelorarbeit an der Ostschweizer Fachhochschule entwickelt.

<iframe class="video-embed" src="https://player.vimeo.com/video/727116488?h=c624de9d20&amp;app_id=122963&amp;dnt=1" title="Vorstellung Bachelorarbeit Troll-Erkennung" loading="lazy" allow="fullscreen; picture-in-picture" allowfullscreen></iframe>

<p class="button-link"><a href="https://eprints.ost.ch/id/eprint/1051/"> GANZE THESIS LESEN </a></p>

Auf den meisten Schweizer Nachrichten-Websites können die Benutzer Artikel kommentieren. In der Regel gibt es Richtlinien für die Kommentierung und die Kommentare durchlaufen vor der Veröffentlichung einen Moderationsprozess. Unangemessene Kommentare werden oft als &quot;Troll&quot;-Kommentare bezeichnet. Die Definition von &quot;Online-Trolling&quot; ist jedoch zweideutig. Trolling kann von harmlosen Witzen bis hin zu Mobbing oder staatlich geförderter Propaganda reichen.

Um unangemessene Kommentare herauszufiltern, verlassen sich die meisten Zeitungen in der Schweiz stark auf die manuelle Moderation. In dieser Arbeit wurden verschiedene Machine Learning Modelle trainiert, um unangemessene Kommentare automatisch zu erkennen.

Es wurden mehrere Klassifizierungsalgorithmen entwickelt, um <strong>Hassreden</strong> (83% richtige Ergebnisse), <strong>themenfremde Kommentare</strong> (80% richtige Ergebnisse) und <strong>staatlich gelenkte Propaganda</strong> (91% richtige Ergebnisse) zu erkennen. Diese Klassifikatoren wurden mit Daten aus verschiedenen Quellen trainiert. Bei Kommentaren der größten Schweizer Zeitung, 20 Minuten, können die Algorithmen in 71% der Fälle korrekt vorhersagen, ob ein Kommentar akzeptiert oder abgelehnt wird.

Die Klassifikatoren können das menschliche Moderationsteam in der Arbeit unterstützen. Die Genauigkeit reicht nicht aus, um den Moderationsprozess vollständig zu automatisieren. Stattdessen können die Algorithmen dazu verwendet werden, die extremsten Kommentare automatisch zu entfernen. Um die Ergebnisse zugänglich zu machen, wurde eine Webanwendung entwickelt. Mit der Applikation können Benutzer:innen ihre eigenen Kommentare analysieren oder bestehende Kommentare von 20minuten.ch untersuchen.

![](</media/239b292e88-0.png>)

*In der Applikation sind Quellen für Zeitungsartikel und Kommentare hinterlegt.*

![](</media/a72c889c08-1.png>)

*Anzeige der neusten Artikel von 20 Minuten*

![](</media/6224c2deff-2.png>)

*Für die einzelnen Artikel können die Kommentare analysiert werden.*

![](</media/5e90fbff85-3.png>)

*Ausserdem können eigene (benutzerdefinierte) Kommentare analysiert werden.*

![](</media/db0540c654-4.png>)

*Die Algorithmen analysieren unterschiedliche Merkmale des Kommentars.*
