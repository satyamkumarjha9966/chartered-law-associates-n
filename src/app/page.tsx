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

import type { Metadata } from "next";

// app/page.tsx
export const metadata : Metadata = {
  title: "LegalAdvisePro - Trusted Tax & Legal Advisors | GST, ITR, Company Registration",
  description: "Professional tax and legal consulting services. Expert GST filing, income tax returns, company registration, and business compliance advisory. 10+ years experience, 200+ happy clients.",
  keywords: "tax consultant, legal advisor, GST filing, income tax return, company registration, business compliance, trademark registration, legal notice",
  authors: [{ name: "LegalAdvisePro" }],
  openGraph: {
    title: "LegalAdvisePro - Trusted Tax & Legal Advisors",
    description: "Simplifying GST, Tax, and Compliance with Expert Legal Solutions. Professional services for businesses of all sizes.",
    type: "website",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lovable_dev",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
};



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
