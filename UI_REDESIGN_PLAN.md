# Prime Rescue — UI/UX Redesign Plan (with 3D Layered Depth)
*Modern · 3D Pseudo-Depth · Mobile-First · Non-Rigid · SEO-Safe*

---

## 1. Diagnosis: Masalah Desain Saat Ini (Terlalu Kaku, Flat & 2D Datar)

| Komponen | Masalah Saat Ini |
|---|---|
| **Hero** | Layout grid 2-kolom terpisah kaku, visual 2D datar tanpa kedalaman (depth), foto armada polos tanpa elemen floating berdimensi. |
| **QuickInfo** | 3 card putih berbaris flat — tidak ada diferensiasi z-axis atau elevasi, terasa kaku seperti tabel biasa. |
| **Services** | Card seragam putih 2-kolom dengan border abu-abu tipis, ikon flat, tidak ada sensasi interaksi 3D saat disentuh/di-hover. |
| **WhyChooseUs** | List 3 item mengambang di background abu-abu tanpa kartu, elevasi, atau kontras visual; terasa hambar dan flat. |
| **Gallery** | Layout standar tanpa framing 3D modern atau elevasi bayangan berlapis. |
| **HowItWorks** | Timeline horizontal berbasis nomor di ol yang di mobile putus garis penghubungnya, terasa seperti list biasa. |
| **ContactCta** | Blok warna merah solid flat (`bg-emergency-red`) tanpa gradien, tekstur, atau kedalaman dimensi. |
| **Header** | Kurang berkarakter, kontras warna dengan hero flat. |
| **FloatingCta** | 2 tombol pill vertikal memakan layar di mobile, kurang ergonomis dan flat. |
| **SectionHeading** | Pola heading sama persis di setiap section tanpa aksen pembeda, membuat halaman monoton saat di-scroll. |

---

## 2. Prinsip Desain Modern Baru & 3D Layered Depth

1. **3D Layered Depth (Dimensi 3D Tanpa Membebani Performa):**
   - **Bukan WebGL/Three.js berat** yang bisa merusak PageSpeed & membuat HP kentang lag di saat darurat.
   - Menggunakan **Pure CSS 3D Hardware-Accelerated (0 KB Extra JS)**:
     - Efek floating layered badges yang melayang di atas foto armada (`translate-y`, `shadow-2xl`, efek Z-index depth).
     - Subtle 3D Card Hover & Perspective (`perspective: 1000px`, `transform-style: preserve-3d`).
     - 3D Tactile Buttons dengan efek tekanan fisik nyata saat ditekan (`active:translate-y-[2px] active:shadow-inner`).
     - Multi-layer glassmorphism (`backdrop-blur-md` dengan border highlight bercahaya).
2. **Depth over Flat (Kedalaman & Dimensi):**
   - Menggunakan gradien multidimensi halus, subtle shadows bertingkat (`shadow-sm` hingga `shadow-2xl`), dan efek glowing borders.
3. **Visual Urgency by Design:**
   - Warna `emergency-red` dan `medical-green` digunakan secara terukur dan presisi sebagai aksen fungsional penarik perhatian, bukan memblok seluruh elemen secara kaku.
4. **Mobile-First Ergonomics:**
   - Didesain responsif mulai dari layar 320px/375px: touch target empuk (min 44px), thumb-friendly CTA, serta layout timeline vertikal yang rapi di layar kecil.
5. **Stronger Typographic & Spatial Rhythm:**
   - Kontras ukuran teks lebih tegas (display heading lebih bold, supporting copy lebih clean).
   - Alternasi section gelap & terang (`bg-slate-950` / `bg-navy-dark` berpadu elegan dengan `bg-white` / `bg-clinical-white`).
6. **Subtle & Purposeful Micro-interactions:**
   - Hover cards sedikit naik (`hover:-translate-y-1.5 hover:shadow-xl`), accent borders bergerak halus, serta status indicator berkedip lembut (*live radar pulse*).
7. **SEO 100% Safe (Tanpa Mengubah Konten):**
   - Semua tag semantic (`<h1>`, `<h2>`, `<section id="...">`, `<ol>`, `<p>`), teks copy, meta tags, schema markup, dan keyword SEO tetap utuh tanpa diubah satu kata pun. Hanya class Tailwind, hierarki visual, dan pembungkus layout yang ditingkatkan.

