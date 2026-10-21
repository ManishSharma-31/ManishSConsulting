export type Project = {
  slug: string;
  title: string;
  client: string;
  /** Industry + company size, so a prospect can see themselves in it. */
  clientContext: string;
  year: string;
  /** Which service this engagement maps to — links the case study back to the offer. */
  serviceSlug: string;
  /** One-line result. This is what gets read; everything else is supporting evidence. */
  headline: string;
  summary: string;
  tags: string[];
  /** Headline numbers shown as a strip on the case study page. */
  metrics: { value: string; label: string }[];
  /** Long-form case study body. */
  challenge: string;
  approach: { title: string; detail: string }[];
  results: string[];
  /** Placeholder flag — every card renders a "Demo" badge while this is true. */
  isPlaceholder: boolean;
};

/**
 * DEMO CONTENT.
 *
 * These are structural placeholders so the case-study layout, routing, and SEO
 * are finished and testable. Replace each entry with a real engagement and flip
 * `isPlaceholder` to false — the "Demo" badges and the site-wide notice disappear
 * automatically once no placeholders remain.
 */
export const projects: Project[] = [
  {
    slug: "gitlab-pipeline-rebuild",
    title: "Cutting deploy time from hours to minutes",
    client: "Confidential client",
    clientContext: "B2B SaaS, ~25 engineers",
    year: "2025",
    serviceSlug: "devops",
    headline: "90% reduction in deployment time across four services",
    summary:
      "Replaced a manual, checklist-driven release process with an automated GitLab CI pipeline covering build, test, and staged deployment.",
    tags: ["GitLab CI", "Docker", "Kubernetes", "AWS"],
    metrics: [
      { value: "90%", label: "Faster deployments" },
      { value: "4", label: "Services migrated" },
      { value: "0", label: "Rollbacks needed post-launch" },
    ],
    challenge:
      "Releases were a documented but manual sequence of roughly twenty steps, executed by one engineer. Deploys were batched weekly because each one consumed most of an afternoon, and the batching made every release riskier than the last.",
    approach: [
      {
        title: "Mapped the real process",
        detail:
          "Shadowed a full release and recorded every step, including the ones missing from the runbook. Several turned out to be workarounds for problems that had already been fixed.",
      },
      {
        title: "Containerised the build",
        detail:
          "Standardised builds into Docker images so CI produced byte-identical artefacts to local development, eliminating an entire class of environment bugs.",
      },
      {
        title: "Staged the pipeline",
        detail:
          "Built out build, test, and scan stages first, then automated deployment to staging, and only then production behind a manual approval gate.",
      },
      {
        title: "Added the safety net",
        detail:
          "Wired health checks into the deploy stage with automated rollback on failure, plus alerting routed to the on-call channel.",
      },
    ],
    results: [
      "Deployment time fell from roughly three hours of engineer attention to under fifteen minutes of pipeline runtime.",
      "The team moved from weekly batched releases to deploying on merge.",
      "Release knowledge stopped being held by one person.",
    ],
    isPlaceholder: true,
  },
  {
    slug: "terraform-migration",
    title: "Bringing hand-built AWS infrastructure under Terraform",
    client: "Confidential client",
    clientContext: "Series A fintech, ~15 engineers",
    year: "2025",
    serviceSlug: "cloud",
    headline: "Full production environment reproducible from code, with no downtime during migration",
    summary:
      "Imported an entirely console-built AWS estate into Terraform, refactored it into reusable modules, and wired plan/apply into CI.",
    tags: ["Terraform", "AWS", "IaC", "GitHub Actions"],
    metrics: [
      { value: "0", label: "Minutes of downtime" },
      { value: "3", label: "Environments from one module set" },
      { value: "31%", label: "Monthly cloud spend reduced" },
    ],
    challenge:
      "Production had been built by hand over two years by engineers who had since left. Nobody could describe the full resource inventory, staging had drifted significantly from production, and standing up a new environment was quoted internally at two weeks.",
    approach: [
      {
        title: "Inventoried what actually existed",
        detail:
          "Audited the live account against the team's mental model. Found unattached volumes, oversized instances, and two security groups open wider than intended.",
      },
      {
        title: "Imported rather than rebuilt",
        detail:
          "Brought existing resources into Terraform state with import blocks, so the migration never required tearing anything down.",
      },
      {
        title: "Refactored into modules",
        detail:
          "Extracted networking, compute, and IAM into parameterised modules so environments differ by a variables file rather than by history.",
      },
      {
        title: "Moved changes into review",
        detail:
          "Wired terraform plan into pull requests and apply into the protected branch, making infrastructure changes reviewable like any other code.",
      },
    ],
    results: [
      "A new fully configured environment now takes under thirty minutes instead of two weeks.",
      "Configuration drift between staging and production was eliminated and is now caught by CI.",
      "Right-sizing and cleanup identified during the audit cut monthly spend by just under a third.",
    ],
    isPlaceholder: true,
  },
  {
    slug: "go-service-build",
    title: "A Go service built to be operated from day one",
    client: "Confidential client",
    clientContext: "Logistics platform, ~40 engineers",
    year: "2025",
    serviceSlug: "web-development",
    headline: "Delivered a production API with observability, tests, and its deployment pipeline included",
    summary:
      "Designed and built a Go HTTP service handling third-party integrations, shipped complete with monitoring, runbook, and CI/CD.",
    tags: ["Go", "MongoDB", "Docker", "Prometheus"],
    metrics: [
      { value: "p99 < 120ms", label: "Response time at launch" },
      { value: "87%", label: "Test coverage on critical paths" },
      { value: "1 day", label: "Team onboarding to full ownership" },
    ],
    challenge:
      "The team needed an integration service quickly but had been burned before by contract work that arrived as a bare repository — no deployment story, no observability, and no way for the in-house team to operate it without a rewrite.",
    approach: [
      {
        title: "Contract first",
        detail:
          "Agreed the API surface and error semantics up front so the client's frontend team could build against a stub while the service was implemented.",
      },
      {
        title: "Operations built in, not bolted on",
        detail:
          "Structured logging, Prometheus metrics, health and readiness endpoints, and graceful shutdown were part of the first working version rather than a later milestone.",
      },
      {
        title: "Tested the failure paths",
        detail:
          "Focused test effort on timeout, retry, and partial-failure behaviour against the third-party APIs, which is where integration services actually break.",
      },
      {
        title: "Shipped it, not just wrote it",
        detail:
          "Delivered the containerised build and the pipeline that deploys it, so handover was a walkthrough rather than a migration.",
      },
    ],
    results: [
      "The service went to production in the same engagement it was built in.",
      "The client's team took full ownership after a single handover session.",
      "Dashboards and alerts were live before the first real traffic arrived.",
    ],
    isPlaceholder: true,
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

/** True while any case study is still demo content — drives the site-wide honesty notice. */
export const hasPlaceholderProjects = projects.some((p) => p.isPlaceholder);
