// Flat "Explore" grouping shown in the header dropdown / mobile drawer.
// Labels resolve from `dictionary.nav[key]`, so this stays CMS-ready.
export type ExploreMenuItem = {
  key: "ourClinic" | "priceList" | "blog";
  href: string;
};

export const exploreMenuItems: ExploreMenuItem[] = [
  { key: "ourClinic", href: "/our-clinic" },
  { key: "priceList", href: "/price-list" },
  { key: "blog", href: "/blog" },
];
