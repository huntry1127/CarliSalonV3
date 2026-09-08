// components/website/Hero.tsx
import { HeroContent } from "@/content/home";
import { BOOKING_URL } from "@/lib/site";

type HeroProps = {
  content: HeroContent;
};

export function Hero({ content }: HeroProps) {
  const { eyebrow, title, subtitle, description, tagline, ctaLabel } = content;

  return (
    <section className="hero">
      <p className="hero-eyebrow">{eyebrow}</p>
      <h1 className="hero-title">{title}</h1>
      <p className="hero-subtitle">{subtitle}</p>
      <p className="hero-description">{description}</p>
      <p className="hero-tagline">{tagline}</p>
      <a href={BOOKING_URL} className="hero-cta">
        {ctaLabel}
      </a>
    </section>
  );
}
