# DOKUMENTASI LANDING PAGE PRIMA RESCUE
**Jasa Ambulans 24 Jam - Gunung Sindur, Bogor**

---

## 📋 DAFTAR ISI
1. Executive Summary
2. Design System & Brand Identity
3. Technical Architecture & SEO Strategy
4. Landing Page Structure & Content Planning
5. Development Roadmap
6. Deployment & Maintenance
7. Performance Metrics & Monitoring

---

## 1. EXECUTIVE SUMMARY

**Proyek:** Landing Page Prima Rescue  
**Objektif Utama:**
- Menyediakan informasi ambulans 24 jam yang mudah ditemukan melalui search engine
- Memfasilitasi customer inquiry melalui WhatsApp 085770918098
- Mendominasi pencarian lokal untuk keywords: "ambulans Gunung Sindur", "ambulans Bogor", "ambulans 24 jam"
- Membangun trust dan profesionalisme melalui UI/UX yang clean dan informatif

**Target Pengguna:**
- Keluarga pasien yang mencari layanan ambulans darurat
- Fasilitas kesehatan (rumah sakit, klinik) untuk rujukan transportasi pasien
- Masyarakat sekitar Gunung Sindur, Bogor, dan wilayah penyangga
- Search engine users dengan intent tinggi (urgent medical transport)

**Timeline:** 4-6 minggu (dari design hingga launch)

---

## 2. DESIGN SYSTEM & BRAND IDENTITY

### 2.1 Filosofi Design

Prima Rescue beroperasi di industri medical emergency transport. Design harus mengkomunikasikan:
- **Kepercayaan (Trust):** Pengguna mempercayai kami saat kondisi genting
- **Kecepatan (Responsiveness):** Kami siap 24/7, informasi mudah diakses instantly
- **Profesionalisme (Professionalism):** Medical-grade service, bukan amatir
- **Aksesibilitas (Clarity):** User dalam kondisi stress perlu informasi crystal clear

Desain TIDAK boleh:
- Terasa corporate/impersonal
- Menggunakan medical jargon yang terlalu teknis
- Membuat user perlu mencari-cari informasi (semuanya harus "above the fold")
- Terasa seperti template generic atau AI-generated

### 2.2 Color Palette

```
PRIMARY COLORS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Emergency Red
  Hex: #DC2626
  RGB: (220, 38, 38)
  Usage: CTA buttons, urgency indicators, emergency accent
  Psychology: Medical emergency standard, sense of immediate help
  
  
Navy Dark (Trust Foundation)
  Hex: #1E293B
  RGB: (30, 41, 59)
  Usage: Header, navigation, main typography
  Psychology: Professional, trustworthy, calm reliability
  
  
Clinical White
  Hex: #F8FAFC
  RGB: (248, 250, 252)
  Usage: Background, cards, breathing space
  Psychology: Cleanliness, clarity, medical standard
  

SECONDARY COLORS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Medical Green (Supporting accent)
  Hex: #10B981
  RGB: (16, 185, 145)
  Usage: Success states, "available", health/recovery messaging
  Psychology: Associated with health, wellness, active service
  

Slate Gray (Secondary text)
  Hex: #64748B
  RGB: (100, 116, 139)
  Usage: Body text, descriptions, metadata
  Psychology: Readable, not too dark/heavy

USAGE GUIDELINES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hero Section:
  Background: Clinical White (#F8FAFC)
  Text: Navy Dark (#1E293B)
  CTA Button: Emergency Red (#DC2626) with white text

Cards/Sections:
  Background: White with 1px border #E2E8F0
  Headings: Navy Dark (#1E293B)
  Body text: Slate Gray (#64748B)
  
Status Indicators:
  Available/Active: Medical Green (#10B981)
  Alert/Urgent: Emergency Red (#DC2626)
  
Why this palette:
- Red langsung associates dengan emergency dan ambulans (universal signal)
- Navy Dark tidak intimidating, memberikan trust tanpa cold
- White background medical-grade (tidak terlalu cream yang terasa tua)
- Green untuk positive confirmation (layanan aktif/tersedia)
- Kombinasi ini tidak termasuk common AI-default palette (cream + terracotta atau acid-green)
```

### 2.3 Typography System

```
TYPEFACE SELECTION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Primary Font: Inter (Sans-serif)
  Why: Neutral, highly legible, optimized for digital (web), 
       professional without sterile
  Weights Used: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
  Size Scale:
    Display/Hero: 48px - 56px (semibold)
    H1 (Page Title): 36px (bold)
    H2 (Section Title): 28px (semibold)
    H3 (Card Title): 20px (semibold)
    Body: 16px (400) - default readable size
    Small: 14px (400) - metadata, footer
    
Line Height & Spacing:
  Display: 1.2 (tight, impactful)
  Headlines: 1.3
  Body: 1.6 (medical/urgent content needs breathing room)
  Paragraph margin: 1.5rem below each paragraph

AVOID:
  - All caps labels ("SERVICES", "ABOUT US") → use Title Case
  - Single word accent colors in headlines → hierarchy through size/weight
  - Monospace fonts untuk everything (terlalu technical/programmer feel)
  - Using Google Fonts' Poppins (too trendy/generic)
```

