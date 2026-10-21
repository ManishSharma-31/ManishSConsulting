import { site, siteUrl } from "@/content/site";
import { services, type Service } from "@/content/services";
import { faqs } from "@/content/faq";
import { absoluteUrl } from "@/lib/seo";

const ORG_ID = `${siteUrl}/#organization`;
const SITE_ID = `${siteUrl}/#website`;

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
      founder: { "@type": "Person", name: site.legal.contractingParty },
      address: {
        "@type": "PostalAddress",
        addressLocality: site.city,
        addressRegion: site.region,
        addressCountry: site.country,
      },
      areaServed: [{ "@type": "Country", name: "India" }, "Worldwide"],
      knowsAbout: services.map((s) => s.name),
      sameAs: [site.socials.github, site.socials.linkedin],
      makesOffer: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, url: absoluteUrl(`/services/${s.slug}`) },
      })),
    },
    {
      "@type": "WebSite",
      "@id": SITE_ID,
      url: absoluteUrl("/"),
      name: site.name,
      alternateName: "Manish S Consulting",
      inLanguage: "en-IN",
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
  areaServed: [{ "@type": "Country", name: "India" }, "Worldwide"],
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
