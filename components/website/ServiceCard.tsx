import type { ReactNode } from "react";

const icons: Record<string, ReactNode> = {
  scissors: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="14" cy="33" r="5.5" /><circle cx="14" cy="15" r="5.5" />
      <path d="M18.5 18.5 38 8M18.5 29.5 38 40M20 24h18" />
    </svg>
  ),
  color: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 7 41 24 24 41 7 24Z" /><path d="M19 24h10M24 19v10" />
    </svg>
  ),
  highlights: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 6v12M24 30v12M6 24h12M30 24h12M11.3 11.3l8.5 8.5M28.2 28.2l8.5 8.5M36.7 11.3l-8.5 8.5M19.8 28.2l-8.5 8.5" />
    </svg>
  ),
  styling: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="16.5" /><circle cx="24" cy="24" r="2.5" />
    </svg>
  ),
};

export function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <article className="service-card">
      <div className="service-card__icon">{icons[icon] ?? icons.highlights}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="service-card__rule" />
    </article>
  );
}
