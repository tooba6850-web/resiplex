const img = (id, w = 1600) =>
  id.startsWith("/")
    ? id
    : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  heroUser: img("/hero_user.png"),
  heroMansion: img("/hero_mansion.jpg"),
  heroPenthouse: img("/hero_penthouse.jpg"),
  blogArchitecture: img("/blog_architecture.jpg"),
  grand: img("photo-1600596542815-ffad4c1539a9"),
  azure: img("photo-1545324418-cc1a3fa10c00"),
  palm: img("photo-1583608205776-bfd35f0d9f83"),
  metropolitan: img("photo-1568605114967-8130f3a36994"),
  oceanfront: img("photo-1512917774080-9991f1c4c750"),
  skyline: img("photo-1522708323590-d24dbb6b0267"),
  marina: img("photo-1486406146926-c627a92ad1ab"),
  chelsea: img("photo-1600585154526-990dced4db0d"),
  tribeca: img("photo-1600607688969-a5bfcd646154"),
  coral: img("photo-1613490493576-7fde63acd811"),
  dha: img("photo-1570129477492-45c003edd2be"),
  york: img("photo-1517935706615-2717063c2225"),
  yorkville: img("photo-1616486338812-3dadae4b4ace"),
  beach: img("photo-1600585154340-be6161a56a0c"),
  dubaiSky: img("photo-1512453979798-5ea266f8880c"),
  dubaiMarina: img("photo-1577803645773-f96470509666"),
  london: img("photo-1513635269975-59663e0ac1ad"),
  nyc: img("photo-1496442226666-8d4d0e62e6e9"),
  nycNight: img("photo-1519505907962-0a6cb0167c73"),
  miami: img("photo-1506966953602-c20cc11f75e3"),
  toronto: img("photo-1449824913935-59a10b8d2000"),
  interiors: {
    livingGold: img("photo-1598928506311-c55ded91a20c"),
    livingBright: img("photo-1616486029423-aaa4789e8c9a"),
    lounge: img("photo-1615873968403-89e068629265"),
    loungeDark: img("photo-1618221195710-dd6b41faaea6"),
    sofa: img("photo-1554995207-c18c203602cb"),
    armchair: img("photo-1586023492125-27b2c045efd7"),
    kitchenMarble: img("photo-1519710164239-da123dc03ef4"),
    kitchenDark: img("photo-1588854337236-6889d631faa8"),
    kitchenBright: img("photo-1556909114-f6e7ad7d3136"),
    kitchenShelf: img("photo-1556912173-3bb406ef7e77"),
    kitchenWhite: img("photo-1560185007-cde436f6a4d0"),
    bedroom: img("photo-1505691938895-1758d7feb511"),
    bedroomView: img("photo-1540518614846-7eded433c457"),
    modern: img("photo-1631679706909-1844bbd07221"),
    modernWarm: img("photo-1628744448840-55bdb2497bd4"),
    interiorCream: img("photo-1600607687939-ce8a6c25118c"),
    interiorClassic: img("photo-1502672260266-1c1ef2d93688"),
    dining: img("photo-1600607687920-4e2a09cf159d"),
    lobby: img("photo-1493809842364-78817add7ffb"),
    loft: img("photo-1484154218962-a197022b5858"),
    penthouse: img("photo-1600210492486-724fe5c67fb0"),
    modernClean: img("photo-1519710164239-da123dc03ef4"),
    villaPool: img("photo-1600566753086-00f18fb6b3ea"),
    villaEvening: img("photo-1613977257363-707ba9348227"),
    estateEvening: img("photo-1580587771525-78b9dba3b914"),
  },
};

