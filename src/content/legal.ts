import { site } from "./site";

export type LegalSection = { heading: string; body: string[] };
export type LegalDoc = {
  title: string;
  intro: string;
  /** Plain-language summary shown above the full text. */
  summary?: string[];
  updated: string;
  sections: LegalSection[];
};

/** ISO date of the last substantive change; drives the sitemap `lastmod` and the visible "Last updated" line. */
export const legalUpdatedIso = "2026-10-29";
const updated = "29 October 2026";

const party = `${site.legal.contractingParty} (trading as ${site.name}), an individual based in India`;

export const privacyPolicy: LegalDoc = {
  title: "Privacy Policy",
  intro: `This policy explains what personal information ${site.name} collects through this website and when you contact us, why we use it, who it is shared with, and the rights you have wherever you live. It is written to meet the transparency requirements of the EU and UK GDPR and India's Digital Personal Data Protection Act, 2023, and we give everyone the same rights whichever country they are in.`,
  summary: [
    "We collect only what you choose to send us: through the contact form, email, WhatsApp or a call.",
    "We run no analytics, advertising trackers or cookies of our own, and we never sell your information or share it for advertising.",
    "Contact form messages pass through a form-handling service (Web3Forms) and its infrastructure providers. They are listed below.",
    `You can ask us to show, correct or delete your information at any time: ${site.email}.`,
  ],
  updated,
  sections: [
    {
      heading: "Who we are",
      body: [
        `The controller of your personal information (the "data fiduciary" under India's DPDP Act) is ${party}. Contact: ${site.email}. We are small enough that we have not appointed a data protection officer: privacy questions go straight to the person who handles your data.`,
      ],
    },
    {
      heading: "What we collect",
      body: [
        "Contact form: your name, company (optional), the service and project size you select, and the message you write. You choose what to include.",
        "Email, WhatsApp and calls: if you contact us this way we receive your email address or phone number, your name if you give it, and whatever you send.",
        "Booking a call: if you use a scheduling link we provide, the scheduling service receives the details you enter there under its own privacy policy.",
        "Technical data: our hosting provider keeps standard server logs (such as IP address, browser type, pages requested and timestamps) to keep the website secure and running. We do not use them to profile you.",
        "We do not use analytics, advertising trackers or tracking pixels on this website, and we do not collect special categories of personal information. Please do not include any in your message.",
        "Providing your details is optional. If you leave out a way to reach you we cannot reply, but nothing else depends on it.",
      ],
    },
    {
      heading: "Why we use it, and our legal basis",
      body: [
        "To reply to your enquiry and to scope, quote, deliver and invoice work if you decide to hire us. The legal basis is taking steps at your request before a contract (and performing the contract once there is one), and our legitimate interest in answering people who contact us.",
        "To meet legal obligations such as accounting and tax record-keeping. The legal basis is compliance with the law.",
        "To send you marketing, only if you ask to hear from us. The legal basis is your consent, which you can withdraw at any time.",
        "Where a law such as India's DPDP Act relies on consent, submitting the form or writing to us for the purpose you describe is that consent, and you can withdraw it whenever you like by emailing us.",
        "We do not sell your personal information, we do not share it for cross-context behavioural advertising, and we do not make decisions about you by automated means or profiling.",
      ],
    },
    {
      heading: "Who receives it",
      body: [
        "Web3Forms (web3forms.com) delivers contact form submissions to our inbox and, under its own policy, keeps a copy. It acts as our processor, and it uses Amazon Web Services (hosting, storage and email delivery), Cloudflare (network and security) and Hetzner (application infrastructure). To block spam it may send the submitter's IP address and email address to the spam-filtering services CleanTalk and Akismet.",
        "Our email provider and WhatsApp (Meta) handle messages you send us by those channels, under their own privacy policies.",
        "Our hosting provider processes technical data as described above.",
        "Professional advisers such as accountants, and authorities, where the law requires us to share information or where it is needed to protect legal rights.",
        "If an engagement needs another specialist, we tell you first and only share what they need, under a confidentiality agreement.",
      ],
    },
    {
      heading: "International transfers",
      body: [
        "We are based in India, so information you send us is transferred to and stored in India, as well as in the countries where our providers operate their infrastructure.",
        "Where information moves out of the European Economic Area, the UK or Switzerland, we rely on appropriate safeguards such as the Standard Contractual Clauses. Our form provider states that it transfers data on that basis under its Data Processing Agreement. Email us if you would like details of the safeguards that apply to you.",
      ],
    },
    {
      heading: "How long we keep it",
      body: [
        "Enquiries that do not lead to a project are kept for up to 12 months and then deleted from our systems. Records for paid engagements are kept for as long as accounting and tax rules require.",
        "Our form provider states that it keeps submissions for a maximum of three years before automatic deletion. We can delete your submission from our side, and from the provider's, on request.",
        "Server logs are kept by our hosting provider for a short period and then deleted.",
      ],
    },
    {
      heading: "Your rights",
      body: [
        "Wherever you live, you can ask us to: tell you what we hold about you and give you a copy; correct it; delete it; restrict how we use it; stop using it where we rely on our legitimate interests; and give it to you in a portable format. You can also withdraw consent at any time. Email " + site.email + " and we will respond within one month, or sooner if the law of your location requires.",
        "If you are in India, the DPDP Act also gives you the right to grievance redressal and to nominate another person to exercise your rights if you die or cannot do so yourself. Our grievance contact is " + site.legal.contractingParty + " at " + site.email + ". We aim to resolve grievances within 30 days and will always do so within the time the law sets (currently 90 days under the DPDP Rules).",
        "If you are a California resident, you have the right to know, correct and delete the personal information we hold, and to opt out of its sale or sharing. We do neither, so there is nothing to opt out of. We do not discriminate against anyone who exercises these rights.",
        "You also have the right to complain to your local data protection authority, for example the Information Commissioner's Office in the UK or your national authority in the EU. We would appreciate the chance to put things right first. In India you may complain to the Data Protection Board of India once you have raised the matter with us and are not satisfied with our response.",
      ],
    },
    {
      heading: "Cookies and tracking signals",
      body: [
        "We do not set cookies of our own and do not track you across other sites. Details are in our Cookie Policy. Because we do not track, there is nothing to switch off, and we respect browser signals such as Global Privacy Control and Do Not Track by default.",
      ],
    },
    {
      heading: "Security",
      body: [
        "This website is served over HTTPS and our providers encrypt data in transit. No system is perfectly secure, so please do not send passwords, payment card details or other highly sensitive information through the contact form. If we ever learn of a breach that affects you, we will tell you and the relevant authorities as the law requires.",
      ],
    },
    {
      heading: "Children",
      body: ["This website is aimed at businesses and adults and is not intended for anyone under 18. We do not knowingly collect information from children, and will delete it if we learn we have."],
    },
    {
      heading: "Changes to this policy",
      body: [
        `We update this policy when our practices or the law change, and we change the date at the top of this page. If we ever add analytics or anything else that needs your consent, we will ask for it first. This version was last updated on ${updated}.`,
      ],
    },
    {
      heading: "Contact us",
      body: [`Questions, requests or complaints about your personal information: ${site.email}.`],
    },
  ],
};

