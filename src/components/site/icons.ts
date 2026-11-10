import type { LucideIcon } from "lucide-react";
import {
  Building2,
  FileText,
  Handshake,
  LineChart,
  PackageCheck,
  PhoneCall,
  Rocket,
  Store,
  TrendingUp,
  User,
} from "lucide-react";

/** One icon per process step, in the same order as `processSteps`. */
export const stepIcons: LucideIcon[] = [PhoneCall, FileText, LineChart, PackageCheck];

/** One icon per entry in `audiences`, in the same order. */
export const audienceIcons: LucideIcon[] = [User, Store, TrendingUp, Building2, Handshake, Rocket];
