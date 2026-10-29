import { createFileRoute, Link } from "@tanstack/react-router";
import { seo, breadcrumbLd } from "@/lib/seo";
import { pageLd } from "@/lib/schema";
import { useState, type FormEvent } from "react";
import { Mail, MessageCircle, MapPin, Clock, Send } from "lucide-react";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { whatINeed, processSteps } from "@/content/process";
import { faqsIn } from "@/content/faq";
import { Magnetic, Reveal, TiltCard } from "@/components/fx/motion";
import { PageHero, Section, SectionTitle } from "@/components/site/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo({
      title: "Contact Manish S Consulting | Book a Free 30-Minute Call",
      description:
        "Tell Manish S Consulting about your project. Free 30-minute discovery call for AI, automation, web, cloud and DevOps work. Replies within 24 hours on weekdays.",
      path: "/contact",
      jsonLd: [
        pageLd("ContactPage", "Contact Manish S Consulting", "/contact", "Book a free 30-minute discovery call with Manish S Consulting."),
        breadcrumbLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]),
      ],
    }),
  component: ContactPage,
});

const field = "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary";

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "mailto" | "error">("idle");
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    if (d.get("botcheck")) return; // honeypot
    const key = import.meta.env["VITE_WEB3FORMS_KEY"] as string | undefined;

    if (!key) {
      const body = `Name: ${d.get("name")}\nCompany: ${d.get("company")}\nService: ${d.get("service")}\nBudget: ${d.get("budget")}\n\n${d.get("message")}`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Project enquiry — ${d.get("name")}`)}&body=${encodeURIComponent(body)}`;
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: key,
          subject: `Project enquiry — ${d.get("name")}`,
          from_name: "Manish S Consulting website",
          name: d.get("name"),
          company: d.get("company"),
          service: d.get("service"),
          budget: d.get("budget"),
          message: d.get("message"),
        }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's talk about <span className="font-serif italic text-gradient">your problem.</span></>}
        intro="Whether you are one person with one problem or a team with a roadmap, a few lines are enough. If we're not the right fit, we'll say so and point you to someone who is."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <Reveal>
          <form onSubmit={onSubmit} className="space-y-5 rounded-3xl border border-border bg-card p-8 md:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2 text-sm">Your name<input required name="name" className={field} /></label>
              <label className="space-y-2 text-sm">Company<input name="company" className={field} /></label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2 text-sm">Service
                <select name="service" className={field}>
                  {services.map((s) => <option key={s.slug}>{s.name}</option>)}
                  <option>Not sure yet</option>
                </select>
              </label>
              <label className="space-y-2 text-sm">Project size
                <select name="budget" className={field}>
                  <option>Not sure yet</option><option>Small, one-off job</option><option>Mid-sized project</option><option>Large or ongoing work</option>
                </select>
              </label>
            </div>
            <label className="block space-y-2 text-sm">Tell us about your project<textarea required name="message" rows={6} className={field} placeholder="Your goals, current setup, timeline and any challenges you are facing." /></label>
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
            <Magnetic>
              <button disabled={status === "sending"} className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition hover:shadow-glow disabled:opacity-60">
                {status === "sending" ? "Sending…" : "Send enquiry"} <Send className="size-4" />
              </button>
            </Magnetic>
            {status === "sent" && <p className="text-sm text-primary">Thanks — your enquiry is in. We'll reply within 24 hours on weekdays.</p>}
            {status === "mailto" && <p className="text-sm text-primary">Your email app should open with the message ready — just hit send.</p>}
            {status === "error" && <p className="text-sm text-destructive">Something went wrong. Please try again or email {site.email} directly.</p>}
          </form>
          </Reveal>
          <aside className="space-y-4">
            <h2 className="eyebrow">Other ways to reach us</h2>
            {[
              { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
              { icon: MessageCircle, label: "WhatsApp", value: "Chat on WhatsApp", href: site.whatsappUrl },
              { icon: MapPin, label: "Based in", value: site.location },
              { icon: Clock, label: "Hours", value: `${site.timezone} · ${site.overlap}` },
            ].map(({ icon: Icon, label, value, href }, i) => (
              <Reveal key={label} delay={0.08 + i * 0.07}>
              <a href={href} {...(href?.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-primary/50">
                <Icon className="mt-0.5 size-5 text-primary" />
                <div><p className="text-xs text-muted-foreground">{label}</p><p className="font-medium">{value}</p></div>
              </a>
              </Reveal>
            ))}
            <Reveal delay={0.4}>
            <div className="rounded-2xl border border-border p-6">
              <p className="eyebrow">To get started we'll need</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {whatINeed.map((w) => <li key={w} className="flex gap-2"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />{w}</li>)}
              </ul>
            </div>
            </Reveal>
          </aside>
        </div>
      </Section>

      <section className="border-y border-border bg-surface">
        <Section>
          <SectionTitle
            eyebrow="What happens next"
            title={<>After you send your message, <span className="font-serif italic text-gradient">here is what to expect.</span></>}
            intro={`${site.responseTime}. Every engagement follows the same four steps, whether you are one person with one problem or a team with a roadmap.`}
          />
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s, i) => (
              <li key={s.step}>
                <Reveal delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-border bg-card p-6">
                    <p className="font-mono text-xs text-primary">{s.step} · {s.duration}</p>
                    <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Section>
      </section>

      <Section>
        <SectionTitle
          eyebrow="Before you write"
          title={<>Quick answers to <span className="font-serif italic text-gradient">common questions.</span></>}
          intro="The questions people usually ask before getting in touch. Everything else is on the full FAQ page, or just ask on the call."
        />
        <Reveal>
          <Accordion type="single" collapsible className="max-w-3xl">
            {faqsIn("process").slice(0, 4).map((f, i) => (
              <AccordionItem key={f.question} value={`c${i}`}>
                <AccordionTrigger className="text-left font-display text-lg">{f.question}</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">{f.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
        <p className="mt-8 text-muted-foreground">
          Still unsure? Read the <Link to="/faq" className="text-primary underline-offset-4 hover:underline">full FAQ</Link>, browse the{" "}
          <Link to="/services" className="text-primary underline-offset-4 hover:underline">services</Link>, or see{" "}
          <Link to="/work" className="text-primary underline-offset-4 hover:underline">case study and worked examples</Link>.
        </p>
      </Section>
    </>
  );
}
