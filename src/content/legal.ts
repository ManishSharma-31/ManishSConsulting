import { site } from "./site";

export type LegalSection = { heading: string; body: string[] };
export type LegalDoc = { title: string; intro: string; updated: string; sections: LegalSection[] };

const updated = "21 October 2026";
const party = `${site.legal.contractingParty} (trading as ${site.name}), Pune, Maharashtra, India`;

export const privacyPolicy: LegalDoc = {
  title: "Privacy Policy",
  intro: `This policy explains what personal information ${site.name} collects through this website, why, and what your rights are. It is written to follow India's Digital Personal Data Protection Act, 2023 and is kept deliberately short.`,
  updated,
  sections: [
    {
      heading: "Who we are",
      body: [`The data fiduciary for this website is ${party}. You can reach us at ${site.email}.`],
    },
    {
      heading: "What we collect",
      body: [
        "Contact form: your name, company (optional), the service and budget range you select, and the message you write. You choose what to include.",
        "WhatsApp and email: if you contact us by WhatsApp or email, we receive your phone number or email address and whatever you send.",
        "We do not run analytics, advertising trackers or tracking pixels on this website, and we do not collect information about your browsing.",
      ],
    },
    {
      heading: "Why we use it",
      body: [
        "To reply to your enquiry, scope a project and, if you decide to work with us, deliver and invoice the work.",
        "We do not sell your information, and we do not use it for marketing unless you ask to hear from us.",
      ],
    },
    {
      heading: "Who processes it",
      body: [
        "Contact form submissions are delivered to our inbox through Web3Forms (web3forms.com), a form-handling service. They receive the submission in order to forward it to us.",
        "WhatsApp messages are handled by WhatsApp (Meta) under their own privacy policy.",
        "We share information with other parties only where the law requires it or where you ask us to.",
      ],
    },
    {
      heading: "How long we keep it",
      body: [
        "Enquiries that do not lead to a project are kept for up to 12 months and then deleted. Records for paid engagements are kept for as long as accounting and tax rules require.",
      ],
    },
    {
      heading: "Your rights",
      body: [
        "You can ask us to tell you what we hold about you, correct it, or delete it, and you can withdraw consent at any time. Email " + site.email + " and we will respond within a reasonable time, normally within 30 days.",
        "If you are not satisfied with our response, you may complain to the Data Protection Board of India.",
      ],
    },
    {
      heading: "Security",
      body: [
        "This website is served over HTTPS. No system is perfectly secure, so please avoid sending passwords, payment card details or other highly sensitive information through the contact form.",
      ],
    },
    {
      heading: "Children",
      body: ["This website is aimed at businesses and is not intended for anyone under 18."],
    },
    {
      heading: "Changes",
      body: ["If we change this policy we will update the date at the top of this page."],
    },
  ],
};

export const termsOfService: LegalDoc = {
  title: "Terms of Service",
  intro: `These terms cover your use of this website and set the general basis on which ${site.name} offers its services. Specific engagements are governed by a written proposal or agreement, which takes priority if it differs from this page.`,
  updated,
  sections: [
    {
      heading: "Who you are contracting with",
      body: [
        `${site.legal.note} Services are provided by ${party}.`,
      ],
    },
    {
      heading: "Using this website",
      body: [
        "The content on this website is provided for general information. Please do not misuse the site, attempt to disrupt it, or use the contact form to send spam or unlawful content.",
        "All text, design and images on this website belong to us or are used with permission. You may not copy them for commercial use without written consent.",
      ],
    },
    {
      heading: "Enquiries and proposals",
      body: [
        "Sending an enquiry or booking a discovery call does not create a contract. A project begins only when you accept a written proposal and any agreed advance payment has been received.",
        "Estimates of cost and timeline in a proposal depend on the scope described and on you providing access, content and feedback on time.",
      ],
    },
    {
      heading: "Fees and payment",
      body: [
        "Fees, milestones and payment terms are set out in each proposal. Invoices are payable within the period stated on the invoice. Amounts are in Indian rupees unless the proposal says otherwise, and applicable taxes are added where they apply.",
        "Advance payments are generally non-refundable once work has started, to the extent of work completed. Any other refund arrangement will be written into the proposal.",
      ],
    },
    {
      heading: "Your materials and ownership of the work",
      body: [
        "You keep ownership of the content, data and accounts you give us. You confirm you have the right to share them.",
        "On full payment, you receive ownership of the deliverables created specifically for you. We keep ownership of our pre-existing tools, templates and know-how, and grant you a licence to use them as part of the deliverables. We may mention the engagement in our portfolio unless you ask us not to.",
      ],
    },
    {
      heading: "Confidentiality",
      body: [
        "We treat non-public information about your business and systems as confidential and use it only to deliver the work. We are happy to sign a separate NDA before a project begins.",
      ],
    },
    {
      heading: "Warranties and liability",
      body: [
        "We carry out services with reasonable skill and care. We cannot guarantee specific business outcomes, search rankings, uptime of third-party platforms or the behaviour of AI models.",
        "To the extent permitted by law, our total liability for any claim arising from an engagement is limited to the fees you paid for that engagement, and we are not liable for indirect or consequential loss such as lost profit or lost data.",
      ],
    },
    {
      heading: "Ending an engagement",
      body: [
        "Either party may end an engagement with written notice. You pay for work completed and costs incurred up to that point, and we hand over completed work once those amounts are paid.",
      ],
    },
    {
      heading: "Governing law",
      body: [
        "These terms are governed by the laws of India. Courts at Pune, Maharashtra have jurisdiction, after both sides have first tried in good faith to resolve the matter by discussion.",
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
  intro: `This page explains how ${site.name} uses cookies and similar technologies on this website.`,
  updated,
  sections: [
    {
      heading: "Short version",
      body: [
        "This website does not set advertising or analytics cookies, and we do not track visitors across other sites.",
      ],
    },
    {
      heading: "What your browser may store",
      body: [
        "The site may use your browser's local storage for small convenience settings, such as remembering a preference. This stays on your device and is not sent to us.",
        "Our hosting provider may keep standard server logs (such as IP address, browser type and the pages requested) for security and to keep the site running.",
      ],
    },
    {
      heading: "Third-party services",
      body: [
        "If you choose to book a call through a scheduling link, or to message us on WhatsApp, you will be taken to that third party's website, which may set its own cookies under its own policy.",
        "Fonts and similar assets may be loaded from third-party providers, which can receive your IP address when they are fetched.",
      ],
    },
    {
      heading: "Controlling cookies",
      body: [
        "You can block or delete cookies in your browser settings. Because we do not rely on cookies for the main features of this site, doing so will not stop it working.",
      ],
    },
    {
      heading: "Changes and contact",
      body: [`If this changes, for example if we add analytics, we will update this page and add a consent notice. Questions: ${site.email}.`],
    },
  ],
};
