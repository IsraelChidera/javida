# JAVIDA'25 — Jane & Victor's Wedding Website

Built with Next.js 15 (App Router) and Tailwind CSS v4.

## Editing content

All wedding details — names, date, venue, families, contact, gallery photos (with alt text) and directions — live in **`lib/wedding.js`**. Every section, the SEO metadata and the structured data read from that file, so update it there and the whole site follows.

## Structure

```
app/                 routes + SEO (layout metadata, sitemap.js, robots.js, manifest.js)
components/sections/ page sections (Hero, Details, Families, Gallery, DirectionsGuide, …)
components/ui/       reusable primitives (Button, Container, SectionHeading, Reveal, Ornament)
components/widgets/  global widgets (MusicToggle)
lib/wedding.js       content / single source of truth
```

## Environment

Set `NEXT_PUBLIC_SITE_URL` to the production domain (defaults to `https://javida.vercel.app`) so canonical URLs, Open Graph images and the sitemap resolve correctly.

## Scripts

```bash
npm run dev     # local development
npm run build   # production build
npm start       # serve the production build
```
