import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowUpRight, Menu, X, Github, Linkedin, /* Twitter, */ Mail } from "lucide-react";
import { navItems, site } from "@/content/site";
import { services } from "@/content/services";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="glass fixed inset-x-0 top-0 z-50 border-b border-border">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src="/logo-128.png" alt="Manish S Consulting logo" width={44} height={44} className="size-11 rounded-lg object-cover" />
          <span className="font-display text-xl font-semibold tracking-tight md:text-2xl">
            Manish S<span className="text-muted-foreground"> Consulting</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems
            .filter((n) => n.href !== "/blog")
            .map((n) => (
              <Link
                key={n.href}
                to={n.href}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground bg-secondary" }}
              >
                {n.name}
              </Link>
            ))}
        </nav>
        <Link
          to="/contact"
          className="hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:shadow-glow md:inline-flex"
        >
          Book a call <ArrowUpRight className="size-4" />
        </Link>
        <button className="md:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-5 py-4 md:hidden">
          {navItems
            .filter((n) => n.href !== "/blog")
            .map((n) => (
              <Link key={n.href} to={n.href} onClick={() => setOpen(false)} className="py-2 text-lg">
                {n.name}
              </Link>
            ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <p className="font-display text-3xl font-semibold leading-tight">
            Build it properly.
            <br />
            <span className="font-serif italic text-gradient">Run it calmly.</span>
          </p>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">{site.description}</p>
          <div className="mt-6 flex gap-3">
            {[
              { href: site.socials.github, icon: Github, label: "GitHub" },
              { href: site.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
              // { href: site.socials.x, icon: Twitter, label: "X" },
              { href: `mailto:${site.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-primary hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow mb-4">Services</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-foreground">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Contact</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href={`mailto:${site.email}`} className="hover:text-foreground">{site.email}</a></li>
            <li><a href={site.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-foreground">Chat on WhatsApp</a></li>
            <li>{site.location}</li>
            <li>{site.timezone}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-5 py-6 text-xs text-muted-foreground md:flex-row md:px-8">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <nav className="flex gap-5">
            <Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-foreground">Cookie Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28 ${className}`}>{children}</section>;
}

export function SectionTitle({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: string }) {
  return (
    <div className="mb-14 max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">{title}</h2>
      {intro && <p className="mt-5 text-lg text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, intro, image }: { eyebrow: string; title: ReactNode; intro: string; image?: string | undefined }) {
  return (
    <section className="relative overflow-hidden border-b border-border pt-32 pb-20 md:pt-40 md:pb-28">
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 size-full object-cover opacity-30" />
          <div className="bg-fade absolute inset-0" />
        </>
      )}
      <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <p className="eyebrow animate-rise">{eyebrow}</p>
        <h1 className="animate-rise mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
          {title}
        </h1>
        <p className="animate-rise mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">{intro}</p>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-10 md:p-16">
        <div className="absolute -right-24 -top-24 size-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 size-80 rounded-full bg-amber/15 blur-3xl" />
        <div className="relative grid items-end gap-8 md:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="eyebrow">Free discovery call</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Got a problem that keeps <span className="font-serif italic text-gradient">sliding to next sprint?</span>
            </h2>
            <p className="mt-5 max-w-xl text-muted-foreground">
              A free 30-minute call. Tell us what you're working on and we'll outline the best approach, a realistic timeline and an estimated budget.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground transition hover:shadow-glow"
            >
              Start a conversation <ArrowUpRight className="size-5" />
            </Link>
            <span className="text-sm text-muted-foreground">{site.responseTime}</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
