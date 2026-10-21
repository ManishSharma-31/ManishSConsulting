import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { LegalPage } from "@/components/site/LegalPage";
import { privacyPolicy } from "@/content/legal";

export const Route = createFileRoute("/privacy")({
  head: () =>
    seo({
      title: "Privacy Policy | Manish S Consulting",
      description: "What personal information Manish S Consulting collects, why, and your rights.",
      path: "/privacy",
    }),
  component: () => <LegalPage doc={privacyPolicy} />,
});
