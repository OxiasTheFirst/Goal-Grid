import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// Single-page site: the homepage is the only indexable URL (in-page #anchors are not separate pages).
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${siteConfig.url}/`, changeFrequency: "monthly", priority: 1 }];
}
