import type { Metadata } from "next";
import { AboutPage } from "@/components/sections/about/AboutPage";

export const metadata: Metadata = {
  title: "About Us | Well Dental Care",
  description:
    "Learn about Well Dental Care — a trusted dental clinic in Phnom Penh providing modern, compassionate, and high-quality care for every generation.",
};

export default function About() {
  return <AboutPage />;
}
