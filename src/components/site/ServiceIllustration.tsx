import type { ReactNode } from "react";

/**
 * Original, lightweight SVG illustrations, one per service. They are drawn with
 * the site's own colour tokens so they follow the theme, and cost a few KB each
 * instead of a photo download. They show the kind of thing the service produces
 * (a site, a status board, a cloud layout, a pipeline, a workflow, an assistant)
 * and make no claims: no figures, names or results appear in them.
 */

const labels: Record<string, string> = {
  "web-development": "Illustration of a website in a browser window with a fast-loading badge",
  "it-solutions": "Illustration of an IT status board with healthy systems, a security shield and a monthly summary",
  cloud: "Illustration of a cloud connected to servers, a database and storage",
  devops: "Illustration of a release pipeline: build, test, deploy and monitor, with a rollback path",
  automation: "Illustration of two business apps connected by an automated workflow",
  ai: "Illustration of an AI assistant answering a question and citing its source",
};

function Frame({ slug, children }: { slug: string; children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 640 400"
      role="img"
      aria-label={labels[slug]}
      className="h-auto w-full"
      fontFamily="inherit"
    >
      <defs>
        <radialGradient id={`glow-${slug}`} cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
        </radialGradient>
        <pattern id={`grid-${slug}`} width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0V32" className="fill-none stroke-border" strokeWidth="1" opacity="0.5" />
        </pattern>
        <marker id={`arrow-${slug}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M1 1 9 5 1 9z" className="fill-primary" />
        </marker>
      </defs>
      <rect width="640" height="400" className="fill-surface" />
      <rect width="640" height="400" fill={`url(#grid-${slug})`} />
      <rect width="640" height="400" fill={`url(#glow-${slug})`} />
      {children}
    </svg>
  );
}

const Text = ({ x, y, children, size = 13, className = "fill-muted-foreground", anchor = "start", weight = 500 }: {
  x: number; y: number; children: ReactNode; size?: number; className?: string; anchor?: "start" | "middle" | "end"; weight?: number;
}) => (
  <text x={x} y={y} fontSize={size} fontWeight={weight} textAnchor={anchor} className={className}>
    {children}
  </text>
);

function Web() {
  return (
    <Frame slug="web-development">
      <rect x="60" y="48" width="520" height="304" rx="16" className="fill-card stroke-border" />
      <path d="M60 64a16 16 0 0 1 16-16h488a16 16 0 0 1 16 16v26H60z" className="fill-secondary" />
      <circle cx="84" cy="69" r="5" className="fill-destructive" opacity="0.8" />
      <circle cx="102" cy="69" r="5" className="fill-amber" />
      <circle cx="120" cy="69" r="5" className="fill-primary" />
      <rect x="150" y="59" width="280" height="20" rx="10" className="fill-background" />
      <Text x={164} y={73} size={11}>yourbusiness.com</Text>
      <rect x="84" y="112" width="240" height="16" rx="8" className="fill-foreground" />
      <rect x="84" y="138" width="180" height="16" rx="8" className="fill-foreground" opacity="0.85" />
      <rect x="84" y="170" width="250" height="8" rx="4" className="fill-muted-foreground" opacity="0.5" />
      <rect x="84" y="186" width="220" height="8" rx="4" className="fill-muted-foreground" opacity="0.5" />
      <rect x="84" y="214" width="116" height="34" rx="17" className="fill-primary" />
      <Text x={142} y={236} size={13} anchor="middle" className="fill-primary-foreground" weight={700}>Get started</Text>
      <rect x="364" y="108" width="192" height="140" rx="12" className="fill-secondary" />
      <polyline points="380,222 410,196 440,208 474,164 506,176 540,132" className="fill-none stroke-primary" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="540" cy="132" r="5" className="fill-primary" />
      {[84, 252, 420].map((x) => (
        <g key={x}>
          <rect x={x} y="268" width="136" height="60" rx="10" className="fill-secondary" />
          <rect x={x + 14} y="282" width="52" height="8" rx="4" className="fill-foreground" opacity="0.8" />
          <rect x={x + 14} y="298" width="92" height="6" rx="3" className="fill-muted-foreground" opacity="0.5" />
        </g>
      ))}
      <g>
        <circle cx="548" cy="330" r="36" className="fill-card stroke-primary" strokeWidth="2" />
        <Text x={548} y={335} size={19} anchor="middle" className="fill-primary" weight={700}>Fast</Text>
        <Text x={548} y={351} size={9} anchor="middle">LOADS QUICKLY</Text>
      </g>
    </Frame>
  );
}

function Support() {
  const rows: [string, string, boolean][] = [
    ["Website", "Healthy", true],
    ["Database backups", "Verified", true],
    ["Security updates", "Applied", true],
    ["SSL certificates", "Renews soon", false],
    ["Monitoring", "Watching", true],
  ];
  return (
    <Frame slug="it-solutions">
      <Text x={60} y={66} size={12} className="fill-primary" weight={700}>SYSTEM STATUS</Text>
      {rows.map(([name, status, ok], i) => (
        <g key={name}>
          <rect x="60" y={82 + i * 56} width="350" height="44" rx="12" className="fill-card stroke-border" />
          <circle cx="86" cy={104 + i * 56} r="6" className={ok ? "fill-primary" : "fill-amber"} />
          <Text x={106} y={109 + i * 56} size={14} className="fill-foreground">{name}</Text>
          <Text x={392} y={109 + i * 56} size={12} anchor="end">{status}</Text>
        </g>
      ))}
      <path d="M515 80 580 104v56c0 48-32 80-65 94-33-14-65-46-65-94v-56z" className="fill-card stroke-primary" strokeWidth="2.5" />
      <polyline points="486,168 508,190 548,142" className="fill-none stroke-primary" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <Text x={515} y={284} size={12} anchor="middle" className="fill-muted-foreground">MONTHLY SUMMARY</Text>
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={452 + i * 26} y={346 - [26, 38, 30, 52, 44][i]!} width="16" height={[26, 38, 30, 52, 44][i]} rx="4" className="fill-primary" opacity={0.35 + i * 0.16} />
      ))}
    </Frame>
  );
}

