import { IMG, AGENTS } from "./properties";

const article = (a) => ({
  author: null,
  readTime: 6,
  ...a,
});

export const BLOG_CATEGORIES = [
  "All",
  "Market Trends",
  "Buying Guide",
  "Investment",
  "Lifestyle",
  "Architecture",
];

export const BLOG_POSTS = [
  article({
    slug: "dubai-market-outlook-2026",
    title: "Dubai Market Outlook: Where the Emirate's Luxury Cycle Goes Next",
    category: "Market Trends",
    date: "2026-09-12",
    readTime: 8,
    image: IMG.heroMansion,
    author: AGENTS.norah,
    excerpt:
      "Dubai's luxury segment has doubled in five years. As the cycle matures, the winners are no longer the tallest towers — they're the scarcest locations.",
    content: [
      {
        type: "p",
        text: "Five years ago, buyers chased Dubai's skyline. Today the smartest capital chases its scarcity — beach frontage on the Palm, golf-facing estates in Emirates Hills and the few remaining garden manors of the old city. The season of indiscriminate growth is closing.",
      },
      {
        type: "h2",
        text: "The yield is migrating to the family suburb",
      },
      {
        type: "p",
        text: "Emerald corridors like Dubai Hills and Al Barari now outperform Downtown on yield and appreciation alike. Families want green, schools and a commute under twenty minutes — and they pay a premium for all three at once.",
      },
      {
        type: "quote",
        text: "The luxury market's centre of gravity has moved from 'the tallest' to 'the most liveable'. Villas with real gardens are the rarest asset class in the emirate.",
      },
      {
        type: "h2",
        text: "What the cycle teaches buyers",
      },
      {
        type: "list",
        items: [
          "Buy completion risk out of the market — prefer finished, titled stock",
          "Weigh golden-visa thresholds against title certainty",
          "Treat rent-vacation stock carefully; operational income is cyclical",
        ],
      },
      {
        type: "p",
        text: "Villas by the sea, apartments by the golf and every single scarce address in between — those remain the emirate's quiet compound-interest machines through 2028.",
      },
    ],
  }),
  article({
    slug: "how-to-view-luxury-property",
    title: "The Art of the Viewing: What Sharp Buyers Look For",
    category: "Buying Guide",
    date: "2026-08-28",
    readTime: 6,
    image: IMG.interiors.livingGold,
    author: AGENTS.amelia,
    excerpt:
      "Beyond the staging, beyond the light — successful buyers carry a checklist that separates a home from a headache. Our advisors walk you through it.",
    content: [
      {
        type: "p",
        text: "A staged home is theatre. The floor plan is the script, and the listing photographs are the trailer. Serious viewing means reading beneath both — starting with how the light moves through the day.",
      },
      {
        type: "h2",
        text: "Follow the sun",
      },
      {
        type: "p",
        text: "Visit at the hour you would actually live in the house. Mornings for families, golden hour for entertainers, evening for the city-light addicts. The same room reads entirely differently at breakfast versus midnight.",
      },
      {
        type: "list",
        items: [
          "Check the noise at the hour of the day you will be home",
          "Run the taps — pressure, temperature and drainage hide a lot",
          "Look at the neighbour's rooflines, not just the garden",
          "Ask what's excluded from the sale: fixtures, art, lighting",
        ],
      },
      {
        type: "p",
        text: "Above all, bring your own advisor. In luxury stock, the questions you forget to ask in the room are exactly the terms that end up in the contract.",
      },
    ],
  }),
  article({
    slug: "yield-versus-appreciation",
    title: "Yield vs. Appreciation: Building a Luxury Portfolio That Does Both",
    category: "Investment",
    date: "2026-08-09",
    readTime: 7,
    image: IMG.interiors.lobby,
    author: AGENTS.daniel,
    excerpt:
      "The oldest debate in property need not be a debate at all. Here's how RESIPLEX structures portfolios that earn while they appreciate.",
    content: [
      {
        type: "p",
        text: "Karachi's rentals run close to 8% yield. Manhattan's trade closer to 3% — but compound appreciation and liquidity far outrun either. The art is not choosing one; it is calibrating the mix to your time horizon.",
      },
      {
        type: "h2",
        text: "The two-speed portfolio",
      },
      {
        type: "p",
        text: "In our experience, a resilient luxury portfolio blends a cash-flow corridor (estates and units renting at 6%+) with a wealth corridor (gatekeeper markets like London, New York and Dubai Core that trade scarce stock). The first pays the bills; the second builds the fortune.",
      },
      {
        type: "quote",
        text: "Buy income where the market pays you to wait, and buy scarcity where the market pays you for patience.",
      },
      {
        type: "list",
        items: [
          "If horizon is under five years: favour liquidity over headline yield",
          "If horizon is ten years: scarcity, scarcity, scarcity",
          "Always stress-test both scenarios against a mid-cycle correction",
        ],
      },
    ],
  }),
  article({
    slug: "designing-a-calmer-home",
    title: "Designing for Calm: Inside the Quiet-Luxury Interior Shift",
    category: "Lifestyle",
    date: "2026-07-22",
    readTime: 5,
    image: IMG.interiors.modernWarm,
    author: AGENTS.sofia,
    excerpt:
      "Brass, travertine, warmth. The era of glassy minimalism is giving way to interiors built to be lived in — and the most-sold homes reflect it.",
    content: [
      {
        type: "p",
        text: "The homes that disappear fastest in our portfolio share a quiet language: warm neutrals, tactile stone, timber in honest grain, and lighting designed in layers rather than floods. Buyers call it 'calm'. Designers call it 'quiet luxury'.",
      },
      {
        type: "h2",
        text: "Three shifts we watch",
      },
      {
        type: "list",
        items: [
          "Materials over metals — limewash and oak now out-earn chrome",
          "Rooms that pivot — flexible space designed for work, rest and guests",
          "Light as a fixture — sculptural pendants and layered scene-setting",
        ],
      },
      {
        type: "p",
        text: "A home that soothes on sight multiplies its own value at resale. In luxury, atmosphere is an asset like any other.",
      },
    ],
  }),
  article({
    slug: "timeless-facades-modern-cores",
    title: "Timeless Façades, Engineered Cores: The Architecture of Today's Trophy Homes",
    category: "Architecture",
    date: "2026-07-04",
    readTime: 6,
    image: IMG.blogArchitecture,
    author: AGENTS.mateo,
    excerpt:
      "From London's conserved squares to Manhattan's cast-iron lofts, the most valuable residences preserve a historic face — and hide a thoroughly modern machine behind it.",
    content: [
      {
        type: "p",
        text: "There is a quiet paradox at the top of the market: the most expensive square feet in the world often hide behind façades that are over a century old. Conservation is no longer a constraint — it is a feature buyers pay for.",
      },
      {
        type: "h2",
        text: "The hard part is invisible",
      },
      {
        type: "p",
        text: "The true engineering in a trophy conversion lives below grade and behind drywall: thermal bridges cured, acoustic isolation engineered, services re-run in aluminium and copper. The historic envelope stays; the performance is brand new.",
      },
      {
        type: "quote",
        text: "The best conversions in London and New York are silent on the street and futuristic behind the walls.",
      },
      {
        type: "p",
        text: "When you view a converted period property, ask for the building-services history, not just the brochure. The wiring age matters far more than the façade's patina.",
      },
    ],
  }),
  article({
    slug: "first-overseas-purchase",
    title: "Buying Abroad, the First Time: A Field Guide to Cross-Border Purchases",
    category: "Buying Guide",
    date: "2026-06-17",
    readTime: 9,
    image: IMG.nycNight,
    author: AGENTS.norah,
    excerpt:
      "Currency, title, tax, visa — four words that decide cross-border success before you ever sign. Here is the checklist our international desk applies to every first purchase.",
    content: [
      {
        type: "p",
        text: "Every year we close first-time international purchases in six countries. The pattern is consistent: the buyers who do their homework in four specific domains never regret it, and the ones who skip them are the ones who call us about exit strategy later.",
      },
      {
        type: "h2",
        text: "The four checkpoints",
      },
      {
        type: "list",
        items: [
          "Currency — hedge the window if your home currency is volatile against the asset currency",
          "Title — verify freehold versus leasehold and title insurance availability",
          "Tax — establish the withholding, capital-gains and inheritance picture before you look at homes",
          "Visa — check whether property unlocks residency wherever you are buying",
        ],
      },
      {
        type: "quote",
        text: "In cross-border luxury, the deal is won in the due-diligence room, not the viewing room.",
      },
      {
        type: "p",
        text: "Buy structure first, the building second. Every RESIPLEX cross-border mandate begins with jurisdiction homework before a single photograph is shown.",
      },
    ],
  }),
  article({
    slug: "miami-waterfront-edge",
    title: "Miami's Waterfront Edge: Why the Coastline Keeps Outperforming",
    category: "Market Trends",
    date: "2026-05-30",
    readTime: 6,
    image: IMG.miami,
    author: AGENTS.mateo,
    excerpt:
      "Six hundred and twenty miles of coastline, a finite amount waterfront. Miami's scarcity math has made it America's fastest-moving luxury market.",
    content: [
      {
        type: "p",
        text: "Florida's no-income-tax status brought the money; the coast kept it. Every waterfront lot in Miami Beach and the canals of Coral Gables is now an asset class unto itself, moving faster and holding firmer than any other slice of the market.",
      },
      {
        type: "h2",
        text: "Scarcity compounds",
      },
      {
        type: "p",
        text: "Sea-level reform, insurance cycles and zoning all push supply down while global wealth pushes demand up. Owners of direct waterfront rarely sell into weakness; they simply wait the cycle out.",
      },
      {
        type: "list",
        items: [
          "Direct frontage outperforms neighbourhood averages every cycle",
          "Dockage and deep water add real, rentable scarcity",
          "Buy on the bay side for insurance simplicity, beats on investment",
        ],
      },
      {
        type: "p",
        text: "For investors, the takeaway is stability under uncertainty: the water's edge is the safest square foot in Florida.",
      },
    ],
  }),
];

export function getPostBySlug(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug) || null;
}

export function relatedPosts(post, count = 2) {
  return BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category
  )
    .concat(BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category !== post.category))
    .slice(0, count);
}