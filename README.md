# ShineWorks Mobile Detailing — Website

A premium, conversion-focused, mobile-first website for a mobile auto
detailing business. Built with React, TypeScript, Tailwind CSS, and Vite.
This is one of three niche-specific sites generated from a shared
local-service-business template (see the sibling `genric`, `genric-hvac`,
and `genric-pest` projects).

## Quick start

```bash
npm install
npm run dev       # local dev server
npm run build     # production build (outputs to dist/)
npm run preview   # preview the production build
npm run lint       # oxlint
```

Deploys to Vercel (or any static host) out of the box — `npm run build`
produces a static `dist/` folder.

## Customizing

Everything business-specific is centralized so you can re-brand this
site without touching component code:

| What to change | Where |
|---|---|
| Business name, tagline, phone, email, hours, CTA copy ("Book Now" / "Request My Appointment"), nav, trust indicators, service area cities | [`src/config/site.ts`](src/config/site.ts) |
| Services (icons + copy) | [`src/data/services.ts`](src/data/services.ts) |
| "Why Choose Us" benefits | [`src/data/whyChooseUs.ts`](src/data/whyChooseUs.ts) |
| "How It Works" steps | [`src/data/process.ts`](src/data/process.ts) |
| FAQ questions/answers | [`src/data/faq.ts`](src/data/faq.ts) |
| Testimonials (demo placeholders — replace with real reviews) | [`src/data/testimonials.ts`](src/data/testimonials.ts) |
| Project gallery images + captions | [`src/data/images.ts`](src/data/images.ts) |
| Brand colors (currently charcoal/near-black + crimson red), fonts | `@theme` block in [`src/index.css`](src/index.css) |
| Page `<title>`, meta description, Open Graph, structured data | [`index.html`](index.html) |
| Contact form's service dropdown | pulled automatically from `src/data/services.ts` |

## Notes

- **Booking form**: client-side validated, but intentionally not wired to
  a backend. Connect it in `src/components/sections/Contact.tsx` inside
  `handleSubmit` (e.g. an API route, a booking platform's API, or a
  serverless function).
- **Address**: since this is a mobile service, the "Address" field in
  `src/config/site.ts` reads "Mobile Service — We Come to You" instead of
  a street address. Update if the business also has a fixed shop location.
- **Testimonials**: the three testimonials shipped are clearly-labeled
  demo placeholders, not real reviews. Replace with verified customer
  reviews before launch.
- **Structured data**: a commented-out `LocalBusiness` JSON-LD block is
  in `index.html` with bracket placeholders. Fill in verified real
  business details and uncomment it before publishing.
- **Images**: placeholder photography is pulled from Unsplash. Swap the
  URLs in `src/data/images.ts` for real project photos.
