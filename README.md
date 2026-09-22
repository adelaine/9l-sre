# 9L-SRE documentation

The Astro Starlight documentation site for Nine Lives: Spectral Reliability Engineering.

## Local development

Use Node.js `^22.22.3 || ^24.16.0 || >=26.3.0` and npm 11.19.0.

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro (normally `http://localhost:4321`).

## Content

Edit Markdown in `src/content/docs/`. The sidebar is configured in `astro.config.mjs`; the world-building appendix appears last. Use site routes such as `/core/` in content links.

The site follows the [Starlight setup guide](https://starlight.astro.build/manual-setup/). ESLint and Prettier are adapted from `portfolio-astro`, including type-aware TypeScript checks, Astro accessibility rules, and four-space indentation. React and Tailwind integrations are not needed for this basic documentation site.

## Checks and builds

```sh
npm run format
npm run validate
npm run build
npm run preview
```

`validate` runs ESLint, Prettier checks, and Astro diagnostics. The build generates the static site and search index in `dist/`. Deployment and a public site URL have not been configured.
