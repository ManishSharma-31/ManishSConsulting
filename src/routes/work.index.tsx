import { createFileRoute, Link } from "@tanstack/react-router";
import { seo, breadcrumbLd } from "@/lib/seo";
import { pageLd, workListLd } from "@/lib/schema";
import { ArrowUpRight } from "lucide-react";
import { projects, hasWorkedExamples, kindLabel } from "@/content/projects";
import { projectImages } from "@/lib/images";
import { Reveal, TiltCard } from "@/components/fx/motion";
import { CountUp } from "@/components/fx/motion";
import { PageHero, Section, CtaBand } from "@/components/site/Layout";

export const Route = createFileRoute("/work/")({
  head: () =>
    seo({
      title: "Projects, Case Study & Worked Examples | Manish S Consulting",
      description:
        "A live multi-tenant CRM product, a DevOps case study with a measured result, and worked examples of how Manish S Consulting approaches cloud and backend work.",
      path: "/work",
      jsonLd: [
        pageLd("CollectionPage", "Projects, case study and worked examples", "/work", "A live CRM product, a DevOps case study and worked examples of how Manish S Consulting approaches cloud and backend work."),
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
        title={<>Real problems, <span className="font-serif italic text-gradient">honestly shown.</span></>}
        intro="A live product we built, a case study with a measured result, and worked examples of how we approach other kinds of work. Each one says plainly which it is."
      />
      <Section className="space-y-10">
        {hasWorkedExamples && (
          <p className="rounded-xl border border-dashed border-border px-4 py-3 text-sm text-muted-foreground">
            <strong className="font-medium text-foreground">Project</strong> is a product we built and run, and <strong className="font-medium text-foreground">Case study</strong> is real work with the one figure that was measured.{" "}
            <strong className="font-medium text-foreground">Worked example</strong> is a representative scenario that shows how we approach a kind of work. It describes no real client and lists no results.
          </p>
        )}
        {projects.map((p, i) => (
          <Reveal key={p.slug}>
          <TiltCard className="rounded-3xl" max={2.5}>
          <Link to="/work/$slug" params={{ slug: p.slug }} className="group grid overflow-hidden rounded-3xl border border-border bg-card transition hover:border-primary/50 lg:grid-cols-2">
            <div className={`aspect-[3/2] overflow-hidden lg:aspect-auto ${i % 2 ? "lg:order-2" : ""}`}>
              <img src={projectImages[p.slug]} alt={p.title} loading="lazy" className="size-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div className="flex flex-col p-8 md:p-12">
              <div className="flex items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
                <span className="rounded-full border border-primary/40 px-3 py-1 text-primary">{kindLabel(p)}</span>
                <span>{p.year}</span>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">{p.clientContext}</p>
              <h2 className="mt-6 font-display text-3xl font-semibold leading-tight md:text-4xl">{p.title}</h2>
              <p className="mt-4 text-muted-foreground">{p.summary}</p>
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                {p.metrics.map((m) => (
                  <div key={m.label}>
                    <p className={`font-display font-semibold text-primary ${m.value.length > 7 ? "text-xl" : "text-3xl"}`}><CountUp value={m.value} /></p>
                    <p className="text-xs text-muted-foreground">{m.label}</p>
                  </div>
                ))}
              </div>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-medium text-primary">Read the {kindLabel(p).toLowerCase()} <ArrowUpRight className="size-4" /></span>
            </div>
          </Link>
          </TiltCard>
          </Reveal>
        ))}
      </Section>
      <CtaBand />
    </>
  );
}
