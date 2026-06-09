import { en } from "@/i18n/locales/en";
import { km } from "@/i18n/locales/km";

export const locales = ["en", "km"] as const;

export type Locale = (typeof locales)[number];
export type Dictionary = typeof en;

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  km,
};

export const defaultLocale: Locale = "en";

export function isLocale(value: string | null): value is Locale {
  return value === "en" || value === "km";
}
