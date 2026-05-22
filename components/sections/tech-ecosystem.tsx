"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { SplitText } from "@/components/ui/split-text";
import { BrandLogo } from "@/components/brand/tool-logos";

type ToolCategory = "AI Models" | "No-Code Builders" | "Modern AI Dev" | "Automation";

type Tool = {
  name: string;
  category: ToolCategory;
};

const tools: Tool[] = [
  { name: "OpenAI", category: "AI Models" },
  { name: "Gemini", category: "AI Models" },
  { name: "Groq", category: "AI Models" },
  { name: "Ollama", category: "AI Models" },
  { name: "HuggingFace", category: "AI Models" },
  { name: "Dify", category: "No-Code Builders" },
  { name: "Flowise", category: "No-Code Builders" },
  { name: "LangChain", category: "No-Code Builders" },
  { name: "Cursor", category: "Modern AI Dev" },
  { name: "Lovable", category: "Modern AI Dev" },
  { name: "Google Colab", category: "Modern AI Dev" },
  { name: "WhatsApp Automation", category: "Automation" },
];

const categories: { id: ToolCategory; label: string }[] = [
  { id: "AI Models", label: "AI Models" },
  { id: "No-Code Builders", label: "No-Code AI Builders" },
  { id: "Modern AI Dev", label: "Modern AI Dev Tools" },
  { id: "Automation", label: "AI Automation" },
];

export function TechEcosystem() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 60]);

  // Build orbits: ring 1 (innermost) → ring 3 (outermost)
  const orbits = useMemo(() => {
    const ring1 = tools.filter((t) => t.category === "AI Models");
    const ring2 = tools.filter((t) => t.category === "No-Code Builders");
    const ring3 = tools.filter(
      (t) => t.category === "Modern AI Dev" || t.category === "Automation"
    );
    return [ring1, ring2, ring3];
  }, []);

  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <Section id="ecosystem" index="04" label="Tools">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <Eyebrow variant="accent">The Modern AI Toolkit</Eyebrow>
        </Reveal>
        <div className="mt-6">
          <SplitText
            as="h2"
            text="One constellation."
            className="font-display text-display-lg text-balance text-white"
          />
          <SplitText
            as="h2"
            text="Every tool you'll touch."
            delay={0.2}
            className="font-display text-display-lg italic text-balance text-gradient-soft"
          />
        </div>
        <Reveal delay={0.4}>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.6] text-ink-muted">
            Across 3 days you'll use the same tools modern AI teams ship with —
            from foundation models to no-code builders and modern AI dev platforms.
          </p>
        </Reveal>
      </div>

      <div
        ref={ref}
        className="relative mx-auto mt-20 grid grid-cols-1 gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-16"
      >
        {/* Orbit visualization */}
        <div className="relative col-span-1 lg:col-span-7">
          <div className="relative mx-auto aspect-square w-full max-w-[640px]">
            {/* Rings */}
            <div className="absolute inset-0">
              {[0.54, 0.74, 0.94].map((s, i) => (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]"
                  style={{ width: `${s * 100}%`, height: `${s * 100}%` }}
                />
              ))}
            </div>

            {/* Grid + glow */}
            <div className="absolute inset-0 bg-grid-fine opacity-30 mask-radial" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(77,163,255,0.18),transparent_70%)]" />

            {/* Center NV core — static positioning wrapper to keep it perfectly centered while scaling */}
            <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
              {/* Dashed halo */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10" />
              {/* Ambient glow behind the logo */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(77,163,255,0.35),transparent_70%)] blur-xl"
              />
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative flex h-28 w-28 items-center justify-center"
              >
                <Image
                  src="/nv-logo.png"
                  alt="NeuralVarsity"
                  width={160}
                  height={160}
                  priority
                  className="h-full w-full object-contain drop-shadow-[0_0_24px_rgba(77,163,255,0.45)]"
                />
              </motion.div>
            </div>

            {/* Orbits */}
            {orbits.map((ring, ringIdx) => {
              const radiusPct = [0.27, 0.37, 0.47][ringIdx];
              const duration = [55, 70, 90][ringIdx];
              const direction = ringIdx % 2 === 0 ? 1 : -1;
              return (
                <motion.div
                  key={ringIdx}
                  className="absolute inset-0"
                  animate={{ rotate: 360 * direction }}
                  transition={{ duration, repeat: Infinity, ease: "linear" }}
                >
                  {ring.map((tool, i) => {
                    const angle = (i / ring.length) * Math.PI * 2;
                    const x = 50 + Math.cos(angle) * radiusPct * 100;
                    const y = 50 + Math.sin(angle) * radiusPct * 100;
                    return (
                      <motion.div
                        key={tool.name}
                        style={{ left: `${x}%`, top: `${y}%` }}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                        animate={{ rotate: -360 * direction }}
                        transition={{ duration, repeat: Infinity, ease: "linear" }}
                      >
                        <button
                          onMouseEnter={() => setHovered(tool.name)}
                          onMouseLeave={() => setHovered(null)}
                          className={`group relative flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#0B0B0F]/90 px-3 py-1.5 text-[12px] tracking-tight text-ink-muted backdrop-blur transition-all duration-300 hover:border-white/25 hover:text-white ${
                            hovered === tool.name ? "scale-110" : ""
                          }`}
                          style={{
                            boxShadow:
                              hovered === tool.name
                                ? "0 0 24px rgba(77,163,255,0.4)"
                                : "0 4px 16px -8px rgba(0,0,0,0.5)",
                          }}
                        >
                          <BrandLogo name={tool.name} className="h-3.5 w-3.5" />
                          {tool.name}
                        </button>
                      </motion.div>
                    );
                  })}
                </motion.div>
              );
            })}

            {/* Subtle outer rotation */}
            <motion.div
              style={{ rotate }}
              className="absolute inset-0 mask-radial"
            >
              <div className="absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.04]" />
              <div className="absolute left-1/2 top-1/2 h-[100%] w-[100%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.03]" />
            </motion.div>
          </div>
        </div>

        {/* Categorized list */}
        <div className="relative col-span-1 lg:col-span-5">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
              By layer
            </p>
          </Reveal>
          <div className="mt-6 space-y-6">
            {categories.map((cat, i) => {
              const list = tools.filter((t) => t.category === cat.id);
              return (
                <Reveal key={cat.id} delay={i * 0.07}>
                  <div className="border-t border-white/[0.06] pt-5">
                    <p className="text-[12px] uppercase tracking-[0.18em] text-ink-muted">
                      {cat.label}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {list.map((t) => (
                        <span
                          key={t.name}
                          onMouseEnter={() => setHovered(t.name)}
                          onMouseLeave={() => setHovered(null)}
                          className={`inline-flex cursor-default items-center gap-2 rounded-full border px-3 py-1 text-[13px] transition-all duration-300 ${
                            hovered === t.name
                              ? "border-white/30 bg-white/[0.06] text-white"
                              : "border-white/[0.08] bg-white/[0.02] text-ink"
                          }`}
                        >
                          <BrandLogo name={t.name} className="h-3 w-3" />
                          {t.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
