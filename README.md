# JewelSliding

JewelSliding is a Next.js site that wraps a browser-based sliding gem puzzle game.

## Project Shape

- `app/` contains the marketing site, SEO pages, blog, sitemap, and collection landing pages
- `public/game/` contains the embedded standalone gem puzzle loaded by the `/` and `/play` iframes
- `app/lib/gameData.ts` is the shared catalog for challenge tracks used by the app layer
- `public/levels/` stores the playable puzzle images used by the embedded game

## Local Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Useful Commands

```bash
npm run dev
npm run build
npm run lint
```

## Notes

- The embedded game is served from `public/game/index.html`
- Deep links such as `/play?collection=8&puzzle=4` pass challenge state into the iframe game
- App-side challenge metadata should stay aligned with the live embedded game behavior
