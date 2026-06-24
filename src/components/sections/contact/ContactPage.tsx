"use client";

import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactInfoSection } from "@/components/sections/contact/ContactInfoSection";
import { HereWeAreSection } from "@/components/sections/contact/HereWeAreSection";
import { SendMessageSection } from "@/components/sections/contact/SendMessageSection";
import { useLocale } from "@/i18n/LocaleProvider";

export function ContactPage() {
  const { dictionary, locale } = useLocale();

  return (
    <>
      <ContactHero dictionary={dictionary} />
      <HereWeAreSection dictionary={dictionary} locale={locale} />
      <ContactInfoSection dictionary={dictionary} />
      <SendMessageSection dictionary={dictionary} />
    </>
  );
}
