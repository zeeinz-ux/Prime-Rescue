# AGENTS.md

Landing page for **Prima Rescue** (24-hour ambulance service, Gunung Sindur, Bogor). Single-page Next.js App Router app.

## Source of Truth
- `PRIMA_RESCUE_LANDING_PAGE_DOCUMENTATION.md` is the authoritative spec. Read it before changing behavior.

## Stack & Commands
- Next.js 16.3.5, React 19, TypeScript, Tailwind CSS v4 (`--no-src-dir`: files in root `app/`, `components/`, `data/`).
- **Tailwind v4 has no `tailwind.config.js`.** Declare design tokens via `@theme` in `app/globals.css`.
- Font: **Inter only** (`next/font/google` in `app/layout.tsx`).
- Commands: `npm run dev`, `npm run build`, `npm start`, `npm run lint`.

## Architecture & Conventions
- Single-page (`app/page.tsx` assembles sections: Hero → QuickInfo → Services → WhyChooseUs → ServiceArea → HowItWorks → Gallery → Faq → ContactCta). Header & Footer are in `app/layout.tsx`.
- **`data/businessInfo.ts` is the single source of truth** for phone (`085770918098`), WhatsApp (`https://wa.me/6285770918098`), address, and hours. Never hardcode contact details in components.
- Language: **Bahasa Indonesia** (compassionate, clear, concrete specifics like "respons 15-30 menit").
- Design rules: 8px spacing rhythm, max container width 1200px, card radius `rounded-lg`, button height ≥44px (`h-11`), Title Case section headers, alternating background colors (`bg-white` / `bg-clinical-white` / `bg-background-soft`), custom SVG `AmbulanceIllustration` (no stock photos).
