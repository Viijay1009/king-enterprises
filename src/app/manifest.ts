import type { MetadataRoute } from "next";
import { company, seo } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.name,
    short_name: "King Ent.",
    description: seo.description,
    start_url: "/",
    display: "browser",
    background_color: "#f5f7fa",
    theme_color: "#0a2148",
    icons: [{ src: "/icon.png", sizes: "256x256", type: "image/png" }],
  };
}
