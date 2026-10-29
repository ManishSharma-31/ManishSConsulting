import { site, siteUrl } from "@/content/site";
import { services, type Service } from "@/content/services";
import { faqs } from "@/content/faq";
import type { Project } from "@/content/projects";
import { absoluteUrl } from "@/lib/seo";

const ORG_ID = `${siteUrl}/#organization`;
const SITE_ID = `${siteUrl}/#website`;
const PERSON_ID = `${siteUrl}/#founder`;

/** Sitewide entity graph: who the business is, and that this site is its official one. Used on the home page. */
export const organizationGraph = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "Organization"],
      "@id": ORG_ID,
      name: site.name,
      alternateName: ["Manish's Consulting", "Manishs Consulting", "Manish Sharma Consulting"],
      url: absoluteUrl("/"),
      logo: { "@type": "ImageObject", url: absoluteUrl("/icon-512.png"), width: 512, height: 512 },
      image: absoluteUrl("/og-image.png"),
      description: site.description,
      email: site.email,
      telephone: site.phone,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: site.phone,
          email: site.email,
          availableLanguage: ["English"],
          areaServed: "Worldwide",
        },
      ],
      founder: { "@id": PERSON_ID },
      areaServed: "Worldwide",
      knowsAbout: services.map((s) => s.name),
      sameAs: [site.socials.github, site.socials.linkedin],
      makesOffer: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, url: absoluteUrl(`/services/${s.slug}`) },
      })),
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: site.legal.contractingParty,
      jobTitle: "Founder and principal consultant",
      url: absoluteUrl("/about"),
      image: absoluteUrl("/profile-1000.jpg"),
      worksFor: { "@id": ORG_ID },
      sameAs: [site.socials.github, site.socials.linkedin],
    },
    {
      "@type": "WebSite",
      "@id": SITE_ID,
      url: absoluteUrl("/"),
      name: site.name,
      alternateName: "Manish S Consulting",
      inLanguage: "en",
      publisher: { "@id": ORG_ID },
    },
  ],
});

export const serviceLd = (s: Service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.name,
  serviceType: s.name,
  description: s.summary,
  url: absoluteUrl(`/services/${s.slug}`),
  provider: { "@id": ORG_ID },
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: `${s.name} capabilities`,
    itemListElement: s.capabilities.map((c) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: c.name, description: c.detail },
    })),
  },
});

export const pageLd = (type: "AboutPage" | "ContactPage" | "CollectionPage" | "FAQPage" | "WebPage", name: string, path: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": type,
  name,
  description,
  url: absoluteUrl(path),
  isPartOf: { "@id": SITE_ID },
  about: { "@id": ORG_ID },
  inLanguage: "en",
});

export const caseStudyLd = (p: Project) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: p.title,
  description: p.summary,
  url: absoluteUrl(`/work/${p.slug}`),
  mainEntityOfPage: absoluteUrl(`/work/${p.slug}`),
  image: absoluteUrl("/og-image.png"),
  ...(/^\d{4}$/.test(p.year) ? { datePublished: `${p.year}-01-01` } : {}),
  author: { "@id": ORG_ID },
  publisher: { "@id": ORG_ID },
  keywords: p.tags.join(", "),
  inLanguage: "en",
});

export const workListLd = (projects: Project[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: projects.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: absoluteUrl(`/work/${p.slug}`),
    name: p.title,
  })),
});

export const faqPageLd = (items: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
});

export const faqLd = (limit = 7) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.slice(0, limit).map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
});
