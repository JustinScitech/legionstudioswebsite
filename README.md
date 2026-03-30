# Legion Studios Website

Official website for **Legion Studios**, an independent Roblox game studio.

## What’s in here

A single-page marketing site built with React and Vite: hero, stats, parallax banner, games carousel (Roblox thumbnails via API), about section, team credentials (Microsoft, Tesla, Voldex / [Driving Empire](https://www.roblox.com/games/3351674303/Driving-Empire-Car-Racing), Waterloo, U of T), and contact footer with Discord and X links.

## Tech stack

- **React** + **TypeScript**
- **Vite** for dev and production builds
- **Tailwind CSS** for styling (black + white theme)
- **Framer Motion** for animations
- **Swiper** for the games carousel
- **Vercel** serverless route at `api/games.ts` for Roblox game data and thumbnails

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`). The `/api/games` route only runs on Vercel; locally the app uses fallback game data with Roblox CDN thumbnails.

## Build

```bash
npm run build
npm run preview   # optional: preview production build
```

## Deploy

Connect the repo to [Vercel](https://vercel.com) and deploy. Vercel will run `npm run build` and serve the `dist` output; API routes in `/api` are deployed as serverless functions.

## Project layout

- `src/components/` — layout (navbar, footer), page sections, UI (e.g. game cards)
- `src/hooks/` — data hooks (e.g. games fetch)
- `public/` — static assets including the Legion Studios logo and `public/logos/` (Microsoft mark, Tesla & Roblox paths from [Simple Icons](https://simpleicons.org/) (MIT), plus custom university-style marks)

Trademarks and university crests belong to their respective owners; the simplified marks in `public/logos/` are for display only.
