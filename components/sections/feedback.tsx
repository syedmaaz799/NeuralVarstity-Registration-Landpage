"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { SplitText } from "@/components/ui/split-text";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { ArrowRight, Check } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

function FloatingField({
  id,
  label,
  type = "text",
  value,
  onChange,
  required,
  textarea,
  rows = 5,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  textarea?: boolean;
  rows?: number;
  autoComplete?: string;
}) {
  const [focused, setFocused] = useState(false);
  const filled = value.length > 0 || focused;
  const sharedClass =
    "peer w-full rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 text-[15px] text-white outline-none transition-all duration-300 focus:border-white/25 focus:bg-white/[0.04]";

  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          value={value}
          required={required}
          rows={rows}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={cn(sharedClass, "resize-none pb-3 pt-7 leading-[1.55]")}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          required={required}
          autoComplete={autoComplete}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={cn(sharedClass, "pb-2 pt-6")}
        />
      )}
      <label
        htmlFor={id}
        className={cn(
          "pointer-events-none absolute left-4 transition-all duration-300",
          filled
            ? "top-2 text-[11px] uppercase tracking-[0.18em] text-ink-muted"
            : textarea
              ? "top-5 text-[15px] text-ink-muted"
              : "top-1/2 -translate-y-1/2 text-[15px] text-ink-muted"
        )}
      >
        {label}
      </label>
    </div>
  );
}

export function Feedback() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (k: keyof typeof form) => (v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="feedback"
      className="relative isolate overflow-hidden py-28 sm:py-32 lg:py-36"
    >
      {/* Atmospheric backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[55vh] w-[80vw] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(77,163,255,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-grid-fine opacity-[0.25] mask-radial" />
      </div>

      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left: section intro */}
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow variant="accent">Feedback & Questions</Eyebrow>
            </Reveal>
            <div className="mt-6">
              <SplitText
                as="h2"
                text="Have a question?"
                className="font-display text-display-lg text-balance text-white"
              />
              <SplitText
                as="h2"
                text="We'd love to hear it."
                delay={0.2}
                className="font-display text-display-lg italic text-balance text-gradient-soft"
              />
            </div>
            <Reveal delay={0.3}>
              <p className="mt-7 max-w-md text-[15px] leading-[1.65] text-ink-muted">
                Have questions about the masterclass? Share your feedback or ask us
                anything — we read and respond to every message.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  { l: "Email", v: "hello@neuralvarsity.com" },
                  { l: "WhatsApp", v: "+91 · Coming soon" },
                  { l: "Instagram", v: "@neuralvarsity" },
                  { l: "Reply time", v: "Within 24 hours" },
                ].map((c) => (
                  <div
                    key={c.l}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4"
                  >
                    <p className="text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                      {c.l}
                    </p>
                    <p className="mt-1.5 text-[13.5px] text-white">{c.v}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: glassmorphism form panel */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-7 backdrop-blur-xl sm:p-10">
                <div className="pointer-events-none absolute -top-24 right-0 h-56 w-56 rounded-full bg-accent/[0.10] blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -left-12 h-56 w-56 rounded-full bg-accent/[0.06] blur-3xl" />
                <div className="absolute inset-0 -z-10 bg-grid-fine opacity-20 mask-radial" />

                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form
                      key="feedback-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      onSubmit={submit}
                      className="relative space-y-4"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                          Send us a message
                        </p>
                        <span className="hidden rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-ink-muted sm:inline-flex">
                          We read every reply
                        </span>
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <FloatingField
                          id="fb-name"
                          label="Name"
                          value={form.name}
                          onChange={update("name")}
                          autoComplete="name"
                          required
                        />
                        <FloatingField
                          id="fb-email"
                          label="Email"
                          type="email"
                          value={form.email}
                          onChange={update("email")}
                          autoComplete="email"
                          required
                        />
                      </div>
                      <FloatingField
                        id="fb-message"
                        label="Message"
                        value={form.message}
                        onChange={update("message")}
                        textarea
                        rows={6}
                        required
                      />

                      <div className="flex items-center justify-between gap-3 border-t border-white/[0.06] pt-6">
                        <p className="text-[12px] text-ink-muted">
                          We typically reply within 24 hours.
                        </p>
                        <Magnetic strength={0.2}>
                          <Button
                            type="submit"
                            size="md"
                            icon={<ArrowRight className="h-3.5 w-3.5" />}
                          >
                            Send Feedback
                          </Button>
                        </Magnetic>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="feedback-success"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="py-10 text-center sm:py-14"
                    >
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-accent/[0.12]">
                        <Check className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="mt-6 font-display text-2xl tracking-tight text-white sm:text-3xl">
                        Message received.
                      </h3>
                      <p className="mx-auto mt-3 max-w-md text-[15px] leading-[1.6] text-ink-muted">
                        Thanks, {form.name.split(" ")[0] || "there"}. We'll get back
                        to you on {form.email || "your email"} within 24 hours.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
