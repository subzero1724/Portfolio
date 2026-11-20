# Rafli Nur Rahman - AI & Machine Learning Engineer

A bilingual (English / Bahasa Indonesia), responsive portfolio built with React, TypeScript, Vite, Tailwind CSS, React Router, Framer Motion, and Lucide. Routes use `HashRouter`, so project pages work on GitHub Pages project sites.

## Run locally

Requires Node.js 20 or newer.

```sh
npm install
npm run dev
```

Create an optimized build with `npm run build`; preview it with `npm run preview`.

## GitHub Pages deployment

Pushing to `main` builds and publishes the site with GitHub Actions. The repository must have GitHub Pages configured to use **GitHub Actions** as its build and deployment source. The site URL is `https://subzero1724.github.io/Portfolio/`. Hash-based routes and the Vite base path are configured for project-site hosting.

## Personalize before publishing

- Add a CV at `public/documents/rafli-nur-rahman-cv.pdf` to enable the home page CV download. The button stays disabled until the file is present.
- Add the institution name in the About page.
- Verify experience and credential entries, dates, and claims before publishing. Unconfirmed entries are marked.
- Live demo URLs are not provided yet.

The contact email and GitHub/LinkedIn links provided by Rafli are configured. The CardioAI and DokuGo repositories link to the supplied URLs. The DokuGo logo is stored in `src/assets/dokugo-logo.png`.

Editable copy is in `src/i18n/en.ts` and `src/i18n/id.ts`; skill groups are in `src/data/skills.ts`. The interface defaults to English and stores language and theme preferences in `localStorage`.
