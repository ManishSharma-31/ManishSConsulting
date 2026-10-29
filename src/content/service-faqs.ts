import type { Service } from "@/content/services";

export type ServiceFaq = { question: string; answer: string };

const bullets = (items: string[]) => items.map((i) => `• ${i}`).join("\n");
const list = (items: string[]) => (items.length > 1 ? `${items.slice(0, -1).join(", ")} and ${items.at(-1)}` : (items[0] ?? ""));

/**
 * Per-service FAQ, assembled only from facts already on the service record, so
 * every answer is supportable and stays in sync with the page. Items keep their
 * original wording (listed as bullets, never re-flowed into sentences). Plain
 * text with newlines: rendered with `whitespace-pre-line` and serialised into
 * FAQPage JSON-LD.
 */
export function serviceFaqs(s: Service): ServiceFaq[] {
  return [
    {
      question: `What does ${s.name} include?`,
      answer: `${s.name} covers:\n${bullets(s.capabilities.map((c) => c.name))}\nEach engagement starts with a written scope, so you know exactly what is included before any work begins.`,
    },
    {
      question: `How long does ${s.name} take?`,
      answer: `${s.typicalTimeline}. The firm date comes from the written scope agreed after a free 30-minute discovery call.`,
    },
    {
      question: `What do I receive at the end of a ${s.name} engagement?`,
      answer: `You receive:\n${bullets(s.deliverables)}`,
    },
    {
      question: `Who is ${s.name} a good fit for?`,
      answer: `It is a good fit if you recognise any of these:\n${bullets(s.idealFor)}`,
    },
    {
      question: `When is ${s.name} not the right fit?`,
      answer: `It is usually not the right fit for:\n${bullets(s.notFor)}\nIf that describes your situation, we will say so on the first call and point you to a better option.`,
    },
    {
      question: `Which technologies do you use for ${s.name}?`,
      answer: `Typical tools for this work include ${list(s.stack)}. We pick the simplest proven option that suits your team, not the newest one.`,
    },
  ];
}
