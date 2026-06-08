export type Dentist = {
  name: string;
  nameKm: string;
  role: string;
  roleKm: string;
  pose: "male" | "female";
  image: string;
};

export const dentists: Dentist[] = [
  { name: "Dr. Nimon", nameKm: "វេជ្ជ. នីមុន", role: "Dentist", roleKm: "ទន្តបណ្ឌិត", pose: "male", image: "/images/dentists/male.png" },
  { name: "Dr. Nana", nameKm: "វេជ្ជ. ណាណា", role: "Dentist", roleKm: "ទន្តបណ្ឌិត", pose: "female", image: "/images/dentists/female.png" },
  { name: "Dr. Vanne", nameKm: "វេជ្ជ. វណ្ណេ", role: "Dentist", roleKm: "ទន្តបណ្ឌិត", pose: "female", image: "/images/dentists/female.png" },
  { name: "Dr. Rithen", nameKm: "វេជ្ជ. រិទ្ធិន", role: "Dentist", roleKm: "ទន្តបណ្ឌិត", pose: "male", image: "/images/dentists/male.png" },
  { name: "Dr. Sopheak", nameKm: "វេជ្ជ. សុភ័ក្រ", role: "Dentist", roleKm: "ទន្តបណ្ឌិត", pose: "female", image: "/images/dentists/female.png" },
  { name: "Dr. Lina", nameKm: "វេជ្ជ. លីណា", role: "Dentist", roleKm: "ទន្តបណ្ឌិត", pose: "female", image: "/images/dentists/female.png" },
  { name: "Dr. Kanika", nameKm: "វេជ្ជ. កនិកា", role: "Dentist", roleKm: "ទន្តបណ្ឌិត", pose: "female", image: "/images/dentists/female.png" },
  { name: "Dr. Dara", nameKm: "វេជ្ជ. ដារ៉ា", role: "Dentist", roleKm: "ទន្តបណ្ឌិត", pose: "female", image: "/images/dentists/female.png" },
];
