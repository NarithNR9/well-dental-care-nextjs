export type BlogPost = {
  slug: string;
  title: string;
  titleKm: string;
  excerpt: string;
  excerptKm: string;
  imageTone: "checkup" | "whitening" | "children";
  image: string;
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
  },
];
