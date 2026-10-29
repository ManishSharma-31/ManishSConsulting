import svcAi from "@/assets/svc-ai.webp";
import svcAutomation from "@/assets/svc-automation.webp";
import svcWeb from "@/assets/svc-web.webp";
import svcCloud from "@/assets/svc-cloud.webp";
import svcDevops from "@/assets/svc-devops.webp";
import svcIt from "@/assets/svc-it.webp";
import pPipeline from "@/assets/project-pipeline.webp";
import pTerraform from "@/assets/project-terraform.webp";
import pGo from "@/assets/project-go.webp";
import pLeadstock from "@/assets/project-leadstock.svg";

export const serviceImages: Record<string, string> = {
  ai: svcAi,
  automation: svcAutomation,
  "web-development": svcWeb,
  cloud: svcCloud,
  devops: svcDevops,
  "it-solutions": svcIt,
};

export const projectImages: Record<string, string> = {
  "gitlab-pipeline-rebuild": pPipeline,
  "terraform-migration": pTerraform,
  "go-service-build": pGo,
  "leadstock-crm": pLeadstock,
};
