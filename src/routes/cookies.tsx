import { createFileRoute } from "@tanstack/react-router";
import { seo, breadcrumbLd } from "@/lib/seo";
import { pageLd } from "@/lib/schema";
import { LegalPage } from "@/components/site/LegalPage";
import { cookiePolicy } from "@/content/legal";

export const Route = createFileRoute("/cookies")({
  head: () =>
    seo({
      title: "Cookie Policy | SunCrest Technology",
      description:
        "This website sets no cookies of its own and uses no analytics or ad trackers, so there is no cookie banner. Here is exactly what that means.",
      path: "/cookies",
      jsonLd: [
        pageLd("WebPage", "Cookie Policy", "/cookies", "How SunCrest Technology uses cookies and similar technologies."),
        breadcrumbLd([{ name: "Home", path: "/" }, { name: "Cookie Policy", path: "/cookies" }]),
      ],
    }),
  component: () => <LegalPage doc={cookiePolicy} />,
});
