import Image from "next/image";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionContainer } from "@/components/common/SectionContainer";
import type { Dictionary } from "@/i18n/config";

export function SendMessageSection({ dictionary }: { dictionary: Dictionary }) {
  const t = dictionary.contact.form;

  return (
    <SectionContainer>
      <div className="rounded-[24px] bg-primary-50 p-6 shadow-design-md sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-h2 font-bold text-primary-700">{t.title}</h2>
            <p className="text-body mt-2 text-neutral-600">{t.subtitle}</p>
            <div className="mt-6">
              <ContactForm dictionary={dictionary} />
            </div>
          </div>

          <div className="relative min-h-[300px] overflow-hidden rounded-[16px] shadow-design-sm lg:min-h-full">
            <Image
              src="/images/contact/clinic-sign.png"
              alt={t.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
