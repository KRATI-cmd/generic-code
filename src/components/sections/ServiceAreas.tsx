import { MapPin, Navigation } from "lucide-react";
import { siteConfig } from "../../config/site";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

export function ServiceAreas() {
  return (
    <section id="service-areas" className="bg-ink-50 py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Where We Work"
              title="Serving Your Local Area"
              align="left"
              description={`Proudly providing service throughout ${siteConfig.serviceArea.region} and the surrounding communities.`}
              className="max-w-none"
            />

            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {siteConfig.serviceArea.cities.map((city) => (
                <li
                  key={city}
                  className="flex items-center gap-2 rounded-lg bg-white px-3.5 py-2.5 text-sm font-semibold text-brand-900 shadow-[var(--shadow-card)]"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
                  {city}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-ink-500">
              Don't see your city listed? Contact us — we may still be able to help.
            </p>
          </Reveal>

          <Reveal delay={120} className="relative overflow-hidden rounded-2xl border border-ink-200 bg-white p-10 shadow-[var(--shadow-card)]">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, var(--color-brand-700) 1.5px, transparent 1.5px)",
                backgroundSize: "20px 20px",
              }}
              aria-hidden="true"
            />
            <div className="relative flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                <Navigation className="h-9 w-9" aria-hidden="true" />
              </div>
              <p className="mt-6 text-lg font-bold text-brand-900">
                {siteConfig.serviceArea.region}
              </p>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-600">
                Based locally and ready to respond quickly across our full service
                area.
              </p>
              <div className="mt-8 grid w-full grid-cols-3 gap-3">
                {siteConfig.serviceArea.cities.slice(0, 3).map((city) => (
                  <div
                    key={city}
                    className="rounded-xl border border-brand-100 bg-brand-50 px-2 py-3 text-xs font-semibold text-brand-800"
                  >
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
