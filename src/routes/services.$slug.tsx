import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { seo, breadcrumbLd } from "@/lib/seo";
import { serviceLd } from "@/lib/schema";
import { Check, X, ArrowLeft, Clock } from "lucide-react";
import { getService } from "@/content/services";
import { serviceImages } from "@/lib/images";
import { PageHero, Section, CtaBand } from "@/components/site/Layout";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ loaderData }) => {
    const s = loaderData ? getService(loaderData.slug) : undefined;
    if (!s) return { meta: [{ title: "Service not found | Manish S Consulting" }, { name: "robots", content: "noindex" }] };
    return seo({
      title: `${s.name} in Pune, India | Manish S Consulting`,
      description: s.summary,
      path: `/services/${s.slug}`,
      jsonLd: [
        serviceLd(s),
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: s.name, path: `/services/${s.slug}` },
        ]),
      ],
    });
  },
  component: ServicePage,
});

function ServicePage() {
  const { slug } = Route.useLoaderData();
  const s = getService(slug)!;
  return (
    <>
      <PageHero eyebrow={s.subtitle} image={serviceImages[s.slug]} title={s.headline} intro={s.summary} />
      <Section>
        <Link to="/services" className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><ArrowLeft className="size-4" /> All services</Link>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow">The problem</p>
            <p className="mt-4 text-xl leading-relaxed">{s.body.problem}</p>
            <p className="eyebrow mt-14">What's included</p>
            <div className="mt-6 grid gap-4">
              {s.capabilities.map((c) => (
                <div key={c.name} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-display text-lg font-semibold">{c.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.detail}</p>
                </div>
              ))}
            </div>
            <p className="eyebrow mt-14">How we approach it</p>
            <ol className="mt-6 space-y-6">
              {s.body.approach.map((a, i) => (
                <li key={a.title} className="flex gap-5">
                  <span className="font-display text-3xl font-semibold text-gradient">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{a.title}</h3>
                    <p className="mt-1 text-muted-foreground">{a.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
            <blockquote className="mt-14 rounded-3xl border border-primary/30 bg-accent p-8">
              <p className="eyebrow">Our position</p>
              <p className="mt-3 font-serif text-3xl italic leading-snug">"{s.stance.claim}"</p>
              <p className="mt-4 text-muted-foreground">{s.stance.detail}</p>
            </blockquote>
          </div>
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="flex items-center gap-2 font-mono text-xs text-primary"><Clock className="size-4" /> {s.typicalTimeline}</p>
              <h3 className="mt-5 font-display text-lg font-semibold">You get</h3>
              <ul className="mt-3 space-y-3">
                {s.deliverables.map((d) => <li key={d} className="flex gap-2.5 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{d}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold">Ideal if</h3>
              <ul className="mt-3 space-y-3">
                {s.idealFor.map((d) => <li key={d} className="flex gap-2.5 text-sm text-muted-foreground"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{d}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl border border-border p-6">
              <h3 className="font-display text-lg font-semibold">Not a fit for</h3>
              <ul className="mt-3 space-y-3">
                {s.notFor.map((d) => <li key={d} className="flex gap-2.5 text-sm text-muted-foreground"><X className="mt-0.5 size-4 shrink-0 text-destructive" />{d}</li>)}
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              {s.stack.map((t) => <span key={t} className="rounded-full border border-border px-3 py-1 font-mono text-xs">{t}</span>)}
            </div>
          </aside>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
