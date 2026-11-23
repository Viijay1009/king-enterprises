// Copy follows the client's "Revised Two-Page Website Content" draft. Company facts
// come from their Electromags supplier registration form (EMAGS/PUR/006). Bank, PAN
// and loan details from that form are deliberately left off the public site.

// Canonical origin for metadata, sitemap and structured data. Set NEXT_PUBLIC_SITE_URL
// to the live domain; on Vercel the production URL is used until then.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export const seo = {
  title: "Industrial Scrap Trading & Recycling in Sriperumbudur | King Enterprises",
  description:
    "King Enterprises is an industrial scrap business in Sriperumbudur, Tamil Nadu, established in 2016. Industrial scrap trading, scrap collection and handling, material recovery and a planned recycling material plant.",
};

export const businessSeo = {
  title: "Our Business & Future | King Enterprises, Sriperumbudur",
  description:
    "How King Enterprises works: our business approach, a 1.5-acre facility with a 72-member workforce in Sriperumbudur, and our plan for a recycling material plant handling twelve types of recyclable material.",
};

export const company = {
  name: "King Enterprises",
  tagline: "Turning industrial scrap into valuable resources.",
  services: ["Industrial scrap trading", "Scrap management", "Recycling solutions"],
  established: 2016,
  owner: "Vinoth B",
  group: "Sri Ambal Traders & Enterprises",
  gst: "33AXFPV6636H1Z5",
  msme: "TN-08-0057180",
  pcbConsent: "F.2342SRP/GS/DEE/TNPCB/SPR/W/2020",
};

export const locations = {
  factory: {
    label: "Factory address",
    lines: [
      "Plot No. 4, Chand Nagar, Kiloy Village",
      "Vayalur Post, Sriperumbudur Taluk",
      "Kancheepuram District 602105",
      "Tamil Nadu, India",
    ],
    contactPeople: "Sarath, Maaran",
    phones: ["8610745342", "9361297316"],
    email: "kingenterprises1850@gmail.com",
    mapQuery: "Kiloy Village, Sriperumbudur, Tamil Nadu 602105",
  },
  office: {
    label: "Office address",
    lines: [
      "No. 2, Bakthavachalam Street",
      "Sriperumbudur Village and Post, Sriperumbudur Taluk",
      "Kancheepuram District 602105",
      "Tamil Nadu, India",
    ],
    contactPeople: "Vinoth B",
    phones: ["7397447397"],
    mapQuery: "Bakthavachalam Street, Sriperumbudur, Tamil Nadu 602105",
  },
};

export const email = locations.factory.email;
export const primaryPhone = locations.factory.phones[0];

export const contacts = [
  { who: "Sarath", where: "Factory", phone: locations.factory.phones[0] },
  { who: "Maaran", where: "Factory", phone: locations.factory.phones[1] },
  { who: "Vinoth B", where: "Office", phone: locations.office.phones[0] },
];

export function formatPhone(n: string) {
  return `${n.slice(0, 5)} ${n.slice(5)}`;
}

export const about =
  "King Enterprises is an industrial scrap business established in 2016 and headquartered in Sriperumbudur, Tamil Nadu. Over the years, we have developed our business operations and infrastructure to serve the industrial sector through scrap-related commercial activities and material recovery opportunities.";

export const aboutMore =
  "Our business is built on industrial relationships, operational experience and a commitment to creating value from recyclable resources. With an established facility, a 72-member workforce and a growing vision for recycling, King Enterprises aims to expand its capabilities and contribute to the evolving scrap and recycling industry.";

// The turnover is the historical figure from the supplier registration form.
// Confirm the financial year and current figure with the client before launch.
export const glance = [
  { term: "Established", value: "2016" },
  { term: "Annual turnover", value: "₹7.10 Cr" },
  { term: "Workforce", value: "72", unit: "employees" },
  { term: "Facility area", value: "1.5", unit: "acres" },
  { term: "Business location", value: "Sriperumbudur", unit: "Tamil Nadu", wide: true },
  { term: "Working shifts", value: "Two" },
];

export const pillars = [
  {
    image: "material-steel",
    title: "Industrial scrap trading",
    body: "Industrial scrap-related commercial activities and material trading, connecting industrial material sources with potential buyers and recovery opportunities.",
  },
  {
    image: "material-electrical",
    title: "Scrap collection and handling",
    body: "Organised handling and coordination of industrial scrap materials.",
  },
  {
    image: "material-aluminium",
    title: "Material recovery",
    body: "Exploring opportunities to recover value from recyclable industrial materials and support resource utilisation.",
  },
  {
    image: "material-plastic",
    title: "Recycling development",
    body: "Planning for future expansion into a dedicated recycling material plant.",
    planned: true,
  },
] as const;

