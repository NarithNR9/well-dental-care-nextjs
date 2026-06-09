import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Share,
  Share2,
} from "lucide-react";
import Image from "next/image";
import { InfoCard } from "@/components/cards/InfoCard";
import { CTAButton } from "@/components/common/CTAButton";
import { SectionContainer } from "@/components/common/SectionContainer";
import { contact } from "@/data/contact";
import type { Dictionary, Locale } from "@/i18n/config";

export function LocationSection({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  return (
    <SectionContainer className="bg-neutral-50 py-16!">
      <div className="text-center">
        <h2 className="text-h2 text-neutral-900">
          {dictionary.home.location.title}
        </h2>
        <p className="text-base mt-2 text-neutral-500">
          {dictionary.home.location.subtitle}
        </p>
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
            className="bg-neutral-50! shadow-none"
            icon={<Clock aria-hidden className="size-5" />}
            title={dictionary.home.location.workingHour}
          >
            <p className="whitespace-pre-line">
              {locale === "km" ? contact.workingHourKm : contact.workingHour}
            </p>
          </InfoCard>
          <InfoCard
            className="bg-neutral-50! shadow-none"
            icon={<MapPin aria-hidden className="size-5" />}
            title={dictionary.home.location.visitUs}
          >
            <p>{contact.address}</p>
            <CTAButton
              className="mt-3 px-12! h-9 bg-neutral-50! border! border-primary! hover:bg-primary!"
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
      <div className="mt-6 grid gap-4 min-[744px]:grid-cols-2 lg:grid-cols-4">
        <InfoCard
          icon={<Phone aria-hidden className="size-5" />}
          title={dictionary.home.location.phoneNumber}
        >
          {contact.phone.map((phone) => (
            <p key={phone}>{phone}</p>
          ))}
        </InfoCard>
        <InfoCard
          icon={<Mail aria-hidden className="size-5" />}
          title={dictionary.home.location.email}
        >
          <p>{contact.email}</p>
        </InfoCard>
        <InfoCard
          icon={<Share2 aria-hidden className="size-5" />}
          title={dictionary.home.location.followUs}
        >
          <div className="flex gap-2">
            {contact.social.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="grid place-items-center rounded-full text-neutral-900 transition-colors"
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={16}
                  height={16}
                  aria-hidden
                  className="size-9"
                />
              </a>
            ))}
          </div>
        </InfoCard>
        <InfoCard
          icon={<MessageCircle aria-hidden className="size-5" />}
          title={dictionary.home.location.chatWithUs}
        >
          <div className="flex gap-2">
            {contact.chat.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="grid place-items-center rounded-full text-blue-700 transition-colors"
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={16}
                  height={16}
                  aria-hidden
                  className="size-9"
                />
              </a>
            ))}
          </div>
        </InfoCard>
      </div>
    </SectionContainer>
  );
}
