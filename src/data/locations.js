import { IMG } from "./properties";

export const LOCATIONS = [
  {
    slug: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    tagline: "The world's address for sky, sea and ambition.",
    overview:
      "Dubai has rewritten the rules of luxury living. From the glass canyons of Downtown to the beachfront manors of Palm Jumeirah, the emirate pairs tax-free ownership with world-class schools, dining and a 360-day wall of sunshine.\n\nBuyers are drawn by the certainty of title law, high rental yields and a golden visa pathway that turns real estate into residency. For RESIPLEX, Dubai remains our busiest market — and our deepest network.",
    image: IMG.dubaiSky,
    gallery: [IMG.dubaiSky, IMG.dubaiMarina, IMG.marina, IMG.palm],
    properties: ["grand-residence", "palm-vista-villa", "marina-view-residence", "palm-beach-villa"],
    neighborhoods: [
      {
        name: "Dubai Hills Estate",
        blurb: "18-hole golf, green corridors and family-scale estates minutes from Downtown.",
        image: IMG.grand,
      },
      {
        name: "Palm Jumeirah",
        blurb: "Private beaches, signature villas and the finest marina address on the Gulf.",
        image: IMG.palm,
      },
      {
        name: "Dubai Marina",
        blurb: "Vertical living on the water — promenade dining, yacht berths and sunset views.",
        image: IMG.marina,
      },
      {
        name: "Downtown Dubai",
        blurb: "The Burj Khalifa skyline, Dubai Mall and the pulse of the city at your door.",
        image: IMG.dubaiSky,
      },
    ],
    stats: [
      { label: "Median home price", value: "$1.85M" },
      { label: "Avg rental yield", value: "5.9%" },
      { label: "Price growth 12mo", value: "+9.4%" },
      { label: "Avg days on market", value: "34" },
    ],
    whyLive: [
      {
        title: "Tax-free ownership",
        text: "No annual property tax, no capital gains — Dubai leaves your appreciation intact.",
      },
      {
        title: "Golden visa pathway",
        text: "Property over AED 2M unlocks a 10-year renewable residency visa.",
      },
      {
        title: "World-class city life",
        text: "Michelin dining, top-tier international schools and year-round climate.",
      },
      {
        title: "Liquid, global market",
        text: "A deep buyer pool keeps demand resilient and exits practical.",
      },
    ],
    related: ["london", "new-york"],
  },
  {
    slug: "karachi",
    name: "Karachi",
    country: "Pakistan",
    tagline: "A rising metropolis with unmatched value and momentum.",
    overview:
      "Karachi, the financial heart of Pakistan, is emerging as one of the region's most compelling property destinations. DHA's manicured phases and the developing seafront offer modern towers, gated communities and build-to-suit manors at a fraction of global luxury prices.\n\nRental demand is strong and yields among the highest in our portfolio. For buyers fluent in both legacy and new-build master plans, Karachi delivers exceptional entry points and long-term appreciation.",
    image: IMG.azure,
    gallery: [IMG.azure, IMG.dha, IMG.interiors.livingGold, IMG.interiors.kitchenDark],
    properties: ["azure-heights", "dha-moonlight-manor"],
    neighborhoods: [
      {
        name: "DHA Phase 5",
        blurb: "Wide, tree-lined streets and freestanding manors in the status corridor.",
        image: IMG.dha,
      },
      {
        name: "DHA Phase 6",
        blurb: "Modern towers and penthouses rising on the sea-facing grid.",
        image: IMG.azure,
      },
      {
        name: "Clifton",
        blurb: "Waterfront living, high-street retail and the city's most storied addresses.",
        image: IMG.beach,
      },
      {
        name: "Bahria/Seaview",
        blurb: "New-master communities with beaches, towers and planned infrastructure.",
        image: IMG.interiors.bedroomView,
      },
    ],
    stats: [
      { label: "Median home price", value: "$950K" },
      { label: "Avg rental yield", value: "7.4%" },
      { label: "Price growth 12mo", value: "+12.1%" },
      { label: "Avg days on market", value: "48" },
    ],
    whyLive: [
      {
        title: "High rental yields",
        text: "One of the region's strongest income markets for residential stock.",
      },
      {
        title: "Entry-point value",
        text: "Global-grade finishes at a fraction of Dubai or London pricing.",
      },
      {
        title: "Rising infrastructure",
        text: "New seafront corridors and master plans are expanding the luxury map.",
      },
      {
        title: "Deep rental pool",
        text: "A fast-growing professional class keeps occupancy high.",
      },
    ],
    related: ["dubai", "toronto"],
  },
  {
    slug: "london",
    name: "London",
    country: "United Kingdom",
    tagline: "Prime squares, quiet gardens and centuries of provenance.",
    overview:
      "London remains the benchmark for global capital. Prime and super-prime stock in Mayfair, Chelsea and Belgravia has held through every cycle, buoyed by limited supply, strong regulation and a deep pool of international buyers.\n\nFrom period townhouses with private gardens to lateral apartments behind historic façades, London rewards patience — and RESIPLEX knows exactly where the next corridors of growth sit.",
    image: IMG.london,
    gallery: [IMG.london, IMG.metropolitan, IMG.chelsea, IMG.interiors.armchair],
    properties: ["the-metropolitan", "chelsea-garden-house"],
    neighborhoods: [
      {
        name: "Mayfair",
        blurb: "Landmark blocks, Berkeley Square and the capital's most storied salons.",
        image: IMG.metropolitan,
      },
      {
        name: "Chelsea",
        blurb: "Garden squares and white-stucco terraces on the King's Road orbit.",
        image: IMG.chelsea,
      },
      {
        name: "Knightsbridge",
        blurb: "Harrods, Hyde Park and elevation — the classic super-prime address.",
        image: IMG.interiors.livingGold,
      },
      {
        name: "Belgravia",
        blurb: "Grand stucco mansions behind gated, immaculate garden squares.",
        image: IMG.interiors.bedroom,
      },
    ],
    stats: [
      { label: "Median home price", value: "$3.4M" },
      { label: "Avg rental yield", value: "3.6%" },
      { label: "Price growth 12mo", value: "+3.2%" },
      { label: "Avg days on market", value: "41" },
    ],
    whyLive: [
      {
        title: "Durable prime market",
        text: "Prime central London has outpaced inflation through every modern cycle.",
      },
      {
        title: "Scarcity by design",
        text: "Conservation rules cap supply, protecting long-term values.",
      },
      {
        title: "Global schools & culture",
        text: "Elite schooling, galleries and finance keep demand structural.",
      },
      {
        title: "Sterling entry points",
        text: "Soft currency windows have historically rewarded international buyers.",
      },
    ],
    related: ["new-york", "dubai"],
  },
  {
    slug: "new-york",
    name: "New York",
    country: "United States",
    tagline: "Skyline currency on the world's most liquid market.",
    overview:
      "New York sets the price of being at the centre. Manhattan's towers and lofts are the most liquid luxury real estate on earth, trading around the clock among a permanent global buyer pool.\n\nFrom full-floor penthouses to light-soaked Tribeca conversions, the market rewards scale and location insight. RESIPLEX's New York desk keeps close watch on the rare full-floor opportunities that define the roster.",
    image: IMG.nyc,
    gallery: [IMG.nyc, IMG.skyline, IMG.nycNight, IMG.tribeca],
    properties: ["skyline-penthouse", "tribeca-glass-loft"],
    neighborhoods: [
      {
        name: "Manhattan Core",
        blurb: "Super-prime towers, private condos and river-to-river panoramas.",
        image: IMG.skyline,
      },
      {
        name: "Tribeca",
        blurb: "Cast-iron lofts, cobbled streets and the city's most covetable conversion stock.",
        image: IMG.tribeca,
      },
      {
        name: "Chelsea & West",
        blurb: "The High Line, new-build glass and a vibrant gallery corridor.",
        image: IMG.nycNight,
      },
      {
        name: "Central Park South",
        blurb: "Legendary pillars with uninterrupted park and skyline views.",
        image: IMG.nyc,
      },
    ],
    stats: [
      { label: "Median home price", value: "$2.9M" },
      { label: "Avg rental yield", value: "3.1%" },
      { label: "Price growth 12mo", value: "+4.6%" },
      { label: "Avg days on market", value: "63" },
    ],
    whyLive: [
      {
        title: "Maximum liquidity",
        text: "The deepest buyer pool on earth — exit windows are always open.",
      },
      {
        title: "Global talent gravity",
        text: "Finance, tech and culture keep Manhattan demand structurally strong.",
      },
      {
        title: "Iconic scarcity",
        text: "Full-floor condos and prime lofts are genuinely irreplaceable assets.",
      },
      {
        title: "Transparent regulation",
        text: "Clear title, public records and a dependable legal framework.",
      },
    ],
    related: ["miami", "london"],
  },
  {
    slug: "miami",
    name: "Miami",
    country: "United States",
    tagline: "Oceanfront ease, tax-free income and year-round shine.",
    overview:
      "Miami has grown from weekend escape to permanent global hub. No state income tax, a booming private-wealth sector and 620 miles of coastline make it the fastest-appreciating luxury market in the United States.\n\nFrom waterfront manors in Miami Beach to courtyard villas in Coral Gables, the market rewards proximity to water. RESIPLEX tracks every new listing along the key corridors the week it shows.",
    image: IMG.miami,
    gallery: [IMG.miami, IMG.oceanfront, IMG.coral, IMG.interiors.livingGold],
    properties: ["oceanfront-estate", "coral-gables-villa"],
    neighborhoods: [
      {
        name: "Miami Beach",
        blurb: "Atlantic frontage, buoy-flagged docks and beach-compound living.",
        image: IMG.oceanfront,
      },
      {
        name: "Coral Gables",
        blurb: "Tree-canopied estates, Mediterranean courtyards and family calm.",
        image: IMG.coral,
      },
      {
        name: "Brickell & Bay",
        blurb: "Glass towers, bay views and the financial district's new skyline.",
        image: IMG.marina,
      },
      {
        name: "Fisher Island",
        blurb: "The gated super-prime enclave where homes rarely trade publicly.",
        image: IMG.miami,
      },
    ],
    stats: [
      { label: "Median home price", value: "$1.7M" },
      { label: "Avg rental yield", value: "4.4%" },
      { label: "Price growth 12mo", value: "+8.9%" },
      { label: "Avg days on market", value: "52" },
    ],
    whyLive: [
      {
        title: "No state income tax",
        text: "Every gain and every dividend stays with the owner.",
      },
      {
        title: "Coastal scarcity",
        text: "Waterfront stock is finite; every year it becomes more so.",
      },
      {
        title: "Wealth migration",
        text: "A permanent stream of relocating founders and family offices.",
      },
      {
        title: "Resort-grade amenities",
        text: "Yachting, golf, dining and a 24/7 sense of the extraordinary.",
      },
    ],
    related: ["new-york", "dubai"],
  },
  {
    slug: "toronto",
    name: "Toronto",
    country: "Canada",
    tagline: "Lakefront towers and heritage lofts in a stable, diverse market.",
    overview:
      "Toronto is Canada's most liquid and internationally connected real-estate market. Downtown's glass towers, Yorkville's heritage conversions and the waterfront's new neighbourhoods serve a deep pool of professional and investor demand.\n\nA transparent legal system, strong rental demographics and consistent population growth make Toronto a cornerstone for balanced, long-horizon portfolios in the RESIPLEX roster.",
    image: IMG.toronto,
    gallery: [IMG.toronto, IMG.york, IMG.yorkville, IMG.interiors.livingBright],
    properties: ["york-sky-residence", "yorkville-heritage-loft"],
    neighborhoods: [
      {
        name: "Downtown Toronto",
        blurb: "Core towers with lake views, PATH access and transit at your door.",
        image: IMG.york,
      },
      {
        name: "Yorkville",
        blurb: "Heritage lofts, luxury retail and the city's most elegant streets.",
        image: IMG.yorkville,
      },
      {
        name: "Waterfront",
        blurb: "LakeOntario promenades and a recovering eastern front.",
        image: IMG.interiors.bedroomView,
      },
      {
        name: "The Annex",
        blurb: "Victorian houses on tree-lined ravines behind the university.",
        image: IMG.interiors.modernWarm,
      },
    ],
    stats: [
      { label: "Median home price", value: "$1.2M" },
      { label: "Avg rental yield", value: "4.1%" },
      { label: "Price growth 12mo", value: "+5.2%" },
      { label: "Avg days on market", value: "39" },
    ],
    whyLive: [
      {
        title: "Stable & regulated",
        text: "A transparent legal system and one of the world's safest banking cores.",
      },
      {
        title: "Strong rental demand",
        text: "Consistent population growth keeps occupancy and yields healthy.",
      },
      {
        title: "International gateway",
        text: "A genuinely global, multicultural urban centre.",
      },
      {
        title: "Liquid resale market",
        text: "Days-on-market and price stability favour patient investors.",
      },
    ],
    related: ["new-york", "london"],
  },
];

export function getLocationBySlug(slug) {
  return LOCATIONS.find((l) => l.slug === slug) || null;
}