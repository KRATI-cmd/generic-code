import { MapPin } from "lucide-react";
import { images } from "../../data/images";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

export function Gallery() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Portfolio"
            title="Our Recent Work"
            description="A look at some of the projects we've completed for homeowners in the area."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.gallery.map((item, index) => (
            <Reveal key={item.title} delay={index * 70} className="h-full">
              <figure className="group h-full cursor-pointer overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-[var(--shadow-card)] transition-shadow duration-200 hover:shadow-[var(--shadow-card-hover)]">
                <div className="relative aspect-[4/3] overflow-hidden bg-ink-100">
                  <img
                    src={item.src}
                    alt={`${item.title} in ${item.location}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-brand-900/85 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
                <figcaption className="p-5">
                  <h3 className="font-bold text-brand-900">{item.title}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-500">
                    <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    {item.location}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
