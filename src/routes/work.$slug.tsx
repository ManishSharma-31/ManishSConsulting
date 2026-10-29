import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { seo, breadcrumbLd } from "@/lib/seo";
import { caseStudyLd } from "@/lib/schema";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { getProject, isWorkedExample, kindLabel } from "@/content/projects";
import { getService } from "@/content/services";
import { projectImages } from "@/lib/images";
import { Reveal, TiltCard } from "@/components/fx/motion";
import { CountUp } from "@/components/fx/motion";
import { PageHero, Section, CtaBand } from "@/components/site/Layout";

/** Keep meta descriptions inside what search results show, cutting at a word boundary. */
const clip = (text: string, max = 155) => (text.length <= max ? text : `${text.slice(0, max).replace(/\s+\S*$/, "")}…`);

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
      title: `${p.title} | Manish S Consulting`.length <= 65 ? `${p.title} | Manish S Consulting` : p.title,
      description: clip(p.summary),
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
      <PageHero eyebrow={`${kindLabel(p)} · ${p.clientContext}`} image={p.kind === "project" ? undefined : projectImages[p.slug]} title={p.title} intro={p.headline} />
      <Section>
        <p className="mb-8 rounded-xl border border-dashed border-border px-4 py-3 text-sm text-muted-foreground">
          {p.kind === "project"
            ? "Project: a product designed, built and deployed by Manish Sharma. The strip below lists facts about the product. No customers, usage or results are claimed."
            : isWorkedExample(p)
              ? "Worked example: a representative scenario showing how we approach this kind of work. It describes no real client, and the strip below lists properties of the approach, not results."
              : "Case study: delivered in a previous role. Company details are confidential, and the figure shown is the one that was measured."}
        </p>
        {p.kind === "project" && (
          <figure className="mb-10 overflow-hidden rounded-3xl border border-border bg-card">
            <img
              src={projectImages[p.slug]}
              alt="Diagram of the LeadStock CRM sales pipeline: leads, follow-ups, quotation and orders, protected by row level security, with four roles per organisation."
              width={1200}
              height={800}
              decoding="async"
              className="aspect-[3/2] w-full object-cover"
            />
          </figure>
        )}
        <Link to="/work" className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><ArrowLeft className="size-4" /> All work</Link>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {p.metrics.map((m) => (
            <div key={m.label} className="bg-card p-8 transition-colors duration-500 hover:bg-secondary">
              <p className={`font-display font-semibold text-gradient ${m.value.length > 7 ? "text-3xl" : "text-5xl"}`}><CountUp value={m.value} /></p>
              <p className="mt-2 text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow">{isWorkedExample(p) ? "The scenario" : "The challenge"}</p>
            <p className="mt-4 text-xl leading-relaxed">{p.challenge}</p>
            <p className="eyebrow mt-14">{p.kind === "project" ? "How it is built" : isWorkedExample(p) ? "How it is done" : "What was done"}</p>
            <ol className="mt-6 space-y-8 border-l border-border pl-8">
              {p.approach.map((a, i) => (
                <li key={a.title} className="relative">
                  <span className="absolute -left-[41px] grid size-5 place-items-center rounded-full bg-primary font-mono text-[10px] text-primary-foreground shadow-glow">{i + 1}</span>
                  <Reveal>
                    <h3 className="font-display text-xl font-semibold">{a.title}</h3>
                    <p className="mt-2 text-muted-foreground">{a.detail}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold">{p.kind === "project" ? "What it does" : isWorkedExample(p) ? "What you end up with" : "Results"}</h3>
              <ul className="mt-4 space-y-3">
                {p.results.map((r) => <li key={r} className="flex gap-2.5 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{r}</li>)}
              </ul>
            </div>
            </Reveal>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => <span key={t} className="rounded-full border border-border px-3 py-1 font-mono text-xs">{t}</span>)}
            </div>
            {p.liveUrl && (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-primary/40 bg-primary p-6 text-primary-foreground transition hover:shadow-glow"
              >
                <p className="font-mono text-xs uppercase tracking-widest opacity-70">Live demo</p>
                <p className="mt-2 flex items-center justify-between font-display text-lg font-semibold">
                  Try {p.title.split(":")[0]} <ArrowUpRight className="size-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </p>
                <p className="mt-2 text-sm opacity-80">Signup is invite-only. Demo accounts for each role are available on request through the contact page.</p>
              </a>
            )}
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
