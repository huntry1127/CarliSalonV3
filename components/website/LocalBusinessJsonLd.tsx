import { SITE_URL } from "@/lib/site";

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "@id": `${SITE_URL}/#hair-salon`,
    name: "Carli Special",
    url: SITE_URL,
    description:
      "Carli Special is a personalized hair studio in Wheaton, IL 60189, specializing in balayage, lived-in color, highlights, grey coverage, styling, and beautiful, customized hair.",
    image: `${SITE_URL}/images/hero-hair.jpg`,
    areaServed: {
      "@type": "City",
      name: "Wheaton",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Wheaton",
        addressRegion: "IL",
        postalCode: "60189",
        addressCountry: "US",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wheaton",
      addressRegion: "IL",
      postalCode: "60189",
      addressCountry: "US",
    },
    priceRange: "$$",
    makesOffer: [
      "Balayage Highlights/Lived in Color",
      "Good Bye Sparkles!",
      "Shine Glaze & Blowout",
      "Foil",
      "Pamper Yo-Self",
      "Freaky Fast Grey Coverage",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
