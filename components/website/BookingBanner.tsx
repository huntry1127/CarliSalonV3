// components/website/BookingBanner.tsx
import { BookingBannerContent } from "@/content/home";
import { BOOKING_URL } from "@/lib/site";

type BookingBannerProps = {
  content: BookingBannerContent;
};

export function BookingBanner({ content }: BookingBannerProps) {
  const { title, description, ctaLabel } = content;

  return (
    <section className="booking-banner">
      <div className="booking-banner-content">
        <h2 className="booking-banner-title">{title}</h2>
        <p className="booking-banner-description">{description}</p>
        <a href={BOOKING_URL} className="booking-banner-cta">
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
