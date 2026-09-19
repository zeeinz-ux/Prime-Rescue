# Prima Rescue — Ambulans 24 Jam Gunung Sindur Bogor

Landing page satu halaman (single-page) untuk layanan **ambulans 24 jam Prima Rescue** di Gunung Sindur, Bogor. Dibangun dengan **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**, dioptimalkan untuk SEO lokal & konversi WhatsApp.

## Fitur

- Satu halaman (`/`) dengan 9 section: Hero, Quick Info, Layanan, Kenapa Kami, Area Layanan, Cara Kerja, FAQ, CTA Hubungi, Footer.
- **Header transparan** (navy di atas hero) yang berubah jadi **blur + teks putih saat scroll** (tombol WhatsApp & cross logo ikut putih, kotak logo tetap merah).
- **Responsive penuh**: breakpoint `sm` / `md` / `lg` — mobile hamburger menu, grid 1→2→3 kolom, container max 1200px.
- **SEO lokal**: metadata dinamis (`Ambulans 24 Jam Prima Rescue Gunung Sindur`), `sitemap.ts`, `robots.ts`, JSON-LD (LocalBusiness/EmergencyService), OpenGraph + Twitter Card di `app/layout.tsx`.
- **Analytics**: Google Analytics + pelacakan klik tombol WhatsApp (`lib/gtag.ts`) + Scroll Tracking.
- Foto armada asli (rasio 2:1) dari `public/images`.

## Stack

| Bagian | Teknologi |
|---|---|
| Framework | Next.js 16.3.5 (App Router, Turbopack) |
| Bahasa | TypeScript |
| UI | React 19 |
| Styling | Tailwind CSS v4 — token di `@theme` `app/globals.css` |
| Font | Inter (`next/font/google`) |
| SEO | Metadata API Next + JSON-LD |

> **Catatan Tailwind v4**: tidak ada `tailwind.config.js`. Design token dideklarasikan lewat `@theme` di `app/globals.css` (`emergency-red`, `navy-dark`, `clinical-white`, `medical-green`, `slate-gray`, `border-light`, `background-soft`). Tambahkan token di `@theme`, bukan di config.

## Struktur Folder

```
app/
  layout.tsx          # metadata SEO, Header (global), body
  page.tsx            # merakit semua section (urutan sesuai spec)
  globals.css         # @theme token + Tailwind v4
  sitemap.ts          # sitemap.xml
  robots.ts           # robots.txt
components/
  sections/           # Header, Hero, QuickInfo, Services, WhyChooseUs,
                      # ServiceArea, HowItWorks, Faq, ContactCta, Footer
  ui/                 # Container, SectionHeading, Icon, WhatsAppButton
  seo/                # JsonLd, GoogleAnalytics, ScrollTracking
data/
  businessInfo.ts     # single source: nama, WA 085770918098, link wa.me, alamat, jam
  services.ts         # daftar layanan
  faqs.ts             # FAQ
  gallery.ts          # galeri armada
lib/
  gtag.ts             # Google Analytics + trackWhatsAppClick
public/
  images/             # foto armada (rasio 2:1)
```

## Kontak & Data

Semua kontak berasal dari **satu sumber** `data/businessInfo.ts` — jangan hardcode nomor/alamat di komponen:

- WhatsApp: `0857-7091-8098` (`https://wa.me/6285770918098`)
- Link dilacak lewat `trackWhatsAppClick()` (`lib/gtag.ts`)

## Menjalankan

```bash
npm install        # atau pnpm install / yarn
npm run dev        # development  → http://localhost:3000
npm run build      # production build (Next 16, Turbopack)
npm run start      # serve hasil build
npm run lint       # eslint (harus 0 error sebelum push)
```

Setelah mengubah kode, biasakan `npm run lint && npm run build` sebelum commit/push. Kalau hasil visual di browser masih lama, hard-refresh (Ctrl+Shift+R) — build Next & cache browser diatur ulang.

## Deploy

Proyek siap di-deploy ke **Vercel** (cara termudah untuk Next.js) atau hosting yang support Node/Next. Untuk **GitHub Pages**, butuh static export (`output: "export"`) + GitHub Actions — lihat catatan deploy di bawah.

### Vercel (recommended)

Import repo, pastikan framework presets: `Next.js` (`build: next build`, `output: next start`).

### GitHub Pages

```
output: "export"     # di next.config.ts
```

Build jadi folder `out/` statis — tempel ke branch `gh-pages` / GitHub Pages betah static hosting. Catatan:
- `next/image` perlu `unoptimized: true` (Pages tidak punya optimizer image).
- Baik via GitHub Actions `setup-node` + `npm run build` + deploy `out/` ke `gh-pages`.

## Teknologi Pendukung

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
