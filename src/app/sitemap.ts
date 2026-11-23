import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${siteUrl}/images/hero-yard.webp`, `${siteUrl}/images/facility-fleet.webp`],
    },
    {
      url: `${siteUrl}/business`,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${siteUrl}/images/facility-press.webp`, `${siteUrl}/images/vision-plant.webp`],
    },
    {
      url: `${siteUrl}/privacy`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
