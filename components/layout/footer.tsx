import { Wordmark } from "@/components/brand/wordmark";

const cols = [
  {
    title: "Masterclass",
    links: [
      { l: "Register", h: "#register" },
      { l: "Curriculum", h: "#curriculum" },
      { l: "Tools", h: "#ecosystem" },
      { l: "Outcomes", h: "#outcomes" },
    ],
  },
  {
    title: "Help",
    links: [
      { l: "FAQ", h: "#faq" },
      { l: "Contact", h: "#feedback" },
      { l: "Email us", h: "mailto:hello@neuralvarsity.com" },
    ],
  },
  {
    title: "Follow",
    links: [
      { l: "Instagram", h: "#" },
      { l: "LinkedIn", h: "#" },
      { l: "YouTube", h: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#08080C] py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2">
            <Wordmark size="md" />
            <p className="mt-5 max-w-xs text-[14px] leading-[1.6] text-ink-muted">
              NeuralVarsity — Modern AI Learning for Everyone.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                Free Masterclass · Open
              </span>
              <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                29–31 May 2026
              </span>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                {c.title}
              </p>
              <ul className="mt-5 space-y-3">
                {c.links.map((link) => (
                  <li key={link.l}>
                    <a
                      href={link.h}
                      className="text-[14px] text-ink transition-colors duration-300 hover:text-white"
                    >
                      {link.l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center">
          <p className="text-[12px] text-ink-muted">
            © {new Date().getFullYear()} NeuralVarsity. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-ink-muted">
            <a href="#" className="transition-colors hover:text-white">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Code of Conduct
            </a>
            <span className="hidden sm:inline">·</span>
            <span>Crafted for learners, in dark mode.</span>
          </div>
        </div>
      </div>

      {/* Massive backdrop wordmark */}
      <div className="pointer-events-none mt-16 select-none overflow-hidden">
        <p
          className="mask-fade-x text-center font-brand font-extrabold tracking-tight text-white/[0.03]"
          style={{
            fontFamily: "var(--font-poppins), sans-serif",
            fontWeight: 800,
            color: "rgba(255,255,255,0.035)",
            fontSize: "clamp(4rem, 14vw, 13rem)",
            lineHeight: 0.85,
            letterSpacing: "-0.04em",
          }}
        >
          NeuralVarsity
        </p>
      </div>
    </footer>
  );
}
