# Stone & Flame — Website v2

**Japanese Bar & Restaurant · Salamanca, Hobart**

A production-grade Next.js 15 website with cinematic design, parallax effects, animated counters, scroll reveals, custom cursor, and an in-browser PDF menu viewer.

## Tech Stack

- **Next.js 15** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4** (CSS-first config via `@theme`)
- **Google Fonts** — Playfair Display, Cormorant Garamond, Outfit

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Cinematic homepage — parallax hero, marquee, animated counters, reveal animations |
| `/about` | Brand story & philosophy |
| `/menu` | Digital menu + in-browser PDF viewer with download button |
| `/reservations` | Booking CTA, FAQ, hours |
| `/contact` | Full contact & map |

## Menu PDF

Place your menu PDF at:
```
public/pdf/menu.pdf
```
The `/menu` page will embed it inline with:
- Toggle between **Digital Menu** (interactive list) and **Original PDF** view
- Download button (`StoneAndFlame_Menu.pdf`)
- Open in new tab option
- A4-proportioned embed container

## Design System

All design tokens are in `app/globals.css` under `@theme {}`:
- `--color-charcoal: #0e0c0a` — deepest background
- `--color-bone: #f5f0e8` — primary text
- `--color-bronze: #b8922e` — signature accent
- `--color-ember: #c4622a` — warm fire tone
- Film grain overlay via CSS `body::before`
- Custom cursor (desktop) via `.cursor-dot` / `.cursor-ring`
- Intersection Observer scroll reveals via `.reveal` class
- Marquee strip via `.marquee-track` animation
- Counter animation hook for stats section

## Key Things to Update

1. **Reservation link** — replace `/reservations` with your actual booking system URL
2. **Phone / email** — update in `components/Footer.tsx` and `app/contact/page.tsx`
3. **Google Maps embed** — add iframe in `app/contact/page.tsx`
4. **Photography** — replace Unsplash URLs with your own images in `app/page.tsx` and `app/about/page.tsx`
5. **Menu PDF** — ensure `public/pdf/menu.pdf` exists

## Deployment

```bash
npm run build
npm start
```

Compatible with Vercel, Netlify, or any Node.js host.
