import { Mail, MessageCircle, Phone, Share2 } from "lucide-react";
import Image from "next/image";
import { InfoCard } from "@/components/cards/InfoCard";
import { SectionContainer } from "@/components/common/SectionContainer";
import { contact } from "@/data/contact";
import type { Dictionary } from "@/i18n/config";

function SocialRow({
  items,
}: {
  items: { name: string; url: string; icon: string }[];
}) {
  return (
    <div className="flex gap-2">
      {items.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.name}
          className="grid place-items-center rounded-full transition-transform hover:scale-110"
        >
          <Image
            src={item.icon}
            alt=""
            width={32}
            height={32}
            aria-hidden
            className="size-8"
          />
        </a>
      ))}
    </div>
  );
}

export function ContactInfoSection({ dictionary }: { dictionary: Dictionary }) {
  const t = dictionary.contact.info;

  return (
    <SectionContainer className="bg-neutral-50">
      <div className="text-center">
        <h2 className="text-h2 text-neutral-900">{t.title}</h2>
        <p className="text-base mt-2 text-neutral-500">{t.subtitle}</p>
      </div>

      <div className="mt-8 grid gap-4 min-[744px]:grid-cols-2 lg:grid-cols-4">
        <InfoCard
          icon={<Phone aria-hidden className="size-5" />}
          title={t.phone}
        >
          {contact.phone.map((phone) => (
            <p key={phone}>{phone}</p>
          ))}
        </InfoCard>
        <InfoCard icon={<Mail aria-hidden className="size-5" />} title={t.email}>
          <p className="break-all">{contact.email}</p>
        </InfoCard>
        <InfoCard
          icon={<Share2 aria-hidden className="size-5" />}
          title={t.followUs}
        >
          <SocialRow items={contact.social} />
        </InfoCard>
        <InfoCard
          icon={<MessageCircle aria-hidden className="size-5" />}
          title={t.chatWithUs}
        >
          <SocialRow items={contact.chat} />
        </InfoCard>
      </div>
    </SectionContainer>
  );
}
