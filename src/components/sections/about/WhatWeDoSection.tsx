import Image from "next/image";
import { SectionContainer } from "@/components/common/SectionContainer";
import type { Dictionary } from "@/i18n/config";

export function WhatWeDoSection({ dictionary }: { dictionary: Dictionary }) {
  const { whatWeDo } = dictionary.about;

  return (
    <SectionContainer className="bg-white">
      <div className="text-center">
        <h2 className="text-h2 font-bold text-neutral-900">{whatWeDo.title}</h2>
        <p className="text-body mx-auto mt-3 max-w-2xl text-neutral-500">
          {whatWeDo.subtitle}
        </p>
      </div>

      <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2 min-h-[80vh] lg:mt-12 lg:grid-cols-12">
        <div className="hidden lg:block lg:col-span-2"></div>
        <div className="relative min-h-[80vh] overflow-hidden rounded-[24px] bg-neutral-100 shadow-design-md h-full lg:min-h-full lg:col-span-4">
          <Image
            alt="Dr. Sonarith, Founder of Well Dental Care"
            className="object-cover object-top"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            src="/images/about/doctor.png"
          />
          <div className="absolute inset-x-6 bottom-32 rounded-[16px] border border-white/60 bg-white/40 px-4 py-3 shadow-design-sm backdrop-blur-md">
            <p className="text-small italic text-neutral-700">
              &ldquo;{whatWeDo.quote}&rdquo;
            </p>
            <p className="text-small mt-2 font-bold text-neutral-900">
              {whatWeDo.quoteAuthor}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between h-full gap-6 lg:col-span-4">
          <article className="rounded-[24px] border border-neutral-100 bg-white p-6 shadow-design-sm min-[744px]:p-8">
            <h3 className="text-h3 text-primary-700">{whatWeDo.visionTitle}</h3>
            <p className="text-body mt-3 text-neutral-500">{whatWeDo.vision}</p>
          </article>

          <article className="rounded-[24px] border border-neutral-100 bg-white p-6 shadow-design-sm min-[744px]:p-8">
            <h3 className="text-h3 text-primary-700">{whatWeDo.missionTitle}</h3>
            <p className="text-body mt-3 text-neutral-500">{whatWeDo.mission}</p>
          </article>

          <h2 className="text-h1 text-5xl mt-2 text-neutral-900">
            {whatWeDo.newLifePrefix}{" "}
            <span className="text-primary-700">{whatWeDo.newLifeHighlight}</span>
          </h2>
        </div>
        <div className="hidden lg:block lg:col-span-2"></div>
      </div>
    </SectionContainer>
  );
}