export const termsOfService: LegalDoc = {
  title: "Terms of Service",
  intro: `These terms cover your use of this website and set the general basis on which ${site.name} offers its services to businesses and individuals. Specific engagements are governed by a written proposal or agreement, which takes priority if it differs from this page.`,
  summary: [
    "Enquiries and calls are free and create no obligation. A project starts only when you accept a written proposal.",
    "Prices are fixed in the proposal. You own the deliverables once they are paid for.",
    "We carry out work with reasonable skill and care, and our liability is limited as set out below.",
    "If you are a consumer, nothing here removes the rights your local law gives you.",
  ],
  updated,
  sections: [
    {
      heading: "Who you are contracting with",
      body: [`${site.legal.note} Services are provided by ${party}.`],
    },
    {
      heading: "Who these terms apply to",
      body: [
        "We work with businesses and with individuals. Where you are an individual buying for personal rather than business purposes (a consumer), these terms apply alongside the mandatory consumer protections of the country where you live, and those protections are not reduced by anything below.",
      ],
    },
    {
      heading: "Using this website",
      body: [
        "The content on this website is general information about our services, not advice for your particular situation, and is provided as is. We try to keep it accurate and current but cannot promise it is error-free.",
        "Please do not misuse the site, attempt to disrupt or probe it, scrape it at a rate that affects other visitors, or use the contact form to send spam, malware or unlawful content.",
        "All text, design and images on this website belong to us or are used with permission. You may not copy them for commercial use without written consent. Links to third-party sites are provided for convenience and we are not responsible for their content.",
      ],
    },
    {
      heading: "Enquiries and proposals",
      body: [
        "Sending an enquiry or booking a discovery call is free and does not create a contract. A project begins only when you accept a written proposal and any agreed advance payment has been received.",
        "Estimates of cost and timeline in a proposal depend on the scope described and on you providing access, content, decisions and feedback on time. Changes to scope are quoted separately and never applied silently.",
      ],
    },
    {
      heading: "Fees and payment",
      body: [
        "Fees, milestones and payment terms are set out in each proposal, in the currency the proposal states. Invoices are payable within the period stated on the invoice. Applicable taxes, such as GST or VAT, are added where they apply, and you are responsible for any bank or transfer charges on your side.",
        "If an invoice is overdue we may pause work after giving you written notice, and resume once it is paid.",
        "Third-party costs, such as cloud hosting, software licences, domain names and API usage, are not included in our fees unless the proposal says so. They are billed by the provider and held in your own accounts wherever possible.",
        "Advance payments are generally non-refundable once work has started, to the extent of work completed. Any other refund arrangement will be written into the proposal.",
      ],
    },
    {
      heading: "Cancelling as a consumer",
      body: [
        "If you are a consumer in the European Union, the United Kingdom or another place with similar rules, you may have a legal right to cancel a services contract made at a distance within 14 days of agreeing to it, without giving a reason.",
        "If you ask us in writing to start work during that period and then cancel, you must pay a proportionate amount for the work already done up to the moment you tell us. If the work has been fully performed, the right to cancel ends once you have expressly agreed to the work starting and acknowledged that you lose that right when it is complete. We will ask you to confirm both in writing before we begin.",
        "To cancel, email us at " + site.email + " with a clear statement that you wish to cancel.",
      ],
    },
    {
      heading: "Your materials and ownership of the work",
      body: [
        "You keep ownership of the content, data and accounts you give us. You confirm you have the right to share them and that doing so does not breach anyone else's rights.",
        "On full payment, you receive ownership of the deliverables created specifically for you. We keep ownership of our pre-existing tools, templates and know-how, and grant you a perpetual licence to use them as part of the deliverables. Open-source components stay under their own licences. We may mention the engagement in our portfolio unless you ask us not to.",
      ],
    },
    {
      heading: "Confidentiality and personal data",
      body: [
        "We treat non-public information about your business and systems as confidential and use it only to deliver the work. We are happy to sign a separate NDA before a project begins.",
        "Where an engagement means we handle personal data on your behalf, you remain responsible for that data and we act on your instructions. We will sign a data processing agreement on request.",
      ],
    },
    {
      heading: "Warranties and liability",
      body: [
        "We carry out services with reasonable skill and care and will correct deliverables that do not match the agreed scope, reported within the support period stated in the proposal. We cannot guarantee specific business outcomes, search rankings, the availability of third-party platforms or the behaviour of AI models, which can produce inaccurate results.",
        "To the extent permitted by law, our total liability for any claim arising from an engagement is limited to the fees you paid for that engagement, and we are not liable for indirect or consequential loss such as lost profit, lost revenue or lost data.",
        "Nothing in these terms limits liability that cannot be limited by law, including liability for fraud, or for death or personal injury caused by negligence.",
      ],
    },
    {
      heading: "Events outside our control",
      body: [
        "Neither side is responsible for delay or failure caused by events beyond its reasonable control, such as outages of third-party platforms, power or internet failures, natural disasters or government action. We will tell you promptly and agree a revised timeline.",
      ],
    },
    {
      heading: "Ending an engagement",
      body: [
        "Either party may end an engagement with written notice. You pay for work completed and costs incurred up to that point, and we hand over completed work once those amounts are paid.",
      ],
    },
    {
      heading: "General",
      body: [
        "These terms and the proposal for your engagement are the whole agreement between us on their subject. If a part is found unenforceable, the rest stays in force. Neither side may transfer the agreement without the other's written consent, except that we may use trusted subcontractors, who remain our responsibility. We may update these terms, and changes do not affect an engagement already under way.",
      ],
    },
    {
      heading: "Governing law and disputes",
      body: [
        "These terms are governed by the laws of India. If a dispute arises, both sides will first try in good faith to resolve it by discussion. If that fails, the courts at Pune, Maharashtra have jurisdiction.",
        "If you are a consumer, this does not take away the protection of the mandatory consumer laws of the country where you live, or your right to bring a claim in your local courts where the law gives you that right.",
      ],
    },
    {
      heading: "Contact",
      body: [`Questions about these terms: ${site.email}.`],
    },
  ],
};

