"use client";

import { motion, type Easing } from "framer-motion";
import { cn } from "@/lib/utils";

interface SplitTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  ease?: Easing | Easing[];
  blur?: number;
  y?: string | number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  once?: boolean;
}

export function SplitText({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.05,
  duration = 0.95,
  ease = [0.16, 1, 0.3, 1],
  blur = 8,
  y = "110%",
  as: Tag = "h2",
  once = true,
}: SplitTextProps) {
  const words = text.split(" ");

  return (
    <Tag className={cn(className)}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: stagger, delayChildren: delay },
          },
        }}
        className="inline"
      >
        {words.map((word, i) => (
          <span
            key={i}
            className="relative inline-block overflow-hidden pb-[0.12em] align-bottom"
            style={{ marginRight: i < words.length - 1 ? "0.28em" : 0 }}
          >
            <motion.span
              variants={{
                hidden: { y, opacity: 0, filter: `blur(${blur}px)` },
                visible: {
                  y: "0%",
                  opacity: 1,
                  filter: "blur(0px)",
                  transition: { duration, ease },
                },
              }}
              className={cn("inline-block", wordClassName)}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
