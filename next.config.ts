import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages = static hosting → Next.js harus export ke folder `out/`
  // (di-deploy oleh .github/workflows/nextjs.yml lewat actions/upload-pages-artifact)
  output: "export",
  // Disimpan di https://zeeinz-ux.github.io/Prime-Rescue/ (bukan root domain)
  // → semua path aset/route otomatis diberi prefix "/Prime-Rescue".
  // GANTI JADI "" bila sudah pakai custom domain (https://primarescue.id).
  basePath: "/Prime-Rescue",
  // GitHub Pages tidak punya server optimizer gambar → pakai <img> biasa.
  images: { unoptimized: true },
  // Konsisten dengan bagaimana GH Pages melayani halaman (trailing slash).
  trailingSlash: true,
};

export default nextConfig;