export const AGENTS = {
  amelia: {
    name: "Amelia Hart",
    role: "Senior Luxury Advisor",
    phone: "+971 52 180 4421",
    email: "amelia.hart@resiplex.com",
    image: img("photo-1573497019940-1c28c88b4f3e", 800),
  },
  daniel: {
    name: "Daniel Reyes",
    role: "International Clients Lead",
    phone: "+1 212 555 0198",
    email: "daniel.reyes@resiplex.com",
    image: img("photo-1560250097-0b93528c311a", 800),
  },
  sofia: {
    name: "Sofia Bianchi",
    role: "Residential Sales Director",
    phone: "+44 20 7946 0427",
    email: "sofia.bianchi@resiplex.com",
    image: img("photo-1580489944761-15a19d654956", 800),
  },
  mateo: {
    name: "Mateo Alvarez",
    role: "Coastal Estates Specialist",
    phone: "+1 786 555 0163",
    email: "mateo.alvarez@resiplex.com",
    image: img("photo-1507003211169-0a1dd7228f2d", 800),
  },
  norah: {
    name: "Norah Khalid",
    role: "Portfolio & Investment Advisor",
    phone: "+971 4 330 8842",
    email: "norah.khalid@resiplex.com",
    image: img("photo-1544005313-94ddf0286df2", 800),
  },
};

