---
name: content-origin
description: Texte und Bilder der Startseite stammen 1:1 von der früheren WordPress-Seite carinahillenbrand.de
metadata:
  type: project
---

Beim Aufsetzen am 2026-11-13 wurden die Inhalte der damaligen WordPress-Seite carinahillenbrand.de
übernommen: Startseitentexte wörtlich (Ansprache „Sie"), Bilder aus `wp-content/uploads/2025/09/`
verkleinert nach `src/assets/`. Impressum übernommen; die Datenschutzerklärung wurde **nicht** übernommen,
weil sie das alte WordPress-Hosting beschrieb — sie basiert auf der von carinahillenbrand.com, gekürzt auf
das, was hier gilt (kein Formular, kein Newsletter, kein Tracking).

**Why:** Die alte Seite verschwindet mit dem Umzug, sie ist dann keine Quelle mehr.

**How to apply:** Bei Textfragen ist der Stand im Repo maßgeblich. Kommt ein neuer Dienst dazu
(Formular, Newsletter, Buchungstool), muss die Datenschutzerklärung nachgezogen werden — siehe
[[stop-and-check-in-before-deep-debugging]] für den Umgang mit Unklarheiten.
