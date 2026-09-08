export type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  tagline: string;
  ctaLabel: string;
};

export const HeroContent: HeroContent = {
  eyebrow: "PERSONALIZED HAIR ARTISTRY",
  title: "CARLISPECIAL",
  subtitle: "",
  description: "Personalized hair color, highlights, balayage, and styling designed around you.",
  tagline: "HAIR COLOR • CONFIDENCE • YOU",
  ctaLabel: "Book an Appointment →",
};

export type BookingBannerContent = {
  title: string;
  description: string;
  ctaLabel: string;
};

export const BookingBannerContent: BookingBannerContent = {
  title: "Ready for your next transformation?",
  description: "Book online anytime — it’s fast, easy, and secure.",
  ctaLabel: "Book an Appointment →",
};

export type HomeService = {
  icon: string;
  title: string;
  description: string;
};

export type ServicesContent = {
  sectionTitle: string;
  sectionDescription: string;
  items: HomeService[];
};

export const ServicesContent: ServicesContent = {
  sectionTitle: "Professional Hair Services",
  sectionDescription: "Customized color, highlights, shine, and styling services designed around your hair and your goals.",
  items: [
    { icon: "highlights", title: "Balayage Highlights", description: "Lived-in color and hand-painted dimension for a naturally bright, blended look." },
    { icon: "color", title: "Custom Color", description: "Beautiful, personalized color designed around your hair, goals, and lifestyle." },
    { icon: "styling", title: "Shine & Blowout", description: "Refresh your color with a glossy finish and leave with polished, effortless style." },
    { icon: "highlights", title: "Hair Treatments", description: "Targeted care to restore moisture, softness, manageability, and shine." },
  ],
};
