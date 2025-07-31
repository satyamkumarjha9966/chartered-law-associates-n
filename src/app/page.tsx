import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TeamSection from "@/components/TeamSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import BlogInsightsSection from "@/components/BlogInsightsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
    <Header />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <WhyChooseSection />
    <HowItWorksSection />
    <CaseStudiesSection />
    <TeamSection />
    <TestimonialsSection />
    <PricingSection />
    <FAQSection />
    <BlogInsightsSection />
    <ContactSection />
    <Footer />
  </div>
  );
}
