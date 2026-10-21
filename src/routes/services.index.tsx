import { createFileRoute, Link } from "@tanstack/react-router";
import { seo, breadcrumbLd } from "@/lib/seo";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { services } from "@/content/services";
import { engagementModels } from "@/content/process";
import { serviceImages } from "@/lib/images";
import { PageHero, Section, SectionTitle, CtaBand } from "@/components/site/Layout";

export const Route = createFileRoute("/services/")({
  head: () =>
    seo({
      title: "IT Services: AI, Automation, Web Development, Cloud & DevOps | Manish S Consulting",
      description:
        "Six IT services from one accountable consultancy in Pune: AI solutions, automation, web development, cloud architecture, DevOps and IT support. Fixed prices and written scope.",
      path: "/services",
      jsonLd: breadcrumbLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]),
    }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        image={hero}
        title={<>Everything between the idea <span className="font-serif italic text-gradient">and the uptime.</span></>}
        intro="Pick one service or combine several — either way you deal with a single engineer who owns the outcome end to end."
      />
      <Section>
        <div className="space-y-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group grid overflow-hidden rounded-3xl border border-border bg-card transition hover:border-primary/50 md:grid-cols-[1fr_1.4fr]"
              >
                <div className={`relative h-60 overflow-hidden md:h-auto ${i % 2 ? "md:order-2" : ""}`}>
                  <img src={serviceImages[s.slug]} alt={s.name} loading="lazy" className="size-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-3 text-primary">
                    <Icon className="size-5" />
                    <span className="font-mono text-xs uppercase tracking-widest">0{i + 1} · {s.name}</span>
                  </div>
                  <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-4xl">{s.headline}</h2>
                  <p className="mt-4 text-muted-foreground">{s.summary}</p>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {s.capabilities.slice(0, 4).map((c) => (
                      <li key={c.name} className="flex items-center gap-2 text-sm"><span className="size-1.5 rounded-full bg-primary" />{c.name}</li>
                    ))}
                  </ul>
                  <div className="mt-8 flex items-center justify-between">
                    <span className="font-mono text-xs text-muted-foreground">{s.typicalTimeline}</span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">Details <ArrowRight className="size-4 transition group-hover:translate-x-1" /></span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>
      <section className="border-y border-border bg-surface">
        <Section>
          <SectionTitle eyebrow="Ways to engage" title="Three ways to work together." />
          <div className="grid gap-6 md:grid-cols-3">
            {engagementModels.map((m) => (
              <div key={m.title} className="rounded-2xl border border-border bg-card p-7">
                <p className="font-mono text-xs text-primary">{m.fit}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.detail}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {m.examples.map((e) => <span key={e} className="rounded-full bg-secondary px-3 py-1 text-xs">{e}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </section>
      <CtaBand />
    </>
  );
}
