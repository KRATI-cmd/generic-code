import { PhoneCall, ClipboardCheck, CheckCircle2, type LucideIcon } from "lucide-react";

export interface ProcessStep {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Book Online or Call",
    description: "Tell us about your vehicle and the package you're interested in.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "We Come To You",
    description: "We'll confirm a time and bring everything needed to your location.",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Enjoy the Shine",
    description: "Drive away with a fresh, showroom-quality finish, inside and out.",
  },
];
