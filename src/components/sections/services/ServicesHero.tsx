import { Search } from "lucide-react";
import { SectionContainer } from "@/components/common/SectionContainer";
import type { Dictionary } from "@/i18n/config";

type ServicesHeroProps = {
  dictionary: Dictionary;
  query: string;
  onQueryChange: (value: string) => void;
};

export function ServicesHero({ dictionary, query, onQueryChange }: ServicesHeroProps) {
  const { services } = dictionary;

  return (
    <SectionContainer className="bg-primary-50">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-h1 font-bold text-primary-700">{services.pageTitle}</h1>
        <p className="text-body mx-auto mt-3 max-w-2xl text-neutral-700">
          {services.subtitle}
        </p>
        <div className="relative mx-auto mt-8 max-w-3xl">
          <Search
            aria-hidden
            className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-neutral-400"
          />
          <input
            aria-label={services.searchPlaceholder}
            className="text-body h-9 w-full rounded-full border border-neutral-200 bg-white pl-12 pr-4 text-neutral-900 shadow-design-sm outline-none transition placeholder:text-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder={services.searchPlaceholder}
            type="search"
            value={query}
          />
        </div>
      </div>
    </SectionContainer>
  );
}
