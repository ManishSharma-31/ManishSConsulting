import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { LegalPage } from "@/components/site/LegalPage";
import { termsOfService } from "@/content/legal";

export const Route = createFileRoute("/terms")({
  head: () =>
    seo({
      title: "Terms of Service | Manish S Consulting",
      description: "The terms for using this website and engaging Manish S Consulting.",
      path: "/terms",
    }),
  component: () => <LegalPage doc={termsOfService} />,
});
