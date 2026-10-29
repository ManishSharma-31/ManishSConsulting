import { createFileRoute, Link } from "@tanstack/react-router";
import { seo, breadcrumbLd } from "@/lib/seo";
import { pageLd } from "@/lib/schema";
import { ArrowUpRight } from "lucide-react";
import workspace from "@/assets/workspace.webp";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { guarantees, notRightFor, processSteps } from "@/content/process";
import { Reveal, TiltCard } from "@/components/fx/motion";
import { PageHero, Section, SectionTitle, CtaBand } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () =>
    seo({
      title: "About Manish S Consulting | Independent IT Consulting",
      description:
        "Independent IT consulting for businesses of every size and individuals. One accountable expert from first call to handover, with fixed prices.",
      path: "/about",
      jsonLd: [
        pageLd("AboutPage", "About Manish S Consulting", "/about", "An independent IT consultancy that builds software, automation and AI, and runs the infrastructure underneath it, for businesses of every size and for individuals."),
        breadcrumbLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }]),
      ],
    }),
  component: AboutPage,
});

const principles = [
  {
    title: "Own the outcome",
    detail: "We take responsibility for the result, not just the task list. If something we delivered breaks, it is ours to fix.",
  },
  {
    title: "Keep it simple",
    detail: "We choose boring, proven technology over clever novelty. Systems your team can understand are systems your team can keep running.",
  },
  {
    title: "Say it plainly",
    detail: "Written scope, fixed prices and a short update every Friday. No jargon, no surprises, no invoices you did not expect.",
  },
  {
    title: "Leave you stronger",
    detail: "Every engagement ends with documentation and a walkthrough, so you are never dependent on us to understand your own systems.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        image={workspace}
        title={<>An IT consultancy that <span className="font-serif italic text-gradient">stays on the hook.</span></>}
        intro={`${site.name} is an independent technology consultancy for businesses of every size and for individuals. We build software, automation and AI, run the infrastructure underneath it, and look after the everyday IT around it, for people who want one accountable partner instead of several.`}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p className="font-display text-2xl leading-snug text-foreground md:text-3xl">
              Most technology problems in any business aren't really technology problems. They're{" "}
              <span className="text-primary">ownership</span> problems.
            </p>
            <p>The deploy process only one person understands. The cloud account nobody has opened in a year. The manual workflow that stops dead when someone takes leave.</p>
            <p>That work never wins the priority argument against shipping features, so it piles up until it becomes the reason features stop shipping. It is also well suited to an outside team on a fixed scope: bounded, measurable, and light on product context.</p>
            <p>That is the gap we fill. We build the applications, AI features and automation, and we run the cloud, pipelines and monitoring beneath them. Holding both means that when something breaks, there is nobody else to point at.</p>
          </div>
          <aside className="space-y-4">
            <Reveal delay={0.1}>
            <TiltCard className="rounded-3xl" max={4}>
            <div className="rounded-3xl border border-border bg-card p-8">
              <p className="eyebrow">Our mission</p>
              <p className="mt-4 font-display text-2xl font-semibold leading-snug">
                Make technology dependable, so you can spend your time on the business.
              </p>
            </div>
            </TiltCard>
            </Reveal>
            <Reveal delay={0.2}>
            <TiltCard className="rounded-3xl" max={4}>
            <div className="rounded-3xl border border-border bg-card p-8">
              <p className="eyebrow">How we're set up</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                A focused, senior-led consultancy that brings in trusted specialists when a project calls for them. We limit how many clients we take on at once, so the people you brief are the people who deliver the work.
              </p>
            </div>
            </TiltCard>
            </Reveal>
          </aside>
        </div>
      </Section>

      <section className="border-y border-border bg-surface">
        <Section>
          <SectionTitle
            eyebrow="What we do"
            title={<>Six services, <span className="font-serif italic text-gradient">one team.</span></>}
            intro="Build it, connect it, host it, keep it running. Most clients start with one service and grow into others as they learn what we're like to work with."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
              <TiltCard className="rounded-2xl">
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group block h-full rounded-2xl border border-border bg-card p-7 transition hover:border-primary/50"
              >
                <s.icon className="size-6 text-primary" />
                <h3 className="mt-5 flex items-center justify-between font-display text-xl font-semibold">
                  {s.name}
                  <ArrowUpRight className="size-4 text-muted-foreground transition group-hover:text-primary" />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
              </Link>
              </TiltCard>
              </Reveal>
            ))}
          </div>
        </Section>
      </section>

      <Section>
        <SectionTitle eyebrow="Principles" title={<>How we <span className="font-serif italic text-gradient">work.</span></>} />
        <div className="grid gap-6 md:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08}>
              <TiltCard className="rounded-2xl">
                <div className="h-full rounded-2xl border border-border bg-card p-7">
                  <p className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 font-display text-xl font-semibold">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.detail}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="border-y border-border bg-surface">
        <Section>
          <SectionTitle eyebrow="Process" title={<>From first call to <span className="font-serif italic text-gradient">handover.</span></>} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.08}>
                <TiltCard className="rounded-2xl">
                  <div className="h-full rounded-2xl border border-border bg-card p-6">
                    <p className="font-mono text-xs text-primary">{s.step} · {s.duration}</p>
                    <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </Section>
      </section>

      <Section>
        <SectionTitle eyebrow="Promises" title={<>Commitments, <span className="font-serif italic text-gradient">in writing.</span></>} />
        <div className="grid gap-6 md:grid-cols-3">
          {guarantees.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <TiltCard className="rounded-2xl">
                <div className="h-full rounded-2xl border border-border bg-card p-7">
                  <h3 className="font-display text-xl font-semibold">{g.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{g.detail}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
        <h3 className="mt-20 font-display text-2xl font-semibold">When we're probably not the right fit</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {notRightFor.map((n, i) => (
            <Reveal key={n.title} delay={(i % 3) * 0.06}>
              <div className="h-full rounded-2xl border border-dashed border-border p-6">
                <p className="font-medium">{n.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{n.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
