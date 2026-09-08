import { LocalBusinessJsonLd } from "@/components/website/LocalBusinessJsonLd";
import Image from "next/image";
import Link from "next/link";
import { ServiceCard } from "@/components/website/ServiceCard";
import { BOOKING_URL } from "@/lib/site";

const featuredServices = [
  {
    icon: "highlights",
    title: "Balayage Highlights",
    description: "Lived-in color and hand-painted dimension for a naturally bright, blended look.",
  },
  {
    icon: "color",
    title: "Custom Color",
    description: "Beautiful, personalized color designed around your hair, goals, and lifestyle.",
  },
  {
    icon: "styling",
    title: "Shine & Blowout",
    description: "Refresh your color with a glossy finish and leave with polished, effortless style.",
  },
  {
    icon: "scissors",
    title: "Hair Treatments",
    description: "Targeted care to restore moisture, softness, manageability, and shine.",
  },
];

export default function HomePage() {
  return (
    <main>
      <LocalBusinessJsonLd />
      <section className="hero">
        <div className="hero__copy">
          <Image
            className="hero__mark-image"
            src="/logo/carli-special-mark.svg"
            alt=""
            width={150}
            height={150}
            priority
          />

          <p className="eyebrow">
            PERSONALIZED HAIR ARTISTRY
          </p>

          <h1>CARLISPECIAL</h1>

          <div className="rule">
            <span />
            <b>•</b>
            <span />
          </div>

          <p className="tagline">
            HAIR COLOR <span>•</span> CONFIDENCE{" "}
            <span>•</span> YOU
          </p>

          <div className="hero__actions">
            <a
              className="button button--primary"
              href={BOOKING_URL}
            >
              Book an Appointment <span>→</span>
            </a>

            <Link
              className="button button--outline"
              href="/services"
            >
              View Services
            </Link>
          </div>
        </div>

        <div className="hero__photo">
          <Image
            src="/images/hero-hair.jpg"
            alt="Long, softly highlighted blonde hair"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 54vw"
          />
        </div>
      </section>

      <section className="intro section">
        <p className="eyebrow">
          BEAUTIFUL HAIR. YOUR WAY.
        </p>

        <h2>Professional Hair Services</h2>

        <p className="section-lead">
          From lived-in color to glossy finishes and restorative treatments,
          every service is tailored to you.
        </p>

        <div className="services-grid">
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
        </div>

        <div className="center-action">
          <p className="booking-note">
            See the full service menu, pricing and availability on GlossGenius.
          </p>
          <Link className="button button--outline" href="/services">
            Explore All Services <span>→</span>
          </Link>
        </div>
      </section>

      <section className="booking-banner">
        <div
          className="booking-banner__icon"
          aria-hidden="true"
        >
          <svg viewBox="0 0 48 48">
            <rect
              x="8"
              y="10"
              width="32"
              height="30"
              rx="3"
            />

            <path d="M15 6v8M33 6v8M8 19h32M15 26h4M24 26h4M33 26h0M15 33h4M24 33h4M33 33h0" />
          </svg>
        </div>

        <div>
          <h3>
            Ready for your next transformation?
          </h3>

          <p>
            Book online anytime — it&apos;s fast, easy,
            and secure.
          </p>
        </div>

        <a
  className="button button--primary"
  href={BOOKING_URL}
>
  Book an Appointment <span>→</span>
</a>
      </section>
    

      <section className="local-seo section">
        <p className="eyebrow">WHEATON, ILLINOIS</p>
        <h2>Personalized Hair Services in Wheaton</h2>
        <p className="section-lead">
          Carli Special offers personalized hair color, balayage, highlights,
          grey coverage, styling, and more for clients in Wheaton, IL 60189.
        </p>
        <Link className="button button--outline" href="/services">
          Explore Services
        </Link>
      </section>
</main>
  );
}