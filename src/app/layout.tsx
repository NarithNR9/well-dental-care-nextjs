import type { Metadata } from "next";
import { Hanuman, Inter } from "next/font/google";
import { FloatingContactButton } from "@/components/common/FloatingContactButton";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Hanuman is a Khmer typeface; browser per-glyph fallback renders Khmer text in
// Hanuman while Latin characters continue to use Inter.
const hanuman = Hanuman({
  subsets: ["khmer"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-hanuman",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Well Dental Care | Professional Dental Clinic",
  description:
    "Book trusted dental care services with Well Dental Care in Phnom Penh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${inter.variable} ${hanuman.variable}`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <LocaleProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingContactButton />
        </LocaleProvider>
      </body>
    </html>
  );
}
