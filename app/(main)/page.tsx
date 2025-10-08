import CompanyLogosSection from "@/components/home/CompanyLogosSection";
import ContactUsSection from "@/components/home/ContactUsSection";
import HappyCustomersSection from "@/components/home/HappyCustomersSection";
import HeroSectionDemo from "@/components/home/HeroSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TrustSection from "@/components/home/TrustSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <HeroSectionDemo />
      <CompanyLogosSection />
      <WhyChooseUsSection />
      <HappyCustomersSection />
      <TrustSection />
      <TestimonialsSection />
      <ContactUsSection />
    </>
  );
}
