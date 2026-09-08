import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: "Book your Carli Special hair appointment in Wheaton, IL 60189 through GlossGenius.",
  alternates: { canonical: "/book" },
};

import { redirect } from "next/navigation";

export default function BookPage() {
  redirect("https://carlihyde.glossgenius.com/services");
}