export const PROPERTIES = [
  {
    slug: "grand-residence",
    name: "The Grand Residence",
    city: "dubai",
    area: "Dubai Hills Estate",
    type: "Luxury Home",
    status: "sale",
    price: 2800000,
    period: "",
    beds: 5,
    baths: 6,
    sqft: 7200,
    yearBuilt: 2021,
    featured: true,
    newListing: false,
    published: "2026-08-14",
    image: IMG.grand,
    gallery: [IMG.grand, IMG.interiors.lobby, IMG.interiors.livingGold, IMG.interiors.bedroomView],
    description:
      "Set within the emerald fairways of Dubai Hills, The Grand Residence is a study in relaxed grandeur. Soaring double-height ceilings, a sculptural stone staircase and walls of glass dissolve the line between the formal salon and the terraced garden beyond.\n\nThe home unfolds over four levels connected by a private lift, with a chef's kitchen, climate-controlled wine room and a spa-inspired primary suite opening onto a swimmable lap pool.",
    features: [
      "Double-height entrance salon",
      "Private lift serving all levels",
      "Chef's kitchen with Gaggenau suite",
      "Climate-controlled wine room",
      "Spa-inspired primary suite & sauna",
      "Swimmable lap pool on garden level",
    ],
    amenities: [
      "24/7 gated security",
      "Private lift",
      "Maid's quarters",
      "Smart-home automation",
      "5-car garage",
      "Home theatre",
      "Residents' gym",
      "Landscaped gardens",
    ],
    agent: AGENTS.norah,
    neighborhood: "Dubai Hills Estate",
  },
  {
    slug: "azure-heights",
    name: "Azure Heights",
    city: "karachi",
    area: "DHA Phase 6",
    type: "Modern Apartment",
    status: "sale",
    price: 850000,
    period: "",
    beds: 3,
    baths: 3,
    sqft: 2100,
    yearBuilt: 2023,
    featured: true,
    newListing: true,
    published: "2026-09-02",
    image: IMG.azure,
    gallery: [IMG.azure, IMG.interiors.kitchenBright, IMG.interiors.livingBright, IMG.interiors.bedroom],
    description:
      "A penthouse-level address in the city's most coveted street grid. Azure Heights pairs floor-to-ceiling glazing with warm oak finishes, capturing a full horizon of sky over the Arabian Sea.\n\nAn open-plan great room flows onto a 40-foot terrace, while each bedroom enjoys its own en-suite dressing room. Built to international sustainability benchmarks, it is delivered with smart climate control and a sense of calm rarely found this close to the marina.",
    features: [
      "Corner unit with 40-ft terrace",
      "Floor-to-ceiling glazing",
      "Italian oak flooring throughout",
      "Integrated smart climate control",
      "Two covered parking bays",
      "Energy-efficient LEED Silver build",
    ],
    amenities: [
      "Rooftop infinity pool",
      "Residents' lounge",
      "Gym & yoga studio",
      "24/7 concierge",
      "Two parking bays",
      "Visitor parking",
      "Private elevator landing",
      "Backup generator",
    ],
    agent: AGENTS.norah,
    neighborhood: "DHA Phase 6",
  },
  {
    slug: "palm-vista-villa",
    name: "Palm Vista Villa",
    city: "dubai",
    area: "Palm Jumeirah",
    type: "Villa",
    status: "sale",
    price: 4200000,
    period: "",
    beds: 6,
    baths: 7,
    sqft: 9500,
    yearBuilt: 2020,
    featured: true,
    newListing: false,
    published: "2026-07-21",
    image: IMG.palm,
    gallery: [IMG.palm, IMG.interiors.sofa, IMG.interiors.kitchenMarble, IMG.interiors.villaPool],
    description:
      "Facing residents-only beaches on the West Crescent, Palm Vista Villa brings resort-scale living to the world's most photographed shoreline. Its boardwalk level opens fully to a two-storey water garden, sunset-facing roof terrace and private infinity pool.\n\nInside, five reception spaces and a show kitchen are finished in travertine, fluted timber and brushed brass — designed for both grand dinners and barefoot summers.",
    features: [
      "Private beach access & 200-ft beach frontage",
      "Sunset-facing rooftop terrace",
      "Show kitchen with statement island",
      "Spa level with hammam & gym",
      "Staff quarters & driver's suite",
      "Elevated water garden",
    ],
    amenities: [
      "Private infinity pool",
      "Beach frontage",
      "Residents' gym",
      "Private lift",
      "Cinema room",
      "Maid's & driver's quarters",
      "Underfloor heating",
      "5-car garage",
    ],
    agent: AGENTS.amelia,
    neighborhood: "Palm Jumeirah",
  },
  {
    slug: "the-metropolitan",
    name: "The Metropolitan",
    city: "london",
    area: "Mayfair",
    type: "Modern Apartment",
    status: "sale",
    price: 1950000,
    period: "",
    beds: 2,
    baths: 2,
    sqft: 1450,
    yearBuilt: 2019,
    featured: false,
    newListing: false,
    published: "2026-06-30",
    image: IMG.metropolitan,
    gallery: [IMG.metropolitan, IMG.interiors.armchair, IMG.interiors.kitchenShelf, IMG.interiors.modern],
    description:
      "Moments from Berkeley Square, this lateral Mayfair apartment occupies the second floor of a landmark 1930s block, reimagined behind its original Portland stone façade.\n\nA 38-foot reception with herringbone parquet flows to a north-lit kitchen in smoked oak and honed limestone. The primary suite spans the width of the building, with a dressing room and rainfall shower cut from a single slab of Belgian marble.",
    features: [
      "38-ft lateral reception",
      "Herringbone parquet floors",
      "Smoked oak & limestone kitchen",
      "Primary suite with walk-in dressing room",
      "Single-slab marble shower",
      "Landmarked 1930s façade",
    ],
    amenities: [
      "24-hour porter",
      "Video intercom",
      "Secure basement storage",
      "Residents' rooftop garden",
      "Cycle store",
      "9-minute walk to Bond Street",
      "Underfloor heating",
      "Concierge",
    ],
    agent: AGENTS.sofia,
    neighborhood: "Mayfair",
  },
  {
    slug: "oceanfront-estate",
    name: "Oceanfront Estate",
    city: "miami",
    area: "Miami Beach",
    type: "Luxury Home",
    status: "sale",
    price: 3600000,
    period: "",
    beds: 5,
    baths: 5,
    sqft: 6400,
    yearBuilt: 2018,
    featured: true,
    newListing: false,
    published: "2026-08-28",
    image: IMG.oceanfront,
    gallery: [IMG.oceanfront, IMG.interiors.livingGold, IMG.interiors.dining, IMG.interiors.bedroomView],
    description:
      "Behind a privacy hedge of Australian pines, Oceanfront Estate frames the Atlantic from every principal room. A double-height great room opens to a covered lanai and a saltwater pool groomed to the water's edge.\n\nCoral stone, teak and white-oak interiors give the home the easy glamour of a classic beach compound, while a separate guest cottage and boat-to-shore dock add resort flexibility.",
    features: [
      "Direct ocean frontage",
      "Double-height great room",
      "Ground-level guest suite",
      "Guest cottage with terrace",
      "Aqua & sound bridge dock",
      "Saltwater pool with sun shelf",
    ],
    amenities: [
      "Private dock",
      "Guest cottage",
      "Summer kitchen",
      "Lutron smart home",
      "Climate-proof wine cellar",
      "Kids' wing",
      "Service entrance",
      "Impact glass throughout",
    ],
    agent: AGENTS.mateo,
    neighborhood: "Miami Beach",
  },
  {
    slug: "skyline-penthouse",
    name: "Skyline Penthouse",
    city: "new-york",
    area: "Manhattan",
    type: "Penthouse",
    status: "sale",
    price: 5100000,
    period: "",
    beds: 4,
    baths: 5,
    sqft: 5800,
    yearBuilt: 2022,
    featured: true,
    newListing: true,
    published: "2026-09-10",
    image: IMG.skyline,
    gallery: [IMG.skyline, IMG.interiors.penthouse, IMG.interiors.kitchenDark, IMG.interiors.loungeDark],
    description:
      "Crowning a full-block glass tower, Skyline Penthouse offers four exposures and an uninterrupted panorama from the East River to the Hudson. A 60-foot great room wraps the corner in triple-height glass.\n\nThe home is delivered white-box-ready in taste, with a gallery wall for collectors, a glass-encased wine tower and three private terraces facing south and west for golden-hour city light.",
    features: [
      "Triple-height corner glass wall",
      "60-ft great room",
      "Three private terraces",
      "Glass-encased wine tower",
      "Gallery lighting package",
      "Two exposures of full panorama",
    ],
    amenities: [
      "Residents' pool & spa",
      "Screening room",
      "Landscaped rooftop",
      "Full-floor private elevator",
      "Conditioned storage",
      "Bike & ski room",
      "24/7 doorman",
      "Pets welcome",
    ],
    agent: AGENTS.daniel,
    neighborhood: "Manhattan",
  },
  {
    slug: "marina-view-residence",
    name: "Marina View Residence",
    city: "dubai",
    area: "Dubai Marina",
    type: "Modern Apartment",
    status: "sale",
    price: 1600000,
    period: "",
    beds: 2,
    baths: 3,
    sqft: 1900,
    yearBuilt: 2021,
    featured: false,
    newListing: true,
    published: "2026-09-15",
    image: IMG.marina,
    gallery: [IMG.marina, IMG.interiors.lounge, IMG.interiors.kitchenWhite, IMG.interiors.interiorClassic],
    description:
      "Level 41 of the city's most storied marina addresses. Marina View Residence sweeps from the yacht basin across the Gulf, with 10-foot ceilings and glass that turns the seafront into a living artwork.\n\nAn entertainer's kitchen anchors the plan, while a deep balcony hosts dinners at sunset with the superyachts as backdrop. Purchased fully furnished.",
    features: [
      "10-ft ceilings with full Gulf view",
      "Dining balcony off great room",
      "Entertainer's kitchen with island",
      "Furnished and art-ready",
      "Marble-clad bathrooms",
      "Direct marina promenade access",
    ],
    amenities: [
      "Valet & concierge",
      "Podium pool deck",
      "Residents' cinema",
      "Tennis court",
      "Furnished package",
      "Two parking bays",
      "Smart home system",
      "Spa & steam",
    ],
    agent: AGENTS.amelia,
    neighborhood: "Dubai Marina",
  },
  {
    slug: "chelsea-garden-house",
    name: "Chelsea Garden House",
    city: "london",
    area: "Chelsea",
    type: "Luxury Home",
    status: "sale",
    price: 3200000,
    period: "",
    beds: 4,
    baths: 3,
    sqft: 3600,
    yearBuilt: 2017,
    featured: true,
    newListing: false,
    published: "2026-05-19",
    image: IMG.chelsea,
    gallery: [IMG.chelsea, IMG.interiors.modernWarm, IMG.interiors.bedroom, IMG.interiors.kitchenMarble],
    description:
      "Behind a white stucco façade on a garden square, this Chelsea townhouse layers period proportions with a discreet contemporary renovation. Four reception rooms open en filade to a landscaped south-facing garden.\n\nThe lower-ground kitchen and family room are bathed in light from an oversized glass courtyard, while the primary floor spans the full width of the house with a dressing suite and private balcony.",
    features: [
      "South-facing landscaped garden",
      "En filade reception rooms",
      "Full-width primary floor",
      "Kitchen with glass courtyard",
      "Period details preserved",
      "Planter-lined private balcony",
    ],
    amenities: [
      "Gated garden square",
      "Bespoke joinery",
      "Wine cellar",
      "Underfloor heating",
      "Bicycle storage",
      "Approx. 4-min walk to Sloane Sq",
      "Separate staff flat",
      "Video entry system",
    ],
    agent: AGENTS.sofia,
    neighborhood: "Chelsea",
  },
  {
    slug: "tribeca-glass-loft",
    name: "Tribeca Glass Loft",
    city: "new-york",
    area: "Manhattan",
    type: "Penthouse",
    status: "sale",
    price: 2300000,
    period: "",
    beds: 2,
    baths: 2,
    sqft: 2400,
    yearBuilt: 2016,
    featured: false,
    newListing: true,
    published: "2026-09-05",
    image: IMG.tribeca,
    gallery: [IMG.tribeca, IMG.interiors.loft, IMG.interiors.sofa, IMG.interiors.bedroomView],
    description:
      "A full-floor loft in a converted printing house where 13-foot ceilings meet glass-walled rooms. Tribeca Glass Loft balances industrial bones with a refined, gallery-bare finish.\n\nA custom steel staircase leads to a mezzanine lounge, while the chef's kitchen sits beneath a skylight engineered from a single pane of laminated glass.",
    features: [
      "13-ft ceilings throughout",
      "Full-floor in former printing house",
      "Custom steel staircase to mezzanine",
      "Skylight above kitchen",
      "Gallery-bare white-oak floors",
      "Two exposures on quiet block",
    ],
    amenities: [
      "Private keyed elevator",
      "Conditioned storage",
      "Pet-friendly building",
      "Common roof deck",
      "Track lighting package",
      "Steps to Hudson River Park",
      "Bike room",
      "Virtual doorman",
    ],
    agent: AGENTS.daniel,
    neighborhood: "Manhattan",
  },
  {
    slug: "coral-gables-villa",
    name: "Coral Gables Villa",
    city: "miami",
    area: "Coral Gables",
    type: "Villa",
    status: "sale",
    price: 2150000,
    period: "",
    beds: 4,
    baths: 4,
    sqft: 4800,
    yearBuilt: 2019,
    featured: false,
    newListing: false,
    published: "2026-06-11",
    image: IMG.coral,
    gallery: [IMG.coral, IMG.interiors.lounge, IMG.interiors.kitchenBright, IMG.interiors.villaEvening],
    description:
      "Tucked onto a tree-canopied street in the Country Club district, Coral Gables Villa wraps its rooms around a banana-planted courtyard and a black-bottomed pool.\n\nInteriors in cream limewash and natural oak stay cool under eight-foot overhangs, with a ground-floor office, a covered loggia for outdoor dinners, and a private guest wing over the garage.",
    features: [
      "Courtyard-focused layout",
      "Black-bottomed pool",
      "Ground-floor office",
      "Covered loggia dining",
      "Guest wing over garage",
      "Limewash & oak interiors",
    ],
    amenities: [
      "Pool & spa",
      "Climate-controlled wine room",
      "Summer kitchen",
      "Generator",
      "Two-car garage + golf cart bay",
      "Impact-rated windows",
      "Laundry wing",
      "Ring-protected entry",
    ],
    agent: AGENTS.mateo,
    neighborhood: "Coral Gables",
  },
  {
    slug: "dha-moonlight-manor",
    name: "DHA Moonlight Manor",
    city: "karachi",
    area: "DHA Phase 5",
    type: "Luxury Home",
    status: "sale",
    price: 1100000,
    period: "",
    beds: 5,
    baths: 5,
    sqft: 5500,
    yearBuilt: 2022,
    featured: false,
    newListing: true,
    published: "2026-08-20",
    image: IMG.dha,
    gallery: [IMG.dha, IMG.interiors.livingGold, IMG.interiors.kitchenDark, IMG.interiors.bedroom],
    description:
      "A freestanding manor on a wide, tree-lined street in DHA Phase 5. DHA Moonlight Manor is built around a central light well that pulls the sky into the heart of the plan.\n\nEach of the five bedroom suites opens to a private balcony, and the roof garden offers a framed view of the city skyline at dusk — delivered with a full smart-home system and monsoon-grade carpentry.",
    features: [
      "Central light well",
      "Five suites with private balconies",
      "Sunset-facing roof garden",
      "Full smart-home system",
      "Marble & teak detailing",
      "Sunken family room",
    ],
    amenities: [
      "Solar-ready roof",
      "Servant's quarters",
      "Three covered parking bays",
      "Standby generator",
      "Water filtration plant",
      "CCTV security",
      "Landscaped frontage",
      "Study & prayer room",
    ],
    agent: AGENTS.norah,
    neighborhood: "DHA Phase 5",
  },
  {
    slug: "york-sky-residence",
    name: "York Sky Residence",
    city: "toronto",
    area: "Downtown Toronto",
    type: "Modern Apartment",
    status: "sale",
    price: 1350000,
    period: "",
    beds: 2,
    baths: 2,
    sqft: 1650,
    yearBuilt: 2020,
    featured: false,
    newListing: false,
    published: "2026-05-02",
    image: IMG.york,
    gallery: [IMG.york, IMG.interiors.livingBright, IMG.interiors.kitchenWhite, IMG.interiors.sofa],
    description:
      "Fifty floors above the Financial District, York Sky Residence frames the lake, the islands and the CN Tower in floor-to-ceiling glass. A corner great room is wrapped by a 40-foot wraparound balcony.\n\nThe home is finished with European white-oak floors, Italian cabinetry and a sculptural kitchen island — steps from the PATH, waterfront trails and the Scotiabank Arena.",
    features: [
      "Corner unit, 50th floor",
      "40-ft wraparound balcony",
      "Lake & skyline panorama",
      "European white-oak floors",
      "Italian cabinetry & island",
      "Steps from PATH & waterfront",
    ],
    amenities: [
      "Infinity pool 70th floor",
      "Residents' sky lounge",
      "Fitness & yoga studio",
      "Pet spa",
      "24/7 concierge",
      "Two parking bays",
      "Locker",
      "Visitor suites",
    ],
    agent: AGENTS.daniel,
    neighborhood: "Downtown Toronto",
  },
  {
    slug: "yorkville-heritage-loft",
    name: "Yorkville Heritage Loft",
    city: "toronto",
    area: "Yorkville",
    type: "Modern Apartment",
    status: "rent",
    price: 4200,
    period: "month",
    beds: 1,
    baths: 1,
    sqft: 950,
    yearBuilt: 1912,
    featured: false,
    newListing: true,
    published: "2026-09-18",
    image: IMG.yorkville,
    gallery: [IMG.yorkville, IMG.interiors.modernWarm, IMG.interiors.loft, IMG.interiors.dining],
    description:
      "A once-in-a-generation conversion: a 1912 Yorkville coach house reborn as a luminous loft with 16-foot ceilings and original timber trusses. Brick, steel and oak meet contemporary furniture designed for gallery owners and founders.\n\nMezzanine sleeping, a chef's galley behind smoked glass, and a private courtyard for morning coffee make this the address the whole neighbourhood talks about.",
    features: [
      "16-ft ceilings & timber trusses",
      "Mezzanine bedroom suite",
      "Smoked-glass chef's galley",
      "Private courtyard",
      "Exposed brick & steel",
      "Furnished option available",
    ],
    amenities: [
      "Rooftop lounge",
      "Bicycle storage",
      "Common courtyard",
      "Rare in-unit laundry",
      "Steps from Bloor Street",
      "Pet-friendly",
      "High-speed fibre",
      "Furnished option",
    ],
    agent: AGENTS.daniel,
    neighborhood: "Yorkville",
  },
  {
    slug: "palm-beach-villa",
    name: "Palm Jumeirah Beach Villa",
    city: "dubai",
    area: "Palm Jumeirah",
    type: "Villa",
    status: "rent",
    price: 38000,
    period: "month",
    beds: 5,
    baths: 6,
    sqft: 8900,
    yearBuilt: 2021,
    featured: false,
    newListing: false,
    published: "2026-06-25",
    image: IMG.beach,
    gallery: [IMG.beach, IMG.interiors.loungeDark, IMG.interiors.villaPool, IMG.interiors.kitchenMarble],
    description:
      "An impeccably furnished Mediterranean villa on the Palm's frond — steps from the sand. Palm Jumeirah Beach Villa balances grand entertaining with family calm: a two-storey great room, a pool-flanked summer lounge and a beach groyne with loungers at the waterline.\n\nLease includes housekeeping twice weekly, private beach access and a five-year residence visa pathway through the agent.",
    features: [
      "Furnished Mediterranean masterpiece",
      "Two-storey beach-side great room",
      "Pool-flanked summer lounge",
      "Beach groyne with loungers",
      "Weekly housekeeping included",
      "Residence visa pathway",
    ],
    amenities: [
      "Private beach access",
      "Heated pool & jacuzzi",
      "Home cinema",
      "Gym & spa room",
      "Maid's quarters",
      "Beachfront BBQ pavilion",
      "2 service staff rooms",
      "Garage for 4 cars",
    ],
    agent: AGENTS.amelia,
    neighborhood: "Palm Jumeirah",
  },
];

