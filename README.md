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
- The application login remains at `https://app.msambizi.school/login`.
- Presentation/contact links use the existing `support@msambizi.school` mailbox; confirm mailbox ownership and deliverability before launch.
- The homepage uses original CSS-built architectural artwork. No photography or external image assets are required.
- Privacy, terms, and security destinations are omitted until real policy pages are available.
