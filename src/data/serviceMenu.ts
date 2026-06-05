import type { Locale } from "@/i18n/config";

export type ServiceMenuLink = {
  title: string;
  titleKm: string;
  href: string;
};

export type ServiceMenuCategory = ServiceMenuLink & {
  children: ServiceMenuLink[];
};

export const serviceMenuCategories: ServiceMenuCategory[] = [
  {
    title: "General Dentistry",
    titleKm: "ទន្តសាស្ត្រទូទៅ",
    href: "/services/general-dentistry",
    children: [
      {
        title: "Dental check-up & consultation",
        titleKm: "ពិនិត្យធ្មេញ និងពិគ្រោះយោបល់",
        href: "/services/dental-check-up-consultation",
      },
      {
        title: "Professional Teeth Cleaning",
        titleKm: "សម្អាតធ្មេញដោយអ្នកជំនាញ",
        href: "/services/professional-teeth-cleaning",
      },
      {
        title: "Dental X-rays & Diagnostics",
        titleKm: "ថតកាំរស្មីអ៊ិច និងវិនិច្ឆ័យធ្មេញ",
        href: "/services/dental-x-rays-diagnostics",
      },
      {
        title: "Fillings (Tooth-colored composite)",
        titleKm: "ប៉ះធ្មេញពណ៌ដូចធ្មេញ",
        href: "/services/fillings-tooth-colored-composite",
      },
      {
        title: "Gum Disease Treatment",
        titleKm: "ព្យាបាលជំងឺអញ្ចាញធ្មេញ",
        href: "/services/gum-disease-treatment",
      },
    ],
  },
  {
    title: "Cosmetic Dentistry",
    titleKm: "ទន្តសាស្ត្រសោភ័ណភាព",
    href: "/services/cosmetic-dentistry",
    children: [
      {
        title: "Teeth whitening",
        titleKm: "ធ្វើឱ្យធ្មេញស",
        href: "/services/teeth-whitening",
      },
      {
        title: "Dental Bonding",
        titleKm: "បិទជួសជុលធ្មេញ",
        href: "/services/dental-bonding",
      },
      {
        title: "Veneers (porcelain/composite)",
        titleKm: "វីនៀរ (ប៉សឺឡែន/កុំពូស៊ីត)",
        href: "/services/veneers",
      },
      {
        title: "Gum Contouring (Gum reshaping)",
        titleKm: "កែទម្រង់អញ្ចាញធ្មេញ",
        href: "/services/gum-contouring",
      },
    ],
  },
  {
    title: "Orthodontics",
    titleKm: "ពត់តម្រង់ធ្មេញ",
    href: "/services/orthodontics",
    children: [
      { title: "Brace", titleKm: "ដង្កៀបធ្មេញ", href: "/services/brace" },
      { title: "Retainer", titleKm: "ឧបករណ៍រក្សាទម្រង់ធ្មេញ", href: "/services/retainer" },
      {
        title: "Ceramic (Clear) Braces",
        titleKm: "ដង្កៀបសេរ៉ាមិចថ្លា",
        href: "/services/ceramic-clear-braces",
      },
      {
        title: "Space Maintainers",
        titleKm: "ឧបករណ៍រក្សាចន្លោះធ្មេញ",
        href: "/services/space-maintainers",
      },
    ],
  },
  {
    title: "Oral Surgery",
    titleKm: "វះកាត់មាត់ធ្មេញ",
    href: "/services/oral-surgery",
    children: [
      {
        title: "Wisdom Tooth Extraction",
        titleKm: "ដកធ្មេញប្រាជ្ញា",
        href: "/services/wisdom-tooth-extraction",
      },
      {
        title: "Surgical Tooth Extraction",
        titleKm: "វះកាត់ដកធ្មេញ",
        href: "/services/surgical-tooth-extraction",
      },
    ],
  },
  {
    title: "Implants",
    titleKm: "ដាំបង្គោលធ្មេញ",
    href: "/services/implants",
    children: [
      {
        title: "Single Tooth Implants",
        titleKm: "ដាំបង្គោលធ្មេញមួយ",
        href: "/services/single-tooth-implants",
      },
      {
        title: "Implant-supported Bridges",
        titleKm: "ស្ពានធ្មេញគាំទ្រដោយបង្គោល",
        href: "/services/implant-supported-bridges",
      },
    ],
  },
  {
    title: "Pediatric Dentistry",
    titleKm: "ទន្តសាស្ត្រកុមារ",
    href: "/services/pediatric-dentistry",
    children: [
      {
        title: "Dental Check-ups for kid",
        titleKm: "ពិនិត្យធ្មេញសម្រាប់កុមារ",
        href: "/services/dental-check-ups-for-kid",
      },
      {
        title: "Friendly Teeth Cleanings for kid",
        titleKm: "សម្អាតធ្មេញបែបស្និទ្ធស្នាលសម្រាប់កុមារ",
        href: "/services/friendly-teeth-cleanings-for-kid",
      },
      {
        title: "Tooth Fillings for Kids",
        titleKm: "ប៉ះធ្មេញសម្រាប់កុមារ",
        href: "/services/tooth-fillings-for-kids",
      },
    ],
  },
] as const;

export function getServiceMenuTitle(item: ServiceMenuLink, locale: Locale) {
  return locale === "km" ? item.titleKm : item.title;
}
