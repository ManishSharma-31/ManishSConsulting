import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { LegalPage } from "@/components/site/LegalPage";
import { cookiePolicy } from "@/content/legal";

export const Route = createFileRoute("/cookies")({
  head: () =>
    seo({
      title: "Cookie Policy | Manish S Consulting",
      description: "How Manish S Consulting uses cookies and similar technologies.",
      path: "/cookies",
    }),
  component: () => <LegalPage doc={cookiePolicy} />,
});
