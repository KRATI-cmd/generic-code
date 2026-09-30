import { useEffect, useRef, useState } from "react";
import { Phone, ShieldCheck, Clock, MapPin, BadgeCheck } from "lucide-react";
import { siteConfig } from "../../config/site";
import { images } from "../../data/images";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

const trustIcons = [BadgeCheck, ShieldCheck, MapPin, Clock];

export function Hero() {
  const imgRef = useRef<HTMLImageElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  // A cached image can finish loading before the onLoad listener attaches,
  // so check .complete on mount as a fallback.
  useEffect(() => {
    if (imgRef.current?.complete) {
      setImageLoaded(true);
    }
  }, []);

  return (
    <section id="top" className="relative overflow-hidden bg-brand-900">
      <div className="absolute inset-0">
        <img
          ref={imgRef}
          src={images.hero}
          alt="Professional service technician at work on a residential property"
          className="h-full w-full object-cover opacity-0 transition-opacity duration-700"
          style={imageLoaded ? { opacity: 0.35 } : undefined}
          onLoad={() => setImageLoaded(true)}
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-900/95 to-brand-900/70" />
      </div>

      <Container className="relative py-16 sm:py-24 lg:py-32">
        <Reveal className="max-w-2xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-accent-300 ring-1 ring-inset ring-white/20">
            {siteConfig.business.trustLabel}
          </span>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {siteConfig.business.tagline}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100">
            {siteConfig.business.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact" variant="accent" size="lg">
              {siteConfig.cta.primary}
            </Button>
            <Button
              href={siteConfig.contact.phoneHref}
              variant="outline"
              size="lg"
              icon={<Phone className="h-5 w-5" aria-hidden="true" />}
            >
              {siteConfig.cta.secondary}
            </Button>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
            {siteConfig.trustIndicators.map((label, i) => {
              const Icon = trustIcons[i % trustIcons.length];
              return (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="h-5 w-5 shrink-0 text-accent-400" aria-hidden="true" />
                  <dt className="text-sm font-semibold text-white">{label}</dt>
                </div>
              );
            })}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
