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
 * Copy is written from the visitor's side: their problem first, the outcome
 * they get second, and the method only as far as it builds confidence. `name`
 * is the plain, searchable label used in navigation, footers and form
 * dropdowns. `headline` is the outcome-led line used as the page H1.
 */
export type Service = {
  slug: string;
  /** Plain label — nav, footer, dropdowns. */
  name: string;
  /** Outcome-led page headline, phrased as what the visitor gets. */
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
  /** Situations the visitor may recognise as their own. */
  idealFor: string[];
  /** What the visitor receives at the end. */
  deliverables: string[];
  /** Situations where this is not the right answer for the visitor. Filters enquiries and buys trust. */
  notFor: string[];
  /** A candid point the visitor should know before they start. */
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
    headline: "A website or web app you can rely on, and change without fear",
    subtitle: "Web development — React, Next.js, Node, Go, and API engineering",
    seoTitle: "Website & Web Application Development | SunCrest Technology",
    metaDescription:
      "Get a fast, easy-to-maintain website, web app, API or online store from one expert, whether you are an individual or a business. Fixed price, written scope.",
    summary:
      "You get a website, web application or API that loads fast, works for everyone and is easy to update. It goes live through a proper release process, so your second release is as safe as your first.",
    icon: Globe,
    capabilities: [
      {
        name: "Web applications",
        detail:
          "Customer portals, dashboards, booking systems and internal platforms, with logins, roles and the admin tools your team will need from day two.",
      },
      {
        name: "Marketing sites and landing pages",
        detail:
          "Fast, search-friendly pages that you or your team can edit without waiting for a developer.",
      },
      {
        name: "APIs and backend services",
        detail:
          "Dependable services behind your app or your integrations, with clear data design, logging and health checks so problems show up early.",
      },
      {
        name: "E-commerce",
        detail:
          "An online store with payments, stock sync and the tools to see your orders clearly when volume spikes.",
      },
      {
        name: "Performance and accessibility work",
        detail:
          "Fix a site that is slow, or hard to use with a keyboard or screen reader. You see the numbers before and after, not just a promise.",
      },
    ],
    idealFor: [
      "You need a first product built properly, once, instead of rebuilt in a year",
      "Your current application is one nobody wants to touch because changes break things",
      "Your site is losing customers to slow load times or failing an accessibility review",
      "You run an agency and need engineering capacity under your own brand",
    ],
    deliverables: [
      "Your application live, with separate staging and production environments",
      "Tests on the paths where a failure would actually cost you money",
      "An automated release process, so every future update is as safe as the first",
      "Speed and accessibility measured against real targets",
      "Documentation and a walkthrough for whoever looks after it next",
    ],
    notFor: [
      "You want a design copied pixel for pixel, whether or not it can be maintained",
      "You want another team's half-finished project rescued without a paid review first. Going in blind helps nobody",
      "You need a native mobile app. You will get a recommendation for someone who builds them well",
    ],
    stance: {
      claim: "Your choice of framework matters less than you think.",
      detail:
        "Most web projects do not go wrong because the wrong framework was picked. They go wrong because nobody decided how data is handled, where the boundaries sit or how releases happen. Those choices get made by accident, one change at a time, until every update is expensive. You are better off settling them at the start.",
    },
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Go", "Python", "PostgreSQL", "MongoDB"],
    typicalTimeline: "3-12 weeks depending on scope",
    body: {
      problem:
        "Plenty of agencies will build you a web application. Far fewer hand over something the next developer can work on. You find the difference six months later, when a small change touches nine files, nothing is tested where it matters and every release depends on someone following a document.",
      approach: [
        {
          title: "You agree the shape before any code is written",
          detail:
            "How your data is organised, where the boundaries sit and how releases will work. These decisions are cheap to make on purpose and expensive to make by accident.",
        },
        {
          title: "Your release path exists before there is much to release",
          detail:
            "Staging and production are set up early, so launch day is routine instead of a bad week.",
        },
        {
          title: "You see working software every week",
          detail:
            "You click through real progress as it happens, instead of waiting through a long silence for a big reveal.",
        },
        {
          title: "The parts that cost you money get tested",
          detail:
            "Logins, payments, data integrity and the flows your business depends on. Not a coverage number for show.",
        },
        {
          title: "You get a handover that lasts",
          detail:
            "Documentation, a walkthrough and a codebase the next developer can find their way around.",
        },
      ],
      outcome:
        "An application in production that you and your team can change without fear, with the release process, tests and documentation that make year two cheaper than year one.",
    },
  },
  {
    slug: "it-solutions",
    name: "IT Solutions & Support",
    headline: "Expert IT help on call, without hiring full time",
    subtitle: "IT consulting, managed support, and technical due diligence",
    seoTitle: "IT Consulting & Support Services | SunCrest Technology",
    metaDescription:
      "Get managed IT support, honest technical advice and independent due diligence without a full-time hire. For individuals and businesses. Fixed price, written scope.",
    summary:
      "Ongoing help for individuals and businesses without in-house technical staff: upkeep, monitoring, upgrades, security basics, and someone to ask before you make a decision.",
    icon: Headphones,
    capabilities: [
      {
        name: "Managed maintenance",
        detail:
          "Security updates, certificate renewals, backup checks and the upkeep that only becomes visible once it has been skipped for a year. Handled before it becomes your problem.",
      },
      {
        name: "Technical advisory",
        detail:
          "A second opinion on architecture, vendors, build-versus-buy and hiring, available before you commit rather than after.",
      },
      {
        name: "Technical due diligence",
        detail:
          "An independent review of a codebase or infrastructure you are about to buy, invest in or inherit, written so you can make the decision.",
      },
      {
        name: "Security hygiene",
        detail:
          "Who has access to what, how secrets are stored, which dependencies are vulnerable, and whether your backups actually restore. Plus the answers a customer's security questionnaire will ask for.",
      },
      {
        name: "Inherited system rescue",
        detail:
          "Software nobody on your team understands, documented and stabilised, so a rewrite is not your only option.",
      },
    ],
    idealFor: [
      "You run critical software and have no in-house engineer",
      "The contractor who built your systems is no longer available",
      "You need cover while you recruit for a technical role",
      "You want an independent opinion before committing real money",
    ],
    deliverables: [
      "An agreed number of days each month, planned with you at the start of it",
      "Monitoring and alerts, so you hear about problems before your customers do",
      "A short written summary each month of what changed and what is coming",
      "Documentation that builds up as we go, rather than arriving at the end",
      "One named person who already knows your systems",
    ],
    notFor: [
      "You need round-the-clock on-call staffing. You can get help designing a rotation and the runbooks it depends on, but not the rotation itself",
      "You need desktop, printer or end-user helpdesk support. This service covers systems, not workstations",
      "You are a large organisation with a staffed internal platform team",
    ],
    stance: {
      claim: "A good support plan should need less of your budget over time.",
      detail:
        "If you need the same number of days in month twelve as in month one, you are paying to maintain a dependency instead of building capability. Every plan here includes handover, so your systems get easier to run and your internal team, when you hire one, inherits something documented.",
    },
    stack: ["AWS", "Linux", "Terraform", "Docker", "Grafana", "PostgreSQL", "MySQL"],
    typicalTimeline: "Rolling monthly, cancel with 30 days' notice",
    body: {
      problem:
        "Between having no technical needs and being able to justify a full-time engineer there is a long, awkward stretch. During it, important systems have no owner, upkeep waits until it becomes an incident, and big technical decisions get made by whoever happens to be around instead of whoever knows.",
      approach: [
        {
          title: "Your systems get documented first",
          detail:
            "Before any ongoing plan starts, what you actually run is written down. Support that begins without this turns into expensive guesswork.",
        },
        {
          title: "Each month is planned with you",
          detail:
            "You agree at the start of the month what the days go on. No open-ended time and no surprise invoices.",
        },
        {
          title: "Causes get fixed, not just tickets",
          detail:
            "Repeat problems are automated away, so your list of things that need attention keeps getting shorter.",
        },
        {
          title: "You can ask before you decide",
          detail:
            "The cheapest technical advice is the kind you get before something is built. You get included in that conversation early.",
        },
      ],
      outcome:
        "Your systems have an owner, upkeep stops piling up into incidents, and you have someone with context to ask before a decision is made. When you do hire internally, they inherit a documented system and not a mystery.",
    },
  },
  {
    slug: "cloud",
    name: "Cloud",
    headline: "Cloud systems that stay reliable, affordable and easy to rebuild",
    subtitle: "AWS cloud architecture, migration, Terraform, and cost optimisation",
    seoTitle: "Cloud Consulting & Migration Services | SunCrest Technology",
    metaDescription:
      "Get reliable, affordable cloud on AWS: architecture, migration, infrastructure as code and cost cuts that do not trade away stability. Fixed price, written scope.",
    summary:
      "Your cloud setup designed, moved or tidied on AWS, with everything written as code so you can rebuild it, review changes and explain your bill.",
    icon: Cloud,
    capabilities: [
      {
        name: "Cloud architecture and setup",
        detail:
          "Networking, servers, storage and access designed around what you actually run, with a security baseline that will hold up when a customer reviews it.",
      },
      {
        name: "Migration to AWS",
        detail:
          "Move from on-premise or another provider in stages, so you never face a single high-risk cutover night.",
      },
      {
        name: "Infrastructure as code",
        detail:
          "Your hand-built infrastructure brought under Terraform without downtime, so a new environment is a settings file instead of a project.",
      },
      {
        name: "Cost optimisation",
        detail:
          "A fixed-price audit that gives you a ranked list of savings, each with a figure and a risk note, plus tagging so your spend stays explainable afterwards.",
      },
      {
        name: "Security and access review",
        detail:
          "Tidy permissions, safer secrets, closed network gaps, and the infrastructure answers a security questionnaire asks for, written once and reusable.",
      },
    ],
    idealFor: [
      "Your production setup was configured by hand and nobody wants to touch it",
      "Your cloud bill grows every month with no explanation attached",
      "You need a second environment for a customer, a region or a rewrite",
      "The person who built your infrastructure has left",
    ],
    deliverables: [
      "Terraform code covering your networking, servers, storage and access",
      "Remote state with locking, with changes reviewed in pull requests before they apply",
      "A second environment built from the same code, proving it can be reproduced",
      "A cost breakdown with ranked, quantified savings",
      "Runbooks for the tasks your team will really perform",
    ],
    notFor: [
      "You want multi-cloud for its own sake. It doubles the work of running things and rarely pays for itself",
      "You are starting from nothing. You need less than this, and you will be told so",
      "You want savings that quietly trade away reliability",
    ],
    stance: {
      claim: "Importing what you have beats rebuilding it.",
      detail:
        "When people adopt infrastructure as code, the instinct is to rebuild everything properly and cut over. That plan rarely survives contact with production. Importing what already exists is less glamorous and far faster to finish, and it never needs a maintenance window to find out what you forgot.",
    },
    stack: ["AWS", "Terraform", "Docker", "CloudWatch", "S3", "RDS", "IAM"],
    typicalTimeline: "1 week for an audit, 4-8 weeks for migration work",
    body: {
      problem:
        "Infrastructure built by hand is infrastructure exactly one person can change. It cannot be reviewed, it cannot be tested, and it cannot be rebuilt if the account is lost. Every manual change widens the gap between what you believe is running and what is really running, and you usually find out how wide that gap is during an incident.",
      approach: [
        {
          title: "You find out what actually exists",
          detail:
            "The live account is checked against what your team thinks is there. This step routinely turns up resources nobody remembers creating and access wider than intended.",
        },
        {
          title: "What you have is imported, not rebuilt",
          detail:
            "Existing resources are brought into Terraform as they are. Nothing is taken down, so you do not need a change freeze.",
        },
        {
          title: "Repeated parts become reusable modules",
          detail:
            "Once the code matches reality, environments differ by configuration instead of by history.",
        },
        {
          title: "A second environment proves it works",
          detail:
            "Until staging has been built from the same modules as production, you have Terraform files, not rebuildable infrastructure.",
        },
        {
          title: "Changes move into review",
          detail:
            "Plans appear on pull requests and apply when approved, so infrastructure gets the same scrutiny as application code.",
        },
      ],
      outcome:
        "Infrastructure you can review, reproduce and trust. New environments take minutes instead of weeks, drift stops being a category of incident, and your cloud bill becomes something you can explain.",
    },
  },
  {
    slug: "devops",
    name: "DevOps",
    headline: "Release your software calmly, as often as you like",
    subtitle: "DevOps consulting — CI/CD pipelines, Kubernetes, and observability",
    seoTitle: "DevOps & CI/CD Consulting | SunCrest Technology",
    metaDescription:
      "Ship updates faster and with less stress: CI/CD pipelines, containers, monitoring and safe rollbacks for your team. Fixed price, written scope.",
    summary:
      "Replace your manual release routine with a pipeline that builds, tests and deploys when you merge, and monitoring that tells you something is wrong before a customer does.",
    icon: InfinityIcon,
    capabilities: [
      {
        name: "CI/CD pipeline builds",
        detail:
          "A complete pipeline in GitHub Actions, GitLab CI or Jenkins covering build, test, security scan and staged deployment, with approval gates wherever you want them.",
      },
      {
        name: "Containers and orchestration",
        detail:
          "Docker builds that behave the same on a laptop and in CI, and Kubernetes or ECS only where your scale genuinely calls for it.",
      },
      {
        name: "Monitoring and alerting",
        detail:
          "Dashboards that show what your users experience, with alerts tied to symptoms they would notice and sent to someone who can act.",
      },
      {
        name: "Release safety",
        detail:
          "Health checks, automatic rollback and a runbook for the failures your system really has. Fast deploys without a way back just break production faster.",
      },
      {
        name: "Delivery health check",
        detail:
          "A fixed-price week reviewing your pipeline, infrastructure and monitoring, ending in findings ranked by effort against impact.",
      },
    ],
    idealFor: [
      "You batch releases weekly because each one is expensive",
      "The person who runs your deploys is going on leave, or has just resigned",
      "You are growing a team and cannot onboard people onto a process that lives in one head",
      "You find out about outages from your customers",
    ],
    deliverables: [
      "A pipeline that builds, tests and deploys when you merge",
      "A promotion path from development through staging to production",
      "One-command rollback and a written incident runbook",
      "Dashboards and alerts covering what your users see",
      "A walkthrough for the people who will own it",
    ],
    notFor: [
      "You have a team under twenty engineers and want Kubernetes. It is a superb answer to problems you probably do not have yet",
      "Your codebase has no tests at all. That is a real problem and a different engagement",
      "You want a pipeline built around a tool you bought but never used, when a simpler one would serve you better",
    ],
    stance: {
      claim: "If your deploy needs a checklist, it is documented, not automated.",
      detail:
        "A runbook is a description of work a computer should be doing. Every manual step in a release is a step that gets skipped at 6pm on a Friday by someone who has done it forty times and is sure they remember it.",
    },
    stack: ["GitHub Actions", "GitLab CI", "Jenkins", "Docker", "Kubernetes", "Prometheus", "Grafana", "Argo CD"],
    typicalTimeline: "3-4 weeks for a production-ready pipeline",
    body: {
      problem:
        "Most teams do not have a deployment problem, they have a confidence problem. The pipeline works, but only one person fully understands it, and only when nothing unusual happens. That uncertainty slows everything down: releases get batched, batches get large, large releases get risky, and risky releases get postponed. The delay is not the deploy. It is the meeting about whether to deploy.",
      approach: [
        {
          title: "A real release is mapped end to end",
          detail:
            "Every step is recorded, including the undocumented ones. Some always turn out to be workarounds for problems that were fixed long ago.",
        },
        {
          title: "Your build becomes reproducible",
          detail:
            "Containers make CI and a developer's laptop produce the same result, which removes a whole category of bug before pipeline work starts.",
        },
        {
          title: "Automation arrives in stages",
          detail:
            "Build and test first, then automatic deployment to a non-production environment, then production behind whatever gate suits your appetite for risk.",
        },
        {
          title: "The safety net goes in before the speed",
          detail:
            "Health checks, automatic rollback and alerts that reach a person before they reach a customer.",
        },
        {
          title: "Your team gets a proper handover",
          detail:
            "Documentation they can act on and a live walkthrough, not a wiki page that goes stale in a month.",
        },
      ],
      outcome:
        "Merging becomes the deploy decision. Releases stop being events, rolling back stops being a research project, and how it all works stops living in one person's head.",
    },
  },
  {
    slug: "automation",
    name: "Automation",
    headline: "Stop paying people to move data between systems",
    subtitle: "Business process automation, system integration, and internal tools",
    seoTitle: "Business Process Automation | SunCrest Technology",
    metaDescription:
      "Get hours back every week: automate repetitive work with integrations, workflows, internal tools and data pipelines. Fixed price, written scope.",
    summary:
      "Get the repetitive work off your team's plate: systems that finally talk to each other, spreadsheet handoffs replaced, and the internal tools your team has been asking for.",
    icon: Workflow,
    capabilities: [
      {
        name: "System integrations",
        detail:
          "Your CRM, accounting, support desk and database exchanging data reliably, with retries and alerts when a sync fails, instead of silent drift.",
      },
      {
        name: "Workflow automation",
        detail:
          "Approvals, notifications, onboarding and offboarding sequences and scheduled reports. The multi-step processes that currently depend on someone remembering to do them.",
      },
      {
        name: "Internal tools and dashboards",
        detail:
          "Admin panels and live dashboards, so your team stops asking an engineer to run a query every time they need a number.",
      },
      {
        name: "Data pipelines and reporting",
        detail:
          "Data collected on a schedule and loaded somewhere your team can actually query, with monitoring so you know when a job fails.",
      },
      {
        name: "Document and file workflows",
        detail:
          "Creating, routing, storing and archiving the documents that currently pass through an inbox and a shared drive.",
      },
    ],
    idealFor: [
      "Someone on your team spends hours each week copying data between two systems",
      "You have outgrown running operations from spreadsheets",
      "Your tools each work fine but do not talk to one another",
      "A process of yours breaks whenever one particular person is on leave",
    ],
    deliverables: [
      "Working automation running in your own environment, on a schedule or a trigger",
      "Error handling, retries and alerts, so failures surface instead of piling up",
      "Logs you can audit when someone asks what happened to a record",
      "Documentation and a walkthrough so your team can adjust it without us",
      "An honest before-and-after estimate of the hours removed",
    ],
    notFor: [
      "Your process is still changing every week. Automate it once it settles, or you will pay to rebuild",
      "The work happens twice a year. The automation would cost more than the work",
      "You want to replace a person's judgement, not their typing",
    ],
    stance: {
      claim: "Automate the process you have, not the one you wish you had.",
      detail:
        "The most common failure is redesigning the workflow at the same time as automating it. You end up debugging two changes at once and cannot tell which one broke. Automate the current process faithfully, get it stable, then improve it on purpose.",
    },
    stack: ["Python", "Go", "n8n", "REST & GraphQL APIs", "PostgreSQL", "MySQL", "AWS Lambda"],
    typicalTimeline: "1-6 weeks per workflow",
    body: {
      problem:
        "Manual process work is invisible on any budget. Nobody has a cost centre called \"copying rows between systems\", so it never competes for attention. It quietly consumes hours every week, introduces errors nobody catches until month end, and stops completely when one particular person takes leave.",
      approach: [
        {
          title: "Your process is followed as it really runs",
          detail:
            "Every step is written down, including the exceptions people handle without thinking. Those exceptions are where automation projects usually fail.",
        },
        {
          title: "The hours are counted honestly",
          detail:
            "How often it runs, how long it takes and what an error costs to fix. If the numbers do not justify the build, you hear that before you spend anything.",
        },
        {
          title: "The common path is automated first",
          detail:
            "The majority case is covered and the rest goes to a person. Chasing full coverage on day one is how these projects double in cost.",
        },
        {
          title: "Failures are loud, not silent",
          detail:
            "Automation that fails silently is worse than the manual process, because nobody notices for weeks. Every workflow gets retries, alerts and an audit log.",
        },
        {
          title: "You keep the controls",
          detail:
            "Your team can change a threshold or a recipient without booking us. Where that is possible, it is built that way.",
        },
      ],
      outcome:
        "The work happens on its own, failures reach a person quickly and the hours go back to your team. You get the measured before-and-after, not a projection.",
    },
  },
  {
    slug: "ai",
    name: "AI Solutions",
    headline: "AI that does a specific job for you, not a demo",
    subtitle: "AI development — LLM integration, chatbots, document processing, RAG",
    seoTitle: "AI & LLM Solutions for Business | SunCrest Technology",
    metaDescription:
      "Put AI to work on a real problem: assistants, document processing and LLM features that are measured, not demos. Fixed price, written scope.",
    summary:
      "AI features that solve a named problem and can be measured: an assistant that answers from your own documents, document processing that removes manual data entry, or an AI feature inside the product you already run.",
    icon: Sparkles,
    capabilities: [
      {
        name: "Internal knowledge assistants",
        detail:
          "A chatbot that answers from your own documentation, policies and past tickets instead of the open internet. Answers cite their source, so you can check them.",
      },
      {
        name: "Document processing",
        detail:
          "Structured data pulled from invoices, contracts, forms and PDFs, with a confidence threshold and a review queue for anything the system is unsure about.",
      },
      {
        name: "LLM features in your product",
        detail:
          "Summaries, classification, drafting and search inside software you already run, with cost controls and fallbacks so a provider outage does not take your product down.",
      },
      {
        name: "Customer support automation",
        detail:
          "Triage and first-line replies that hand over cleanly to a person, tuned so your customers are never trapped in a loop.",
      },
      {
        name: "AI readiness assessment",
        detail:
          "A fixed-price review of where AI would genuinely pay for itself in your business and, as often as not, where it would not.",
      },
    ],
    idealFor: [
      "Your team is drowning in a manual process that is mostly reading and re-typing",
      "Your product needs an AI feature that really ships, not a prototype",
      "You answer the same customer questions hundreds of times a month",
      "You have been quoted a large number for something that should be small",
    ],
    deliverables: [
      "A working feature deployed in your environment, not a notebook",
      "A test set and accuracy measurements, so \"is it good enough\" has an answer",
      "Cost per request modelled, with usage limits in place before launch",
      "Fallback behaviour for provider outages, rate limits and low-confidence results",
      "Documentation on how it works, what it costs and how to change the prompts",
    ],
    notFor: [
      "You want a foundation model trained from scratch. Almost nobody needs this, and you will be told so",
      "You want \"add AI\" with no problem attached. You get help finding the problem first, and that step is never skipped",
      "A wrong answer is unacceptable and there is no way to put a human in the loop",
    ],
    stance: {
      claim: "Most AI projects fail on measurement, not on the model.",
      detail:
        "Getting a plausible answer out of a language model takes an afternoon. Knowing whether it is right often enough to put in front of your customers takes a test set, a threshold and a fallback. Projects that skip that part ship something impressive in a demo and unusable in production.",
    },
    stack: ["Python", "Claude", "OpenAI", "Azure AI", "LangChain", "Vector databases", "FastAPI"],
    typicalTimeline: "2-8 weeks depending on scope",
    body: {
      problem:
        "AI is easy to buy and hard to get value from. The gap is rarely the model. It is that nobody defined what success looks like, so there is no way to tell whether the thing works. Projects stall in an endless prototype phase or, worse, ship without testing and quietly give customers wrong answers with total confidence.",
      approach: [
        {
          title: "It starts from your process, not the technology",
          detail:
            "The manual work you want gone and how often it happens. If a database query or a form would solve it better, that is what you will be told.",
        },
        {
          title: "You define what good looks like first",
          detail:
            "A test set of real examples with known correct answers. Without it, \"it seems to work\" is the only quality bar, and it is not one you can defend to a customer.",
        },
        {
          title: "The narrow version goes live first",
          detail:
            "One use case, deployed, measured and in front of real users. Breadth comes after something is demonstrably working.",
        },
        {
          title: "It is designed for being wrong",
          detail:
            "Confidence thresholds, human review queues and graceful behaviour when a provider is down. In anything customer-facing, the failure path matters more than the happy path.",
        },
        {
          title: "Your costs are controlled before launch",
          detail:
            "Per-request cost modelled against realistic volume, with caching and limits in place. An AI feature that gets expensive at scale is a business problem, not just a technical one.",
        },
      ],
      outcome:
        "A feature doing a specific job, with numbers showing how well it does it and what it costs to run. You can decide whether to expand it on evidence, not enthusiasm.",
    },
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

/** Declaration order is display order: most widely needed first. */
export const orderedServices = services;
