/**
 * Three kinds of entry, labelled honestly everywhere they appear:
 *
 * - "project": a product built and deployed by Manish Sharma, described only with
 *   facts from its own documentation. No client, user count or result is claimed.
 * - "case-study": real work, described only with facts that are on record. Figures
 *   here are the ones that were actually measured.
 * - "worked-example": a representative scenario showing how we approach a kind of
 *   work. It describes no real client, and its headline strip lists properties of
 *   the approach, never results. Replace it with a real case study when one exists.
 */
export type ProjectKind = "project" | "case-study" | "worked-example";

export type Project = {
  slug: string;
  title: string;
  kind: ProjectKind;
  /** Where the work happened (case study) or the situation it is set in (worked example). */
  clientContext: string;
  /** Four-digit year for a case study, or a short label such as "Example". */
  year: string;
  /** Which service this entry maps to, linking it back to the offer. */
  serviceSlug: string;
  /** One-line summary. This is what gets read; everything else is supporting evidence. */
  headline: string;
  summary: string;
  tags: string[];
  /** Headline strip: measured results for a case study, properties of the approach for a worked example. */
  metrics: { value: string; label: string }[];
  challenge: string;
  approach: { title: string; detail: string }[];
  /** Outcomes achieved (case study), what the product does (project) or what the team ends up with (worked example). */
  results: string[];
  /** Public URL of the running product, when there is one. */
  liveUrl?: string;
};

export const kindLabel = (p: Project) => (p.kind === "project" ? "Project" : p.kind === "case-study" ? "Case study" : "Worked example");

