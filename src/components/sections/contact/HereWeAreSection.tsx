import { Clock, MapPin } from "lucide-react";
import { InfoCard } from "@/components/cards/InfoCard";
import { CTAButton } from "@/components/common/CTAButton";
import { SectionContainer } from "@/components/common/SectionContainer";
import { contact } from "@/data/contact";
import type { Dictionary, Locale } from "@/i18n/config";

export function HereWeAreSection({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  const t = dictionary.contact.hereWeAre;

  return (
    <SectionContainer>
      <div className="text-center">
        <h2 className="text-h2 text-neutral-900">{t.title}</h2>
        <p className="text-base mt-2 text-neutral-500">{t.subtitle}</p>
      </div>

      <div className="mt-8 grid items-center gap-6 lg:grid-cols-[1.7fr_1fr]">
        <div className="relative min-h-[250px] overflow-hidden rounded-[24px] border border-white shadow-design-sm min-[744px]:min-h-[360px]">
          <iframe
            src={contact.googleMapsEmbedUrl}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Well Dental Care Location"
            className="absolute inset-0 h-full w-full"
          />
        </div>
        <div className="grid gap-4">
          <InfoCard
            className="bg-transparent! shadow-none"
            icon={<Clock aria-hidden className="size-5" />}
            title={t.workingHour}
          >
            <p className="whitespace-pre-line">
              {locale === "km" ? contact.workingHourKm : contact.workingHour}
            </p>
          </InfoCard>
          <InfoCard
            className="bg-transparent! shadow-none"
            icon={<MapPin aria-hidden className="size-5" />}
            title={t.visitUs}
          >
            <p>{contact.address}</p>
            <CTAButton
              className="mt-3 h-9 border! border-primary! bg-transparent! px-8! hover:bg-primary!"
              href={contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={<MapPin aria-hidden className="size-4" />}
            >
              {dictionary.common.viewOnGoogleMaps}
            </CTAButton>
          </InfoCard>
        </div>
      </div>
    </SectionContainer>
  );
}
