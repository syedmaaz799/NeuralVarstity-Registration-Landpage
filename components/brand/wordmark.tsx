import Image from "next/image";
import { cn } from "@/lib/utils";

interface WordmarkProps {
  className?: string;
  /** When true, renders the NeuralVarsity logo beside the wordmark */
  showLogo?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "text-[15px]",
  md: "text-[17px]",
  lg: "text-2xl",
};

const logoSizes = {
  sm: { box: "h-6 w-6", px: 24 },
  md: { box: "h-7 w-7", px: 28 },
  lg: { box: "h-9 w-9", px: 36 },
};

export function Wordmark({ className, showLogo = true, size = "md" }: WordmarkProps) {
  const logo = logoSizes[size];
  return (
    <span
      className={cn("inline-flex items-center gap-2.5", className)}
      style={{ color: "#FFFFFF" }}
    >
      {showLogo && (
        <span
          aria-hidden
          className={cn("relative inline-flex items-center justify-center", logo.box)}
        >
          <Image
            src="/nv-logo.png"
            alt=""
            width={logo.px}
            height={logo.px}
            priority
            className="h-full w-full object-contain"
          />
        </span>
      )}
      <span
        className={cn("font-extrabold leading-none tracking-tight", sizes[size])}
        style={{
          fontFamily: "var(--font-poppins), sans-serif",
          fontWeight: 800,
          color: "#FFFFFF",
        }}
      >
        NeuralVarsity
      </span>
    </span>
  );
}
