import { MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/contact";
import type { Dictionary } from "@/i18n/config";

export function ContactHero({ dictionary }: { dictionary: Dictionary }) {
  const t = dictionary.contact;

  return (
    <SectionContainer className="bg-primary-50">
      <h1 className="text-h1 text-center font-bold text-primary-700">
        {t.pageTitle}
      </h1>

      <div className="mt-8 grid items-center gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-h1 font-bold text-neutral-900">
            {t.hero.titlePrefix}
            <span className="text-primary-700">{t.hero.titleHighlight}</span>
          </h2>
          <p className="text-body mt-3 max-w-md text-neutral-600">
            {t.hero.subtitle}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-full border-primary-500 bg-transparent px-6 text-base font-semibold text-primary-900 hover:bg-primary"
            >
              <a
                href={contact.chat[0]?.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle aria-hidden className="size-5" />
                {t.hero.chat}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-full border-primary-500 bg-transparent px-6 text-base font-semibold text-primary-900 hover:bg-primary"
            >
              <a href={`tel:${contact.phone[0]?.replace(/\s/g, "")}`}>
                <Phone aria-hidden className="size-5" />
                {t.hero.call}
              </a>
            </Button>
          </div>
        </div>

        <div className="clinic-reception-shape relative aspect-[16/9] overflow-hidden rounded-[24px] shadow-design-md lg:aspect-[2.5/1]">
          <Image
            src="/images/contact/clinic-reception.png"
            alt={t.hero.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 640px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </SectionContainer>
  );
}
