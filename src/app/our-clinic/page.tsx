import type { Metadata } from "next";
import { OurClinicPage } from "@/components/sections/clinic/OurClinicPage";

export const metadata: Metadata = {
  title: "Our Clinic | Well Dental Care",
  description:
    "Take a closer look at Well Dental Care — our modern waiting area, advanced treatment rooms, convenient parking, and the friendly team behind every visit.",
};

export default function OurClinic() {
  return <OurClinicPage />;
}
