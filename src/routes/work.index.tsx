import { createFileRoute, Link } from "@tanstack/react-router";
import { seo, breadcrumbLd } from "@/lib/seo";
import { pageLd, workListLd } from "@/lib/schema";
import { ArrowUpRight } from "lucide-react";
import { projects, hasPlaceholderProjects } from "@/content/projects";
import { projectImages } from "@/lib/images";
import { PageHero, Section, CtaBand } from "@/components/site/Layout";

export const Route = createFileRoute("/work/")({
  head: () =>
    seo({
      title: "Case Studies | Manish S Consulting",
      description: "Example engagements showing how Manish S Consulting approaches DevOps, cloud and backend work.",
      path: "/work",
      jsonLd: [
        pageLd("CollectionPage", "Case Studies", "/work", "Example engagements showing how Manish S Consulting approaches DevOps, cloud and backend work."),
        workListLd(projects),
        breadcrumbLd([{ name: "Home", path: "/" }, { name: "Work", path: "/work" }]),
      ],
    }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title={<>Problems solved, <span className="font-serif italic text-gradient">numbers attached.</span></>}
        intro="Each case study starts with what was broken, explains what we changed, and ends with the result — measured, not adjectived."
      />
      <Section className="space-y-10">
        {hasPlaceholderProjects && (
          <p className="rounded-xl border border-dashed border-border px-4 py-3 text-sm text-muted-foreground">
            These are illustrative engagements, representative of the work we do. Client details are confidential and figures are indicative.
          </p>
        )}
        {projects.map((p, i) => (
          <Link key={p.slug} to="/work/$slug" params={{ slug: p.slug }} className="group grid overflow-hidden rounded-3xl border border-border bg-card transition hover:border-primary/50 lg:grid-cols-2">
            <div className={`aspect-[3/2] overflow-hidden lg:aspect-auto ${i % 2 ? "lg:order-2" : ""}`}>
              <img src={projectImages[p.slug]} alt={p.title} loading="lazy" className="size-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div className="flex flex-col p-8 md:p-12">
              <div className="flex justify-between font-mono text-xs text-muted-foreground"><span>{p.clientContext}</span><span>{p.year}</span></div>
              <h2 className="mt-6 font-display text-3xl font-semibold leading-tight md:text-4xl">{p.title}</h2>
              <p className="mt-4 text-muted-foreground">{p.summary}</p>
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                {p.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="font-display text-3xl font-semibold text-primary">{m.value}</p>
                    <p className="text-xs text-muted-foreground">{m.label}</p>
                  </div>
                ))}
              </div>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-medium text-primary">Read case study <ArrowUpRight className="size-4" /></span>
            </div>
          </Link>
        ))}
      </Section>
      <CtaBand />
    </>
  );
}
