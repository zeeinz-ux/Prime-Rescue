# STRUKTUR FOLDER & FILE — LANDING PAGE PRIMA RESCUE

Struktur aktual proyek (sudah di-scaffold & diimplementasikan). Referensi: `PRIMA_RESCUE_LANDING_PAGE_DOCUMENTATION.md`.

> Catatan: scaffold memakai `--no-src-dir`, jadi `app/ components/ data/` berada di root, bukan di dalam `src/`. Struktur ini sudah live, bukan rencana.

## 1. Struktur Aktual

```
Prima Rescue/
│
├── app/                            # App Router
│   ├── layout.tsx                  # Metadata SEO, font Inter, JSON-LD, Header/Footer, skip-link
│   ├── page.tsx                    # Satu halaman = merakit semua section
│   ├── globals.css                 # @import tailwindcss + @theme (design tokens)
│   ├── sitemap.ts                  # Generate sitemap.xml dinamis
│   ├── robots.ts                   # Generate robots.txt dinamis
│   └── favicon.ico
│
├── components/
│   ├── sections/                   # Header, Hero, QuickInfo, Services, WhyChooseUs,
│   │                               # ServiceArea, HowItWorks, Faq, ContactCta, Footer
│   ├── ui/                         # Container, SectionHeading, Icon, WhatsAppButton,
│   │                               # AmbulanceIllustration (SVG custom)
│   └── seo/
│       └── JsonLd.tsx              # LocalBusiness schema (dari businessInfo.ts)
│
├── data/                           # Konten terpusat (Bahasa Indonesia)
│   ├── businessInfo.ts             # Single source: nama, alamat, telp, wa.me, jam
│   ├── services.ts                 # 4 layanan
│   └── faqs.ts                     # 6 Q&A accordion
│
├── public/                         # (kosong setelah boilerplate dibersihkan)
│
├── package.json                    # commands: dev / build / start / lint
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
└── postcss.config.mjs
```

## 2. Catatan Penting

- **Tailwind v4** — tidak ada `tailwind.config.js`. Design tokens (color `emergency-red`, `navy-dark`, dll.) dideklarasikan via `@theme` di `app/globals.css`. Tambahkan token di sana, bukan di config.
- **Satu halaman.** `app/page.tsx` menyusun: Hero → QuickInfo → Services → WhyChooseUs → ServiceArea → HowItWorks → Faq → ContactCta. Header & Footer dipasang di `layout.tsx` (bukan di page). Nav memakai anchor `#beranda #layanan #keunggulan #kontak`.
- **`data/businessInfo.ts` adalah single source of truth** untuk 085770918098 / wa.me/6285770918098, alamat, dan jam operasional. Semua komponen (dan JSON-LD) membaca dari file ini — jangan hardcode nomor/alamat di section.
- **Ikon**: `components/ui/Icon.tsx` memakai SVG inline (tanpa library) — nama ikon (`IconName`) disesuaikan dengan pemakaian di data file.
- **Hero** memakai ilustrasi SVG custom (`AmbulanceIllustration.tsx`), bukan stock photo.

## 3. Verifikasi

- `npm run build` — OK (semua route statis: `/`, `/robots.txt`, `/sitemap.xml`).
- `npm run lint` — eslint, harus 0 error/warning.