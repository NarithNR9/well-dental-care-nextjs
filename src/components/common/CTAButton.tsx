import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  children: ReactNode;
  href: string;
  icon?: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href">;

export function CTAButton({
  children,
  href,
  icon,
  variant = "primary",
  className,
  ...props
}: CTAButtonProps) {
  return (
    <Button
      asChild
      className={cn(
        "h-10 max-w-full rounded-full px-4 text-base font-semibold leading-[1.5] min-[744px]:h-11 min-[744px]:px-6",
        variant === "primary"
          ? "bg-primary-500 text-primary-900 shadow-design-md hover:bg-primary-600 active:bg-primary-700"
          : "border-primary-500 bg-transparent text-neutral-900 hover:bg-primary-50 active:border-primary-700",
        className,
      )}
      variant={variant === "primary" ? "default" : "outline"}
    >
      <Link href={href} {...props}>
        {icon}
        {children}
      </Link>
    </Button>
  );
}
