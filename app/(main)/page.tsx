import CompanyLogosSection from "@/components/home/CompanyLogosSection";
import ContactUsSection from "@/components/home/ContactUsSection";
import CounterSection from "@/components/home/CounterSection";
import HappyCustomersSection from "@/components/home/HappyCustomersSection";
import HeroSectionDemo from "@/components/home/HeroSection";
import PremiumPartsSection from "@/components/home/PremiumPartsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TrustSection from "@/components/home/TrustSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <HeroSectionDemo />
      <CompanyLogosSection />
      <WhyChooseUsSection />
      <CounterSection />
      <PremiumPartsSection />
      <HappyCustomersSection />
      <TrustSection />
      <TestimonialsSection />
      <ContactUsSection />
    </>
  );
}
