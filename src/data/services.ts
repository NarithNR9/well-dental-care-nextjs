export type ServiceCategory = {
  slug: string;
  title: string;
  titleKm: string;
  description: string;
  descriptionKm: string;
};

export type Service = {
  slug: string;
  title: string;
  titleKm: string;
  categorySlug: string;
  popular: boolean;
  /** null => render placeholder; a future API populates the image URL. */
  image: string | null;
  about: string;
  aboutKm: string;
  included: string[];
  includedKm: string[];
  price: {
    /** Display string, e.g. "5$ - 15$". */
    from: string;
    note: string;
    noteKm: string;
  };
  designedFor: string;
  designedForKm: string;
  suggestion: string;
  suggestionKm: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "general-dentistry",
    title: "General Dentistry",
    titleKm: "ទន្តសាស្ត្រទូទៅ",
    description: "The foundation of a healthy smile starts with routine care and prevention.",
    descriptionKm: "ការថែទាំប្រចាំថ្ងៃ ដែលរក្សាធ្មេញ និងអញ្ចាញធ្មេញរបស់អ្នកឱ្យមានសុខភាពល្អ។",
  },
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    titleKm: "ទន្តសាស្ត្រសោភ័ណភាព",
    description: "Transform your confidence with aesthetic treatments tailored to you.",
    descriptionKm: "ផ្លាស់ប្តូរទំនុកចិត្តរបស់អ្នកជាមួយនឹងការព្យាបាលសោភ័ណភាពដែលត្រូវបានរចនាឡើងសម្រាប់អ្នក។",
  },
  {
    slug: "orthodontics",
    title: "Orthodontics",
    titleKm: "ពត់តម្រង់ធ្មេញ",
    description: "Achieve perfect alignment with modern solutions for all ages.",
    descriptionKm: "សម្រេចបាននូវការតម្រឹមដ៏ល្អឥតខ្ចោះជាមួយនឹងដំណោះស្រាយទំនើបសម្រាប់គ្រប់វ័យ។",
  },
  {
    slug: "oral-surgery",
    title: "Oral Surgery",
    titleKm: "វះកាត់មាត់ធ្មេញ",
    description: "Expert surgical care focused on your comfort and long-term recovery.",
    descriptionKm: "ការថែទាំវះកាត់ដោយអ្នកជំនាញផ្តោតលើផាសុកភាព និងការជាសះស្បើយរយៈពេលវែងរបស់អ្នក។",
  },
  {
    slug: "implants",
    title: "Implants",
    titleKm: "ដាំបង្គោលធ្មេញ",
    description: "The permanent, natural-looking solution for restoring missing teeth.",
    descriptionKm: "ការជំនួសធ្មេញដែលបាត់បង់ ឱ្យមើលទៅធម្មជាតិ និងស្ថិតស្ថេរ។",
  },
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    titleKm: "ទន្តសាស្ត្រកុមារ",
    description: "Gentle, fun, and specialized care to keep little smiles bright.",
    descriptionKm: "ការថែទាំដោយទន់ភ្លន់ សប្បាយ និងឯកទេស ដើម្បីរក្សាស្នាមញញឹមតូចៗឲ្យភ្លឺស្វាង។",
  },
];

