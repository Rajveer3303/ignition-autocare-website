import { BRANCHES, SERVICE_LINKS, SITE } from "@/lib/site";

export const SITE_URL = "https://ignitionautocare.uk";

/** Postcode WF10 4FA, confirmed against Google Maps and postcodes.io. */
const GEO = { lat: 53.713745, lng: -1.34739 };

/** SITE.hours is display text ("08:00 – 17:00"); schema needs 24h open/close. */
const OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Saturday",
    opens: "08:00",
    closes: "16:00",
  },
];

/**
 * AutoRepair is a subtype of LocalBusiness and is the closest match for a
 * garage, so it carries the address/hours/geo signals Google uses for the
 * local pack while still being a valid LocalBusiness.
 *
 * Deliberately no aggregateRating: the 4.9/600+ figure comes from Google's own
 * reviews rather than reviews collected on this site, and marking those up as
 * first-party ratings is exactly the self-serving pattern Google penalises.
 */
export function localBusinessSchema() {
  const branch = BRANCHES[0];
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${SITE_URL}/#business`,
    name: SITE.name,
    url: SITE_URL,
    telephone: SITE.phone,
    email: SITE.email,
    description: SITE.tagline,
    image: `${SITE_URL}/images/garage/exterior-front.jpg`,
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Colorado Way",
      addressLocality: "Castleford",
      addressRegion: "West Yorkshire",
      postalCode: "WF10 4FA",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.lat,
      longitude: GEO.lng,
    },
    hasMap: branch.mapUrl,
    openingHoursSpecification: OPENING_HOURS,
    areaServed: [
      { "@type": "City", name: "Castleford" },
      { "@type": "City", name: "Pontefract" },
      { "@type": "City", name: "Normanton" },
      { "@type": "City", name: "Wakefield" },
      { "@type": "City", name: "Glasshoughton" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Garage Services",
      itemListElement: SERVICE_LINKS.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.label,
          url: `${SITE_URL}${s.href}`,
        },
      })),
    },
  };
}

/** FAQPage markup — makes FAQ blocks eligible for expandable search results. */
export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Breadcrumbs give Google the site hierarchy that sitelinks are derived from. */
export function breadcrumbSchema(trail: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE_URL}${t.href}`,
    })),
  };
}
