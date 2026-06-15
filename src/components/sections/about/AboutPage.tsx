"use client";

import { DentistsSection } from "@/components/sections/home/DentistsSection";
import { HomeCTASection } from "@/components/sections/home/HomeCTASection";
import { WhyChooseSection } from "@/components/sections/home/WhyChooseSection";
import { WhatWeDoSection } from "@/components/sections/about/WhatWeDoSection";
import { useLocale } from "@/i18n/LocaleProvider";
import { WelcomeSection } from "../home/WelcomeSection";

export function AboutPage() {
  const { dictionary, locale } = useLocale();

  return (
    <>
      <WelcomeSection dictionary={dictionary} />
      <WhatWeDoSection dictionary={dictionary} />
      <DentistsSection dictionary={dictionary} locale={locale} />
      <WhyChooseSection dictionary={dictionary} locale={locale} />
      <HomeCTASection dictionary={dictionary} />
    </>
  );
}
