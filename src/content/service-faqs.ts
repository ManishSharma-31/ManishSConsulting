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
      question: `What will I get with ${s.name}?`,
      answer: `${s.name} can cover:\n${bullets(s.capabilities.map((c) => c.name))}\nEvery project starts with a written scope, so you know exactly what is included before any work begins.`,
    },
    {
      question: `How long will ${s.name} take?`,
      answer: `${s.typicalTimeline}. You get a firm date in the written scope that follows a free 30-minute discovery call.`,
    },
    {
      question: `What will I have at the end of a ${s.name} project?`,
      answer: `You receive:\n${bullets(s.deliverables)}`,
    },
    {
      question: `Is ${s.name} right for me?`,
      answer: `It is a good fit if you recognise yourself in any of these:\n${bullets(s.idealFor)}`,
    },
    {
      question: `When is ${s.name} not right for me?`,
      answer: `It is usually not right if:\n${bullets(s.notFor)}\nIf that sounds like you, we will say so on the first call and point you to a better option.`,
    },
    {
      question: `Which technologies will be used for ${s.name}?`,
      answer: `Typical tools for this work include ${list(s.stack)}. The aim is the simplest proven option that suits your team, not the newest one.`,
    },
  ];
}
