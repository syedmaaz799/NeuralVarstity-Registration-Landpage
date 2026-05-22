"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { SplitText } from "@/components/ui/split-text";

const modules = [
  {
    week: "Day 01 · 29 May",
    phase: "Foundations & AI Tools",
    title: "Build AI Chatbots & Use Powerful AI Models",
    body: "Start from zero. Learn the modern AI model landscape and build your first AI chatbots using OpenAI, Gemini, Groq and local AI models — all without writing code.",
    bullets: [
      "OpenAI API",
      "Gemini API",
      "Groq API",
      "Open-source AI models",
      "Ollama local AI setup",
      "Drag-and-drop chatbot building",
      "No-code AI workflows",
    ],
  },
  {
    week: "Day 02 · 30 May",
    phase: "AI Agents & Automation",
    title: "Build AI Agents & Automations",
    body: "Move from chatbots to autonomous workflows. Build email automations, WhatsApp automations and multi-step AI agents that work for you, around the clock.",
    bullets: [
      "Email automation",
      "WhatsApp automation",
      "AI assistants",
      "Workflow automations",
      "Multi-step AI agents",
      "Productivity systems",
    ],
  },
  {
    week: "Day 03 · 31 May",
    phase: "AI Career & Modern Platforms",
    title: "Modern AI Career Tools & Future AI Platforms",
    body: "Step into the modern AI builder ecosystem. Ship AI apps with Cursor, Lovable and Google Colab — and finish with a clear AI career roadmap and free counselling.",
    bullets: [
      "Cursor AI",
      "Lovable",
      "Google Colab",
      "Modern AI development platforms",
      "AI app building",
      "AI career roadmap",
      "Free career counselling",
    ],
  },
];

export function Curriculum() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 30%", "end 70%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section id="curriculum" index="03" label="Curriculum">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <Eyebrow variant="accent">3 Days · Live Online · Free</Eyebrow>
        </Reveal>
        <div className="mt-6">
          <SplitText
            as="h2"
            text="A 3-day cinematic"
            className="font-display text-display-lg text-balance text-white"
          />
          <SplitText
            as="h2"
            text="journey into modern AI."
            delay={0.2}
            className="font-display text-display-lg italic text-balance text-gradient-soft"
          />
        </div>
        <Reveal delay={0.4}>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.6] text-ink-muted">
            Each day is a hands-on build. By the end of Day 3, you'll have built real
            AI chatbots, automations and agents — and you'll walk away with a clear
            AI career roadmap.
          </p>
        </Reveal>
      </div>

      <div ref={containerRef} className="relative mt-24 lg:mt-32">
        {/* Vertical timeline */}
        <div className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-white/[0.06] lg:left-1/2 lg:block">
          <motion.div
            style={{ scaleY: lineScale, transformOrigin: "top" }}
            className="h-full w-px bg-gradient-to-b from-accent via-accent/60 to-transparent"
          />
        </div>

        <ol className="space-y-12 lg:space-y-24">
          {modules.map((m, i) => {
            const isLeft = i % 2 === 0;
            return (
              <li
                key={m.week}
                className={`relative grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-16 ${
                  isLeft ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                {/* Card */}
                <Reveal>
                  <article className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.025] to-transparent p-7 transition-all duration-500 ease-cinematic hover:border-white/[0.12] sm:p-9">
                    <div className="absolute -top-24 right-0 h-48 w-48 rounded-full bg-accent/0 blur-3xl transition-all duration-700 group-hover:bg-accent/[0.06]" />
                    <div className="relative">
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-dim">
                          {m.week}
                        </span>
                        <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                          {m.phase}
                        </span>
                      </div>
                      <h3 className="mt-5 font-display text-2xl tracking-tight text-white sm:text-[28px]">
                        {m.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-[1.6] text-ink-muted">
                        {m.body}
                      </p>
                      <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {m.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-center gap-2 text-[13px] text-ink"
                          >
                            <span className="h-1 w-1 rounded-full bg-accent" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>

                {/* Spacer / index marker */}
                <div className="relative hidden items-start justify-center lg:flex">
                  <Reveal delay={0.1}>
                    <div className="relative flex flex-col items-center pt-8">
                      <div className="absolute left-1/2 top-12 -translate-x-1/2">
                        <span className="block h-3 w-3 rounded-full bg-[#0B0B0F] ring-1 ring-white/20">
                          <span className="block h-full w-full rounded-full bg-accent/80" />
                        </span>
                      </div>
                      <span className="mt-20 font-display text-7xl tracking-tightest text-white/[0.04]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </Reveal>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
