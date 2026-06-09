import { DentistCard } from "@/components/cards/DentistCard";
import { SectionContainer } from "@/components/common/SectionContainer";
import { SectionHeading } from "@/components/common/SectionHeading";
import { dentists } from "@/data/dentists";
import type { Dictionary, Locale } from "@/i18n/config";

export function DentistsSection({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  return (
    <SectionContainer className="bg-neutral-50">
      <SectionHeading
        align="center"
        eyebrow={dictionary.home.dentists.eyebrow}
        title={dictionary.home.dentists.title}
      />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {dentists.map((dentist) => (
          <DentistCard dentist={dentist} key={dentist.name} locale={locale} />
        ))}
      </div>
    </SectionContainer>
  );
}
