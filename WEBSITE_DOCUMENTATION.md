# NeuralVarsity — Website Documentation

A complete reference for every text content, visual detail, interaction, effect, animation, and the full project structure of the **NeuralVarsity — Agentic AI Career Masterclass** landing page.

---

## Table of contents

1. [Design tokens & system](#1-design-tokens--system)
2. [Typography system](#2-typography-system)
3. [Global effects & providers](#3-global-effects--providers)
4. [Navigation (header)](#4-navigation-header)
5. [Section 01 — Hero](#5-section-01--hero)
6. [Section 02 — Trust Strip](#6-section-02--trust-strip)
7. [Section 03 — Why Agentic AI Matters](#7-section-03--why-agentic-ai-matters)
8. [Section 04 — Curriculum Journey](#8-section-04--curriculum-journey)
9. [Section 05 — Tech Ecosystem](#9-section-05--tech-ecosystem)
10. [Section 06 — Real Workflows](#10-section-06--real-workflows)
11. [Section 07 — Outcomes](#11-section-07--outcomes)
12. [Section 08 — Instructor Authority](#12-section-08--instructor-authority)
13. [Section 09 — Testimonials](#13-section-09--testimonials)
14. [Section 10 — Registration](#14-section-10--registration)
15. [Section 11 — FAQ](#15-section-11--faq)
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

### Headline pattern

Every section headline uses a **two-line pattern**:

1. First line — solid white, normal weight (`SplitText` with word-by-word reveal)
2. Second line — italic, `text-gradient-soft` (white → near-white), 0.2s delayed reveal

This is the editorial signature of the page.

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

1. **Wordmark** — `NeuralVarsity` (small) with a white pulse dot + ring on its left
2. **Inline links** (desktop only, lg breakpoint):
   - `Curriculum`
   - `Stack`
   - `Outcomes`
   - `Instructor`
   - `FAQ`
   - Each pill rounds-full, hover `text-white`
3. **Cohort indicator** (sm and up):
   - Pulsing accent dot (`animate-ping` on `rgba(77, 163, 255, 0.6)`)
   - Label: `COHORT 04 · OPEN` (uppercase, tracked `0.18em`)
4. **CTA button** — `Apply for Cohort` (primary white pill, magnetic strength `0.2`)
5. **Mobile menu toggle** (lg and below):
   - `36px × 36px` square button, two horizontal bars that morph into an X with `300ms` transitions

### Mobile menu

A full-width sheet appears below the nav:

- Entrance: `opacity: 0 → 1`, `y: -8 → 0`, `350ms cubic-bezier(0.16, 1, 0.3, 1)`
- Backdrop-blur, `#0B0B0F/95`
- Same links + full-width CTA at bottom
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
- DPR clamped `[1, 1.6]` for perf; `dpr: 2` would be heavy

The 3D layer sits behind a vignette mask (`mask-radial`) at `opacity: 0.8` so it stays atmospheric, never dominant.

### Overlays on top of 3D

- Vertical fade — `transparent → #0B0B0F/30 → #0B0B0F`
- Top radial accent glow — `rgba(77, 163, 255, 0.10) → transparent at 55%`
- Fine grid — `mask-radial`, `opacity: 0.5`
- Noise texture — SVG fractal-noise data URI, `opacity: 0.5`, `mix-blend-overlay`

### Text content (top → bottom)

1. **Cohort meta strip** (small chips, animated in with delay `0.1`):
   - Chip 1: pulsing accent dot + `COHORT 04 · LIVE` (with `animate-ping`)
   - Separator hairline
   - `STARTS MARCH 04 · 12 WEEKS · LIVE`
   - Separator hairline (lg+)
   - `APPLICATIONS CLOSE FEB 18` (lg+)

2. **Headline (display-xl)**:
   - Line 1 (white): `Become a builder of`
   - Line 2 (italic, gradient): `agentic AI systems.`
   - Word-by-word `SplitText` reveal — `y: 110% → 0`, `opacity: 0 → 1`, `blur(8px) → blur(0)`, `0.95s cubic-bezier(0.16, 1, 0.3, 1)`, stagger `0.06s`

3. **Sub-copy** (max-width 640px, `text-ink-muted`, ~17–18px):
   > A live 12-week masterclass for engineers, PMs and operators. Ship multi-agent orchestration, RAG pipelines, evals and production deployments — alongside the people building AI in industry.

   Animated in with `y: 18 → 0`, `blur(8px) → blur(0)`, `1s` ease, delay `0.9s`.

4. **CTA cluster** (delay `1.1s`):
   - Primary: `Apply for Cohort 04` → scrolls to `#register`, with `ArrowRight` icon that nudges `+2px` on hover
   - Secondary: `See the curriculum` → scrolls to `#curriculum`
   - Both wrapped in `Magnetic` with strength `0.2` and `0.15`

5. **Bottom meta band** (delay `1.3s`) — `border-t border-white/[0.06]`, 4 metrics in a 2×2 / 1×4 grid:

| Metric | Label |
| ------ | ----- |
| `12` | WEEKS LIVE |
| `08` | PRODUCTION PROJECTS |
| `30+` | HIRING PARTNERS |
| `1:6` | MENTOR RATIO |

6. **Scroll cue** (desktop only, delay `1.6s`):
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

**Eyebrow:** `TRUSTED BY BUILDERS AND OPERATORS FROM`

**Marquee partners (looping, 3× duplicated):**
`OpenAI` · `Anthropic` · `Stripe` · `Linear` · `Vercel` · `Notion` · `Ramp` · `Scale`

The marquee uses an infinite `x: 0% → -50%` translation over `40s` linear, masked with `mask-fade-x` so edges fade.

**Metrics grid** (2 × 2 on mobile, 4 × 1 on desktop), inside a single rounded `2xl` panel with hairline dividers:

| Value | Label | Sub-label |
| ----- | ----- | --------- |
| `94%` | Completion rate | across all live cohorts |
| `$148K` | Median post-cohort offer | AI / ML engineering roles |
| `11.4 weeks` | Avg. time to offer | for active job seekers |
| `1,240+` | Engineers shipped | production AI in 2025 |

Each metric cell:
- Bg `#0B0B0F/60`, padding `24–28px`
- Display value uses `display` font, `tracking-tightest`
- Reveals stagger by `0.07s` left → right

### Effects

- Partner names — slight `text-white` shift on hover, no other effect
- Reveals — IntersectionObserver-triggered blur-to-clear, `y: 24 → 0`, `0.9s` ease

---

## 7. Section 03 — Why Agentic AI Matters

File: `components/sections/why-agentic.tsx`

### Layout

A 12-column editorial split:
- Left (5 cols, **sticky** at top-32 on desktop) — eyebrow, headline, supporting copy, pull-quote card
- Right (7 cols) — three stacked "shift" cards

### Text content

**Section index/label** (left, vertical): `02 / WHY NOW`

**Eyebrow (accent):** `WHY AGENTIC AI · WHY NOW`

**Headline:**
- Line 1: `The shift from software`
- Line 2 (italic gradient): `to autonomy.`

**Supporting copy:**
> Every major company is rebuilding internal workflows around agents. The next decade of careers will be defined by who can architect this layer — not who can use it.

**Market signal pull-quote** (desktop only, parallax-tracked):
> "By 2027, an estimated **40% of enterprise software** will include autonomous agents as first-class users — not features."
>
> — Industry forecast, AI infra report

The pull-quote card has a parallax `y` based on scroll progress through the section: it translates from `+60px` to `-60px` as the section scrolls past, using `useScroll + useTransform`.

**Right column — three "shift" cards:**

| # | Title | Body |
| -- | ----- | ---- |
| `01` | From copilots to autonomous agents. | AI is no longer a chat interface. It plans, decides and executes long-running work — across tools, data and humans. |
| `02` | From features to orchestration. | Companies don't need another wrapper. They need engineers who can design multi-agent systems with evals, fallbacks and observability. |
| `03` | From prompts to production. | The new operator stack is RAG, function calling, vector stores, guardrails, agent graphs and continuous deployment — not prompt hacks. |

### Card structure & effects

Each shift card:
- Rounded `2xl`, border `white/[0.06]`, padding `28–36px`
- Background: vertical gradient `white/[0.025] → transparent`
- **Hover:** border lifts to `white/[0.1]`, background to `white/[0.04]`, **and** a soft accent blur orb appears in the top-right corner (`bg-accent/[0.08]`, `blur-3xl`, `40 × 40` rem, 700ms transition)
- A hairline gradient line at the bottom: `white/[0.08] → transparent`
- Top-right index number in mono `11px` tracked `0.2em`
- Stagger reveal — each card delayed `0.1s` more than previous

---

## 8. Section 04 — Curriculum Journey

File: `components/sections/curriculum.tsx`

### Layout

A center-aligned headline, then a **vertical zig-zag timeline** with a center accent line that grows as the user scrolls.

### Text content

**Section index/label:** `03 / CURRICULUM`

**Eyebrow (accent):** `12 WEEKS · LIVE`

**Headline:**
- Line 1: `A cinematic journey`
- Line 2 (italic gradient): `from prompt to production.`

**Sub-copy:**
> Each module is a build. Each build is reviewed. By Week 12 you have a production-grade agentic system — and the muscle to ship the next one.

### Six modules (zig-zag)

| Week | Phase | Title | Body | Bullets |
| ---- | ----- | ----- | ---- | ------- |
| Week 01–02 | Foundations | The agentic mindset | Reasoning, planning, memory, tools. Why agents differ from chat. We rebuild the mental model from first principles — and what production architecture actually looks like. | LLM systems thinking · Reasoning vs retrieval · Tool-use design · Eval-first development |
| Week 03–04 | Retrieval & memory | Production RAG, vector stores and hybrid retrieval | Build retrieval pipelines that survive real data. Chunking strategies, hybrid search, re-ranking, evals — plus the failure modes nobody tells you about. | Hybrid retrieval (BM25 + dense) · Reranking & MMR · Vector store ops · Retrieval evals |
| Week 05–06 | Agent orchestration | Multi-agent systems with LangGraph & AutoGen | Design agent graphs, supervisor patterns, tool routers and human-in-the-loop. We architect real workflows used in production by AI-first teams. | LangGraph state machines · Supervisor & ReAct loops · Tool routing & fallbacks · HITL & approvals |
| Week 07–08 | Operations & evals | Evals, observability and guardrails | If you can't evaluate it, you can't ship it. Build eval harnesses, online metrics, regression suites, tracing — and design guardrails that hold under load. | Eval harnesses · Tracing & telemetry · Guardrails & policy · Cost & latency tuning |
| Week 09–10 | Deployment | Shipping agents to production | FastAPI services, Docker, AWS, vector infra, queue patterns, async workers — go from notebook to a system real users can depend on. | FastAPI & queues · Docker & AWS deploys · Vector infra at scale · CI/CD for AI systems |
| Week 11–12 | Capstone | Ship a real agentic product | You'll build, evaluate and demo a production agentic system to a panel of operators from leading AI teams. Portfolio. Hiring intros. Demo Day. | Project shipped publicly · Eval-backed performance · Operator demo panel · Hiring intros |

### Timeline effects

- A central vertical line at `left-1/2` (desktop only), `white/[0.06]`, with an accent-colored gradient overlay scaled by scroll progress (`useScroll` → `scaleY: 0 → 1`)
- Each module card is on alternating sides (odd → left, even → right)
- Between each card row, on desktop only:
  - A small `12px` dot with white ring + accent inner fill at the timeline level
  - A massive ghost number (`01–06`) at `text-7xl` in `white/[0.04]` (acts as editorial backdrop)

### Card structure & effects

Each module card:
- Rounded `2xl`, `border-white/[0.06]`
- Gradient `white/[0.025] → transparent`
- **Hover:** border to `white/[0.12]`, top-right accent orb (`bg-accent/[0.06]`, `blur-3xl`) fades in over `700ms`
- Top row: week in mono `11px` (left) + phase chip (right) — phase chip is rounded-full, hairline border, `bg-white/[0.03]`
- Title in display, `text-2xl → 28px`
- Bullets as 2-column list, each with a `1×1 px` accent dot
- IntersectionObserver reveal, blur-to-clear

---

## 9. Section 05 — Tech Ecosystem

File: `components/sections/tech-ecosystem.tsx`

### Layout

7-column orbit visualization (left) + 5-column categorized list (right) on desktop. Stacks vertically on mobile.

### Text content

**Section index/label:** `04 / TECH STACK`

**Eyebrow (accent):** `THE OPERATING STACK`

**Headline:**
- Line 1: `The full agentic AI`
- Line 2 (italic gradient): `engineering stack.`

**Sub-copy:**
> Not a logo wall. A constellation of the tools you'll learn, ship and operate — woven into a single coherent stack.

### The 16 tools, by category

| Category | Tools |
| -------- | ----- |
| Languages | `Python`, `SQL` |
| Models & Frameworks | `TensorFlow`, `PyTorch`, `OpenAI`, `HuggingFace` |
| Agent Orchestration | `LangChain`, `LangGraph`, `AutoGen`, `Dify`, `Flowise` |
| Infra & Deploy | `FastAPI`, `Docker`, `AWS` |
| Data | `Power BI` |
| Interfaces | `Streamlit` |

### Orbit visualization (left)

- An aspect-square container, max `640px`
- **Three concentric rings** (sizes `42%`, `62%`, `86%`) — `border-white/[0.06]`
- Fine grid behind, `mask-radial` to taper
- A `radial-gradient` accent glow at center (`288 × 288px`, `rgba(77,163,255,0.15) → transparent`)

**Center core:**
- A `96 × 96px` circle, `border-white/15`, `bg-[#0B0B0F]/90`, `backdrop-blur`
- Shadow `0 0 40px rgba(77, 163, 255, 0.25)`
- Text: `NV` (Poppins 800) + `CORE` (uppercase, 8px tracked `0.22em`)
- Gently scales `1 → 1.04 → 1` over `6s` easeInOut, infinite

**Three orbiting rings of tool pills:**

| Ring | Radius | Tools | Direction | Period |
| ---- | ------ | ----- | --------- | ------ |
| Inner | 21% | Languages + Models | clockwise | 55s |
| Middle | 31% | Orchestration | counter-clockwise | 70s |
| Outer | 43% | Infra + Data + Interfaces | clockwise | 90s |

Each tool pill counter-rotates at its parent's speed so it stays upright.

**Tool pill design:**
- Rounded-full, `border-white/[0.08]`, `bg-[#0B0B0F]/90`, `backdrop-blur`
- Tiny accent dot inside
- Default shadow: `0 4px 16px -8px rgba(0,0,0,0.5)`

**Two outermost dashed rings** rotate slightly with scroll progress (0 → 60°) — these are masked with `mask-radial` for a fade.

### Right column — categorized list

For each category:
- A label in uppercase tracked `0.18em`, separated by hairline borders
- Tools rendered as `inline-flex` chips, rounded-full, with accent dots
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

## 10. Section 06 — Real Workflows

File: `components/sections/workflows.tsx`

### Layout

5-column left (intro + workflow picker) + 7-column right (live preview panel).

### Text content

**Section index/label:** `05 / WORKFLOWS`

**Eyebrow (accent):** `REAL WORKFLOWS`

**Headline:**
- Line 1: `What you'll`
- Line 2 (italic gradient): `actually build.`

**Sub-copy:**
> Every project is a working agentic system — designed, evaluated and deployed. These are the patterns we build, ship and tune in cohort.

### Three workflows

#### Workflow 1 — Autonomous research agent
- Subtitle: `Long-running, multi-source synthesis`
- Description:
  > A supervisor coordinates a planner, retriever and writer. The agent searches, verifies, summarizes — and produces a structured report with citations.
- Nodes: `Query (User)` → `Planner (LLM)` → `Retriever (RAG)` → `Verifier (Eval)` → `Writer (LLM)` → `Report (PDF / JSON)`

#### Workflow 2 — Internal operations copilot
- Subtitle: `Routing, approvals and tool calls`
- Description:
  > A router-agent triages internal requests, calls company tools, escalates to humans when needed and records every step for audit and evals.
- Nodes: `Slack / Email (Trigger)` → `Router agent (Supervisor)` → `CRM Tool (API)` & `Human review (HITL)` → `Action (Resolved)`

#### Workflow 3 — Production deployment pipeline
- Subtitle: `From notebook to live system`
- Description:
  > An eval-gated pipeline: every prompt and graph change is unit-tested, regressed against a golden set, deployed via FastAPI, observed in production.
- Nodes: `Agent code (Repo)` → `Eval suite (Golden)` → `CI / CD (Docker)` → `FastAPI (Service)` → `Tracing (Telemetry)`

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

Each pill has a `1.5px` dot, the node label, and a tiny uppercase tag chip (e.g. `LLM`, `RAG`, `HITL`).

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

5 cols left (intro + metrics grid) + 7 cols right (career paths + portfolio cards).

### Text content

**Section index/label:** `06 / OUTCOMES`

**Eyebrow (accent):** `OUTCOMES`

**Headline:**
- Line 1: `A career inflection,`
- Line 2 (italic gradient): `not a certificate.`

**Supporting copy:**
> We don't measure ourselves by lectures watched. We measure ourselves by what you ship, who hires you, and what you can build six months after graduation.

### Left metric grid (2 × 2, hairlines)

| Value | Label |
| ----- | ----- |
| `$148K` | MEDIAN OFFER |
| `94%` | COMPLETION |
| `11.4w` | TIME TO OFFER |
| `30+` | HIRING PARTNERS |

### Career paths (right top)

Header: `CAREER PATHS OUR STUDENTS TAKE`

| Title | Range | Description |
| ----- | ----- | ----------- |
| AI / ML Engineer | `$140K – $260K` | Ship production agentic systems at AI-first companies. |
| Founding Engineer · AI | `$170K – $320K + equity` | Architect the agent layer at seed and Series A startups. |
| Applied AI · PM | `$160K – $240K` | Lead agent product surface area at scale. |
| AI Solutions Architect | `$180K – $280K` | Design enterprise agentic workflows for Fortune 500 teams. |

Each row:
- `2xl` rounded, hairline border, gradient `white/[0.02] → transparent`
- Title in display, description in `ink-muted`
- Right side: salary range in mono + a `36 × 36px` round button with `ArrowUpRight` icon
- **Hover:** border to `white/[0.14]`, background to `white/[0.04]`, the arrow button shifts `+2px` right, lightens, the row gets a subtle lift feel
- Staggered entrance, `0.08s` per item

### What you walk away with (right bottom)

Header: `WHAT YOU WALK AWAY WITH`

A 2-column grid of editorial cards:

| Label | Title |
| ----- | ----- |
| PRODUCTION CAPSTONE | A real agentic system you can demo on Day 1. |
| EVAL-BACKED METRICS | Quantified performance, not promises. |
| OPERATOR PANEL REVIEW | Reviewed by engineers from leading AI companies. |
| HIRING INTROS | Direct intros to 30+ partner teams actively hiring. |

Each card: rounded `2xl`, hairline border, `white/[0.02]` bg, accent label in tracked uppercase, title in white display.

---

## 12. Section 08 — Instructor Authority

File: `components/sections/instructor.tsx`

### Layout

5 cols left (instructor portrait + creds) + 7 cols right (3 principles + pull-quote).

### Text content

**Section index/label:** `07 / INSTRUCTOR`

**Eyebrow (accent):** `YOUR INSTRUCTOR`

**Headline:**
- Line 1: `Taught by people`
- Line 2 (italic gradient): `who ship the stack.`

### Credentials strip (3 × 1)

| Value | Label |
| ----- | ----- |
| `12+` | YEARS SHIPPING ML IN PRODUCTION |
| `3` | AI PRODUCTS FROM 0 → 1M USERS |
| `40+` | OPERATORS MENTORED TO SENIOR ROLES |

### Editorial portrait composition

A 4:5 aspect card, designed to feel like an editorial cover:

- Background:
  - `radial-gradient(circle at 30% 30%, rgba(77,163,255,0.25), transparent 55%)`
  - `radial-gradient(circle at 70% 70%, rgba(255,255,255,0.06), transparent 55%)`
  - Base `#0B0B0F`
- Soft grid overlay (`mask-radial`)
- Center: a `144 × 144px` circle with `bg-gradient-to-br from-white/15 via-white/[0.04] to-transparent` rim, inner circle solid `#0B0B0F` with initials `AK` in display
- Below: `Arjun Kapoor` (display xl), then `LEAD INSTRUCTOR · NEURALVARSITY` in tracked uppercase
- A bottom hairline strip with bio:
  > Previously: Staff AI engineer building agent platforms at scale. Shipped LLM-powered products to over a million users. Advisor to early-stage AI infra startups.

### Teaching philosophy (right column, 3 cards)

| # | Title | Body |
| -- | ----- | ---- |
| `01` | Build, then explain. | Every concept is grounded in a working system. No theoretical detours. No throwaway slides. |
| `02` | Evals over opinions. | We let measurement settle disagreements. You learn to make decisions with data, not vibes. |
| `03` | Operator-first thinking. | Real systems have latency, cost, observability, blast radius. We teach you to design for that reality. |

Each card:
- `2xl` rounded, hairline, padding `28–36px`
- A giant `display-5xl` ghost numeral (`text-white/[0.08]`) on the left
- **Hover:** numeral brightens to `white/15`, border to `white/[0.12]`, background to `white/[0.03]`

### Closing pull-quote

> "The next decade of software belongs to engineers who can design systems that *think, decide, and act.* That's the entire reason this masterclass exists."
>
> — Arjun Kapoor · Lead Instructor

The italicized phrase uses the same `text-gradient-soft` treatment as headline second-lines.

---

## 13. Section 09 — Testimonials

File: `components/sections/testimonials.tsx`

### Layout

A **bento-style asymmetric grid** — varying card sizes (wide, tall, short) creating editorial rhythm.

### Text content

**Section index/label:** `08 / VOICES`

**Eyebrow (accent):** `VOICES FROM THE COHORT`

**Headline:**
- Line 1: `What graduates`
- Line 2 (italic gradient): `say after shipping.`

### Six testimonials

| Initials | Name | Role | Card weight | Quote |
| -------- | ---- | ---- | ----------- | ----- |
| `PM` | Priya Menon | Senior AI Engineer · Atlas Labs | wide | I had been writing prompts for two years. NeuralVarsity rebuilt my mental model in three weeks. By week 12 I had shipped an internal agent that replaced a 5-person research workflow at my company. |
| `DR` | Daniel Roth | Founding Engineer · Quanta AI | tall | The curriculum is brutal in the best way. You don't just learn LangGraph — you ship something operators can use. That's the thing nobody else does. |
| `SA` | Sofia Alvarez | Head of AI · Northwind | short | Best $0-to-real-AI-job program I've seen in 10 years of hiring. |
| `KI` | Karan Iyer | ML Engineer · Helix | wide | I came in as a backend engineer. I walked out architecting multi-agent orchestration for a Series B. The eval-first thinking changed how I work forever. |
| `AC` | Ana Costa | Product Engineer · OpenLoop | short | Cinematic teaching, brutally practical. They make you build the thing they're explaining. |
| `JP` | Jordan Park | AI Solutions Architect · Brightline | tall | I tripled my comp and changed careers. That's the cleanest way I can put it. |

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

## 14. Section 10 — Registration

File: `components/sections/registration.tsx`

### Layout

5 cols left (intro + benefits + cohort meta card) + 7 cols right (the multi-step form panel).

### Atmospheric backdrop

- Top accent glow (`60vh`, `radial-gradient(ellipse at top, rgba(77,163,255,0.08), transparent 55%)`)
- Soft grid (`mask-radial`, `opacity: 0.2`)

### Left column

**Eyebrow (accent):** `ADMISSIONS · COHORT 04`

**Headline:**
- Line 1: `Apply to join`
- Line 2 (italic gradient): `the masterclass.`

**Supporting copy:**
> Cohort 04 starts March 04. We accept on a rolling basis. A short application helps us tailor the experience — and ensures the room stays world-class.

**Benefit checklist** (with accent check icons in `accent/[0.12]` chips):
- `12 weeks of live instruction & mentorship`
- `1:6 mentor ratio · weekly office hours`
- `Capstone reviewed by industry operators`
- `Hiring intros to 30+ partner teams`

**Next cohort card** (bottom of left col):
- Label: `NEXT COHORT`
- Date: `March 04`
- Sub: `Applications close Feb 18`
- 3-cell meta row (hairline border-top):
  - `12w` / LIVE
  - `Mon/Wed/Fri` / CADENCE
  - `Hybrid` / FORMAT

### Right column — the form

A premium rounded `3xl` panel with:
- `border-white/[0.08]`, gradient `white/[0.04] → transparent`, `backdrop-blur-sm`
- Top-right blur orb (`224 × 224`, `bg-accent/[0.08]`, `blur-3xl`)
- Fine grid `mask-radial` behind

#### Progress indicator

`STEP 0X / 03` label + three hairline segments. Each filled segment transitions to `bg-accent` over `500ms`.

#### Step 01 — "Tell us about you."

Floating-label inputs:
- `Full name` (autocomplete: name)
- `Work email` (autocomplete: email, type email)
- `Current role`
- `Company`

**Floating label behavior:**
- Default: label sits centered at `15px`, in `ink-muted`
- On focus or when filled: label slides to `top-2`, shrinks to `11px`, uppercase, tracked `0.18em`, in `ink-muted`
- Input border `white/[0.08] → white/25` on focus, background `white/[0.02] → white/[0.04]`
- 300ms easings throughout

#### Step 02 — "Your track."

Sub-label: `WHAT BEST DESCRIBES YOU?`

Three large selectable track cards:

| Label | Sub |
| ----- | --- |
| Engineer | Backend, full-stack, ML |
| Founder | Building an AI-native product |
| Operator | PM, designer, ops, growth |

Selected state: `border-white/25`, `bg-white/[0.06]`. Hover (unselected): `border-white/15`.

Then sub-label: `YEARS OF EXPERIENCE`

Four rounded-full chips (single-select): `0–2 years` · `2–5 years` · `5–10 years` · `10+ years`

Selected state: `border-white/25`, `bg-white/[0.06]`, white text. Unselected: muted text.

#### Step 03 — "Why this cohort?"

A `6-row` textarea with placeholder:
> A few sentences on what you want to build, ship or change in your career.

Below in `12px ink-muted`:
> We read every application personally. Expect a response within 48 hours.

#### Step navigation

Bottom row, hairline border above:
- `← Back` (disabled & ink-dim on step 1)
- `Continue →` or `Submit application →` (primary white pill, magnetic 0.2 strength, with `ArrowRight` icon)

Step transitions use `AnimatePresence mode="wait"`:
- Out: `opacity → 0, y → -8`
- In: `opacity 0 → 1, y: 12 → 0`, `500ms cubic-bezier(0.16, 1, 0.3, 1)`

#### Success state

After submit, the form panel cross-fades to:

- A `64 × 64px` accent check circle (`accent/[0.12]` fill, `accent/30` border)
- Heading (display 3xl): `Application received.`
- Sub-copy (uses the entered first name):
  > Thanks, **{firstName}**. We've got it. A member of the admissions team will respond within 48 hours.
- A pseudo application ID chip: `APPLICATION ID · NV-04-XXXX` (random 4-digit)

Enters with `opacity → 1, scale: 0.98 → 1`, `0.6s` ease.

---

## 15. Section 11 — FAQ

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
> Still curious? Reach out — we'd rather have a conversation than make you guess.

**Email link:** `admissions@neuralvarsity.com` (underline with `decoration-white/30`, hover to full white).

### Eight FAQ entries

| Q | A |
| - | - |
| Who is this masterclass for? | Engineers, PMs, founders and operators with at least working programming experience who want to architect production agentic AI systems. You should be comfortable in Python and curious about systems thinking. |
| How is it structured? | 12 weeks, fully live. Three sessions a week (Mon/Wed/Fri). Each week has a build, a review and a one-on-one. By Week 12 you will have shipped a production-grade agentic system. |
| Do I need prior ML experience? | No formal ML background required. You do need to be comfortable writing software. We teach the relevant ML and infra concepts as we build — operator-first, not academic-first. |
| What's the time commitment? | Plan for 8–12 hours per week: 3 hours of live sessions, 4–6 hours of building, plus office hours and review. Most students integrate this with full-time work. |
| Is it cohort-based or self-paced? | Strictly cohort-based and live. The compound effect of building with peers, reviewing each other's systems and having weekly accountability is the entire point. |
| What about hiring support? | We have 30+ partner companies actively hiring agentic AI engineers. We do direct intros, portfolio reviews, mock interviews and coordinate Demo Day where operators see your work. |
| What's the application bar? | We're looking for builders. Strong technical fundamentals, clear motivation, and the ability to commit fully to the cohort. We accept ~12% of applicants. |
| Is there a refund policy? | Yes — full refund within the first two weeks if it isn't the right fit. We'd rather have the right people in the room than a full one. |

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
- `COHORT 04 · NOW OPEN`

**Headline** (display-xl):
- Line 1: `Build the next era`
- Line 2 (italic gradient): `of AI. With us.`

**Sub-copy** (centered, max-w-xl, `~17px ink-muted`):
> 12 weeks. Live. Operator-led. Capstone-graded. The most serious agentic AI program for builders ready to ship.

Animates in with `y: 18 → 0, opacity 0 → 1, blur(8px) → 0`, delay `0.7s`.

**CTAs** (centered, delay `1s`):
- Primary: `Apply for Cohort 04` (white pill, magnetic 0.22)
- Secondary: `Talk to admissions` (mailto, magnetic 0.15)

**Bottom meta strip** (uppercase tracked):
`STARTS MARCH 04` · `12 WEEKS LIVE` · `APPLICATIONS CLOSE FEB 18`

---

## 17. Footer

File: `components/layout/footer.tsx`

### Layout

`bg-[#08080C]` (slightly darker than body), `border-t border-white/[0.06]`, padding `16–20`.

### Composition

5-column grid on desktop:

- **Brand column (2 cols)**
  - Wordmark (md size)
  - Body:
    > A live masterclass for the engineers and operators building the agentic AI era.
  - Two cohort chips: `COHORT 04 · OPEN` and `MAR 04 → MAY 27`

- **Program** column
  - Curriculum, Stack, Outcomes, Instructor

- **Apply** column
  - Cohort 04, FAQ, Refund policy, Talk to admissions

- **Company** column
  - About, Partners, Careers, Press

Links: `14px ink`, hover to white.

### Bottom row (hairline)

- `© {year} NeuralVarsity. All rights reserved.`
- Right side links: `Privacy`, `Terms`, `Code of Conduct`
- Tagline: `Crafted in dark mode.`

### Massive backdrop wordmark

A single line of `NeuralVarsity` in **Poppins 800**, scaled to `clamp(4rem, 14vw, 13rem)`, color `rgba(255,255,255,0.035)` — masked with `mask-fade-x`. Acts as a quiet editorial signature.

---

## 18. Reusable UI primitives

### `Wordmark` — `components/brand/wordmark.tsx`

The brand mark. Strictly Poppins 800, solid white. Has an optional small white pulse dot.

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

Word-by-word headline reveal:
- Each word rendered inside an `overflow-hidden` span
- Animates `y: 110% → 0`, `opacity: 0 → 1`, `blur(8px) → 0`
- `0.95s cubic-bezier(0.16, 1, 0.3, 1)`
- Configurable `stagger` (default `0.05s`) and `delay`
- Used for nearly every headline in the page

### Icons — `components/ui/icons.tsx`

Inline SVG icons: `ArrowRight`, `ArrowUpRight`, `Plus`, `Minus`, `Check`, `Sparkle`, `Dot`. All use `stroke="currentColor"` so they inherit text color.

### `NeuralNetworkCanvas` — `components/three/neural-network-canvas.tsx`

The hero/CTA 3D scene. Detailed in [Section 01 — Hero](#5-section-01--hero).

---

## 19. Complete project structure

```
NV registration page 2/
├── app/
│   ├── globals.css                # Tailwind layers + tokens + utilities + Lenis css
│   ├── layout.tsx                 # Root layout, fonts, providers
│   └── page.tsx                   # Page composition (all 12 sections)
│
├── components/
│   ├── brand/
│   │   └── wordmark.tsx           # NeuralVarsity wordmark (Poppins 800)
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
│   │   ├── hero.tsx                     # Section 01
│   │   ├── trust-strip.tsx              # Section 02
│   │   ├── why-agentic.tsx              # Section 03
│   │   ├── curriculum.tsx               # Section 04
│   │   ├── tech-ecosystem.tsx           # Section 05
│   │   ├── workflows.tsx                # Section 06
│   │   ├── outcomes.tsx                 # Section 07
│   │   ├── instructor.tsx               # Section 08
│   │   ├── testimonials.tsx             # Section 09
│   │   ├── registration.tsx             # Section 10
│   │   ├── faq.tsx                      # Section 11
│   │   └── final-cta.tsx                # Section 12
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
<Instructor />
<Testimonials />
<Registration />
<FAQ />
<FinalCTA />
<Footer />
```

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
| Soft | `cubic-bezier(0.22, 1, 0.36, 1)` | Small UI hover transitions |
| Spring (180 / 18) | Framer spring | Magnetic CTAs, custom cursor lerp |
| Spring (400 / 28) | Framer spring | Button press feedback |

### Reveal animations (all blur-to-clear)

| Type | y | duration | blur | use |
| ---- | -- | -------- | ---- | --- |
| Reveal | 24 → 0 | 0.9s | 8 → 0 | Single block reveals |
| StaggerItem | 18 → 0 | 0.8s | 6 → 0 | Stagger children |
| SplitText word | 110% → 0 | 0.95s | 8 → 0 | Headline reveal |
| Sub-copy (hero, CTAs) | 18 → 0 | 1.0s | 8 → 0 | Long paragraphs |

### Scroll-driven effects

- **Curriculum timeline accent line** — `scaleY: 0 → 1` mapped to `useScroll` in `["start 30%", "end 70%"]`
- **Why Agentic pull-quote** — parallax `y: 60 → -60` mapped to `useScroll` in `["start end", "end start"]`
- **Tech Ecosystem outer rings** — `rotate: 0 → 60deg` mapped to section scroll
- **Lenis smooth scroll** — driving the whole document at `1.15s` duration ease

### Continuous (looping) animations

| Effect | Where | Period |
| ------ | ----- | ------ |
| Partner marquee | Trust Strip | 40s, linear, infinite |
| Inner orbit ring | Tech Ecosystem | 55s, clockwise |
| Middle orbit ring | Tech Ecosystem | 70s, counter-clockwise |
| Outer orbit ring | Tech Ecosystem | 90s, clockwise |
| NV core pulse | Tech Ecosystem | scale 1 → 1.04 → 1, 6s easeInOut |
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
| Track cards (Reg form) | `border-white/[0.08]` | `border-white/15` (only when unselected) |
| Workflow picker rows | `border-white/[0.06]` | `border-white/[0.12] bg-white/[0.02]` (only when inactive) |
| Cursor (global) | `32px ring` | `56px ring`, opacity → 0.7, 300ms |
| Magnetic CTAs | static | follow cursor up to `strength × distance`, spring back |

### Atmospheric / decorative elements

| Element | Where | Details |
| ------- | ----- | ------- |
| Top radial glow | Hero, Registration, Final CTA | `60vh × full-w`, `rgba(77,163,255,0.08–0.12) → transparent 55%` |
| Vertical fade overlay | Hero, Final CTA | `transparent → #0B0B0F/30–40 → #0B0B0F` |
| Fine grid | Hero, Ecosystem, Workflows, Registration | `28 × 28px`, `mask-radial`, `opacity 0.2–0.5` |
| Soft grid | Instructor portrait, Registration | `64 × 64px`, `mask-radial`, `opacity 0.2–0.3` |
| Noise texture | Hero | SVG fractal noise, `opacity 0.5`, `mix-blend-overlay` |
| Card hover orb | Why Agentic, Curriculum, Workflows, Testimonials | `bg-accent/[0.06–0.08]`, `blur-3xl`, 700ms fade |
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

---

**End of documentation.**
