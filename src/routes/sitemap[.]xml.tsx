import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { absoluteUrl } from "@/lib/seo";

type Entry = { path: string; priority: string; changefreq: string };

function entries(): Entry[] {
  const list: Entry[] = [
    { path: "/", priority: "1.0", changefreq: "weekly" },
    { path: "/services", priority: "0.9", changefreq: "monthly" },
    ...services.map((s) => ({ path: `/services/${s.slug}`, priority: "0.8", changefreq: "monthly" })),
    { path: "/about", priority: "0.7", changefreq: "monthly" },
    { path: "/contact", priority: "0.7", changefreq: "yearly" },
    { path: "/privacy", priority: "0.2", changefreq: "yearly" },
    { path: "/terms", priority: "0.2", changefreq: "yearly" },
    { path: "/cookies", priority: "0.2", changefreq: "yearly" },
  ];
  list.splice(
    list.findIndex((e) => e.path === "/about"),
    0,
    { path: "/work", priority: "0.8", changefreq: "monthly" },
    ...projects.map((p) => ({ path: `/work/${p.slug}`, priority: "0.7", changefreq: "yearly" })),
  );
  return list;
}

// Fixed when the server starts (each deploy), so crawlers are not told every page changed on every request.
const lastmod = new Date().toISOString().slice(0, 10);

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries()
  .map(
    (e) =>
      `  <url><loc>${absoluteUrl(e.path)}</loc><lastmod>${lastmod}</lastmod><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`,
  )
  .join("\n")}
</urlset>
`;
        return new Response(body, {
          headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
