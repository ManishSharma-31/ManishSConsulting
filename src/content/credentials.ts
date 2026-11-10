/**
 * Headline strip. Each tile is something the visitor gets, stated as a
 * commitment, never as a credential count or an invented client number.
 * A metric like "50+ projects delivered" is the first thing a serious buyer checks.
 */
export const results = [
  {
    value: "Any",
    label: "Size of project",
    detail: "From a one-person site to a company-wide migration",
  },
  {
    value: "1",
    label: "Expert for all six services",
    detail: "No juggling vendors or repeating yourself",
  },
  {
    value: "Fixed",
    label: "Price, agreed up front",
    detail: "If it runs long, the extra cost is not yours",
  },
  {
    value: "24h",
    label: "Reply on weekdays",
    detail: "You deal directly with the person doing the work",
  },
];

/**
 * What the visitor can count on. Each item leads with the benefit to them; the
 * mechanism comes second. Honest about being small, because that is a reason
 * to choose it, not something to hide.
 */
export const differentiators = [
  {
    title: "One expert from start to finish",
    detail:
      "The person you brief is the person who builds and looks after your project. There are no account managers and no hand-offs, so nothing gets lost in translation and nobody else to blame when something breaks.",
  },
  {
    title: "You know the price before you start",
    detail:
      "You get a fixed number in writing before any work begins. If the estimate was wrong, that is our cost to absorb, not yours.",
  },
  {
    title: "It keeps working after launch",
    detail:
      "Hosting, release process, monitoring and support are part of the picture, so you are not left holding something that only worked on launch day.",
  },
  {
    title: "You can walk away at any time",
    detail:
      "Every project ends with documentation, a walkthrough and two weeks of free support. If you come back for more, it should be because you want to, not because you have to.",
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
