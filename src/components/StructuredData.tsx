import { company, email, hubs, leaders, locations, pillars, seo, siteUrl } from "@/content/site";

const postal = (lines: string[]) => ({
  "@type": "PostalAddress",
  streetAddress: lines.slice(0, -1).join(", ").replace(/, Sriperumbudur Taluk$/, ""),
  addressLocality: "Sriperumbudur",
  addressRegion: "Tamil Nadu",
  postalCode: "602105",
  addressCountry: "IN",
});

const phone = (n: string) => `+91-${n.slice(0, 5)}-${n.slice(5)}`;

// schema.org description of the business for search engines and AI answers.
const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "RecyclingCenter"],
      "@id": `${siteUrl}/#business`,
      name: company.name,
      description: seo.description,
      slogan: company.tagline,
      url: `${siteUrl}/`,
      logo: `${siteUrl}/brand/logo.png`,
      image: [`${siteUrl}/images/hero-yard.webp`, `${siteUrl}/images/vision-plant.webp`],
      telephone: phone(locations.factory.phones[0]),
      email,
      address: postal(locations.factory.lines),
      foundingDate: String(company.established),
      employee: leaders.map((l) => ({ "@type": "Person", name: l.name, jobTitle: l.role })),
      numberOfEmployees: { "@type": "QuantitativeValue", value: 72 },
      taxID: company.gst,
      parentOrganization: { "@type": "Organization", name: company.group },
      areaServed: [...hubs.map((h) => h.name), "Oragadam", "Sriperumbudur"].map((name) => ({
        "@type": "Place",
        name: `${name}, Tamil Nadu`,
      })),
      knowsAbout: ["Industrial scrap trading", "Scrap management", "Material recovery", "Recycling"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Our business",
        itemListElement: pillars
          .filter((p) => !("planned" in p))
          .map((p) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: p.title, description: p.body },
          })),
      },
      contactPoint: [
        ...locations.factory.phones.map((n) => ({
          "@type": "ContactPoint",
          telephone: phone(n),
          contactType: "sales",
          areaServed: "IN",
          availableLanguage: ["en", "ta"],
        })),
        {
          "@type": "ContactPoint",
          telephone: phone(locations.office.phones[0]),
          contactType: "customer service",
          areaServed: "IN",
        },
      ],
      department: {
        "@type": "LocalBusiness",
        name: `${company.name} office`,
        telephone: phone(locations.office.phones[0]),
        address: postal(locations.office.lines),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: company.name,
      inLanguage: "en-IN",
      publisher: { "@id": `${siteUrl}/#business` },
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
