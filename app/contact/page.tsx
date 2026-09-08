import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Carli Special in Wheaton, IL 60189 for questions, salon information, and appointment help.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <main className="inner-page"><section className="page-hero"><p className="eyebrow">LET&apos;S CONNECT</p><h1>Contact</h1><p>Questions before your appointment? Add Carli&apos;s phone, email, location and social links here.</p></section><section className="content-card"><h2>Ready when you are.</h2><p>For the fastest service, book online anytime.</p></section></main>;
}
