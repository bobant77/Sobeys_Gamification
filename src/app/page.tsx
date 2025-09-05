import BrandsSeparatorSection from "@/components/layout/brandsSeparator";
import FAQSection from "@/components/layout/faqSection";
import FooterSection from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import HeroSection from "@/components/layout/heroSection";
import HowToPlaySection from "@/components/layout/howToPlay";
import PrizesSection from "@/components/layout/priceSection";
import ScrollToTopButton from "@/components/layout/scrollToTopButton";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Sobeys',
  description: 'Your description',
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="scroll-snap-section">
        <HeroSection id="hero" />
      </div>
      <div className="scroll-snap-section">
        <HowToPlaySection id="how-to-play" />
      </div>
      <div className="scroll-snap-section">
        <PrizesSection id="pricing" />
      </div>
      <div className="scroll-snap-section">
        <BrandsSeparatorSection id="brands" />
      </div>
      <div className="scroll-snap-section">
        <FAQSection id="faq" />
      </div>
      <div className="scroll-snap-section">
        <FooterSection id="footer" />
      </div>
      <ScrollToTopButton /> 
    </div>
  );
}