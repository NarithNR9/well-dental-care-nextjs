export type Service = {
  slug: string;
  title: string;
  titleKm: string;
  category: string;
  categoryKm: string;
  description: string;
  imageTone: "chair" | "cleaning" | "whitening" | "brace" | "surgery";
};

export const services: Service[] = [
  {
    slug: "dental-check-up-consultation",
    title: "Dental check-up & consultation",
    titleKm: "ពិនិត្យធ្មេញ និងពិគ្រោះយោបល់",
    category: "Popular",
    categoryKm: "ពេញនិយម",
    description: "Routine care and clear advice for a healthier smile.",
    imageTone: "chair",
  },
  {
    slug: "professional-teeth-cleaning",
    title: "Professional Teeth Cleaning",
    titleKm: "សម្អាតធ្មេញដោយអ្នកជំនាញ",
    category: "Popular",
    categoryKm: "ពេញនិយម",
    description: "Gentle scaling and polishing for fresh confidence.",
    imageTone: "cleaning",
  },
  {
    slug: "teeth-whitening",
    title: "Teeth whitening",
    titleKm: "ធ្វើឱ្យធ្មេញស",
    category: "Popular",
    categoryKm: "ពេញនិយម",
    description: "Brighten your smile with supervised whitening care.",
    imageTone: "whitening",
  },
  {
    slug: "brace",
    title: "Brace",
    titleKm: "ដង្កៀបធ្មេញ",
    category: "Popular",
    categoryKm: "ពេញនិយម",
    description: "Supportive orthodontic care for aligned teeth.",
    imageTone: "brace",
  },
  {
    slug: "surgical-tooth-extraction",
    title: "Surgical Tooth Extraction",
    titleKm: "វះកាត់ដកធ្មេញ",
    category: "Popular",
    categoryKm: "ពេញនិយម",
    description: "Careful extraction planning with a gentle clinical team.",
    imageTone: "surgery",
  },
];
