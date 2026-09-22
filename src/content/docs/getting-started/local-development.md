---
title: Local development
description: Run the documentation site locally and understand the application setup status.
---

The documentation site runs with Astro Starlight. Core, ClientJ, and ClientL are still planned applications; their startup instructions will be added with their implementations.

## Run the documentation site

Use Node.js `^22.22.3 || ^24.16.0 || >=26.3.0` and npm 11.19.0. From the `9l-sre` directory:

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro, normally `http://localhost:4321`. The development server updates the page as you edit the documentation.

## Check and build

```sh
npm run format
npm run validate
npm run build
npm run preview
```

`format` applies Prettier. `validate` checks ESLint rules, formatting, and Astro diagnostics. `build` generates the static site and search index in `dist/`; `preview` serves that build locally.

ESLint and Prettier follow the applicable settings from `portfolio-astro`, including four-space indentation, type-aware TypeScript checks, and Astro accessibility rules.

## Repository layout

The current workspace keeps the four repositories side by side:

```text
Repos/
├── 9l-sre/          # Astro Starlight documentation site
├── 9l-sre-core/     # Planned Spring Boot backend
├── 9l-sre-clientj/  # Planned Angular client
└── 9l-sre-clientl/  # Planned React client
```

Documentation source lives in `9l-sre/src/content/docs/`. Each page has a title and description in YAML frontmatter. The content collection is configured in `src/content.config.ts`, and sidebar order is defined in `astro.config.mjs`. Use site routes such as `/core/` when linking between pages.

## Setup information to add with the code

| Component | Required documentation                                                                                       |
| --------- | ------------------------------------------------------------------------------------------------------------ |
| Core      | Java version, build tool, database setup, required configuration, startup command, and verification request. |
| ClientJ   | Node.js version, package manager, API configuration, startup command, and checks.                            |
| ClientL   | Node.js version, package manager, API configuration, startup command, and checks.                            |

Record actual ports and environment variable names from the implementation. Include an example configuration with safe demo values, and document the in-memory H2 startup and seeding behavior described in the [Core overview](/core/#minimum-issue-flow).

Once the applications exist, verify Core first, then start either client against it. Document running both clients together only after their local configuration has been checked.
