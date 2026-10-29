import { siteUrl } from "@/content/site";

export const absoluteUrl = (path = "/") => (path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`);

export const defaultOgImage = absoluteUrl("/og-image.png");

type JsonLd = Record<string, unknown>;

type SeoInput = {
  title: string;
  description: string;
  /** Path of this page, e.g. "/services/ai". Used for canonical + og:url. */
  path: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  jsonLd?: JsonLd | JsonLd[];
};

/** Serialise JSON-LD safely for inline <script> (no premature </script> or HTML comments). */
const serialise = (data: unknown) => JSON.stringify(data).replace(/</g, "\u003c");

/** One call per route: title, description, canonical, Open Graph, Twitter and structured data. */
export function seo({ title, description, path, image = defaultOgImage, type = "website", noindex, jsonLd }: SeoInput) {
  const url = absoluteUrl(path);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: type },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: title },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "en", href: url },
      { rel: "alternate", hrefLang: "x-default", href: url },
    ],
    scripts: jsonLd ? [{ type: "application/ld+json", children: serialise(jsonLd) }] : [],
  };
}

export const breadcrumbLd = (crumbs: { name: string; path: string }[]): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: absoluteUrl(c.path),
  })),
});
