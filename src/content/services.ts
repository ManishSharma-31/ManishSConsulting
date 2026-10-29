import type { LucideIcon } from "lucide-react";
import {
  Cloud,
  Globe,
  Headphones,
  Infinity as InfinityIcon,
  Sparkles,
  Workflow,
} from "lucide-react";

/**
 * Six service areas, presented as peers and ordered from the most widely
 * needed to the most specialist. Nothing in the layout ranks one above another.
 *
 * `name` is the plain, searchable label used in navigation, footers and form
 * dropdowns. `headline` is the outcome-led line used as the page H1.
 */
export type Service = {
  slug: string;
  /** Plain label — nav, footer, dropdowns. */
  name: string;
  /** Outcome-led page headline. */
  headline: string;
  /** Keyword-led line that carries the search traffic. */
  subtitle: string;
  /** <title> for the service page, 60 characters or fewer including the brand suffix. */
  seoTitle: string;
  /** Meta description, 160 characters or fewer. */
  metaDescription: string;
  summary: string;
  icon: LucideIcon;
  /** The concrete things inside this service — what people actually buy. */
  capabilities: { name: string; detail: string }[];
  /** Circumstances where this service is the right call. */
  idealFor: string[];
  deliverables: string[];
  /** Explicitly out of scope. Filters enquiries and buys trust. */
  notFor: string[];
  /** A real position. Being wrong for some readers is the point. */
  stance: { claim: string; detail: string };
  stack: string[];
  typicalTimeline: string;
  body: {
    problem: string;
    approach: { title: string; detail: string }[];
    outcome: string;
  };
};

