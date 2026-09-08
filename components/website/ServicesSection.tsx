// components/website/ServicesSection.tsx
import { ServicesContent } from "@/content/home";
import { ServiceCard } from "@/components/website/ServiceCard";

type ServicesSectionProps = {
  content: ServicesContent;
};

export function ServicesSection({ content }: ServicesSectionProps) {
  const { sectionTitle, sectionDescription, items } = content;

  return (
    <section className="services">
      <h2 className="services-title">{sectionTitle}</h2>
      <p className="services-description">{sectionDescription}</p>
      <div className="services-grid">
        {items.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}
