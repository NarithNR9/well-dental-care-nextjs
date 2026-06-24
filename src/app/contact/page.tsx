import type { Metadata } from "next";
import { ContactPage } from "@/components/sections/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us | Well Dental Care",
  description:
    "Get in touch with Well Dental Care in Phnom Penh. Find our location, working hours, phone, email, and send us a message.",
};

export default function Contact() {
  return <ContactPage />;
}
