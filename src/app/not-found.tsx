import type { Metadata } from "next";
import { NotFoundPage } from "@/components/sections/not-found/NotFoundPage";

export const metadata: Metadata = {
  title: "Page Not Found | Well Dental Care",
  description:
    "Sorry, we couldn't find the page you requested. Return to Well Dental Care to explore our services.",
};

export default function NotFound() {
  return <NotFoundPage />;
}
