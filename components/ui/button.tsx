"use client";

import { forwardRef, ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  asChild?: boolean;
  icon?: ReactNode;
}

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-5 text-[14px]",
  lg: "h-12 px-6 text-[15px]",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-white text-[#0B0B0F] hover:bg-white/95 shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset,0_8px_24px_-8px_rgba(255,255,255,0.25)]",
  secondary:
    "bg-white/[0.04] text-white border border-white/10 hover:bg-white/[0.08] hover:border-white/15",
  ghost: "text-white/80 hover:text-white hover:bg-white/[0.04]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "primary", size = "md", children, icon, ...props },
  ref
) {
  return (
    <motion.button
      ref={ref}
      whileHover={{ y: -1 }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300 ease-soft outline-none focus-visible:ring-2 focus-visible:ring-accent/60",
        sizes[size],
        variants[variant],
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <span className="transition-transform duration-300 ease-soft group-hover:translate-x-0.5">
            {icon}
          </span>
        )}
      </span>
    </motion.button>
  );
});
