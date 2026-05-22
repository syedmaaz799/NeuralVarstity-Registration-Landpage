"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { Reveal } from "@/components/ui/reveal";
import { SplitText } from "@/components/ui/split-text";
import { ArrowRight } from "@/components/ui/icons";

const NeuralNetworkCanvas = dynamic(
  () => import("@/components/three/neural-network-canvas").then((m) => m.NeuralNetworkCanvas),
  { ssr: false }
);

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden py-32 sm:py-40 lg:py-48">
      <div className="absolute inset-0 -z-10">
        <NeuralNetworkCanvas density={50} className="absolute inset-0 opacity-50 mask-radial" />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[60vh] bg-[radial-gradient(ellipse_at_top,rgba(77,163,255,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0B0F]/40 to-[#0B0B0F]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-ink-muted backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute h-1.5 w-1.5 animate-ping rounded-full bg-accent/70" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Free Masterclass · 29–31 May 2026
          </span>
        </Reveal>
        <div className="mt-8">
          <SplitText
            as="h2"
            text="Start your AI journey"
            className="font-display text-display-xl text-balance text-white"
          />
          <SplitText
            as="h2"
            text="with NeuralVarsity."
            delay={0.2}
            className="font-display text-display-xl italic text-balance text-gradient-soft"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-7 max-w-xl text-[16px] leading-[1.6] text-ink-muted sm:text-[17px]"
        >
          3 days. Live online. Free. Beginner-friendly. Build real AI chatbots,
          automations and agents with no coding required — and walk away with a
          certificate and a clear AI career roadmap.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Magnetic strength={0.22}>
            <Button size="lg" icon={<ArrowRight className="h-4 w-4" />}>
              <a href="#register" className="contents">
                Register for Free
              </a>
            </Button>
          </Magnetic>
          <Magnetic strength={0.15}>
            <Button size="lg" variant="secondary">
              <a href="#feedback" className="contents">
                Ask a Question
              </a>
            </Button>
          </Magnetic>
        </motion.div>

        <Reveal delay={0.4}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.2em] text-ink-muted">
            <span>29–31 May 2026</span>
            <span className="h-px w-6 bg-white/15" />
            <span>Live online · Free</span>
            <span className="h-px w-6 bg-white/15" />
            <span>Certificate · Career Counselling</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
