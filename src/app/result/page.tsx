import type { Metadata } from "next";
import { ResultPage } from "@/components/sections/result/ResultPage";

export const metadata: Metadata = {
  title: "Treatment Result | Well Dental Care",
  description:
    "See real before-and-after treatment results from Well Dental Care — orthodontics, alignment, and smile transformations delivered with advanced clinical care.",
};

export default function Result() {
  return <ResultPage />;
}
