/**
 * Company identity — the single source of truth for anything that names the
 * business. The practice trades as "SunCrest Technology", an independent IT
 * consultancy; the legal contracting party is the sole proprietor behind it
 * (see `legal.contractingParty` below), which is what the Terms and Privacy
 * pages — and any JSON-LD `founder` field — should reference instead of
 * `name` whenever the actual person, not the trading name, is meant.
 *
 * Voice note: "we" is the business. It is deliberately never "our team of
 * engineers" or anything implying headcount that does not exist.
 */
export const site = {
  name: "SunCrest Technology",
  /** Sits under the name in the header, OG tags, and the footer. */
  descriptor: "IT Consulting & Technology Solutions",
  /** Longer positioning line for the hero eyebrow and metadata. */
  role: "IT Consulting & Technology Solutions",

  tagline:
    "Technology that works, so you can get on with your business. One expert for your website, cloud, automation, AI and everyday IT, with a fixed price and a written plan before anything starts.",
  description:
    "Get your IT sorted by one expert you can reach: websites and software, cloud, DevOps, automation, AI and ongoing support, for individuals and businesses of every size. Fixed prices, written scope.",

  /** Legal contracting party. Sole proprietorship — no CIN or GST to display yet. */
  legal: {
    entityType: "Sole proprietorship",
    contractingParty: "Manish Sharma",
    note: "Trading as an independent consultancy. Registration is not yet in place, so the contracting party on every engagement is Manish Sharma personally.",
  },

  email: "info@manishsconsulting.tech",
  phone: "+916378879085",
  phoneDisplay: "+91 63788 79085",
  whatsappUrl: "https://wa.me/916378879085?text=" + encodeURIComponent("Hi SunCrest Technology, I'd like to discuss a project."),

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
    linkedin: "https://www.linkedin.com/company/suncresttech",
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
 * Who this is for, written as the situations visitors recognise in themselves.
 * Described as what the services suit, not as a claim of delivered projects in each.
 */
export const audiences = [
  { name: "You are an individual or freelancer", detail: "You want a personal site or portfolio, a setup that will not behave, or honest advice before you buy" },
  { name: "You run a small business", detail: "You want a website, an online store, less manual work and dependable day-to-day IT without hiring staff" },
  { name: "You lead a growing company", detail: "You want software, cloud and releases that scale with the business instead of ahead of it" },
  { name: "You work in a large organisation", detail: "You want a specialist for one project, a migration or an independent technical review" },
  { name: "You run an agency or studio", detail: "You want engineering capacity delivered under your own brand" },
  { name: "You are a founder building a first product", detail: "You want it built properly, once, without rebuilding it in a year" },
];
