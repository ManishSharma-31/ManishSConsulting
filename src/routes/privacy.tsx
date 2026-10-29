import { createFileRoute } from "@tanstack/react-router";
import { seo, breadcrumbLd } from "@/lib/seo";
import { pageLd } from "@/lib/schema";
import { LegalPage } from "@/components/site/LegalPage";
import { privacyPolicy } from "@/content/legal";

export const Route = createFileRoute("/privacy")({
  head: () =>
    seo({
      title: "Privacy Policy | Manish S Consulting",
      description:
        "What personal information Manish S Consulting collects, who receives it, how long it is kept, and your rights under GDPR, DPDP and CCPA-style laws.",
      path: "/privacy",
      jsonLd: [
        pageLd("WebPage", "Privacy Policy", "/privacy", "How Manish S Consulting collects, uses and protects personal information."),
        breadcrumbLd([{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy" }]),
      ],
    }),
  component: () => <LegalPage doc={privacyPolicy} />,
});
