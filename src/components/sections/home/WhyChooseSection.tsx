import { Smile } from "lucide-react";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { SectionContainer } from "@/components/common/SectionContainer";
import { features } from "@/data/features";
import type { Dictionary, Locale } from "@/i18n/config";
import Image from "next/image";

export function WhyChooseSection({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  return (
    <SectionContainer className="bg-[linear-gradient(180deg,rgba(254,250,233,0)_50%,#FEFAE9_100%)] py-16!">
      <div className="text-center">
        <h2 className="text-h2 text-[32px] text-neutral-900">
          {dictionary.home.whyChoose.titlePrefix}{" "}
          <span className="text-primary-700">
            {dictionary.home.whyChoose.titleHighlight}
          </span>
        </h2>
        <p className="text-base mx-auto mt-2 max-w-2xl text-neutral-500 min-[744px]:text-body">
          {dictionary.home.whyChoose.subtitle}
        </p>
      </div>
      <Image
        width={450}
        height={350}
        src="/images/logo-sleeping.svg"
        alt="Well Dental Care"
        className="mx-auto grid place-items-center sizef-96"
      />
      <div className="grid gap-3 max-[744px]:gap-6 min-[744px]:grid-cols-2 lg:grid-cols-4 max-[744px]:px-12">
        {features.map((feature, index) => (
          <FeatureCard feature={feature} key={feature.title} locale={locale} index={index} />
        ))}
      </div>
    </SectionContainer>
  );
}
