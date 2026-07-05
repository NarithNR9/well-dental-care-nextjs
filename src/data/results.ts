// Before/after treatment results. Kept CMS-ready: an API can return the same
// shape later. The two mock photos are reused across cases until real
// patient photography is supplied.
export type TreatmentResult = {
  slug: string;
  title: string;
  titleKm: string;
  description: string;
  descriptionKm: string;
  beforeImage: string;
  afterImage: string;
};

const beforeImage = "/images/results/braces-before.png";
const afterImage = "/images/results/braces-after.png";

export const treatmentResults: TreatmentResult[] = [
  {
    slug: "metal-braces-alignment",
    title: "Metal Braces Alignment",
    titleKm: "ការតម្រឹមធ្មេញដោយដែក",
    description:
      "Corrected crowded teeth and improved bite alignment using traditional metal braces.",
    descriptionKm:
      "កែតម្រូវធ្មេញកកកុញ និងធ្វើឱ្យប្រសើរឡើងនូវការតម្រឹមខាំ ដោយប្រើដែកតម្រង់ធ្មេញបែបប្រពៃណី។",
    beforeImage,
    afterImage,
  },
  {
    slug: "clear-aligner-treatment",
    title: "Clear Aligner Treatment",
    titleKm: "ការព្យាបាលដោយធ្មេញថ្លា",
    description:
      "Discreetly straightened mild spacing and rotation with a custom clear aligner series.",
    descriptionKm:
      "តម្រង់ធ្មេញដែលមានចន្លោះ និងបង្វិលបន្តិចបន្តួច ដោយប្រើឧបករណ៍ធ្មេញថ្លាតាមតម្រូវការ។",
    beforeImage,
    afterImage,
  },
  {
    slug: "crowding-correction",
    title: "Crowding Correction",
    titleKm: "ការកែតម្រូវធ្មេញកកកុញ",
    description:
      "Relieved severe crowding to create a balanced, evenly spaced smile.",
    descriptionKm:
      "កាត់បន្ថយភាពកកកុញធ្ងន់ធ្ងរ ដើម្បីបង្កើតស្នាមញញឹមមានតុល្យភាព និងចន្លោះស្មើគ្នា។",
    beforeImage,
    afterImage,
  },
  {
    slug: "overbite-correction",
    title: "Overbite Correction",
    titleKm: "ការកែតម្រូវការខាំលើស",
    description:
      "Reduced a deep overbite and aligned the upper and lower arches for a healthier bite.",
    descriptionKm:
      "កាត់បន្ថយការខាំលើសជ្រៅ និងតម្រឹមធ្មេញខាងលើ និងខាងក្រោម ដើម្បីការខាំដែលមានសុខភាពល្អ។",
    beforeImage,
    afterImage,
  },
  {
    slug: "smile-line-refinement",
    title: "Smile Line Refinement",
    titleKm: "ការកែលម្អខ្សែស្នាមញញឹម",
    description:
      "Refined the smile line and midline for a more symmetrical, confident smile.",
    descriptionKm:
      "កែលម្អខ្សែស្នាមញញឹម និងបន្ទាត់កណ្តាល សម្រាប់ស្នាមញញឹមស៊ីមេទ្រី និងមានទំនុកចិត្ត។",
    beforeImage,
    afterImage,
  },
  {
    slug: "gap-closure",
    title: "Gap Closure",
    titleKm: "ការបិទចន្លោះធ្មេញ",
    description:
      "Closed front-tooth gaps and finished with a natural, uniform result.",
    descriptionKm:
      "បិទចន្លោះធ្មេញផ្នែកខាងមុខ និងបញ្ចប់ដោយលទ្ធផលធម្មជាតិ និងស្មើគ្នា។",
    beforeImage,
    afterImage,
  },
];
