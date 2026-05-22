import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent";
}

export function Eyebrow({ children, className, variant = "default" }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-eyebrow uppercase",
        variant === "default" ? "text-ink-muted" : "text-accent",
        className
      )}
    >
      <span
        className={cn(
          "h-px w-6",
          variant === "default" ? "bg-white/20" : "bg-accent/60"
        )}
      />
      {children}
    </span>
  );
}
