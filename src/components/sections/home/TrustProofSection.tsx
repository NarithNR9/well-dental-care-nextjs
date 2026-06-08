import { SectionContainer } from "@/components/common/SectionContainer";
import type { Dictionary } from "@/i18n/config";

export function TrustProofSection({ dictionary }: { dictionary: Dictionary }) {
  return (
    <SectionContainer className="bg-[linear-gradient(360deg,rgba(254,250,233,0)_50%,#FEFAE9_100%)] py-16!">
      <h2 className="text-h2 text-center text-neutral-900">
        {dictionary.home.trustProof.title}
      </h2>
      <div className="mt-8 grid gap-6 min-[420px]:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            aria-label={`${dictionary.home.trustProof.placeholder} ${item}`}
            className="h-48 rounded-[16px] bg-neutral-50 shadow-inner min-[744px]:h-60"
            key={item}
            role="img"
          />
        ))}
      </div>
    </SectionContainer>
  );
}
