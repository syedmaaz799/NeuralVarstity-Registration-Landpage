"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";

const tools = [
  "OpenAI",
  "Gemini",
  "Groq",
  "Ollama",
  "Dify",
  "Flowise",
  "LangChain",
  "Cursor",
  "Lovable",
  "Google Colab",
  "HuggingFace",
  "WhatsApp Automation",
];

const values = [
  {
    value: "100%",
    label: "Practical",
    sub: "every session is build-first",
  },
  {
    value: "No Code",
    label: "No coding required",
    sub: "drag-and-drop AI workflows",
  },
  {
    value: "Real",
    label: "Build real AI agents",
    sub: "chatbots, automations, agents",
  },
  {
    value: "Career",
    label: "Career focused",
    sub: "roadmap + free counselling",
  },
];

export function TrustStrip() {
  return (
    <section className="relative border-y border-white/[0.06] bg-bg-surface/40">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-14 lg:px-10 lg:py-16">
        <Reveal>
          <div className="flex flex-col items-center gap-8 text-center">
            <p className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
              AI tools you'll learn over 3 days
            </p>
            <div className="mask-fade-x flex w-full items-center justify-between gap-10 overflow-hidden">
              <motion.div
                className="flex flex-shrink-0 items-center gap-10 sm:gap-14 lg:gap-20"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                {[...tools, ...tools, ...tools].map((p, i) => (
                  <span
                    key={i}
                    className="select-none whitespace-nowrap font-display text-xl font-medium tracking-tight text-ink-muted/80 transition-colors hover:text-white sm:text-2xl"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {p}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] sm:grid-cols-4">
          {values.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.07}>
              <div className="relative flex h-full flex-col gap-2 bg-[#0B0B0F]/60 p-6 sm:p-7">
                <span className="font-display text-3xl tracking-tightest text-white sm:text-4xl">
                  {m.value}
                </span>
                <span className="text-[13px] text-ink">{m.label}</span>
                <span className="text-[12px] text-ink-muted">{m.sub}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
