import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/website/SiteHeader";
import { SiteFooter } from "@/components/website/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://carlispecial.com"),
  title: {
    default: "Carli Special | Hair Stylist & Hair Color",
    template: "%s | Carli Special",
  },
  description:
    "Carli Special is a personalized hair studio in Wheaton, IL 60189, specializing in balayage, lived-in color, highlights, grey coverage, styling, and beautiful, customized hair.",
  keywords: [
    "Carli Special",
    "hair stylist",
    "hair color",
    "balayage",
    "highlights",
    "lived-in color",
    "grey coverage",
    "blowout",
    "hair salon",
    "hair stylist in Wheaton",
    "hair salon in Wheaton IL",
    "balayage Wheaton IL",
    "hair color Wheaton IL",
    "lived-in color Wheaton IL",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://carlispecial.com/",
    siteName: "Carli Special",
    title: "Carli Special | Hair Stylist & Hair Color",
    description:
      "Personalized hair color, balayage, highlights, styling, and hair services.",
    images: [{
      url: "/images/hero-hair.jpg",
      width: 1200,
      height: 630,
      alt: "Carli Special hair color and styling",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carli Special | Hair Stylist & Hair Color",
    description:
      "Personalized hair color, balayage, highlights, styling, and hair services.",
    images: ["/images/hero-hair.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
