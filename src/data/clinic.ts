// Our Clinic gallery sections. Each section has a fixed photo layout that is
// preserved across breakpoints. CMS-ready: an API can return the same shape.
export type ClinicImage = { src: string; alt: string };

export type ClinicLayout = "waiting" | "treatment" | "parking" | "activity";

export type ClinicSection = {
  slug: string;
  title: string;
  titleKm: string;
  subtitle: string;
  subtitleKm: string;
  layout: ClinicLayout;
  images: ClinicImage[];
};

export const clinicSections: ClinicSection[] = [
  {
    slug: "waiting-area",
    title: "Waiting Area",
    titleKm: "តំបន់រង់ចាំ",
    subtitle: "A calm and comfortable space designed for your relaxation.",
    subtitleKm: "កន្លែងស្ងប់ស្ងាត់ និងផាសុកភាព ដែលរចនាឡើងសម្រាប់ការសម្រាករបស់អ្នក។",
    layout: "waiting",
    images: [
      { src: "/images/clinic/waiting-reception.png", alt: "Well Dental Care reception desk and waiting area" },
      { src: "/images/clinic/waiting-lounge-neon.png", alt: "Modern waiting lounge with dental chair and tooth sign" },
      { src: "/images/clinic/waiting-lounge.png", alt: "Comfortable waiting lounge with soft seating" },
    ],
  },
  {
    slug: "treatment-room",
    title: "Treatment Room",
    titleKm: "បន្ទប់ព្យាបាល",
    subtitle: "Equipped with advanced technology to ensure safe and effective care.",
    subtitleKm: "បំពាក់ដោយបច្ចេកវិទ្យាទំនើប ដើម្បីធានាការថែទាំប្រកបដោយសុវត្ថិភាព និងប្រសិទ្ធភាព។",
    layout: "treatment",
    images: [
      { src: "/images/clinic/treatment-cbct.png", alt: "CBCT dental imaging room with diagnostic monitor" },
      { src: "/images/clinic/treatment-studio.png", alt: "Consultation and imaging studio room" },
      { src: "/images/clinic/treatment-operatory.png", alt: "Dental operatory with treatment chair and instruments" },
    ],
  },
  {
    slug: "parking-space",
    title: "Parking Space",
    titleKm: "កន្លែងចតរថយន្ត",
    subtitle: "Spacious and secure parking for your comfort and convenience.",
    subtitleKm: "កន្លែងចតធំទូលាយ និងមានសុវត្ថិភាព សម្រាប់ភាពងាយស្រួលរបស់អ្នក។",
    layout: "parking",
    images: [
      { src: "/images/clinic/parking-front.png", alt: "Well Dental Care clinic front with parking" },
      { src: "/images/clinic/parking-side.png", alt: "Clinic entrance with motorbike and car parking" },
    ],
  },
  {
    slug: "clinic-activity",
    title: "Clinic Activity",
    titleKm: "សកម្មភាពគ្លីនិក",
    subtitle: "Our dedicated team providing care with compassion and expertise.",
    subtitleKm: "ក្រុមការងារប្តេជ្ញាចិត្តរបស់យើង ផ្តល់ការថែទាំដោយក្តីអាណិត និងជំនាញ។",
    layout: "activity",
    images: [
      { src: "/images/clinic/activity-waiting-family.png", alt: "Families waiting comfortably in the clinic lounge" },
      { src: "/images/clinic/activity-reception-busy.png", alt: "Busy reception area with patients and staff" },
      { src: "/images/clinic/activity-cleaning.png", alt: "Patient receiving a professional teeth cleaning" },
      { src: "/images/clinic/activity-front-desk.png", alt: "Reception team assisting patients at the front desk" },
      { src: "/images/clinic/activity-braces-kid.png", alt: "Young patient having braces examined by dentists" },
      { src: "/images/clinic/activity-cbct-scan.png", alt: "Patient undergoing a 3D CBCT scan" },
      { src: "/images/clinic/activity-consult-xray.png", alt: "Dentist reviewing an X-ray with a patient" },
      { src: "/images/clinic/activity-hygienist.png", alt: "Hygienist treating a patient in the operatory" },
      { src: "/images/clinic/activity-exam.png", alt: "Dentist performing a dental examination" },
    ],
  },
];