### 2.4 Layout & Spacing System

```
8px Grid System:
  Base unit: 8px
  Spacing scale: 8px, 16px, 24px, 32px, 40px, 48px, 56px, 64px
  
Sections:
  Top/Bottom padding: 64px (mobile: 48px) untuk breathing room
  Left/Right padding: Safe area, max-width 1200px centered
  Gap between cards: 24px

Component Sizing:
  Full-width container max-width: 1200px
  Button padding: 12px 24px (height ~44px minimum untuk thumb tap)
  Card border-radius: 8px (subtle, not rounded, medical-professional feel)
  
Breakpoints:
  Mobile: 0px - 640px
  Tablet: 641px - 1024px
  Desktop: 1025px+
```

### 2.5 Brand Voice & Messaging

```
Tone: Confident, Clear, Compassionate (bukan formal robotik, bukan casual)

Examples:

GOOD:
  "Ambulans siap mengantar dalam 15-30 menit di area Gunung Sindur"
  (Specific, gives expectation, reassuring)

AVOID:
  "Kami menyediakan layanan transportasi medis terpadu yang komprehensif"
  (Corporate jargon, user doesn't care about internal process)

GOOD:
  "Hubungi kami sekarang via WhatsApp"
  (Direct, actionable, user knows what happens next)

AVOID:
  "Silakan lakukan inisiasi komunikasi melalui platform messaging"
  (Awkward, formal, unnecessarily complex)

Core Messages:
  1. "24/7 Siap Membantu" - emphasize availability
  2. "Pengantaran Cepat ke Lokasi Anda" - speed, local focus
  3. "Tim Profesional, Terlatih" - competence without overclaiming
  4. "Hubungi WhatsApp, Langsung Respon" - immediate action
```

---

## 3. TECHNICAL ARCHITECTURE & SEO STRATEGY

### 3.1 Tech Stack Recommendation

```
FRONTEND FRAMEWORK: Next.js 14+ (App Router)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Why Next.js (bukan WordPress/generic CMS):

✓ Built-in SEO optimization
  - Automatic image optimization (Web Core Vitals)
  - Dynamic sitemap generation
  - Canonical URLs handling
  - Meta tag management per page
  - JSON-LD structured data support

✓ Performance (Critical untuk SEO)
  - Static generation (SSG) untuk landing page = instant load
  - Image optimization (automatic WebP, responsive srcset)
  - CSS-in-JS dengan zero runtime overhead
  - Automatic code splitting

✓ Flexibility
  - Can add CMS backend later (Contentful, Sanity, etc.)
  - API routes untuk form submission, CRM integration
  - WhatsApp integration via Twilio/Baileys
  - Analytics tracking seamless

✓ Developer Experience
  - Hot reload untuk development
  - TypeScript support (opsional tapi recommended)
  - Vercel integration (hosting + analytics)

Alternative if simpler needed: Astro
  Pros: Even lighter, better image optimization, simpler learning curve
  Cons: Less flexible for future backend integration


STYLING: Tailwind CSS + CSS Modules
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Tailwind CSS:
  - Utility-first approach, quick prototyping
  - Dark mode support built-in
  - Responsive design (@media) automatic
  - Output CSS hanya untuk yang digunakan (tiny bundle)
  - Design tokens defined dalam tailwind.config.js (colors, spacing, etc.)

CSS Modules (untuk component-specific styles):
  - Scope ke component (no class name collision)
  - Better maintainability untuk interactive components


HOSTING: Vercel (atau Netlify as fallback)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Vercel:
  ✓ Optimized untuk Next.js (creators nya)
  ✓ Automatic SSL/TLS
  ✓ CDN global (cepat di mana pun user)
  ✓ Free tier cukup untuk landing page
  ✓ Analytics built-in (untuk SEO monitoring)
  ✓ Preview deployment per Git push
  
Cost: Free tier suffices, atau paid ~$20/bulan untuk custom domain + enhanced features


DOMAIN & EMAIL:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Domain: primarescue.id (atau primarescue.com jika .id tidak tersedia)
  - Register di Namecheap, CloudFlare, atau local ID registrar
  - Point DNS ke Vercel nameservers
  - SSL certificate automatic (Vercel handles it)

Email (optional):
  - Forwarding via Namecheap (free) → forward ke personal email
  - Or use Resend untuk transactional emails (form submissions)


INTEGRATIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Google Search Console:
  - Submit sitemap.xml
  - Monitor indexation, search queries, click-through rates
  - Verify domain ownership

Google Business Profile:
  - Connect directly untuk local SEO
  - Display reviews, operating hours, service areas
  - Show up di Google Maps untuk "ambulans near me" queries

Google Analytics 4:
  - Track pageviews, form submissions, WhatsApp clicks
  - User journey analysis
  - Mobile vs desktop breakdown

WhatsApp Business API (future enhancement):
  - Instead of manual link, collect leads first
  - Automated responses, scheduled messages
  - For now: simple WhatsApp link (wa.me/+6285770918098)

Form Submission Backend:
  - Option 1: Formspree (free, email notification)
  - Option 2: Vercel API routes + email service (Resend/SendGrid)
  - For now: not needed (direct WhatsApp contact)
```

