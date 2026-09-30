/**
 * SITE CONFIGURATION
 * -------------------
 * Centralized business content. Edit the values below to re-brand this
 * template for a specific client without touching component code.
 */

export const siteConfig = {
  business: {
    name: "ShineWorks Mobile Detailing",
    shortName: "ShineWorks",
    tagline: "Showroom Shine, Wherever You Are",
    trustLabel: "Trusted Mobile Detailing Professionals",
    description:
      "ShineWorks Mobile Detailing brings professional auto detailing straight to your home, office, or job site throughout the local area. From a quick refresh to a full showroom-quality detail, we focus on clear communication and quality work.",
    foundedNote:
      "Locally owned and operated, ShineWorks Mobile Detailing was built on a simple idea: give every car showroom-quality care without the drop-off hassle.",
  },

  contact: {
    phone: "(555) 030-0187",
    phoneHref: "tel:+15550300187",
    email: "info@shineworksexample.com",
    address: "Mobile Service — We Come to You",
    hours: [
      { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
      { day: "Saturday", time: "8:00 AM – 5:00 PM" },
      { day: "Sunday", time: "By Appointment" },
    ],
  },

  social: {
    facebook: "#",
    instagram: "#",
    google: "#",
  },

  cta: {
    primary: "Book Now",
    secondary: "Call Now",
    contactSection: "Request My Appointment",
    sectionHeading: "Book Your Detail",
    sectionDescription:
      "Fill out the form below or contact us directly — we're happy to help you get scheduled.",
  },

  nav: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Service Areas", href: "#service-areas" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  trustIndicators: [
    "Insured & Professional",
    "We Come To You",
    "Flexible Scheduling",
    "Fast Response",
  ],

  trustBar: [
    "Locally Owned",
    "Mobile — We Come To You",
    "Professional Service",
    "Customer Focused",
  ],

  serviceArea: {
    region: "Your County / Region",
    cities: [
      "Springfield",
      "Riverside",
      "Fairview",
      "Oakwood",
      "Greenville",
      "Madison Heights",
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
