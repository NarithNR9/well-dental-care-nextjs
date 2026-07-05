"use client";

import { SectionContainer } from "@/components/common/SectionContainer";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ClinicGallery } from "@/components/sections/clinic/ClinicGallery";
import { clinicSections } from "@/data/clinic";
import { useLocale } from "@/i18n/LocaleProvider";

export function OurClinicPage() {
  const { dictionary, locale } = useLocale();
  const isKm = locale === "km";
  const { ourClinic } = dictionary;

  return (
    <>
      <SectionContainer as="div" className="bg-primary-50">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-h1 font-bold text-primary-700">{ourClinic.title}</h1>
          <p className="text-body mx-auto mt-3 max-w-2xl text-neutral-700">
            {ourClinic.subtitle}
          </p>
        </div>
      </SectionContainer>

      {clinicSections.map((section, index) => (
        <SectionContainer
          className={index % 2 === 0 ? "bg-white" : "bg-neutral-50"}
          id={section.slug}
          key={section.slug}
        >
          <SectionHeading
            align="center"
            className="mb-8"
            subtitle={isKm ? section.subtitleKm : section.subtitle}
            title={isKm ? section.titleKm : section.title}
          />
          <ClinicGallery images={section.images} layout={section.layout} />
        </SectionContainer>
      ))}
    </>
  );
}
