/**
 * FAQ doubles as objection handling and as FAQPage structured data.
 * Keep answers plain-text — they are serialised into JSON-LD.
 *
 * Questions are phrased the way a visitor would ask them ("Can you help me
 * with...", "What will I get..."), and answers lead with what it means for
 * them. Grouped into three categories so the list stays scannable. The
 * uncomfortable ones lead deliberately: answering them in public, before a
 * prospect has to work up the nerve to ask, does more for trust than anything
 * else on the site.
 */
export type FaqCategoryId = "firm" | "process" | "terms";

export const faqCategories: { id: FaqCategoryId; label: string; blurb: string }[] = [
  {
    id: "firm",
    label: "Is this right for you?",
    blurb: "Whether we can help with your problem, and who you would be working with.",
  },
  {
    id: "process",
    label: "Working together",
    blurb: "What happens after you get in touch, what it costs, and what we need from you.",
  },
  {
    id: "terms",
    label: "Price, ownership & guarantees",
    blurb: "What you own, what is in writing, and what happens if things change.",
  },
];

export type Faq = { category: FaqCategoryId; question: string; answer: string };

export const faqs: Faq[] = [
  {
    category: "firm",
    question: "Can you help with my IT problem?",
    answer:
      "Very likely. The six service areas cover websites and software, cloud and infrastructure, release pipelines, automation, AI and everyday IT support, and the services page lists the specific work inside each. If your problem does not fit neatly in one of them, bring it to a free 30-minute call. You will hear either that it can be done, or who should do it.",
  },
  {
    category: "firm",
    question: "I'm an individual, not a company. Can I still hire you?",
    answer:
      "Yes. Individuals and freelancers hire us for things like a personal or portfolio site, a setup that will not behave, or advice before buying something. Businesses of every size hire us for projects and ongoing support. The process is the same for everyone: a free call, a written scope and a fixed price.",
  },
  {
    category: "firm",
    question: "Do I need to hire you for everything, or can I pick one service?",
    answer:
      "Pick one. Many clients start with a single service and add others later. The six services are the layers your technology runs on: the application people use, the cloud it is hosted on, the pipeline that releases it, the automation around it, any AI inside it and the support that keeps it healthy. Because one person understands every layer, problems get solved end to end instead of bouncing between vendors.",
  },
  {
    category: "firm",
    question: "Can you work with me if I'm in another country or time zone?",
    answer:
      "Yes, we work with clients anywhere in the world. Work is remote and written by default, so progress does not depend on being online at the same time, and calls are scheduled around your time zone. If you need someone physically on site, a local provider is the better fit, and we are happy to work alongside them on the technical side.",
  },
  {
    category: "firm",
    question: "Who will I actually be dealing with?",
    answer:
      "A senior engineer leads your project from first call to final handover, and trusted specialists join only when your project calls for them. You speak directly to the people doing the work, with no account managers and no hand-offs. The number of active projects is capped, so yours gets focused attention.",
  },
  {
    category: "firm",
    question: "I run an agency. Can you work under my brand?",
    answer:
      "Yes, and it is a good fit. We can work under your name, in your repositories and your client's accounts, with all communication routed through you. White-label documentation and handover materials are included, and we are happy to sign whatever non-solicitation terms you need.",
  },
  {
    category: "firm",
    question: "How are contracts and invoices handled?",
    answer:
      "Every project starts with a clear written agreement covering scope, timeline, price, confidentiality and who owns what. Invoices are raised against agreed milestones, and we are happy to work with your procurement process and vendor onboarding requirements.",
  },
  {
    category: "process",
    question: "What happens after I get in touch?",
    answer:
      "You reply on a free 30-minute call, where you describe the problem and we tell you honestly whether and how we can help. Within two to three days you receive a written proposal covering scope, deliverables, timeline and a fixed price. If you accept, you see progress in visible steps with a short written update every Friday. Every project ends with documentation, a live handover session and two weeks of free support.",
  },
  {
    category: "process",
    question: "I'm not sure what I need. Where do I start?",
    answer:
      "If you already know, start there. If you do not, start with a fixed-price assessment: an AI readiness review, a cloud cost audit, a delivery health check or a general technology review, depending on where it hurts. It is one week and one price, and you get a written report and a roadmap whether or not you hire us for the work it recommends.",
  },
  {
    category: "process",
    question: "How much will it cost?",
    answer:
      "You get a number in writing before any work starts. Assessments and projects are fixed price, agreed after the discovery call once the scope is clear, and if the work runs longer than estimated, the extra cost is ours. Ongoing help is a monthly plan for an agreed number of days. Rates are not published because the same job varies enormously with what already exists, and a number without that context would only be a guess.",
  },
  {
    category: "process",
    question: "What do you need from me to get started?",
    answer:
      "Access to the systems, repositories or cloud accounts involved, one person on your side who can answer questions and make decisions, and about an hour of someone's time in the first week to show how things work today. If access approval takes time where you work, tell us early. It is the most common cause of a slow start.",
  },
  {
    category: "process",
    question: "What if I need to change the scope halfway through?",
    answer:
      "That is normal, and you will not be penalised for it. If something turns out bigger or different than expected, you are told as soon as it is spotted, with an estimate of the effect on timeline and cost. You decide whether to go ahead, defer it or cut something else. Nothing is silently added to your invoice.",
  },
  {
    category: "terms",
    question: "Who owns the code and infrastructure that gets built for me?",
    answer:
      "You do, completely. All code, configuration and documentation becomes yours on final payment, and lives in your repositories and accounts throughout the project. Your client-specific work is never reused elsewhere. Generic patterns and our own open-source tooling remain ours, and the contract says so explicitly so there is no ambiguity later.",
  },
  {
    category: "terms",
    question: "Will you sign an NDA?",
    answer:
      "Yes. We will sign your NDA before you share anything sensitive, and every project runs under a written contract covering scope, payment terms, ownership and confidentiality. If you do not have a template, we can provide one.",
  },
  {
    category: "terms",
    question: "Will I be locked into needing you afterwards?",
    answer:
      "No, and that is deliberate. Handover documentation and a walkthrough are part of every project, not an upsell. If you are on a monthly plan and still need the same number of days a year in, we have built you a dependency instead of a capability, and we will tell you so.",
  },
  {
    category: "terms",
    question: "What if you are not the right fit for my project?",
    answer:
      "You will hear it on the discovery call, not after you have paid. Every service page lists the situations where it is not the right answer, for exactly this reason. Where possible, you will be pointed to someone better suited.",
  },
];

export const faqsIn = (category: FaqCategoryId) =>
  faqs.filter((f) => f.category === category);
