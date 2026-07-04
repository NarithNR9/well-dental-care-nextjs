// Blog posts. `content` is a block list so the detail page stays CMS-ready
// (an API can return the same shape). `date` is ISO; `readMinutes` drives the
// "N min read" label.
export type BlogBlock =
  | { type: "heading"; text: string; textKm: string }
  | { type: "paragraph"; text: string; textKm: string }
  | { type: "image"; src: string; alt: string };

export type BlogPost = {
  slug: string;
  title: string;
  titleKm: string;
  excerpt: string;
  excerptKm: string;
  imageTone: "checkup" | "whitening" | "children";
  image: string;
  date: string;
  readMinutes: number;
  content: BlogBlock[];
};

export const blogs: BlogPost[] = [
  {
    slug: "why-regular-oral-health-check-up-matter",
    title: "Why regular Oral Health Check-up matter?",
    titleKm: "ហេតុអ្វីការពិនិត្យសុខភាពមាត់ធ្មេញទៀងទាត់សំខាន់?",
    excerpt:
      "Most of us only think about the dentist when we feel a sharp pain or notice a problem. Prevention is the real foundation of confident care.",
    excerptKm:
      "មនុស្សភាគច្រើនគិតពីទន្តបណ្ឌិតនៅពេលឈឺចាប់ប៉ុណ្ណោះ។ ការពារជាមុនគឺជាមូលដ្ឋាននៃការថែទាំល្អ។",
    imageTone: "checkup",
    image: "/images/blogs/blog1.png",
    date: "2026-05-04",
    readMinutes: 2,
    content: [
      {
        type: "paragraph",
        text: "Most of us only think about the dentist when we feel a sharp pain or notice a problem. However, at Well Dental Care, we believe that “prevention is better than cure.” Regular oral health check-ups are the foundation of a healthy life. Here's why your next appointment should be a priority.",
        textKm: "មនុស្សភាគច្រើនគិតពីទន្តបណ្ឌិត តែនៅពេលឈឺចាប់ ឬកត់សម្គាល់ឃើញបញ្ហាប៉ុណ្ណោះ។ ប៉ុន្តែនៅ Well Dental Care យើងជឿថា «ការការពារ ប្រសើរជាងការព្យាបាល»។ ការពិនិត្យសុខភាពមាត់ធ្មេញទៀងទាត់ គឺជាមូលដ្ឋាននៃជីវិតដែលមានសុខភាពល្អ។ នេះជាមូលហេតុដែលការណាត់ជួបបន្ទាប់របស់អ្នកគួរតែជាអាទិភាព។",
      },
      {
        type: "heading",
        text: "1. Early Detection of Issues",
        textKm: "១. ការរកឃើញបញ្ហាទាន់ពេល",
      },
      {
        type: "paragraph",
        text: "Dental problems like cavities, gum disease, and oral infections often start small—so small you might not even feel them. Our expert team uses advanced technology to catch these issues in their earliest stages, long before they become painful, expensive, or difficult to treat. From preventing tooth decay to screening for oral cancers, early detection gives you peace of mind and keeps you smiling confidently.",
        textKm: "បញ្ហាធ្មេញ ដូចជាធ្មេញពុក ជំងឺអញ្ចាញធ្មេញ និងការឆ្លងមេរោគក្នុងមាត់ ច្រើនតែចាប់ផ្តើមតូច—តូចរហូតដល់អ្នកអាចមិនដឹងខ្លួន។ ក្រុមអ្នកជំនាញរបស់យើងប្រើបច្ចេកវិទ្យាទំនើប ដើម្បីរកឃើញបញ្ហាទាំងនេះតាំងពីដំណាក់កាលដំបូង មុននឹងវាក្លាយជាការឈឺចាប់ ចំណាយច្រើន ឬពិបាកព្យាបាល។ ការរកឃើញទាន់ពេលផ្តល់ភាពស្ងប់ចិត្ត និងរក្សាស្នាមញញឹមប្រកបដោយទំនុកចិត្ត។",
      },
      {
        type: "heading",
        text: "2. The Power of Professional Cleaning",
        textKm: "២. អានុភាពនៃការសម្អាតដោយអ្នកជំនាញ",
      },
      {
        type: "paragraph",
        text: "Even with the most disciplined home routine, some areas of the mouth are simply impossible to clean properly with a toothbrush alone. Our professional cleanings target stubborn plaque and tartar (calculus) that build up over time. By removing these deposits, we significantly reduce your risk of gum disease. Plus, nothing beats the feeling of a professionally cleaned mouth and fresh breath!",
        textKm: "ទោះបីអ្នកមានទម្លាប់ថែទាំនៅផ្ទះល្អយ៉ាងណាក៏ដោយ តំបន់ខ្លះក្នុងមាត់ពិបាកសម្អាតឱ្យស្អាតបានដោយប្រើតែច្រាសដុសធ្មេញ។ ការសម្អាតដោយអ្នកជំនាញរបស់យើងផ្តោតលើកំណកអាហារ និងថ្មកករ ដែលកកកុញតាមពេលវេលា។ ការយកចេញនូវកករទាំងនេះ កាត់បន្ថយហានិភ័យនៃជំងឺអញ្ចាញធ្មេញ ព្រមទាំងធ្វើឱ្យមាត់ស្រស់ស្អាត និងដង្ហើមក្រអូប។",
      },
      {
        type: "heading",
        text: "3. State-of-the-Art Technology",
        textKm: "៣. បច្ចេកវិទ្យាទំនើប",
      },
      {
        type: "paragraph",
        text: "We believe in providing our patients with the best. That's why Well Dental Care is equipped with state-of-the-art equipment for accurate diagnoses and efficient treatments. Whether it's digital imaging or advanced dental tools, our technology ensures that your visit is as comfortable and stress-free as possible.",
        textKm: "យើងជឿជាក់លើការផ្តល់ជូនអ្នកជំងឺនូវអ្វីដែលល្អបំផុត។ នោះហើយជាមូលហេតុ Well Dental Care បំពាក់ដោយឧបករណ៍ទំនើប សម្រាប់ការវិនិច្ឆ័យត្រឹមត្រូវ និងការព្យាបាលមានប្រសិទ្ធភាព។ មិនថារូបភាពឌីជីថល ឬឧបករណ៍ធ្មេញទំនើប បច្ចេកវិទ្យារបស់យើងធានាថាការមកជួបរបស់អ្នកមានផាសុកភាព និងគ្មានភាពតានតឹង។",
      },
      {
        type: "heading",
        text: "4. Personalized Advice & Care",
        textKm: "៤. ការប្រឹក្សា និងថែទាំតាមតម្រូវការ",
      },
      {
        type: "paragraph",
        text: "Every mouth is unique. At each visit, we offer personalized advice tailored to your specific oral health needs. Whether you're looking for the right products, brushing techniques, or specialized care for different life stages—from children to adults—we are here to support your dental journey every step of the way.",
        textKm: "មាត់ធ្មេញនីមួយៗមានលក្ខណៈពិសេស។ រៀងរាល់ការមកជួប យើងផ្តល់ការប្រឹក្សាតាមតម្រូវការសុខភាពមាត់ធ្មេញរបស់អ្នក។ មិនថាអ្នកត្រូវការផលិតផលសមស្រប បច្ចេកទេសដុសធ្មេញ ឬការថែទាំឯកទេសសម្រាប់វ័យផ្សេងៗ—ចាប់ពីកុមារដល់មនុស្សពេញវ័យ—យើងនៅទីនេះ ដើម្បីជួយដំណើរថែទាំធ្មេញរបស់អ្នកគ្រប់ជំហាន។",
      },
      {
        type: "image",
        src: "/images/blogs/blog1-infographic.png",
        alt: "Well Dental Care infographic on why regular oral health check-ups matter",
      },
      {
        type: "heading",
        text: "How Often Should You Visit?",
        textKm: "តើអ្នកគួរមកជួបញឹកញាប់ប៉ុណ្ណា?",
      },
      {
        type: "paragraph",
        text: "While we recommend a standard check-up every 6 months to maintain optimal oral health, our team will work with you to provide a personalized plan based on your specific needs.",
        textKm: "ខណៈយើងណែនាំឱ្យពិនិត្យរៀងរាល់ ៦ ខែម្តង ដើម្បីរក្សាសុខភាពមាត់ធ្មេញល្អបំផុត ក្រុមការងាររបស់យើងនឹងរៀបចំផែនការតាមតម្រូវការជាក់លាក់របស់អ្នក។",
      },
    ],
  },
  {
    slug: "prevent-yellow-teeth",
    title: "5 Tips You Should Know To Prevent Yellow Teeth.",
    titleKm: "៥ គន្លឹះដើម្បីការពារធ្មេញលឿង",
    excerpt:
      "Most of us only think about the dentist when we need a brighter grin. These habits can help protect your natural tooth color.",
    excerptKm:
      "ទម្លាប់ប្រចាំថ្ងៃអាចជួយការពារពណ៌ធ្មេញធម្មជាតិ និងរក្សាស្នាមញញឹមស្រស់ស្អាត។",
    imageTone: "whitening",
    image: "/images/blogs/blog2.png",
    date: "2026-04-22",
    readMinutes: 3,
    content: [
      {
        type: "paragraph",
        text: "A bright smile is one of the first things people notice about you. Over time, though, teeth can lose their natural whiteness. The good news? Many causes of yellowing are preventable with a few simple, everyday habits.",
        textKm: "ស្នាមញញឹមភ្លឺថ្លា គឺជារឿងដំបូងដែលមនុស្សកត់សម្គាល់អំពីអ្នក។ ប៉ុន្តែតាមពេលវេលា ធ្មេញអាចបាត់បង់ពណ៌សធម្មជាតិ។ ដំណឹងល្អគឺ មូលហេតុនៃការលឿងជាច្រើន អាចការពារបានដោយទម្លាប់សាមញ្ញប្រចាំថ្ងៃមួយចំនួន។",
      },
      {
        type: "heading",
        text: "1. Watch What You Drink",
        textKm: "១. ប្រយ័ត្នចំពោះអ្វីដែលអ្នកផឹក",
      },
      {
        type: "paragraph",
        text: "Coffee, tea, red wine, and dark sodas are among the biggest culprits behind stained teeth. Try using a straw, rinsing with water afterward, or simply cutting back to protect your enamel's natural color.",
        textKm: "កាហ្វេ តែ ស្រាក្រហម និងទឹកក្រូចខ្មៅ គឺជាមូលហេតុធំៗនៃការប្រឡាក់ធ្មេញ។ សូមសាកល្បងប្រើបំពង់បឺត លាងមាត់ដោយទឹកបន្ទាប់ពីផឹក ឬកាត់បន្ថយ ដើម្បីការពារពណ៌ធម្មជាតិនៃស្រទាប់ធ្មេញ។",
      },
      {
        type: "heading",
        text: "2. Brush and Floss Consistently",
        textKm: "២. ដុសធ្មេញ និងប្រើអំបោះធ្មេញឱ្យទៀងទាត់",
      },
      {
        type: "paragraph",
        text: "Plaque buildup makes teeth look dull and yellow. Brushing twice a day with a fluoride toothpaste and flossing daily removes the film that traps stains before it has a chance to harden.",
        textKm: "កំណកអាហារធ្វើឱ្យធ្មេញមើលទៅស្រអាប់ និងលឿង។ ការដុសធ្មេញពីរដងក្នុងមួយថ្ងៃ ជាមួយថ្នាំដុសធ្មេញមាន Fluoride និងប្រើអំបោះធ្មេញរាល់ថ្ងៃ ជួយយកចេញនូវស្រទាប់ដែលចាប់ស្នាមប្រឡាក់ មុនពេលវារឹង។",
      },
      {
        type: "heading",
        text: "3. Don't Skip Professional Cleanings",
        textKm: "៣. កុំរំលងការសម្អាតដោយអ្នកជំនាញ",
      },
      {
        type: "paragraph",
        text: "Some surface stains and hardened tartar can only be removed by a professional. Regular cleanings keep your smile brighter than any at-home routine can achieve on its own.",
        textKm: "ស្នាមប្រឡាក់លើផ្ទៃ និងថ្មកកររឹង អាចយកចេញបានតែដោយអ្នកជំនាញប៉ុណ្ណោះ។ ការសម្អាតទៀងទាត់ រក្សាស្នាមញញឹមឱ្យភ្លឺថ្លាជាងទម្លាប់នៅផ្ទះតែម្នាក់ឯង។",
      },
      {
        type: "heading",
        text: "4. Quit Tobacco",
        textKm: "៤. ឈប់ជក់បារី",
      },
      {
        type: "paragraph",
        text: "Smoking and chewing tobacco are two of the most severe causes of deep, stubborn tooth discoloration. Quitting protects both the color of your teeth and your overall health.",
        textKm: "ការជក់បារី និងការទំពាថ្នាំជក់ គឺជាមូលហេតុធ្ងន់ធ្ងរបំផុតពីរ នៃការប្រែពណ៌ធ្មេញជ្រៅ និងពិបាកលុប។ ការឈប់ ការពារទាំងពណ៌ធ្មេញ និងសុខភាពទូទៅរបស់អ្នក។",
      },
      {
        type: "heading",
        text: "5. Consider Professional Whitening",
        textKm: "៥. ពិចារណាការធ្វើឱ្យធ្មេញសដោយអ្នកជំនាញ",
      },
      {
        type: "paragraph",
        text: "When stains are already set in, a supervised whitening treatment is the safest and most effective way to restore a naturally bright shade. Talk to our team about the option that best fits your smile.",
        textKm: "នៅពេលស្នាមប្រឡាក់ជាប់រួចហើយ ការព្យាបាលធ្វើឱ្យធ្មេញសក្រោមការត្រួតពិនិត្យ គឺជាវិធីសុវត្ថិភាព និងមានប្រសិទ្ធភាពបំផុត ដើម្បីស្តារពណ៌ភ្លឺធម្មជាតិ។ សូមពិភាក្សាជាមួយក្រុមការងាររបស់យើង អំពីជម្រើសសមស្របនឹងស្នាមញញឹមរបស់អ្នក។",
      },
    ],
  },
  {
    slug: "healthy-dental-habits-for-children",
    title: "Establishing Healthy Dental Habits for Children.",
    titleKm: "បង្កើតទម្លាប់ថែទាំធ្មេញល្អសម្រាប់កុមារ",
    excerpt:
      "Most of us only think about the dentist when we need help. Children benefit most when healthy habits start early.",
    excerptKm:
      "កុមារទទួលបានអត្ថប្រយោជន៍ច្រើនបំផុត នៅពេលចាប់ផ្តើមទម្លាប់ថែទាំធ្មេញល្អតាំងពីតូច។",
    imageTone: "children",
    image: "/images/blogs/blog3.png",
    date: "2026-04-10",
    readMinutes: 3,
    content: [
      {
        type: "paragraph",
        text: "The habits children build early often last a lifetime. Helping your child care for their teeth today sets the foundation for a healthy, confident smile as they grow.",
        textKm: "ទម្លាប់ដែលកុមារបង្កើតតាំងពីតូច ច្រើនតែជាប់មួយជីវិត។ ការជួយកូនរបស់អ្នកថែទាំធ្មេញនៅថ្ងៃនេះ គឺបង្កើតមូលដ្ឋានសម្រាប់ស្នាមញញឹមមានសុខភាពល្អ និងទំនុកចិត្ត នៅពេលពួកគេធំឡើង។",
      },
      {
        type: "heading",
        text: "1. Start Early",
        textKm: "១. ចាប់ផ្តើមតាំងពីតូច",
      },
      {
        type: "paragraph",
        text: "Begin cleaning your baby's gums even before the first tooth appears, and introduce a soft toothbrush as soon as teeth emerge. Early routines make dental care feel normal, not scary.",
        textKm: "ចាប់ផ្តើមសម្អាតអញ្ចាញធ្មេញរបស់ទារក សូម្បីមុនពេលធ្មេញដំបូងដុះ ហើយណែនាំច្រាសដុសធ្មេញទន់ ភ្លាមៗពេលធ្មេញចាប់ផ្តើមដុះ។ ទម្លាប់តាំងពីតូច ធ្វើឱ្យការថែទាំធ្មេញក្លាយជារឿងធម្មតា មិនគួរឱ្យខ្លាច។",
      },
      {
        type: "heading",
        text: "2. Make Brushing Fun",
        textKm: "២. ធ្វើឱ្យការដុសធ្មេញសប្បាយ",
      },
      {
        type: "paragraph",
        text: "Use a favorite song, a colorful toothbrush, or a simple reward chart to turn brushing into a game. Children are far more likely to keep up habits they genuinely enjoy.",
        textKm: "ប្រើបទចម្រៀងដែលកូនចូលចិត្ត ច្រាសដុសធ្មេញចម្រុះពណ៌ ឬតារាងរង្វាន់សាមញ្ញ ដើម្បីប្រែការដុសធ្មេញឱ្យទៅជាល្បែង។ កុមារទំនងជារក្សាទម្លាប់ដែលពួកគេចូលចិត្តពិតប្រាកដ។",
      },
      {
        type: "heading",
        text: "3. Lead by Example",
        textKm: "៣. ធ្វើជាគំរូ",
      },
      {
        type: "paragraph",
        text: "Kids copy what they see. Brushing and flossing together as a family shows them that good oral care is simply an everyday part of life.",
        textKm: "កុមារធ្វើតាមអ្វីដែលពួកគេឃើញ។ ការដុសធ្មេញ និងប្រើអំបោះធ្មេញជាមួយគ្នាទាំងគ្រួសារ បង្ហាញពួកគេថា ការថែទាំមាត់ធ្មេញល្អ គ្រាន់តែជាផ្នែកមួយនៃជីវិតប្រចាំថ្ងៃ។",
      },
      {
        type: "heading",
        text: "4. Visit the Dentist Regularly",
        textKm: "៤. មកជួបទន្តបណ្ឌិតឱ្យទៀងទាត់",
      },
      {
        type: "paragraph",
        text: "Early, friendly dental visits help children feel comfortable and allow us to catch small issues before they grow. We recommend a first visit by their first birthday.",
        textKm: "ការមកជួបទន្តបណ្ឌិតតាំងពីតូច ក្នុងបរិយាកាសរាក់ទាក់ ជួយកុមារឱ្យមានផាសុកភាព និងអនុញ្ញាតឱ្យយើងរកឃើញបញ្ហាតូចៗ មុនពេលវាធំ។ យើងណែនាំឱ្យមកជួបលើកដំបូង នៅពេលកូនមានអាយុ ១ ឆ្នាំ។",
      },
    ],
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find((post) => post.slug === slug);
}

export function getRelatedBlogs(slug: string, limit = 3): BlogPost[] {
  return blogs.filter((post) => post.slug !== slug).slice(0, limit);
}
