import { MapPinned, ShieldCheck, Users } from "lucide-react";
import { siteConfig } from "../../config/site";
import { images } from "../../data/images";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

const points = [
  { icon: Users, label: "Locally Owned & Operated" },
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: MapPinned, label: "Serving the Local Community" },
];

export function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal className="overflow-hidden rounded-2xl border border-ink-100 shadow-[var(--shadow-card)]">
            <img
              src={images.about}
              alt={`A member of the ${siteConfig.business.name} team at work`}
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </Reveal>

          <Reveal delay={120}>
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-wide text-accent-600">
              About Us
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
              About {siteConfig.business.name}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              {siteConfig.business.foundedNote}
            </p>
            <p className="mt-4 leading-relaxed text-ink-600">
              {siteConfig.business.description}
            </p>

            <ul className="mt-8 space-y-4">
              {points.map((point) => {
                const Icon = point.icon;
                return (
                  <li key={point.label} className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <span className="font-semibold text-brand-900">{point.label}</span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
