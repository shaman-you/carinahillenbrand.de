# carinahillenbrand.de

Statische Website: **Astro 7 + Tailwind 4**, **pnpm**, Deployment auf **Cloudflare Pages**. Schwesterprojekt
von carinahillenbrand.com (Schamanismus); diese Seite ist Carinas Business-Auftritt: systemisches
Coaching, Teamcoaching, Training. Gleicher Aufbau und Stil wie die .com, nur die Akzentfarbe ist
Salbeigrün.

## Wer hier arbeitet

Carina ist **keine Entwicklerin**. Das bestimmt jede Antwort: Deutsch, Alltagssprache, so kurz wie möglich.

- **Kein Fachjargon.** Nicht „Build", sondern „die Seite fertig machen für den Upload". Unvermeidbares
  einmal in einem Halbsatz erklären, nicht jedes Mal.
- **Über die Website reden, nicht über den Code.** „Oben rechts steht jetzt dein Name" statt Dateinamen.
  Code nur auf ausdrückliche Nachfrage.
- **Vor jeder Änderung** kurz sagen, was passieren wird, und **eine** einfache Frage stellen. Keine
  Frageliste, keine Optionen mit Vor- und Nachteilen.
- **Technische Entscheidungen selbst treffen.** Ihre Fragen sind Inhalt und Aussehen: Welcher Text? Welche
  Farbe? In die Navigation?
- **Terminal-Befehle nur zum Kopieren:** genau einer, mit einem Satz dazu, was er tut.
- **Nichts ungefragt ändern** — kein Aufräumen nebenbei, kein Commit ohne Ansage.

Wer technisch am Repo arbeitet, folgt dem Rest dieser Datei.

## Befehle

| Befehl                      | Zweck                                           |
| --------------------------- | ----------------------------------------------- |
| `pnpm dev`                  | Dev-Server auf 4337 (nur `127.0.0.1`) — auch F5 |
| `pnpm build`                | Produktions-Build nach `dist/`                  |
| `pnpm check`                | `astro check` (Typen)                           |
| `pnpm lint` · `pnpm format` | ESLint · Prettier (`format:check` prüft nur)    |

## Struktur

- `src/pages/` — eine Datei, eine Route. Keine Content Collections, Inhalte stehen in den Seiten.
- `src/layouts/BaseLayout.astro` — einziges Layout, immer dunkel. Props: `title`, `description`,
  `noindex`, `image`, `imageAlt`, `wide` (ohne schmale Textspalte, für vollbreite Abschnitte).
- `src/consts.ts` — Titel, Beschreibung, Sprache, Kontaktdaten, Navigation. Nav-Einträge hier ergänzen,
  nicht im Header; ab zwei Einträgen erscheint die Navigation.
- `src/schema.ts` — JSON-LD (Person, WebSite) für die Startseite.
- `src/styles/global.css` — Tailwind-Import und `@theme` mit allen Design-Tokens.
- `public/` — statische Assets, `robots.txt`, `_headers` und `_redirects` (Cloudflare). `_redirects`
  leitet alte WordPress-Adressen um (`/privacy-policy/` → `/datenschutz/`).

## Konventionen

- **Farben:** `night`/`night-soft` als Grund, `cream` für Text — dieselben Werte wie auf der .com.
  Akzent `accent` (#55764A) für Linien und Flächen, `accent-light` (#6E9163) für Text, Buttons und
  Hover: Das dunklere Grün hat auf Schwarz zu wenig Kontrast für Text. Buttons sind `bg-accent-light`
  mit `text-night`.
- **Ansprache „Sie"**, anders als die .com („du"). Normale Groß-/Kleinschreibung.
- **Tailwind v4 über `@tailwindcss/vite`** (in `astro.config.mjs`), bewusst **ohne `tailwind.config.js`**:
  Farben, Fonts und Spacing gehören in den `@theme`-Block. `@astrojs/tailwind` ist der v3-Pfad und tabu.
- Design-Tokens statt Hex-Werte — `text-cream`, `bg-night`, `text-accent-light`.
- TypeScript bleibt auf `^6`: `@astrojs/check` und `typescript-eslint` können TS 7 noch nicht.
- pnpm-Einstellungen stehen in `pnpm-workspace.yaml` — pnpm ≥ 10 liest das `pnpm`-Feld der `package.json`
  nicht mehr.
- In `.prettierrc.mjs` muss `prettier-plugin-tailwindcss` **letztes** Plugin bleiben, sonst sortiert es nicht.
- Deutsch für UI-Texte und Kommentare.
- Keine Test-Suite. `pnpm check` und `pnpm build` sind das Sicherheitsnetz.

## Kontakt

Es gibt kein Kontaktformular. Alle „Erstgespräch"-Buttons sind `mailto:`-Links auf
`CONTACT.email` (coaching@…), wie auf der früheren WordPress-Seite. Impressum und Datenschutz nennen
`CONTACT.legalEmail` (host@…).

## Deployment und CI

Cloudflare Pages baut aus Git: `pnpm build` nach `dist/`, Node aus `.node-version`, kein Adapter. Die
Node-Version steht doppelt — `.node-version` für Pages, `devEngines.runtime` für die CI. Bei einem Upgrade
beide anfassen. Aktuell Node 26 (LTS).

`.github/workflows/ci.yml` läuft bei Push auf `main`, bei jedem PR und per `workflow_dispatch`:
`format:check` → `lint` → `check` → `build`. `pnpm/setup` installiert Node und pnpm und führt
`pnpm install` selbst aus. Vor dem Push lokal `pnpm format && pnpm lint && pnpm check && pnpm build`
durchlaufen lassen.

## Memory und Plugins

Claudes Memory liegt in `.claude/memory/` und wird **mitcommittet**. Den Symlink von
`~/.claude/projects/<slug>/memory` dorthin setzt der `postCreateCommand` des Dev-Containers; prüfen mit
`ls -l ~/.claude/projects/*/memory`. Weil das Verzeichnis versioniert und potenziell öffentlich ist:
**keine Secrets, Zugangsdaten oder privaten Daten Dritter** hineinschreiben.

Die Plugins stehen in `.claude/settings.json` und sind in jedem Klon aktiv. Einzelne abschalten geht nur
in `.claude/settings.local.json` (gitignored).
