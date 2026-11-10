/**
 * Copy is framed from the visitor's side (the problem they recognise and what
 * they end up with), but the facts never change: nothing here claims a client,
 * user count or result beyond what is on record.
 *
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
    clientContext: "For IT hardware resellers: a live product to try",
    year: "Live product",
    serviceSlug: "web-development",
    headline: "Run leads, GST-ready quotations with live margin, follow-ups and orders in one place, with every organisation's data kept separate.",
    summary:
      "If you sell IT hardware, this is what one platform for the whole sales pipeline looks like: leads, quotations, follow-ups and orders, with each organisation seeing only its own data. It is a live product you can try.",
    tags: ["React 19", "TanStack Start", "TypeScript", "Supabase", "Postgres RLS", "Tailwind CSS"],
    metrics: [
      { value: "4 roles", label: "Owner, Admin, Manager and Salesperson in every organisation" },
      { value: "7 modules", label: "Leads, customers, products, quotations, follow-ups, orders, reports" },
      { value: "RLS", label: "Tenant isolation enforced in Postgres, not just the interface" },
    ],
    challenge:
      "If you sell IT hardware, you juggle leads, follow-ups, GST-compliant quotations with margin maths, and then delivery and invoicing. You need one place for that whole pipeline, and if you serve several organisations, each must see only its own data.",
    approach: [
      {
        title: "Every organisation stays separate",
        detail:
          "A Platform Admin layer manages organisations, seats and subscriptions, while each organisation runs its own Owner, Admin, Manager and Salesperson roles. Signup is invite-only, so only the people you invite get in.",
      },
      {
        title: "Your data is protected where it is stored",
        detail:
          "Every table is protected by Row Level Security policies keyed on the organisation and the user's role. Postgres itself enforces the separation, so a mistake in the interface cannot leak another organisation's data.",
      },
      {
        title: "Each person sees what their role allows",
        detail:
          "Pages are guarded by role, data loads quickly through a typed API layer over Supabase, and forms are validated before anything is saved. Built with TanStack Start, TanStack Router and Query, React Hook Form and Zod.",
      },
      {
        title: "The whole sales workflow in one place",
        detail:
          "A lead is captured, followed up, turned into a quotation with GST and live margin and profit shown, converted into an order when accepted, and then tracked through delivery and invoicing.",
      },
    ],
    results: [
      "You manage leads, customers, products, quotations, follow-ups, orders and reports in one platform.",
      "You see GST-compliant quotations with live margin and profit as you build them.",
      "Your organisation is isolated and invite-only, with four roles and the separation enforced end to end.",
      "You can try a working deployment on Vercel, with demo accounts for each role.",
    ],
    liveUrl: "https://lead-stock-pro.vercel.app",
  },
  {
    slug: "gitlab-pipeline-rebuild",
    title: "Automating a production deployment pipeline end to end",
    kind: "case-study",
    clientContext: "For a software company running production on AWS",
    year: "2025",
    serviceSlug: "devops",
    headline: "Releases went from a manual routine to fully automated, improving deployment efficiency by 90%.",
    summary:
      "If shipping a release means following a manual routine, this is what changes. A production application on AWS moved from manual deployment to full automation with GitLab CI/CD, Terraform and Kubernetes.",
    tags: ["GitLab CI", "Docker", "Kubernetes", "AWS", "Terraform"],
    metrics: [
      { value: "90%", label: "Improvement in deployment efficiency" },
      { value: "End to end", label: "Build, test and deploy automated" },
      { value: "Code-defined", label: "Infrastructure provisioned with Terraform" },
    ],
    challenge:
      "Every release was a manual process. That is slow and risky, and it makes shipping a chore people put off. The application ran in production on AWS, so the goal was to automate delivery end to end without putting reliability at risk.",
    approach: [
      {
        title: "A release became a pipeline run",
        detail:
          "GitLab CI/CD pipelines now carry the application from commit through to deployment, so releasing means running a pipeline instead of following a manual sequence.",
      },
      {
        title: "Infrastructure became repeatable",
        detail:
          "Terraform standardised how infrastructure is provisioned, so it is defined in code that can be reviewed and reproduced.",
      },
      {
        title: "It stayed available under load",
        detail:
          "The AWS components the application relied on were managed and scaled, and the Kubernetes clusters were administered for high availability and fault tolerance.",
      },
      {
        title: "The difference was measured",
        detail:
          "Deployment efficiency improved by 90% through end-to-end automation. That is the figure recorded for this work and the only one claimed on this page.",
      },
    ],
    results: [
      "Deployment efficiency improved by 90% through end-to-end automation.",
      "Releases moved from a manual process to full automation.",
      "Infrastructure provisioning was standardised with Terraform.",
    ],
  },
  {
    slug: "terraform-migration",
    title: "Bringing hand-built cloud infrastructure under Terraform",
    kind: "worked-example",
    clientContext: "If your production was built by hand",
    year: "Example",
    serviceSlug: "cloud",
    headline: "How your hand-built AWS setup can move into Terraform without taking anything down.",
    summary:
      "A walk-through of what happens when your existing AWS setup is imported into Terraform, tidied into reusable modules and brought under code review. It describes how the work goes, not a past client.",
    tags: ["Terraform", "AWS", "Infrastructure as code", "GitHub Actions"],
    metrics: [
      { value: "Import", label: "Existing resources adopted, not rebuilt" },
      { value: "Reviewable", label: "Every change goes through a pull request" },
      { value: "Repeatable", label: "A new environment comes from code" },
    ],
    challenge:
      "Picture your production built click by click over a couple of years by people who have since moved on. Nobody can list everything that exists, staging has drifted away from production, and creating a new environment is a project in itself. That situation is common, and it is exactly what infrastructure as code is meant to fix.",
    approach: [
      {
        title: "You learn what actually exists",
        detail:
          "The live account is checked against your team's picture of it. Typical findings include unattached storage, oversized instances and network rules open wider than intended.",
      },
      {
        title: "Your setup is imported, not rebuilt",
        detail:
          "Existing resources are brought into Terraform with import blocks, so nothing is torn down and production keeps running throughout.",
      },
      {
        title: "Repeated parts become modules",
        detail:
          "Networking, compute and access control become parameterised modules, so your environments differ by a variables file instead of by history.",
      },
      {
        title: "Your changes go through review",
        detail:
          "A terraform plan runs on every pull request and changes apply from the protected branch, so infrastructure changes are reviewed like any other code.",
      },
    ],
    results: [
      "You can create a new, fully configured environment with a repeatable command instead of a project.",
      "Drift between staging and production stops building up, and CI flags it when it appears.",
      "Cleanup found during the audit usually lowers your cloud spend, and the audit shows by how much.",
    ],
  },
  {
    slug: "go-service-build",
    title: "A Go service built to be operated from day one",
    kind: "worked-example",
    clientContext: "If you need an integration service your own team can run",
    year: "Example",
    serviceSlug: "web-development",
    headline: "How you can receive a backend integration service with monitoring, tests and its release pipeline included.",
    summary:
      "A walk-through of what you receive when a Go HTTP service that talks to third-party APIs is built for you: monitoring, failure-path tests, a runbook and CI/CD. It describes how the work goes, not a past client.",
    tags: ["Go", "MongoDB", "Docker", "Prometheus"],
    metrics: [
      { value: "Day-one ops", label: "Logging, metrics and health checks from the first version" },
      { value: "Failure paths", label: "Timeouts, retries and partial failures tested first" },
      { value: "Handover", label: "Pipeline and runbook delivered with the code" },
    ],
    challenge:
      "Picture needing an integration service quickly, after being burned before by contract work that arrived as a bare repository: no deployment story, no monitoring, and no way for your in-house team to run it without a rewrite.",
    approach: [
      {
        title: "You agree the contract first",
        detail:
          "The API surface and error behaviour are agreed up front, so your frontend team can build against a stub while the service is implemented.",
      },
      {
        title: "It is built to be run, not just to work",
        detail:
          "Structured logging, Prometheus metrics, health and readiness endpoints and graceful shutdown are in the first working version, not a later milestone.",
      },
      {
        title: "The failure paths are tested",
        detail:
          "Test effort goes into timeouts, retries and partial failures against the third-party APIs, which is where integration services actually break.",
      },
      {
        title: "You receive it running, not just written",
        detail:
          "You receive the containerised build and the pipeline that deploys it, so handover is a walkthrough rather than a migration.",
      },
    ],
    results: [
      "Your service reaches production in the same project it is built in.",
      "Your in-house team can own it after a single handover session.",
      "Dashboards and alerts exist before the first real traffic arrives.",
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const isWorkedExample = (p: Project) => p.kind === "worked-example";

/** True while any entry is a worked example rather than real work, which drives the honesty notice. */
export const hasWorkedExamples = projects.some(isWorkedExample);
