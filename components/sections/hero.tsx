"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { SplitText } from "@/components/ui/split-text";
import { ArrowRight } from "@/components/ui/icons";

const NeuralNetworkCanvas = dynamic(
  () => import("@/components/three/neural-network-canvas").then((m) => m.NeuralNetworkCanvas),
  { ssr: false }
);

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-32 pb-28 lg:pt-40 lg:pb-32"
    >
      {/* 3D neural network background */}
      <div className="absolute inset-0 -z-10">
        <NeuralNetworkCanvas density={70} className="absolute inset-0 mask-radial opacity-80" />
      </div>

      {/* Atmospheric overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0B0F]/30 to-[#0B0B0F]" />
        <div className="absolute inset-x-0 top-0 h-[60vh] bg-[radial-gradient(ellipse_at_top,rgba(77,163,255,0.10),transparent_55%)]" />
        <div className="absolute inset-0 bg-grid-fine opacity-[0.5] mask-radial" />
        <div className="absolute inset-0 bg-noise opacity-[0.5] mix-blend-overlay" />
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-6 lg:px-10">
        {/* Cohort meta strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mb-8 flex flex-wrap items-center gap-3 text-[12px] uppercase tracking-[0.2em] text-ink-muted"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute h-1.5 w-1.5 animate-ping rounded-full bg-accent/70" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="text-ink/90">Free Live Masterclass · 29–31 May 2026</span>
          </span>
          <span className="hidden h-px w-8 bg-white/10 sm:inline-block" />
          <span className="hidden sm:inline">3 Days · Live Online · Beginner Friendly</span>
          <span className="hidden h-px w-8 bg-white/10 lg:inline-block" />
          <span className="hidden lg:inline">Certificate · Career Counselling</span>
        </motion.div>

        {/* Headline — 3-line cinematic cascade */}
        <div className="max-w-[1100px]">
          <SplitText
            as="h1"
            text="Build AI Chatbots,"
            stagger={0.09}
            duration={1.05}
            ease={[0.22, 1, 0.36, 1]}
            blur={12}
            className="font-display text-display-xl text-balance text-white"
          />
          <SplitText
            as="h1"
            text="Automations & AI Agents"
            delay={0.32}
            stagger={0.09}
            duration={1.05}
            ease={[0.22, 1, 0.36, 1]}
            blur={12}
            className="font-display text-display-xl text-balance text-white"
          />
          <SplitText
            as="h1"
            text="without coding."
            delay={0.62}
            stagger={0.09}
            duration={1.05}
            ease={[0.22, 1, 0.36, 1]}
            blur={12}
            className="font-display text-display-xl italic text-balance text-gradient-soft"
          />
        </div>

        {/* Sub copy */}
        <motion.p
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.1 }}
          className="mt-8 max-w-[680px] text-balance text-[17px] leading-[1.55] text-ink-muted sm:text-[18px]"
        >
          Build real AI agents, AI automations, WhatsApp AI systems and autonomous
          workflows using OpenAI, Gemini, Groq, HuggingFace, Ollama and modern
          no-code AI tools — the same production-style AI stack used by startups,
          without writing a single line of code.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 1.3 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Magnetic strength={0.2}>
            <Button size="lg" icon={<ArrowRight className="h-4 w-4" />}>
              <a href="#register" className="contents">
                Register for Free
              </a>
            </Button>
          </Magnetic>
          <Magnetic strength={0.15}>
            <Button size="lg" variant="secondary">
              <a href="#curriculum" className="contents">
                See What You'll Learn
              </a>
            </Button>
          </Magnetic>
        </motion.div>

        {/* Bottom meta band */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
          className="mt-20 grid grid-cols-2 gap-y-6 border-t border-white/[0.06] pt-8 sm:grid-cols-4 lg:mt-24"
        >
          {[
            { v: "3", l: "Days Live" },
            { v: "100%", l: "Beginner Friendly" },
            { v: "✓", l: "Certificate Included" },
            { v: "Free", l: "Career Counselling" },
          ].map((m) => (
            <div key={m.l} className="flex flex-col gap-1">
              <span className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                {m.v}
              </span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                {m.l}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-ink-muted lg:flex"
      >
        <span className="h-px w-10 bg-white/15" />
        Scroll
        <span className="h-px w-10 bg-white/15" />
      </motion.div>
    </section>
  );
}
