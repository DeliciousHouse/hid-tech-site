import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://tech.hidconsult.com";
  const now = new Date();
  const routes = ["/", "/services", "/pricing", "/blog", "/contact", "/legal/privacy", "/legal/terms"];
  return routes.map((route) => ({ url: `${base}${route}`, lastModified: now }));
}