---

## 3. Rencana Perubahan Detail Per Komponen

---

### A. `app/globals.css` — 3D Tokens, Perspective & Micro-animations
- **3D Utility Classes:**
  - `.perspective-1000`: `perspective: 1000px;` untuk mengaktifkan ruang 3D pada container kartu.
  - `.transform-3d`: `transform-style: preserve-3d;`
  - `.shadow-3d`: Efek bayangan ganda (ambient shadow + directional drop shadow) yang menciptakan ilusi ketinggian dari permukaan layar.
  - `.btn-tactile`: Tombol dengan efek tekanan fisik 3D saat di-tap/klik.
- **Animasi Ringan (Pure CSS):**
  - `@keyframes pulse-dot`: indikator live status "Siap Beroperasi 24 Jam".
  - `@keyframes float-slow`: animasi melayang halus (floating 3D badge) naik-turun 6-8px secara ritmis.
  - `@keyframes shimmer`: loading skeleton yang mulus untuk map / placeholder.

---

### B. `components/sections/Hero.tsx` — 3D Floating Hero Showcase
- **Konsep:** Bukan lagi sekadar gambar datar di sebelah teks, melainkan layout sinematik dengan **elemen 3D floating badges** yang melayang di atas visual armada:
  - **Live Status Badge:** Kapsul kecil di atas H1 dengan green pulsing dot: `● Siap Beroperasi 24 Jam`.
  - **Display H1 & Subtitle:** Teks tajam kontras tinggi dengan spatial breathing room.
  - **3D Floating Badges di Gambar Armada:**
    - Di sudut atas gambar armada: Kapsul kaca melayang (`backdrop-blur-md bg-white/90 shadow-xl border border-white/60`) dengan teks: `⚡ Respon 15-30 Menit`.
    - Di sudut bawah gambar armada: Badge melayang dengan teks: `🩺 Tim Medis & Oksigen Lengkap` yang memiliki animasi mengambang halus (`animate-float-slow`).
  - **Action Buttons (3D Tactile):**
    - Tombol WhatsApp hijau darurat dengan efek elevasi 3D dan glowing aura halus.
    - Tombol Telepon sekunder dengan aksen kaca dan border solid.
  - **3D Stat Strip:** 3 kartu metrik ringkas (`24/7 Siaga`, `15-30 Menit Respons`, `Gunung Sindur & Sekitarnya`) berformat kapsul berbayang tebal.

---

### C. `components/sections/QuickInfo.tsx` — Floating 3D Stats Deck
- **Konsep:** Kartu informasi cepat yang dibuat seperti dek kartu melayang di batas antara Hero dan section berikutnya.
- **Elemen:**
  - 3 kartu dengan background modern (`bg-white` dengan border halus dan `shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300`).
  - Ikon 3D container: wadah lingkaran bersudut lembut dengan warna aksen kedalaman (`bg-red-50 text-emergency-red ring-4 ring-red-50/50`).
  - Di mobile: disusun rapi dengan layout thumb-friendly tanpa memakan tinggi layar secara berlebihan.

---

### D. `components/sections/Services.tsx` — 3D Tilt & Interactive Cards
- **Konsep:** Mengubah card datar menjadi kartu 3D interaktif.
- **Elemen:**
  - Container menggunakan `.perspective-1000`.
  - Kartu dengan **Left-Border Glow Accent** (`border-l-4 border-transparent hover:border-emergency-red`).
  - Efek elevasi 3D saat di-hover: kartu terangkat (`-translate-y-2`) dan memancarkan bayangan lembut berdimensi (`shadow-2xl`).
  - Ikon dengan wadah bergradien lembut yang tampak menonjol dari permukaan kartu.

---

### E. `components/sections/WhyChooseUs.tsx` — Dark 3D Glassmorphism Experience
- **Konsep:** Section focal point bertema gelap (`bg-slate-950` atau `bg-navy-dark`) dengan kartu kaca 3D.
- **Elemen:**
  - 3 kartu kaca melayang (`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl hover:border-white/20 hover:-translate-y-1.5 transition-all duration-300`).
  - **Watermark 3D Index:** Angka dekoratif raksasa di sudut belakang kartu (`01`, `02`, `03`) dengan opasitas tipis (`text-white/5 font-black text-8xl`), menciptakan kedalaman berlapis (layering Z-axis).
  - Ikon dengan lingkaran bercahaya hijau medis (`bg-medical-green/15 text-medical-green ring-1 ring-medical-green/30`).

