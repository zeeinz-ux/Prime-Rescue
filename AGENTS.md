# AGENTS.md

Landing page for **Prima Rescue** (24-hour ambulance service, Gunung Sindur, Bogor). Implemented as a single-page Next.js app.

## Source of truth
- `PRIMA_RESCUE_LANDING_PAGE_DOCUMENTATION.md` is the authoritative spec (design system, sections, content, SEO, roadmap). Read it before changing behavior; AGENTS.md is only a quick reference.

## Stack (working — verified with `npm run build`)
- Next.js 16.3.5 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS v4.
- **Tailwind v4 has no `tailwind.config.js`.** Design tokens are declared via `@theme` in `app/globals.css` (`emergency-red`, `navy-dark`, `clinical-white`, `medical-green`, `slate-gray`, `border-light`, `background-soft`). Add tokens in `@theme`, not in a config file.
- Font: **Inter only** via `next/font/google` in `app/layout.tsx` (variable `--font-inter`). Spec forbids Poppins.
- Commands: `npm run dev`, `npm run build` (local, no report), `npm start`, `npm run lint` (eslint).

## File layout (single-page, no routes beyond `/`)
- `app/page.tsx` assembles the sections in spec order (Header is in `app/layout.tsx`, not `page.tsx`).
- Section components in `components/sections/` (Hero, QuickInfo, Services, WhyChooseUs, ServiceArea, HowItWorks, Faq, ContactCta, Footer).
- Shared UI in `components/ui/` (`Container` = max-w 1200px, `SectionHeading`, `Icon`, `WhatsAppButton`). Watch for `IconName` values used in data files.
- **Copy/site strings live in `data/`** (`businessInfo.ts` = single source for phone `085770918098` / wa.me link `https://wa.me/6285770918098`, address, hours; `services.ts`; `faqs.ts`) — don't hardcode phone/address in components.
- SEO: `app/sitemap.ts`, `app/robots.ts`, JSON-LD via `components/seo/JsonLd.tsx`.

## Copy and language
- All site copy is **Bahasa Indonesia**.
- Brand voice: confident, clear, compassionate. Avoid corporate jargon and stilted formal Indonesian (spec §2.5 has explicit good/bad examples).
- Use concrete specifics over vague claims: "respons 15-30 menit", not "cepat".

## Design rules (spec emphasizes these)
- 8px spacing rhythm, max container width 1200px, card radius 8px (`rounded-lg`), button height ≥44px (`h-11`).
- Never use all-caps section labels; use Title Case.
- Sections use alternating `bg-white` / `bg-clinical-white` / `bg-background-soft`.
- One `<h1>` per page (in Hero); H2/H3 hierarchy without skipping levels.
- Anti-patterns to avoid: generic/AI-default palettes, stock hero photos (this repo uses a custom SVG `AmbulanceIllustration`), medical jargon.