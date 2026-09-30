/**
 * Placeholder imagery sourced from Unsplash (free to use).
 * Swap these URLs for real project photography when customizing
 * this template for an actual client — every reference lives here
 * or is passed as a prop, so nothing else needs to change.
 */

const unsplashImg = (base: string, w = 1200) =>
  `${base}?q=80&w=${w}&auto=format&fit=crop`;

export const images = {
  hero: unsplashImg("https://plus.unsplash.com/premium_photo-1661717740413-dbdcb311bb8c", 1600),
  about: unsplashImg("https://plus.unsplash.com/premium_photo-1661443396451-0ce1776a483b", 1200),
  gallery: [
    {
      src: unsplashImg("https://plus.unsplash.com/premium_photo-1661501041641-3e731115e687"),
      title: "Wheel & Tire Detail",
      location: "Springfield, ST",
      category: "Exterior",
    },
    {
      src: unsplashImg("https://images.unsplash.com/photo-1471174617910-3e9c04f58ff5"),
      title: "Full Interior Detail",
      location: "Riverside, ST",
      category: "Interior",
    },
    {
      src: unsplashImg("https://images.unsplash.com/photo-1683647115932-b33455fe6a3e"),
      title: "Exterior Wash & Rinse",
      location: "Fairview, ST",
      category: "Exterior",
    },
    {
      src: unsplashImg("https://plus.unsplash.com/premium_photo-1661909961389-7d501737abde"),
      title: "Paint Correction",
      location: "Oakwood, ST",
      category: "Paint Care",
    },
    {
      src: unsplashImg("https://images.unsplash.com/photo-1527581849771-416a9d62308e"),
      title: "Hand Wax & Polish",
      location: "Greenville, ST",
      category: "Paint Care",
    },
    {
      src: unsplashImg("https://images.unsplash.com/photo-1771491237225-01931a752f58"),
      title: "Dashboard & Interior Detail",
      location: "Madison Heights, ST",
      category: "Interior",
    },
  ],
};
