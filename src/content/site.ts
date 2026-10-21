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
  descriptor: "IT Consulting & Technology Services",
  /** Longer positioning line for the hero eyebrow and metadata. */
  role: "IT Consulting & Technology Services",

  tagline:
    "We help growing businesses build, automate and run their technology — from AI and web applications to the cloud infrastructure that keeps them reliable.",
  description:
    "Independent IT consultancy delivering AI solutions, automation, web development, cloud architecture, DevOps, and ongoing technical support for startups, SMBs, and agencies.",

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

  /** Single source of truth for location — hero, footer, contact page, JSON-LD. */
  location: "Pune, Maharashtra, India",
  city: "Pune",
  region: "Maharashtra",
  country: "IN",

  timezone: "IST (UTC+5:30)",
  overlap: "4+ hrs overlap with EU, 3+ with US East",

  /** Availability banner. Update by hand — capacity is more credible than "available". */
  availability: {
    status: "open" as "open" | "limited" | "booked",
    label: "Taking on new projects",
    detail: "Next start date: within 2 weeks",
  },

  responseTime: "Replies within 24 hours on weekdays",

  socials: {
    github: "https://github.com/MrMKsharma",
    linkedin: "https://www.linkedin.com/in/manishsharma31",
    // x: "https://x.com/ManishSharma31",
  },
  // xHandle: "ManishSharma31",
};

/** Canonical origin — used for canonical links, Open Graph, sitemap and JSON-LD. No trailing slash. */
export const siteUrl = "https://manishsconsulting.tech";

/** Optional Cal.com handle, e.g. "manishsharma/intro". Falls back to the contact page. */
export const calLink: string = import.meta.env["VITE_CAL_LINK"] ?? "";

export const navItems = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

/**
 * Sectors we actively work with. Kept honest — these are markets the services
 * suit, described as such, not a claim of delivered projects in each.
 */
export const industries = [
  { name: "SaaS & product startups", detail: "Shipping features while keeping infrastructure boring" },
  { name: "E-commerce & retail", detail: "Storefronts, integrations, and uptime through peak season" },
  { name: "Agencies & studios", detail: "White-label engineering capacity under your brand" },
  { name: "Professional services", detail: "Internal tools and automation that remove manual work" },
  { name: "Logistics & operations", detail: "Systems integration and data flowing between platforms" },
  { name: "Early-stage founders", detail: "Getting a first product built properly, once" },
];
