import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Custom domain (primerescue.web.id) diserve dari root, jadi TANPA basePath.
  // Jangan tambahkan basePath lagi kecuali balik ke project-site URL.
  output: isProd ? "export" : undefined,
  
  // GitHub Pages tidak punya server optimizer gambar
  images: { unoptimized: true },
  
  // Konsisten dengan bagaimana GH Pages melayani halaman
  trailingSlash: true,
};

export default nextConfig;
