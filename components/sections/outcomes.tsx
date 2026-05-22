"use client";

import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { SplitText } from "@/components/ui/split-text";
import { ArrowUpRight } from "@/components/ui/icons";

const transformations = [
  {
    title: "Build production-style AI workflows",
    range: "Real systems · not demos",
    desc: "Ship AI chatbots, WhatsApp AI agents and multi-step automations — the kind modern startups actually deploy.",
  },
  {
    title: "Master modern Agentic AI systems",
    range: "Agents · Orchestration · Pipelines",
    desc: "Understand how multi-agent systems, AI orchestration and autonomous workflows actually work — and design your own.",
  },
  {
    title: "Run local AI on your own machine",
    range: "Ollama · HuggingFace · Private",
    desc: "Build private AI workflows that run locally — zero API cost, full privacy, complete control over your AI stack.",
  },
  {
    title: "Build portfolio-ready AI projects",
    range: "Demo-ready · Career-ready",
    desc: "Walk away with real AI builds you can showcase to clients, recruiters or your audience — not just notes.",
  },
  {
    title: "Earn an official certificate",
    range: "Completion · NeuralVarsity",
    desc: "Get an official certificate of completion to showcase on your CV, LinkedIn and portfolio.",
  },
  {
    title: "Free 1:1 AI career counselling",
    range: "Roadmap · Freelancing · Future",
    desc: "Get personalized guidance — AI career paths, freelancing opportunities and how to position yourself in the modern AI economy.",
  },
];

const benefits = [
  {
    label: "Production-style builds",
    title: "Every project is a real AI workflow — not a toy demo.",
  },
  {
    label: "Modern AI stack",
    title: "OpenAI · Gemini · Groq · Ollama · Cursor · Lovable. The actual builder stack.",
  },
  {
    label: "Free career counselling",
    title: "Free 1:1 AI career guidance after the masterclass — roadmap, freelancing, opportunities.",
  },
  {
    label: "Live & interactive",
    title: "Live builds, real-time Q&A and direct mentoring from your AI educator.",
  },
];

export function Outcomes() {
  return (
    <Section id="outcomes" index="06" label="Outcomes">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow variant="accent">Outcomes</Eyebrow>
          </Reveal>
          <div className="mt-6">
            <SplitText
              as="h2"
              text="What you'll walk away"
              className="font-display text-display-lg text-balance text-white"
            />
            <SplitText
              as="h2"
              text="with after 3 days."
              delay={0.2}
              className="font-display text-display-lg italic text-balance text-gradient-soft"
            />
          </div>
          <Reveal delay={0.3}>
            <p className="mt-7 max-w-md text-[15px] leading-[1.65] text-ink-muted">
              Most courses leave you with notes. You'll leave this masterclass
              with production-style AI builds, real agentic AI experience and a
              clear modern AI career roadmap — even if you've never written a
              line of code.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]">
            {[
              { v: "3 Days", l: "Live online" },
              { v: "100%", l: "Production-style" },
              { v: "Free", l: "1:1 Counselling" },
              { v: "✓", l: "Certificate" },
            ].map((m, i) => (
              <Reveal key={m.l} delay={i * 0.06}>
                <div className="bg-[#0B0B0F]/60 p-5">
                  <p className="font-display text-2xl tracking-tightest text-white">
                    {m.v}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                    {m.l}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
              Your transformation in 3 days
            </p>
          </Reveal>
          <Stagger className="mt-6 space-y-2" stagger={0.08}>
            {transformations.map((p) => (
              <StaggerItem key={p.title}>
                <div className="group flex items-center justify-between gap-6 rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent px-6 py-5 transition-all duration-500 ease-cinematic hover:border-white/[0.14] hover:bg-white/[0.04]">
                  <div className="min-w-0">
                    <p className="font-display text-[19px] tracking-tight text-white sm:text-xl">
                      {p.title}
                    </p>
                    <p className="mt-1 text-[13px] text-ink-muted">{p.desc}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <span className="hidden font-mono text-[12px] tracking-tight text-ink-muted sm:inline">
                      {p.range}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-ink transition-all duration-300 group-hover:translate-x-0.5 group-hover:border-white/20 group-hover:bg-white/[0.06] group-hover:text-white">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-10 border-t border-white/[0.06] pt-10">
            <p className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
              Included for every registered learner
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {benefits.map((p, i) => (
                <Reveal key={p.label} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-accent">
                      {p.label}
                    </p>
                    <p className="mt-3 text-[15px] leading-[1.45] text-white">
                      {p.title}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
