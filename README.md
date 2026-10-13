# Prime Rescue

Landing page layanan ambulans 24 jam di Gunung Sindur, Bogor.
Live: **https://primerescue.web.id**

Dibangun dengan Next.js 16 (App Router), React 19, TypeScript, dan Tailwind CSS v4.

## Fitur

- Single page dengan 9 section: Hero, Quick Info, Layanan, Kenapa Kami, Galeri, Area Layanan, Cara Kerja, FAQ, CTA — plus Header, Footer, dan tombol WhatsApp melayang yang tampil global.
- Dark mode dengan toggle di Header (tersimpan di `localStorage`, tanpa flash saat load).
- Responsif mobile-first, lebar kontainer maksimal 1200px.
- SEO lokal: metadata, sitemap, robots.txt, JSON-LD (`EmergencyService`), OpenGraph/Twitter Card.
- Analitik: Google Analytics dengan pelacakan klik WhatsApp/telepon dan kedalaman scroll.

## Stack

| Bagian | Teknologi |
|---|---|
| Framework | Next.js 16.3.5 (App Router) |
| Bahasa | TypeScript |
| UI | React 19 |
| Styling | Tailwind CSS v4 (token `@theme` di `app/globals.css`, tanpa `tailwind.config.js`) |
| Font | Inter (`next/font/google`) |

## Menjalankan Proyek

```bash
npm install
npm run dev        # server pengembangan
npm run build      # build produksi (static export ke folder out/)
npm run lint       # cek kode, harus bersih sebelum push
```

Verifikasi sebelum push:

```bash
npm run lint && npm run build
```

Aktifkan analitik secara lokal bila perlu (opsional, tanpa ini tracking diam):

```bash
# .env.local (jangan di-commit)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Konvensi Penting

- **Sumber data tunggal:** `data/businessInfo.ts` (diekspos sebagai `BUSINESS`) untuk WhatsApp, telepon, alamat, dan jam operasional. Jangan hardcode data kontak di komponen.
- **Brand:** selalu "Prime Rescue", bukan "Prima".
- **Konten:** Bahasa Indonesia, header section Title Case.
- `public/og.png` adalah gambar raster dengan teks brand — bila brand/nomor/tagline berubah, gambarnya harus dibuat ulang, bukan cuma edit kode.

## Deployment

Hanya via **GitHub Pages + custom domain** (`primerescue.web.id`):

- Push ke branch `main` memicu workflow `.github/workflows/nextjs.yml` (build `next build` → upload folder `out/`).
- `next.config.ts` memakai static export (`output: "export"`) dan **tanpa `basePath`** karena domain diserve dari root. Jangan tambahkan `basePath` atau opsi `static_site_generator: next`.