function Cloud() {
  const servers = [150, 280, 410];
  return (
    <Frame slug="cloud">
      {servers.map((x) => (
        <line key={x} x1={x + 40} y1="290" x2={x < 280 ? 280 : x > 280 ? 360 : 320} y2="218" className="stroke-primary" strokeWidth="2" strokeDasharray="6 6" />
      ))}
      <line x1="232" y1="170" x2="132" y2="170" className="stroke-primary" strokeWidth="2" strokeDasharray="6 6" />
      <line x1="410" y1="170" x2="510" y2="170" className="stroke-primary" strokeWidth="2" strokeDasharray="6 6" />
      <g className="fill-secondary stroke-border" strokeWidth="1.5">
        <circle cx="262" cy="168" r="46" />
        <circle cx="330" cy="138" r="62" />
        <circle cx="402" cy="170" r="46" />
        <rect x="236" y="168" width="194" height="50" rx="25" />
      </g>
      <circle cx="262" cy="170" r="43" className="fill-secondary" />
      <circle cx="330" cy="140" r="59" className="fill-secondary" />
      <circle cx="400" cy="172" r="43" className="fill-secondary" />
      <rect x="240" y="170" width="188" height="46" rx="23" className="fill-secondary" />
      <Text x={332} y={166} size={26} anchor="middle" className="fill-primary" weight={700}>AWS</Text>
      <Text x={332} y={190} size={11} anchor="middle">defined as code</Text>
      {servers.map((x, i) => (
        <g key={x}>
          <rect x={x} y="290" width="80" height="56" rx="10" className="fill-card stroke-border" />
          <rect x={x + 12} y="302" width="56" height="8" rx="4" className="fill-primary" opacity="0.8" />
          <rect x={x + 12} y="318" width="56" height="8" rx="4" className="fill-muted-foreground" opacity="0.4" />
          <circle cx={x + 66} cy="336" r="3" className="fill-primary" />
          <Text x={x + 40} y={366} size={10} anchor="middle">{["Server", "Server", "Server"][i]}</Text>
        </g>
      ))}
      <g>
        <ellipse cx="540" cy="150" rx="30" ry="10" className="fill-card stroke-border" />
        <path d="M510 150v36c0 6 14 12 30 12s30-6 30-12v-36" className="fill-card stroke-border" />
        <ellipse cx="540" cy="186" rx="30" ry="10" className="fill-none stroke-border" />
        <Text x={540} y={224} size={10} anchor="middle">Database</Text>
      </g>
      <g>
        <path d="M104 142h56l-6 54a12 12 0 0 1-12 10h-20a12 12 0 0 1-12-10z" className="fill-card stroke-border" />
        <ellipse cx="132" cy="142" rx="28" ry="8" className="fill-secondary stroke-border" />
        <Text x={132} y={224} size={10} anchor="middle">Storage</Text>
      </g>
    </Frame>
  );
}