---

### F. `components/sections/HowItWorks.tsx` — 3D Step Nodes & Mobile Timeline
- **Konsep:** Visual alur kerja seperti nodus stasiun 3D berurutan.
- **Elemen:**
  - **Layar Mobile (< 768px):** Nodus vertikal terhubung garis putus-putus berkedalaman (`border-l-2 border-dashed border-emergency-red/40`).
  - **Layar Desktop (>= 768px):** Nodus step horizontal dengan lingkaran nomor 3D timbul (`shadow-lg ring-4 ring-red-100 bg-emergency-red text-white`).
  - Kartu penjelasan step memiliki elevasi lembut dan padding yang lega.

---

### G. `components/sections/ServiceArea.tsx` — 3D Map Plinth
- **Konsep:** Peta disajikan layaknya pelat monolitik 3D modern.
- **Elemen:**
  - Map container dengan sudut rounded besar (`rounded-2xl`), border tipis bernuansa slate, dan bayangan dalam bertingkat (`shadow-xl`).
  - Efek skeleton loading dengan animasi shimmer halus sebelum Google Map dimuat.
  - Kartu daftar wilayah diberi badge aksen wilayah prioritas Gunung Sindur & Jabodetabek.

---

### H. `components/sections/Faq.tsx` — Floating Accordion Cards
- **Konsep:** Pertanyaan tidak lagi berdempetan dalam 1 garis datar, melainkan pulau-pulau kartu terpisah.
- **Elemen:**
  - Tiap item dibungkus kartu tersendiri (`bg-white rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all`).
  - Indikator panah (chevron) berputar mulus 180 derajat saat dibuka.
  - Saat aktif terbuka, kartu mendapat aksen warna lembut dan sedikit bayangan elevasi.

---

### I. `components/sections/ContactCta.tsx` — 3D Radiant Gradient Banner
- **Konsep:** Banner panggilan darurat dengan sensasi ruang dan energi tinggi.
- **Elemen:**
  - Gradien multidimensi (`bg-gradient-to-br from-emergency-red via-red-600 to-rose-950`).
  - Latar belakang memiliki lingkaran ambient cahaya abstrak semi-transparan (`blur-3xl`) yang menciptakan kedalaman 3D.
  - Tombol aksi putih timbul dengan bayangan tebal (`shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all`).

---

### J. `components/ui/FloatingCta.tsx` & `components/sections/Header.tsx`
- **Floating CTA:** Tombol mengambang dengan elevasi bayangan 3D (`shadow-2xl`), tombol WhatsApp utama tetap lebar dengan teks jelas, sedangkan tombol telepon di mobile disederhanakan menjadi tombol lingkaran ergonomis yang nyaman dijangkau jempol.
- **Header:** Transparansi kaca bertekstur (`backdrop-blur-md`) yang beradaptasi secara mulus saat halaman di-scroll.

---

## 4. Urutan Prioritas Pengerjaan

1. **P1 (Core 3D Foundation):** `globals.css` -> `Hero.tsx` -> `Header.tsx` -> `QuickInfo.tsx`
2. **P2 (Major Depth Sections):** `WhyChooseUs.tsx` -> `ContactCta.tsx` -> `SectionHeading.tsx` -> `FloatingCta.tsx`
3. **P3 (Interactive Detail Polish):** `Services.tsx` -> `HowItWorks.tsx` -> `Faq.tsx` -> `ServiceArea.tsx`

---

## 5. Jaminan SEO & Performa

- **0 KiloByte JS Library 3D Tambahan:** Semua efek 3D dibuat murni dengan CSS hardware-accelerated (`transform`, `perspective`, `backdrop-filter`, `box-shadow`).
- **Skor PageSpeed Tetap Tinggi:** Tidak ada pemblokiran main thread, Core Web Vitals (LCP, INP, CLS) tetap terjaga optimal.
- **100% SEO Content Intact:** Teks konten, heading H1–H3, metadata, structured data schema JSON-LD, anchor IDs, dan Google Analytics tetap persis sesuai spesifikasi tanpa ada yang diubah.
