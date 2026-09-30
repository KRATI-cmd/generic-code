import {
  CarFront,
  Sparkles,
  Gem,
  Palette,
  Disc,
  Building2,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  name: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: CarFront,
    name: "Exterior Detailing",
    description:
      "Hand wash, clay bar, and finish work that brings back a deep, showroom-quality shine.",
  },
  {
    icon: Sparkles,
    name: "Interior Detailing",
    description:
      "Deep cleaning, vacuuming, and conditioning to refresh every surface inside your vehicle.",
  },
  {
    icon: Palette,
    name: "Full Detail Package",
    description:
      "Complete interior and exterior detail for a bumper-to-bumper refresh in one visit.",
  },
  {
    icon: Gem,
    name: "Ceramic Coating",
    description:
      "Long-lasting protective coating that keeps your paint glossy and easier to maintain.",
  },
  {
    icon: Disc,
    name: "Paint Correction",
    description:
      "Swirl and light scratch correction to restore clarity and depth to your paintwork.",
  },
  {
    icon: Building2,
    name: "Fleet & Commercial Detailing",
    description:
      "On-site detailing for business fleets and commercial vehicles, scheduled around your operations.",
  },
];
