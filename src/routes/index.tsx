import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { organizationGraph, faqLd } from "@/lib/schema";
import { ArrowUpRight, ArrowRight, Check, MapPin } from "lucide-react";
import hero from "@/assets/hero.webp";
import { site, audiences } from "@/content/site";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { results, differentiators, certifications } from "@/content/credentials";
import { processSteps } from "@/content/process";
import { faqs } from "@/content/faq";
import { serviceImages, projectImages } from "@/lib/images";
import { Section, SectionTitle, CtaBand } from "@/components/site/Layout";
import { HeroScene } from "@/components/fx/HeroScene";
import { CountUp, Magnetic, Reveal, TiltCard, WordReveal } from "@/components/fx/motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "Manish S Consulting | IT Consulting & Technology Solutions",
      description:
        "Independent IT consulting for businesses of every size and individuals: web, software, cloud, automation, AI and IT support. Fixed prices, written scope.",
      path: "/",
      jsonLd: [organizationGraph(), faqLd()],
    }),
  component: Index,
});

const marquee = ["AWS", "Azure", "Kubernetes", "Terraform", "Docker", "GitLab CI", "Python", "Go", "React", "TypeScript", "Claude", "OpenAI", "LangChain", "PostgreSQL", "FastAPI", "Linux"];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <img src={hero} alt="" width={1440} height={907} fetchPriority="high" decoding="async" className="absolute inset-0 size-full object-cover opacity-25" />
        <div className="bg-grid absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="animate-aurora glow-lime absolute -left-40 -top-10 size-[44rem]" />
        <div className="animate-aurora glow-amber absolute -bottom-20 -right-32 size-[40rem] [animation-delay:-7s]" />
        <HeroScene />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent md:via-background/30" />
        <div className="bg-fade absolute inset-x-0 bottom-0 h-48" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pt-28 pb-16 md:px-8">
          <p className="animate-rise mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-1.5 font-mono text-xs uppercase tracking-widest">
            <span className="animate-pulse-dot size-2 rounded-full bg-primary" />
            {site.availability.label} · {site.availability.detail}
          </p>
          <h1 className="max-w-5xl font-display text-[clamp(3rem,8vw,7.5rem)] font-semibold leading-[0.95] tracking-tighter">
            <WordReveal text="Every kind of IT solution." />
            <br />
            {/* Gradient text lives on its own element (not on animated children) so every browser paints it. */}
            <span className="animate-rise inline-block pb-[0.1em] [animation-delay:0.3s]">
              <span className="font-serif font-normal italic text-shine">One expert to call.</span>
            </span>
          </h1>
          <p className="animate-rise mt-8 max-w-2xl text-lg text-muted-foreground [animation-delay:0.5s] md:text-xl">
            Manish S Consulting is an independent IT consulting practice for businesses of every size and for individuals. Websites and software,
            cloud and DevOps, automation, AI and everyday IT support, planned in writing, built properly and looked after by the{" "}
            <em className="text-foreground not-italic">same person</em> from first call to handover.
          </p>
          <div className="animate-rise mt-10 flex flex-wrap items-center gap-4 [animation-delay:0.65s]">
            <Magnetic>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground transition hover:shadow-glow">
                Book a free 30-min call <ArrowUpRight className="size-5" />
              </Link>
            </Magnetic>
            <Magnetic strength={0.15}>
              <Link to="/work" className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-7 py-4 font-medium transition hover:border-primary">
                See the work <ArrowRight className="size-4" />
              </Link>
            </Magnetic>
          </div>
          <div className="animate-rise mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border [animation-delay:0.8s] md:grid-cols-4">
            {results.map((r) => (
              <div key={r.label} className="bg-background/90 p-5">
                <p className="font-display text-3xl font-semibold text-primary"><CountUp value={r.value} /></p>
                <p className="mt-1 text-sm font-medium">{r.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-border bg-surface py-5">
        <div className="animate-marquee flex w-max gap-12 font-mono text-sm uppercase tracking-widest text-muted-foreground">
          {[...marquee, ...marquee].map((t, i) => (
            <span key={i} className="flex items-center gap-12">{t}<span className="text-primary">✦</span></span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <Section>
        <SectionTitle
          eyebrow="What we do"
          title={<>Every kind of IT. <span className="font-serif italic text-muted-foreground">One point of contact.</span></>}
          intro="From a first website to a full cloud migration, one expert plans it, builds it and looks after it. Not sure what you need? Start with a conversation."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.slug} delay={(i % 3) * 0.08} className={i === 0 ? "lg:col-span-2" : ""}>
              <TiltCard className="rounded-2xl">
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition duration-500 hover:border-primary/50 hover:shadow-glow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={serviceImages[s.slug]} alt={s.name} loading="lazy" className="size-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <Icon className="size-5 text-primary" />
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.headline}.</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Explore <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
              </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* WORK */}
      <section className="border-y border-border bg-surface">
        <Section>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle eyebrow="Selected work" title={<>How the work <span className="font-serif italic text-gradient">actually gets done.</span></>} />
            <Link to="/work" className="mb-14 inline-flex items-center gap-2 text-sm font-medium hover:text-primary">All work <ArrowRight className="size-4" /></Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.1}>
              <TiltCard className="rounded-2xl">
              <Link to="/work/$slug" params={{ slug: p.slug }} className="group block h-full overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/50">
                <div className="aspect-[3/2] overflow-hidden">
                  <img src={projectImages[p.slug]} alt={p.title} loading="lazy" className="size-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                    <span>{p.clientContext}</span><span>{p.year}</span>
                  </div>
                  <p className={`mt-4 font-display font-semibold text-primary ${(p.metrics[0]?.value.length ?? 0) > 7 ? "text-2xl" : "text-4xl"}`}>{p.metrics[0]?.value}</p>
                  <p className="text-sm text-muted-foreground">{p.metrics[0]?.label}</p>
                  <h3 className="mt-4 font-display text-xl font-semibold leading-snug">{p.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => <span key={t} className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">{t}</span>)}
                  </div>
                </div>
              </Link>
              </TiltCard>
              </Reveal>
            ))}
          </div>
        </Section>
      </section>

      {/* WHY + FOUNDER */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative">
            <div className="glow-lime absolute -inset-16" />
            <div className="relative overflow-hidden rounded-3xl border border-border">
              <img src="/profile-1000.jpg" alt="Manish Sharma, founder" loading="lazy" className="aspect-[4/5] w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/70 to-transparent p-6">
                <p className="font-display text-2xl font-semibold">Manish Sharma</p>
                <p className="flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin className="size-4" /> Founder · {site.location}</p>
              </div>
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Why work with us" title={<>Small on purpose. <span className="font-serif italic text-gradient">Accountable by design.</span></>} />
            <div className="grid gap-6 sm:grid-cols-2">
              {differentiators.map((d, i) => (
                <Reveal key={d.title} delay={i * 0.07}>
                  <TiltCard className="rounded-2xl">
                    <div className="h-full rounded-2xl border border-border bg-card p-6">
                      <span className="font-mono text-xs text-primary">0{i + 1}</span>
                      <h3 className="mt-2 font-display text-lg font-semibold">{d.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.detail}</p>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {certifications.map((c) => (
                <span key={c.title} className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs"><Check className="size-3.5 text-primary" />{c.title}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* PROCESS */}
      <section className="border-y border-border bg-surface">
        <Section>
          <SectionTitle eyebrow="How it works" title={<>From first call to handover in <span className="font-serif italic text-gradient">four steps.</span></>} />
          <ol className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {processSteps.map((s) => (
              <li key={s.step} className="group bg-card p-7 transition-colors duration-500 hover:bg-secondary">
                <span className="inline-block font-display text-5xl font-semibold text-gradient transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110">{s.step}</span>
                <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-1 font-mono text-xs text-primary">{s.duration}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
              </li>
            ))}
          </ol>
        </Section>
      </section>

      {/* INDUSTRIES */}
      <Section>
        <SectionTitle eyebrow="Who we help" title="Whoever you are, technology done right." intro="Individuals, small businesses and large organisations all get the same careful process: a free call, a written scope and a fixed price." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 3) * 0.06}>
              <div className="group h-full rounded-2xl border border-border p-6 transition duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card">
                <h3 className="font-display text-lg font-semibold group-hover:text-primary">{ind.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{ind.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <section className="border-t border-border">
        <Section className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionTitle eyebrow="FAQ" title={<>Questions, <span className="font-serif italic text-gradient">answered.</span></>} intro="Everything clients usually ask before getting started. The full list is on the FAQ page." />
          <Accordion type="single" collapsible className="w-full">
            {faqs.slice(0, 7).map((f, i) => (
              <AccordionItem key={i} value={`f${i}`}>
                <AccordionTrigger className="text-left font-display text-lg">{f.question}</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">{f.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Section>
      </section>

      <CtaBand />
    </>
  );
}
