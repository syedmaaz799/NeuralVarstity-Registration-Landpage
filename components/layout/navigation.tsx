"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wordmark } from "@/components/brand/wordmark";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { cn } from "@/lib/utils";

const links = [
  { href: "#curriculum", label: "Curriculum" },
  { href: "#ecosystem", label: "Tools" },
  { href: "#workflows", label: "Workflows" },
  { href: "#outcomes", label: "Outcomes" },
  { href: "#faq", label: "FAQ" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center pt-4 sm:pt-5"
      >
        <nav
          className={cn(
            "relative flex w-[min(1180px,calc(100%-1.5rem))] items-center justify-between rounded-full border px-3 py-2 transition-all duration-500 ease-cinematic sm:px-4",
            scrolled
              ? "border-white/8 bg-[#0B0B0F]/75 backdrop-blur-xl shadow-[0_18px_60px_-30px_rgba(0,0,0,0.8)]"
              : "border-white/5 bg-white/[0.02] backdrop-blur-md"
          )}
        >
          <a href="#top" className="flex items-center gap-2 px-2 py-1">
            <Wordmark size="sm" />
          </a>

          <ul className="hidden items-center gap-1 text-[13px] text-ink-muted lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative inline-flex items-center rounded-full px-3 py-1.5 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 sm:flex">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute h-2 w-2 animate-ping rounded-full bg-accent/60" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                29–31 May · Free
              </span>
            </div>
            <Magnetic strength={0.2}>
              <Button size="sm" className="hidden sm:inline-flex">
                <a href="#register" className="contents">
                  Register for Free
                </a>
              </Button>
            </Magnetic>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/8 bg-white/[0.04] text-white lg:hidden"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={cn(
                    "absolute left-0 top-0 h-px w-4 bg-white transition-transform duration-300",
                    open && "translate-y-1.5 rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-px w-4 bg-white transition-transform duration-300",
                    open && "-translate-y-1.5 -rotate-45"
                  )}
                />
              </span>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-3 top-[72px] z-50 rounded-3xl border border-white/8 bg-[#0B0B0F]/95 p-5 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 text-[15px] text-ink">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 hover:bg-white/[0.04]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Button
                size="md"
                className="w-full"
                onClick={() => {
                  setOpen(false);
                  document.querySelector("#register")?.scrollIntoView();
                }}
              >
                Register for Free
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
