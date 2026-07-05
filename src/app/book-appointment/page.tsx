import type { Metadata } from "next";
import { BookAppointmentPage } from "@/components/sections/book-appointment/BookAppointmentPage";

export const metadata: Metadata = {
  title: "Book an Appointment | Well Dental Care",
  description:
    "Book your visit with Well Dental Care. Provide your details, choose a service, date, and time, and our team will confirm your appointment.",
};

export default function BookAppointment() {
  return <BookAppointmentPage />;
}
