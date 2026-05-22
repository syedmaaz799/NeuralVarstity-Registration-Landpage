"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { SplitText } from "@/components/ui/split-text";

type Workflow = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  nodes: { id: string; label: string; type: "input" | "agent" | "tool" | "output"; tag?: string }[];
  edges: [string, string][];
};

const workflows: Workflow[] = [
  {
    id: "chatbot",
    title: "AI Chatbot Workflow",
    subtitle: "Custom AI chatbot, no coding",
    description:
      "Build an AI chatbot powered by OpenAI, Gemini or a local model — wired through a drag-and-drop builder, with custom knowledge and a friendly tone.",
    nodes: [
      { id: "msg", label: "User Message", type: "input", tag: "Chat" },
      { id: "intent", label: "Intent", type: "agent", tag: "LLM" },
      { id: "kb", label: "Knowledge", type: "tool", tag: "Docs" },
      { id: "model", label: "OpenAI / Gemini", type: "agent", tag: "Model" },
      { id: "reply", label: "AI Reply", type: "output", tag: "Chat" },
    ],
    edges: [
      ["msg", "intent"],
      ["intent", "kb"],
      ["kb", "model"],
      ["model", "reply"],
    ],
  },
  {
    id: "whatsapp",
    title: "WhatsApp Automation Workflow",
    subtitle: "Reply, qualify and nurture on WhatsApp",
    description:
      "Automate WhatsApp conversations end-to-end — auto-reply, qualify leads, send updates and follow up — all without writing a single line of code.",
    nodes: [
      { id: "wa", label: "WhatsApp In", type: "input", tag: "Trigger" },
      { id: "agent", label: "AI Agent", type: "agent", tag: "Logic" },
      { id: "sheet", label: "Google Sheets", type: "tool", tag: "Store" },
      { id: "reply", label: "Auto Reply", type: "agent", tag: "Send" },
      { id: "done", label: "Lead Saved", type: "output", tag: "CRM" },
    ],
    edges: [
      ["wa", "agent"],
      ["agent", "sheet"],
      ["agent", "reply"],
      ["sheet", "done"],
    ],
  },
  {
    id: "email",
    title: "AI Email Automation Workflow",
    subtitle: "Read, summarize and reply to emails",
    description:
      "An AI assistant reads incoming emails, classifies them, drafts smart replies and schedules follow-ups — your personal inbox agent, on autopilot.",
    nodes: [
      { id: "inbox", label: "Inbox", type: "input", tag: "Trigger" },
      { id: "classify", label: "Classifier", type: "agent", tag: "LLM" },
      { id: "summary", label: "Summarize", type: "tool", tag: "AI" },
      { id: "draft", label: "Draft Reply", type: "agent", tag: "Compose" },
      { id: "sent", label: "Send / Schedule", type: "output", tag: "Outbox" },
    ],
    edges: [
      ["inbox", "classify"],
      ["classify", "summary"],
      ["summary", "draft"],
      ["draft", "sent"],
    ],
  },
];

function NodePill({ node }: { node: Workflow["nodes"][number] }) {
  const styles: Record<string, string> = {
    input: "border-white/15 bg-white/[0.04] text-white",
    agent: "border-accent/40 bg-accent/[0.08] text-white",
    tool: "border-white/10 bg-white/[0.02] text-ink",
    output: "border-white/20 bg-white text-[#0B0B0F]",
  };
  return (
    <div
      className={`flex h-12 items-center gap-2 rounded-xl border px-4 text-[13px] tracking-tight backdrop-blur-sm ${styles[node.type]}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          node.type === "agent"
            ? "bg-accent"
            : node.type === "output"
              ? "bg-[#0B0B0F]"
              : "bg-white/60"
        }`}
      />
      <span className="font-medium">{node.label}</span>
      {node.tag && (
        <span
          className={`ml-1 rounded-full px-1.5 py-0.5 text-[10px] uppercase tracking-[0.16em] ${
            node.type === "output"
              ? "bg-black/10 text-[#0B0B0F]/70"
              : "bg-white/[0.06] text-ink-muted"
          }`}
        >
          {node.tag}
        </span>
      )}
    </div>
  );
}

