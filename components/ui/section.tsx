import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  /** Section index label, e.g. "01" */
  index?: string;
  /** Tag label shown beside the index */
  label?: string;
  bare?: boolean;
}

export function Section({
  id,
  children,
  className,
  containerClassName,
  index,
  label,
  bare = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative isolate", !bare && "py-28 sm:py-32 lg:py-40", className)}
    >
      {(index || label) && (
        <div className="pointer-events-none absolute left-6 top-10 hidden text-[11px] uppercase tracking-[0.22em] text-ink-dim lg:flex lg:flex-col lg:gap-2">
          {index && <span className="font-mono">{index}</span>}
          {label && <span>{label}</span>}
        </div>
      )}
      <div className={cn("mx-auto w-full max-w-[1280px] px-6 lg:px-10", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

export function SectionDivider() {
  return (
    <div className="relative mx-auto h-px w-full max-w-[1280px] overflow-hidden px-6 lg:px-10">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    </div>
  );
}
