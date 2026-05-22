import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, Poppins } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { CustomCursor } from "@/components/providers/custom-cursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NeuralVarsity — Free 3-Day Agentic AI Masterclass",
  description:
    "A free, beginner-friendly 3-day masterclass on building AI chatbots, automations and AI agents — without coding. 29–31 May 2026, live online.",
  metadataBase: new URL("https://neuralvarsity.com"),
  openGraph: {
    title: "NeuralVarsity — Free 3-Day Agentic AI Masterclass",
    description:
      "Build AI chatbots, automations and AI agents without coding. Free live 3-day masterclass · 29–31 May 2026.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${poppins.variable}`}
    >
      <body className="font-sans antialiased">
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
