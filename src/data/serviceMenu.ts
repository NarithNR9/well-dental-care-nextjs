import type { Locale } from "@/i18n/config";
import { serviceCategories, services } from "@/data/services";

export type ServiceMenuLink = {
  title: string;
  titleKm: string;
  href: string;
};

export type ServiceMenuCategory = ServiceMenuLink & {
  children: ServiceMenuLink[];
};

// Single source of truth: derive the header/menu structure from the service data
// so category and service slugs never drift between the menu and the pages.
export const serviceMenuCategories: ServiceMenuCategory[] = serviceCategories.map(
  (category) => ({
    title: category.title,
    titleKm: category.titleKm,
    href: `/services/${category.slug}`,
    children: services
      .filter((service) => service.categorySlug === category.slug)
      .map((service) => ({
        title: service.title,
        titleKm: service.titleKm,
        href: `/services/${service.slug}`,
      })),
  }),
);

export function getServiceMenuTitle(item: ServiceMenuLink, locale: Locale) {
  return locale === "km" ? item.titleKm : item.title;
}