export const services: Service[] = [
  // General Dentistry
  {
    slug: "dental-check-up-consultation",
    title: "Dental check-up & consultation",
    titleKm: "ពិនិត្យធ្មេញ និងពិគ្រោះយោបល់",
    categorySlug: "general-dentistry",
    popular: true,
    image: null,
    about:
      "A routine dental check-up and consultation is the foundation of long-term oral health. This essential preventive service allows our clinical team to thoroughly evaluate your teeth, gums, and jaw structure to detect early signs of decay, alignment issues, or gum disease before they develop into serious conditions. Using advanced diagnostic tools, we provide an accurate assessment of your current oral wellness and collaborate with you to address any discomfort, aesthetic goals, or dental concerns you may have.",
    aboutKm:
      "ការពិនិត្យធ្មេញ និងពិគ្រោះយោបល់ជាប្រចាំ គឺជាមូលដ្ឋាននៃសុខភាពមាត់ធ្មេញរយៈពេលវែង។ សេវាការពារដ៏សំខាន់នេះ អនុញ្ញាតឱ្យក្រុមជំនាញរបស់យើងវាយតម្លៃធ្មេញ អញ្ចាញធ្មេញ និងរចនាសម្ព័ន្ធថ្គាមរបស់អ្នកយ៉ាងម៉ត់ចត់ ដើម្បីរកឃើញសញ្ញាដំបូងនៃការពុក បញ្ហាតម្រឹមធ្មេញ ឬជំងឺអញ្ចាញធ្មេញ មុនពេលវាក្លាយជាស្ថានភាពធ្ងន់ធ្ងរ។ ដោយប្រើឧបករណ៍វិនិច្ឆ័យទំនើប យើងផ្តល់ការវាយតម្លៃត្រឹមត្រូវ និងសហការជាមួយអ្នកដើម្បីដោះស្រាយរាល់ការមិនស្រួល គោលដៅសោភ័ណភាព ឬកង្វល់អំពីធ្មេញ។",
    included: [
      "Complete oral examination",
      "X-ray (if needed)",
      "Personalized advice",
      "Treatment plan",
    ],
    includedKm: [
      "ការពិនិត្យមាត់ធ្មេញពេញលេញ",
      "ការថតកាំរស្មីអ៊ិច (បើចាំបាច់)",
      "ការប្រឹក្សាតាមតម្រូវការ",
      "ផែនការព្យាបាល",
    ],
    price: {
      from: "5$ - 15$",
      note: "Depending on the actual examination",
      noteKm: "អាស្រ័យលើការពិនិត្យជាក់ស្តែង",
    },
    designedFor: "All Patients.",
    designedForKm: "អ្នកជំងឺគ្រប់រូប។",
    suggestion: "Routine check-up every 6 months.",
    suggestionKm: "ពិនិត្យជាប្រចាំរៀងរាល់ ៦ ខែម្តង។",
  },
  {
    slug: "professional-teeth-cleaning",
    title: "Professional Teeth Cleaning",
    titleKm: "សម្អាតធ្មេញដោយអ្នកជំនាញ",
    categorySlug: "general-dentistry",
    popular: true,
    image: null,
    about:
      "Professional teeth cleaning removes the plaque and hardened tartar that daily brushing cannot reach. Our hygienists gently scale away buildup along the gum line, then polish each tooth to leave your mouth feeling fresh and looking brighter. Regular cleanings are one of the most effective ways to prevent cavities, gum disease, and bad breath.",
    aboutKm:
      "ការសម្អាតធ្មេញដោយអ្នកជំនាញ ជួយយកចេញនូវកំណកអាហារ និងថ្មកករ ដែលការដុសធ្មេញប្រចាំថ្ងៃមិនអាចយកចេញបាន។ អ្នកជំនាញរបស់យើងសម្អាតយ៉ាងថ្នមៗតាមបណ្តោយអញ្ចាញធ្មេញ រួចខាត់ធ្មេញនីមួយៗ ឱ្យមាត់របស់អ្នកមានភាពស្រស់ស្រាយ និងភ្លឺថ្លា។ ការសម្អាតជាប្រចាំ គឺជាវិធីដ៏មានប្រសិទ្ធភាពក្នុងការការពារធ្មេញពុក ជំងឺអញ្ចាញធ្មេញ និងក្លិនមាត់។",
    included: [
      "Full-mouth scaling",
      "Stain and plaque removal",
      "Tooth polishing",
      "Fluoride treatment",
    ],
    includedKm: [
      "ការសម្អាតកករពេញមាត់",
      "ការយកចេញស្នាមប្រឡាក់ និងកំណកអាហារ",
      "ការខាត់ធ្មេញ",
      "ការព្យាបាលដោយ Fluoride",
    ],
    price: {
      from: "15$ - 30$",
      note: "Depending on the level of buildup",
      noteKm: "អាស្រ័យលើកម្រិតនៃកំណកអាហារ",
    },
    designedFor: "Patients of all ages.",
    designedForKm: "អ្នកជំងឺគ្រប់វ័យ។",
    suggestion: "Professional cleaning every 6 months.",
    suggestionKm: "សម្អាតដោយអ្នកជំនាញរៀងរាល់ ៦ ខែម្តង។",
  },
  {
    slug: "dental-x-rays-diagnostics",
    title: "Dental X-rays & Diagnostics",
    titleKm: "ថតកាំរស្មីអ៊ិច និងវិនិច្ឆ័យធ្មេញ",
    categorySlug: "general-dentistry",
    popular: false,
    image: null,
    about:
      "Digital dental X-rays give us a clear view of what is happening beneath the surface — between teeth, inside the roots, and within the bone. With low-radiation imaging and modern diagnostic software, we can detect hidden decay, infections, and bone loss early, so treatment stays simple and effective.",
    aboutKm:
      "ការថតកាំរស្មីអ៊ិចបែបឌីជីថល ផ្តល់ឱ្យយើងនូវទិដ្ឋភាពច្បាស់លាស់នៃអ្វីដែលកើតឡើងនៅក្រោមផ្ទៃ — រវាងធ្មេញ ខាងក្នុងឫស និងក្នុងឆ្អឹង។ ដោយប្រើការថតរូបដែលមានកាំរស្មីទាប និងកម្មវិធីវិនិច្ឆ័យទំនើប យើងអាចរកឃើញការពុកលាក់កំបាំង ការឆ្លងមេរោគ និងការបាត់បង់ឆ្អឹងតាំងពីដំបូង។",
    included: [
      "Digital X-ray imaging",
      "Low-radiation sensors",
      "Detailed diagnosis report",
      "Treatment recommendation",
    ],
    includedKm: [
      "ការថតរូបបែបឌីជីថល",
      "ឧបករណ៍ចាប់សញ្ញាកាំរស្មីទាប",
      "របាយការណ៍វិនិច្ឆ័យលម្អិត",
      "អនុសាសន៍ព្យាបាល",
    ],
    price: {
      from: "10$ - 25$",
      note: "Depending on the number of images",
      noteKm: "អាស្រ័យលើចំនួនរូបភាព",
    },
    designedFor: "Patients needing detailed diagnosis.",
    designedForKm: "អ្នកជំងឺដែលត្រូវការការវិនិច្ឆ័យលម្អិត។",
    suggestion: "As recommended by your dentist.",
    suggestionKm: "តាមការណែនាំរបស់ទន្តបណ្ឌិតរបស់អ្នក។",
  },
  {
    slug: "fillings-tooth-colored-composite",
    title: "Fillings (Tooth-colored composite)",
    titleKm: "ប៉ះធ្មេញពណ៌ដូចធ្មេញ",
    categorySlug: "general-dentistry",
    popular: false,
    image: null,
    about:
      "Tooth-colored composite fillings repair cavities and small fractures while blending seamlessly with your natural teeth. We remove the decayed area, then bond a durable resin that restores strength and shape — without the dark look of old metal fillings. The result is a healthy tooth that looks and feels natural.",
    aboutKm:
      "ការប៉ះធ្មេញដោយវត្ថុធាតុពណ៌ដូចធ្មេញ ជួយជួសជុលធ្មេញពុក និងស្នាមប្រេះតូចៗ ដោយលាយចូលគ្នាយ៉ាងស្អាតជាមួយធ្មេញធម្មជាតិរបស់អ្នក។ យើងយកចេញផ្នែកដែលពុក រួចភ្ជាប់សារធាតុ resin ដ៏រឹងមាំ ដែលស្តារភាពរឹងមាំ និងរូបរាងឡើងវិញ ដោយគ្មានពណ៌ខ្មៅដូចការប៉ះធ្មេញដោយលោហៈចាស់ឡើយ។",
    included: [
      "Decay removal",
      "Tooth-colored composite",
      "Shade matching",
      "Bite adjustment",
    ],
    includedKm: [
      "ការយកចេញផ្នែកពុក",
      "វត្ថុធាតុពណ៌ដូចធ្មេញ",
      "ការផ្គូផ្គងពណ៌",
      "ការកែតម្រូវការខាំ",
    ],
    price: {
      from: "15$ - 40$",
      note: "Depending on the size of the cavity",
      noteKm: "អាស្រ័យលើទំហំនៃប្រហោងធ្មេញ",
    },
    designedFor: "Patients with cavities or chipped teeth.",
    designedForKm: "អ្នកជំងឺដែលមានធ្មេញពុក ឬធ្មេញបាក់។",
    suggestion: "Treat early to avoid larger damage.",
    suggestionKm: "ព្យាបាលឱ្យបានឆាប់ ដើម្បីជៀសវាងការខូចខាតធំ។",
  },
  {
    slug: "gum-disease-treatment",
    title: "Gum Disease Treatment",
    titleKm: "ព្យាបាលជំងឺអញ្ចាញធ្មេញ",
    categorySlug: "general-dentistry",
    popular: false,
    image: null,
    about:
      "Gum disease treatment stops the bleeding, swelling, and bone loss caused by built-up bacteria below the gum line. Through deep cleaning (scaling and root planing) and tailored aftercare, we calm inflammation, help gums reattach to the teeth, and protect you from tooth loss in the years ahead.",
    aboutKm:
      "ការព្យាបាលជំងឺអញ្ចាញធ្មេញ ជួយបញ្ឈប់ការហូរឈាម ការហើម និងការបាត់បង់ឆ្អឹង ដែលបណ្តាលមកពីបាក់តេរីកកក្រោមអញ្ចាញធ្មេញ។ តាមរយៈការសម្អាតជ្រៅ និងការថែទាំក្រោយព្យាបាលតាមតម្រូវការ យើងជួយបន្ថយការរលាក ជួយឱ្យអញ្ចាញធ្មេញភ្ជាប់ទៅធ្មេញវិញ និងការពារអ្នកពីការបាត់បង់ធ្មេញ។",
    included: [
      "Deep cleaning (scaling)",
      "Root planing",
      "Gum health assessment",
      "Aftercare guidance",
    ],
    includedKm: [
      "ការសម្អាតជ្រៅ",
      "ការសម្អាតឫសធ្មេញ",
      "ការវាយតម្លៃសុខភាពអញ្ចាញធ្មេញ",
      "ការណែនាំថែទាំក្រោយព្យាបាល",
    ],
    price: {
      from: "30$ - 80$",
      note: "Depending on the stage of the disease",
      noteKm: "អាស្រ័យលើដំណាក់កាលនៃជំងឺ",
    },
    designedFor: "Patients with bleeding or swollen gums.",
    designedForKm: "អ្នកជំងឺដែលមានអញ្ចាញធ្មេញហូរឈាម ឬហើម។",
    suggestion: "Seek treatment as soon as symptoms appear.",
    suggestionKm: "ស្វែងរកការព្យាបាលភ្លាមៗ នៅពេលមានរោគសញ្ញា។",
  },

  // Cosmetic Dentistry
  {
    slug: "teeth-whitening",
    title: "Teeth whitening",
    titleKm: "ធ្វើឱ្យធ្មេញស",
    categorySlug: "cosmetic-dentistry",
    popular: true,
    image: null,
    about:
      "Professional teeth whitening safely lifts years of stains from coffee, tea, and everyday foods to reveal a brighter, more confident smile. Performed under dental supervision, our whitening is far stronger and more even than over-the-counter kits — with care taken to protect your enamel and reduce sensitivity.",
    aboutKm:
      "ការធ្វើឱ្យធ្មេញសដោយអ្នកជំនាញ ជួយយកចេញស្នាមប្រឡាក់ពីកាហ្វេ តែ និងអាហារប្រចាំថ្ងៃ ដើម្បីបង្ហាញស្នាមញញឹមភ្លឺថ្លា និងជឿជាក់ជាងមុន។ ធ្វើឡើងក្រោមការត្រួតពិនិត្យរបស់ទន្តបណ្ឌិត ការធ្វើឱ្យធ្មេញសរបស់យើងមានប្រសិទ្ធភាព និងស្មើគ្នាជាងផលិតផលលក់ទូទៅ ដោយយកចិត្តទុកដាក់ការពារស្រទាប់ធ្មេញ និងកាត់បន្ថយការប្រកាច់។",
    included: [
      "Shade assessment",
      "Professional whitening gel",
      "Gum protection",
      "Sensitivity care advice",
    ],
    includedKm: [
      "ការវាយតម្លៃពណ៌ធ្មេញ",
      "ជែលធ្វើឱ្យធ្មេញសប្រកបដោយជំនាញ",
      "ការការពារអញ្ចាញធ្មេញ",
      "ការណែនាំថែទាំការប្រកាច់",
    ],
    price: {
      from: "40$ - 120$",
      note: "Depending on the whitening method",
      noteKm: "អាស្រ័យលើវិធីសាស្ត្រធ្វើឱ្យធ្មេញស",
    },
    designedFor: "Patients with stained or dull teeth.",
    designedForKm: "អ្នកជំងឺដែលមានធ្មេញប្រឡាក់ ឬស្រអាប់។",
    suggestion: "Maintain with good oral hygiene.",
    suggestionKm: "ថែរក្សាដោយអនាម័យមាត់ធ្មេញល្អ។",
  },
  {
    slug: "dental-bonding",
    title: "Dental Bonding",
    titleKm: "បិទជួសជុលធ្មេញ",
    categorySlug: "cosmetic-dentistry",
    popular: false,
    image: null,
    about:
      "Dental bonding is a quick, gentle way to repair chips, close small gaps, and reshape uneven teeth. We apply a tooth-colored resin, sculpt it to match your smile, and harden it for a natural finish — often in a single visit and without removing any healthy tooth structure.",
    aboutKm:
      "ការបិទជួសជុលធ្មេញ គឺជាវិធីរហ័ស និងថ្នមៗ ដើម្បីជួសជុលធ្មេញបាក់ បិទចន្លោះតូចៗ និងកែទម្រង់ធ្មេញមិនស្មើ។ យើងដាក់សារធាតុ resin ពណ៌ដូចធ្មេញ ចម្លាក់វាឱ្យសមនឹងស្នាមញញឹមរបស់អ្នក រួចធ្វើឱ្យរឹង ដោយជារឿយៗធ្វើបានក្នុងការមកម្តង ដោយមិនយកចេញរចនាសម្ព័ន្ធធ្មេញដែលនៅល្អ។",
    included: [
      "Tooth-colored resin",
      "Shaping and sculpting",
      "Shade matching",
      "Polishing",
    ],
    includedKm: [
      "សារធាតុ resin ពណ៌ដូចធ្មេញ",
      "ការកែទម្រង់ និងចម្លាក់",
      "ការផ្គូផ្គងពណ៌",
      "ការខាត់ឱ្យភ្លឺ",
    ],
    price: {
      from: "20$ - 60$",
      note: "Per tooth, depending on the case",
      noteKm: "ក្នុងមួយធ្មេញ អាស្រ័យលើករណី",
    },
    designedFor: "Patients with chipped or gapped teeth.",
    designedForKm: "អ្នកជំងឺដែលមានធ្មេញបាក់ ឬមានចន្លោះ។",
    suggestion: "Avoid biting hard objects to extend results.",
    suggestionKm: "ជៀសវាងការខាំវត្ថុរឹង ដើម្បីបន្តរយៈពេលនៃលទ្ធផល។",
  },
  {
    slug: "veneers",
    title: "Veneers (porcelain/composite)",
    titleKm: "វីនៀរ (ប៉សឺឡែន/កុំពូស៊ីត)",
    categorySlug: "cosmetic-dentistry",
    popular: true,
    image: null,
    about:
      "Veneers are thin, custom-made shells bonded to the front of your teeth to transform their color, shape, and alignment. Whether in lifelike porcelain or affordable composite, veneers can correct stains, chips, and small gaps to give you a beautifully even, natural-looking smile that lasts for years.",
    aboutKm:
      "វីនៀរ គឺជាសំបកស្តើងៗ ដែលផលិតតាមតម្រូវការ ភ្ជាប់ទៅផ្នែកខាងមុខនៃធ្មេញ ដើម្បីផ្លាស់ប្តូរពណ៌ រូបរាង និងការតម្រឹម។ មិនថាជាប៉សឺឡែនដែលមើលទៅធម្មជាតិ ឬកុំពូស៊ីតដែលមានតម្លៃសមរម្យ វីនៀរអាចកែស្នាមប្រឡាក់ ធ្មេញបាក់ និងចន្លោះតូចៗ ដើម្បីផ្តល់ឱ្យអ្នកនូវស្នាមញញឹមស្មើស្អាត និងធម្មជាតិ។",
    included: [
      "Smile design consultation",
      "Custom veneer fabrication",
      "Shade selection",
      "Precision bonding",
    ],
    includedKm: [
      "ការប្រឹក្សារចនាស្នាមញញឹម",
      "ការផលិតវីនៀរតាមតម្រូវការ",
      "ការជ្រើសរើសពណ៌",
      "ការភ្ជាប់យ៉ាងជាក់លាក់",
    ],
    price: {
      from: "120$ - 350$",
      note: "Per tooth, by material and design",
      noteKm: "ក្នុងមួយធ្មេញ តាមវត្ថុធាតុ និងការរចនា",
    },
    designedFor: "Patients wanting a full smile makeover.",
    designedForKm: "អ្នកជំងឺដែលចង់កែស្នាមញញឹមទាំងស្រុង។",
    suggestion: "Maintain with regular check-ups.",
    suggestionKm: "ថែរក្សាដោយការពិនិត្យជាប្រចាំ។",
  },
  {
    slug: "gum-contouring",
    title: "Gum Contouring (Gum reshaping)",
    titleKm: "កែទម្រង់អញ្ចាញធ្មេញ",
    categorySlug: "cosmetic-dentistry",
    popular: false,
    image: null,
    about:
      "Gum contouring reshapes an uneven or 'gummy' smile by gently removing or sculpting excess gum tissue. Using precise, comfortable techniques, we balance your gum line so your teeth look longer, more symmetrical, and naturally proportioned.",
    aboutKm:
      "ការកែទម្រង់អញ្ចាញធ្មេញ ជួយកែស្នាមញញឹមដែលមានអញ្ចាញធ្មេញមិនស្មើ ឬច្រើនពេក ដោយយកចេញ ឬចម្លាក់ជាលិកាអញ្ចាញធ្មេញលើស។ ដោយប្រើបច្ចេកទេសជាក់លាក់ និងស្រួល យើងធ្វើឱ្យបណ្តោយអញ្ចាញធ្មេញរបស់អ្នកមានតុល្យភាព ឱ្យធ្មេញមើលទៅវែង និងស្មើស្អាតជាងមុន។",
    included: [
      "Gum line assessment",
      "Gentle reshaping",
      "Comfort-focused technique",
      "Healing guidance",
    ],
    includedKm: [
      "ការវាយតម្លៃបណ្តោយអញ្ចាញធ្មេញ",
      "ការកែទម្រង់ថ្នមៗ",
      "បច្ចេកទេសផ្តោតលើភាពស្រួល",
      "ការណែនាំការជាសះស្បើយ",
    ],
    price: {
      from: "50$ - 150$",
      note: "Depending on the treatment area",
      noteKm: "អាស្រ័យលើតំបន់ព្យាបាល",
    },
    designedFor: "Patients with an uneven gum line.",
    designedForKm: "អ្នកជំងឺដែលមានបណ្តោយអញ្ចាញធ្មេញមិនស្មើ។",
    suggestion: "Combine with veneers for best results.",
    suggestionKm: "ផ្សំជាមួយវីនៀរ ដើម្បីលទ្ធផលល្អបំផុត។",
  },

  // Orthodontics
  {
    slug: "brace",
    title: "Brace",
    titleKm: "ដង្កៀបធ្មេញ",
    categorySlug: "orthodontics",
    popular: true,
    image: null,
    about:
      "Braces gradually move crowded, gapped, or misaligned teeth into their ideal position for a healthier bite and a more confident smile. Our orthodontic team designs a clear, staged treatment plan and adjusts your braces over time, supporting you with comfortable care at every visit.",
    aboutKm:
      "ដង្កៀបធ្មេញ ជួយផ្លាស់ទីធ្មេញដែលច្រើនកកស្ទះ មានចន្លោះ ឬមិនត្រង់ បន្តិចម្តងៗ ទៅទីតាំងល្អបំផុត ដើម្បីការខាំល្អ និងស្នាមញញឹមជឿជាក់។ ក្រុមជំនាញរបស់យើងរៀបចំផែនការព្យាបាលច្បាស់លាស់ និងកែតម្រូវដង្កៀបធ្មេញតាមពេលវេលា ដោយជួយថែទាំអ្នកយ៉ាងស្រួលរាល់ពេលមកជួប។",
    included: [
      "Orthodontic assessment",
      "Custom braces fitting",
      "Regular adjustments",
      "Progress monitoring",
    ],
    includedKm: [
      "ការវាយតម្លៃការតម្រឹមធ្មេញ",
      "ការដាក់ដង្កៀបតាមតម្រូវការ",
      "ការកែតម្រូវជាប្រចាំ",
      "ការតាមដានវឌ្ឍនភាព",
    ],
    price: {
      from: "300$ - 900$",
      note: "Full treatment, depending on the case",
      noteKm: "ការព្យាបាលពេញលេញ អាស្រ័យលើករណី",
    },
    designedFor: "Patients with crowded or misaligned teeth.",
    designedForKm: "អ្នកជំងឺដែលមានធ្មេញកកស្ទះ ឬមិនត្រង់។",
    suggestion: "Start early for the best outcome.",
    suggestionKm: "ចាប់ផ្តើមឱ្យបានឆាប់ ដើម្បីលទ្ធផលល្អបំផុត។",
  },
  {
    slug: "retainer",
    title: "Retainer",
    titleKm: "ឧបករណ៍រក្សាទម្រង់ធ្មេញ",
    categorySlug: "orthodontics",
    popular: false,
    image: null,
    about:
      "A retainer keeps your teeth in their new position after braces, protecting the results you worked so hard for. We create a custom-fit retainer and guide you on how and when to wear it, so your smile stays straight and stable for the long term.",
    aboutKm:
      "ឧបករណ៍រក្សាទម្រង់ធ្មេញ ជួយរក្សាធ្មេញរបស់អ្នកនៅទីតាំងថ្មី បន្ទាប់ពីពាក់ដង្កៀប ដោយការពារលទ្ធផលដែលអ្នកបានខិតខំ។ យើងផលិតឧបករណ៍រក្សាទម្រង់តាមតម្រូវការ និងណែនាំអ្នកអំពីរបៀប និងពេលវេលាក្នុងការពាក់ ដើម្បីឱ្យស្នាមញញឹមរបស់អ្នកនៅត្រង់ស្ថិតស្ថេរ។",
    included: [
      "Custom retainer fabrication",
      "Fitting and adjustment",
      "Wear schedule guidance",
      "Follow-up check",
    ],
    includedKm: [
      "ការផលិតឧបករណ៍រក្សាទម្រង់តាមតម្រូវការ",
      "ការដាក់ និងកែតម្រូវ",
      "ការណែនាំកាលវិភាគពាក់",
      "ការពិនិត្យតាមដាន",
    ],
    price: {
      from: "40$ - 120$",
      note: "Per retainer, by type",
      noteKm: "ក្នុងមួយឧបករណ៍ តាមប្រភេទ",
    },
    designedFor: "Patients who finished braces treatment.",
    designedForKm: "អ្នកជំងឺដែលបញ្ចប់ការពាក់ដង្កៀប។",
    suggestion: "Wear as directed to prevent relapse.",
    suggestionKm: "ពាក់តាមការណែនាំ ដើម្បីការពារធ្មេញកុំឱ្យត្រឡប់ដូចដើម។",
  },
  {
    slug: "ceramic-clear-braces",
    title: "Ceramic (Clear) Braces",
    titleKm: "ដង្កៀបសេរ៉ាមិចថ្លា",
    categorySlug: "orthodontics",
    popular: false,
    image: null,
    about:
      "Ceramic clear braces straighten your teeth with brackets that blend in with your natural tooth color, making treatment far less noticeable. They offer the same reliable results as traditional braces with a more discreet look — a popular choice for teens and adults alike.",
    aboutKm:
      "ដង្កៀបសេរ៉ាមិចថ្លា ជួយតម្រឹមធ្មេញរបស់អ្នកដោយប្រើដង្កៀបដែលលាយចូលនឹងពណ៌ធ្មេញធម្មជាតិ ធ្វើឱ្យការព្យាបាលមិនសូវកត់សម្គាល់។ វាផ្តល់លទ្ធផលដែលអាចទុកចិត្តបានដូចដង្កៀបធម្មតា ប៉ុន្តែមើលទៅសម្ងាត់ជាង — ជាជម្រើសពេញនិយមសម្រាប់យុវវ័យ និងមនុស្សពេញវ័យ។",
    included: [
      "Tooth-colored brackets",
      "Custom treatment plan",
      "Regular adjustments",
      "Progress monitoring",
    ],
    includedKm: [
      "ដង្កៀបពណ៌ដូចធ្មេញ",
      "ផែនការព្យាបាលតាមតម្រូវការ",
      "ការកែតម្រូវជាប្រចាំ",
      "ការតាមដានវឌ្ឍនភាព",
    ],
    price: {
      from: "500$ - 1200$",
      note: "Full treatment, depending on the case",
      noteKm: "ការព្យាបាលពេញលេញ អាស្រ័យលើករណី",
    },
    designedFor: "Patients wanting discreet braces.",
    designedForKm: "អ្នកជំងឺដែលចង់បានដង្កៀបមិនកត់សម្គាល់។",
    suggestion: "Avoid staining foods during treatment.",
    suggestionKm: "ជៀសវាងអាហារដែលធ្វើឱ្យប្រឡាក់ ក្នុងពេលព្យាបាល។",
  },
  {
    slug: "space-maintainers",
    title: "Space Maintainers",
    titleKm: "ឧបករណ៍រក្សាចន្លោះធ្មេញ",
    categorySlug: "orthodontics",
    popular: false,
    image: null,
    about:
      "When a child loses a baby tooth too early, a space maintainer holds the gap open so adult teeth can come in correctly. This simple, comfortable appliance helps prevent crowding and future orthodontic problems, protecting your child's developing smile.",
    aboutKm:
      "នៅពេលកុមារបាត់បង់ធ្មេញទឹកដោះមុនពេលកំណត់ ឧបករណ៍រក្សាចន្លោះធ្មេញ ជួយរក្សាចន្លោះ ដើម្បីឱ្យធ្មេញពេញវ័យដុះចេញបានត្រឹមត្រូវ។ ឧបករណ៍សាមញ្ញ និងស្រួលនេះ ជួយការពារការកកស្ទះធ្មេញ និងបញ្ហាតម្រឹមធ្មេញនាពេលអនាគត ដោយការពារស្នាមញញឹមកំពុងលូតលាស់របស់កូនអ្នក។",
    included: [
      "Space assessment",
      "Custom appliance fitting",
      "Comfort adjustment",
      "Growth monitoring",
    ],
    includedKm: [
      "ការវាយតម្លៃចន្លោះធ្មេញ",
      "ការដាក់ឧបករណ៍តាមតម្រូវការ",
      "ការកែតម្រូវឱ្យស្រួល",
      "ការតាមដានការលូតលាស់",
    ],
    price: {
      from: "60$ - 150$",
      note: "Per appliance, depending on the type",
      noteKm: "ក្នុងមួយឧបករណ៍ អាស្រ័យលើប្រភេទ",
    },
    designedFor: "Children who lost a baby tooth early.",
    designedForKm: "កុមារដែលបាត់ធ្មេញទឹកដោះមុនពេលកំណត់។",
    suggestion: "Regular check-ups as adult teeth develop.",
    suggestionKm: "ពិនិត្យជាប្រចាំ ពេលធ្មេញពេញវ័យលូតលាស់។",
  },

  // Oral Surgery
  {
    slug: "wisdom-tooth-extraction",
    title: "Wisdom Tooth Extraction",
    titleKm: "ដកធ្មេញប្រាជ្ញា",
    categorySlug: "oral-surgery",
    popular: false,
    image: null,
    about:
      "Wisdom teeth often grow at an angle or get stuck, causing pain, swelling, and crowding. Our team carefully plans and performs the extraction with gentle techniques and effective numbing, then guides you through a smooth recovery so you can get back to comfort quickly.",
    aboutKm:
      "ធ្មេញប្រាជ្ញាជារឿយៗ ដុះទ្រេត ឬជាប់ បណ្តាលឱ្យឈឺ ហើម និងកកស្ទះ។ ក្រុមរបស់យើងរៀបចំ និងធ្វើការដកយ៉ាងប្រុងប្រយ័ត្ន ដោយប្រើបច្ចេកទេសថ្នមៗ និងថ្នាំស្ពឹកមានប្រសិទ្ធភាព រួចណែនាំអ្នកឆ្លងកាត់ការជាសះស្បើយយ៉ាងរលូន ដើម្បីឱ្យអ្នកវិលត្រឡប់មកភាពស្រួលវិញបានឆាប់។",
    included: [
      "Pre-surgery assessment",
      "Local anesthesia",
      "Gentle extraction",
      "Aftercare instructions",
    ],
    includedKm: [
      "ការវាយតម្លៃមុនវះកាត់",
      "ការស្ពឹកមូលដ្ឋាន",
      "ការដកធ្មេញថ្នមៗ",
      "ការណែនាំថែទាំក្រោយវះកាត់",
    ],
    price: {
      from: "40$ - 150$",
      note: "Per tooth, depending on complexity",
      noteKm: "ក្នុងមួយធ្មេញ អាស្រ័យលើភាពស្មុគស្មាញ",
    },
    designedFor: "Patients with impacted wisdom teeth.",
    designedForKm: "អ្នកជំងឺដែលមានធ្មេញប្រាជ្ញាជាប់។",
    suggestion: "Remove early to avoid complications.",
    suggestionKm: "ដកឱ្យបានឆាប់ ដើម្បីជៀសវាងផលវិបាក។",
  },
  {
    slug: "surgical-tooth-extraction",
    title: "Surgical Tooth Extraction",
    titleKm: "វះកាត់ដកធ្មេញ",
    categorySlug: "oral-surgery",
    popular: false,
    image: null,
    about:
      "Some teeth are badly broken, decayed, or below the gum and need a surgical extraction. With careful planning, effective numbing, and a gentle clinical team, we remove the tooth safely and protect the surrounding bone — preparing the area for future restoration if needed.",
    aboutKm:
      "ធ្មេញខ្លះបាក់ខ្លាំង ពុក ឬនៅក្រោមអញ្ចាញធ្មេញ ហើយត្រូវការការវះកាត់ដក។ ដោយការរៀបចំយ៉ាងប្រុងប្រយ័ត្ន ការស្ពឹកមានប្រសិទ្ធភាព និងក្រុមជំនាញថ្នមៗ យើងដកធ្មេញដោយសុវត្ថិភាព និងការពារឆ្អឹងជុំវិញ ដោយរៀបចំតំបន់នោះសម្រាប់ការស្តារនាពេលក្រោយ បើចាំបាច់។",
    included: [
      "Surgical planning",
      "Local anesthesia",
      "Safe tooth removal",
      "Aftercare guidance",
    ],
    includedKm: [
      "ការរៀបចំការវះកាត់",
      "ការស្ពឹកមូលដ្ឋាន",
      "ការដកធ្មេញដោយសុវត្ថិភាព",
      "ការណែនាំថែទាំក្រោយវះកាត់",
    ],
    price: {
      from: "30$ - 120$",
      note: "Per tooth, depending on the case",
      noteKm: "ក្នុងមួយធ្មេញ អាស្រ័យលើករណី",
    },
    designedFor: "Patients with severely damaged teeth.",
    designedForKm: "អ្នកជំងឺដែលមានធ្មេញខូចខាតធ្ងន់ធ្ងរ។",
    suggestion: "Discuss replacement options after healing.",
    suggestionKm: "ពិភាក្សាជម្រើសជំនួសធ្មេញ បន្ទាប់ពីជាសះស្បើយ។",
  },

  // Implants
  {
    slug: "single-tooth-implants",
    title: "Single Tooth Implants",
    titleKm: "ដាំបង្គោលធ្មេញមួយ",
    categorySlug: "implants",
    popular: true,
    image: null,
    about:
      "A single tooth implant replaces one missing tooth with a titanium post and a natural-looking crown — without affecting the neighboring teeth. It restores full chewing strength and a complete smile, and with good care it can last for decades.",
    aboutKm:
      "ការដាំបង្គោលធ្មេញមួយ ជួយជំនួសធ្មេញដែលបាត់មួយ ដោយប្រើបង្គោល titanium និងគ្រោបធ្មេញ ដែលមើលទៅធម្មជាតិ ដោយមិនប៉ះពាល់ដល់ធ្មេញជិតខាង។ វាស្តារកម្លាំងទំពាពេញលេញ និងស្នាមញញឹមពេញលេញឡើងវិញ ហើយជាមួយការថែទាំល្អ វាអាចស្ថិតស្ថេរបានរាប់ទសវត្សរ៍។",
    included: [
      "Implant consultation",
      "Titanium post placement",
      "Custom crown fitting",
      "Healing follow-up",
    ],
    includedKm: [
      "ការប្រឹក្សាការដាំបង្គោល",
      "ការដាក់បង្គោល titanium",
      "ការដាក់គ្រោបធ្មេញតាមតម្រូវការ",
      "ការតាមដានការជាសះស្បើយ",
    ],
    price: {
      from: "400$ - 900$",
      note: "Per implant, depending on materials",
      noteKm: "ក្នុងមួយបង្គោល អាស្រ័យលើវត្ថុធាតុ",
    },
    designedFor: "Patients missing one tooth.",
    designedForKm: "អ្នកជំងឺដែលបាត់ធ្មេញមួយ។",
    suggestion: "Maintain with regular cleanings.",
    suggestionKm: "ថែរក្សាដោយការសម្អាតជាប្រចាំ។",
  },
  {
    slug: "implant-supported-bridges",
    title: "Implant-supported Bridges",
    titleKm: "ស្ពានធ្មេញគាំទ្រដោយបង្គោល",
    categorySlug: "implants",
    popular: false,
    image: null,
    about:
      "When several teeth in a row are missing, an implant-supported bridge restores them with a stable, long-lasting solution anchored by dental implants. Unlike removable dentures, it stays firmly in place, feels natural, and helps preserve the jawbone for the future.",
    aboutKm:
      "នៅពេលធ្មេញច្រើនជាប់ៗគ្នាបាត់ ស្ពានធ្មេញគាំទ្រដោយបង្គោល ជួយស្តារពួកវាឡើងវិញ ដោយដំណោះស្រាយស្ថិតស្ថេររយៈពេលវែង ដែលភ្ជាប់ដោយបង្គោលធ្មេញ។ ខុសពីធ្មេញសិប្បនិមិត្តដែលអាចដោះបាន វានៅជាប់នឹងកន្លែង មានអារម្មណ៍ធម្មជាតិ និងជួយរក្សាឆ្អឹងថ្គាមសម្រាប់អនាគត។",
    included: [
      "Treatment planning",
      "Implant placement",
      "Custom bridge fabrication",
      "Bite adjustment",
    ],
    includedKm: [
      "ការរៀបចំផែនការព្យាបាល",
      "ការដាក់បង្គោល",
      "ការផលិតស្ពានធ្មេញតាមតម្រូវការ",
      "ការកែតម្រូវការខាំ",
    ],
    price: {
      from: "1200$ - 3000$",
      note: "Full bridge, depending on the case",
      noteKm: "ស្ពានពេញលេញ អាស្រ័យលើករណី",
    },
    designedFor: "Patients missing several teeth in a row.",
    designedForKm: "អ្នកជំងឺដែលបាត់ធ្មេញច្រើនជាប់ៗគ្នា។",
    suggestion: "Good oral hygiene extends its lifespan.",
    suggestionKm: "អនាម័យមាត់ធ្មេញល្អ ជួយបង្កើនអាយុកាលរបស់វា។",
  },

  // Pediatric Dentistry
  {
    slug: "dental-check-ups-for-kid",
    title: "Dental Check-ups for kid",
    titleKm: "ពិនិត្យធ្មេញសម្រាប់កុមារ",
    categorySlug: "pediatric-dentistry",
    popular: false,
    image: null,
    about:
      "Children's dental check-ups build healthy habits early and catch small problems before they grow. In a warm, friendly setting, our team examines your child's teeth and gums, offers gentle guidance on brushing, and helps your little one feel relaxed and confident at the dentist.",
    aboutKm:
      "ការពិនិត្យធ្មេញសម្រាប់កុមារ ជួយបង្កើតទម្លាប់ល្អតាំងពីដំបូង និងរកឃើញបញ្ហាតូចៗ មុនពេលវាកើនធំ។ ក្នុងបរិយាកាសកក់ក្តៅ និងស្និទ្ធស្នាល ក្រុមរបស់យើងពិនិត្យធ្មេញ និងអញ្ចាញធ្មេញរបស់កូនអ្នក ផ្តល់ការណែនាំថ្នមៗអំពីការដុសធ្មេញ និងជួយឱ្យកូនរបស់អ្នកមានអារម្មណ៍ស្រួល និងជឿជាក់។",
    included: [
      "Gentle oral examination",
      "Cavity check",
      "Brushing guidance",
      "Parent consultation",
    ],
    includedKm: [
      "ការពិនិត្យមាត់ធ្មេញថ្នមៗ",
      "ការពិនិត្យធ្មេញពុក",
      "ការណែនាំការដុសធ្មេញ",
      "ការប្រឹក្សាជាមួយឪពុកម្តាយ",
    ],
    price: {
      from: "5$ - 15$",
      note: "Depending on the actual examination",
      noteKm: "អាស្រ័យលើការពិនិត្យជាក់ស្តែង",
    },
    designedFor: "Children and young patients.",
    designedForKm: "កុមារ និងអ្នកជំងឺវ័យក្មេង។",
    suggestion: "Check-up every 6 months.",
    suggestionKm: "ពិនិត្យរៀងរាល់ ៦ ខែម្តង។",
  },
  {
    slug: "friendly-teeth-cleanings-for-kid",
    title: "Friendly Teeth Cleanings for kid",
    titleKm: "សម្អាតធ្មេញបែបស្និទ្ធស្នាលសម្រាប់កុមារ",
    categorySlug: "pediatric-dentistry",
    popular: false,
    image: null,
    about:
      "A friendly cleaning keeps your child's teeth healthy while making the dentist a happy place to visit. We gently remove plaque, apply protective fluoride, and turn good oral care into a positive, encouraging experience that builds lifelong habits.",
    aboutKm:
      "ការសម្អាតធ្មេញបែបស្និទ្ធស្នាល ជួយរក្សាធ្មេញរបស់កូនអ្នកឱ្យមានសុខភាពល្អ ខណៈធ្វើឱ្យការទៅជួបទន្តបណ្ឌិតក្លាយជាបទពិសោធន៍រីករាយ។ យើងយកចេញកំណកអាហារថ្នមៗ ដាក់ fluoride ការពារ និងបង្វែរការថែទាំមាត់ធ្មេញឱ្យក្លាយជាបទពិសោធន៍វិជ្ជមាន ដែលបង្កើតទម្លាប់ល្អពេញមួយជីវិត។",
    included: [
      "Gentle plaque removal",
      "Fluoride application",
      "Tooth polishing",
      "Fun brushing tips",
    ],
    includedKm: [
      "ការយកចេញកំណកអាហារថ្នមៗ",
      "ការដាក់ fluoride",
      "ការខាត់ធ្មេញ",
      "គន្លឹះដុសធ្មេញសប្បាយ",
    ],
    price: {
      from: "10$ - 20$",
      note: "Depending on the level of buildup",
      noteKm: "អាស្រ័យលើកម្រិតនៃកំណកអាហារ",
    },
    designedFor: "Children of all ages.",
    designedForKm: "កុមារគ្រប់វ័យ។",
    suggestion: "Cleaning every 6 months.",
    suggestionKm: "សម្អាតរៀងរាល់ ៦ ខែម្តង។",
  },
  {
    slug: "tooth-fillings-for-kids",
    title: "Tooth Fillings for Kids",
    titleKm: "ប៉ះធ្មេញសម្រាប់កុមារ",
    categorySlug: "pediatric-dentistry",
    popular: false,
    image: null,
    about:
      "When a child has a cavity, a gentle tooth-colored filling stops the decay and protects the tooth so it can do its job until the adult tooth arrives. We keep the experience calm and comfortable, explaining each step in a way that reassures both child and parent.",
    aboutKm:
      "នៅពេលកុមារមានធ្មេញពុក ការប៉ះធ្មេញពណ៌ដូចធ្មេញថ្នមៗ ជួយបញ្ឈប់ការពុក និងការពារធ្មេញ ដើម្បីឱ្យវាដំណើរការ រហូតដល់ធ្មេញពេញវ័យដុះ។ យើងរក្សាបទពិសោធន៍ឱ្យស្ងប់ និងស្រួល ដោយពន្យល់ជំហាននីមួយៗ ដែលធ្វើឱ្យទាំងកុមារ និងឪពុកម្តាយមានទំនុកចិត្ត។",
    included: [
      "Decay removal",
      "Tooth-colored filling",
      "Comfort-focused care",
      "Prevention advice",
    ],
    includedKm: [
      "ការយកចេញផ្នែកពុក",
      "ការប៉ះធ្មេញពណ៌ដូចធ្មេញ",
      "ការថែទាំផ្តោតលើភាពស្រួល",
      "ការណែនាំការការពារ",
    ],
    price: {
      from: "15$ - 35$",
      note: "Per tooth, depending on the cavity",
      noteKm: "ក្នុងមួយធ្មេញ អាស្រ័យលើប្រហោងធ្មេញ",
    },
    designedFor: "Children with cavities.",
    designedForKm: "កុមារដែលមានធ្មេញពុក។",
    suggestion: "Treat early to protect baby teeth.",
    suggestionKm: "ព្យាបាលឱ្យបានឆាប់ ដើម្បីការពារធ្មេញទឹកដោះ។",
  },
];

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((category) => category.slug === slug);
}

export function getServicesByCategory(slug: string): Service[] {
  return services.filter((service) => service.categorySlug === slug);
}

export function getPopularServices(): Service[] {
  return services.filter((service) => service.popular);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
