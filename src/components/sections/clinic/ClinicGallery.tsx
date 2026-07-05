import Image from "next/image";
import type { ClinicImage, ClinicLayout } from "@/data/clinic";
import { cn } from "@/lib/utils";

type ClinicGalleryProps = {
  layout: ClinicLayout;
  images: ClinicImage[];
};

// Per-layout grid + per-tile shape. Layouts are preserved across breakpoints,
// matching the design reference.
function tileClass(layout: ClinicLayout, index: number) {
  switch (layout) {
    case "waiting":
      // One wide hero image, then two below.
      return index === 0 ? "col-span-2 aspect-[24/9]" : "aspect-[16/10]";
    case "treatment":
      // Two images on top, one wide image below.
      return index === 2 ? "col-span-2 aspect-[24/9]" : "aspect-[16/11]";
    case "parking":
      return "aspect-[16/10]";
    case "activity":
      return "aspect-square";
  }
}

function tileSizes(layout: ClinicLayout, index: number) {
  if (layout === "activity") {
    return "(min-width: 744px) 30vw, 33vw";
  }

  const isWide =
    (layout === "waiting" && index === 0) || (layout === "treatment" && index === 2);

  return isWide ? "(min-width: 744px) 88vw, 100vw" : "(min-width: 744px) 44vw, 100vw";
}

export function ClinicGallery({ layout, images }: ClinicGalleryProps) {
  return (
    <div
      className={cn(
        "grid gap-3 sm:gap-4",
        layout === "activity" ? "grid-cols-3" : "grid-cols-2",
      )}
    >
      {images.map((image, index) => (
        <div
          className={cn(
            "relative overflow-hidden rounded-[12px] sm:rounded-[16px]",
            tileClass(layout, index),
          )}
          key={image.src}
        >
          <Image
            alt={image.alt}
            className="object-cover"
            fill
            sizes={tileSizes(layout, index)}
            src={image.src}
          />
        </div>
      ))}
    </div>
  );
}
