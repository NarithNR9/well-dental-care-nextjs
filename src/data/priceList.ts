// Promotional price list grouped by treatment category.
// `before` shows the original price (struck through when discounted) and `now`
// shows the current price. `*Suffix` renders as small superscript (e.g. "/unit",
// "up"). The literal "Free" is localized in the UI via `dictionary.priceList.free`.
export type PriceRow = {
  service: string;
  serviceKm: string;
  before: string;
  beforeStrike: boolean;
  now: string;
  beforeSuffix?: string;
  nowSuffix?: string;
};

export type PriceCategory = {
  slug: string;
  title: string;
  titleKm: string;
  rows: PriceRow[];
};

export const priceCategories: PriceCategory[] = [
  {
    slug: "examination-cleaning",
    title: "Examination & Cleaning",
    titleKm: "ការពិនិត្យ និងសម្អាត",
    rows: [
      { service: "General Consultation", serviceKm: "ការពិគ្រោះទូទៅ", before: "Free", beforeStrike: false, now: "Free" },
      { service: "Cleaning And Polishing", serviceKm: "សម្អាត និងខាត់ធ្មេញ", before: "$15", beforeStrike: true, now: "$7.5" },
      { service: "Sandblasting Scaling", serviceKm: "សម្អាតកករធ្មេញ", before: "$40", beforeStrike: true, now: "$30" },
    ],
  },
  {
    slug: "digital-imaging",
    title: "Digital Imaging",
    titleKm: "រូបភាពឌីជីថល",
    rows: [
      { service: "X-ray Periapical/bitewing", serviceKm: "កាំរស្មីអ៊ិច Periapical/bitewing", before: "Free", beforeStrike: false, now: "Free" },
      { service: "Panoramic/Cephalometric", serviceKm: "Panoramic/Cephalometric", before: "$15", beforeStrike: false, now: "$15" },
      { service: "3D CBCT", serviceKm: "3D CBCT", before: "$35", beforeStrike: true, now: "$30" },
    ],
  },
  {
    slug: "filling-aesthetic",
    title: "Filling and Aesthetic",
    titleKm: "ការស្រោបធ្មេញ និងសោភ័ណភាព",
    rows: [
      { service: "Composite Filling", serviceKm: "ស្រោបធ្មេញ Composite", before: "$35", beforeStrike: true, now: "$15" },
      { service: "Fissure Sealant", serviceKm: "បិទរណ្ដៅធ្មេញ (Fissure Sealant)", before: "$40", beforeStrike: true, now: "$15" },
      { service: "Direct Composite Inlay", serviceKm: "Composite Inlay ផ្ទាល់", before: "$45", beforeStrike: true, now: "$30" },
    ],
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    titleKm: "ការធ្វើឱ្យធ្មេញស",
    rows: [
      { service: "Whitening-Chairside", serviceKm: "ធ្វើឱ្យធ្មេញស (នៅគ្លីនិក)", before: "$120", beforeStrike: false, now: "$85" },
      { service: "Whitening-Home", serviceKm: "ធ្វើឱ្យធ្មេញស (នៅផ្ទះ)", before: "$100", beforeStrike: false, now: "$55" },
    ],
  },
  {
    slug: "endodontic-dentistry",
    title: "Endodontic Dentistry",
    titleKm: "ការព្យាបាលឫសធ្មេញ",
    rows: [
      { service: "Root Canal Anterior Teeth", serviceKm: "ព្យាបាលឫសធ្មេញមុខ", before: "$50", beforeStrike: false, now: "$35" },
      { service: "Root Canal Posterior Teeth", serviceKm: "ព្យាបាលឫសធ្មេញក្រោយ", before: "$70", beforeStrike: false, now: "$50" },
    ],
  },
  {
    slug: "periodontic-dentistry",
    title: "Periodontic Dentistry",
    titleKm: "ការព្យាបាលអញ្ចាញធ្មេញ",
    rows: [
      { service: "Root Planning (Flapless)", serviceKm: "ការសម្អាតឫស (Flapless)", before: "$70", beforeStrike: true, now: "$45" },
      { service: "Root Planning (Openflap)", serviceKm: "ការសម្អាតឫស (Openflap)", before: "$100", beforeStrike: true, now: "$65" },
      { service: "Gum Surgery", serviceKm: "វះកាត់អញ្ចាញធ្មេញ", before: "$150", beforeStrike: true, now: "$75" },
      { service: "Crown Lengthening", serviceKm: "ការពន្យារគ្រោបធ្មេញ", before: "$50", beforeStrike: true, beforeSuffix: "/unit", now: "$30", nowSuffix: "/unit" },
    ],
  },
  {
    slug: "sedation",
    title: "Sedation",
    titleKm: "ការប្រើថ្នាំសណ្ដំ",
    rows: [
      { service: "Oral Sedation (midazolam)", serviceKm: "ថ្នាំសណ្ដំតាមមាត់ (midazolam)", before: "$180", beforeStrike: true, now: "$80" },
      { service: "Nitrous Oxide (N₂O)", serviceKm: "ឧស្ម័ន Nitrous Oxide (N₂O)", before: "$360", beforeStrike: true, now: "$160" },
    ],
  },
  {
    slug: "orthodontic",
    title: "Orthodontic",
    titleKm: "ការពត់តម្រង់ធ្មេញ",
    rows: [
      { service: "With Bracket", serviceKm: "ដាក់ដែក (Bracket)", before: "$2000", beforeStrike: true, now: "$1999", nowSuffix: "up" },
      { service: "Clear Aligner", serviceKm: "ធ្មេញថ្លា (Clear Aligner)", before: "$3000", beforeStrike: true, now: "$1500", nowSuffix: "up" },
    ],
  },
  {
    slug: "crown",
    title: "Crown",
    titleKm: "គ្រោបធ្មេញ",
    rows: [
      { service: "Zirconia", serviceKm: "Zirconia", before: "$300", beforeStrike: true, now: "$175" },
      { service: "Ceramic", serviceKm: "សេរ៉ាមិច", before: "$150", beforeStrike: true, now: "$75" },
      { service: "EMAX", serviceKm: "EMAX", before: "$350", beforeStrike: true, now: "$250" },
      { service: "Free Nickel Ceramic", serviceKm: "សេរ៉ាមិចគ្មាន Nickel", before: "$200", beforeStrike: true, now: "$100" },
      { service: "Stainless Steel Crown", serviceKm: "គ្រោបដែក (Stainless Steel)", before: "$100", beforeStrike: true, now: "$50" },
    ],
  },
  {
    slug: "dentures",
    title: "Dentures",
    titleKm: "ធ្មេញសិប្បនិម្មិត",
    rows: [
      { service: "Partial Denture", serviceKm: "ធ្មេញសិប្បនិម្មិតដោយផ្នែក", before: "$400", beforeStrike: true, now: "$250" },
      { service: "Full Denture", serviceKm: "ធ្មេញសិប្បនិម្មិតពេញ", before: "$350", beforeStrike: true, now: "$200" },
    ],
  },
  {
    slug: "oral-surgery",
    title: "Oral Surgery",
    titleKm: "វះកាត់មាត់ធ្មេញ",
    rows: [
      { service: "Impacted Tooth Surgery", serviceKm: "វះកាត់ធ្មេញលិច", before: "$120", beforeStrike: true, now: "$55" },
      { service: "Tooth Extraction (Molar)", serviceKm: "ដកធ្មេញថ្គាម (Molar)", before: "$50", beforeStrike: true, now: "$30" },
      { service: "Tooth Extraction (Single root)", serviceKm: "ដកធ្មេញឫសតែមួយ", before: "$25", beforeStrike: true, now: "$12.5" },
      { service: "Abscess management", serviceKm: "ការព្យាបាលបូស", before: "$90", beforeStrike: true, now: "$45" },
    ],
  },
  {
    slug: "implantology",
    title: "Implantology",
    titleKm: "ការដាំធ្មេញ",
    rows: [
      { service: "France", serviceKm: "បារាំង (France)", before: "$2000", beforeStrike: true, now: "$950" },
      { service: "Korea Premium", serviceKm: "កូរ៉េ Premium", before: "$1500", beforeStrike: true, now: "$750" },
    ],
  },
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    titleKm: "ទន្តសាស្ត្រកុមារ",
    rows: [
      { service: "Primary teeth Ext", serviceKm: "ដកធ្មេញកុមារ", before: "$35", beforeStrike: true, now: "$12.5" },
      { service: "Space maintenance", serviceKm: "រក្សាចន្លោះធ្មេញ", before: "$150", beforeStrike: true, now: "$100" },
      { service: "RCT (Root Canal Treatment)", serviceKm: "ព្យាបាលឫសធ្មេញ (RCT)", before: "$70", beforeStrike: true, now: "$35" },
    ],
  },
];
