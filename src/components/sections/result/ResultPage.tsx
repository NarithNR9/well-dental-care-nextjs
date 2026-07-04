"use client";

import { ResultCard } from "@/components/cards/ResultCard";
import { SectionContainer } from "@/components/common/SectionContainer";
import { treatmentResults } from "@/data/results";
import { useLocale } from "@/i18n/LocaleProvider";

export function ResultPage() {
  const { dictionary, locale } = useLocale();
  const { result } = dictionary;

  return (
    <>
      <SectionContainer as="div" className="bg-primary-50">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-h1 font-bold text-primary-700">{result.title}</h1>
          <p className="text-body mx-auto mt-3 max-w-2xl text-neutral-700">
            {result.subtitle}
          </p>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-white">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 min-[744px]:grid-cols-2 min-[744px]:gap-x-8">
          {treatmentResults.map((item) => (
            <ResultCard
              afterLabel={result.afterLabel}
              beforeLabel={result.beforeLabel}
              key={item.slug}
              locale={locale}
              result={item}
            />
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
