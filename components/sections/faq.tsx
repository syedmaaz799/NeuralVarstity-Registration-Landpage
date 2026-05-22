"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { SplitText } from "@/components/ui/split-text";
import { Plus, Minus } from "@/components/ui/icons";

const faqs = [
  {
    q: "Is this masterclass beginner friendly?",
    a: "Yes — 100%. Every session is designed for absolute beginners. Whether you're a student, a non-coder, a working professional or a career switcher, you'll build real AI agents, automations and workflows live — at a pace built for first-time AI builders.",
  },
  {
    q: "Do I need any coding experience?",
    a: "No. You don't need to know Python, JavaScript or any programming language. The entire masterclass uses modern no-code AI infrastructure — drag-and-drop AI builders, no-code agent platforms and modern AI dev tools — so you can ship production-style AI workflows without writing a single line of code.",
  },
  {
    q: "Is the masterclass really free?",
    a: "Yes — the full 3-day masterclass is completely free. There are no hidden charges, no payment information required, and no surprise fees. Just register, show up live and build with us.",
  },
  {
    q: "Will I get a certificate?",
    a: "Yes. Every learner who attends and completes the 3-day masterclass receives an official certificate of completion from NeuralVarsity that you can add to your CV, LinkedIn and portfolio.",
  },
  {
    q: "Will recordings be provided?",
    a: "Recordings are provided only to students enrolled in our professional programs. Recordings are not available for the free masterclass.",
  },
  {
    q: "What tools will we use?",
    a: "Learn modern AI tools like OpenAI, Gemini, Groq, Ollama, Dify, Flowise, LangChain, Cursor, Lovable, Google Colab and HuggingFace while building real AI chatbots, automations and workflows live — step by step, beginner friendly.",
  },
  {
    q: "Can students and non-coders join?",
    a: "Absolutely. Students, freelancers, marketers, designers, working professionals and complete beginners are all welcome. Modern no-code AI infrastructure means anyone can become an AI builder — no technical background, no engineering degree required.",
  },
  {
    q: "Will I get career guidance?",
    a: "Yes — every registered learner gets free 1:1 career counselling after the masterclass. We'll help you map real AI career paths — AI engineer, AI freelancer, AI product builder — and exactly what to learn next to position yourself in the modern AI economy.",
  },
];

function Item({
  q,
  a,
  index,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/[0.06]">
      <button
        onClick={onToggle}
        className="group flex w-full items-start justify-between gap-6 py-6 text-left transition-colors duration-300 hover:bg-white/[0.01]"
        aria-expanded={open}
      >
        <div className="flex items-start gap-5">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-dim">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-display text-[19px] tracking-tight text-white sm:text-xl">
            {q}
          </span>
        </div>
        <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-ink transition-all duration-300 group-hover:border-white/15 group-hover:bg-white/[0.05] group-hover:text-white">
          {open ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-7 pl-[3.25rem] pr-12 text-[15px] leading-[1.65] text-ink-muted">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" index="09" label="FAQ">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <Eyebrow variant="accent">Frequently Asked</Eyebrow>
          </Reveal>
          <div className="mt-6">
            <SplitText
              as="h2"
              text="Answers,"
              className="font-display text-display-lg text-balance text-white"
            />
            <SplitText
              as="h2"
              text="up front."
              delay={0.2}
              className="font-display text-display-lg italic text-balance text-gradient-soft"
            />
          </div>
          <Reveal delay={0.3}>
            <p className="mt-7 max-w-md text-[15px] leading-[1.6] text-ink-muted">
              Still curious? Drop us a message — we read and reply to every one.
            </p>
            <a
              href="mailto:hello@neuralvarsity.com"
              className="mt-5 inline-block text-[14px] text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
            >
              hello@neuralvarsity.com
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.015] px-6 sm:px-8">
              {faqs.map((f, i) => (
                <Item
                  key={f.q}
                  q={f.q}
                  a={f.a}
                  index={i}
                  open={open === i}
                  onToggle={() => setOpen(open === i ? null : i)}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
