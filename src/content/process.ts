export const processSteps = [
  {
    step: "01",
    title: "Discovery call",
    duration: "30 minutes, free",
    detail:
      "We talk through the problem, the constraints, and what you have already tried. If we are not the right fit for it, we will say so on this call rather than three weeks into a project.",
  },
  {
    step: "02",
    title: "Scope and proposal",
    duration: "2-3 days",
    detail:
      "A written proposal: the problem as we understand it, what gets delivered, the timeline, and a fixed price. If the estimate turns out to be wrong, that is ours to absorb, not a change request.",
  },
  {
    step: "03",
    title: "Delivery",
    duration: "Varies by project",
    detail:
      "Work lands in visible increments with a short written update every Friday — what shipped, what is next, what is blocked. No status meetings unless you want them.",
  },
  {
    step: "04",
    title: "Handover and support",
    duration: "Included, not extra",
    detail:
      "Documentation your team can act on, a live walkthrough, and two weeks of support afterwards at no cost. Ongoing maintenance is available but never assumed.",
  },
];

/** Reciprocity — naming what we need makes this read as a working relationship. */
export const whatINeed = [
  "Access to the systems, repositories, or accounts involved",
  "One named person who can answer questions and make decisions",
  "About an hour in week one to walk us through how things work today",
  "An honest account of what has already been tried, including what failed",
];

/**
 * The anti-pitch. Turning away work we are wrong for buys more trust than any
 * amount of confident claiming, and keeps the enquiry inbox clean.
 */
export const notRightFor = [
  {
    title: "You need 24/7 on-call cover",
    detail:
      "This is a deliberately lean consultancy. We can design a rotation and write the runbooks it depends on, but we cannot be the rotation.",
  },
  {
    title: "You need a large team starting Monday",
    detail:
      "We take on a small number of projects at a time so each one gets proper attention. If you need ten engineers immediately, you need a bigger firm.",
  },
  {
    title: "You want the cheapest possible quote",
    detail:
      "We are not the cheapest option and do not try to be. If price is the deciding factor, there are plenty of firms that will win on it.",
  },
  {
    title: "You want a rubber stamp",
    detail:
      "If the decision is already made and the engagement exists to justify it, we will be an expensive irritation. Our findings go where the evidence goes.",
  },
  {
    title: "You need someone on site",
    detail:
      "We work remotely. For hands-on hardware or in-person support at your premises, a local provider is the better fit, and we are happy to work alongside them on the technical side.",
  },
];

export const engagementModels = [
  {
    title: "Fixed-scope project",
    fit: "Best when the outcome is clear",
    detail:
      "A defined deliverable at a fixed price, agreed in writing before work starts. You know the total cost on day one and we carry the estimation risk.",
    examples: ["Web application build", "AI feature delivery", "Cloud migration"],
  },
  {
    title: "Fixed-price assessment",
    fit: "Best when you are not sure yet",
    detail:
      "One week, one price, a written report and a roadmap at the end. Sold on its own with no obligation to hire us for the work it recommends.",
    examples: ["AI readiness review", "Cloud cost audit", "Delivery health check"],
  },
  {
    title: "Monthly retainer",
    fit: "Best for continuing capacity",
    detail:
      "An agreed number of days each month, planned together at the start of it. Rolling monthly, cancel with 30 days' notice. A good retainer should need fewer days over time, not more.",
    examples: ["Managed support", "Technical advisory", "Ongoing development"],
  },
];

/** Concrete promises, stated as promises. Vague reassurance converts nobody. */
export const guarantees = [
  {
    title: "Fixed price means fixed price",
    detail:
      "If the work takes longer than estimated, you pay what was agreed. Scope changes you ask for are quoted separately and never applied silently.",
  },
  {
    title: "You own everything",
    detail:
      "Code, configuration, and documentation transfer to you on final payment and live in your accounts throughout. Written into the contract.",
  },
  {
    title: "Two weeks of support, included",
    detail:
      "After handover, questions and fixes on what we built are free for two weeks. It is part of finishing the job, not a support package.",
  },
];
