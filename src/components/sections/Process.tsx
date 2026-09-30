import { processSteps } from "../../data/process";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

export function Process() {
  return (
    <section className="bg-brand-900 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Simple Process"
            title="How It Works"
            light
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === processSteps.length - 1;
            return (
              <Reveal key={step.number} delay={index * 120}>
                <div className="relative flex flex-col items-center text-center">
                  {!isLast && (
                    <div
                      className="absolute left-1/2 top-8 hidden h-px w-full bg-white/15 sm:block"
                      aria-hidden="true"
                    />
                  )}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/10 ring-1 ring-inset ring-white/20">
                    <Icon className="h-7 w-7 text-accent-400" aria-hidden="true" />
                  </div>
                  <span className="mt-4 text-sm font-extrabold tracking-widest text-accent-400">
                    {step.number}
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-brand-100">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
