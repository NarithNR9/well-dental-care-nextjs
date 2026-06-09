import { CalendarDays, MessageCircle } from "lucide-react";
import { CTAButton } from "@/components/common/CTAButton";
import { SectionContainer } from "@/components/common/SectionContainer";
import type { Dictionary } from "@/i18n/config";

export function HomeCTASection({ dictionary }: { dictionary: Dictionary }) {
  return (
    <SectionContainer className="bg-primary-50">
      <div className="mx-auto max-w-5xl rounded-[24px]  bg-primary-50 px-6 py-10 text-center shadow-design-md min-[744px]:px-12 min-[744px]:py-12">
        <h2 className="text-h2 mx-auto max-w-3xl text-primary-900 font-bold">
          {dictionary.home.cta.title}
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-primary-900 font-semibold">
          <CTAButton
            href="/book-appointment"
            icon={<CalendarDays aria-hidden className="size-6" />}
          >
            {dictionary.common.bookAppointment}
          </CTAButton>
          <CTAButton
            href="/contact"
            icon={<MessageCircle aria-hidden className="size-6" />}
            variant="outline"
          >
            {dictionary.common.chatWithUs}
          </CTAButton>
        </div>
      </div>
    </SectionContainer>
  );
}
