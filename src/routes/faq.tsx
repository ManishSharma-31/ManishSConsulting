import { createFileRoute, Link } from "@tanstack/react-router";
import { seo, breadcrumbLd } from "@/lib/seo";
import { faqLd, pageLd } from "@/lib/schema";
import { ArrowRight } from "lucide-react";
import { faqCategories, faqs, faqsIn } from "@/content/faq";
import { services } from "@/content/services";
import { Reveal } from "@/components/fx/motion";
import { PageHero, Section, CtaBand } from "@/components/site/Layout";
import workspace from "@/assets/workspace.webp";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () =>
    seo({
      title: "FAQ: Pricing, Process & Ownership | SunCrest Technology",
      description:
        "Get answers before you get in touch: whether we can help, what it costs, what you own, how scope changes work, NDAs and handover.",
      path: "/faq",
      jsonLd: [
        pageLd("WebPage", "Frequently asked questions", "/faq", "Answers for people considering IT help: fit, pricing, process, ownership and terms."),
        faqLd(faqs.length),
        breadcrumbLd([{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }]),
      ],
    }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        image={workspace}
        title={<>Questions, <span className="font-serif italic text-gradient">answered plainly.</span></>}
        intro="Whether this is right for you, what it costs, who owns what, and what happens when things change. Cannot find your question? Ask it on a free 30-minute call."
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-16">
          {faqCategories.map((c) => (
            <section key={c.id} aria-labelledby={`faq-${c.id}`}>
              <Reveal>
                <h2 id={`faq-${c.id}`} className="font-display text-3xl font-semibold tracking-tight">{c.label}</h2>
                <p className="mt-2 text-muted-foreground">{c.blurb}</p>
              </Reveal>
              <Accordion type="single" collapsible className="mt-6 w-full">
                {faqsIn(c.id).map((f, i) => (
                  <AccordionItem key={f.question} value={`${c.id}-${i}`}>
                    <AccordionTrigger className="text-left font-display text-lg">{f.question}</AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed text-muted-foreground">{f.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))}

          <section aria-labelledby="faq-services">
            <Reveal>
              <h2 id="faq-services" className="font-display text-3xl font-semibold tracking-tight">Questions about a specific service</h2>
              <p className="mt-2 text-muted-foreground">Every service page has its own FAQ covering what is included, how long it takes and when it is not the right fit.</p>
            </Reveal>
            <ul className="mt-6 flex flex-wrap gap-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition hover:border-primary hover:text-primary"
                  >
                    {s.name} <ArrowRight className="size-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