export const cookiePolicy: LegalDoc = {
  title: "Cookie Policy",
  intro: `This page explains how ${site.name} uses cookies and similar technologies on this website. In short, we do not use any that need your consent.`,
  summary: [
    "This website sets no cookies of its own and uses no analytics, advertising or social-media trackers.",
    "It does not use your browser's local storage to track you.",
    "That is why there is no cookie banner: there is nothing to accept or reject.",
  ],
  updated,
  sections: [
    {
      heading: "What we use",
      body: [
        "We do not set cookies on this website, and we do not store identifiers in your browser's local or session storage. Fonts, images and code are served from this website's own domain, so loading a page does not send your details to a font or script provider.",
        "Our hosting provider keeps standard server logs (such as IP address, browser type and pages requested) for security and to keep the site running. These are not cookies and are not used to track you.",
      ],
    },
    {
      heading: "When you send us a message",
      body: [
        "When you submit the contact form, your browser sends the message to our form provider, Web3Forms, which uses Cloudflare for network security. A service like this can set or read small technical cookies that are strictly necessary to deliver and protect the request. We do not control these and they are not used for advertising.",
      ],
    },
    {
      heading: "Links to other sites",
      body: [
        "If you follow a link to a third party, for example to message us on WhatsApp, book a call through a scheduling service, or visit our GitHub or LinkedIn profiles, that site may set its own cookies under its own policy.",
      ],
    },
    {
      heading: "Why there is no cookie banner",
      body: [
        "Laws such as the EU ePrivacy rules require consent for cookies and similar technologies that are not strictly necessary. Because this website sets none, there is nothing to ask consent for. If that changes, for example if we add analytics, we will ask for your consent first, give you a clear choice to refuse, and update this page.",
        "We respect browser privacy signals such as Global Privacy Control and Do Not Track by default, and we do not sell or share your information for advertising.",
      ],
    },
    {
      heading: "Controlling cookies",
      body: [
        "You can block or delete cookies in your browser settings. Because we do not rely on cookies for any feature of this site, doing so will not stop it working.",
      ],
    },
    {
      heading: "Contact",
      body: [`Questions about this policy: ${site.email}. See also our Privacy Policy.`],
    },
  ],
};
