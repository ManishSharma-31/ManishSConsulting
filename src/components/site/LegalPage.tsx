import { Reveal } from "@/components/fx/motion";
import { PageHero, Section } from "@/components/site/Layout";
import type { LegalDoc } from "@/content/legal";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={doc.title} intro={doc.intro} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[16rem_1fr]">
          <nav aria-label={`${doc.title} contents`} className="hidden lg:block">
            <div className="sticky top-24">
              <p className="eyebrow mb-4">Contents</p>
              <ol className="space-y-2 border-l border-border text-sm">
                {doc.sections.map((s, i) => (
                  <li key={s.heading}>
                    <a
                      href={`#${slugify(s.heading)}`}
                      className="-ml-px block border-l border-transparent py-0.5 pl-4 text-muted-foreground transition hover:border-primary hover:text-foreground"
                    >
                      {i + 1}. {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <div className="max-w-3xl space-y-10">
            <p className="font-mono text-xs text-muted-foreground">Last updated: {doc.updated}</p>

            {doc.summary && (
              <Reveal>
                <aside className="rounded-2xl border border-primary/30 bg-accent p-6">
                  <p className="eyebrow">The short version</p>
                  <ul className="mt-4 space-y-3">
                    {doc.summary.map((line) => (
                      <li key={line} className="flex gap-3 text-sm leading-relaxed">
                        <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </aside>
              </Reveal>
            )}

            {doc.sections.map((s, i) => (
              <Reveal key={s.heading}>
                <section id={slugify(s.heading)} className="scroll-mt-24">
                  <h2 className="font-display text-2xl font-semibold tracking-tight">
                    {i + 1}. {s.heading}
                  </h2>
                  <div className="mt-3 space-y-3 leading-relaxed text-muted-foreground">
                    {s.body.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
