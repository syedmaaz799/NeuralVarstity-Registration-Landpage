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

const roles = [
  { id: "student", label: "Student", sub: "School, college or university" },
  { id: "professional", label: "Working Professional", sub: "Currently employed full-time" },
  { id: "switcher", label: "Career Switcher", sub: "Moving into AI or tech" },
  { id: "freelancer", label: "Freelancer", sub: "Designer, marketer, creator" },
];

function FloatingInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  required,
  autoComplete,
  inputMode,
  error,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  autoComplete?: string;
  inputMode?: "text" | "email" | "tel" | "numeric";
  error?: string;
}) {
  const [focused, setFocused] = useState(false);
  const filled = value.length > 0 || focused;
  const hasError = !!error;
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={hasError}
        aria-describedby={hasError ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={cn(
          "peer w-full rounded-xl border bg-white/[0.02] px-4 pb-2 pt-6 text-[15px] text-white outline-none transition-all duration-300",
          hasError
            ? "border-red-400/60 focus:border-red-400/80"
            : "border-white/[0.08] focus:border-white/25 focus:bg-white/[0.04]"
        )}
      />
      <label
        htmlFor={id}
        className={cn(
          "pointer-events-none absolute left-4 transition-all duration-300",
          filled
            ? "top-2 text-[11px] uppercase tracking-[0.18em]"
            : "top-1/2 -translate-y-1/2 text-[15px]",
          hasError ? "text-red-300/90" : "text-ink-muted"
        )}
      >
        {label}
      </label>
      {hasError && (
        <p
          id={`${id}-error`}
          className="mt-1.5 pl-1 text-[11px] uppercase tracking-[0.14em] text-red-300/90"
        >
          {error}
        </p>
      )}
    </div>
  );
}

function CheckboxRow({
  id,
  label,
  description,
  checked,
  onChange,
}: {
  id: string;
  label: string;
  description: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label
      htmlFor={id}
      className={cn(
        "flex cursor-pointer items-start gap-3 rounded-xl border bg-white/[0.02] px-4 py-3.5 transition-all duration-300",
        checked
          ? "border-white/25 bg-white/[0.05]"
          : "border-white/[0.08] hover:border-white/15"
      )}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
      <span
        aria-hidden
        className={cn(
          "mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-[5px] border transition-all duration-300",
          checked
            ? "border-accent/60 bg-accent/[0.18]"
            : "border-white/15 bg-white/[0.04]"
        )}
        style={{ width: 18, height: 18 }}
      >
        {checked && <Check className="h-3 w-3 text-accent" />}
      </span>
      <span className="min-w-0">
        <span className="block text-[13px] text-white">{label}</span>
        <span className="block text-[11px] leading-snug text-ink-muted">
          {description}
        </span>
      </span>
    </label>
  );
}

