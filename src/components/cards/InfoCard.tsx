import type { ReactNode } from "react";

type InfoCardProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
};

export function InfoCard({ icon, title, children, className }: InfoCardProps) {
  return (
    <article className={`rounded-[16px] bg-white p-4 shadow-design-md ${className ?? ""}`}>
      <div className="flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary-500 text-primary-900">
          {icon}
        </span>
        <div>
          <h3 className="text-small font-bold text-neutral-900">{title}</h3>
          <div className="text-small mt-1 text-neutral-500">{children}</div>
        </div>
      </div>
    </article>
  );
}
