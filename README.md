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
- The homepage presents the learning journey, academic approach, institutional considerations, a free-presentation campaign banner, and the presentation request path.
- The homepage hero uses a contextual University of Malawi student photograph and an explicitly illustrative campaign message, not a live product screenshot.
- Presentation/contact links use the existing `support@msambizi.school` mailbox; confirm mailbox ownership and deliverability before launch.
- The homepage uses local logo assets, original CSS/SVG illustrations, and contextual student photographs with source credits and no implied institutional endorsements.
- University of Malawi photograph: “UoM Students.jpg” by Putsud, via Wikimedia Commons (https://commons.wikimedia.org/wiki/File:UoM_Students.jpg), under the Creative Commons Attribution-Share Alike 4.0 International license.
- Free-presentation banner photograph: Kampus Production via Pexels (https://www.pexels.com/photo/attentive-young-black-groupmates-using-laptop-while-preparing-for-exams-with-anonymous-teacher-5940713/), available under the Pexels license.
- Privacy, terms, and security destinations are omitted until real policy pages are available.
