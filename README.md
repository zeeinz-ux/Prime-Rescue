# Prima Rescue

Landing page layanan ambulans 24 jam Prima Rescue di Gunung Sindur, Bogor. Dibangun dengan Next.js 16 (App Router), TypeScript, dan Tailwind CSS v4.

## Fitur

- Single-page dengan 9 section: Hero, Quick Info, Layanan, Kenapa Kami, Area Layanan, Cara Kerja, FAQ, CTA, Footer.
- Header dengan efek transisi: transparan di posisi atas, menjadi blur saat di-scroll.
- Desain responsif: mobile-friendly dengan breakpoint sm/md/lg, tata letak grid, dan maksimal lebar container 1200px.
- SEO lokal: metadata dinamis, sitemap, robots.txt, JSON-LD, serta integrasi OpenGraph dan Twitter Card.
- Analitik: Google Analytics dengan pelacakan klik WhatsApp dan scroll tracking.

## Stack

| Bagian | Teknologi |
|---|---|
| Framework | Next.js 16.3.5 (App Router, Turbopack) |
| Bahasa | TypeScript |
| UI | React 19 |
| Styling | Tailwind CSS v4 (@theme di app/globals.css) |
| Font | Inter (next/font/google) |

Catatan Tailwind v4: Tidak menggunakan `tailwind.config.js`. Deklarasi design token dilakukan melalui `@theme` di `app/globals.css`.

## Struktur Folder

```
app/
  layout.tsx          # Metadata SEO, Header (global)
  page.tsx            # Komposisi section
  globals.css         # Styling @theme
  sitemap.ts          # Sitemaps
  robots.ts           # Robots.txt
components/
  sections/           # Komponen tiap section
  ui/                 # Komponen UI bersama
  seo/                # SEO dan Analytics
data/
  businessInfo.ts     # Data kontak, alamat, dan jam operasional
  services.ts         # Data layanan
  faqs.ts             # Data FAQ
  gallery.ts          # Data galeri
lib/
  gtag.ts             # Tracking analitik
public/
  images/             # Aset gambar
```

## Data Kontak

Gunakan `data/businessInfo.ts` sebagai sumber utama untuk data kontak (WhatsApp, alamat, jam). Jangan melakukan hardcode data di komponen.

- WhatsApp: 0857-7091-8098 (https://wa.me/6285770918098)
- Pelacakan klik WhatsApp menggunakan `trackWhatsAppClick()` di `lib/gtag.ts`.

## Menjalankan Proyek

```bash
npm install
npm run dev        # Jalankan server pengembangan
npm run build      # Build untuk produksi
npm run start      # Jalankan build produksi
npm run lint       # Cek standar kode (harus bebas error sebelum push)
```

Pastikan menjalankan `npm run lint && npm run build` sebelum melakukan push.

## Deployment

### Vercel
Gunakan framework preset Next.js.

### GitHub Pages
Menggunakan static export (`output: "export"` di `next.config.ts`).
- Konfigurasi `images: { unoptimized: true }` di `next.config.ts` diperlukan.
- Deployment menggunakan GitHub Actions yang mengunggah folder `out/`.
