import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "../../config/site";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow duration-200 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <Container className="flex h-16 items-center justify-between py-3 sm:h-20">
        <a
          href="#top"
          className="font-display text-xl font-extrabold text-brand-900 sm:text-2xl"
        >
          {siteConfig.business.shortName}
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-ink-700 transition-colors hover:text-brand-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.contact.phoneHref}
            className="flex items-center gap-2 text-sm font-bold text-brand-800 hover:text-brand-700"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.contact.phone}
          </a>
          <Button href="#contact" variant="accent">
            {siteConfig.cta.primary}
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-brand-900 lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {isMenuOpen && (
        <div className="border-t border-ink-100 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-semibold text-ink-700 hover:bg-brand-50 hover:text-brand-700"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-3 px-3">
              <Button
                href={siteConfig.contact.phoneHref}
                variant="outline"
                className="!border-brand-700 !text-brand-700 hover:!bg-brand-700 hover:!text-white justify-center"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {siteConfig.contact.phone}
              </Button>
              <Button
                href="#contact"
                variant="accent"
                className="justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {siteConfig.cta.primary}
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