export const LOCATION_OPTIONS = [
  { label: "Any Location", value: "" },
  { label: "Dubai", value: "dubai" },
  { label: "Karachi", value: "karachi" },
  { label: "London", value: "london" },
  { label: "New York", value: "new-york" },
  { label: "Miami", value: "miami" },
  { label: "Toronto", value: "toronto" },
];

export const TYPE_OPTIONS = [
  { label: "Any Type", value: "" },
  { label: "Luxury Home", value: "Luxury Home" },
  { label: "Modern Apartment", value: "Modern Apartment" },
  { label: "Villa", value: "Villa" },
  { label: "Penthouse", value: "Penthouse" },
];

export const STATUS_OPTIONS = [
  { label: "Any Status", value: "" },
  { label: "For Sale", value: "sale" },
  { label: "For Rent", value: "rent" },
];

export const BED_OPTIONS = [
  { label: "Any Beds", value: "" },
  { label: "1+", value: 1 },
  { label: "2+", value: 2 },
  { label: "3+", value: 3 },
  { label: "4+", value: 4 },
  { label: "5+", value: 5 },
];

export const BATH_OPTIONS = [
  { label: "Any Baths", value: "" },
  { label: "1+", value: 1 },
  { label: "2+", value: 2 },
  { label: "3+", value: 3 },
  { label: "4+", value: 4 },
];

