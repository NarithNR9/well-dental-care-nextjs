import type { Metadata } from "next";
import { PriceListPage } from "@/components/sections/price-list/PriceListPage";

export const metadata: Metadata = {
  title: "Price List | Well Dental Care",
  description:
    "View transparent, up-front pricing for Well Dental Care's dental treatments — from check-ups and cleanings to cosmetic, orthodontic, and implant services.",
};

export default function PriceList() {
  return <PriceListPage />;
}
