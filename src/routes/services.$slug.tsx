import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { seo, breadcrumbLd } from "@/lib/seo";
import { serviceLd, faqPageLd } from "@/lib/schema";
import { serviceFaqs } from "@/content/service-faqs";
import { projects } from "@/content/projects";
import { projectImages } from "@/lib/images";
import { Check, X, ArrowLeft, Clock } from "lucide-react";
import { getService, services } from "@/content/services";
import { serviceImages } from "@/lib/images";
import { Reveal, TiltCard } from "@/components/fx/motion";
import { PageHero, Section, CtaBand } from "@/components/site/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
      title: s.seoTitle,
      description: s.metaDescription,
      path: `/services/${s.slug}`,
      jsonLd: [
        serviceLd(s),
        faqPageLd(serviceFaqs(s)),
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
  const faqs = serviceFaqs(s);
  const related = projects.filter((p) => p.serviceSlug === s.slug);
  return (
    <>
      <PageHero eyebrow={s.subtitle} image={serviceImages[s.slug]} title={s.headline} intro={s.summary} />
      <Section>
        <Link to="/services" className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><ArrowLeft className="size-4" /> All services</Link>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="eyebrow">{s.name}: the problem</h2>
            <p className="mt-4 text-xl leading-relaxed">{s.body.problem}</p>
            <h2 className="eyebrow mt-14">{s.name}: what's included</h2>
            <div className="mt-6 grid gap-4">
              {s.capabilities.map((c) => (
                <Reveal key={c.name}>
                  <TiltCard className="rounded-2xl" max={3}>
                    <div className="rounded-2xl border border-border bg-card p-6">
                      <h3 className="font-display text-lg font-semibold">{c.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.detail}</p>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
            <h2 className="eyebrow mt-14">{s.name}: how we approach it</h2>
            <ol className="mt-6 space-y-6">
              {s.body.approach.map((a, i) => (
                <li key={a.title}>
                  <Reveal className="flex gap-5">
                    <span className="font-display text-3xl font-semibold text-gradient">0{i + 1}</span>
                    <div>
                      <h3 className="font-display text-lg font-semibold">{a.title}</h3>
                      <p className="mt-1 text-muted-foreground">{a.detail}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
            <Reveal className="mt-14">
            <blockquote className="rounded-3xl border border-primary/30 bg-accent p-8">
              <p className="eyebrow">Our position</p>
              <p className="mt-3 font-serif text-3xl italic leading-snug">"{s.stance.claim}"</p>
              <p className="mt-4 text-muted-foreground">{s.stance.detail}</p>
            </blockquote>
            </Reveal>

            <h2 className="eyebrow mt-14">{s.name}: frequently asked questions</h2>
            <Reveal className="mt-4">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((f, i) => (
                  <AccordionItem key={f.question} value={`q${i}`}>
                    <AccordionTrigger className="text-left font-display text-lg">{f.question}</AccordionTrigger>
                    <AccordionContent className="whitespace-pre-line text-base leading-relaxed text-muted-foreground">{f.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>

            {related.length > 0 && (
              <>
                <h2 className="eyebrow mt-14">Related work</h2>
                <div className="mt-4 grid gap-4">
                  {related.map((p) => (
                    <Reveal key={p.slug}>
                      <Link to="/work/$slug" params={{ slug: p.slug }} className="group flex items-center gap-5 overflow-hidden rounded-2xl border border-border bg-card p-3 pr-6 transition hover:border-primary/50">
                        <img src={projectImages[p.slug]} alt={p.title} loading="lazy" width={160} height={107} className="aspect-[3/2] w-28 shrink-0 rounded-xl object-cover sm:w-40" />
                        <div>
                          <p className="font-display text-lg font-semibold leading-snug group-hover:text-primary">{p.title}</p>
                          <p className="mt-1 text-sm text-muted-foreground">{p.metrics[0]?.value} {p.metrics[0]?.label}</p>
                        </div>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </>
            )}

            <h2 className="eyebrow mt-14">Other services</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {services.filter((o) => o.slug !== s.slug).map((o) => (
                <li key={o.slug}>
                  <Link to="/services/$slug" params={{ slug: o.slug }} className="inline-block rounded-full border border-border px-4 py-2 text-sm transition hover:border-primary hover:text-primary">{o.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="flex items-center gap-2 font-mono text-xs text-primary"><Clock className="size-4" /> {s.typicalTimeline}</p>
              <h3 className="mt-5 font-display text-lg font-semibold">You get</h3>
              <ul className="mt-3 space-y-3">
                {s.deliverables.map((d) => <li key={d} className="flex gap-2.5 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{d}</li>)}
              </ul>
            </div>
            </Reveal>
            <Reveal delay={0.15}>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold">Ideal if</h3>
              <ul className="mt-3 space-y-3">
                {s.idealFor.map((d) => <li key={d} className="flex gap-2.5 text-sm text-muted-foreground"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{d}</li>)}
              </ul>
            </div>
            </Reveal>
            <Reveal delay={0.2}>
            <div className="rounded-2xl border border-border p-6">
              <h3 className="font-display text-lg font-semibold">Not a fit for</h3>
              <ul className="mt-3 space-y-3">
                {s.notFor.map((d) => <li key={d} className="flex gap-2.5 text-sm text-muted-foreground"><X className="mt-0.5 size-4 shrink-0 text-destructive" />{d}</li>)}
              </ul>
            </div>
            </Reveal>
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