// Positions are schematic (viewBox 800 × 500), projected from approximate
// latitude/longitude so relative direction and distance read correctly.
export type Hub = {
  id: string;
  name: string;
  x: number;
  y: number;
  route: string;
  labelSide: "left" | "right";
};

export const yard = { name: "Kiloy facility", x: 470, y: 222 };

export const hubs: Hub[] = [
  {
    id: "irungattukottai",
    name: "Irungattukottai",
    x: 650,
    y: 214,
    route: "M470 222 C 530 200, 590 200, 650 214",
    labelSide: "right",
  },
  {
    id: "mambakkam",
    name: "Mambakkam",
    x: 600,
    y: 372,
    route: "M470 222 C 500 290, 540 350, 600 372",
    labelSide: "right",
  },
  {
    id: "mappedu",
    name: "Mappedu",
    x: 500,
    y: 92,
    route: "M470 222 C 460 170, 470 120, 500 92",
    labelSide: "right",
  },
  {
    id: "kancheepuram",
    name: "Kancheepuram",
    x: 140,
    y: 412,
    route: "M470 222 C 380 300, 250 340, 140 412",
    labelSide: "left",
  },
];

// Names as recorded in the supplier registration form. Confirm each relationship
// and permission to show the name before launch.
export const customers = [
  { name: "Ascend Performance Materials", hub: "irungattukottai", work: "Automotive injection moulding" },
  { name: "Steels Shoppe Pvt Ltd", hub: "irungattukottai", work: "Automotive body parts" },
  { name: "Kerry Indev Logistics", hub: "irungattukottai", work: "Automotive packing parts" },
  { name: "Jushin Pvt Ltd", hub: "mambakkam", work: "Electrical and automotive sub-parts" },
  { name: "JPM Automotive Ltd", hub: "mambakkam", work: "Key sets and automotive components" },
  { name: "Suprajit Glass Pvt Ltd", hub: "mappedu", work: "Automotive bulbs" },
  { name: "Myung Automachine", hub: "kancheepuram", work: "Plastic and aluminium auto parts" },
] as const;

export const leaders = [
  {
    name: "Sarath",
    role: "Director",
    body: "Providing leadership and business direction, supporting the company's development and long-term growth.",
  },
  {
    name: "Vinoth",
    role: "Owner",
    body: "Overseeing business operations and driving the company's continued development and commercial growth.",
  },
];

export const approach: { icon: "handshake" | "search" | "gears" | "link" | "leaf"; text: string }[] = [
  { icon: "handshake", text: "Developing strong industrial business relationships." },
  { icon: "search", text: "Identifying valuable recyclable material opportunities." },
  { icon: "gears", text: "Building efficient business and material handling operations." },
  { icon: "link", text: "Expanding commercial partnerships." },
  { icon: "leaf", text: "Exploring sustainable recycling opportunities." },
];

export type ProfileFact = { term: string; value: string; note?: string; copy?: boolean };

// The machines are listed on the registration form as injection moulding machines.
// Confirm their current role in the scrap business with the client before launch.
export const infrastructure: { title: string; facts: ProfileFact[] }[] = [
  {
    title: "Facility",
    facts: [
      { term: "Factory facility", value: "1.5 acres", note: "Kiloy Village, Sriperumbudur" },
      { term: "Sanctioned power", value: "120 kWe" },
      { term: "Machinery", value: "3 × 300 ton", note: "Dhosang injection moulding machines, South Korean make" },
    ],
  },
  {
    title: "People",
    facts: [
      { term: "Workforce", value: "72 members" },
      { term: "Teams", value: "Dedicated", note: "Operational teams for each function" },
      { term: "Working pattern", value: "Two shifts" },
    ],
  },
  {
    title: "Registrations",
    facts: [
      { term: "GSTIN", value: company.gst, copy: true },
      { term: "MSME (Udyam)", value: company.msme, copy: true },
      { term: "TNPCB consent", value: company.pcbConsent, copy: true },
    ],
  },
];

export const workforce = [
  { label: "Production", count: 42 },
  { label: "Support", count: 15 },
  { label: "Quality", count: 11 },
  { label: "Development", count: 4 },
];

export const reasons = [
  "Established business operations since 2016.",
  "Industrial presence in Sriperumbudur.",
  "1.5-acre facility.",
  "72-member workforce.",
  "Established industrial business relationships.",
  "Focus on material recovery and recycling opportunities.",
  "Long-term vision for recycling infrastructure.",
];
