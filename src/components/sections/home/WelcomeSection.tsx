import Image from "next/image";
import { SectionContainer } from "@/components/common/SectionContainer";
import type { Dictionary } from "@/i18n/config";

export function WelcomeSection({ dictionary }: { dictionary: Dictionary }) {
  return (
    <SectionContainer className="bg-[linear-gradient(180deg,rgba(254,250,233,0)_50%,#FEFAE9_100%)] lg:px-32">
      <div className="grid items-center gap-12 md:grid-cols-[0.9fr_1fr]">
        <div className="max-w-xl">
          <p className="text-base font-semibold text-neutral-900">
            {dictionary.home.welcome.eyebrow}
          </p>
          <h2 className="text-h2 mt-2 text-primary-700">
            {dictionary.home.welcome.title}
          </h2>
          <p className="text-body mt-6 text-neutral-500">
            {dictionary.home.welcome.body}
          </p>
          <p className="text-body mt-4 text-neutral-500">
            {dictionary.home.welcome.body2}
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-[510px]">
          <Image
            alt="Well Dental Care dental treatments and friendly dental team"
            className="h-auto w-full drop-shadow-[0_8px_24px_rgb(102_84_13_/_16%)]"
            height={1053}
            sizes="(min-width: 1024px) 42vw, (min-width: 744px) 510px, 100vw"
            src="/images/welcome/teeths.png"
            width={1000}
          />
        </div>
      </div>
    </SectionContainer>
  );
}
