import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Carli Special, a personalized hair studio serving clients in Wheaton, IL 60189.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <main className="inner-page"><section className="page-hero"><p className="eyebrow">THE CARLI SPECIAL</p><h1>About Carli</h1><p>A modern, personal salon experience centered around beautiful color, confidence and making your appointment feel like time well spent.</p></section><section className="content-card"><h2>Hair color. Confidence. You.</h2><p>This page is ready for Carli&apos;s story, specialties, salon philosophy and photography.</p></section></main>;
}
