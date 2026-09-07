import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/schema";

/**
 * Explicit route list rather than a filesystem glob: sitemap.ts is evaluated at
 * build time in a context where walking the app directory is unreliable, and an
 * explicit list also lets each route carry a sensible priority.
 *
 * Priorities: home > booking/services > supporting > informational.
 */
const ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/book", priority: 0.9, changeFrequency: "weekly" },

  // Services
  { path: "/mot", priority: 0.9, changeFrequency: "monthly" },
  { path: "/car-servicing", priority: 0.9, changeFrequency: "monthly" },
  { path: "/car-repair", priority: 0.8, changeFrequency: "monthly" },
  { path: "/brake-repairs", priority: 0.8, changeFrequency: "monthly" },
  { path: "/tyres", priority: 0.8, changeFrequency: "monthly" },
  { path: "/diagnostics", priority: 0.8, changeFrequency: "monthly" },
  { path: "/air-conditioning", priority: 0.8, changeFrequency: "monthly" },
  { path: "/wheel-alignment", priority: 0.8, changeFrequency: "monthly" },
  { path: "/local-recovery", priority: 0.8, changeFrequency: "monthly" },
  { path: "/collection-delivery-service", priority: 0.7, changeFrequency: "monthly" },
  { path: "/payment-finance", priority: 0.7, changeFrequency: "monthly" },

  // Supporting
  { path: "/why-choose-us", priority: 0.7, changeFrequency: "monthly" },
  { path: "/bosch-approved", priority: 0.7, changeFrequency: "monthly" },
  { path: "/video-health-check", priority: 0.6, changeFrequency: "monthly" },
  { path: "/courtesy-cars", priority: 0.6, changeFrequency: "monthly" },
  { path: "/fleet", priority: 0.6, changeFrequency: "monthly" },

  // Informational
  { path: "/reviews", priority: 0.6, changeFrequency: "weekly" },
  { path: "/about", priority: 0.5, changeFrequency: "yearly" },
  { path: "/contact-us", priority: 0.8, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
