import { createFileRoute, Link } from "@tanstack/react-router";
import { seo, breadcrumbLd } from "@/lib/seo";
import { pageLd } from "@/lib/schema";
import { createElement } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import workspace from "@/assets/workspace.webp";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { guarantees, notRightFor, processSteps } from "@/content/process";
import { Reveal, TiltCard } from "@/components/fx/motion";
import { PageHero, Section, SectionTitle, CtaBand } from "@/components/site/Layout";
import { stepIcons } from "@/components/site/icons";
import { serviceImages } from "@/lib/images";

export const Route = createFileRoute("/about")({
  head: () =>
    seo({
      title: "About SunCrest Technology | Independent IT Consulting",
      description:
        "See how it works when one expert looks after your IT: fixed prices, plain talk and a handover that leaves you in control. For individuals and businesses of every size.",
      path: "/about",
      jsonLd: [
        pageLd("AboutPage", "About SunCrest Technology", "/about", "How one accountable expert builds software, automation and AI, and runs the infrastructure underneath it, for individuals and businesses of every size."),
        breadcrumbLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }]),
      ],
    }),
  component: AboutPage,
});

const principles = [
  {
    title: "Someone owns the outcome",
    detail: "You get responsibility for the result, not just a task list. If something delivered to you breaks, fixing it is on us.",
  },
  {
    title: "Simple, proven technology",
    detail: "You get dependable tools your team can understand, instead of clever novelty that only its builder can maintain.",
  },
  {
    title: "Plain talk",
    detail: "You get a written scope, a fixed price and a short update every Friday. No jargon and no invoices you did not expect.",
  },
  {
    title: "A stronger position at the end",
    detail: "Every project ends with documentation and a walkthrough, so you never depend on anyone to understand your own systems.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        image={workspace}
        title={<>IT help that leaves you <span className="font-serif italic text-gradient">in control.</span></>}
        intro={`Technology should work for you, not the other way around. ${site.name} gives individuals and businesses of every size one accountable expert for building, running and supporting the technology they depend on, instead of several suppliers to chase.`}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p className="font-display text-2xl leading-snug text-foreground md:text-3xl">
              If your technology feels like a pile of things nobody fully owns,{" "}
              <span className="text-primary">you are not alone.</span>
            </p>
            <p>You know the signs. A release process only one person understands. A cloud account nobody has opened in a year. A manual workflow that stops dead when someone takes leave.</p>
            <p>That work never wins the argument against urgent, visible tasks, so it piles up until it becomes the reason everything else slows down. It is also well suited to an outside expert on a fixed scope: bounded, measurable and light on context.</p>
            <p>That is the gap this fills. You get the applications, AI features and automation you need, and the cloud, releases and monitoring underneath them looked after too. With one person responsible for both, you never have to work out who to chase when something breaks.</p>
          </div>
          <aside className="space-y-4">
            <Reveal delay={0.1}>
            <TiltCard className="rounded-3xl" max={4}>
            <div className="rounded-3xl border border-border bg-card p-8">
              <p className="eyebrow">What this means for you</p>
              <p className="mt-4 font-display text-2xl font-semibold leading-snug">
                Technology that is dependable, so you can spend your time on your business.
              </p>
            </div>
            </TiltCard>
            </Reveal>
            <Reveal delay={0.2}>
            <TiltCard className="rounded-3xl" max={4}>
            <div className="rounded-3xl border border-border bg-card p-8">
              <p className="eyebrow">Who you will work with</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                A senior expert leads your project from first call to handover, bringing in trusted specialists only when it needs them. The number of clients at any one time is capped, so the person you brief is the person who does the work.
              </p>
            </div>
            </TiltCard>
            </Reveal>
          </aside>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border">
              <img src="/profile-1000.jpg" alt="Manish Sharma, who leads every project" loading="lazy" width={1000} height={1250} className="aspect-[4/5] w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/70 to-transparent p-6">
                <p className="font-display text-2xl font-semibold">Manish Sharma</p>
                <p className="text-sm text-muted-foreground">Your point of contact</p>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionTitle
              eyebrow="Your point of contact"
              title={<>You deal with <span className="font-serif italic text-gradient">the person doing the work.</span></>}
              intro="Manish Sharma leads every project from your first call to handover. Trusted specialists join only when your project needs them, and you are told when they do."
            />
            <ul className="space-y-4">
              {[site.responseTime, "A short written update every Friday", "Calls scheduled around your time zone", "No account managers and no hand-offs"].map((t, i) => (
                <Reveal key={t} delay={i * 0.06}>
                  <li className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary/10 text-primary"><Check className="size-4" /></span>
                    {t}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <section className="border-y border-border bg-surface">
        <Section>
          <SectionTitle
            eyebrow="What you can get"
            title={<>Six services, <span className="font-serif italic text-gradient">one person to call.</span></>}
            intro="Build it, connect it, host it, keep it running. Most clients start with one service and add others once they have seen how it goes."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
              <TiltCard className="rounded-2xl">
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group block h-full overflow-hidden rounded-2xl border border-border bg-card p-7 transition hover:border-primary/50"
              >
                <div className="-mx-7 -mt-7 mb-6 h-36 overflow-hidden rounded-t-2xl">
                  <img src={serviceImages[s.slug]} alt="" loading="lazy" width={800} height={600} className="size-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
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
        <SectionTitle eyebrow="What to expect" title={<>What you can <span className="font-serif italic text-gradient">count on.</span></>} />
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
          <SectionTitle eyebrow="Step by step" title={<>From your first call to <span className="font-serif italic text-gradient">handover.</span></>} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.08}>
                <TiltCard className="rounded-2xl">
                  <div className="h-full rounded-2xl border border-border bg-card p-6">
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-xs text-primary">{s.step} · {s.duration}</p>
                      <span className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary">{createElement(stepIcons[i]!, { className: "size-4" })}</span>
                    </div>
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
        <SectionTitle eyebrow="Your guarantees" title={<>Your protections, <span className="font-serif italic text-gradient">in writing.</span></>} />
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
        <h3 className="mt-20 font-display text-2xl font-semibold">When this may not be right for you</h3>
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
