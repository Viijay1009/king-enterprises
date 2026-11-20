// Company facts come from the client's Electromags supplier registration form
// (EMAGS/PUR/006). Bank, PAN, turnover and loan details from that form are
// deliberately left off the public site.

// Canonical origin for metadata, sitemap and structured data. Set NEXT_PUBLIC_SITE_URL
// to the live domain; on Vercel the production URL is used until then.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export const seo = {
  title: "Scrap Collection & Recycling in Sriperumbudur | King Enterprises",
  description:
    "King Enterprises collects and recycles steel, aluminium, plastic, packaging and electrical scrap for automotive plants in Sriperumbudur, Irungattukottai, Oragadam and Mambakkam. Own lorries, 300-ton balers, since 2016.",
};

export const company = {
  name: "King Enterprises",
  tagline: "Reduce, recycle, recreate",
  established: 2016,
  proprietor: "Vinoth B",
  proprietorQualification: "B.E. (Electrical and Electronics Engineering)",
  proprietorExperience: "9 years",
  group: "Sri Ambal Traders & Enterprises",
  gst: "33AXFPV6636H1Z5",
  msme: "TN-08-0057180",
  pcbConsent: "F.2342SRP/GS/DEE/TNPCB/SPR/W/2020",
};

export const locations = {
  factory: {
    label: "Factory and yard",
    lines: [
      "Plot No. 4, Chand Nagar, Kiloy Village",
      "Vayalur Post, Sriperumbudur Taluk",
      "Kancheepuram District 602105",
    ],
    contactPeople: "Sarath, Maaran",
    phones: ["8610745342", "9361297316"],
    email: "kingenterprises1850@gmail.com",
    mapQuery: "Kiloy Village, Sriperumbudur, Tamil Nadu 602105",
  },
  office: {
    label: "Office",
    lines: [
      "No. 2, Bakthavachalam Street",
      "Sriperumbudur Village and Post, Sriperumbudur Taluk",
      "Kancheepuram District 602105",
    ],
    contactPeople: "Vinoth B",
    phones: ["7397447397"],
    // The form reads "bv103132@gmail.comm"; corrected to .com — confirm with client.
    email: "bv103132@gmail.com",
    mapQuery: "Bakthavachalam Street, Sriperumbudur, Tamil Nadu 602105",
  },
};

export const primaryPhone = locations.factory.phones[0];

export function formatPhone(n: string) {
  return `${n.slice(0, 5)} ${n.slice(5)}`;
}

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

export const yard = { name: "Kiloy yard", x: 470, y: 222 };

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

export const customers = [
  { name: "Ascend Performance Materials", hub: "irungattukottai", work: "Automotive injection moulding" },
  { name: "Steels Shoppe Pvt Ltd", hub: "irungattukottai", work: "Automotive body parts" },
  { name: "Kerry Indev Logistics", hub: "irungattukottai", work: "Automotive packing parts" },
  { name: "Jushin Pvt Ltd", hub: "mambakkam", work: "Electrical and automotive sub-parts" },
  { name: "JPM Automotive Ltd", hub: "mambakkam", work: "Key sets and automotive components" },
  { name: "Suprajit Glass Pvt Ltd", hub: "mappedu", work: "Automotive bulbs" },
  { name: "Myung Automachine", hub: "kancheepuram", work: "Plastic and aluminium auto parts" },
] as const;

// Material streams inferred from the customers' production lines.
// Confirm the final list with the client before launch.
export const materials = [
  {
    image: "material-steel",
    short: "Steel",
    title: "Steel and ferrous scrap",
    body: "Press-shop skeletons, body-panel trimmings, rejected stampings and turnings.",
    sources: "Press shops, stamping and body-part lines",
    handling: "Separated from mixed loads and baled on our 300-ton presses.",
  },
  {
    image: "material-aluminium",
    short: "Aluminium",
    title: "Aluminium",
    body: "Casting runners, rejected parts, machining chips and profile offcuts.",
    sources: "Die-casting cells and machining lines",
    handling: "Kept apart from steel so it reaches aluminium recyclers clean.",
  },
  {
    image: "material-plastic",
    short: "Plastics",
    title: "Engineering plastics",
    body: "Injection-moulding runners, purgings and rejected mouldings.",
    sources: "Injection-moulding shops",
    handling: "Bagged by grade so it can be reground and reused.",
  },
  {
    image: "material-packaging",
    short: "Packaging",
    title: "Packaging waste",
    body: "Cartons, pallets, stretch film and damaged returnable packing.",
    sources: "Stores, inbound logistics and packing lines",
    handling: "Cartons are baled; pallets and film are collected separately.",
  },
  {
    image: "material-glass",
    short: "Glass",
    title: "Glass and lamp rejects",
    body: "Bulb-line rejects and glass components.",
    sources: "Lamp and bulb production lines",
    handling: "Collected in closed crates and kept out of mixed loads.",
  },
  {
    image: "material-electrical",
    short: "Electrical",
    title: "Electrical scrap",
    body: "Cable offcuts, wiring harness rejects and electrical sub-assemblies.",
    sources: "Harness and electrical sub-assembly lines",
    handling: "Copper-bearing scrap is separated so the metal can be recovered.",
  },
];

export const steps: { icon: "phone" | "lorry" | "press" | "recycle"; where: string; title: string; body: string }[] = [
  {
    icon: "phone",
    where: "At your plant",
    title: "Tell us what is piling up",
    body: "Call or send an enquiry. We agree the material, the expected quantity and how often you need it cleared.",
  },
  {
    icon: "lorry",
    where: "On the road",
    title: "Our lorry collects it",
    body: "Seven of our own lorries run scheduled and on-call pickups across the corridor.",
  },
  {
    icon: "press",
    where: "Kiloy yard",
    title: "We sort and bale at Kiloy",
    body: "Each load is weighed, separated by material and compacted on our 300-ton presses.",
  },
  {
    icon: "recycle",
    where: "At the recycler",
    title: "It goes back into production",
    body: "Baled material is dispatched for recycling, so it returns as raw material instead of landfill.",
  },
];

export type ProfileFact = { term: string; value: string; note?: string; copy?: boolean };

export const profile: { title: string; facts: ProfileFact[] }[] = [
  {
    title: "The company",
    facts: [
      { term: "Established", value: "2016", note: "Sriperumbudur, Tamil Nadu" },
      { term: "Proprietor", value: "Vinoth B", note: "B.E. (EEE), 9 years in industry" },
      { term: "Organisation", value: "Proprietorship", note: "Medium scale" },
      { term: "Group company", value: company.group },
    ],
  },
  {
    title: "Capacity",
    facts: [
      { term: "Presses", value: "3 × 300 ton", note: "Dhosang, South Korea, 2022" },
      { term: "Fleet", value: "7 lorries", note: "Our own scrap collection vehicles" },
      { term: "Yard", value: "1.5 acres", note: "Kiloy Village, Sriperumbudur" },
      { term: "Power", value: "120 kW", note: "Sanctioned load, with standby generator" },
      { term: "Working pattern", value: "2 shifts", note: "Monday to Saturday" },
    ],
  },
  {
    title: "Registrations",
    facts: [
      { term: "GSTIN", value: company.gst, copy: true },
      { term: "MSME (Udyam)", value: company.msme, copy: true },
      { term: "TNPCB consent", value: company.pcbConsent, copy: true },
      { term: "Quality system", value: "ISO roadmap", note: "Certification in progress" },
    ],
  },
];

export const workforce = [
  { label: "Production", count: 42 },
  { label: "Support", count: 15 },
  { label: "Quality", count: 11 },
  { label: "Development", count: 4 },
];
