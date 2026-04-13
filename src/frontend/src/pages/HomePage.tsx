import { ContactSection } from "./sections/ContactSection";
import { FaqSection } from "./sections/FaqSection";
import { HeroSection } from "./sections/HeroSection";
import { PortfolioSection } from "./sections/PortfolioSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TeamSection } from "./sections/TeamSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TeamSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
