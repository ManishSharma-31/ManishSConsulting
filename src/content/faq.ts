/**
 * FAQ doubles as objection handling and as FAQPage structured data.
 * Keep answers plain-text — they are serialised into JSON-LD.
 *
 * Grouped into three categories so fourteen questions stay scannable. The two
 * uncomfortable ones lead deliberately: answering them in public, before a
 * prospect has to work up the nerve to ask, does more for trust than anything
 * else on the site.
 */
export type FaqCategoryId = "firm" | "process" | "terms";

export const faqCategories: { id: FaqCategoryId; label: string; blurb: string }[] = [
  {
    id: "firm",
    label: "About the firm",
    blurb: "Who you would be working with, and how we are set up.",
  },
  {
    id: "process",
    label: "How we work",
    blurb: "What an engagement looks like, what it costs, and what we need from you.",
  },
  {
    id: "terms",
    label: "Terms & commitments",
    blurb: "Ownership, contracts, and what happens when things change.",
  },
];

export type Faq = { category: FaqCategoryId; question: string; answer: string };

export const faqs: Faq[] = [
  {
    category: "firm",
    question: "Who will we actually be working with?",
    answer:
      "A senior engineer leads every engagement from first call to final handover, and vetted specialists join when a project calls for them. You speak directly with the people doing the work — no account managers, no hand-offs — and we cap the number of active projects so every client gets focused attention.",
  },
  {
    category: "firm",
    question: "How do six services fit together?",
    answer:
      "They are not six unrelated disciplines — they are the stack that one product runs on. Cloud, DevOps, and infrastructure are where the deepest experience sits, with a measured result behind it: a production CI/CD rebuild that cut deployment time by 90%. Web, AI, and automation are built on the same engineering foundation. Because one partner understands the whole stack, problems get solved end to end instead of bouncing between vendors.",
  },
  {
    category: "firm",
    question: "How are contracts and invoicing handled?",
    answer:
      "Every engagement starts with a clear written agreement covering scope, timeline, price, confidentiality and IP ownership. Invoices are issued against agreed milestones, and we are happy to work with your procurement process and vendor onboarding requirements.",
  },
  {
    category: "firm",
    question: "Do you work with clients outside India?",
    answer:
      "Yes, most work is remote. We are based in Pune on IST (UTC+5:30), which gives four or more hours of overlap with European teams and three or more with US East Coast teams. We work in writing by default so progress does not depend on being online at the same time, and keep a fixed window of later hours free for calls.",
  },
  {
    category: "firm",
    question: "Do you work as a subcontractor for agencies?",
    answer:
      "Yes, and it is a good fit. We can work under your name, in your repositories and your client's accounts, with all communication routed through you. White-label documentation and handover materials are included, and we are happy to sign whatever non-solicitation terms you need.",
  },
  {
    category: "process",
    question: "What does a typical engagement look like?",
    answer:
      "A free 30-minute discovery call, then a written proposal within two to three days covering scope, deliverables, timeline, and price. If you accept, work happens in visible increments with a short written update every Friday. Every engagement ends with documentation, a live handover session, and two weeks of support at no extra cost.",
  },
  {
    category: "process",
    question: "Which service should we start with?",
    answer:
      "If you already know what you need, start there. If you do not, start with a fixed-price assessment — an AI readiness review, a cloud cost audit, or a delivery health check depending on where the pain is. It is one week, one price, and you get a written report and a roadmap whether or not you hire us for the work it recommends.",
  },
  {
    category: "process",
    question: "How do you price your work?",
    answer:
      "Assessments are fixed price and quoted up front. Project work is fixed price too, agreed in writing after the discovery call once the scope is understood — if it runs longer than estimated, that is ours to absorb rather than an addition to your invoice. Ongoing work is a monthly retainer for an agreed number of days. We do not publish rates because the same job varies enormously with what already exists, and a number without that context would be a guess.",
  },
  {
    category: "process",
    question: "What do you need from us to start?",
    answer:
      "Access to the systems, repositories, or cloud accounts involved, one named person who can answer questions and make decisions, and about an hour of someone's time in the first week to walk us through how things work today. If access approval takes time at your organisation, tell us early — it is the most common cause of a slow start.",
  },
  {
    category: "process",
    question: "What if the scope changes mid-project?",
    answer:
      "Scope changes are normal; hiding them is not. If something turns out to be bigger or different than expected, we flag it as soon as we see it with an estimate of the impact on timeline and cost. You decide whether to proceed, defer it, or cut something else. Nothing gets silently added to your invoice.",
  },
  {
    category: "terms",
    question: "Who owns the code and infrastructure you build?",
    answer:
      "You do, completely. All code, configuration, and documentation transfers to you on final payment, and lives in your repositories and accounts throughout the engagement. We do not retain rights to client work and do not reuse client-specific code elsewhere. Generic patterns and our own open-source tooling remain ours, stated explicitly in the contract so there is no ambiguity later.",
  },
  {
    category: "terms",
    question: "Do you sign NDAs and contracts?",
    answer:
      "Yes to both. We will sign your NDA before discussing anything sensitive, and every engagement runs under a written contract covering scope, payment terms, IP ownership, and confidentiality. If you do not have a template, we can provide one.",
  },
  {
    category: "terms",
    question: "Will we be locked into needing you afterwards?",
    answer:
      "No, and that is deliberate. Handover documentation and a walkthrough are part of every engagement, not an upsell. If you are on a retainer and still need the same number of days from us a year in, we have built a dependency rather than a capability.",
  },
  {
    category: "terms",
    question: "What if you are not the right fit?",
    answer:
      "We will tell you on the discovery call, and we have turned down work before. Every service page on this site has a section about what we do not do, for exactly this reason. Where we can, we will point you toward someone better suited.",
  },
];

export const faqsIn = (category: FaqCategoryId) =>
  faqs.filter((f) => f.category === category);
