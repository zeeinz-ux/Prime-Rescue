import type { MetadataRoute } from "next";
import { BUSINESS } from "@/data/businessInfo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BUSINESS.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}