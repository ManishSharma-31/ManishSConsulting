export const processSteps = [
  {
    step: "01",
    title: "You tell us the problem",
    duration: "30 minutes, free",
    detail:
      "Talk through what is going wrong, what you are working with and what you have already tried. If this is not the right fit for you, you hear it on this call, not three weeks into a project.",
  },
  {
    step: "02",
    title: "You get a written plan and price",
    duration: "2-3 days",
    detail:
      "A written proposal setting out your problem as we understand it, what you will receive, the timeline and a fixed price. If the estimate turns out to be wrong, the extra cost is ours, not a change request for you.",
  },
  {
    step: "03",
    title: "You see progress every week",
    duration: "Varies by project",
    detail:
      "Work arrives in visible steps, with a short written update every Friday: what shipped, what is next and what is blocked. No status meetings unless you want them.",
  },
  {
    step: "04",
    title: "You take over, with support",
    duration: "Included, not extra",
    detail:
      "Documentation your team can act on, a live walkthrough, and two weeks of free support afterwards. Ongoing help is available if you want it, and never assumed.",
  },
];

/** What helps the visitor get the best result. Framed as the visitor's part, kept short and concrete. */
export const whatINeed = [
  "Access to the systems, repositories or accounts involved",
  "One person on your side who can answer questions and make decisions",
  "About an hour in week one to show us how things work today",
  "An honest account of what has already been tried, including what failed",
];

/**
 * Situations where the visitor is better served elsewhere. Turning away work
 * that would not help buys more trust than any amount of confident claiming.
 */
export const notRightFor = [
  {
    title: "You need 24/7 on-call cover",
    detail:
      "You are better served by a larger team. Help is available designing a rotation and writing the runbooks it depends on, but the rotation itself needs more people than one expert.",
  },
  {
    title: "You need a large team starting Monday",
    detail:
      "Only a small number of projects run at a time, so each gets proper attention. If you need ten engineers immediately, you need a bigger firm.",
  },
  {
    title: "You want the cheapest possible quote",
    detail:
      "This is not the cheapest option and does not try to be. If price is your deciding factor, plenty of firms will win on it.",
  },
  {
    title: "You want a rubber stamp",
    detail:
      "If the decision is already made and the engagement exists to justify it, you will not get what you are paying for. Findings go where the evidence goes.",
  },
  {
    title: "You need someone on site",
    detail:
      "Work is remote. For hands-on hardware or in-person support at your premises, a local provider is the better fit, and the technical side can be done alongside them.",
  },
];

export const engagementModels = [
  {
    title: "A project with a fixed price",
    fit: "Choose this when you know the outcome you want",
    detail:
      "A defined deliverable at a fixed price, agreed in writing before work starts. You know the total cost on day one, and the risk of a wrong estimate is not yours.",
    examples: ["Web application build", "AI feature delivery", "Cloud migration"],
  },
  {
    title: "A fixed-price assessment",
    fit: "Choose this when you are not sure yet",
    detail:
      "One week, one price, and a written report with a roadmap at the end. Sold on its own, with no obligation to hire anyone for the work it recommends.",
    examples: ["AI readiness review", "Cloud cost audit", "Delivery health check"],
  },
  {
    title: "A monthly plan",
    fit: "Choose this when you need steady help",
    detail:
      "An agreed number of days each month, planned together at the start of it. Rolling monthly, cancel with 30 days' notice. A good plan should need fewer days over time, not more.",
    examples: ["Managed support", "Technical advisory", "Ongoing development"],
  },
];

/** Concrete promises, stated from the client's side. Vague reassurance converts nobody. */
export const guarantees = [
  {
    title: "A fixed price stays fixed",
    detail:
      "If the work takes longer than estimated, you pay what was agreed. Any changes you ask for are quoted separately and never added silently.",
  },
  {
    title: "You own everything",
    detail:
      "The code, configuration and documentation become yours on final payment, and live in your accounts throughout. It is written into the contract.",
  },
  {
    title: "You get two weeks of free support",
    detail:
      "After handover, questions and fixes on what was built are free for two weeks. It is part of finishing the job, not a support package.",
  },
];
