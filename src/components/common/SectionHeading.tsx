import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  highlight?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  highlight,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow ? (
        <p className="text-2xl font-semibold text-primary-700">{eyebrow}</p>
      ) : null}
      {title ? (
        <h2 className="text-h2 font-bold mt-1 text-neutral-900">
          {title} {highlight ? <span className="text-primary-700">{highlight}</span> : null}
        </h2>
      ) : null}
      {subtitle ? (
        <p
          className={cn(
            "text-small mt-2 text-neutral-500 min-[744px]:text-body",
            align === "center" && "mx-auto max-w-2xl",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
