/**
 * Headline strip. These are commitments plus one real, measured result — not
 * credential counts or invented client numbers. A metric that says
 * "50+ projects delivered" is the first thing a serious buyer checks.
 */
export const results = [
  {
    value: "90%",
    label: "Faster deployments",
    detail: "Measured on a production CI/CD rebuild",
  },
  {
    value: "6",
    label: "Services, one point of contact",
    detail: "No vendor coordination overhead",
  },
  {
    value: "Fixed",
    label: "Price, agreed up front",
    detail: "If it runs long, that is our problem",
  },
  {
    value: "24h",
    label: "Response on weekdays",
    detail: "You deal with the engineer, not an account manager",
  },
];

/**
 * Why choose a small consultancy. These lean into being lean rather than
 * pretending to be large — the honest version is also the more persuasive one.
 */
export const differentiators = [
  {
    title: "We build it and we run it",
    detail:
      "Plenty of agencies ship code and hand over a repository. We do the infrastructure, the pipeline, and the monitoring too, which means nobody gets to blame the other side when something breaks.",
  },
  {
    title: "You talk to the person doing the work",
    detail:
      "No account managers relaying requirements to a delivery team you never meet. Deliberately small, and it stays that way because it is the reason the work is good.",
  },
  {
    title: "Fixed prices, written scope",
    detail:
      "You get a number before anything starts. If the estimate was wrong, that is ours to absorb — the risk of getting it wrong sits with the people doing the estimating.",
  },
  {
    title: "Handover is part of the job",
    detail:
      "Documentation and a walkthrough at the end of every engagement, plus two weeks of support. If you still need us afterwards, it should be because you want to.",
  },
];

/**
 * PARKED — not rendered anywhere.
 *
 * The Background section was removed from /about because a single internship
 * does not carry weight on a consultancy site. Kept here rather than deleted:
 * the 90% figure in `results` and in the FAQ traces back to this engagement, so
 * it is the record of where that number came from, and it is the raw material
 * for the case study that should eventually replace it.
 */
export const experience = [
  {
    role: "DevOps Engineer",
    company: "SukhPragya Software Pvt. Ltd.",
    type: "Internship",
    period: "2025",
    summary:
      "Owned the delivery pipeline and AWS infrastructure for a production application, taking deployment from a manual process to full automation.",
    achievements: [
      "Built and optimised GitLab CI/CD pipelines for end-to-end application delivery",
      "Managed and scaled AWS infrastructure components under production load",
      "Implemented Terraform automation to standardise infrastructure provisioning",
      "Administered Kubernetes clusters for high availability and fault tolerance",
      "Improved deployment efficiency by 90% through end-to-end automation",
    ],
    stack: ["GitLab CI", "AWS", "Terraform", "Kubernetes", "Docker"],
  },
];

export type Certification = {
  title: string;
  issuer: string;
  /** Public verification link. Buyers do check these — add real URLs. */
  verifyUrl?: string;
};

export const certifications: Certification[] = [
  { title: "Azure AI Engineer Associate (AI-102)", issuer: "Microsoft" },
  { title: "AWS Academy Cloud Foundations", issuer: "Amazon Web Services" },
  { title: "AWS Cloud Quest: Cloud Practitioner", issuer: "Amazon Web Services" },
  { title: "GitHub Foundations", issuer: "GitHub" },
];

export const achievements = [
  {
    title: "Winner, SPHINX Hackathon 2024",
    org: "MNIT Jaipur",
    url: "https://www.linkedin.com/posts/manishsharma31_ai-ml-hackathonwinner-activity-7262096259501481984-uE62",
  },
  {
    title: "Top 5, Smart India Hackathon prelims",
    org: "Government of India",
  },
  {
    title: "Microsoft Learn Student Ambassador",
    org: "Microsoft",
    url: "https://mvp.microsoft.com/en-US/studentambassadors/profile/a245527c-083e-4892-ae81-ae50b8ed2a94",
  },
  {
    title: "Hacktoberfest Super Contributor",
    org: "DigitalOcean",
    url: "https://www.holopin.io/hacktoberfest2025/userbadge/cmgjhm4fj009jl70413zrky20",
  },
];
