import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Carli Special hair services in Wheaton, IL 60189, including balayage, lived-in color, highlights, grey coverage, gloss, blowouts, and treatments.",
  alternates: { canonical: "/services" },
};

import { BOOKING_URL } from "@/lib/site";

const services = [
  {
    name: "Balayage Highlights/Lived in Color",
    description:
      "Hand-painted + foliage techniques that create a natural, sun-kissed effect, adding depth and dimension for a beautifully blended look.",
    price: "$325+",
    duration: "155 min",
  },
  {
    name: "Good Bye Sparkles!",
    description: "Covering the grey including shine gloss!",
    price: "$130+",
    duration: "95 min",
  },
  {
    name: "Shine Glaze & Blowout",
    description:
      "Demi-permanent color/gloss to enhance your hair without the commitment of permanent color. Great for shine, refreshing and enhancing your color, and grey blending.",
    price: "$90+",
    duration: "60 min",
  },
  {
    name: "Foil",
    description:
      "Traditional highlights strategically placed to brighten the hair and create beautiful dimension and contrast. Customized from soft, natural-looking brightness to a bold, high-impact blonde.",
    price: "$250+",
    duration: "150 min",
  },
  {
    name: "Pamper Yo-Self",
    description:
      "A customized treatment designed to restore moisture, softness, and shine. Helps improve manageability, smooth the hair's surface, and replenish hair that feels dry, stressed, or dull.",
    price: "$50",
    duration: "30 min",
  },
  {
    name: "Freaky Fast Grey Coverage",
    description: "10 minute grey coverage!",
    price: "$90",
    duration: "45 min",
  },
];

export default function ServicesPage() {
  return (
    <main className="inner-page">
      <section className="page-hero">
        <p className="eyebrow">THE CARLI SPECIAL MENU</p>
        <h1>Services</h1>
        <p>
          Personalized color, treatments and finishing services designed around
          your hair, your goals and your lifestyle.
        </p>
        <p className="page-hero__note">
          Prices shown are the current starting prices listed on GlossGenius.
        </p>
      </section>

      <section className="service-list" aria-label="Hair services">
        {services.map((service) => (
          <article className="service-row" key={service.name}>
            <div className="service-row__content">
              <p className="service-row__kicker">CARLI SPECIAL</p>
              <h2>{service.name}</h2>
              <p>{service.description}</p>
              <a
                className="service-row__book"
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
              >
                Book this service <span>→</span>
              </a>
            </div>

            <div className="service-row__meta">
              <strong>{service.price}</strong>
              <span>{service.duration}</span>
            </div>
          </article>
        ))}
      </section>

      <div className="center-action">
        <p className="booking-note">
          Booking and availability are managed securely through GlossGenius.
        </p>
        <a
          className="button button--primary"
          href={BOOKING_URL}
          target="_blank"
          rel="noreferrer"
        >
          Book an Appointment <span>→</span>
        </a>
      </div>
    </main>
  );
}