export const PRICE_OPTIONS = [
  { label: "Any Budget", value: "" },
  { label: "Under $1M", value: "under-1" },
  { label: "$1M – $2.5M", value: "1-2.5" },
  { label: "$2.5M – $4M", value: "2.5-4" },
  { label: "$4M +", value: "4-plus" },
];

export const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Most Bedrooms", value: "beds-desc" },
  { label: "Newest Listings", value: "newest" },
];

export const EMPTY_FILTERS = {
  keyword: "",
  location: "",
  type: "",
  status: "",
  price: "",
  beds: "",
  baths: "",
  sort: "featured",
};

export function formatPrice(price, period = "") {
  const num = Number(price);
  if (period === "month") {
    return `$${num.toLocaleString("en-US")}/mo`;
  }
  const abs = Math.abs(num);
  if (abs >= 1_000_000) {
    const v = (num / 1_000_000).toFixed(abs >= 10_000_000 ? 0 : 1);
    return `$${v.replace(/\.0$/, "")}M`;
  }
  if (abs >= 1000) {
    return `$${Math.round(num / 1000)}K`;
  }
  return `$${num.toLocaleString("en-US")}`;
}

export function formatArea(sqft) {
  return `${Number(sqft).toLocaleString("en-US")} sq ft`;
}

