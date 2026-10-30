/**
 * Company identity — the single source of truth for anything that names the
 * business. The practice trades as "Manish S Consulting", an independent IT
 * consultancy; the legal contracting party is the sole proprietor behind it
 * (see `legal.contractingParty` below), which is what the Terms and Privacy
 * pages — and any JSON-LD `founder` field — should reference instead of
 * `name` whenever the actual person, not the trading name, is meant.
 *
 * Voice note: "we" is the business. It is deliberately never "our team of
 * engineers" or anything implying headcount that does not exist.
 */
export const site = {
  name: "Manish S Consulting",
  /** Sits under the name in the header, OG tags, and the footer. */
  descriptor: "IT Consulting & Technology Solutions",
  /** Longer positioning line for the hero eyebrow and metadata. */
  role: "IT Consulting & Technology Solutions",

  tagline:
    "One expert for every kind of IT need, for businesses of every size and for individuals. From a first website to cloud, automation and AI, planned in writing and looked after by the same person.",
  description:
    "Independent IT consulting for businesses of every size and for individuals: software and web development, cloud, DevOps, automation, AI and ongoing IT support. Fixed prices, written scope.",

  /** Legal contracting party. Sole proprietorship — no CIN or GST to display yet. */
  legal: {
    entityType: "Sole proprietorship",
    contractingParty: "Manish Sharma",
    note: "Trading as an independent consultancy. Registration is not yet in place, so the contracting party on every engagement is Manish Sharma personally.",
  },

  email: "info@manishsconsulting.tech",
  phone: "+916378879085",
  phoneDisplay: "+91 63788 79085",
  whatsappUrl: "https://wa.me/916378879085?text=" + encodeURIComponent("Hi Manish, I'd like to discuss a project."),

  /** Remote-first and not tied to a place. Used in the hero, footer, contact page and structured data. */
  location: "Remote-first, working worldwide",

  timezone: "Remote-first",
  overlap: "calls scheduled around your time zone",

  /** Availability banner. Update by hand — capacity is more credible than "available". */
  availability: {
    status: "open" as "open" | "limited" | "booked",
    label: "Taking on new projects",
    detail: "Next start date: within 2 weeks",
  },

  responseTime: "Replies within 24 hours on weekdays",

  socials: {
    github: "https://github.com/ManishSharma-31",
    linkedin: "https://www.linkedin.com/in/manishsharma31",
    // x: "https://x.com/ManishSharma31",
  },
  // xHandle: "ManishSharma31",
};

/** Canonical origin — used for canonical links, Open Graph, sitemap and JSON-LD. No trailing slash. */
export const siteUrl = "https://www.manishsconsulting.tech";

/** Optional Cal.com handle, e.g. "manishsharma/intro". Falls back to the contact page. */
export const calLink: string = import.meta.env["VITE_CAL_LINK"] ?? "";

export const navItems = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

/**
 * Who the practice is for. Described as the situations the services suit, not
 * as a claim of delivered projects in each.
 */
export const audiences = [
  { name: "Individuals & freelancers", detail: "A personal site, a portfolio, a stubborn setup problem, or honest advice before you buy" },
  { name: "Small businesses", detail: "Websites, online stores, automation and dependable day-to-day IT without hiring staff" },
  { name: "Growing companies", detail: "Software, cloud and delivery that scale with the business, not ahead of it" },
  { name: "Established organisations", detail: "A specialist for one project, a migration, or an independent technical review" },
  { name: "Agencies & studios", detail: "White-label engineering capacity under your own brand" },
  { name: "Founders & first-time builders", detail: "Getting a first product built properly, once" },
];
