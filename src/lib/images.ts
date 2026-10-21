import svcAi from "@/assets/svc-ai.jpg";
import svcAutomation from "@/assets/svc-automation.jpg";
import svcWeb from "@/assets/svc-web.jpg";
import svcCloud from "@/assets/svc-cloud.jpg";
import svcDevops from "@/assets/svc-devops.jpg";
import svcIt from "@/assets/svc-it.jpg";
import pPipeline from "@/assets/project-pipeline.jpg";
import pTerraform from "@/assets/project-terraform.jpg";
import pGo from "@/assets/project-go.jpg";

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
};
