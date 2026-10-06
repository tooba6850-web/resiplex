import { IMG, AGENTS } from "./properties";

export const BRAND = {
  name: "RESIPLEX",
  tagline: "Your Real Estate Partner",
  phone: "+1 800 555 0199",
  email: "residences@resiplex.com",
  address: "Level 42, ICD Brookfield Place, Dubai",
};

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Properties", to: "/properties" },
  { label: "Locations", to: "/locations" },
  { label: "About", to: "/about" },
  { label: "Insights", to: "/blog" },
];

export const STATS = [
  { value: "50", suffix: "K+", label: "Active Listings" },
  { value: "12", suffix: "M", label: "Monthly Visitors" },
  { value: "10", suffix: "K+", label: "Local Agents" },
  { value: "2", suffix: "M+", label: "Happy Homeowners" },
];

export const PHILOSOPHY = {
  eyebrow: "Why Choose Us",
  title: "Find a home you'll love with people you trust.",
  text: "Whether you're buying, selling, or renting, we're here to help you every step of the way. We provide the tools, the data, and the expertise to help you make your best real estate decisions.",
  points: [
    "Extensive Listings — Search through millions of verified properties.",
    "Local Expertise — Connect with top-rated local real estate agents.",
    "Seamless Experience — From first search to final closing, all in one place.",
  ],
};

import { IconShield, IconCheck, IconKey } from "../components/icons";

export const VALUES = [
  {
    step: "01",
    icon: IconShield,
    title: "Discretion",
    text: "Listings and negotiations are handled on a strictly private desk. What moves through us stays with us.",
  },
  {
    step: "02",
    icon: IconCheck,
    title: "Verification",
    text: "Every home we present is physically inspected, title-checked and refreshed on valuation discipline.",
  },
  {
    step: "03",
    icon: IconKey,
    title: "Care",
    text: "From first viewing to key handover — and the decade after — a single advisor owns your entire experience.",
  },
];

export const HOW_WE_WORK = [
  {
    title: "Listen",
    text: "We start with how you actually live — not the busiest street or the tallest tower. Budget, timing and taste first.",
  },
  {
    title: "Curate",
    text: "You see a shortlist of stands-out, never a wall of listings. Most clients meet three homes, not thirty.",
  },
  {
    title: "Negotiate",
    text: "Our teams are fluent in the deeply local art of the quiet deal — from Dubai's one-shot bids to London's sealed offers.",
  },
  {
    title: "Deliver",
    text: "Completion, registration, visas, handover and furnishing — your advisor holds the process end to end.",
  },
];

export const TEAM = [
  {
    ...AGENTS.amelia,
    role: "Founder & Managing Partner, Dubai",
    focus: "Beachfront & family estates, Gulf-wide mandates.",
  },
  {
    ...AGENTS.daniel,
    role: "Director, New York",
    focus: "Manhattan towers, lofts and international portfolios.",
  },
  {
    ...AGENTS.sofia,
    role: "Director, London",
    focus: "Prime central London houses and lateral apartments.",
  },
  {
    ...AGENTS.mateo,
    role: "Director, Miami",
    focus: "Waterfront compounds and coastal investment.",
  },
  {
    ...AGENTS.norah,
    role: "Partner, Investment Advisory",
    focus: "Cross-border structure, yields and portfolio strategy.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "RESIPLEX showed us three homes. Our advisors were right twice, and honest once — the honesty is why we kept them for the next two moves.",
    name: "The Harouni Family",
    detail: "Purchased two residences, Dubai & London",
  },
  {
    quote:
      "They told us not to buy the apartment with the perfect view. Eighteen months later the fundamentals they flagged have made it a prescient call.",
    name: "Jonathan & Priya",
    detail: "Penthouse acquisition, New York",
  },
  {
    quote:
      "From first call to key handover took eleven days. I have never experienced a property process assembled with that much precision.",
    name: "C. Lindqvist",
    detail: "Waterfront estate, Miami",
  },
];

export const OFFICES = [
  {
    city: "Dubai",
    address: "Level 42, ICD Brookfield Place, DIFC",
    phone: "+971 4 248 8170",
    email: "dubai@resiplex.com",
    image: IMG.dubaiSky,
  },
  {
    city: "London",
    address: "12 Berkeley Square, Mayfair",
    phone: "+44 20 7946 0427",
    email: "london@resiplex.com",
    image: IMG.london,
  },
  {
    city: "New York",
    address: "245 Park Avenue, Manhattan",
    phone: "+1 212 555 0198",
    email: "newyork@resiplex.com",
    image: IMG.nyc,
  },
  {
    city: "Miami",
    address: "1201 Brickell Avenue, Bayfront",
    phone: "+1 786 555 0163",
    email: "miami@resiplex.com",
    image: IMG.miami,
  },
];

export const HERO_BACKDROP = [
  IMG.heroUser,
  IMG.heroMansion,
  IMG.heroPenthouse,
  IMG.palm,
  IMG.london,
];