function priceInRange(price, period, bucket) {
  let compare = Number(price);
  if (period === "month") compare *= 12;
  switch (bucket) {
    case "under-1":
      return compare < 1_000_000;
    case "1-2.5":
      return compare >= 1_000_000 && compare < 2_500_000;
    case "2.5-4":
      return compare >= 2_500_000 && compare < 4_000_000;
    case "4-plus":
      return compare >= 4_000_000;
    default:
      return true;
  }
}

function matchesKeyword(p, keyword) {
  const k = keyword.trim().toLowerCase();
  if (!k) return true;
  const hay = [
    p.name,
    p.area,
    p.city,
    p.type,
    p.neighborhood,
    ...(p.features || []),
  ]
    .join(" ")
    .toLowerCase();
  return hay.includes(k);
}

export function sortProperties(list, sort) {
  const arr = [...list];
  switch (sort) {
    case "price-asc":
      return arr.sort((a, b) => a.price - b.price);
    case "price-desc":
      return arr.sort((a, b) => b.price - a.price);
    case "beds-desc":
      return arr.sort((a, b) => b.beds - a.beds);
    case "newest":
      return arr.sort((a, b) => new Date(b.published) - new Date(a.published));
    default:
      return arr.sort(
        (a, b) =>
          Number(b.featured) - Number(a.featured) ||
          b.price - a.price
      );
  }
}

