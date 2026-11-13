# carinahillenbrand.de

Statische Website mit [Astro](https://astro.build) und [Tailwind CSS](https://tailwindcss.com).
Schwesterprojekt von carinahillenbrand.com: gleicher Aufbau und Stil, Akzentfarbe Salbeigrün.

## Entwicklung

Node 26 und pnpm — im Dev-Container bereits eingerichtet.

```bash
pnpm install
pnpm dev      # http://127.0.0.1:4337
```

`build` · `check` · `lint` · `format` — siehe `scripts` in der `package.json`.

## Deployment

Cloudflare Pages baut aus Git: `pnpm build`, Output `dist`. Kein Adapter, der Output ist rein statisch.

## Lizenz

[MIT](./LICENSE)