function DevOps() {
  const steps = [
    { x: 40, label: "Build" },
    { x: 190, label: "Test" },
    { x: 340, label: "Deploy" },
    { x: 490, label: "Monitor" },
  ];
  return (
    <Frame slug="devops">
      <Text x={40} y={92} size={12} className="fill-primary" weight={700}>MERGE  →  LIVE</Text>
      {steps.map((s, i) => (
        <g key={s.label}>
          <rect x={s.x} y="120" width="110" height="96" rx="16" className="fill-card stroke-border" />
          <circle cx={s.x + 55} cy="156" r="18" className="fill-primary" opacity="0.18" />
          <polyline points={`${s.x + 46},156 ${s.x + 53},163 ${s.x + 66},148`} className="fill-none stroke-primary" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <Text x={s.x + 55} y={196} size={15} anchor="middle" className="fill-foreground" weight={600}>{s.label}</Text>
          {i < steps.length - 1 && <line x1={s.x + 114} y1="168" x2={s.x + 146} y2="168" className="stroke-primary" strokeWidth="2.5" markerEnd="url(#arrow-devops)" />}
        </g>
      ))}
      <path d="M395 232v34h-150v-34" className="fill-none stroke-amber" strokeWidth="2.5" strokeDasharray="7 6" markerEnd="url(#arrow-devops)" />
      <Text x={320} y={292} size={12} anchor="middle" className="fill-amber" weight={600}>One-command rollback</Text>
      <rect x="40" y="322" width="560" height="28" rx="14" className="fill-card stroke-border" />
      <rect x="40" y="322" width="404" height="28" rx="14" className="fill-primary" opacity="0.85" />
      <Text x={60} y={341} size={12} className="fill-primary-foreground" weight={700}>Releases are routine, not events</Text>
    </Frame>
  );
}

