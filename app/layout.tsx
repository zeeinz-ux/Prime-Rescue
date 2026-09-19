import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import JsonLd from "@/components/seo/JsonLd";
import GoogleAnalytics from "@/components/seo/GoogleAnalytics";
import ScrollTracking from "@/components/seo/ScrollTracking";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://primarescue.id"),
  title: "Ambulans 24 Jam Prima Rescue Gunung Sindur",
  description:
    "Layanan ambulans profesional 24/7 di Gunung Sindur & Bogor. Pengantaran cepat, tim terlatih, hubungi WhatsApp 085770918098 sekarang juga.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ambulans 24 Jam Prima Rescue Gunung Sindur",
    description:
      "Layanan ambulans profesional 24/7 di Gunung Sindur & Bogor. Hubungi WhatsApp 085770918098.",
    url: "https://primarescue.id",
    siteName: "Prima Rescue",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Prima Rescue - Ambulans 24 Jam Gunung Sindur, Bogor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ambulans 24 Jam Prima Rescue Gunung Sindur",
    description:
      "Layanan ambulans profesional 24/7 di Gunung Sindur & Bogor. Hubungi WhatsApp 085770918098.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={inter.variable}>
      <body>
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy-dark focus:px-4 focus:py-2 focus:text-white"
        >
          Lewati ke konten utama
        </a>
        <JsonLd />
        <GoogleAnalytics />
        <ScrollTracking />
        <Header />
        <main id="konten">{children}</main>
        <Footer />
      </body>
    </html>
  );
}