import { PageHero, Section } from "@/components/site/Layout";
import type { LegalDoc } from "@/content/legal";

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={doc.title} intro={doc.intro} />
      <Section>
        <div className="mx-auto max-w-3xl space-y-10">
          <p className="font-mono text-xs text-muted-foreground">Last updated: {doc.updated}</p>
          {doc.sections.map((s, i) => (
            <section key={s.heading}>
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                {i + 1}. {s.heading}
              </h2>
              <div className="mt-3 space-y-3 text-muted-foreground">
                {s.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
