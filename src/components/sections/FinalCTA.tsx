import { Phone } from "lucide-react";
import { siteConfig } from "../../config/site";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function FinalCTA() {
  return (
    <section className="bg-accent-500">
      <Container className="flex flex-col items-center gap-6 py-16 text-center sm:py-20">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to Get Started?
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="max-w-xl text-lg text-accent-50">
            Tell us what you need and we'll help you find the right solution.
          </p>
        </Reveal>
        <Reveal delay={160} className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Button
            href="#contact"
            variant="primary"
            size="lg"
            className="!bg-brand-900 hover:!bg-brand-950"
          >
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
        </Reveal>
      </Container>
    </section>
  );
}