export const projects: Project[] = [
  {
    slug: "leadstock-crm",
    title: "LeadStock CRM: multi-tenant sales for IT hardware resellers",
    kind: "project",
    clientContext: "A SaaS product designed, built and deployed by Manish Sharma",
    year: "Live product",
    serviceSlug: "web-development",
    headline: "Leads, GST-ready quotations with live margin, follow-ups and orders in one platform, with tenant isolation enforced in the database.",
    summary:
      "A multi-tenant CRM and quotation platform for IT hardware resellers. Each organisation runs its own role hierarchy, and Postgres Row Level Security keeps every tenant's data separate.",
    tags: ["React 19", "TanStack Start", "TypeScript", "Supabase", "Postgres RLS", "Tailwind CSS"],
    metrics: [
      { value: "4 roles", label: "Owner, Admin, Manager and Salesperson in every organisation" },
      { value: "7 modules", label: "Leads, customers, products, quotations, follow-ups, orders, reports" },
      { value: "RLS", label: "Tenant isolation enforced in Postgres, not just the interface" },
    ],
    challenge:
      "IT hardware sales teams juggle leads, follow-ups, GST-compliant quotations with margin maths, and delivery and invoicing. The goal was a single platform that covers that whole pipeline and is built as a SaaS from day one: many separate organisations on one system, each seeing only its own data.",
    approach: [
      {
        title: "Multi-tenant from day one",
        detail:
          "A Platform Admin layer manages organisations, seats and subscriptions, while each organisation runs its own Owner, Admin, Manager and Salesperson hierarchy. Signup is invite-only, so organisations stay closed.",
      },
      {
        title: "Security at the database layer",
        detail:
          "Every table is protected by Row Level Security policies keyed on the organisation and the user's role. Tenant isolation is enforced by Postgres itself, so a mistake in the interface cannot leak another organisation's data.",
      },
      {
        title: "Typed, role-guarded application",
        detail:
          "TanStack Start renders on the server, TanStack Router guards routes by role, and TanStack Query caches and prefetches data through a typed API layer over Supabase, with React Hook Form and Zod validating input.",
      },
      {
        title: "The whole sales workflow",
        detail:
          "A lead is captured, followed up, turned into a quotation with GST and live margin and profit calculation, converted into an order when accepted, and then tracked through delivery and invoicing.",
      },
    ],
    results: [
      "Leads, customers, products, quotations, follow-ups, orders and reports in one platform.",
      "GST-compliant quotations with live margin and profit calculation.",
      "Isolated, invite-only organisations with four roles each, enforced end to end.",
      "A working deployment on Vercel that you can try, with demo accounts for each role.",
    ],
    liveUrl: "https://lead-stock-pro.vercel.app",
  },
  {
    slug: "gitlab-pipeline-rebuild",
    title: "Automating a production deployment pipeline end to end",
    kind: "case-study",
    clientContext: "Production application at a software company, delivered in a previous role",
    year: "2025",
    serviceSlug: "devops",
    headline: "Deployment efficiency improved by 90% by replacing a manual release process with GitLab CI/CD and Terraform.",
    summary:
      "Took the delivery pipeline and AWS infrastructure of a production application from a manual deployment process to full automation, using GitLab CI/CD, Terraform and Kubernetes.",
    tags: ["GitLab CI", "Docker", "Kubernetes", "AWS", "Terraform"],
    metrics: [
      { value: "90%", label: "Improvement in deployment efficiency" },
      { value: "End to end", label: "Build, test and deploy automated" },
      { value: "Code-defined", label: "Infrastructure provisioned with Terraform" },
    ],
    challenge:
      "Deployment was a manual process. The application ran in production on AWS, so the aim was to automate delivery end to end without putting reliability at risk.",
    approach: [
      {
        title: "Built the delivery pipeline",
        detail:
          "Created and tuned GitLab CI/CD pipelines that carry the application from commit through to deployment, so a release is a pipeline run instead of a manual sequence.",
      },
      {
        title: "Standardised the infrastructure",
        detail:
          "Used Terraform to standardise how infrastructure is provisioned, so it is defined in code that can be reviewed and reproduced.",
      },
      {
        title: "Kept it available under load",
        detail:
          "Managed and scaled the AWS components the application relied on, and administered the Kubernetes clusters for high availability and fault tolerance.",
      },
      {
        title: "Measured the difference",
        detail:
          "Deployment efficiency improved by 90% through end-to-end automation. That is the figure recorded for this work and the only one claimed on this page.",
      },
    ],
    results: [
      "Deployment efficiency improved by 90% through end-to-end automation.",
      "Deployment moved from a manual process to full automation.",
      "Infrastructure provisioning was standardised with Terraform.",
    ],
  },
  {
    slug: "terraform-migration",
    title: "Bringing hand-built cloud infrastructure under Terraform",
    kind: "worked-example",
    clientContext: "Scenario: a team running production on infrastructure built by hand",
    year: "Example",
    serviceSlug: "cloud",
    headline: "How a console-built AWS estate is moved into Terraform without taking anything down.",
    summary:
      "A representative walk-through of importing an existing AWS estate into Terraform, refactoring it into reusable modules and putting infrastructure changes through code review.",
    tags: ["Terraform", "AWS", "Infrastructure as code", "GitHub Actions"],
    metrics: [
      { value: "Import", label: "Existing resources adopted, not rebuilt" },
      { value: "Reviewable", label: "Every change goes through a pull request" },
      { value: "Repeatable", label: "A new environment comes from code" },
    ],
    challenge:
      "Imagine production built click by click over a couple of years by people who have since moved on. Nobody can list everything that exists, staging has drifted away from production, and creating a new environment is a project in itself. That situation is common, and it is exactly what infrastructure as code is meant to fix.",
    approach: [
      {
        title: "Inventory what actually exists",
        detail:
          "Audit the live account against the team's mental model. Typical findings include unattached storage, oversized instances and network rules open wider than intended.",
      },
      {
        title: "Import rather than rebuild",
        detail:
          "Bring existing resources into Terraform state with import blocks, so the migration never needs anything torn down and production keeps running throughout.",
      },
      {
        title: "Refactor into modules",
        detail:
          "Extract networking, compute and access control into parameterised modules, so environments differ by a variables file rather than by history.",
      },
      {
        title: "Move changes into review",
        detail:
          "Run terraform plan on every pull request and apply from the protected branch, making infrastructure changes reviewable like any other code.",
      },
    ],
    results: [
      "A new, fully configured environment becomes a repeatable command rather than a project.",
      "Drift between staging and production stops accumulating, and CI flags it when it appears.",
      "Cleanup found during the audit usually reduces cloud spend, and the audit shows how much.",
    ],
  },
  {
    slug: "go-service-build",
    title: "A Go service built to be operated from day one",
    kind: "worked-example",
    clientContext: "Scenario: a team that needs an integration service its own engineers can run",
    year: "Example",
    serviceSlug: "web-development",
    headline: "How a backend integration service is delivered with monitoring, tests and its deployment pipeline included.",
    summary:
      "A representative walk-through of building a Go HTTP service that talks to third-party APIs, shipped with observability, failure-path tests, a runbook and CI/CD.",
    tags: ["Go", "MongoDB", "Docker", "Prometheus"],
    metrics: [
      { value: "Day-one ops", label: "Logging, metrics and health checks from the first version" },
      { value: "Failure paths", label: "Timeouts, retries and partial failures tested first" },
      { value: "Handover", label: "Pipeline and runbook delivered with the code" },
    ],
    challenge:
      "Picture a team that needs an integration service quickly and has been burned before by contract work that arrived as a bare repository: no deployment story, no monitoring, and no way for the in-house team to run it without a rewrite.",
    approach: [
      {
        title: "Contract first",
        detail:
          "Agree the API surface and error behaviour up front, so the frontend team can build against a stub while the service is implemented.",
      },
      {
        title: "Operations built in, not bolted on",
        detail:
          "Structured logging, Prometheus metrics, health and readiness endpoints and graceful shutdown are part of the first working version, not a later milestone.",
      },
      {
        title: "Test the failure paths",
        detail:
          "Concentrate test effort on timeouts, retries and partial failures against the third-party APIs, which is where integration services actually break.",
      },
      {
        title: "Ship it, not just write it",
        detail:
          "Deliver the containerised build and the pipeline that deploys it, so handover is a walkthrough rather than a migration.",
      },
    ],
    results: [
      "The service reaches production in the same engagement it is built in.",
      "The in-house team can own it after a single handover session.",
      "Dashboards and alerts exist before the first real traffic arrives.",
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const isWorkedExample = (p: Project) => p.kind === "worked-example";

/** True while any entry is a worked example rather than real work, which drives the honesty notice. */
export const hasWorkedExamples = projects.some(isWorkedExample);
