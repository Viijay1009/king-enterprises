import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${siteUrl}/images/hero-yard.webp`, `${siteUrl}/images/facility-press.webp`],
    },
  ];
}
