# Homework 5 — Eleventy static site generator exercise

This separate exercise adapts two real pages/sections from the Homework 4 portfolio:
- Home: `/` (`src/index.njk`)
- About and Leadership: `/about/` (`src/about.njk`)

Both pages include the same `src/_includes/footer.njk`. Change the footer once, rebuild, and inspect both generated pages to see the change.

## Install and build

Requires Node.js 18 or newer.

```bash
cd ssg-exercise
npm install
npm run build
npm run start
```

Open the localhost URL printed by Eleventy, and visit `/` and `/about/`. `npm run build` writes generated HTML to `_site/`. This exercise is separate from the deployed portfolio.
