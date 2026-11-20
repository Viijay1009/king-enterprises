// Every photo on the site. Drop a finished image into /public/images/<id>.jpg
// at the listed size and it replaces the placeholder automatically on the next build.

export type ImageSpec = {
  width: number;
  height: number;
  alt: string;
  prompt: string;
};

const style =
  "Documentary industrial photography, natural daylight, true-to-life colour, shot on a 35mm lens, no text, no logos, no watermarks.";

export const images = {
  "hero-yard": {
    width: 2400,
    height: 1350,
    alt: "Compressed steel bales stacked at the King Enterprises yard with a lorry being loaded",
    prompt: `Wide 16:9 shot of an organised industrial scrap yard in Tamil Nadu, India at early morning golden hour, main subject in the right half and calm, darker open space in the left third for text overlay. Neat rows of compressed steel scrap bales in the foreground, a blue Indian heavy-duty lorry being loaded in the mid-ground, two workers in hi-vis vests and safety helmets, concrete yard floor, clear sky. ${style}`,
  },
  "material-steel": {
    width: 1200,
    height: 900,
    alt: "Stamped steel offcuts from an automotive press shop",
    prompt: `Close-up of a heap of bright stamped steel press-shop skeletons and automotive body-panel offcuts in a steel bin, shallow depth of field, cool steel tones. ${style}`,
  },
  "material-aluminium": {
    width: 1200,
    height: 900,
    alt: "Aluminium casting runners and machining chips",
    prompt: `Close-up of aluminium casting runners and curled machining chips on a factory floor pallet, soft side light highlighting metallic texture. ${style}`,
  },
  "material-plastic": {
    width: 1200,
    height: 900,
    alt: "Sorted plastic injection-moulding runners in bags",
    prompt: `Large woven sacks filled with sorted coloured plastic injection-moulding runners and rejected automotive plastic parts, black and grey with some colour, in an Indian factory store. ${style}`,
  },
  "material-packaging": {
    width: 1200,
    height: 900,
    alt: "Baled cardboard cartons and stacked wooden pallets",
    prompt: `Compressed bales of brown corrugated cardboard cartons next to a stack of used wooden pallets and rolled stretch film, industrial warehouse setting. ${style}`,
  },
  "material-glass": {
    width: 1200,
    height: 900,
    alt: "Crate of rejected automotive lamp bulbs",
    prompt: `Plastic crate filled with rejected automotive halogen lamp bulbs and small glass components, carefully separated, factory quality-rejection area. ${style}`,
  },
  "material-electrical": {
    width: 1200,
    height: 900,
    alt: "Bundled cable offcuts and wiring harness rejects",
    prompt: `Bundled copper cable offcuts and automotive wiring harness rejects with coloured insulation, coiled in a metal cage bin. ${style}`,
  },
  "facility-press": {
    width: 1200,
    height: 900,
    alt: "A 300-ton hydraulic baling press compacting steel scrap",
    prompt: `Heavy 300-ton hydraulic scrap baling press inside an Indian industrial shed, freshly compressed cube of steel scrap being ejected, operator in hi-vis vest and helmet at the control panel, steel roof trusses. ${style}`,
  },
  "facility-fleet": {
    width: 1200,
    height: 900,
    alt: "King Enterprises scrap collection lorries parked at the yard",
    prompt: `Three blue Indian heavy-duty lorries with open steel bodies parked in a row at a scrap yard in Sriperumbudur, Tamil Nadu, morning light, plain unbranded trucks. ${style}`,
  },
  "vision-plant": {
    width: 1600,
    height: 900,
    alt: "Concept of the planned King Enterprises recycling material plant",
    prompt: `Architectural photograph-style concept of a modern recycling material plant in South India, clean steel-clad shed with solar panels on the roof, segregated material bays visible through open doors, landscaped boundary with trees. ${style}`,
  },
} satisfies Record<string, ImageSpec>;

export type ImageId = keyof typeof images;