export const services: Service[] = [
  {
    slug: "web-development",
    name: "Web Development",
    headline: "Web applications built to be maintained, not just launched",
    subtitle: "Web development — React, Next.js, Node, Go, and API engineering",
    seoTitle: "Website & Web Application Development | Manish S Consulting",
    metaDescription:
      "Custom websites, web apps, APIs and online stores built to be maintained, for individuals, businesses and teams. Fixed price, written scope.",
    summary:
      "Websites, web applications, and APIs built properly the first time: fast, accessible, tested, and deployed through a pipeline so the second release is as safe as the first.",
    icon: Globe,
    capabilities: [
      {
        name: "Web applications",
        detail:
          "Customer portals, dashboards, booking systems, internal platforms — full-stack builds with authentication, roles, and the admin surface your team will need on day two.",
      },
      {
        name: "Marketing sites and landing pages",
        detail:
          "Fast, accessible, properly structured for search, with a CMS your marketing people can use without filing a ticket.",
      },
      {
        name: "APIs and backend services",
        detail:
          "REST and GraphQL services in Go, Python, or Node, with schema design, migrations, structured logging, and health checks built in from the start.",
      },
      {
        name: "E-commerce",
        detail:
          "Storefronts, payment integration, inventory sync, and the operational tooling that keeps order flow visible when volume spikes.",
      },
      {
        name: "Performance and accessibility work",
        detail:
          "Fixing sites that are slow or unusable with a keyboard or screen reader — measured before and after, not asserted.",
      },
    ],
    idealFor: [
      "A first product that needs building properly, once, rather than rebuilt in a year",
      "An existing application nobody wants to touch because changes break things",
      "A site losing customers to load time or failing an accessibility review",
      "Agencies needing engineering capacity under their own brand",
    ],
    deliverables: [
      "Deployed application with staging and production environments",
      "Test coverage on the paths whose failure would actually cost you money",
      "CI/CD pipeline, so the release after ours is as safe as ours",
      "Performance and accessibility measured against real budgets, not left to chance",
      "Documentation and handover to whoever maintains it next",
    ],
    notFor: [
      "Pixel-matching a design with no regard for whether it can be maintained",
      "Rescuing a project mid-flight from another team without a paid review first — going in blind helps nobody",
      "Native mobile apps; we will point you to someone who does them well",
    ],
    stance: {
      claim: "A framework choice is not an architecture.",
      detail:
        "Most web projects do not fail because the wrong framework was picked. They fail because nobody decided how state is managed, where the boundaries are, or how it gets deployed — and those decisions got made accidentally, one pull request at a time, until changing anything became expensive.",
    },
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Go", "Python", "PostgreSQL", "MongoDB"],
    typicalTimeline: "3-12 weeks depending on scope",
    body: {
      problem:
        "Plenty of agencies will build you a web application. Far fewer will hand over something your next engineer can work on. The difference shows up six months later, when a small change turns out to require touching nine files, there are no tests around the part that matters, and deploying means someone following a document.",
      approach: [
        {
          title: "Agree the shape before writing code",
          detail:
            "Data model, boundaries, and how it will be deployed. These are cheap decisions to make deliberately and expensive to make by accident.",
        },
        {
          title: "Build the deployment path first",
          detail:
            "Staging and production, with a pipeline, before there is much to deploy. Code that has not been deployed is not finished, and leaving it to the end guarantees a bad week.",
        },
        {
          title: "Ship in visible increments",
          detail:
            "Working software you can click through every week, rather than a long silence followed by a reveal.",
        },
        {
          title: "Test what would cost you money",
          detail:
            "Not a coverage percentage. Authentication, payments, data integrity, and the flows your business depends on.",
        },
        {
          title: "Hand over so it survives us",
          detail:
            "Documentation, a walkthrough, and a codebase organised so the next developer can find things.",
        },
      ],
      outcome:
        "An application in production that your team can change without fear, with the pipeline, tests, and documentation that make the second year cheaper than the first.",
    },
  },
  {
    slug: "it-solutions",
    name: "IT Solutions & Support",
    headline: "Technical judgement on call, without a full-time hire",
    subtitle: "IT consulting, managed support, and technical due diligence",
    seoTitle: "IT Consulting & Support Services | Manish S Consulting",
    metaDescription:
      "Managed IT support, technical advice and due diligence for businesses and individuals, without a full-time hire. Fixed price, written scope.",
    summary:
      "Ongoing IT help for businesses and individuals without in-house technical staff: maintenance, monitoring, upgrades, security hygiene, and someone to ask before decisions get made.",
    icon: Headphones,
    capabilities: [
      {
        name: "Managed maintenance",
        detail:
          "Dependency and security updates, certificate renewals, backup verification, and the upkeep that only becomes visible when it has been skipped for a year.",
      },
      {
        name: "Technical advisory",
        detail:
          "Architecture decisions, vendor and build-versus-buy evaluations, and hiring input — available before the decision is made rather than after.",
      },
      {
        name: "Technical due diligence",
        detail:
          "Independent review of a codebase or infrastructure you are about to acquire, invest in, or inherit, written for people who need to make a decision.",
      },
      {
        name: "Security hygiene",
        detail:
          "Access review, secrets handling, dependency vulnerabilities, backup and restore testing, and the infrastructure answers procurement will ask for.",
      },
      {
        name: "Inherited system rescue",
        detail:
          "Documenting and stabilising software nobody currently understands, so you have options other than a rewrite.",
      },
    ],
    idealFor: [
      "A business running critical software with no in-house engineer",
      "Systems built by a contractor who is no longer available",
      "Needing cover while you recruit for a technical role",
      "Wanting an independent opinion before committing real money",
    ],
    deliverables: [
      "An agreed number of days each month, planned with you at the start of it",
      "Monitoring and alerting so problems surface before customers report them",
      "Written monthly summary of what changed and what is coming",
      "Documentation that accumulates through the engagement rather than arriving at the end",
      "A named point of contact with context on your systems",
    ],
    notFor: [
      "Round-the-clock on-call staffing — instead, we help you design a rotation and write the runbooks it depends on",
      "Desktop, printer, and end-user helpdesk support; we work on systems, not workstations",
      "Organisations large enough to need a staffed internal platform team",
    ],
    stance: {
      claim: "A good retainer should shrink over time.",
      detail:
        "If you need the same number of days from us in month twelve as in month one, we have been maintaining a dependency rather than building capability. Every retainer we run has handover built into it.",
    },
    stack: ["AWS", "Linux", "Terraform", "Docker", "Grafana", "PostgreSQL", "MySQL"],
    typicalTimeline: "Rolling monthly, cancel with 30 days' notice",
    body: {
      problem:
        "Between having no technical needs and being able to justify a full-time engineering hire there is a long, awkward stretch. During it, critical systems have no owner, maintenance is deferred until it becomes an incident, and significant technical decisions get made by whoever is available rather than whoever knows.",
      approach: [
        {
          title: "Understand the estate first",
          detail:
            "Before committing to a retainer, we document what you are actually running. Retainers that start without this turn into expensive guesswork.",
        },
        {
          title: "Plan the month up front",
          detail:
            "We agree at the start of each month what the days go on. No open-ended time and no surprise invoices.",
        },
        {
          title: "Fix causes, not tickets",
          detail:
            "Recurring work gets automated rather than repeated. The list of things needing us should get shorter.",
        },
        {
          title: "Be available before decisions",
          detail:
            "The cheapest technical advice is given before the thing is built. Retainer clients get us in the conversation early.",
        },
      ],
      outcome:
        "Your systems have an owner, maintenance stops accumulating into incidents, and there is someone with context to ask before a decision gets made. When you do hire internally, they inherit a documented system rather than a mystery.",
    },
  },
  {
    slug: "cloud",
    name: "Cloud",
    headline: "Cloud systems that stay reliable, affordable and rebuildable",
    subtitle: "AWS cloud architecture, migration, Terraform, and cost optimisation",
    seoTitle: "Cloud Consulting & Migration Services | Manish S Consulting",
    metaDescription:
      "Cloud architecture, migration, infrastructure as code and cost optimisation on AWS, designed to be reliable and affordable. Fixed price, written scope.",
    summary:
      "Architecture, migration, and cost work on AWS — with everything defined in Terraform so environments are reproducible and changes get reviewed like code.",
    icon: Cloud,
    capabilities: [
      {
        name: "Cloud architecture and setup",
        detail:
          "Networking, compute, storage, and IAM designed for what you actually run, with a security baseline that will survive a customer's review.",
      },
      {
        name: "Migration to AWS",
        detail:
          "Moving from on-premise or another provider, planned in stages so there is no single high-risk cutover night.",
      },
      {
        name: "Infrastructure as code",
        detail:
          "Existing hand-built infrastructure imported into Terraform without downtime, refactored into modules so a new environment is a variables file.",
      },
      {
        name: "Cost optimisation",
        detail:
          "A fixed-price audit producing a ranked list of savings with a figure and a risk note against each item, plus tagging so spend stays attributable afterwards.",
      },
      {
        name: "Security and access review",
        detail:
          "IAM tidy-up, secrets handling, network exposure, and the infrastructure sections of a standard security questionnaire, answered once and reusable.",
      },
    ],
    idealFor: [
      "Production that was configured by hand and that nobody wants to touch",
      "A cloud bill that grows every month with no explanation attached",
      "Needing a second environment for a customer, a region, or a rewrite",
      "The person who built your infrastructure having left",
    ],
    deliverables: [
      "Terraform modules covering networking, compute, storage, and IAM",
      "Remote state with locking, and plan and apply wired into pull requests",
      "A second environment stood up from the same code, proving it reproduces",
      "Cost breakdown with ranked, quantified savings",
      "Runbooks for the operations your team will actually perform",
    ],
    notFor: [
      "Multi-cloud for its own sake — it doubles the operational burden and rarely pays for itself",
      "Greenfield projects with nothing running yet; you need less than this and we would rather say so",
      "Anyone wanting savings that quietly trade away reliability",
    ],
    stance: {
      claim: "Import beats rebuild. Every time.",
      detail:
        "The instinct when adopting infrastructure as code is to rebuild it properly and cut over. That plan rarely survives contact with production. Importing what exists is less satisfying and far faster to finish, and it never needs a maintenance window to discover what you forgot.",
    },
    stack: ["AWS", "Terraform", "Docker", "CloudWatch", "S3", "RDS", "IAM"],
    typicalTimeline: "1 week for an audit, 4-8 weeks for migration work",
    body: {
      problem:
        "Infrastructure built by hand is infrastructure exactly one person can change. It cannot be reviewed, it cannot be tested, and it cannot be rebuilt if the account is lost. Every manual change widens the gap between what you believe is running and what is actually running, and you find out how wide that gap is during an incident.",
      approach: [
        {
          title: "Inventory what actually exists",
          detail:
            "Audit the live account against the team's mental model of it. This step routinely surfaces resources nobody remembers creating and access wider than intended.",
        },
        {
          title: "Import rather than rebuild",
          detail:
            "Bring existing resources into Terraform state as they are. Nothing is taken down, so the migration can proceed without a change freeze.",
        },
        {
          title: "Refactor into modules",
          detail:
            "Once state reflects reality, extract the repeated parts so environments differ by configuration rather than by history.",
        },
        {
          title: "Prove it with a second environment",
          detail:
            "Until staging has been built from the same modules as production, you have Terraform files rather than reproducible infrastructure.",
        },
        {
          title: "Move changes into review",
          detail:
            "Plan on pull requests, apply on merge. Infrastructure starts getting the same scrutiny as application code.",
        },
      ],
      outcome:
        "Infrastructure that is reviewable, reproducible, and boring. New environments take minutes rather than weeks, drift stops being a category of incident, and the cloud bill becomes something you can explain.",
    },
  },
  {
    slug: "devops",
    name: "DevOps",
    headline: "Release software calmly, as often as you like",
    subtitle: "DevOps consulting — CI/CD pipelines, Kubernetes, and observability",
    seoTitle: "DevOps & CI/CD Consulting | Manish S Consulting",
    metaDescription:
      "CI/CD pipelines, containers, monitoring and release safety so your software ships often and safely. Fixed price, written scope.",
    summary:
      "Replace the manual release ritual with a pipeline that builds, tests, and deploys on merge — with monitoring that tells you something is wrong before a customer does.",
    icon: InfinityIcon,
    capabilities: [
      {
        name: "CI/CD pipeline builds",
        detail:
          "End-to-end pipelines in GitHub Actions, GitLab CI, or Jenkins, covering build, test, security scan, and staged deployment with approval gates where you want them.",
      },
      {
        name: "Containers and orchestration",
        detail:
          "Docker builds that produce identical artefacts locally and on CI, and Kubernetes or ECS where the scale genuinely calls for it.",
      },
      {
        name: "Monitoring and alerting",
        detail:
          "Metrics, structured logging, and dashboards reflecting user-visible health — with alerts tied to symptoms a customer would notice, routed to someone who can act.",
      },
      {
        name: "Release safety",
        detail:
          "Health checks, automated rollback, and a runbook for the failure modes your system actually has. Fast deploys without a rollback path just break production faster.",
      },
      {
        name: "Delivery health check",
        detail:
          "A fixed-price week reviewing your pipeline, infrastructure, and observability, producing findings ranked by effort against impact.",
      },
    ],
    idealFor: [
      "Releases batched to weekly because each one is expensive",
      "The person who runs deploys going on leave, or having just resigned",
      "Growing a team you cannot onboard onto a process that lives in one head",
      "Finding out about outages from customers",
    ],
    deliverables: [
      "Pipeline running build, test, and deployment on merge",
      "Environment promotion from development through staging to production",
      "One-command rollback plus a written incident runbook",
      "Dashboards and alerts covering user-visible health",
      "Handover walkthrough with the people who will own it",
    ],
    notFor: [
      "Teams under twenty engineers wanting Kubernetes — it is a superb answer to problems you probably do not have yet",
      "Codebases with no tests at all; that is a real problem and a different engagement",
      "Building a pipeline around a tool bought but never used, when a simpler one would serve better",
    ],
    stance: {
      claim: "If your deploy needs a checklist, it is not automated. It is documented.",
      detail:
        "A runbook is a description of work a computer should be doing. Every manual step in a release is a step that gets skipped at 6pm on a Friday by someone who has done it forty times and is sure they remember it.",
    },
    stack: ["GitHub Actions", "GitLab CI", "Jenkins", "Docker", "Kubernetes", "Prometheus", "Grafana", "Argo CD"],
    typicalTimeline: "3-4 weeks for a production-ready pipeline",
    body: {
      problem:
        "Most teams do not have a deployment problem, they have a confidence problem. The pipeline works, but only one person fully understands it and only when nothing unusual happens. That uncertainty slows everything else down: releases get batched, batches get large, large releases get risky, and risky releases get postponed. The delay is not the deploy — it is the meeting about whether to deploy.",
      approach: [
        {
          title: "Map what actually happens",
          detail:
            "Shadow a real release and record every step, including the undocumented ones. Some invariably turn out to be workarounds for problems already fixed.",
        },
        {
          title: "Make the build reproducible",
          detail:
            "Containerise so CI and a developer laptop produce the same artefact, removing a whole category of bug before pipeline work starts.",
        },
        {
          title: "Build it in stages",
          detail:
            "Build and test, then automated deployment to a non-production environment, then production behind whatever gate your risk appetite requires.",
        },
        {
          title: "Add the safety net before the speed",
          detail:
            "Health checks, automated rollback, and alerting that reaches a human before it reaches a customer.",
        },
        {
          title: "Hand it over properly",
          detail:
            "Documentation your team can act on and a live walkthrough, not a wiki page that goes stale in a month.",
        },
      ],
      outcome:
        "Merging becomes the deploy decision. Releases stop being events, rollback stops being a research project, and how any of it works stops living in one person's head.",
    },
  },
  {
    slug: "automation",
    name: "Automation",
    headline: "Stop paying people to move data between systems",
    subtitle: "Business process automation, system integration, and internal tools",
    seoTitle: "Business Process Automation | Manish S Consulting",
    metaDescription:
      "Automate repetitive work with system integrations, workflows, internal tools and data pipelines for any business. Fixed price, written scope.",
    summary:
      "We remove the repetitive work: connecting systems that do not talk to each other, replacing spreadsheet handoffs, and building the internal tools your team has been asking for.",
    icon: Workflow,
    capabilities: [
      {
        name: "System integrations",
        detail:
          "Get your CRM, accounting, support desk, and internal database exchanging data reliably, with retries and alerting when a sync fails rather than silent divergence.",
      },
      {
        name: "Workflow automation",
        detail:
          "Approvals, notifications, onboarding and offboarding sequences, scheduled reports — the multi-step processes currently held together by someone remembering to do them.",
      },
      {
        name: "Internal tools and dashboards",
        detail:
          "Admin panels and operational dashboards so your team stops asking an engineer to run a query every time they need a number.",
      },
      {
        name: "Data pipelines and reporting",
        detail:
          "Scheduled extraction, transformation and loading into somewhere your team can actually query, with monitoring so you find out when a job fails.",
      },
      {
        name: "Document and file workflows",
        detail:
          "Generation, routing, storage and archival of documents that currently pass through an inbox and a shared drive.",
      },
    ],
    idealFor: [
      "A team where someone spends hours each week copying between two systems",
      "A business that has outgrown running operations from spreadsheets",
      "Companies whose tools each work fine but do not talk to one another",
      "Any process that breaks whenever one particular person is on leave",
    ],
    deliverables: [
      "Working automation running in your environment on a schedule or a trigger",
      "Error handling, retries, and alerting so failures surface instead of accumulating",
      "Logging you can audit when someone asks what happened to a record",
      "Documentation and a walkthrough so your team can adjust it without us",
      "An honest before-and-after estimate of the hours removed",
    ],
    notFor: [
      "Processes still changing weekly — automate them once they have settled, or you will pay to rebuild",
      "Work that happens twice a year; the automation will cost more than the work",
      "Replacing a person's judgement rather than their typing",
    ],
    stance: {
      claim: "Automate the process you have, not the process you wish you had.",
      detail:
        "The most common failure is redesigning the workflow at the same time as automating it. You end up debugging two changes at once and cannot tell which one broke. Automate the current process faithfully, get it stable, then improve it deliberately.",
    },
    stack: ["Python", "Go", "n8n", "REST & GraphQL APIs", "PostgreSQL", "MySQL", "AWS Lambda"],
    typicalTimeline: "1-6 weeks per workflow",
    body: {
      problem:
        "Manual process work is invisible on any budget line. Nobody has a cost centre called \"copying rows between systems\", so it never competes for attention — it just quietly consumes hours every week, introduces errors nobody catches until month end, and stops entirely when one particular person takes leave.",
      approach: [
        {
          title: "Follow the process as it actually runs",
          detail:
            "We watch it happen and write down every step, including the exceptions people handle without thinking. The exceptions are where automation projects usually fail.",
        },
        {
          title: "Count the hours honestly",
          detail:
            "How often it runs, how long it takes, what an error costs to fix. If the numbers do not justify the build, we will say so before you spend anything.",
        },
        {
          title: "Automate the common path first",
          detail:
            "Cover the majority case and route the rest to a person. Chasing full coverage on day one is how these projects double in cost.",
        },
        {
          title: "Make failure loud",
          detail:
            "Automation that fails silently is worse than the manual process, because nobody notices for weeks. Every workflow gets retries, alerting, and an audit log.",
        },
        {
          title: "Hand over the controls",
          detail:
            "Your team should be able to change a threshold or a recipient without booking us. Where that is possible, we build it that way.",
        },
      ],
      outcome:
        "The work happens on its own, failures reach a human quickly, and the hours go back to your team. We will tell you the measured before-and-after rather than a projected one.",
    },
  },
  {
    slug: "ai",
    name: "AI Solutions",
    headline: "AI that does a specific job, not a demo",
    subtitle: "AI development — LLM integration, chatbots, document processing, RAG",
    seoTitle: "AI & LLM Solutions for Business | Manish S Consulting",
    metaDescription:
      "AI assistants, document processing and LLM features built for a named problem and measured, not demos. Fixed price, written scope.",
    summary:
      "We build AI features that solve a named problem and can be measured: assistants trained on your own documentation, document processing that removes manual data entry, and LLM features inside your existing product.",
    icon: Sparkles,
    capabilities: [
      {
        name: "Internal knowledge assistants",
        detail:
          "A chatbot that answers from your own documentation, policies, and past tickets rather than from the open internet — retrieval-augmented so answers cite their source and can be checked.",
      },
      {
        name: "Document processing",
        detail:
          "Extract structured data from invoices, contracts, forms, and PDFs, with a confidence threshold and a human review queue for anything below it.",
      },
      {
        name: "LLM features in your product",
        detail:
          "Summarisation, classification, drafting, and search built into software you already run, with cost controls and fallbacks so a provider outage does not take your product down.",
      },
      {
        name: "Customer support automation",
        detail:
          "Triage and first-line responses that hand off cleanly to a person, with the handoff point tuned so customers are not trapped in a loop.",
      },
      {
        name: "AI readiness assessment",
        detail:
          "A fixed-price review of where AI would genuinely pay for itself in your business, and — as often as not — where it would not.",
      },
    ],
    idealFor: [
      "A team drowning in a manual process that is mostly reading and re-typing",
      "A product that needs an AI feature that actually ships, not a prototype",
      "A business fielding the same customer questions hundreds of times a month",
      "Anyone who has been quoted a large number for something that should be small",
    ],
    deliverables: [
      "Working feature deployed into your environment, not a notebook",
      "Evaluation set and accuracy measurements, so \"is it good enough\" has an answer",
      "Cost-per-request modelling and usage limits before it goes live",
      "Fallback behaviour for provider outages, rate limits, and low-confidence results",
      "Documentation covering how it works, what it costs, and how to change the prompts",
    ],
    notFor: [
      "Training foundation models from scratch — almost nobody needs this, and we will say so",
      "\"Add AI\" with no problem attached; we will help you find the problem first, but we will not skip that step",
      "Use cases where a wrong answer is unacceptable and there is no way to put a human in the loop",
    ],
    stance: {
      claim: "Most AI projects fail on evaluation, not on modelling.",
      detail:
        "Getting a plausible answer out of a language model takes an afternoon. Knowing whether it is right often enough to put in front of customers takes an evaluation set, a threshold, and a fallback. Teams that skip that part ship something impressive in a demo and unusable in production.",
    },
    stack: ["Python", "Claude", "OpenAI", "Azure AI", "LangChain", "Vector databases", "FastAPI"],
    typicalTimeline: "2-8 weeks depending on scope",
    body: {
      problem:
        "AI is easy to buy and hard to get value from. The gap is rarely the model — it is that nobody defined what success looks like, so there is no way to tell whether the thing works. Projects stall in an endless prototype phase, or worse, ship without evaluation and quietly give customers wrong answers with total confidence.",
      approach: [
        {
          title: "Start from the process, not the technology",
          detail:
            "We look at the actual manual work you want removed and how often it happens. If the honest answer is that a database query or a form would solve it better, that is what we will tell you.",
        },
        {
          title: "Define what good looks like before building",
          detail:
            "An evaluation set of real examples with known correct answers. Without it, \"it seems to work\" is the only quality bar available, and it is not one you can defend to a customer.",
        },
        {
          title: "Build the narrow version first",
          detail:
            "One use case, deployed, measured, in front of real users. Breadth comes after something is demonstrably working, not before.",
        },
        {
          title: "Design for being wrong",
          detail:
            "Confidence thresholds, human review queues, graceful degradation when a provider is down. The failure path matters more than the happy path in anything customer-facing.",
        },
        {
          title: "Control the cost before launch",
          detail:
            "Per-request cost modelled against realistic volume, with caching and limits in place. AI features that get expensive at scale are a business problem, not a technical one.",
        },
      ],
      outcome:
        "A feature doing a specific job, with numbers showing how well it does it and what it costs to run. You can decide whether to expand it on evidence rather than on enthusiasm.",
    },
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

/** Declaration order is display order: most widely needed first. */
export const orderedServices = services;
