import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { WhyAgentic } from "@/components/sections/why-agentic";
import { Curriculum } from "@/components/sections/curriculum";
import { TechEcosystem } from "@/components/sections/tech-ecosystem";
import { Workflows } from "@/components/sections/workflows";
import { Outcomes } from "@/components/sections/outcomes";
import { Testimonials } from "@/components/sections/testimonials";
import { Registration } from "@/components/sections/registration";
import { FAQ } from "@/components/sections/faq";
import { Feedback } from "@/components/sections/feedback";
import { FinalCTA } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <main className="relative">
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
    </main>
  );
}
