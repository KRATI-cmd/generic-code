import {
  UserCheck,
  ShieldCheck,
  MessageCircle,
  FileText,
  CalendarClock,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    icon: UserCheck,
    title: "Experienced Detailers",
    description: "Our team brings a careful, hands-on approach to every vehicle.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Workmanship",
    description: "We take pride in doing the job right the first time, every time.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description: "You'll always know what's included and what to expect.",
  },
  {
    icon: FileText,
    title: "Transparent Pricing",
    description: "Straightforward package pricing before we start any work.",
  },
  {
    icon: CalendarClock,
    title: "Convenient Mobile Scheduling",
    description: "We come to your home, office, or job site — no drop-off required.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-Focused Service",
    description: "Your satisfaction guides how we approach every detail.",
  },
];