export function filterProperties(list, filters = EMPTY_FILTERS) {
  return sortProperties(
    list.filter((p) => {
      if (filters.location && p.city !== filters.location) return false;
      if (filters.type && p.type !== filters.type) return false;
      if (filters.status && p.status !== filters.status) return false;
      if (filters.beds && p.beds < Number(filters.beds)) return false;
      if (filters.baths && p.baths < Number(filters.baths)) return false;
      if (filters.price && !priceInRange(p.price, p.period, filters.price)) return false;
      if (!matchesKeyword(p, filters.keyword)) return false;
      return true;
    }),
    filters.sort
  );
}

export function getPropertyBySlug(list, slug) {
  return list.find((p) => p.slug === slug) || null;
}

export function propertiesByCity(list, citySlug) {
  return list.filter((p) => p.city === citySlug);
}

export function featuredProperties(list) {
  return list.filter((p) => p.featured);
}

export function latestProperties(list, count = 6) {
  return [...list]
    .sort((a, b) => new Date(b.published) - new Date(a.published))
    .slice(0, count);
}

export function relatedProperties(list, property, count = 3) {
  return list
    .filter(
      (p) =>
        p.slug !== property.slug &&
        (p.city === property.city ||
          p.type === property.type ||
          p.status === property.status)
    )
    .sort((a, b) => {
      const score = (x) =>
        (x.city === property.city ? 2 : 0) +
        (x.type === property.type ? 2 : 0) +
        (x.status === property.status ? 1 : 0);
      return score(b) - score(a);
    })
    .slice(0, count);
}

export function cityName(slug) {
  const map = {
    dubai: "Dubai",
    karachi: "Karachi",
    london: "London",
    "new-york": "New York",
    miami: "Miami",
    toronto: "Toronto",
  };
  return map[slug] || slug;
}

export function statusLabel(property) {
  return property.status === "rent" ? "For Rent" : "For Sale";
}