function WorkflowGraph({ workflow }: { workflow: Workflow }) {
  return (
    <div className="relative">
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {workflow.nodes.map((n, i) => (
          <motion.li
            key={n.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <NodePill node={n} />
            <span className="absolute -top-2 right-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-dim">
              {String(i + 1).padStart(2, "0")}
            </span>
          </motion.li>
        ))}
      </ol>

      {/* Animated data flow lines */}
      <div className="mt-6 space-y-2">
        {workflow.edges.map(([from, to], i) => {
          const fromNode = workflow.nodes.find((n) => n.id === from);
          const toNode = workflow.nodes.find((n) => n.id === to);
          return (
            <motion.div
              key={`${from}-${to}`}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
              className="flex items-center gap-3 text-[12px] text-ink-muted"
            >
              <span className="font-mono text-[10px] text-ink-dim">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-ink">{fromNode?.label}</span>
              <span className="relative flex-1 overflow-hidden">
                <span className="block h-px bg-white/[0.08]" />
                <motion.span
                  className="absolute inset-y-0 left-0 h-px w-12 bg-gradient-to-r from-transparent via-accent to-transparent"
                  animate={{ x: ["-100%", "1200%"] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: "linear", delay: i * 0.4 }}
                />
              </span>
              <span className="text-ink">{toNode?.label}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export function Workflows() {
  const [active, setActive] = useState(workflows[0].id);
  const current = workflows.find((w) => w.id === active)!;

  return (
    <Section id="workflows" index="05" label="Workflows">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow variant="accent">Live Workflows</Eyebrow>
          </Reveal>
          <div className="mt-6">
            <SplitText
              as="h2"
              text="The exact AI workflows"
              className="font-display text-display-lg text-balance text-white"
            />
            <SplitText
              as="h2"
              text="you'll build live."
              delay={0.2}
              className="font-display text-display-lg italic text-balance text-gradient-soft"
            />
          </div>
          <Reveal delay={0.3}>
            <p className="mt-7 max-w-md text-[15px] leading-[1.65] text-ink-muted">
              These are real, beginner-friendly AI workflows — chatbots, WhatsApp
              automations and AI email assistants — that you'll build live during
              the 3-day masterclass and reuse the same day.
            </p>
          </Reveal>

          <div className="mt-10 space-y-1">
            {workflows.map((w, i) => (
              <button
                key={w.id}
                onClick={() => setActive(w.id)}
                className={`group flex w-full items-center justify-between gap-4 rounded-xl border px-4 py-3.5 text-left transition-all duration-300 ease-cinematic ${
                  active === w.id
                    ? "border-white/15 bg-white/[0.04]"
                    : "border-white/[0.06] bg-transparent hover:border-white/[0.12] hover:bg-white/[0.02]"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-dim">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[14px] text-white">{w.title}</p>
                    <p className="text-[12px] text-ink-muted">{w.subtitle}</p>
                  </div>
                </div>
                <span
                  className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                    active === w.id ? "bg-accent" : "bg-white/15"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.025] to-transparent p-7 sm:p-9">
              <div className="absolute inset-0 -z-0 bg-grid-fine opacity-30 mask-radial" />
              <div className="absolute -top-20 right-0 h-48 w-48 rounded-full bg-accent/[0.08] blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-accent">
                      Workflow preview
                    </p>
                    <h3 className="mt-2 font-display text-2xl tracking-tight text-white">
                      {current.title}
                    </h3>
                  </div>
                  <span className="hidden rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-ink-muted sm:inline-flex">
                    Live trace
                  </span>
                </div>

                <p className="mt-4 max-w-xl text-[14px] leading-[1.6] text-ink-muted">
                  {current.description}
                </p>

                <div className="mt-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <WorkflowGraph workflow={current} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
