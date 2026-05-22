"use client";

import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { SplitText } from "@/components/ui/split-text";

const testimonials = [
  {
    quote:
      "I had zero coding background. By Day 2 I had built my first AI agent, a WhatsApp automation and a local AI assistant — all live. This made modern Agentic AI feel actually buildable.",
    name: "Aanya Sharma",
    role: "Student · 3rd Year",
    initials: "AS",
    weight: "wide",
  },
  {
    quote:
      "The teaching is calm, clear and beginner-friendly — but the builds are real. I shipped production-style AI workflows to my team the same week.",
    name: "Rahul Verma",
    role: "Working Professional",
    initials: "RV",
    weight: "tall",
  },
  {
    quote:
      "Finally an Agentic AI masterclass that respects beginners.",
    name: "Sneha Iyer",
    role: "Career Switcher",
    initials: "SI",
    weight: "short",
  },
  {
    quote:
      "I'm a freelancer, not a coder. After 3 days I was offering AI agent, WhatsApp automation and multi-agent services to my own clients. The ROI on a free class is unreal.",
    name: "Mohammed Faraz",
    role: "Freelancer · Designer",
    initials: "MF",
    weight: "wide",
  },
  {
    quote:
      "Production-style AI, taught beginner-friendly. Loved it.",
    name: "Ishita Rao",
    role: "Non-coder · Marketer",
    initials: "IR",
    weight: "short",
  },
  {
    quote:
      "The 1:1 career counselling gave me a real modern AI roadmap — freelancing paths, AI builder roles and exactly what to learn next. Game-changer.",
    name: "Kabir Singh",
    role: "Final Year · Engineering",
    initials: "KS",
    weight: "tall",
  },
];

function Card({ t }: { t: (typeof testimonials)[number] }) {
  const span =
    t.weight === "wide"
      ? "md:col-span-2"
      : t.weight === "tall"
        ? "md:row-span-2"
        : "";
  return (
    <Reveal>
      <article
        className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.025] to-transparent p-7 transition-all duration-500 ease-cinematic hover:border-white/[0.14] hover:bg-white/[0.04] sm:p-8 ${span}`}
      >
        <div className="absolute -top-12 right-0 h-32 w-32 rounded-full bg-accent/0 blur-3xl transition-all duration-700 group-hover:bg-accent/[0.08]" />
        <div className="relative">
          <svg
            viewBox="0 0 20 16"
            className="h-5 w-5 text-white/20"
            fill="currentColor"
            aria-hidden
          >
            <path d="M0 16V8.5C0 3.8 3.1.4 7.7 0v3.2C5.2 3.7 3.6 5.4 3.6 7.8H7.7V16H0zm12.3 0V8.5c0-4.7 3.1-8.1 7.7-8.5v3.2c-2.5.5-4.1 2.2-4.1 4.6h4.1V16h-7.7z" />
          </svg>
          <p className="mt-5 font-display text-[18px] leading-[1.45] tracking-tight text-white sm:text-[20px]">
            {t.quote}
          </p>
        </div>
        <footer className="relative mt-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-white/15 to-white/5 ring-1 ring-white/10">
            <span className="text-[12px] font-medium tracking-tight text-white">
              {t.initials}
            </span>
          </div>
          <div>
            <p className="text-[13px] text-white">{t.name}</p>
            <p className="text-[11px] uppercase tracking-[0.16em] text-ink-muted">
              {t.role}
            </p>
          </div>
        </footer>
      </article>
    </Reveal>
  );
}

export function Testimonials() {
  return (
    <Section id="testimonials" index="08" label="Voices">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <Eyebrow variant="accent">Voices from learners</Eyebrow>
        </Reveal>
        <div className="mt-6">
          <SplitText
            as="h2"
            text="What beginners say"
            className="font-display text-display-lg text-balance text-white"
          />
          <SplitText
            as="h2"
            text="after the masterclass."
            delay={0.2}
            className="font-display text-display-lg italic text-balance text-gradient-soft"
          />
        </div>
      </div>

      <div className="mt-20 grid auto-rows-fr grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Card t={t} key={i} />
        ))}
      </div>
    </Section>
  );
}
