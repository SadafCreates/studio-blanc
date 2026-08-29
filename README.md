# Studio Blanc — A Curated Edit

A React (Vite) landing page for a fictional monochrome-editorial boutique, replacing an earlier portfolio piece (Terra & Sage) with a stronger, more distinctive design direction.

**[Live Demo](#)** — replace with your Netlify/Vercel URL after deploying

## About

Studio Blanc is an imagined boutique built around restraint — black, white, and cream, with a single crimson accent used sparingly. The concept: a small, tightly curated edit rather than a large inventory, reflected directly in the site's minimal, editorial tone.

## Design decisions

- **Palette** — near-black, white, warm cream, and one crimson accent, chosen for a fashion-editorial feel rather than a soft or "cozy" boutique look.
- **Typography** — Bebas Neue (tall, condensed display type, evoking fashion-magazine mastheads) paired with Inter for body copy.
- **Signature moment: the Collection section.** Product images sit in true grayscale by default and reveal full color on hover — a literal, interactive execution of "monochrome" as a concept, not just a static color palette. The same idea extends to the placeholder state (black → crimson on hover) so the effect is intact even before real product photography is added.
- **Structure** — Hero → Marquee → Philosophy → Collection (signature) → Lookbook → Location/Hours → Footer.

## Tech

- React 18 + Vite
- Component-based structure (`Hero`, `Marquee`, `Philosophy`, `Collection`, `Lookbook`, `Location`, `Footer`, `Reveal`)
- Custom `useReveal` hook (IntersectionObserver) — same lightweight, dependency-free approach used across this portfolio
- Product and lookbook content data-driven from `src/data/products.js`
- Plain CSS with custom properties for the design token system

## Run locally

\`\`\`
npm install
npm run dev
\`\`\`

## Adding real photography

In `src/data/products.js`, each item's `image` field defaults to `null`, rendering a styled placeholder. Drop a photo into `public/images/` and set the field to `/images/filename.jpg` — no other code changes needed. Product photos should be shot in a way that still reads well in grayscale, since the hover effect relies on desaturating them by default.

## What I'd add next

- Real product photography
- A simple cart/inquiry flow
- An actual booking system for the "by appointment" visits

---
Built by [Sadaf](https://github.com/SadafCreates)
