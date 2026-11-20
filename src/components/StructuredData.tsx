import { company, hubs, locations, materials, seo, siteUrl } from "@/content/site";

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
      "@type": "RecyclingCenter",
      "@id": `${siteUrl}/#business`,
      name: company.name,
      description: seo.description,
      slogan: company.tagline,
      url: `${siteUrl}/`,
      logo: `${siteUrl}/brand/logo.png`,
      image: [`${siteUrl}/images/hero-yard.webp`, `${siteUrl}/images/facility-press.webp`],
      telephone: phone(locations.factory.phones[0]),
      email: locations.factory.email,
      address: postal(locations.factory.lines),
      foundingDate: String(company.established),
      founder: { "@type": "Person", name: company.proprietor, jobTitle: "Proprietor" },
      numberOfEmployees: { "@type": "QuantitativeValue", value: 72 },
      taxID: company.gst,
      parentOrganization: { "@type": "Organization", name: company.group },
      areaServed: [...hubs.map((h) => h.name), "Oragadam", "Sriperumbudur"].map((name) => ({
        "@type": "Place",
        name: `${name}, Tamil Nadu`,
      })),
      knowsAbout: ["Industrial scrap collection", "Scrap baling", "Automotive scrap recycling"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Scrap we collect",
        itemListElement: materials.map((m) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: `${m.title} collection and recycling`, description: m.body },
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
          email: locations.office.email,
          contactType: "customer service",
          areaServed: "IN",
        },
      ],
      department: {
        "@type": "LocalBusiness",
        name: `${company.name} office`,
        telephone: phone(locations.office.phones[0]),
        email: locations.office.email,
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
