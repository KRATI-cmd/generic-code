import { Star, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "../../config/site";
import { services } from "../../data/services";
import { Container } from "../ui/Container";
import { FacebookIcon, InstagramIcon } from "../ui/SocialIcons";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-brand-950 pb-16 text-brand-100 lg:pb-0">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-extrabold text-white">
            {siteConfig.business.shortName}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-brand-300">
            {siteConfig.business.description}
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={siteConfig.social.facebook}
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent-500"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.instagram}
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent-500"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.google}
              aria-label="Google Reviews"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent-500"
            >
              <Star className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-white">Services</p>
          <ul className="mt-4 space-y-2.5 text-sm text-brand-300">
            {services.map((s) => (
              <li key={s.name}>
                <a href="#services" className="hover:text-white">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-white">Service Areas</p>
          <ul className="mt-4 space-y-2.5 text-sm text-brand-300">
            {siteConfig.serviceArea.cities.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-white">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-brand-300">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={siteConfig.contact.phoneHref} className="hover:text-white">
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{siteConfig.contact.address}</span>
            </li>
          </ul>
          <p className="mt-4 text-sm font-bold uppercase tracking-wide text-white">
            Business Hours
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-brand-300">
            {siteConfig.contact.hours.map((h) => (
              <li key={h.day} className="flex flex-col">
                <span>{h.day}</span>
                <span className="text-brand-200">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-brand-400 sm:flex-row">
          <p>
            © {currentYear} {siteConfig.business.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
