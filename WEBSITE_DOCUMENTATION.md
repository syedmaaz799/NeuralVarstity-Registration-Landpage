# NeuralVarsity — Website Documentation

A complete reference for every text content, visual detail, interaction, effect, animation, and the full project structure of the **NeuralVarsity — Free 3-Day Agentic AI Career Masterclass** landing page (29–31 May 2026, live online, beginner-friendly).

---

## Table of contents

1. [Design tokens & system](#1-design-tokens--system)
2. [Typography system](#2-typography-system)
3. [Global effects & providers](#3-global-effects--providers)
4. [Navigation (header)](#4-navigation-header)
5. [Section 01 — Hero](#5-section-01--hero)
6. [Section 02 — Trust Strip](#6-section-02--trust-strip)
7. [Section 03 — Why Agentic AI Matters](#7-section-03--why-agentic-ai-matters)
8. [Section 04 — Curriculum Journey (3 Days)](#8-section-04--curriculum-journey-3-days)
9. [Section 05 — Tech Ecosystem](#9-section-05--tech-ecosystem)
10. [Section 06 — Live Workflows](#10-section-06--live-workflows)
11. [Section 07 — Outcomes](#11-section-07--outcomes)
12. [Section 08 — Testimonials](#12-section-08--testimonials)
13. [Section 09 — Registration](#13-section-09--registration)
14. [Section 10 — FAQ](#14-section-10--faq)
15. [Section 11 — Feedback & Questions](#15-section-11--feedback--questions)
16. [Section 12 — Final CTA](#16-section-12--final-cta)
17. [Footer](#17-footer)
18. [Reusable UI primitives](#18-reusable-ui-primitives)
19. [Complete project structure](#19-complete-project-structure)
20. [Effect catalogue (cross-section reference)](#20-effect-catalogue-cross-section-reference)

---

## 1. Design tokens & system

### Color palette

The website uses **exactly one accent color** — no rainbow gradients, no neon overload.

| Token | Value | Purpose |
| ----- | ----- | ------- |
| `bg` | `#0B0B0F` | Base background |
| `bg-surface` | `#111116` | Quiet section surface |
| `bg-elevated` | `#17171D` | Elevated cards / chips |
| `bg-line` | `#1F1F27` | Hairline borders |
| `ink` | `#FFFFFF` | Primary text |
| `ink-muted` | `#A1A1AA` | Secondary text |
| `ink-dim` | `#6B6B76` | Eyebrow / mono labels |
| `ink-faint` | `#3A3A44` | Disabled / hint |
| `accent` | `#4DA3FF` | Single accent |
| `accent-soft` | `rgba(77, 163, 255, 0.12)` | Accent fills |
| `accent-glow` | `rgba(77, 163, 255, 0.35)` | Accent glow rings |

### Atmospheric background

The body has a layered atmospheric background (in `app/globals.css`):

- Radial glow `1200px × 600px` at `50% -200px` — `rgba(77, 163, 255, 0.08)`
- Secondary radial glow `900px × 500px` at `100% 30%` — `rgba(77, 163, 255, 0.04)`
- Base color `#0B0B0F`

### Custom utility classes

- `.mask-radial` — radial ellipse mask for vignette fades
- `.mask-fade-x` / `.mask-fade-y` — linear edge fades
- `.bg-grid-soft` — `64px × 64px` grid at `rgba(255,255,255,0.04)`
- `.bg-grid-fine` — `28px × 28px` finer grid at `rgba(255,255,255,0.025)`
- `.text-gradient-soft` — `#FFFFFF → #C9C9D1` vertical gradient (used for italic display lines)
- `.glass-panel` — `rgba(255,255,255,0.025) → rgba(255,255,255,0.01)` with `backdrop-blur(14px)`
- `.hairline` — `rgba(255,255,255,0.06)` border helper

### Selection color

Text selection background is `rgba(77, 163, 255, 0.35)` with white text.

---

## 2. Typography system

### Font families

| Font | Variable | Use |
| ---- | -------- | --- |
| **Inter** | `--font-inter` | Body / UI |
| **Inter Tight** | `--font-inter-tight` | Display headings |
| **Poppins 800** | `--font-poppins` | **NeuralVarsity wordmark only** |

### Brand rule (strict, enforced)

`NeuralVarsity` is **always** rendered with:

```
font-family: 'Poppins', sans-serif;
font-weight: 800;
color: #FFFFFF;
```

Never gradient. Never glowing. Never outlined. Never transparent. Enforced in `components/brand/wordmark.tsx` via inline style.

### Display scale

| Token | Size | Line-height | Tracking |
| ----- | ---- | ----------- | -------- |
| `display-xl` | `clamp(3.5rem, 8vw, 7rem)` | `0.95` | `-0.04em` |
| `display-lg` | `clamp(2.75rem, 6vw, 5rem)` | `1.0` | `-0.035em` |
| `display-md` | `clamp(2rem, 4.5vw, 3.5rem)` | `1.05` | `-0.03em` |
| `display-sm` | `clamp(1.5rem, 3vw, 2.25rem)` | `1.15` | `-0.02em` |
| `eyebrow` | `0.75rem` | — | `0.18em` |

### Headline patterns

The page uses **two headline patterns**, both cinematic word-by-word reveals.

**Pattern A — Two-line editorial split** (used in most sections):

1. First line — solid white, normal weight (`SplitText` with word-by-word reveal)
2. Second line — italic, `text-gradient-soft` (white → near-white), `0.2s` delayed reveal

**Pattern B — Three-line cinematic cascade** (used in the Hero):

1. Line 1 — solid white (start at `0s`)
2. Line 2 — solid white (start at `+0.32s`)
3. Line 3 — italic, `text-gradient-soft` (start at `+0.62s`)

Each line uses `duration: 1.05s`, `ease: cubic-bezier(0.22, 1, 0.36, 1)`, `blur: 12 → 0`, word stagger `0.09s`.

This pacing is what creates the "popup → settle" cinematic feel on the hero.

---

## 3. Global effects & providers

### Smooth scroll — `SmoothScrollProvider`

Located in `components/providers/smooth-scroll-provider.tsx`.

- Built on **Lenis 1.1.18**
- Duration: `1.15s`
- Easing: `1.001 - 2^(-10t)` (exponential ease-out)
- Wheel multiplier: `1`, touch multiplier: `1.2`
- Wired into **GSAP ticker** with `lagSmoothing(0)` so `ScrollTrigger` stays perfectly synced
- Automatically disabled if `prefers-reduced-motion: reduce`

### Custom cursor — `CustomCursor`

Located in `components/providers/custom-cursor.tsx`.

- Only enabled on fine pointers (desktop)
- **Two layers:**
  - A `6px × 6px` white dot tracking the mouse instantly
  - A `32px × 32px` ring trailing with `0.16` lerp smoothing
- Uses `mix-blend-difference` so it adapts on light & dark surfaces
- On hover over any `a`, `button`, or `[data-cursor='hover']` element:
  - Ring expands to `56px × 56px`
  - Opacity raises to `0.7`
  - 300ms ease-out transition
- Hides system cursor while active

### Reduced motion

Globally honored: all `animation-duration` and `transition-duration` collapse to `0.001ms` when `prefers-reduced-motion: reduce`.

### Scrollbar

Custom thin scrollbar: `10px` wide, `rgba(255,255,255,0.06)` thumb, `rgba(255,255,255,0.12)` on hover.

### Focus rings

`2px` solid `rgba(77, 163, 255, 0.55)` outline with `2px` offset, on all `:focus-visible`.

---

## 4. Navigation (header)

File: `components/layout/navigation.tsx`

### Composition

A fixed, centered **pill-shaped nav** floating `16–20px` from the top, with a maximum width of `1180px`.

### States

| State | Style |
| ----- | ----- |
| Top (no scroll) | `border-white/5`, `bg-white/[0.02]`, `backdrop-blur-md` |
| Scrolled (> 24px) | `border-white/8`, `bg-[#0B0B0F]/75`, `backdrop-blur-xl`, `0 18px 60px -30px rgba(0,0,0,0.8)` shadow |

The transition between states is `500ms cubic-bezier(0.16, 1, 0.3, 1)`.

### Entrance animation

`y: -20 → 0`, `opacity: 0 → 1`, `delay: 0.2s`, `duration: 0.9s`.

### Contents (left → right)

1. **Wordmark** — the `nv-logo.png` (rendered through `next/image`) followed by the `NeuralVarsity` text (Poppins 800, solid white, small size in the nav)
2. **Inline links** (desktop only, `lg` breakpoint):
   - `Curriculum`
   - `Tools`
   - `Workflows`
   - `Outcomes`
   - `FAQ`
   - Each pill rounds-full, hover `text-white`
3. **Cohort indicator** (sm and up):
   - Pulsing accent dot (`animate-ping` on `rgba(77, 163, 255, 0.6)`)
   - Label: `29–31 MAY · FREE` (uppercase, tracked `0.18em`)
4. **CTA button** — `Register for Free` (primary white pill, magnetic strength `0.2`)
5. **Mobile menu toggle** (`lg` and below):
   - `36px × 36px` square button, two horizontal bars that morph into an X with `300ms` transitions

### Mobile menu

A full-width sheet appears below the nav:

- Entrance: `opacity: 0 → 1`, `y: -8 → 0`, `350ms cubic-bezier(0.16, 1, 0.3, 1)`
- Backdrop-blur, `#0B0B0F/95`
- Same links + full-width `Register for Free` CTA at bottom
- Auto-closes on link tap

---

## 5. Section 01 — Hero

File: `components/sections/hero.tsx`

### Background — animated neural network

A live `<Canvas>` from React Three Fiber rendering `NeuralNetworkCanvas`:

- **70 nodes** floating in 3D space (range `14 × 10 × 6`)
- Each node has a base position + drift offsets:
  - `x: bx + sin(t·0.18 + i·0.5) × 0.3`
  - `y: by + cos(t·0.22 + i·0.4) × 0.25`
  - `z: bz + sin(t·0.14 + i·0.7) × 0.2`
- **Edges** connect any two nodes within `1.7` world-units; recomputed per-frame
- Edges use additive blending in accent color `#4DA3FF` at `opacity: 0.18`
- Points are white at `opacity: 0.85`, `0.05` world-size
- **Cursor attraction**: nodes within `3.5` units of cursor are gently pulled with force `(1 - d/3.5) × 0.18 × delta`
- Whole field gently sways with `sin(t × 0.04) × 0.05` rotation
- Fog clamps depth between `6` and `14` to `#0B0B0F` (cinematic depth fog)
- Camera at `[0, 0, 8]`, FoV `55`
- DPR clamped `[1, 1.6]` for perf

The 3D layer sits behind a vignette mask (`mask-radial`) at `opacity: 0.8` so it stays atmospheric, never dominant.

### Overlays on top of 3D

- Vertical fade — `transparent → #0B0B0F/30 → #0B0B0F`
- Top radial accent glow — `rgba(77, 163, 255, 0.10) → transparent at 55%`
- Fine grid — `mask-radial`, `opacity: 0.5`
- Noise texture — SVG fractal-noise data URI, `opacity: 0.5`, `mix-blend-overlay`

### Text content (top → bottom)

1. **Cohort meta strip** (small chips, animated in with delay `0.1s`):
   - Chip 1: pulsing accent dot + `FREE LIVE MASTERCLASS · 29–31 MAY 2026` (with `animate-ping`)
   - Separator hairline
   - `3 DAYS · LIVE ONLINE · BEGINNER FRIENDLY`
   - Separator hairline (lg+)
   - `CERTIFICATE · CAREER COUNSELLING` (lg+)

2. **Headline — 3-line cinematic cascade (`display-xl`):**
   - Line 1 (white): `Build AI Chatbots,` — starts at `0s`
   - Line 2 (white): `Automations & AI Agents` — starts at `+0.32s`
   - Line 3 (italic, gradient): `without coding.` — starts at `+0.62s`

   Each line word-by-word `SplitText`: `y: 110% → 0`, `opacity: 0 → 1`, `blur(12px) → blur(0)`, `1.05s cubic-bezier(0.22, 1, 0.36, 1)`, stagger `0.09s`.

3. **Sub-copy** (max-width 680px, `text-ink-muted`, ~17–18px):
   > Learn how to build AI chatbots, automations and modern AI workflows using drag-and-drop tools, OpenAI, Gemini, Groq and local AI models — even if you're a complete beginner.

   Animated in with `y: 18 → 0`, `blur(8px) → blur(0)`, `1s` ease, delay `1.1s`.

4. **CTA cluster** (delay `1.3s`):
   - Primary: `Register for Free` → scrolls to `#register`, with `ArrowRight` icon that nudges `+2px` on hover
   - Secondary: `See What You'll Learn` → scrolls to `#curriculum`
   - Both wrapped in `Magnetic` with strength `0.2` and `0.15`

5. **Bottom meta band** (delay `1.5s`) — `border-t border-white/[0.06]`, 4 stats in a 2×2 / 1×4 grid:

| Value | Label |
| ----- | ----- |
| `3` | DAYS LIVE |
| `100%` | BEGINNER FRIENDLY |
| `✓` | CERTIFICATE INCLUDED |
| `Free` | CAREER COUNSELLING |

6. **Scroll cue** (desktop only, delay `1.8s`):
   - Two `40px` hairlines flanking the word `SCROLL` in uppercase, letter-spacing `0.22em`

### Hover effects

- Primary button — `y: -1px` lift, scale-down `0.98` on press, with a subtle inner glow shadow
- Secondary button — border lightens to `white/15`, background to `white/[0.08]`
- All buttons + Magnetic-wrapped CTAs respond to cursor with `0.15–0.2` magnetic strength, spring `stiffness: 180, damping: 18`

---

## 6. Section 02 — Trust Strip

File: `components/sections/trust-strip.tsx`

### Layout

- `border-y border-white/[0.06]`
- `bg-bg-surface/40` — a quiet darker band

### Text content

**Eyebrow:** `AI TOOLS YOU'LL LEARN OVER 3 DAYS`

**Marquee tools (looping, 3× duplicated):**
`OpenAI` · `Gemini` · `Groq` · `Ollama` · `Dify` · `Flowise` · `LangChain` · `Cursor` · `Lovable` · `Google Colab` · `HuggingFace` · `WhatsApp Automation`

The marquee uses an infinite `x: 0% → -50%` translation over `40s` linear, masked with `mask-fade-x` so edges fade.

**Value cards grid** (2 × 2 on mobile, 4 × 1 on desktop), inside a single rounded `2xl` panel with hairline dividers:

| Value | Label | Sub-label |
| ----- | ----- | --------- |
| `100%` | Practical | every session is build-first |
| `No Code` | No coding required | drag-and-drop AI workflows |
| `Real` | Build real AI agents | chatbots, automations, agents |
| `Career` | Career focused | roadmap + free counselling |

Each value cell:
- Bg `#0B0B0F/60`, padding `24–28px`
- Display value uses `display` font, `tracking-tightest`
- Reveals stagger by `0.07s` left → right

### Effects

- Tool names — slight `text-white` shift on hover, no other effect
- Reveals — IntersectionObserver-triggered blur-to-clear, `y: 24 → 0`, `0.9s` ease

---

## 7. Section 03 — Why Agentic AI Matters

File: `components/sections/why-agentic.tsx`

### Layout

A 12-column editorial split:
- Left (5 cols, **sticky** at top-32 on desktop) — eyebrow, headline, supporting copy, pull-quote card
- Right (7 cols) — three stacked "shift" cards

### Text content

**Section index/label:** `02 / WHY NOW`

**Eyebrow (accent):** `WHY THIS MASTERCLASS · WHY NOW`

**Headline:**
- Line 1: `AI is moving from`
- Line 2 (italic gradient): `experts to everyone.`

**Supporting copy:**
> Modern AI tools have removed the coding barrier. Whether you're a student, a non-coder, a working professional or a career switcher — you can now build real AI products and unlock new career paths.

**Market signal pull-quote** (desktop only, parallax-tracked):
> "**AI skills are now the #1 in-demand skill** across freelancing platforms, startups and enterprise hiring in 2026."
>
> — Global AI Talent Report

The pull-quote card has a parallax `y` based on scroll progress through the section: it translates from `+60px` to `-60px` as the section scrolls past, using `useScroll + useTransform`.

**Right column — three "shift" cards:**

| # | Title | Body |
| -- | ----- | ---- |
| `01` | From watching AI to building with AI. | You don't need a CS degree to ship modern AI. With drag-and-drop tools and modern AI platforms, anyone can build real chatbots, automations and agents in days — not years. |
| `02` | From experts only to everyone. | AI used to belong to engineers. Today, students, freelancers, career switchers and working professionals are building production-ready AI workflows using no-code platforms. |
| `03` | From learning to shipping in 3 days. | Most courses stop at theory. In this 3-day masterclass you'll build AI chatbots, WhatsApp automations and AI agents live — alongside a mentor who guides every step. |

### Card structure & effects

Each shift card:
- Rounded `2xl`, border `white/[0.06]`, padding `28–36px`
- Background: vertical gradient `white/[0.025] → transparent`
- **Hover:** border lifts to `white/[0.1]`, background to `white/[0.04]`, **and** a soft accent blur orb appears in the top-right corner (`bg-accent/[0.08]`, `blur-3xl`, `40 × 40` rem, 700ms transition)
- A hairline gradient line at the bottom: `white/[0.08] → transparent`
- Top-right index number in mono `11px` tracked `0.2em`
- Stagger reveal — each card delayed `0.1s` more than previous

---

## 8. Section 04 — Curriculum Journey (3 Days)

File: `components/sections/curriculum.tsx`

### Layout

A center-aligned headline, then a **vertical zig-zag timeline** with a center accent line that grows as the user scrolls.

### Text content

**Section index/label:** `03 / CURRICULUM`

**Eyebrow (accent):** `3 DAYS · LIVE ONLINE · FREE`

**Headline:**
- Line 1: `A 3-day cinematic`
- Line 2 (italic gradient): `journey into modern AI.`

**Sub-copy:**
> Each day is a hands-on build. By the end of Day 3, you'll have built real AI chatbots, automations and agents — and you'll walk away with a clear AI career roadmap.

### Three days (zig-zag timeline)

| Day | Phase | Title | Body | Bullets |
| --- | ----- | ----- | ---- | ------- |
| Day 01 · 29 May | Foundations & AI Tools | **Build AI Chatbots & Use Powerful AI Models** | Start from zero. Learn the modern AI model landscape and build your first AI chatbots using OpenAI, Gemini, Groq and local AI models — all without writing code. | OpenAI API · Gemini API · Groq API · Open-source AI models · Ollama local AI setup · Drag-and-drop chatbot building · No-code AI workflows |
| Day 02 · 30 May | AI Agents & Automation | **Build AI Agents & Automations** | Move from chatbots to autonomous workflows. Build email automations, WhatsApp automations and multi-step AI agents that work for you, around the clock. | Email automation · WhatsApp automation · AI assistants · Workflow automations · Multi-step AI agents · Productivity systems |
| Day 03 · 31 May | AI Career & Modern Platforms | **Modern AI Career Tools & Future AI Platforms** | Step into the modern AI builder ecosystem. Ship AI apps with Cursor, Lovable and Google Colab — and finish with a clear AI career roadmap and free counselling. | Cursor AI · Lovable · Google Colab · Modern AI development platforms · AI app building · AI career roadmap · Free career counselling |

### Timeline effects

- A central vertical line at `left-1/2` (desktop only), `white/[0.06]`, with an accent-colored gradient overlay scaled by scroll progress (`useScroll` → `scaleY: 0 → 1`)
- Each day card is on alternating sides (odd → left, even → right)
- Between each card row, on desktop only:
  - A small `12px` dot with white ring + accent inner fill at the timeline level
  - A massive ghost number (`01–03`) at `text-7xl` in `white/[0.04]` (editorial backdrop)

### Card structure & effects

Each day card:
- Rounded `2xl`, `border-white/[0.06]`
- Gradient `white/[0.025] → transparent`
- **Hover:** border to `white/[0.12]`, top-right accent orb (`bg-accent/[0.06]`, `blur-3xl`) fades in over `700ms`
- Top row: day in mono `11px` (left) + phase chip (right) — phase chip is rounded-full, hairline border, `bg-white/[0.03]`
- Title in display, `text-2xl → 28px`
- Bullets as 2-column list, each with a `1×1 px` accent dot
- IntersectionObserver reveal, blur-to-clear

---

## 9. Section 05 — Tech Ecosystem

File: `components/sections/tech-ecosystem.tsx`
Brand logos: `components/brand/tool-logos.tsx`

### Layout

7-column orbit visualization (left) + 5-column categorized list (right) on desktop. Stacks vertically on mobile.

### Text content

**Section index/label:** `04 / TOOLS`

**Eyebrow (accent):** `THE MODERN AI TOOLKIT`

**Headline:**
- Line 1: `One constellation.`
- Line 2 (italic gradient): `Every tool you'll touch.`

**Sub-copy:**
> Across 3 days you'll use the same tools modern AI teams ship with — from foundation models to no-code builders and modern AI dev platforms.

### The 12 tools, by category

| Category | Tools |
| -------- | ----- |
| AI Models | `OpenAI`, `Gemini`, `Groq`, `Ollama`, `HuggingFace` |
| No-Code AI Builders | `Dify`, `Flowise`, `LangChain` |
| Modern AI Dev Tools | `Cursor`, `Lovable`, `Google Colab` |
| AI Automation | `WhatsApp Automation` |

### Brand logos

Each tool has a stylized colorful SVG glyph defined in `components/brand/tool-logos.tsx` and rendered by the `<BrandLogo name="..." />` component. The exact in-brand fills are used (e.g. OpenAI lockup, Gemini gradient, Groq red square, Ollama llama, Dify blue D, Flowise gradient nodes, LangChain teal link, Cursor knife arrow, Lovable pink heart, Colab orange, HuggingFace yellow face, WhatsApp green bubble).

### Orbit visualization (left)

- An aspect-square container, max `640px`
- **Three concentric rings** (sizes `54%`, `74%`, `94%`) — `border-white/[0.06]`
- Fine grid behind, `mask-radial` to taper
- A `radial-gradient` accent glow at center (`288 × 288px`, `rgba(77,163,255,0.18) → transparent`)

**Center NV core (logo image, no disc):**
- A static positioning wrapper holds the core perfectly centered while the inner motion layer scales
- A `160 × 160px` dashed halo ring (`border-dashed border-white/10`)
- A `128 × 128px` soft blue radial glow behind the logo (`bg-[radial-gradient(circle,rgba(77,163,255,0.35),transparent_70%)]`, `blur-xl`)
- The `/nv-logo.png` image rendered through `next/image` at `h-28 × w-28`, `object-contain`
- A subtle blue drop-shadow on the logo: `drop-shadow(0 0 24px rgba(77, 163, 255, 0.45))`
- Gently scales `1 → 1.05 → 1` over `6s` easeInOut, infinite
- **No dark plate, no border, no backdrop blur around the logo** — the logo sits directly on the orbit canvas as the focal point

**Three orbiting rings of tool pills:**

| Ring | Radius | Tools | Direction | Period |
| ---- | ------ | ----- | --------- | ------ |
| Inner | 27% | AI Models (5 tools) | clockwise | 55s |
| Middle | 37% | No-Code AI Builders (3 tools) | counter-clockwise | 70s |
| Outer | 47% | Modern AI Dev Tools + Automation (4 tools) | clockwise | 90s |

Each tool pill counter-rotates at its parent's speed so it stays upright.

**Tool pill design:**
- Rounded-full, `border-white/[0.08]`, `bg-[#0B0B0F]/90`, `backdrop-blur`
- A `14px × 14px` `BrandLogo` glyph inside (the actual tool's logo in its brand color)
- Default shadow: `0 4px 16px -8px rgba(0,0,0,0.5)`

**Two outermost dashed rings** rotate slightly with scroll progress (0 → 60°) — these are masked with `mask-radial` for a fade.

### Right column — categorized list

For each category:
- A label in uppercase tracked `0.18em`, separated by hairline borders
- Tools rendered as `inline-flex` chips, rounded-full, with their `BrandLogo` glyphs (12 × 12px)
- Reveals stagger by `0.07s` per category

### Hover interactions (linked)

This section has a **two-way hover sync**:

- Hovering an orbit pill **or** a list chip sets a single `hovered` state
- The matched chip in **both** views applies:
  - `scale: 1.10` (orbit pill)
  - `border-white/30`, `bg-white/[0.06]`, `text-white` (list chip)
  - `box-shadow: 0 0 24px rgba(77, 163, 255, 0.4)` glow (orbit pill)

This makes the constellation feel coherent and engineered.

---

## 10. Section 06 — Live Workflows

File: `components/sections/workflows.tsx`

### Layout

5-column left (intro + workflow picker) + 7-column right (live preview panel).

### Text content

**Section index/label:** `05 / WORKFLOWS`

**Eyebrow (accent):** `LIVE WORKFLOWS`

**Headline:**
- Line 1: `The exact AI workflows`
- Line 2 (italic gradient): `you'll build live.`

**Sub-copy:**
> These are real, beginner-friendly AI workflows — chatbots, WhatsApp automations and AI email assistants — that you'll build live during the 3-day masterclass and reuse the same day.

### Three workflows

#### Workflow 1 — AI Chatbot Workflow
- Subtitle: `Custom AI chatbot, no coding`
- Description:
  > Build an AI chatbot powered by OpenAI, Gemini or a local model — wired through a drag-and-drop builder, with custom knowledge and a friendly tone.
- Nodes: `User Message (Chat)` → `Intent (LLM)` → `Knowledge (Docs)` → `OpenAI / Gemini (Model)` → `AI Reply (Chat)`

#### Workflow 2 — WhatsApp Automation Workflow
- Subtitle: `Reply, qualify and nurture on WhatsApp`
- Description:
  > Automate WhatsApp conversations end-to-end — auto-reply, qualify leads, send updates and follow up — all without writing a single line of code.
- Nodes: `WhatsApp In (Trigger)` → `AI Agent (Logic)` → `Google Sheets (Store)` & `Auto Reply (Send)` → `Lead Saved (CRM)`

#### Workflow 3 — AI Email Automation Workflow
- Subtitle: `Read, summarize and reply to emails`
- Description:
  > An AI assistant reads incoming emails, classifies them, drafts smart replies and schedules follow-ups — your personal inbox agent, on autopilot.
- Nodes: `Inbox (Trigger)` → `Classifier (LLM)` → `Summarize (AI)` → `Draft Reply (Compose)` → `Send / Schedule (Outbox)`

### Left column — picker

Three large pickable rows, one for each workflow:
- `font-mono` index `01–03` on the left
- Title in white, subtitle in `ink-muted`
- A `2 × 2 px` dot on the right — `bg-accent` when active, `bg-white/15` when inactive
- **Hover:** border to `white/[0.12]`, background to `white/[0.02]` (only when inactive)
- **Active:** `border-white/15`, `bg-white/[0.04]`

### Right column — workflow preview

A `2xl` panel with:
- Top label: `WORKFLOW PREVIEW` (accent, uppercase)
- Current workflow title (display 2xl)
- Description copy
- A `LIVE TRACE` chip in the corner (sm+)
- Top-right accent blur orb (`192 × 192`, `bg-accent/[0.08]`, `blur-3xl`)
- Background — fine grid, `mask-radial`, `opacity: 0.3`

**Node grid** — 3 columns of `NodePill`s.

`NodePill` color rules:
| Type | Border | Background | Text |
| ---- | ------ | ---------- | ---- |
| `input` | `white/15` | `white/[0.04]` | white |
| `agent` | `accent/40` | `accent/[0.08]` | white |
| `tool` | `white/10` | `white/[0.02]` | ink |
| `output` | `white/20` | `white` | `#0B0B0F` (inverted) |

Each pill has a `1.5px` dot, the node label, and a tiny uppercase tag chip (e.g. `LLM`, `Logic`, `AI`).

### Animated data-flow edges

Below the node grid, the workflow's edges are rendered as text rows:

```
01  <FromNode>  ───── data flow ─────  <ToNode>
```

Each edge has a `12px` accent comet (`bg-gradient-to-r from-transparent via-accent to-transparent`) that animates `x: -100% → 1200%` over `3.6s` linear, infinite, with a per-edge delay of `0.4s`. The whole sequence feels like real telemetry flowing.

### Transitions

- Switching workflows uses `AnimatePresence mode="wait"`
- Outgoing: `opacity → 0, y → -8`
- Incoming: `opacity → 1, y → 12 → 0`, duration `0.5s` cinematic ease

---

## 11. Section 07 — Outcomes

File: `components/sections/outcomes.tsx`

### Layout

5 cols left (intro + metrics grid) + 7 cols right (transformations + benefits).

### Text content

**Section index/label:** `06 / OUTCOMES`

**Eyebrow (accent):** `OUTCOMES`

**Headline:**
- Line 1: `What you'll walk away`
- Line 2 (italic gradient): `with after 3 days.`

**Supporting copy:**
> Most courses leave you with notes. You'll leave this masterclass with real AI builds, a career roadmap and the confidence to keep building — even if you've never written code before.

### Left metric grid (2 × 2, hairlines)

| Value | Label |
| ----- | ----- |
| `3 Days` | LIVE ONLINE |
| `100%` | HANDS-ON |
| `Free` | CAREER COUNSELLING |
| `✓` | CERTIFICATE |

### Transformations (right top)

Header: `YOUR TRANSFORMATION IN 3 DAYS`

| Title | Range | Description |
| ----- | ----- | ----------- |
| Learn modern AI tools | OpenAI · Gemini · Groq | Get hands-on with the AI tools used by startups and modern AI teams. |
| Build your first AI workflows | Live · Step by step | Ship real chatbots, automations and AI agents — built live during the masterclass. |
| Explore AI career opportunities | Career roadmap | Understand where AI is going and the real paths open to beginners in 2026. |
| Become AI confident | From watcher to builder | Move from observing AI to actively building with it — no coding required. |
| Earn a certificate | Completion · NeuralVarsity | Get an official certificate of completion to showcase on your profile and CV. |
| Free career counselling | 1:1 guidance | Get personalized career guidance from our team after the masterclass — completely free. |

Each row:
- `2xl` rounded, hairline border, gradient `white/[0.02] → transparent`
- Title in display, description in `ink-muted`
- Right side: meta in mono + a `36 × 36px` round button with `ArrowUpRight` icon
- **Hover:** border to `white/[0.14]`, background to `white/[0.04]`, the arrow button shifts `+2px` right, lightens, the row gets a subtle lift feel
- Staggered entrance, `0.08s` per item

### Included for every registered learner (right bottom)

Header: `INCLUDED FOR EVERY REGISTERED LEARNER`

A 2-column grid of editorial cards:

| Label | Title |
| ----- | ----- |
| CERTIFICATE | An official certificate of completion from NeuralVarsity. |
| CAREER COUNSELLING | Free 1:1 career guidance after the masterclass ends. |
| BEGINNER-FRIENDLY | No coding required. Every session is built for absolute beginners. |
| LIVE & INTERACTIVE | Live sessions with Q&A, builds and real-time problem solving. |

Each card: rounded `2xl`, hairline border, `white/[0.02]` bg, accent label in tracked uppercase, title in white display.

---

## 12. Section 08 — Testimonials

File: `components/sections/testimonials.tsx`

### Layout

A **bento-style asymmetric grid** — varying card sizes (wide, tall, short) creating editorial rhythm.

### Text content

**Section index/label:** `08 / VOICES`

**Eyebrow (accent):** `VOICES FROM LEARNERS`

**Headline:**
- Line 1: `What beginners say`
- Line 2 (italic gradient): `after the masterclass.`

### Six testimonials (beginner voices)

| Initials | Name | Role | Card weight | Quote |
| -------- | ---- | ---- | ----------- | ----- |
| `AS` | Aanya Sharma | Student · 3rd Year | wide | I had zero coding background. By Day 2 I had built my own AI chatbot and a WhatsApp automation that actually worked. This masterclass made AI feel possible. |
| `RV` | Rahul Verma | Working Professional | tall | The teaching is calm, clear and beginner-friendly. No jargon, no gatekeeping — just real builds I could reuse the same week at work. |
| `SI` | Sneha Iyer | Career Switcher | short | Finally an AI masterclass that respects beginners. |
| `MF` | Mohammed Faraz | Freelancer · Designer | wide | I'm a freelancer, not a coder. After 3 days I was offering AI chatbot and automation services to my own clients. The ROI on a free class is unreal. |
| `IR` | Ishita Rao | Non-coder · Marketer | short | Beginner-friendly, but never dumbed down. Loved it. |
| `KS` | Kabir Singh | Final Year · Engineering | tall | The career counselling at the end gave me a clear roadmap I didn't have before. I finally know what to learn next and where AI can take me. |

`wide` = `md:col-span-2`, `tall` = `md:row-span-2`, `short` = default.

### Card structure & effects

- Rounded `2xl`, hairline border, gradient `white/[0.025] → transparent`
- A subtle quote glyph in the top-left (`text-white/20`)
- Quote in display, `18–20px`, leading `1.45`
- Footer: a `40 × 40px` initials avatar (gradient ring `white/15 → white/5`, white text), then name + role in uppercase tracked
- **Hover:**
  - Border raises to `white/[0.14]`, background to `white/[0.04]`
  - A `128 × 128px` accent blur orb (`bg-accent/[0.08]`) fades in at top-right over `700ms`

---

## 13. Section 09 — Registration

File: `components/sections/registration.tsx`

### Layout

5 cols left (intro + benefits + masterclass meta card) + 7 cols right (the multi-step form panel).

### Atmospheric backdrop

- Top accent glow (`60vh`, `radial-gradient(ellipse at top, rgba(77,163,255,0.08), transparent 55%)`)
- Soft grid (`mask-radial`, `opacity: 0.2`)

### Left column

**Eyebrow (accent):** `FREE REGISTRATION · 29–31 MAY 2026`

**Headline:**
- Line 1: `Reserve your free seat`
- Line 2 (italic gradient): `in the masterclass.`

**Supporting copy:**
> Seats are limited and assigned on a first-come, first-served basis. Once registered, you'll receive your joining link, schedule and reminders on WhatsApp and email.

**Benefit checklist** (with accent check icons in `accent/[0.12]` chips):
- `3 days of live, beginner-friendly AI training`
- `Build real AI chatbots, automations & agents`
- `Free certificate of completion`
- `Free 1:1 career counselling after the masterclass`

**Free masterclass card** (bottom of left col):
- Label: `FREE MASTERCLASS`
- Date: `29–31 May 2026`
- Sub: `3 evenings · Live online`
- 3-cell meta row (hairline border-top):
  - `3 Days` / LIVE
  - `Free` / COST
  - `Online` / FORMAT

### Right column — the form

A premium rounded `3xl` panel with:
- `border-white/[0.08]`, gradient `white/[0.04] → transparent`, `backdrop-blur-sm`
- Top-right blur orb (`224 × 224`, `bg-accent/[0.08]`, `blur-3xl`)
- Fine grid `mask-radial` behind

#### Progress indicator

`STEP 0X / 02` label + two hairline segments. Each filled segment transitions to `bg-accent` over `500ms`.

#### Step 01 — "Tell us about you."

Floating-label inputs:
- `Full name` (autocomplete: name)
- `Email address` (autocomplete: email, type email, inputMode email)
- `Phone number` (autocomplete: tel, type tel, inputMode tel)
- `City` (autocomplete: address-level2)

**Floating label behavior:**
- Default: label sits centered at `15px`, in `ink-muted`
- On focus or when filled: label slides to `top-2`, shrinks to `11px`, uppercase, tracked `0.18em`
- Input border `white/[0.08] → white/25` on focus, background `white/[0.02] → white/[0.04]`
- 300ms easings throughout

#### Step 02 — "A bit more about you."

Sub-label: `CURRENT ROLE`

Four large selectable role cards in a 2 × 2 grid:

| Label | Sub |
| ----- | --- |
| Student | School, college or university |
| Working Professional | Currently employed full-time |
| Career Switcher | Moving into AI or tech |
| Freelancer | Designer, marketer, creator |

Selected state: `border-white/25`, `bg-white/[0.06]`. Hover (unselected): `border-white/15`.

Sub-label: `STAY IN THE LOOP`

Two custom checkbox rows (defaults: both checked):

| Label | Description |
| ----- | ----------- |
| WhatsApp updates | Joining links, reminders and updates on WhatsApp. |
| Email updates | Schedule, recordings (if any) and event updates by email. |

Each checkbox row:
- Rounded `xl`, hairline border, `bg-white/[0.02]`
- Checked: `border-white/25`, `bg-white/[0.05]`, an `accent/[0.18]` checkbox with the `Check` icon

#### Step navigation

Bottom row, hairline border above:
- `← Back` (disabled & ink-dim on step 1)
- `Continue →` or `Secure my free seat →` (primary white pill, magnetic 0.2 strength, with `ArrowRight` icon)

Step transitions use `AnimatePresence mode="wait"`:
- Out: `opacity → 0, y → -8`
- In: `opacity 0 → 1, y: 12 → 0`, `500ms cubic-bezier(0.16, 1, 0.3, 1)`

#### Success state

After submit, the form panel cross-fades to:

- A `64 × 64px` accent check circle (`accent/[0.12]` fill, `accent/30` border)
- Heading (display 3xl): `You're registered successfully.`
- Sub-copy (uses the entered first name):
  > Thanks, **{firstName}**. You'll receive masterclass updates and joining details on WhatsApp and email.
- A pseudo seat ID chip: `SEAT ID · NV-MC-XXXX` (random 4-digit between 1000–9999)

Enters with `opacity → 1, scale: 0.98 → 1`, `0.6s` ease.

---

## 14. Section 10 — FAQ

File: `components/sections/faq.tsx`

### Layout

4 cols left (intro + email link) + 8 cols right (the accordion).

### Text content

**Section index/label:** `09 / FAQ`

**Eyebrow (accent):** `FREQUENTLY ASKED`

**Headline:**
- Line 1: `Answers,`
- Line 2 (italic gradient): `up front.`

**Supporting copy:**
> Still curious? Drop us a message — we read and reply to every one.

**Email link:** `hello@neuralvarsity.com` (underline with `decoration-white/30`, hover to full white).

### Eight FAQ entries (beginner-focused)

| Q | A |
| - | - |
| Is this masterclass beginner friendly? | Yes — 100%. The entire masterclass is built for absolute beginners. Whether you're a student, a non-coder, a working professional or a career switcher, every session is designed so you can follow along and build alongside the mentor. |
| Do I need any coding experience? | No. You don't need to know Python, JavaScript or any programming language. We use modern drag-and-drop AI tools, no-code builders and AI platforms so you can build real chatbots, automations and agents without writing a single line of code. |
| Is the masterclass really free? | Yes — the full 3-day masterclass is completely free. There are no hidden charges, no payment information required, and no surprise fees. Just register, show up live and build with us. |
| Will I get a certificate? | Yes. Every learner who attends and completes the 3-day masterclass receives an official certificate of completion from NeuralVarsity that you can add to your CV, LinkedIn and portfolio. |
| Will recordings be provided? | Recordings are provided only to students enrolled in our professional programs. Recordings are not available for the free masterclass. |
| What tools will we use? | Learn modern AI tools like OpenAI, Gemini, Groq, Ollama, Dify, Flowise, LangChain, Cursor, Lovable, Google Colab and HuggingFace while building real AI chatbots, automations and workflows live — step by step, beginner friendly. |
| Can students and non-coders join? | Absolutely. Students, freelancers, marketers, designers, working professionals and complete beginners are all welcome. This masterclass is designed to feel approachable for anyone — no technical background required. |
| Will I get career guidance? | Yes — every registered learner gets free 1:1 career counselling after the masterclass. We'll help you understand AI career paths, what to learn next and how to position yourself for modern AI roles and opportunities. |

### Item structure & effects

Each row:
- Hairline border-bottom
- Left: index (`01–08`) in mono `11px` tracked `0.22em`, then question in display `19–20px`
- Right: a `28 × 28px` rounded toggle button — `Plus` icon when collapsed, `Minus` when open
- **Hover (row):** very subtle `bg-white/[0.01]`
- **Hover (toggle):** border to `white/15`, bg to `white/[0.05]`, text to white

#### Expand animation

`AnimatePresence` with:
- `height: 0 → auto`
- `opacity: 0 → 1`
- `0.4s cubic-bezier(0.16, 1, 0.3, 1)`

Only one item can be open at a time. Default open: item 1.

---

## 15. Section 11 — Feedback & Questions

File: `components/sections/feedback.tsx`

### Layout

5 cols left (intro + contact info cards) + 7 cols right (glassmorphism form panel).

### Atmospheric backdrop

- Centered top radial glow: `55vh × 80vw`, `radial-gradient(ellipse at top, rgba(77,163,255,0.10), transparent 60%)`
- Fine grid, `mask-radial`, `opacity 0.25`

### Left column

**Eyebrow (accent):** `FEEDBACK & QUESTIONS`

**Headline:**
- Line 1: `Have a question?`
- Line 2 (italic gradient): `We'd love to hear it.`

**Supporting copy:**
> Have questions about the masterclass? Share your feedback or ask us anything — we read and respond to every message.

### Contact info cards (2 × 2)

| Label | Value |
| ----- | ----- |
| EMAIL | hello@neuralvarsity.com |
| WHATSAPP | +91 · Coming soon |
| INSTAGRAM | @neuralvarsity |
| REPLY TIME | Within 24 hours |

Each card: rounded `2xl`, hairline border, `bg-white/[0.02]`, padding `16px`, accent uppercase label + white value.

### Right column — glassmorphism form

A premium rounded `3xl` panel with stronger glass treatment than the registration panel:
- `border-white/[0.08]`, gradient `white/[0.04] → transparent`, `backdrop-blur-xl`
- Two accent blur orbs: top-right (`224 × 224`, `accent/[0.10]`, `blur-3xl`) and bottom-left (`224 × 224`, `accent/[0.06]`, `blur-3xl`)
- Fine grid `mask-radial` behind

#### Header row

- Left: `SEND US A MESSAGE` (uppercase, tracked, `ink-muted`)
- Right (sm+): `WE READ EVERY REPLY` chip

#### Fields

- `Name` (autocomplete: name) and `Email` (type email, autocomplete: email) in a 2-column row on sm+
- `Message` — multiline textarea, 6 rows, label floats up the same way regular inputs do, `pt-7 pb-3 leading-[1.55]`, `resize-none`

All fields use the same `FloatingField` component — floating label slides to a small uppercase chip in the top-left when focused or filled.

#### Submit row (hairline border above)

- Left: `We typically reply within 24 hours.` (12px ink-muted)
- Right: `Send Feedback` (primary white pill, magnetic 0.2, with `ArrowRight` icon)

#### Success state

After submit, the form panel cross-fades to:

- A `56 × 56px` accent check circle
- Heading (display 2xl–3xl): `Message received.`
- Sub-copy: `Thanks, {firstName}. We'll get back to you on {email} within 24 hours.`

Enters with `opacity → 1, scale: 0.98 → 1`, `0.6s` ease.

---

## 16. Section 12 — Final CTA

File: `components/sections/final-cta.tsx`

### Atmosphere

This section reprises the Hero's neural network at lower density (`50` nodes), at `opacity: 0.5`, masked radial. It's a quiet echo to bookend the page.

Additional overlays:
- Top accent glow `60vh`, `rgba(77,163,255,0.12) → transparent 55%`
- Bottom fade `transparent → #0B0B0F/40 → #0B0B0F` so the section gracefully merges into the footer

### Text content

**Cohort chip** (rounded-full, hairline border, backdrop-blur):
- Pulsing accent dot
- `FREE MASTERCLASS · 29–31 MAY 2026`

**Headline** (display-xl):
- Line 1: `Start your AI journey`
- Line 2 (italic gradient): `with NeuralVarsity.`

**Sub-copy** (centered, max-w-xl, `~17px ink-muted`):
> 3 days. Live online. Free. Beginner-friendly. Build real AI chatbots, automations and agents with no coding required — and walk away with a certificate and a clear AI career roadmap.

Animates in with `y: 18 → 0, opacity 0 → 1, blur(8px) → 0`, delay `0.7s`.

**CTAs** (centered, delay `1s`):
- Primary: `Register for Free` (white pill, magnetic 0.22, scrolls to `#register`)
- Secondary: `Ask a Question` (magnetic 0.15, scrolls to `#feedback`)

**Bottom meta strip** (uppercase tracked):
`29–31 MAY 2026` · `LIVE ONLINE · FREE` · `CERTIFICATE · CAREER COUNSELLING`

---

## 17. Footer

File: `components/layout/footer.tsx`

### Layout

`bg-[#08080C]` (slightly darker than body), `border-t border-white/[0.06]`, padding `16–20`.

### Composition

5-column grid on desktop:

- **Brand column (2 cols)**
  - Wordmark (md size) — logo image + `NeuralVarsity` Poppins 800
  - Tagline:
    > NeuralVarsity — Modern AI Learning for Everyone.
  - Two chips: `FREE MASTERCLASS · OPEN` and `29–31 MAY 2026`

- **Masterclass** column
  - Register, Curriculum, Tools, Outcomes

- **Help** column
  - FAQ, Contact (→ `#feedback`), Email us (→ `mailto:hello@neuralvarsity.com`)

- **Follow** column
  - Instagram, LinkedIn, YouTube

Links: `14px ink`, hover to white.

### Bottom row (hairline)

- `© {year} NeuralVarsity. All rights reserved.`
- Right side links: `Privacy`, `Terms`, `Code of Conduct`
- Tagline: `Crafted for learners, in dark mode.`

### Massive backdrop wordmark

A single line of `NeuralVarsity` in **Poppins 800**, scaled to `clamp(4rem, 14vw, 13rem)`, color `rgba(255,255,255,0.035)` — masked with `mask-fade-x`. Acts as a quiet editorial signature.

---

## 18. Reusable UI primitives

### `Wordmark` — `components/brand/wordmark.tsx`

The brand mark. Strictly Poppins 800, solid white text. Optionally renders the `/nv-logo.png` image (default `showLogo: true`) as a `next/image` glyph beside the wordmark. Three sizes:

| Size | Text | Logo box | Logo px |
| ---- | ---- | -------- | ------- |
| `sm` | `15px` | `h-6 w-6` | 24 |
| `md` | `17px` | `h-7 w-7` | 28 |
| `lg` | `text-2xl` | `h-9 w-9` | 36 |

### `BrandLogo` — `components/brand/tool-logos.tsx`

Renders the colorful brand glyph for any of the masterclass tools. Looks up the tool by name in a `logoMap` and falls back to an accent dot if unknown.

Supported names: `OpenAI`, `Gemini`, `Groq`, `Ollama`, `Dify`, `Flowise`, `LangChain`, `Cursor`, `Lovable`, `Google Colab`, `HuggingFace`, `WhatsApp`, `WhatsApp Automation`.

### `Button` — `components/ui/button.tsx`

Three variants × three sizes:

| Variant | Default | Hover |
| ------- | ------- | ----- |
| `primary` | `bg-white text-[#0B0B0F]` | `bg-white/95`, inner highlight shadow |
| `secondary` | `bg-white/[0.04] border-white/10` | `bg-white/[0.08] border-white/15` |
| `ghost` | `text-white/80` | `text-white bg-white/[0.04]` |

Animation on every button:
- `whileHover: y: -1`
- `whileTap: y: 0, scale: 0.98`
- Spring: stiffness 400, damping 28
- Optional icon nudges `+2px` right on hover via Tailwind transition

### `Magnetic` — `components/ui/magnetic.tsx`

Tracks mouse position, applies `translate3d` via Framer's `spring` (`stiffness: 180, damping: 18, mass: 0.4`). Strength is configurable (0.15–0.25 in use).

### `Eyebrow` — `components/ui/eyebrow.tsx`

A small uppercase label with a leading hairline. Two variants: default (white/20 hairline, muted text) and accent (accent/60 hairline, accent text).

### `Section` — `components/ui/section.tsx`

Standard section frame:
- Vertical padding `28–40` (responsive)
- Optional left-edge index + label in mono `11px` tracked `0.22em`, vertical stack (desktop only)
- Constrained inner container, max-w `1280px`, padded `24–40px`

`SectionDivider` is a fading hairline `via-white/8`.

### `Reveal` / `Stagger` / `StaggerItem` — `components/ui/reveal.tsx`

IntersectionObserver-driven reveals:
- **Reveal:** `opacity 0 → 1, y: 24 → 0, blur(8px) → 0`, `0.9s` cinematic ease, `once: true`
- **Stagger:** parent with `staggerChildren: 0.08`
- **StaggerItem:** matched child with `opacity 0 → 1, y: 18 → 0, blur(6px) → 0`, `0.8s`

### `SplitText` — `components/ui/split-text.tsx`

Word-by-word headline reveal. Defaults match the standard editorial pattern, all props overridable for the Hero's heavier cinematic cascade:

| Prop | Default | Notes |
| ---- | ------- | ----- |
| `delay` | `0` | Per-line start offset |
| `stagger` | `0.05` | Word-to-word delay |
| `duration` | `0.95` | Per-word transition duration |
| `ease` | `[0.16, 1, 0.3, 1]` | Cinematic ease |
| `blur` | `8` | Initial blur in px |
| `y` | `"110%"` | Initial Y offset |
| `as` | `"h2"` | Tag override |
| `once` | `true` | Replay on re-enter? |

Each word animates inside an `overflow-hidden` span: `y: y → 0`, `opacity: 0 → 1`, `filter: blur(N px) → blur(0)`.

### Icons — `components/ui/icons.tsx`

Inline SVG icons: `ArrowRight`, `ArrowUpRight`, `Plus`, `Minus`, `Check`, `Sparkle`, `Dot`. All use `stroke="currentColor"` so they inherit text color.

### `NeuralNetworkCanvas` — `components/three/neural-network-canvas.tsx`

The hero/CTA 3D scene. Detailed in [Section 01 — Hero](#5-section-01--hero). `state.mouse` and `state.viewport` are accessed inside `useFrame` (not via `useThree` at component-level) to keep the canvas HMR-safe.

---

## 19. Complete project structure

```
NV registration page 2/
├── app/
│   ├── globals.css                # Tailwind layers + tokens + utilities + Lenis css
│   ├── layout.tsx                 # Root layout, fonts, providers, masterclass metadata
│   └── page.tsx                   # Page composition (all 12 sections)
│
├── components/
│   ├── brand/
│   │   ├── wordmark.tsx           # NeuralVarsity wordmark (Poppins 800) + logo image
│   │   └── tool-logos.tsx         # Colorful SVG glyphs for the 12 masterclass tools
│   │
│   ├── layout/
│   │   ├── navigation.tsx         # Floating pill nav + mobile menu
│   │   └── footer.tsx             # Footer + massive ghost wordmark
│   │
│   ├── providers/
│   │   ├── smooth-scroll-provider.tsx   # Lenis + GSAP ScrollTrigger
│   │   └── custom-cursor.tsx            # Dot + ring with hover grow
│   │
│   ├── sections/
│   │   ├── hero.tsx                     # Section 01 — Hero (3-line cascade)
│   │   ├── trust-strip.tsx              # Section 02 — Trust strip (tools marquee + values)
│   │   ├── why-agentic.tsx              # Section 03 — Why this masterclass
│   │   ├── curriculum.tsx               # Section 04 — 3-day curriculum
│   │   ├── tech-ecosystem.tsx           # Section 05 — Tech ecosystem (12 tools + NV logo core)
│   │   ├── workflows.tsx                # Section 06 — Live workflows
│   │   ├── outcomes.tsx                 # Section 07 — Outcomes + benefits
│   │   ├── testimonials.tsx             # Section 08 — Beginner voices
│   │   ├── registration.tsx             # Section 09 — Free 2-step registration
│   │   ├── faq.tsx                      # Section 10 — 8 beginner FAQs
│   │   ├── feedback.tsx                 # Section 11 — Feedback & Questions
│   │   └── final-cta.tsx                # Section 12 — Final CTA
│   │
│   ├── three/
│   │   └── neural-network-canvas.tsx    # R3F neural network background
│   │
│   └── ui/
│       ├── button.tsx                   # Primary/secondary/ghost buttons
│       ├── eyebrow.tsx                  # Small uppercase eyebrow labels
│       ├── icons.tsx                    # Inline SVG icon set
│       ├── magnetic.tsx                 # Magnetic hover wrapper
│       ├── reveal.tsx                   # Reveal + Stagger primitives
│       ├── section.tsx                  # Section frame
│       └── split-text.tsx               # Word-by-word headline reveal
│
├── lib/
│   └── utils.ts                   # cn() — clsx + tailwind-merge
│
├── public/
│   └── nv-logo.png                # NeuralVarsity logo (navbar + orbit core)
│
├── imgs/
│   └── NV LOGO UPDATED.png        # Source logo asset
│
├── .eslintrc.json                 # ESLint config (next/core-web-vitals)
├── .gitignore                     # Standard Next.js gitignore
├── next-env.d.ts                  # Next.js TS shims
├── next.config.mjs                # Next.js config (transpilePackages: three)
├── package.json                   # Dependencies + scripts
├── postcss.config.mjs             # Tailwind + autoprefixer
├── README.md                      # Project README
├── tailwind.config.ts             # Design tokens + theme extensions
├── tsconfig.json                  # TS config (strict)
└── WEBSITE_DOCUMENTATION.md       # This file
```

### Page composition (`app/page.tsx`) order

```
<Navigation />
<Hero />
<TrustStrip />
<WhyAgentic />
<Curriculum />
<TechEcosystem />
<Workflows />
<Outcomes />
<Testimonials />
<Registration />
<FAQ />
<Feedback />
<FinalCTA />
<Footer />
```

> Note: the `Instructor` section that existed in the early design has been removed for the free masterclass version.

### Dependencies

**Runtime:**
- `next` `14.2.18`
- `react` `18.3.1`, `react-dom` `18.3.1`
- `framer-motion` `11.11.17`
- `gsap` `3.12.5`
- `lenis` `1.1.18`
- `three` `0.169.0`
- `@react-three/fiber` `8.17.10`
- `@react-three/drei` `9.114.0`
- `clsx` `2.1.1`, `tailwind-merge` `2.5.4`

**Dev:**
- `typescript` `5.6.3`
- `tailwindcss` `3.4.15`, `postcss` `8.4.49`, `autoprefixer` `10.4.20`
- `@types/node`, `@types/react`, `@types/react-dom`, `@types/three`
- `eslint` `8.57.1` + `eslint-config-next` `14.2.18`

---

## 20. Effect catalogue (cross-section reference)

### Easing curves used everywhere

| Name | Cubic-bezier | Use |
| ---- | ------------ | --- |
| Cinematic | `cubic-bezier(0.16, 1, 0.3, 1)` | All major reveals, transitions, scroll storytelling |
| Hero cascade | `cubic-bezier(0.22, 1, 0.36, 1)` | Hero 3-line cinematic cascade |
| Soft | `cubic-bezier(0.22, 1, 0.36, 1)` | Small UI hover transitions |
| Spring (180 / 18) | Framer spring | Magnetic CTAs, custom cursor lerp |
| Spring (400 / 28) | Framer spring | Button press feedback |

### Reveal animations (all blur-to-clear)

| Type | y | duration | blur | use |
| ---- | -- | -------- | ---- | --- |
| Reveal | 24 → 0 | 0.9s | 8 → 0 | Single block reveals |
| StaggerItem | 18 → 0 | 0.8s | 6 → 0 | Stagger children |
| SplitText word (default) | 110% → 0 | 0.95s | 8 → 0 | Section headline reveal |
| SplitText word (Hero) | 110% → 0 | 1.05s | 12 → 0 | Hero 3-line cascade |
| Sub-copy (hero, CTAs) | 18 → 0 | 1.0s | 8 → 0 | Long paragraphs |

### Scroll-driven effects

- **Curriculum timeline accent line** — `scaleY: 0 → 1` mapped to `useScroll` in `["start 30%", "end 70%"]`
- **Why Agentic pull-quote** — parallax `y: 60 → -60` mapped to `useScroll` in `["start end", "end start"]`
- **Tech Ecosystem outer rings** — `rotate: 0 → 60deg` mapped to section scroll
- **Lenis smooth scroll** — driving the whole document at `1.15s` duration ease

### Continuous (looping) animations

| Effect | Where | Period |
| ------ | ----- | ------ |
| Tools marquee | Trust Strip | 40s, linear, infinite |
| Inner orbit ring | Tech Ecosystem | 55s, clockwise |
| Middle orbit ring | Tech Ecosystem | 70s, counter-clockwise |
| Outer orbit ring | Tech Ecosystem | 90s, clockwise |
| NV logo core pulse | Tech Ecosystem | scale 1 → 1.05 → 1, 6s easeInOut |
| Cohort dot ping | Nav, Hero, Final CTA | Tailwind `animate-ping` |
| Workflow comet | Workflows section | `x: -100% → 1200%`, 3.6s linear, 0.4s per-edge delay |
| Hero neural drift | Hero, Final CTA | trig-based, continuous |
| Hero node sway | Hero, Final CTA | `sin(t × 0.04) × 0.05` rotation |

### Hover effects (canonical list)

| Surface | Default | Hover state |
| ------- | ------- | ----------- |
| Nav links | `text-ink-muted` | `text-white` (300ms) |
| Primary button | `bg-white` | `bg-white/95`, `y: -1px` lift, inner highlight shadow |
| Secondary button | `bg-white/[0.04] border-white/10` | `bg-white/[0.08] border-white/15`, `y: -1px` |
| Ghost button | `text-white/80` | `text-white bg-white/[0.04]` |
| Editorial cards (most sections) | `border-white/[0.06]` | `border-white/[0.12]`, accent blur orb fades in top-right |
| Outcome rows | `border-white/[0.06]` | `border-white/[0.14]`, arrow shifts `+2px` right, arrow chip lightens |
| FAQ rows | flat | `bg-white/[0.01]`, toggle button lightens |
| FAQ toggle | `border-white/[0.08]` | `border-white/15 bg-white/[0.05] text-white` |
| Tool chips (Ecosystem) | `border-white/[0.08]` | `scale-110`, accent glow `0 0 24px rgba(77,163,255,0.4)`, paired list chip lights up |
| List chips (Ecosystem) | `border-white/[0.08] text-ink` | `border-white/30 bg-white/[0.06] text-white`, paired orbit pill lights up |
| Role cards (Reg form) | `border-white/[0.08]` | `border-white/15` (only when unselected) |
| Checkbox row (Reg form) | `border-white/[0.08]` | `border-white/15` (unchecked); `border-white/25 bg-white/[0.05]` (checked) |
| Workflow picker rows | `border-white/[0.06]` | `border-white/[0.12] bg-white/[0.02]` (only when inactive) |
| Cursor (global) | `32px ring` | `56px ring`, opacity → 0.7, 300ms |
| Magnetic CTAs | static | follow cursor up to `strength × distance`, spring back |

### Atmospheric / decorative elements

| Element | Where | Details |
| ------- | ----- | ------- |
| Top radial glow | Hero, Registration, Feedback, Final CTA | `55–60vh × full-w`, `rgba(77,163,255,0.08–0.12) → transparent 55–60%` |
| Vertical fade overlay | Hero, Final CTA | `transparent → #0B0B0F/30–40 → #0B0B0F` |
| Fine grid | Hero, Ecosystem, Workflows, Registration, Feedback | `28 × 28px`, `mask-radial`, `opacity 0.2–0.5` |
| Soft grid | Registration | `64 × 64px`, `mask-radial`, `opacity 0.2–0.3` |
| Noise texture | Hero | SVG fractal noise, `opacity 0.5`, `mix-blend-overlay` |
| Card hover orb | Why Agentic, Curriculum, Workflows, Testimonials | `bg-accent/[0.06–0.08]`, `blur-3xl`, 700ms fade |
| NV core dashed halo | Tech Ecosystem | `160 × 160px` ring, `border-dashed border-white/10` |
| NV core glow + drop-shadow | Tech Ecosystem | radial blue glow behind logo + per-image `drop-shadow(0 0 24px rgba(77,163,255,0.45))` |
| Form panel blur orbs | Registration, Feedback | `224 × 224px`, `bg-accent/[0.06–0.10]`, `blur-3xl` |
| Index numerals | Curriculum (desktop) | `display-7xl`, `text-white/[0.04]`, ghost behind cards |
| Ghost wordmark | Footer | `clamp(4rem, 14vw, 13rem)`, `rgba(255,255,255,0.035)`, `mask-fade-x` |

### Responsiveness rules

- All headlines use `clamp()` for fluid scaling
- Editorial 5/7 splits collapse to single column at `< lg`
- Curriculum timeline center-line and ghost numerals hidden below `lg`
- Mobile menu replaces inline nav links at `< lg`
- Tech ecosystem orbit caps at `max-w-[640px]` so it never overruns
- All `data-cursor='hover'` and pointer-fine cursor effects no-op on touch
- Reduced-motion users get a static page with no animations

### Performance considerations

- `NeuralNetworkCanvas` is dynamically imported (`ssr: false`) so 3D never blocks first paint
- DPR clamped `[1, 1.6]` for the WebGL canvas
- 3D node count tuned at `70` (hero) and `50` (final CTA) — enough for atmosphere, light on the GPU
- All section reveals use `once: true` IntersectionObserver to avoid re-firing
- GSAP ticker drives Lenis with `lagSmoothing(0)` to avoid jitter
- Tailwind purge config scopes to `app/` and `components/`
- `nv-logo.png` is rendered through `next/image` with `priority` where it appears above the fold (navbar + orbit core)

---

**End of documentation.**
