// Rich-text description as segments so key product names can render bold.
// Kept CMS-ready: an API can later return the same `{ text, bold }` shape.
export type RichSegment = { text: string; bold?: boolean };

export type Equipment = {
  slug: string;
  name: string;
  nameKm: string;
  description: RichSegment[];
  descriptionKm: RichSegment[];
  image: string;
  imageAlt: string;
};

// Base catalogue — the two products we currently have photography for.
const paxI3d: Equipment = {
  slug: "pax-i3d-smart",
  name: "PaX-i3D SMART, Digital X-Ray",
  nameKm: "PaX-i3D SMART, កាំរស្មីអ៊ិចឌីជីថល",
  description: [
    { text: "Experience the future of dental care with our " },
    { text: "Vatech PaX-i3D SMART", bold: true },
    {
      text:
        ". Get high-resolution 3D imaging with ultra-low radiation—capturing everything we need for your diagnosis in one quick, comfortable scan.",
    },
  ],
  descriptionKm: [
    { text: "ស្វែងយល់ពីអនាគតនៃការថែទាំធ្មេញជាមួយ " },
    { text: "Vatech PaX-i3D SMART", bold: true },
    {
      text:
        " របស់យើង។ ទទួលបានរូបភាព 3D គុណភាពខ្ពស់ជាមួយកាំរស្មីទាបបំផុត—ថតគ្រប់ព័ត៌មានដែលយើងត្រូវការសម្រាប់ការវិនិច្ឆ័យក្នុងការស្កេនតែម្តងយ៉ាងរហ័ស និងស្រួល។",
    },
  ],
  image: "/images/technology/pax-i3d-smart.png",
  imageAlt: "Vatech PaX-i3D SMART digital dental X-ray and CBCT scanner",
};

const cSailor: Equipment = {
  slug: "c-sailor-s1",
  name: "C-SAILOR S1 Dental implantation systems",
  nameKm: "ប្រព័ន្ធដាំធ្មេញ C-SAILOR S1",
  description: [
    { text: "The " },
    { text: "C-SAILOR S1 dental implantation system", bold: true },
    {
      text:
        " is the 4th generation of “Hummingbird” brushless motor, featuring not only a large, colorful LCD touchscreen but also being powerful and user-friendly.",
    },
  ],
  descriptionKm: [
    { text: "ប្រព័ន្ធដាំធ្មេញ C-SAILOR S1", bold: true },
    {
      text:
        " គឺជាជំនាន់ទី៤ នៃម៉ូទ័រគ្មានក្បាលស៊ី “Hummingbird” ដែលមិនត្រឹមតែមានអេក្រង់ប៉ះ LCD ធំ និងចម្រុះពណ៌ប៉ុណ្ណោះទេ ថែមទាំងមានថាមពលខ្លាំង និងងាយស្រួលប្រើ។",
    },
  ],
  image: "/images/technology/c-sailor-s1.png",
  imageAlt: "COXO C-SAILOR S1 dental implant motor with LCD touchscreen console",
};

// Mock listing that mirrors the design reference (six alternating cards).
// Replace with a real CMS-driven collection later.
export const equipment: Equipment[] = [
  paxI3d,
  cSailor,
  cSailor,
  paxI3d,
  paxI3d,
  cSailor,
];
