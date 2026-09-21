import armadaImg from "@/public/images/armada-1.webp";
import interiorImg from "@/public/images/interior-1.webp";
import timImg from "@/public/images/tim-1.webp";
import antarImg from "@/public/images/antar-1.webp";

export const GALLERY_PHOTOS = [
  {
    src: armadaImg,
    alt: "Armada ambulans Prima Rescue siap melayani 24 jam di Gunung Sindur, Bogor",
    caption: "Armada Prima Rescue",
  },
  {
    src: interiorImg,
    alt: "Interior ambulans Prima Rescue yang bersih, steril dan nyaman",
    caption: "Interior Steril & Nyaman",
  },
  {
    src: timImg,
    alt: "Tim terlatih Prima Rescue saat menangani pasien dengan sigap",
    caption: "Tim Terlatih & Berpengalaman",
  },
  {
    src: antarImg,
    alt: "Perjalanan pengantaran pasien menggunakan ambulans Prima Rescue",
    caption: "Pengantaran Cepat & Aman",
  },
] as const;