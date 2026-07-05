import type { Metadata } from "next";
import { TechnologyPage } from "@/components/sections/technology/TechnologyPage";

export const metadata: Metadata = {
  title: "Technology | Well Dental Care",
  description:
    "Discover the modern, industry-leading dental technology at Well Dental Care — from the Vatech PaX-i3D SMART digital X-ray to the C-SAILOR S1 implant system.",
};

export default function Technology() {
  return <TechnologyPage />;
}
