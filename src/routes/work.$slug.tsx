import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { seo, breadcrumbLd } from "@/lib/seo";
import { caseStudyLd } from "@/lib/schema";
import { ArrowLeft, Check } from "lucide-react";
import { getProject } from "@/content/projects";
import { getService } from "@/content/services";
import { projectImages } from "@/lib/images";
import { PageHero, Section, CtaBand } from "@/components/site/Layout";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const p = getProject(params.slug);
    if (!p) throw notFound();
    return { slug: p.slug };
  },
  head: ({ loaderData }) => {
    const p = loaderData ? getProject(loaderData.slug) : undefined;
    if (!p) return { meta: [{ title: "Case study not found | Manish S Consulting" }, { name: "robots", content: "noindex" }] };
    return seo({
      title: `${p.title} | Case Study | Manish S Consulting`,
      description: p.summary,
      path: `/work/${p.slug}`,
      type: "article",
      jsonLd: [
        caseStudyLd(p),
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
          { name: p.title, path: `/work/${p.slug}` },
        ]),
      ],
    });
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { slug } = Route.useLoaderData();
  const p = getProject(slug)!;
  const service = getService(p.serviceSlug);
  return (
    <>
      <PageHero eyebrow={`Case study · ${p.clientContext}`} image={projectImages[p.slug]} title={p.title} intro={p.headline} />
      <Section>
        {p.isPlaceholder && (
          <p className="mb-8 rounded-xl border border-dashed border-border px-4 py-3 text-sm text-muted-foreground">
            Illustrative engagement: representative of the work we do. Client details are confidential and figures are indicative.
          </p>
        )}
        <Link to="/work" className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><ArrowLeft className="size-4" /> All work</Link>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {p.metrics.map((m) => (
            <div key={m.label} className="bg-card p-8">
              <p className="font-display text-5xl font-semibold text-gradient">{m.value}</p>
              <p className="mt-2 text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow">The challenge</p>
            <p className="mt-4 text-xl leading-relaxed">{p.challenge}</p>
            <p className="eyebrow mt-14">What we did</p>
            <ol className="mt-6 space-y-8 border-l border-border pl-8">
              {p.approach.map((a, i) => (
                <li key={a.title} className="relative">
                  <span className="absolute -left-[41px] grid size-5 place-items-center rounded-full bg-primary font-mono text-[10px] text-primary-foreground">{i + 1}</span>
                  <h3 className="font-display text-xl font-semibold">{a.title}</h3>
                  <p className="mt-2 text-muted-foreground">{a.detail}</p>
                </li>
              ))}
            </ol>
          </div>
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold">Results</h3>
              <ul className="mt-4 space-y-3">
                {p.results.map((r) => <li key={r} className="flex gap-2.5 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{r}</li>)}
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => <span key={t} className="rounded-full border border-border px-3 py-1 font-mono text-xs">{t}</span>)}
            </div>
            {service && (
              <Link to="/services/$slug" params={{ slug: service.slug }} className="block rounded-2xl border border-primary/30 bg-accent p-6 transition hover:border-primary">
                <p className="eyebrow">Related service</p>
                <p className="mt-2 font-display text-lg font-semibold">{service.name} →</p>
              </Link>
            )}
          </aside>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