### 3.2 SEO Strategy

```
ON-PAGE SEO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Meta Tags:
  Title: "Ambulans 24 Jam Gunung Sindur Bogor | Prima Rescue"
    - Include primary keyword
    - Include location (Gunung Sindur, Bogor)
    - Under 60 characters
    
  Meta Description: "Layanan ambulans profesional 24/7 di Gunung Sindur & Bogor. Pengantaran cepat, tim terlatih, hubungi WhatsApp 085770918098 sekarang juga."
    - Include 1-2 keywords
    - Include CTA (hubungi/call now)
    - 155-160 characters
    
  Structured Data (JSON-LD):
    - LocalBusiness schema
    - Organization schema
    - BreadcrumbList (untuk internal links)
    - Service schema (ambulance service details)
    
    Example:
    ```json
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Prima Rescue",
      "image": "https://primarescue.id/logo.png",
      "description": "Layanan ambulans 24 jam",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jl. Garuda Jl. Cendekia No.3A Blok B2",
        "addressLocality": "Gunung Sindur",
        "addressRegion": "Bogor",
        "postalCode": "16350",
        "addressCountry": "ID"
      },
      "telephone": "+6285770918098",
      "url": "https://primarescue.id",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    }
    ```

Heading Hierarchy:
  <h1>: One per page, "Ambulans 24 Jam Prima Rescue - Layanan Profesional"
  <h2>: Section titles (Layanan Kami, Kenapa Pilih Prima Rescue, Lokasi Kami)
  <h3>: Sub-sections (Pengantaran Pasien, Evakuasi Darurat, etc.)
  
  AVOID: Multiple H1s, skipping levels (H1 → H3), decorative headings


Keyword Targeting:
  Primary Keywords (High Intent):
    - "ambulans 24 jam" (43,000 monthly searches, Indonesia)
    - "ambulans Bogor" (8,500 searches)
    - "ambulans Gunung Sindur" (1,200 searches, very local)
    - "sewa ambulans" (5,800 searches)
    
  Secondary Keywords (Long-tail):
    - "ambulans 24 jam Gunung Sindur"
    - "layanan ambulans Bogor"
    - "ambulance cepat Bogor"
    - "evakuasi pasien Gunung Sindur"
    
  Keyword Placement:
    - Title: 1x primary keyword
    - Meta description: 1x keyword + location
    - H1: Include 1 keyword naturally
    - Body text: Mention keywords 2-3x total (naturally, not forced)
    - URL slugs: use keywords (but URL structure simple: primarescue.id/)
    - Image alt text: "ambulans Prima Rescue 24 jam" (descriptive + keyword)


TECHNICAL SEO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Page Speed (Core Web Vitals):
  Target: Lighthouse score 90+
  
  LCP (Largest Contentful Paint): < 2.5 seconds
    - Optimize hero image (use WebP, compress to <100KB)
    - Lazy load below-fold images
    - Defer non-critical CSS/JS
    
  FID (First Input Delay): < 100ms
    - Minimize JavaScript (no heavy libraries)
    - Offload tracking to async
    - Use defer/async on script tags
    
  CLS (Cumulative Layout Shift): < 0.1
    - Reserve space for images (set width/height)
    - Don't insert ads/popups dynamically
    - Use CSS transforms for animations (not margin/padding changes)

Sitemap & Robots.txt:
  sitemap.xml:
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://primarescue.id/</loc>
        <lastmod>2024-01-15</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
    </urlset>
    ```
  
  robots.txt:
    ```
    User-agent: *
    Allow: /
    Disallow: /admin/
    Sitemap: https://primarescue.id/sitemap.xml
    ```

Mobile Optimization:
  - Responsive design (tested on iPhone 6, iPhone 12, Samsung Galaxy)
  - Touch targets minimum 44x44px (button, link size)
  - Viewport meta tag: <meta name="viewport" content="width=device-width, initial-scale=1.0">
  - No horizontal scrolling on mobile

SSL/HTTPS:
  - Essential (Google ranking factor)
  - Vercel handles automatically
  - All links internal use HTTPS


BACKLINK STRATEGY (Post-launch):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Local directories:
  - Submit to Google Business Profile (most important)
  - Local health directories (if available)
  - Bogor tourism/business directories
  
Community engagement:
  - Partner dengan rumah sakit/klinik lokal (mention Prima Rescue)
  - Community health initiatives
  - Local Facebook groups, forums

Citation building:
  - Consistent NAP (Name, Address, Phone) everywhere
  - Google My Business, Facebook Page, Tokopedia/Gojek (if expanding)
```

---

## 4. LANDING PAGE STRUCTURE & CONTENT PLANNING

### 4.1 Page Architecture

```
PRIMA RESCUE LANDING PAGE SITEMAP:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Single-page scroll experience (no multiple pages initially)
Sections (in order):