function Automation() {
  return (
    <Frame slug="automation">
      <g>
        <rect x="44" y="130" width="140" height="120" rx="16" className="fill-card stroke-border" />
        <rect x="60" y="148" width="60" height="9" rx="4.5" className="fill-foreground" opacity="0.85" />
        {[0, 1, 2].map((i) => (
          <rect key={i} x="60" y={172 + i * 22} width={108 - i * 18} height="8" rx="4" className="fill-muted-foreground" opacity="0.45" />
        ))}
        <Text x={114} y={278} size={12} anchor="middle">Your CRM</Text>
      </g>
      <g>
        <rect x="456" y="130" width="140" height="120" rx="16" className="fill-card stroke-border" />
        <rect x="472" y="148" width="72" height="9" rx="4.5" className="fill-foreground" opacity="0.85" />
        {[0, 1, 2].map((i) => (
          <rect key={i} x="472" y={172 + i * 22} width={108 - i * 12} height="8" rx="4" className="fill-primary" opacity={0.5 - i * 0.1} />
        ))}
        <Text x={526} y={278} size={12} anchor="middle">Your accounts</Text>
      </g>
      <line x1="190" y1="190" x2="262" y2="190" className="stroke-primary" strokeWidth="2.5" markerEnd="url(#arrow-automation)" />
      <line x1="378" y1="190" x2="450" y2="190" className="stroke-primary" strokeWidth="2.5" markerEnd="url(#arrow-automation)" />
      <circle cx="320" cy="190" r="52" className="fill-card stroke-border" strokeWidth="1.5" />
      <circle cx="320" cy="190" r="42" className="fill-none stroke-primary" strokeWidth="12" strokeDasharray="9 7" opacity="0.9" />
      <circle cx="320" cy="190" r="26" className="fill-card stroke-primary" strokeWidth="2" />
      <polyline points="308,190 317,200 334,180" className="fill-none stroke-primary" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <Text x={320} y={268} size={12} anchor="middle" className="fill-foreground" weight={600}>Runs on its own</Text>
      <rect x="170" y="312" width="300" height="34" rx="17" className="fill-card stroke-border" />
      <circle cx="196" cy="329" r="8" className="fill-none stroke-primary" strokeWidth="2" />
      <polyline points="196,324 196,329 200,331" className="fill-none stroke-primary" strokeWidth="2" strokeLinecap="round" />
      <Text x={214} y={334} size={12} className="fill-foreground">Failures alert a person, never silent</Text>
    </Frame>
  );
}

function AI() {
  return (
    <Frame slug="ai">
      <rect x="60" y="60" width="300" height="52" rx="18" className="fill-secondary" />
      <Text x={82} y={92} size={14} className="fill-foreground">What is our refund policy?</Text>
      <rect x="240" y="140" width="340" height="132" rx="18" className="fill-card stroke-primary" strokeWidth="1.5" />
      <path d="M268 160l5 11 11 5-11 5-5 11-5-11-11-5 11-5z" className="fill-primary" />
      <rect x="298" y="162" width="250" height="9" rx="4.5" className="fill-foreground" opacity="0.8" />
      <rect x="258" y="190" width="290" height="8" rx="4" className="fill-muted-foreground" opacity="0.5" />
      <rect x="258" y="208" width="240" height="8" rx="4" className="fill-muted-foreground" opacity="0.5" />
      <rect x="258" y="232" width="160" height="26" rx="13" className="fill-secondary stroke-border" />
      <Text x={338} y={249} size={11} anchor="middle">Source: your policy document</Text>
      <Text x={60} y={316} size={12} className="fill-muted-foreground">Answer confidence</Text>
      <rect x="60" y="326" width="260" height="12" rx="6" className="fill-card stroke-border" />
      <rect x="60" y="326" width="214" height="12" rx="6" className="fill-primary" />
      <rect x="372" y="302" width="208" height="40" rx="12" className="fill-card stroke-border" />
      <circle cx="396" cy="322" r="7" className="fill-amber" />
      <Text x={412} y={327} size={12} className="fill-foreground">Unsure? A person checks</Text>
    </Frame>
  );
}

const illustrations: Record<string, () => ReactNode> = {
  "web-development": Web,
  "it-solutions": Support,
  cloud: Cloud,
  devops: DevOps,
  automation: Automation,
  ai: AI,
};

export function ServiceIllustration({ slug, className = "" }: { slug: string; className?: string }) {
  const Art = illustrations[slug];
  if (!Art) return null;
  return (
    <div className={`overflow-hidden rounded-3xl border border-border bg-surface ${className}`}>
      <Art />
    </div>
  );
}
