---
{
  "title": "TextProcessor — Jan Huber",
  "source": "https://www.jan-huber.ch/textprocessor",
  "path": "/textprocessor",
  "seo": [
    {
      "property": "og:title",
      "content": "TextProcessor — Jan Huber"
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
  "canonicalPath": "/textprocessor",
  "heading": "Text Processor",
  "heroImage": "/media/17a6ad3c1b-unsplash-image-o1xcui-yt_w.jpg"
}
---

Zum Transformieren von Text gibt es bereits zahlreiche Werkzeuge. Leider sind viele dieser Werkzeuge sehr kompliziert in der Anwendung und erfordern das Beherrschen von Konzepten wie Regular Expressions. Das Ziel in dieser Projektarbeit war die Entwicklung einer einfacherer Möglichkeit. Der Anwender oder die Anwenderin definiert anhand mehrerer Beispiele, wie eine Transformation aussieht. Der TextProcessor erkennt dabei in vielen Fällen automatisch die Struktur des Textes und kann die gewünsche Transformation dann automatisch anwenden.

### Beispiel

Die Ausgangslage in diesem Beispiel ist eine Liste von Emailadressen:

> fritz@gmail.comrene@hotmail.deandrea@gmx.comurs@bluewin.ch…

Die Daten sollen so transformiert werden, dass nur alles vor dem “@“-Zeichen angezeigt werden soll. Die gewünschte Ausgabe ist also:

> fritzreneandreaurs…

So wird diese Transformation im TextProcessor definiert:

<figure class="project-card">
<img src="/media/a79a85285e-bildschirmfoto-2022-04-17-um-11.34.47.png" alt="" width="1442" height="1060" loading="lazy" decoding="async">
<figcaption><p>Schritt 1: Daten in das Tool kopieren</p><p>Die Liste der Emailadressen wird im Tool erfasst</p></figcaption>
</figure>

<figure class="project-card">
<img src="/media/e3c39ee940-bildschirmfoto-2022-04-17-um-11.34.56.png" alt="" width="1442" height="1060" loading="lazy" decoding="async">
<figcaption><p>Schritt 2: Trenn-Zeichen für die Daten auswählen</p><p>Hier wird definiert, wie die einzelnen Datensätze voneinander getrennt sind. In diesem Beispiel handelt es sich um einen Zeilenumbruch (line break). In einigen Fällen kann das Tool das Trennzeichen selbstständig aus den Daten erkennen.</p></figcaption>
</figure>

<figure class="project-card">
<img src="/media/53b29915fe-bildschirmfoto-2022-04-17-um-11.35.19.png" alt="" width="1442" height="1060" loading="lazy" decoding="async">
<figcaption><p>Schritt 3: Erfassen der Datenstruktur</p><p>Im nächsten Schritt wird definiert, welches Muster den Daten zugrunde liegt. In diesem Fall haben die einzelnen Einträge das Muster &lt;name&gt;@&lt;domain&gt;. In manchen Fällen kann das Tool das Muster in den Daten selbstständig erkennen.</p></figcaption>
</figure>

<figure class="project-card">
<img src="/media/aee6efc8c6-bildschirmfoto-2022-04-17-um-11.39.42.png" alt="" width="1442" height="1060" loading="lazy" decoding="async">
<figcaption><p>Schritt 4: Beispieltransformation 1</p><p>Als nächstes wird dem Tool anhand von Beispielen beigebracht, wie der Text transformiert werden soll. In diesem Beispiel wird der Text “<em>rene@hotmail.de</em>” als Ausgangslage verwendet. Der gewünschte Output ist hier “<em>rene</em>“</p></figcaption>
</figure>

<figure class="project-card">
<img src="/media/8b3f80e662-bildschirmfoto-2022-04-17-um-11.39.50.png" alt="" width="1442" height="1060" loading="lazy" decoding="async">
<figcaption><p>Schritt 5: Beispieltransformation 2</p><p>In der Regel müssen mehrere Beispiele erfasst werden, bis sich das Tool sicher ist, das Muster der Transformation richtig erkannt zu haben. In diesem Beispiel genügen zwei Beispieltransformationen.</p></figcaption>
</figure>

<figure class="project-card">
<img src="/media/1b94c37431-bildschirmfoto-2022-04-17-um-11.40.02.png" alt="" width="1544" height="1002" loading="lazy" decoding="async">
<figcaption><p>Schritt 6: Resultat</p><p>Am Ende transformiert das Tool Zeile für Zeile und gibt das Resultat auf dem Bildschirm aus.</p></figcaption>
</figure>
