# CSE 134B Homework 5 — Kenia Roman Ortiz

This repository copies the Homework 4 portfolio and adds a reusable custom element, a live JSON API, theme variables, and a saved compact-view preference. The main deployed site is the root `index.html`; the component is in the **A Moment of Curiosity** section (`#curiosity`). Existing Homework 4 forms and theme switching are preserved.

## Run the portfolio

Serve the repository root through a local web server (for example `python3 -m http.server 8000`) and open `http://localhost:8000/`. The API requires network access. Deploy this portfolio as a **new** site rather than replacing Homework 4.

## Component design note

A visitor wants to explore a new fact while browsing the portfolio. Clicking **Get a new fact** in `<fact-panel>` invokes `loadFact()`, sets an accessible `role="status"` message to loading, and sends a GET request to the Useless Facts JSON endpoint. The code checks `response.ok`, parses JSON, verifies a nonempty `text` string, and uses `textContent` to update the fact without reloading. On success the status reports success. On failure it reports the problem, keeps the portfolio usable, and offers **Try again**. The button is re-enabled in `finally`.

An external **Switch to compact view** button toggles the `compact` attribute on `<fact-panel>`. `observedAttributes` and `attributeChangedCallback` respond, while Shadow DOM CSS hides or reveals details. The preference is stored under `hw5-fact-panel-mode`; reads and writes use try/catch, validate stored values, and work on the current page even if storage fails. The component receives theme colors via CSS custom properties defined in `style.css`, including fallbacks. A `<noscript>` message supplies a fallback when JavaScript is disabled.

## Static site generator exercise

Located at [`ssg-exercise/`](ssg-exercise/). It adapts the existing **Home** and **About/Leadership** content into two generated pages using Eleventy and one shared footer. See [`ssg-exercise/README.md`](ssg-exercise/README.md) for dependency installation, build, preview, and verification steps.

## Verification checklist

- Keyboard-test both component buttons and the theme switch; verify visible focus.
- Use DevTools Network to confirm the API response and displayed fact match.
- Simulate offline mode, trigger an error, restore network, and retry without reloading.
- Switch both themes and check text/button contrast.
- Toggle compact mode, reload, and verify persistence in both states.
- Temporarily simulate localStorage read/write exceptions and confirm the control still works.
- Disable JavaScript and check navigation and portfolio content.
- In `ssg-exercise/`, run `npm install`, `npm run build`, `npm run start`, and confirm both pages share the footer.

## Submission

Create a new GitHub repository and a new deployment. Replace the placeholders in `links.txt` with (1) GitHub repository URL, (2) deployed homepage URL, and (3) deployed component page URL (the homepage again in this implementation). Upload only `links.txt` to Gradescope.
