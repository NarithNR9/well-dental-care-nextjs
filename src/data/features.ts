import {
  HeartHandshake,
  ShieldCheck,
  SmilePlus,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

export type Feature = {
  title: string;
  titleKm: string;
  description: string;
  descriptionKm: string;
  icon: LucideIcon;
};

export const features: Feature[] = [
  {
    title: "Gentle & Caring Service",
    titleKm: "សេវាកក់ក្តៅ និងយកចិត្តទុកដាក់",
    description: "We provide a relaxed, stress-free experience tailored to your comfort.",
    descriptionKm: "យើងផ្តល់បទពិសោធន៍ស្ងប់ស្ងាត់ និងសមស្របនឹងភាពសុខស្រួលរបស់អ្នក។",
    icon: HeartHandshake,
  },
  {
    title: "Trusted by Our Community",
    titleKm: "ទទួលបានទំនុកចិត្តពីសហគមន៍",
    description: "A reputation built on years of honest care and trusted support.",
    descriptionKm: "កេរ្តិ៍ឈ្មោះដែលកសាងឡើងពីការថែទាំដោយស្មោះត្រង់ជាយូរឆ្នាំ។",
    icon: ShieldCheck,
  },
  {
    title: "Family-Friendly Clinic",
    titleKm: "គ្លីនិកសម្រាប់គ្រួសារ",
    description: "Our facility offers high-standard care for patients of all generations.",
    descriptionKm: "គ្លីនិករបស់យើងផ្តល់ការថែទាំស្តង់ដារខ្ពស់សម្រាប់អ្នកជំងឺគ្រប់វ័យ។",
    icon: SmilePlus,
  },
  {
    title: "Professional Staff",
    titleKm: "បុគ្គលិកជំនាញ",
    description: "Precise care led by our specialist team and advanced techniques.",
    descriptionKm: "ការថែទាំម៉ត់ចត់ដោយក្រុមជំនាញ និងបច្ចេកទេសទំនើប។",
    icon: Stethoscope,
  },
];