export function Registration() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [attemptedNext, setAttemptedNext] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    role: "student",
    whatsapp: true,
    emailUpdates: true,
  });

  const update = <K extends keyof typeof form>(k: K) =>
    (v: (typeof form)[K]) => setForm((f) => ({ ...f, [k]: v }));

  const emailValid = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim());
  const phoneDigits = (s: string) => s.replace(/\D/g, "").length;

  const step1Errors = {
    name: !form.name.trim() ? "Please enter your full name" : "",
    email: !form.email.trim()
      ? "Please enter your email"
      : !emailValid(form.email)
        ? "Enter a valid email address"
        : "",
    phone: !form.phone.trim()
      ? "Please enter your phone number"
      : phoneDigits(form.phone) < 7
        ? "Enter a valid phone number"
        : "",
    city: !form.city.trim() ? "Please enter your city" : "",
  };
  const step1Valid =
    !step1Errors.name &&
    !step1Errors.email &&
    !step1Errors.phone &&
    !step1Errors.city;

  const next = () => {
    if (step === 1 && !step1Valid) {
      setAttemptedNext(true);
      return;
    }
    setAttemptedNext(false);
    setStep((s) => Math.min(s + 1, 2));
  };
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      next();
      return;
    }
    if (!step1Valid) {
      setStep(1);
      setAttemptedNext(true);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section
      id="register"
      className="relative isolate overflow-hidden py-28 sm:py-32 lg:py-40"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[60vh] bg-[radial-gradient(ellipse_at_top,rgba(77,163,255,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-grid-soft opacity-20 mask-radial" />
      </div>

      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow variant="accent">Free Registration · 29–31 May 2026</Eyebrow>
            </Reveal>
            <div className="mt-6">
              <SplitText
                as="h2"
                text="Reserve your free seat"
                className="font-display text-display-lg text-balance text-white"
              />
              <SplitText
                as="h2"
                text="in the masterclass."
                delay={0.2}
                className="font-display text-display-lg italic text-balance text-gradient-soft"
              />
            </div>
            <Reveal delay={0.3}>
              <p className="mt-7 max-w-md text-[15px] leading-[1.65] text-ink-muted">
                Seats are limited and assigned on a first-come, first-served basis.
                Once registered, you'll receive your joining link, schedule and
                reminders on WhatsApp and email.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-10 space-y-3">
                {[
                  "3 days of live, production-style AI training",
                  "Build real AI agents, automations & multi-agent systems",
                  "Free official certificate of completion",
                  "Free 1:1 AI career counselling after the masterclass",
                ].map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-accent/40 bg-accent/[0.12]">
                      <Check className="h-3 w-3 text-accent" />
                    </span>
                    <span className="text-[14px] text-ink">{b}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="mt-12 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                  Free Masterclass
                </p>
                <div className="mt-2 flex items-baseline gap-3">
                  <span className="font-display text-2xl tracking-tightest text-white">
                    29–31 May 2026
                  </span>
                  <span className="text-[12px] text-ink-muted">
                    3 evenings · Live online
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 border-t border-white/[0.06] pt-4">
                  {[
                    { v: "3 Days", l: "Live" },
                    { v: "Free", l: "Cost" },
                    { v: "Online", l: "Format" },
                  ].map((m) => (
                    <div key={m.l}>
                      <p className="text-[13px] text-white">{m.v}</p>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                        {m.l}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-7 backdrop-blur-sm sm:p-10">
                <div className="absolute -top-24 right-0 h-56 w-56 rounded-full bg-accent/[0.08] blur-3xl" />
                <div className="absolute inset-0 -z-10 bg-grid-fine opacity-20 mask-radial" />

                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      onSubmit={submit}
                      className="relative"
                    >
                      {/* Progress */}
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                          Step 0{step} / 02
                        </p>
                        <div className="flex flex-1 items-center gap-1.5">
                          {[1, 2].map((s) => (
                            <span
                              key={s}
                              className={cn(
                                "h-px flex-1 transition-all duration-500",
                                s <= step ? "bg-accent" : "bg-white/[0.08]"
                              )}
                            />
                          ))}
                        </div>
                      </div>

                      <AnimatePresence mode="wait">
                        {step === 1 && (
                          <motion.div
                            key="step1"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-8 space-y-4"
                          >
                            <h3 className="font-display text-2xl tracking-tight text-white">
                              Tell us about you.
                            </h3>
                            <FloatingInput
                              id="name"
                              label="Full name"
                              value={form.name}
                              onChange={update("name")}
                              autoComplete="name"
                              required
                              error={attemptedNext ? step1Errors.name : ""}
                            />
                            <FloatingInput
                              id="email"
                              label="Email address"
                              type="email"
                              value={form.email}
                              onChange={update("email")}
                              autoComplete="email"
                              inputMode="email"
                              required
                              error={attemptedNext ? step1Errors.email : ""}
                            />
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                              <FloatingInput
                                id="phone"
                                label="Phone number"
                                type="tel"
                                value={form.phone}
                                onChange={update("phone")}
                                autoComplete="tel"
                                inputMode="tel"
                                required
                                error={attemptedNext ? step1Errors.phone : ""}
                              />
                              <FloatingInput
                                id="city"
                                label="City"
                                value={form.city}
                                onChange={update("city")}
                                autoComplete="address-level2"
                                required
                                error={attemptedNext ? step1Errors.city : ""}
                              />
                            </div>
                            {attemptedNext && !step1Valid && (
                              <motion.p
                                initial={{ opacity: 0, y: -4 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="pt-1 text-[12px] text-red-300/90"
                              >
                                Please fill in all the fields to continue.
                              </motion.p>
                            )}
                          </motion.div>
                        )}

                        {step === 2 && (
                          <motion.div
                            key="step2"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-8 space-y-6"
                          >
                            <h3 className="font-display text-2xl tracking-tight text-white">
                              A bit more about you.
                            </h3>
                            <div>
                              <p className="text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                                Current role
                              </p>
                              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                                {roles.map((t) => (
                                  <button
                                    key={t.id}
                                    type="button"
                                    onClick={() => update("role")(t.id)}
                                    className={cn(
                                      "rounded-xl border px-4 py-4 text-left transition-all duration-300",
                                      form.role === t.id
                                        ? "border-white/25 bg-white/[0.06]"
                                        : "border-white/[0.08] bg-white/[0.02] hover:border-white/15"
                                    )}
                                  >
                                    <p className="text-[14px] text-white">
                                      {t.label}
                                    </p>
                                    <p className="mt-1 text-[12px] text-ink-muted">
                                      {t.sub}
                                    </p>
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div>
                              <p className="text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                                Stay in the loop
                              </p>
                              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                                <CheckboxRow
                                  id="whatsapp"
                                  label="WhatsApp updates"
                                  description="Joining links, reminders and updates on WhatsApp."
                                  checked={form.whatsapp}
                                  onChange={update("whatsapp")}
                                />
                                <CheckboxRow
                                  id="email-updates"
                                  label="Email updates"
                                  description="Schedule, recordings (if any) and event updates by email."
                                  checked={form.emailUpdates}
                                  onChange={update("emailUpdates")}
                                />
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="mt-10 flex items-center justify-between gap-3 border-t border-white/[0.06] pt-6">
                        <button
                          type="button"
                          onClick={prev}
                          disabled={step === 1}
                          className={cn(
                            "rounded-full px-4 py-2 text-[13px] transition-colors duration-300",
                            step === 1
                              ? "cursor-not-allowed text-ink-dim"
                              : "text-ink-muted hover:text-white"
                          )}
                        >
                          ← Back
                        </button>

                        {step < 2 ? (
                          <Magnetic strength={0.2}>
                            <Button
                              type="button"
                              size="md"
                              onClick={next}
                              icon={<ArrowRight className="h-3.5 w-3.5" />}
                            >
                              Continue
                            </Button>
                          </Magnetic>
                        ) : (
                          <Magnetic strength={0.2}>
                            <Button
                              type="submit"
                              size="md"
                              icon={<ArrowRight className="h-3.5 w-3.5" />}
                            >
                              Secure my free seat
                            </Button>
                          </Magnetic>
                        )}
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="py-10 text-center sm:py-16"
                    >
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-accent/30 bg-accent/[0.12]">
                        <Check className="h-7 w-7 text-accent" />
                      </div>
                      <h3 className="mt-6 font-display text-3xl tracking-tight text-white">
                        You're registered successfully.
                      </h3>
                      <p className="mx-auto mt-3 max-w-md text-[15px] leading-[1.6] text-ink-muted">
                        Thanks, {form.name.split(" ")[0] || "there"}. You'll receive
                        masterclass updates and joining details on WhatsApp and email.
                      </p>
                      <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-[12px] uppercase tracking-[0.18em] text-ink-muted">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        Seat ID · NV-MC-{Math.floor(1000 + Math.random() * 8999)}
                      </div>
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
