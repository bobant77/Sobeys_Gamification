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
       <HeroSection id="hero" />
       <HowToPlaySection id="how-to-play" />
       <PrizesSection id="pricing" />
       <BrandsSeparatorSection id="brands" /> 
       <FAQSection id="faq" />
       <FooterSection id="footer" />
       <ScrollToTopButton /> 
    </div>
  );
}
