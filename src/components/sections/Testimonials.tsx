import { Quote } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

export function Testimonials() {
  return (
    <section id="reviews" className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Reviews"
            title="What Customers Say"
            description="Demo testimonial placeholders — replace with real, verified customer reviews."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 100} className="h-full">
              <blockquote className="flex h-full flex-col rounded-2xl border border-dashed border-ink-200 bg-ink-50 p-7">
                <Quote className="h-7 w-7 text-brand-300" aria-hidden="true" />
                <p className="mt-4 flex-1 text-sm italic leading-relaxed text-ink-700">
                  {t.quote}
                </p>
                <footer className="mt-5 text-sm font-bold text-brand-900">
                  — {t.name}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-ink-400">
          Demo content shown for template purposes. Not actual customer reviews.
        </p>
      </Container>
    </section>
  );
}
