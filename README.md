# Msambizi Institutional Website

Nuxt 3 marketing website for Msambizi, focused exclusively on universities and colleges. The homepage presents the institutional vision and invites decision-makers to request a presentation; detailed product workflows and feature claims are kept out of the public narrative.

## Develop

```bash
npm install --ignore-scripts
node node_modules/esbuild/install.js
npm run dev
```

## Build (static)

```bash
npm run generate
```

Output: `.output/public` — deploy to any static host or to the domain root.

## Notes

- The Nuxt SSR and static generation foundation is retained.
- No application screenshots, product modules, detailed workflows, partnerships, statistics, or pricing claims are included.
- The public copy is adapted from Msambizi's current website for a university and college audience; school and tutor messaging is intentionally excluded.
- The current brand palette, Inter typography, and official Msambizi wordmark variants are used throughout.
- `/login` is an informational workspace-access placeholder; authentication is not implemented.
- The homepage uses five sections to communicate the institutional learning proposition and a proposed engagement journey.
- The homepage hero uses a CSS-built, explicitly illustrative laptop-and-phone concept rather than a live product screenshot; its academic conversation is neutral and contains no school-level references.
- Presentation/contact links use the existing `support@msambizi.school` mailbox; confirm mailbox ownership and deliverability before launch.
- The homepage uses local logo assets and original CSS/SVG illustrations. No live product screen or photography is presented.
- Privacy, terms, and security destinations are omitted until real policy pages are available.
