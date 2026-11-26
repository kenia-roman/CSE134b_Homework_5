# CSE 134B — Homework 5
**Kenia Roman Ortiz**

## Project Overview

This project builds upon my Homework 4 personal portfolio by integrating a custom Web Component, a live REST API, CSS theme customization, and persistent user preferences. It also includes a separate static site generator exercise using Eleventy.

**Live Website:** https://unique-kashata-3013e6.netlify.app/

**GitHub Repository:** https://github.com/kenia-roman/CSE134b_Homework_5

## Part 1 — Web Component

I created a custom `<fact-panel>` Web Component that allows visitors to discover interesting facts directly from my portfolio.

The component uses JavaScript DOM methods to create and update its interface without reloading the page.

Features include:
- A button to retrieve a new fact.
- A status message that updates dynamically.
- An external button that switches between compact and expanded views.
- An observed `compact` attribute that changes the component's appearance.
- Keyboard-accessible controls.

The component is located in the **A Moment of Curiosity** section of my portfolio.

## Part 2 — API Integration

The component connects to the Useless Facts API to retrieve random facts using asynchronous HTTP requests.

### Design Note

The goal of my component is to give visitors a fun, interactive experience while exploring my portfolio.

When a visitor clicks **Get a new fact**, the component calls the `loadFact()` function, which sends an HTTP GET request using `fetch()`.

While the request is processing, the component displays a loading message through an accessible status area.

When the request succeeds, the JSON response is parsed and validated. The fact is displayed using `textContent`, allowing the content to update without reloading the page.

If the request fails because of a network error, unsuccessful HTTP response, or invalid data, the component displays an error message and allows the visitor to try again.

The component handles these errors without affecting the rest of the portfolio.

## Part 3 — Theme Integration and User Preferences

The Web Component integrates with my portfolio's existing light and dark themes using CSS custom properties.

It also uses `localStorage` to remember whether the visitor prefers compact or expanded mode.

When the page reloads, the component restores the saved preference.

Storage operations use `try/catch` so that the component continues functioning even if browser storage is unavailable.

A `<noscript>` fallback message is provided for visitors who have JavaScript disabled.

## Part 4 — Static Site Generator

**Location:** `ssg-exercise/`

I used Eleventy (11ty) to generate two pages based on my existing portfolio:

1. Home
2. About/Leadership

Both pages use a shared footer template. This demonstrates how a static site generator allows developers to reuse common sections across multiple pages.

Changing the shared footer source and rebuilding the project updates both generated pages.

### Running the SSG Exercise

Navigate to the exercise directory:

```bash
cd ssg-exercise
```

Install dependencies:

```bash
npm install
```

Build the pages:

```bash
npm run build
```

Start the local preview:

```bash
npm run start
```

Open the local URL displayed in the terminal to view the generated pages.

Additional instructions are available in `ssg-exercise/README.md`.

## Testing and Verification

The project is designed to support the following checks:

- Web Component controls operate using mouse and keyboard.
- API responses update the component without refreshing the page.
- Loading, success, and error messages are displayed.
- Failed API requests can be retried.
- The component remains readable in light and dark modes.
- Compact-mode preferences persist after reloading.
- The portfolio remains usable when JavaScript is disabled.
- Both Eleventy-generated pages display the same shared footer.

## Project Structure

```text
Form/
├── index.html
├── fact-panel.js
├── fact-controls.js
├── style.css
├── theme.js
├── form-no-js.html
├── form-with-js.html
├── form.js
├── media/
├── ssg-exercise/
│   ├── src/
│   ├── package.json
│   └── README.md
├── README.md
└── links.txt
```

## Deployment

The portfolio is deployed using Netlify.

**Website:** https://unique-kashata-3013e6.netlify.app/

The Eleventy exercise is included in the GitHub repository as a separate project and can be built and previewed locally.