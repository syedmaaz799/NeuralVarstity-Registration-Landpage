"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { SplitText } from "@/components/ui/split-text";

const shifts = [
  {
    n: "01",
    title: "From using AI to orchestrating AI.",
    body: "Stop being a passive AI user. Learn to design AI agents, multi-step pipelines and autonomous workflows — the modern Agentic AI stack today's startups are shipping with right now.",
  },
  {
    n: "02",
    title: "From experts only to every builder.",
    body: "Modern no-code AI infrastructure has removed the coding barrier. Students, freelancers, working professionals and career switchers are now shipping production-style AI systems — without writing a single line of code.",
  },
  {
    n: "03",
    title: "From theory to production-style workflows.",
    body: "Most courses stop at slides. You'll build real AI agents, WhatsApp AI automations, local AI assistants and multi-agent systems — live, in 3 days, alongside a mentor who guides every step.",
  },
];

export function WhyAgentic() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <Section id="why" index="02" label="Why Now">
      <div ref={ref} className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <div className="sticky top-32">
            <Reveal>
              <Eyebrow variant="accent">Why Agentic AI · Why Now</Eyebrow>
            </Reveal>
            <div className="mt-6">
              <SplitText
                as="h2"
                text="AI is moving from"
                className="font-display text-display-lg text-balance text-white"
              />
              <SplitText
                as="h2"
                text="experts to everyone."
                delay={0.2}
                className="font-display text-display-lg italic text-balance text-gradient-soft"
              />
            </div>
            <Reveal delay={0.3}>
              <p className="mt-7 max-w-md text-[15px] leading-[1.65] text-ink-muted">
                Modern no-code AI infrastructure has removed the coding barrier.
                Students, freelancers, working professionals and career switchers
                are now shipping real agentic AI systems — the kind that, until
                last year, only AI engineers could build.
              </p>
            </Reveal>

            <motion.div
              style={{ y }}
              className="mt-14 hidden max-w-md rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 lg:block"
            >
              <p className="text-[12px] uppercase tracking-[0.18em] text-ink-muted">
                Market signal
              </p>
              <p className="mt-3 text-balance text-[15px] leading-[1.6] text-ink">
                &ldquo;<span className="text-white">Agentic AI engineering is the
                fastest-growing role</span> across every major hiring and
                freelancing platform in 2026 — and modern no-code AI
                infrastructure has put it within reach of anyone.&rdquo;
              </p>
              <p className="mt-4 text-[12px] text-ink-dim">
                — Global AI Talent Report
              </p>
            </motion.div>
          </div>
        </div>

        <div className="space-y-4 lg:col-span-7 lg:space-y-6">
          {shifts.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <article className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.025] to-transparent p-7 transition-all duration-500 ease-cinematic hover:border-white/[0.1] hover:bg-white/[0.04] sm:p-9">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/0 blur-3xl transition-all duration-700 group-hover:bg-accent/[0.08]" />
                <div className="relative flex items-start justify-between gap-8">
                  <div className="max-w-xl">
                    <h3 className="font-display text-2xl tracking-tight text-white sm:text-3xl">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-[1.65] text-ink-muted">
                      {s.body}
                    </p>
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-dim">
                    {s.n}
                  </span>
                </div>
                <div className="mt-7 h-px w-full bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
