import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | Well Dental Care",
  description:
    "Read the terms of service for using the Well Dental Care website, booking form, and contact form.",
};

export default function TermsOfService() {
  return <LegalPage type="terms" />;
}
