"use client";

import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { SplitText } from "@/components/ui/split-text";
import { ArrowUpRight } from "@/components/ui/icons";

const transformations = [
  {
    title: "Learn modern AI tools",
    range: "OpenAI · Gemini · Groq",
    desc: "Get hands-on with the AI tools used by startups and modern AI teams.",
  },
  {
    title: "Build your first AI workflows",
    range: "Live · Step by step",
    desc: "Ship real chatbots, automations and AI agents — built live during the masterclass.",
  },
  {
    title: "Explore AI career opportunities",
    range: "Career roadmap",
    desc: "Understand where AI is going and the real paths open to beginners in 2026.",
  },
  {
    title: "Become AI confident",
    range: "From watcher to builder",
    desc: "Move from observing AI to actively building with it — no coding required.",
  },
  {
    title: "Earn a certificate",
    range: "Completion · NeuralVarsity",
    desc: "Get an official certificate of completion to showcase on your profile and CV.",
  },
  {
    title: "Free career counselling",
    range: "1:1 guidance",
    desc: "Get personalized career guidance from our team after the masterclass — completely free.",
  },
];

const benefits = [
  {
    label: "Certificate",
    title: "An official certificate of completion from NeuralVarsity.",
  },
  {
    label: "Career counselling",
    title: "Free 1:1 career guidance after the masterclass ends.",
  },
  {
    label: "Beginner-friendly",
    title: "No coding required. Every session is built for absolute beginners.",
  },
  {
    label: "Live & interactive",
    title: "Live sessions with Q&A, builds and real-time problem solving.",
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
              Most courses leave you with notes. You'll leave this masterclass with
              real AI builds, a career roadmap and the confidence to keep building —
              even if you've never written code before.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]">
            {[
              { v: "3 Days", l: "Live online" },
              { v: "100%", l: "Hands-on" },
              { v: "Free", l: "Career counselling" },
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