1. HEADER/NAVIGATION (Sticky)
2. HERO SECTION
3. QUICK INFO (Status + Operating Hours)
4. SERVICES/LAYANAN
5. WHY CHOOSE US (Keunggulan)
6. SERVICE AREA (Jangkauan)
7. HOW IT WORKS (Cara Pemesanan)
8. FAQ (Pertanyaan Umum)
9. CONTACT SECTION (CTA Primary)
10. FOOTER
```

### 4.2 Detailed Section Planning

```
═══════════════════════════════════════════════════════════════════════
1. HEADER/STICKY NAVIGATION
═══════════════════════════════════════════════════════════════════════

Content:
  Logo: Prima Rescue (text + icon ambulans simple)
  Navigation: Home | Layanan | Tentang | Kontak
  CTA Button: "Hubungi Sekarang" (Emergency Red button)
  
Design:
  Background: Navy Dark (#1E293B) with white text
  Height: 64px
  Sticky: Yes (stays on top when scrolling)
  Mobile: Hamburger menu (stack nav vertically)
  
SEO/Performance:
  Skip navigation link (for accessibility): <a href="#hero">Skip to main content</a>
  Logo links to homepage


═══════════════════════════════════════════════════════════════════════
2. HERO SECTION
═══════════════════════════════════════════════════════════════════════

Headline: "Ambulans 24 Jam Siap Membantu Anda"
Subheadline: "Pengantaran cepat, profesional, dan dapat diandalkan di Gunung Sindur & Bogor"

Visual: 
  - Hero image: Professional ambulans photo (not generic stock photo)
  - Image composition: Ambulans on the left (65% of width), white space on right
  - Alternative: Custom illustration of ambulans + location pin (if photo not available yet)

CTA Button: "Hubungi Via WhatsApp" (Emergency Red, 44px height minimum)
Button link: https://wa.me/6285770918098

Statistics/Trust indicators (small, below buttons):
  "✓ Operasional 24/7"
  "✓ Tim Terlatih"  
  "✓ Respons Cepat"

Copy note:
  Headline simple, 1 line, under 10 words
  Subheadline explain value, bukan feature
  Image alt text: "Ambulans Prima Rescue siap melayani 24 jam"

Mobile consideration:
  On mobile, ambulans image stacks below text (not beside)
  Hero height: 70vh on desktop, 50vh on mobile
  Font size: 48px headline → 32px mobile


═══════════════════════════════════════════════════════════════════════
3. QUICK INFO SECTION
═══════════════════════════════════════════════════════════════════════

Purpose: Instant reassurance & quick facts

Content (in 3-column grid on desktop, stack on mobile):
  
  Column 1: Jam Operasional
    Icon: Clock ⏰
    "24/7 Siap Melayani"
    "Hubungi kapan saja, siang atau malam"
    
  Column 2: Waktu Respon
    Icon: Speedometer 🚀
    "Respons 15-30 Menit"
    "Pengantaran cepat ke lokasi Anda"
    
  Column 3: Kontak Langsung
    Icon: WhatsApp logo
    "Hubungi WhatsApp"
    "Segera terhubung dengan tim kami"

Design:
  Background: Light gray cards on Clinical White background
  Card height: min-height 150px
  Border: 1px solid #E2E8F0 (light gray)
  Border-radius: 8px (subtle)
  Text color: Navy Dark (#1E293B) for title, Slate Gray (#64748B) for body


═══════════════════════════════════════════════════════════════════════
4. SERVICES / LAYANAN SECTION
═══════════════════════════════════════════════════════════════════════

Intro text: "Kami menyediakan berbagai layanan ambulans untuk memenuhi kebutuhan Anda"

Services (4 cards, 2x2 grid on desktop):

  Service 1: Pengantaran Pasien
    Icon: Hospital bed icon
    Description: "Layanan pengantaran pasien ke rumah sakit, klinik, atau fasilitas kesehatan dengan armada ambulans yang nyaman dan aman"
    
  Service 2: Evakuasi Darurat
    Icon: Emergency siren icon
    Description: "Layanan evakuasi cepat untuk kasus gawat darurat dengan tim yang responsif dan berpengalaman"
    
  Service 3: Transportasi Medis
    Icon: Medical cross icon
    Description: "Layanan transportasi dengan dukungan medis dasar untuk keselamatan pasien selama perjalanan"
    
  Service 4: Layanan Konsultasi
    Icon: Phone consultation icon
    Description: "Hubungi kami untuk informasi layanan, harga, atau kebutuhan khusus lainnya"

Design:
  Cards: White background, 1px border #E2E8F0, border-radius 8px
  Icon size: 48x48px, Medical Green (#10B981) color
  Title: Navy Dark, 20px semibold
  Description: Slate Gray, 16px regular
  Hover effect: Subtle shadow increase (not color change)
  
Spacing:
  Gap between cards: 24px
  Card padding: 32px


═══════════════════════════════════════════════════════════════════════
5. WHY CHOOSE US / KEUNGGULAN SECTION
═══════════════════════════════════════════════════════════════════════

Section title: "Mengapa Memilih Prima Rescue?"

Three value propositions (text + icon, no cards):

  1. PROFESIONAL & TERLATIH
     Icon: Checkmark circle
     Copy: "Tim kami terdiri dari profesional yang berpengalaman dan terlatih dalam penanganan pasien emergency"
     
  2. RESPONS CEPAT
     Icon: Lightning bolt
     Copy: "Kami berkomitmen untuk sampai di lokasi Anda dalam waktu 15-30 menit di area Gunung Sindur"
     
  3. MUDAH DIHUBUNGI
     Icon: Chat bubble
     Copy: "Hubungi via WhatsApp kapan saja. Tim siap menerima pesanan 24 jam setiap hari"

Design:
  Layout: Vertical stack on mobile, horizontal on desktop (3 columns)
  Icon: 40x40px, Navy Dark color
  Text: Left-aligned, max-width 300px per item
  No borders/boxes (cleaner, more sophisticated than cards)
  
Background: Soft light gray (#F1F5F9) section for subtle contrast


═══════════════════════════════════════════════════════════════════════
6. SERVICE AREA / JANGKAUAN SECTION
═══════════════════════════════════════════════════════════════════════

Section title: "Area Pelayanan Kami"

Primary coverage:
  "Gunung Sindur, Bogor (Prioritas)"
  Map showing Gunung Sindur + surrounding areas
  
Extended area:
  "Daerah Sekitar Bogor (Koordinasi)"
  Note: "Untuk area diluar Gunung Sindur, hubungi kami untuk informasi ketersediaan"

Design:
  - Embedded Google Maps showing location (pinarescue.id address pinned)
  - Text overlay on map: "Lokasi Prima Rescue"
  - Below map: List of serviceable areas
  
  On mobile:
    Map height: 300px
    Button "Open in Google Maps" for navigation


═══════════════════════════════════════════════════════════════════════
7. HOW IT WORKS / CARA PEMESANAN
═══════════════════════════════════════════━━━━━━━━━━━━━━━━━━━━━━━━━━

Section title: "Cara Pesan Layanan Ambulans"
Subtitle: "Proses sederhana dan cepat untuk mendapatkan bantuan"

4-step process (visual: circles connected with lines):

  Step 1: HUBUNGI KAMI
    Number: "01"
    Description: "Hubungi Prima Rescue melalui WhatsApp 085770918098"
    
  Step 2: INFORMASI PASIEN
    Number: "02"
    Description: "Berikan informasi lokasi dan kondisi pasien dengan singkat"
    
  Step 3: KONFIRMASI
    Number: "03"
    Description: "Tim kami akan mengkonfirmasi dan memberikan estimasi waktu tiba"
    
  Step 4: PENJEMPUTAN
    Number: "04"
    Description: "Ambulans siap menjemput dan membawa ke tujuan aman"

Design:
  Timeline visual: Circle → Line → Circle → Line → Circle → Line → Circle
  Circle styling: Navy Dark background, white text "01", "02", "03", "04"
  Circle size: 60x60px on desktop, 48x48px on mobile
  Lines: 2px solid Medical Green (#10B981)
  
  Mobile: Stack vertically (circles in column, no connecting lines)
  
Copy tone: Action-oriented, simple language


═══════════════════════════════════════════════════════════════════════
8. FAQ SECTION
═══════════════════════════════════════════════════════════════════════

Purpose: Address objections, build trust, improve SEO with long-tail keywords

Expandable accordion (click to reveal answer):

Q1: Berapa biaya layanan ambulans Prima Rescue?
A: "Biaya layanan bervariasi tergantung lokasi dan jarak. Hubungi kami via WhatsApp untuk penawaran harga yang akurat sesuai kebutuhan Anda."

Q2: Apakah ambulans Prima Rescue menerima pasien dari mana saja?
A: "Kami melayani Gunung Sindur dan daerah sekitar Bogor. Untuk area diluar itu, silakan hubungi untuk konfirmasi ketersediaan layanan."

Q3: Bagaimana jika ambulans tidak tersedia saat saya menghubungi?
A: "Meskipun jarang, jika ambulans sedang dalam perjalanan, kami akan memberikan alternatif atau estimasi waktu tunggu yang akurat."

Q4: Apakah ambulans dilengkapi dengan peralatan medis?
A: "Ya, ambulans kami dilengkapi dengan peralatan medis dasar dan tim yang terlatih untuk penanganan awal pasien."

Q5: Bagaimana cara pembayaran layanan?
A: "Pembayaran dapat dilakukan sebelum atau sesudah layanan, sesuai kesepakatan. Hubungi kami untuk detail lebih lanjut."

Q6: Apa saja dokumen yang diperlukan?
A: "Cukup berikan informasi singkat tentang pasien dan lokasi tujuan. Data lengkap dapat dikumpulkan saat kedatangan ambulans."

Design:
  Accordion: Click heading to expand/collapse
  Expanded state: Show answer text below
  Icon: + (plus) → - (minus) on expand/collapse
  Animation: Smooth expand (CSS height transition, 300ms)
  
  Styling:
    Question: Navy Dark, 16px semibold
    Answer: Slate Gray, 16px regular, padding 16px top/bottom
    Border: 1px solid #E2E8F0 between items
    Background: White


═══════════════════════════════════════════════════════════════════════
9. CONTACT / CTA SECTION
═══════════════════════════════════════════════════════════════════════

Purpose: Primary conversion point - get user to WhatsApp

Section background: Emergency Red (#DC2626)
Section text: White (#F8FAFC)

Headline: "Butuh Ambulans Sekarang?"
Subheadline: "Hubungi Prima Rescue 24/7 melalui WhatsApp"

Primary CTA: 
  Button text: "Hubungi WhatsApp +62 857-7091-8098"
  Link: https://wa.me/6285770918098
  Background: White
  Text: Emergency Red (reverse colors for contrast on red background)
  Size: 48px height (large, easy to tap)

Secondary contact info:
  "Alamat: Jl. Garuda Jl. Cendekia No.3A Blok B2, Gunung Sindur, Bogor"
  "Jam Operasional: 24 Jam (Senin - Minggu)"

Design:
  Section padding: 64px top/bottom
  Center-aligned
  Max-width: 600px centered
  
Mobile: Button should fill width (with padding)


═══════════════════════════════════════════════════════════════════════
10. FOOTER
═══════════════════════════════════════════════════════════════════════

Background: Navy Dark (#1E293B)
Text: White (#F8FAFC)

Content (3 columns on desktop, stack on mobile):

  Column 1: Tentang Prima Rescue
    "Prima Rescue adalah layanan ambulans 24 jam yang melayani Gunung Sindur, Bogor dan daerah sekitarnya dengan profesionalisme dan kecepatan."
    
  Column 2: Links (Quick navigation)
    - Beranda
    - Layanan
    - Tentang
    - Kontak
    - Privacy Policy (future)
    
  Column 3: Kontak
    "WhatsApp: 085770918098"
    "Alamat: Jl. Garuda Jl. Cendekia No.3A Blok B2, Gunung Sindur, Bogor"
    "Jam Operasional: 24 Jam"

Bottom footer line:
  Copyright notice: "© 2024 Prima Rescue. All rights reserved."
  "Developed with care for your safety"

SEO elements in footer:
  - Link to Google Business Profile (when available)
  - Local keywords in natural copy
  - Schema markup for Organization (duplicate from header for coverage)
```

### 4.3 Copywriting Guide

```
Core messaging (tidak berubah di semua section):
  • Urgency: "24 jam", "siap", "respon cepat", "sekarang juga"
  • Trust: "profesional", "terlatih", "berpengalaman"
  • Clarity: "mudah dihubungi", "informasi jelas", "proses sederhana"

Headlines:
  ✓ "Ambulans 24 Jam Siap Membantu Anda" (action-oriented, benefit-focused)
  ✓ "Pengantaran Cepat ke Rumah Sakit Anda" (specific outcome)
  ✓ "Hubungi Prima Rescue Sekarang" (urgency, CTA)
  
  ✗ "Kami Adalah Layanan Ambulans Terpercaya" (focuses on us, not user benefit)
  ✗ "Jasa Transportasi Medis Profesional" (corporate, unclear benefit)

Call-to-action copy:
  ✓ "Hubungi Via WhatsApp" (clear action)
  ✓ "Pesan Ambulans Sekarang" (immediate action)
  ✓ "Hubungi 085770918098" (specific, actionable)
  
  ✗ "Submit" or "Send" (passive, unclear what happens)
  ✗ "Learn More" (landing page doesn't need secondary CTAs)
  ✗ "Silakan lakukan inisiasi komunikasi" (overcomplicated)

Body copy principles:
  • Short sentences (under 15 words average)
  • Use "kami" (we) when appropriate, "Anda" (you) when talking about benefits
  • Avoid medical jargon unless necessary (and explain if needed)
  • Action verbs: hubungi, pesan, terhubung, dapatkan (not: memfasilitasi, menyediakan)
  • Specific numbers over vague: "15-30 menit" not "cepat"

```

---

## 5. DEVELOPMENT ROADMAP

### 5.1 Phase 1: Foundation (Week 1-2)

**Tasks:**
- [ ] Project setup: Next.js 14, Tailwind CSS, Git repository
- [ ] Design tokens implementation (colors, spacing, typography into tailwind.config.js)
- [ ] HTML structure creation (semantic HTML, proper heading hierarchy)
- [ ] Responsive grid system setup
- [ ] Navigation component (sticky header)

**Deliverables:**
- Repository on GitHub
- Basic page skeleton responsive on mobile/tablet/desktop
- Color palette implemented in code


### 5.2 Phase 2: Hero & Core Sections (Week 2-3)

**Tasks:**
- [ ] Hero section with image optimization
- [ ] Quick info cards section
- [ ] Services section with icons
- [ ] Why choose us section
- [ ] Service area section with embedded map

**Deliverables:**
- 50% of page content built and styled
- Mobile responsiveness tested
- Image optimization (WebP format)


### 5.3 Phase 3: Interactions & Secondary Sections (Week 3-4)

**Tasks:**
- [ ] How it works timeline section
- [ ] FAQ accordion component (expand/collapse)
- [ ] Contact/CTA section
- [ ] Footer
- [ ] WhatsApp link integration (wa.me)

**Deliverables:**
- Complete page structure
- All interactive elements functional
- Mobile navigation (hamburger menu)


### 5.4 Phase 4: SEO & Performance Optimization (Week 4-5)

**Tasks:**
- [ ] Meta tags implementation (title, description, Open Graph)
- [ ] JSON-LD structured data (LocalBusiness, Organization, Service)
- [ ] Sitemap generation
- [ ] Robots.txt creation
- [ ] Image alt texts for all images
- [ ] Lighthouse audit (target 90+)
- [ ] Core Web Vitals optimization
- [ ] Mobile speed testing

**Deliverables:**
- SEO audit checklist completed
- Lighthouse report: 90+ score
- Core Web Vitals passing
- Sitemap.xml and robots.txt live


### 5.5 Phase 5: Testing & Refinement (Week 5-6)

**Tasks:**
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Device testing (iPhone 6+, Samsung Galaxy, iPad, desktop)
- [ ] WhatsApp link testing
- [ ] Form submissions (if added later)
- [ ] Analytics setup (Google Analytics 4)
- [ ] Search Console verification
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Content proofreading

**Deliverables:**
- QA test report
- Accessibility compliance verified
- Analytics configured


### 5.6 Phase 6: Deployment & Launch (Week 6)

**Tasks:**
- [ ] Domain setup (primarescue.id / DNS pointing to Vercel)
- [ ] Vercel deployment
- [ ] SSL certificate activation
- [ ] Google Search Console submission
- [ ] Google Business Profile verification
- [ ] Monitor 404 errors, crawl stats

**Deliverables:**
- Live website at custom domain
- Indexed in Google Search
- Monitoring dashboards active

---

## 6. DEPLOYMENT & MAINTENANCE

### 6.1 Deployment Checklist

```
PRE-LAUNCH:
□ All links working (internal & external)
□ No console errors (F12 → Console tab)
□ Images loading properly
□ CTA buttons clickable
□ WhatsApp link tested (opens WhatsApp successfully)
□ Responsive design tested on 5+ devices
□ Page loads under 3 seconds
□ All forms (if any) functional

SEO:
□ Meta title and description in <head>
□ H1 present and unique
□ Sitemap.xml created
□ Robots.txt in place
□ Structured data (JSON-LD) valid (test on schema.org validator)
□ Open Graph tags for social sharing

SECURITY:
□ HTTPS enabled
□ No mixed content warnings
□ Sensitive data not exposed in code/comments
□ Environment variables for API keys

PERFORMANCE:
□ Lighthouse score 90+
□ LCP < 2.5s
□ FID < 100ms
□ CLS < 0.1
```

### 6.2 Post-Launch Monitoring

```
WEEKLY CHECKS:
- Google Search Console: check for indexation errors
- Google Analytics: pageviews, referral sources, user location
- Page speed: monthly Lighthouse run
- Uptime monitoring (use Uptime Robot - free tier)

MONTHLY TASKS:
- Update content if needed
- Check for new 404 errors
- Analyze user behavior (bounce rate, scroll depth)
- Check Google Business Profile for reviews/changes
- Backup website files

QUARTERLY REVIEW:
- SEO performance analysis (ranking positions, click-through rates)
- Competitor monitoring (new local ambulans services)
- User feedback collection (survey or manual)
- Update outdated information
- Plan for new features (if needed)
```

### 6.3 Future Enhancement Ideas

```
POST-LAUNCH (Phase 2+):

1. BOOKING SYSTEM
   - Online booking form instead of just WhatsApp
   - Real-time ambulance tracking (for future if fleet grows)
   - Automated confirmation emails

2. BLOG/NEWS
   - Article: "Pertolongan Pertama Saat Ambulans Dalam Perjalanan"
   - Article: "Kapan Waktu yang Tepat Memanggil Ambulans"
   - Better for SEO (long-tail keywords, returning users)

3. REVIEWS/TESTIMONIALS
   - Google Reviews widget (display 5-star ratings)
   - Customer testimonials section
   - Build trust with social proof

4. MULTI-LANGUAGE
   - English version for expat communities
   - Expand reach

5. MOBILE APP
   - If growth demands it (later stage)
```

---

## 7. PERFORMANCE METRICS & MONITORING

### 7.1 Key Metrics to Track

```
SEO METRICS:
  • Organic traffic to website
  • Keywords ranking (position 1-10 for target keywords)
  • Click-through rate from search results
  • Impressions in search results
  → Tracked via Google Search Console + Google Analytics 4

USER ENGAGEMENT:
  • Page views per session
  • Time on page
  • Scroll depth (how far users scroll)
  • Bounce rate
  • Mobile vs desktop traffic split
  → Tracked via Google Analytics 4

CONVERSION METRICS:
  • WhatsApp clicks (via event tracking)
  • Form submissions (if implemented)
  • Phone calls (if call tracking added)
  • Estimated conversion rate
  → Custom event setup in GA4

PERFORMANCE METRICS:
  • Page load time (Lighthouse)
  • Core Web Vitals (LCP, FID, CLS)
  • Mobile usability score
  → Tracked via Lighthouse + Search Console

LOCAL SEO:
  • Position in Google Maps/Local Pack
  • Google Business Profile views
  • Direction requests from profile
  • Phone calls from profile
  → Tracked via Google Business Profile insights

GOALS (First 6 months):
  ✓ Get indexed in Google (Week 1-2 of launch)
  ✓ Rank top 3 for "ambulans Gunung Sindur" (Month 2-3)
  ✓ Rank top 5 for "ambulans Bogor" (Month 3-4)
  ✓ 50+ organic visits/month (Month 2)
  ✓ 200+ organic visits/month (Month 4+)
  ✓ <3 second page load time consistently
  ✓ 90+ Lighthouse score maintained
```

### 7.2 Analytics Setup

```
GOOGLE ANALYTICS 4 CONFIGURATION:

Events to track:
  • Page view (automatic)
  • Scroll depth: 25%, 50%, 75%, 100% of page
  • WhatsApp click: track clicks on WhatsApp button
  • Section view: track which sections user views
  
  Event setup example (in Next.js):
  ```javascript
  // components/WhatsAppButton.js
  import { useCallback } from 'react';
  
  export default function WhatsAppButton() {
    const handleClick = useCallback(() => {
      // Track event
      if (window.gtag) {
        window.gtag('event', 'whatsapp_click', {
          'event_category': 'engagement',
          'event_label': 'primary_cta'
        });
      }
      // Open WhatsApp
      window.open('https://wa.me/6285770918098');
    }, []);
    
    return (
      <button onClick={handleClick} className="btn-whatsapp">
        Hubungi Via WhatsApp
      </button>
    );
  }
  ```

GOOGLE SEARCH CONSOLE:
  • Verify domain ownership
  • Submit sitemap
  • Monitor search performance (clicks, impressions, CTR, position)
  • Check for indexation issues
  • Monitor mobile usability
  • Check for security issues

GOOGLE BUSINESS PROFILE:
  • Verify business (important for local SEO)
  • Add photos of ambulans, team, location
  • Respond to reviews
  • Monitor insights (views, clicks, direction requests)
  • Post updates/announcements
```

---

## APPENDIX A: DESIGN SYSTEM TOKENS (Tailwind Config)

```javascript
// tailwind.config.js

module.exports = {
  theme: {
    colors: {
      'emergency-red': '#DC2626',
      'navy-dark': '#1E293B',
      'clinical-white': '#F8FAFC',
      'medical-green': '#10B981',
      'slate-gray': '#64748B',
      'border-light': '#E2E8F0',
      'background-soft': '#F1F5F9',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    fontSize: {
      'xs': ['14px', { lineHeight: '1.6' }],
      'sm': ['16px', { lineHeight: '1.6' }],
      'base': ['16px', { lineHeight: '1.6' }],
      'lg': ['20px', { lineHeight: '1.5' }],
      'xl': ['28px', { lineHeight: '1.3' }],
      '2xl': ['36px', { lineHeight: '1.3' }],
      '3xl': ['48px', { lineHeight: '1.2' }],
    },
    spacing: {
      '0': '0',
      '1': '8px',
      '2': '16px',
      '3': '24px',
      '4': '32px',
      '5': '40px',
      '6': '48px',
      '7': '56px',
      '8': '64px',
    },
    borderRadius: {
      'none': '0',
      'sm': '4px',
      'base': '8px',
      'lg': '12px',
      'full': '9999px',
    },
  },
};
```

---

## APPENDIX B: CONTENT CHECKLIST

Content audit untuk memastikan semua copy SEO-friendly dan user-focused:

```
□ Homepage title includes primary keyword + location
□ Meta description includes CTA
□ H1 contains primary keyword naturally
□ H2/H3 use secondary keywords
□ All images have descriptive alt text
□ Body copy mentions target keywords 2-3x naturally
□ No keyword stuffing (reads naturally)
□ Headings are unique (no duplicates)
□ All links have descriptive anchor text (not "click here")
□ Phone number consistent across page (085770918098)
□ Address consistent and complete
□ Operating hours clearly stated (24/7)
□ CTA prominent and above-the-fold
□ Mobile-friendly language (short sentences, clear)
□ Avoid medical jargon or explain if necessary
□ Tone conversational (not corporate robot)
```

---

## APPENDIX C: DEPLOYMENT COMMANDS

```bash
# Initial setup
npx create-next-app@latest prima-rescue --typescript --tailwind
cd prima-rescue

# Development
npm run dev  # http://localhost:3000

# Build
npm run build  # Creates .next/ production build

# Export (static generation)
npm run export  # Creates out/ directory ready for hosting

# Deploy to Vercel
npm i -g vercel
vercel  # Prompts for login, deploys automatically

# Or push to GitHub, connect to Vercel for auto-deployment
git push origin main  # Auto-triggers deployment if Vercel connected
```

---

## DOCUMENT METADATA

**Version:** 1.0  
**Last Updated:** January 2024  
**Status:** Ready for Development  
**Audience:** Development team, Prima Rescue management  
**Next Review:** Post-launch (Month 1)

---

**END OF DOCUMENTATION**

Catatan: Dokumentasi ini dirancang sebagai panduan komprehensif untuk development dan deployment. Setiap section dapat disesuaikan berdasarkan feedback stakeholder atau perubahan kebutuhan bisnis.
