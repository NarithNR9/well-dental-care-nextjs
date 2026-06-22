import type { Metadata } from "next";
import { ServicesPage } from "@/components/sections/services/ServicesPage";

export const metadata: Metadata = {
  title: "Service | Well Dental Care",
  description:
    "Explore Well Dental Care's full range of dental treatments — general, cosmetic, orthodontics, oral surgery, implants, and pediatric dentistry.",
};

export default function Services() {
  return <ServicesPage />;
}
