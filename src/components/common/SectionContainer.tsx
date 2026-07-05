import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  as?: "section" | "div";
  id?: string;
};

export function SectionContainer({
  children,
  className,
  innerClassName,
  as: Tag = "section",
  id,
}: SectionContainerProps) {
  return (
    <Tag
      className={cn("px-4 py-12 min-[744px]:px-6 min-[744px]:py-16 lg:px-16 lg:py-16", className)}
      id={id}
    >
      <div className={cn("mx-auto w-full max-w-[1312px]", innerClassName)}>{children}</div>
    </Tag>
  );
}
