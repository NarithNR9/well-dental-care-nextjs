import Image from "next/image";
import { CalendarDays, Phone, Star } from "lucide-react";
import { CTAButton } from "@/components/common/CTAButton";
import { SectionContainer } from "@/components/common/SectionContainer";
import type { Dictionary } from "@/i18n/config";

const heroSlides = [
  {
    alt: "Well Dental Care clinic reception area",
    src: "/images/hero/hero1.png",
  },
  {
    alt: "Well Dental Care dental team",
    src: "/images/hero/hero2.png",
  },
  {
    alt: "Well Dental Care dental treatment information",
    src: "/images/hero/hero3.png",
  },
] as const;

export function HeroSection({ dictionary }: { dictionary: Dictionary }) {
  const loopingSlides = [...heroSlides, heroSlides[0]];

  return (
    <SectionContainer
      className="bg-primary-50 py-8 min-[744px]:py-16"
      innerClassName="grid items-center gap-8 lg:grid-cols-[2fr_1fr] lg:gap-12"
    >
      <div className="order-1 min-w-0 lg:order-none">
        <div className="relative h-[242px] w-full overflow-hidden rounded-[32px] bg-neutral-100 shadow-design-lg min-[744px]:aspect-[16/9] min-[744px]:h-auto min-[744px]:min-h-[350px] lg:min-h-[500px]">
          <div className="hero-slideshow-track flex h-full w-[400%]">
            {loopingSlides.map((slide, index) => (
              <div className="relative h-full w-1/4 shrink-0" key={`${slide.src}-${index}`}>
                <Image
                  alt={slide.alt}
                  className="object-cover"
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  src={slide.src}
                />
              </div>
            ))}
          </div>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {heroSlides.map((slide, index) => (
              <span
                aria-hidden
                className="hero-slideshow-dot size-2.5 rounded-full bg-white/80 shadow-design-sm"
                key={slide.src}
                style={{ animationDelay: `${index * 3}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="order-2 min-w-0 text-left lg:order-none">
        <p className="text-base font-semibold text-primary-700">{dictionary.home.hero.label}</p>
        <h1 className="text-display mt-2 max-w-xl text-neutral-900">
          {dictionary.home.hero.headingPrefix}{" "}
          <span className="text-primary-700">{dictionary.home.hero.headingHighlight}</span>
        </h1>
        <div className="mt-6 flex flex-wrap gap-3">
          <CTAButton
            href="/book-appointment"
            icon={<CalendarDays aria-hidden className="size-6" />}
          >
            {dictionary.common.bookAppointment}
          </CTAButton>
          <CTAButton
            href="tel:014405504"
            icon={<Phone aria-hidden className="size-6" />}
            variant="outline"
          >
            {dictionary.common.callNow}
          </CTAButton>
        </div>
        <div className="text-base mt-6 hidden items-center gap-2 font-semibold text-neutral-500 min-[744px]:flex">
          <Star aria-hidden className="size-4 fill-primary-500 text-primary-500" />
          {dictionary.home.hero.supporting}
        </div>
      </div>
    </SectionContainer>
  );
}
