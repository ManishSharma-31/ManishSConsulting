import { createFileRoute } from "@tanstack/react-router";
import { seo, breadcrumbLd } from "@/lib/seo";
import { useState, type FormEvent } from "react";
import { Mail, MessageCircle, MapPin, Clock, Send } from "lucide-react";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { whatINeed } from "@/content/process";
import { PageHero, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo({
      title: "Contact Manish S Consulting | Book a Free 30-Minute Call",
      description:
        "Tell Manish S Consulting about your project. Free 30-minute discovery call for AI, automation, web, cloud and DevOps work. Replies within 24 hours on weekdays.",
      path: "/contact",
      jsonLd: breadcrumbLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]),
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
        intro="A few lines are enough. If we're not the right fit, we'll say so — and point you to someone who is."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
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
              <label className="space-y-2 text-sm">Budget
                <select name="budget" className={field}>
                  <option>Under ₹1L</option><option>₹1–5L</option><option>₹5L+</option><option>Let's discuss</option>
                </select>
              </label>
            </div>
            <label className="block space-y-2 text-sm">Tell us about your project<textarea required name="message" rows={6} className={field} placeholder="Your goals, current setup, timeline and any challenges you are facing." /></label>
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
            <button disabled={status === "sending"} className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition hover:shadow-glow disabled:opacity-60">
              {status === "sending" ? "Sending…" : "Send enquiry"} <Send className="size-4" />
            </button>
            {status === "sent" && <p className="text-sm text-primary">Thanks — your enquiry is in. We'll reply within 24 hours on weekdays.</p>}
            {status === "mailto" && <p className="text-sm text-primary">Your email app should open with the message ready — just hit send.</p>}
            {status === "error" && <p className="text-sm text-destructive">Something went wrong. Please try again or email {site.email} directly.</p>}
          </form>
          <aside className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
              { icon: MessageCircle, label: "WhatsApp", value: "Chat on WhatsApp", href: site.whatsappUrl },
              { icon: MapPin, label: "Based in", value: site.location },
              { icon: Clock, label: "Hours", value: `${site.timezone} · ${site.overlap}` },
            ].map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} {...(href?.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-primary/50">
                <Icon className="mt-0.5 size-5 text-primary" />
                <div><p className="text-xs text-muted-foreground">{label}</p><p className="font-medium">{value}</p></div>
              </a>
            ))}
            <div className="rounded-2xl border border-border p-6">
              <p className="eyebrow">To get started we'll need</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {whatINeed.map((w) => <li key={w} className="flex gap-2"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />{w}</li>)}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
