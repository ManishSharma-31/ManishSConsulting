import { createFileRoute } from "@tanstack/react-router";
import { seo, breadcrumbLd } from "@/lib/seo";
import { pageLd } from "@/lib/schema";
import { LegalPage } from "@/components/site/LegalPage";
import { termsOfService } from "@/content/legal";

export const Route = createFileRoute("/terms")({
  head: () =>
    seo({
      title: "Terms of Service | Manish S Consulting",
      description:
        "The terms for using this website and hiring Manish S Consulting: proposals, fixed fees, ownership of work, liability and consumer rights.",
      path: "/terms",
      jsonLd: [
        pageLd("WebPage", "Terms of Service", "/terms", "The terms for using this website and engaging Manish S Consulting."),
        breadcrumbLd([{ name: "Home", path: "/" }, { name: "Terms of Service", path: "/terms" }]),
      ],
    }),
  component: () => <LegalPage doc={termsOfService} />,
});
