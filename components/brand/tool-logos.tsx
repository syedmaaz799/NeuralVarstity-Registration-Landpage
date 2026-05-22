import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

function OpenAILogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973l-.001.171v5.516a.795.795 0 0 0 .392.681l5.821 3.357-2.02 1.168a.076.076 0 0 1-.071.006l-4.83-2.79a4.504 4.504 0 0 1-1.657-6.136zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071-.006l4.83 2.787a4.49 4.49 0 0 1-.676 8.105v-5.687a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.392.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
    </svg>
  );
}

function GeminiLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <defs>
        <linearGradient id="gem-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9168FF" />
          <stop offset="50%" stopColor="#5599FF" />
          <stop offset="100%" stopColor="#1E88E5" />
        </linearGradient>
      </defs>
      <path
        fill="url(#gem-grad)"
        d="M12 0c.4 5.94 5.06 10.6 11 11 -5.94.4-10.6 5.06-11 11 -.4-5.94-5.06-10.6-11-11C6.94 10.6 11.6 5.94 12 0z"
      />
    </svg>
  );
}

function GroqLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#F55036" />
      <path
        d="M8 9.5a2.5 2.5 0 0 1 2.5-2.5h3A2.5 2.5 0 0 1 16 9.5v.5h-2v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14h-2v-2h4v2.5a2.5 2.5 0 0 1-2.5 2.5h-3A2.5 2.5 0 0 1 8 14.5v-5z"
        fill="#fff"
      />
    </svg>
  );
}

function OllamaLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 2c-3 0-5 2.2-5 5v3.2C5.2 11.2 4 13 4 15.2V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3.8c0-2.2-1.2-4-3-4.8V7c0-2.8-2-5-5-5z"
        fill="#fff"
        stroke="#000"
        strokeWidth="0.8"
      />
      <circle cx="10" cy="14" r="1.2" fill="#000" />
      <circle cx="14" cy="14" r="1.2" fill="#000" />
    </svg>
  );
}

function DifyLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="#1C64F2" />
      <path
        d="M8 8h4.5a3.5 3.5 0 0 1 0 7H10v-2h2.5a1.5 1.5 0 1 0 0-3H10v6H8V8z"
        fill="#fff"
      />
    </svg>
  );
}

function FlowiseLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <defs>
        <linearGradient id="flow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6FE9FF" />
          <stop offset="100%" stopColor="#0083FF" />
        </linearGradient>
      </defs>
      <circle cx="6" cy="12" r="2.5" fill="url(#flow-grad)" />
      <circle cx="18" cy="6" r="2.5" fill="url(#flow-grad)" />
      <circle cx="18" cy="18" r="2.5" fill="url(#flow-grad)" />
      <path
        d="M8.2 11l7.8-4.5M8.2 13l7.8 4.5"
        stroke="url(#flow-grad)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LangChainLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M9.5 7.5h-2a3 3 0 0 0 0 6h2v-1.6h-2a1.4 1.4 0 0 1 0-2.8h2V7.5zM14.5 16.5h2a3 3 0 0 0 0-6h-2v1.6h2a1.4 1.4 0 0 1 0 2.8h-2v1.6z"
        fill="#1AB29C"
      />
      <rect x="10" y="11.2" width="4" height="1.6" fill="#1AB29C" />
    </svg>
  );
}

function CursorLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <defs>
        <linearGradient id="cur-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="100%" stopColor="#9aa0a6" />
        </linearGradient>
      </defs>
      <path
        d="M5 4l14 8-6 1-2 6L5 4z"
        fill="url(#cur-grad)"
        stroke="#000"
        strokeWidth="0.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LovableLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 20.5s-7-4.5-7-10A4.5 4.5 0 0 1 12 7.2 4.5 4.5 0 0 1 19 10.5c0 5.5-7 10-7 10z"
        fill="#FF5A8A"
      />
    </svg>
  );
}

function ColabLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M8.5 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 1 0 0-9z"
        fill="#F9AB00"
      />
      <path
        d="M15.5 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 1 0 0-9z"
        fill="#F9AB00"
        opacity="0.85"
      />
      <circle cx="8.5" cy="12" r="2" fill="#0B0B0F" />
      <circle cx="15.5" cy="12" r="2" fill="#0B0B0F" />
    </svg>
  );
}

function HuggingFaceLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" fill="#FFD21E" />
      <circle cx="9" cy="11" r="1.3" fill="#1f1f1f" />
      <circle cx="15" cy="11" r="1.3" fill="#1f1f1f" />
      <path
        d="M7.5 14.5c1.2 1.8 3 2.7 4.5 2.7s3.3-.9 4.5-2.7"
        stroke="#1f1f1f"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function ClaudeLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" fill="#D97757" />
      <g stroke="#fff" strokeWidth="1.6" strokeLinecap="round">
        <line x1="12" y1="6.5" x2="12" y2="17.5" />
        <line x1="6.5" y1="12" x2="17.5" y2="12" />
        <line x1="8" y1="8" x2="16" y2="16" />
        <line x1="16" y1="8" x2="8" y2="16" />
      </g>
      <circle cx="12" cy="12" r="2.2" fill="#D97757" stroke="#fff" strokeWidth="0.8" />
    </svg>
  );
}

function N8nLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="#0B0B0F" />
      <line x1="6.5" y1="12" x2="17.5" y2="12" stroke="#EA4B71" strokeWidth="1.4" />
      <circle cx="6.5" cy="12" r="1.9" fill="#EA4B71" />
      <circle cx="12" cy="12" r="1.9" fill="#EA4B71" />
      <circle cx="17.5" cy="12" r="1.9" fill="#EA4B71" />
      <circle cx="12" cy="7.5" r="1.4" fill="#EA4B71" />
      <circle cx="12" cy="16.5" r="1.4" fill="#EA4B71" />
      <line x1="12" y1="8.9" x2="12" y2="10.1" stroke="#EA4B71" strokeWidth="1" />
      <line x1="12" y1="13.9" x2="12" y2="15.1" stroke="#EA4B71" strokeWidth="1" />
    </svg>
  );
}

function CrewAILogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="#FF6B35" />
      <circle cx="12" cy="7.5" r="1.7" fill="#fff" />
      <circle cx="7.5" cy="15" r="1.7" fill="#fff" />
      <circle cx="16.5" cy="15" r="1.7" fill="#fff" />
      <path
        d="M11 8.8l-2.8 4.7M13 8.8l2.8 4.7M9.2 15h5.6"
        stroke="#fff"
        strokeWidth="1.1"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function BoltLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="#0B0B0F" />
      <path
        d="M13.4 4.5L6.5 14h3.6l-1 5.5L15.5 10h-3.6l1.5-5.5z"
        fill="#fff"
      />
    </svg>
  );
}

function V0Logo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="#000" />
      <path
        d="M6.5 8.5l2.5 6.5 2.5-6.5"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <ellipse cx="16" cy="12" rx="2.1" ry="3.1" stroke="#fff" strokeWidth="1.6" fill="none" />
    </svg>
  );
}

function MakeLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <defs>
        <linearGradient id="make-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C66DF6" />
          <stop offset="100%" stopColor="#6D28D9" />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="url(#make-grad)" />
      <path
        d="M6.5 16.5V7.5h2L12 13l3.5-5.5h2v9h-1.8v-5.6L12 16l-3.7-5.1v5.6H6.5z"
        fill="#fff"
      />
    </svg>
  );
}

function WhatsAppLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M3 21l1.6-5.3A8.5 8.5 0 1 1 8.4 19L3 21z"
        fill="#25D366"
      />
      <path
        d="M9.4 8.3c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.5 0 1.4 1 2.8 1.2 3 .1.2 2 3.1 4.9 4.3 2.4 1 2.9.8 3.4.8.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.2-.6.2-.2.3-.6.9-.8 1.1-.1.1-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.3-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5z"
        fill="#fff"
      />
    </svg>
  );
}

const logoMap: Record<string, (p: LogoProps) => JSX.Element> = {
  OpenAI: OpenAILogo,
  Gemini: GeminiLogo,
  Groq: GroqLogo,
  Claude: ClaudeLogo,
  Ollama: OllamaLogo,
  HuggingFace: HuggingFaceLogo,
  Dify: DifyLogo,
  Flowise: FlowiseLogo,
  LangChain: LangChainLogo,
  n8n: N8nLogo,
  CrewAI: CrewAILogo,
  Cursor: CursorLogo,
  Lovable: LovableLogo,
  "Bolt.new": BoltLogo,
  v0: V0Logo,
  "Google Colab": ColabLogo,
  WhatsApp: WhatsAppLogo,
  "WhatsApp Automation": WhatsAppLogo,
  Make: MakeLogo,
};

export function BrandLogo({ name, className }: { name: string; className?: string }) {
  const Component = logoMap[name];
  if (!Component) {
    return (
      <span
        className={cn(
          "inline-block h-3 w-3 rounded-full bg-accent/80",
          className
        )}
        aria-hidden
      />
    );
  }
  return <Component className={className} />;
}

export const supportedBrandLogos = Object.keys(logoMap);
