---
{
  "title": "Haskell Substitution Stepper — Jan Huber",
  "path": "/haskell-substitution-stepper",
  "canonicalPath": "/haskell-substitution-stepper",
  "lang": "de-CH",
  "heading": "Haskell Substitution Stepper",
  "heroIcon": "/media/f270dae5c4-2021_substitution_stepper.jpg",
  "seo": [
    { "name": "description", "content": "Haskell-Code Schritt für Schritt verstehen: Ein Studienprojekt an der OST macht die Auswertung von Ausdrücken sichtbar und unterstützt beim Lernen und Debuggen." },
    { "property": "og:title", "content": "Haskell Substitution Stepper — Jan Huber" },
    { "property": "og:description", "content": "Wie kommt ein Programm zu seinem Ergebnis? Der Haskell Substitution Stepper zeigt die Zwischenschritte – ähnlich wie ein vorgerechnetes Beispiel im Lehrbuch." },
    { "property": "og:type", "content": "website" },
    { "property": "og:image", "content": "/media/f270dae5c4-2021_substitution_stepper.jpg" },
    { "name": "twitter:card", "content": "summary_large_image" }
  ]
}
---

## Nicht nur das Ergebnis, sondern auch den Weg verstehen

Ein kurzer Ausdruck kann in Haskell viel bewirken. Doch selbst wenn das Ergebnis stimmt, ist nicht immer offensichtlich, wie es zustande kommt. Der **Haskell Substitution Stepper** macht diesen Weg sichtbar: Er zerlegt die Auswertung eines Ausdrucks in nachvollziehbare Einzelschritte – ähnlich wie ein vorgerechnetes Beispiel in einem Lehrbuch.

Ich habe das Projekt gemeinsam mit meinen Kollegen **Dominik Dietler** und **Robin Elvedi** an der Ostschweizer Fachhochschule OST entwickelt. Für mich war es die Studienarbeit, für Dominik und Robin die Bachelorarbeit. Das Ziel war ein Werkzeug, das beim Lernen von Haskell hilft und die Suche nach Fehlern im eigenen Code unterstützt.

## Was bedeutet «Substitution»?

Haskell ist eine funktionale Programmiersprache. Statt vor allem eine Folge von Anweisungen abzuarbeiten, beschreibt man Berechnungen mit Ausdrücken und Funktionen. Einen Ausdruck auszuwerten kann man sich als wiederholtes Ersetzen vorstellen: Eine Funktion wird durch ihre Definition ersetzt, ihre Argumente werden eingesetzt und Teilausdrücke vereinfacht. Dieses Ersetzen nennt man **Substitution**.

Ein einfaches Beispiel ist `length [1, 2, 3]`: Die Funktion `length` zählt die Elemente einer Liste. Die Projektdokumentation zeigt dazu folgende Schritte:

```text
length [1, 2, 3]
= 1 + (length [2, 3])
= 1 + (1 + (length [3]))
= 1 + (1 + (1 + (length [])))
= 1 + (1 + (1 + 0))
= 1 + (1 + 1)
= 1 + 2
= 3
```

In jedem Schritt wird ein Element gezählt und der Rest der Liste weiterverarbeitet. Bei der leeren Liste endet das Zählen. Aus den einzelnen Schritten wird so verständlich, warum das Ergebnis `3` lautet.

## Der Stepper in Aktion

Der Stepper ist ein Kommandozeilenwerkzeug. Man übergibt ihm eine Datei mit Haskell-Ausdrücken und erhält die einzelnen Umformungen als Text. Die Ausgabe enthält auch Hinweise darauf, welche Regel gerade angewendet wurde. Je nach gewünschtem Detailgrad lassen sich interne Zwischenschritte ausblenden.

<figure class="content-figure">
<video controls playsinline preload="none" aria-label="Demonstration des Haskell Substitution Steppers" style="width:100%;max-height:65vh">
<source src="/media/haskell-substitution-stepper/demo.mp4" type="video/mp4">
<a href="/media/haskell-substitution-stepper/demo.mp4">Demonstration als Video ansehen</a>
</video>
<figcaption>Die Demonstration zeigt die schrittweise Auswertung im Terminal.</figcaption>
</figure>

Das folgende Beispiel sucht mit `maximum` die grösste Zahl einer Liste. Der Stepper zeigt, wie die Funktion die Werte schrittweise miteinander vergleicht, bis `42` übrig bleibt.

![Terminalausgabe: maximum wertet die Liste [1, 2, 3, 4, 42, 5] schrittweise aus und liefert 42.](/media/haskell-substitution-stepper/maximum-beispiel.png)

*Originalausgabe des Steppers: von der Suche nach dem Maximum bis zum Ergebnis 42.*

## Möglichkeiten und Grenzen

Der Stepper entstand als Studienprojekt und deckt nicht die gesamte Sprache ab. Im dokumentierten Projektstand werden Dateiimporte ignoriert; Ein- und Ausgabe sowie die Prelude-Funktionen rund um `IO`, `Read` und `Show` werden nicht unterstützt. Bei einigen eingebauten Funktionen kann das Werkzeug nur das Ergebnis und keine weiteren Zwischenschritte zeigen.

<p class="button-link"><a href="https://eprints.ost.ch/id/eprint/991/1/HS%202021%202022-BA-EP-Elvedi-Dietler-Haskell%20Substitution%20Stepper.pdf">Vollständige Arbeit lesen (PDF)</a></p>
