# AGENTS.md

Single-page landing page for **Prime Rescue** (24-hour ambulance, Gunung Sindur, Bogor). Next.js 16.3.5 (App Router) + React 19 + TypeScript + Tailwind CSS v4. No `src/` dir (`app/`, `components/`, `data/`, `lib/` at root).

Spec: `PRIME_RESCUE_LANDING_PAGE_DOCUMENTATION.md` is the product/design authority, but it is stale in places (says Next 14, `tailwind.config.js`, Vercel) — **where it conflicts with code/config, trust the code**.

## Commands

- `npm run dev` / `npm run build` / `npm start` / `npm run lint` — no test, typecheck, or format scripts.
- Verify before push: `npm run lint && npm run build`.

## Gotchas (do not "fix" these)

- `next.config.ts`: `output: "export"`, `trailingSlash`, `images.unoptimized` apply **only when `NODE_ENV=production`**. Dev has no export; prod `next build` writes `out/` for GitHub Pages (see `.github/workflows/nextjs.yml`: builds on push to `main`, uploads `./out`). **No `basePath`** — the site is served from root via custom domain `primerescue.web.id` (see `public/CNAME`); never re-add `basePath: "/Prime-Rescue"`, and keep `static_site_generator: next` out of the workflow (it auto-injects basePath and breaks assets on a custom domain).
- Tailwind v4: **no `tailwind.config.js`**. Tokens live in `app/globals.css` (`@theme`: `emergency-red`, `navy-dark`, `clinical-white`, `medical-green`, `slate-gray`, `border-light`, `background-soft`).
- Path alias `@/*` maps to repo root (`./`), per `tsconfig.json`.
- Analytics is env-gated: `NEXT_PUBLIC_GA_MEASUREMENT_ID` in gitignored `.env.local`; `lib/gtag.ts` stays silent when unset or `G-XXXXXXXXXX`. Never commit env files.

## Architecture

- `app/page.tsx` order is canonical: Hero → QuickInfo → Services → WhyChooseUs → Gallery → ServiceArea → HowItWorks → Faq → ContactCta (each section wrapped in `FadeIn`). Header, Footer, `FloatingCta`, `JsonLd`, `GoogleAnalytics`, `ScrollTracking` live in `app/layout.tsx`, not in `page.tsx`.
- `data/businessInfo.ts` (+ `services.ts`, `faqs.ts`, `gallery.ts`) is the single source of truth — import `BUSINESS`, never hardcode WhatsApp/phone/address/hours in components. Track engagement via `trackWhatsAppClick` / `trackPhoneClick` / `trackScrollDepth` in `lib/gtag.ts`.
- Shared UI: `components/ui/` (`Container` = `max-w-[1200px]` page container, `SectionHeading`, `WhatsAppButton`, `FadeIn`); SEO in `components/seo/` + `app/sitemap.ts` / `app/robots.ts` with `metadataBase https://primerescue.web.id` and `public/og.png`.

## Content & design rules

- **Bahasa Indonesia**, compassionate and concrete (e.g. "respons 15-30 menit"); Title Case section headers; **Inter only** (`next/font/google` in `app/layout.tsx`).
- Buttons `h-11` minimum, cards `rounded-lg`, alternate section backgrounds (`bg-white` / `bg-clinical-white` / `bg-background-soft`).
