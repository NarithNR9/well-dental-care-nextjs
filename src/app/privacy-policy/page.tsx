import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Well Dental Care",
  description:
    "Learn how Well Dental Care collects and uses the information submitted through our contact and appointment forms.",
};

export default function PrivacyPolicy() {
  return <LegalPage type="privacy" />;
}
