"use client";

import { BlogSection } from "@/components/sections/home/BlogSection";
import { DentistsSection } from "@/components/sections/home/DentistsSection";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { HomeCTASection } from "@/components/sections/home/HomeCTASection";
import { LocationSection } from "@/components/sections/home/LocationSection";
import { PopularServicesSection } from "@/components/sections/home/PopularServicesSection";
import { TrustProofSection } from "@/components/sections/home/TrustProofSection";
import { WelcomeSection } from "@/components/sections/home/WelcomeSection";
import { WhyChooseSection } from "@/components/sections/home/WhyChooseSection";
import { useLocale } from "@/i18n/LocaleProvider";

export function HomePage() {
  const { dictionary, locale } = useLocale();

  return (
    <>
      <HeroSection dictionary={dictionary} />
      <WelcomeSection dictionary={dictionary} />
      <PopularServicesSection dictionary={dictionary} locale={locale} />
      <WhyChooseSection dictionary={dictionary} locale={locale} />
      <LocationSection dictionary={dictionary} locale={locale} />
      <BlogSection dictionary={dictionary} locale={locale} />
      <HomeCTASection dictionary={dictionary} />
    </>
  );
}
