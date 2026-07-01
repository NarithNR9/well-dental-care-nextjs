"use client";

import { TechnologyCard } from "@/components/cards/TechnologyCard";
import { SectionContainer } from "@/components/common/SectionContainer";
import { equipment } from "@/data/technology";
import { useLocale } from "@/i18n/LocaleProvider";

// Checkerboard surface: cream when the grid cell (row + column) is even.
function toneForIndex(index: number) {
  const row = Math.floor(index / 2);
  const column = index % 2;
  return (row + column) % 2 === 0 ? "cream" : "neutral";
}

export function TechnologyPage() {
  const { dictionary, locale } = useLocale();
  const { technology } = dictionary;

  return (
    <>
      <SectionContainer className="bg-primary-50" as="div">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-h1 font-bold text-primary-700">{technology.title}</h1>
          <p className="text-body mx-auto mt-3 max-w-2xl text-neutral-700">
            {technology.subtitle}
          </p>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-white">
        <div className="grid grid-cols-1 gap-6 min-[744px]:grid-cols-2 min-[744px]:gap-8">
          {equipment.map((item, index) => (
            <TechnologyCard
              equipment={item}
              key={`${item.slug}-${index}`}
              locale={locale}
              tone={toneForIndex(index)}
            />
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
