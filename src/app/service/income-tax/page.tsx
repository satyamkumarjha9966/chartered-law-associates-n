import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Calculator, Users, Shield, Clock } from "lucide-react";
import Link from "next/link";

const IncomeTax = () => {
  const features = [
    "Comprehensive ITR filing for individuals and businesses",
    "Maximum tax deductions and exemptions identification",
    "Error-free submissions with expert review",
    "Quick refund processing assistance",
    "Tax planning strategies for next financial year",
    "Support for all ITR forms (ITR-1 to ITR-7)",
    "Document collection and verification",
    "Post-filing support and queries resolution"
  ];

  const benefits = [
    {
      icon: Calculator,
      title: "Expert Tax Calculation",
      description: "Accurate tax computation with all eligible deductions"
    },
    {
      icon: Shield,
      title: "100% Compliance",
      description: "Fully compliant filings as per latest IT regulations"
    },
    {
      icon: Clock,
      title: "Timely Filing",
      description: "On-time submissions to avoid penalties and interest"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Personal tax advisor assigned to your case"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-radial">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary mb-6">
                Income Tax Filing Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Professional ITR filing services with maximum deductions, error-free submissions, 
                and expert tax planning guidance for individuals and businesses.
              </p>
              <Link href="/contact">
                <Button variant="accent" size="lg" className="mr-4">
                  Get Started Today
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Free Tax Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Service Description */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="font-heading text-3xl font-bold text-primary mb-6">
                  Why Choose Our Tax Filing Services?
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our team of qualified chartered accountants and tax professionals brings over 15 years of 
                  expertise in income tax compliance. We have successfully filed 5000+ ITRs across various 
                  sectors, ensuring maximum deductions under Section 80C, 80D, and other applicable provisions 
                  while maintaining complete legal compliance with the Income Tax Act, 1961.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  From salaried professionals navigating TDS complexities to business owners managing capital 
                  gains and depreciation calculations, we provide specialized expertise for all taxpayer categories. 
                  Our services include handling complex scenarios like foreign income reporting under DTAA, 
                  presumptive taxation schemes for small businesses, and advance tax calculations.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We utilize advanced tax computation software and maintain updated knowledge of annual budget 
                  changes, CBDT circulars, and tribunal decisions to ensure your returns are not only compliant 
                  but also strategically optimized for maximum savings.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Industry Examples:</strong> Manufacturing companies benefit from our expertise in 
                  depreciation optimization and MAT calculations. IT professionals leverage our knowledge of 
                  salary restructuring and perquisite valuations. Export businesses utilize our DTAA expertise 
                  for international tax planning.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop"
                  alt="Tax Filing Services"
                  className="rounded-xl shadow-elegant w-full"
                />
                <div className="absolute inset-0 bg-gradient-overlay rounded-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl font-bold text-primary text-center mb-12">
                What's Included in Our Service
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl font-bold text-primary text-center mb-12">
              Why Businesses Trust Our Tax Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="text-center p-6 hover:shadow-large transition-all duration-300 border-0">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-primary mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">
                Transparent & Affordable Pricing
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Starting from ₹999 for individual ITR filing. Business packages available from ₹2,999.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 border-0 shadow-soft">
                  <h3 className="font-heading text-lg font-bold text-primary mb-2">Individual</h3>
                  <div className="text-3xl font-bold text-accent mb-4">₹999</div>
                  <p className="text-muted-foreground text-sm">Perfect for salaried individuals</p>
                </Card>
                <Card className="p-6 border-2 border-accent shadow-elegant">
                  <h3 className="font-heading text-lg font-bold text-primary mb-2">Business</h3>
                  <div className="text-3xl font-bold text-accent mb-4">₹2,999</div>
                  <p className="text-muted-foreground text-sm">For small to medium businesses</p>
                </Card>
                <Card className="p-6 border-0 shadow-soft">
                  <h3 className="font-heading text-lg font-bold text-primary mb-2">Enterprise</h3>
                  <div className="text-3xl font-bold text-accent mb-4">Custom</div>
                  <p className="text-muted-foreground text-sm">For large organizations</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-3xl font-bold text-primary text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="font-heading text-lg font-bold text-primary mb-3">
                  What documents do I need for ITR filing?
                </h3>
                <p className="text-muted-foreground text-sm">
                  For salaried individuals: Form 16, salary slips, bank statements, investment proofs (80C, 80D), 
                  interest certificates, and capital gains statements. For businesses: P&L account, balance sheet, 
                  GST returns, TDS certificates, and depreciation schedules.
                </p>
              </Card>
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="font-heading text-lg font-bold text-primary mb-3">
                  Can you handle ITR filing for international income?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Yes, we specialize in DTAA applications, foreign tax credit claims, and reporting of overseas assets 
                  under the Black Money Act. Our team handles complex NRI taxation scenarios including FEMA compliance.
                </p>
              </Card>
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="font-heading text-lg font-bold text-primary mb-3">
                  What if I receive an income tax notice after filing?
                </h3>
                <p className="text-muted-foreground text-sm">
                  We provide comprehensive post-filing support including notice handling, assessment proceedings representation, 
                  and appeals before CIT(A). Our success rate in notice resolution is 95% with minimal additional liability.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-card rounded-xl p-12 text-center max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">
                Ready to File Your Income Tax Return?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join 5000+ satisfied clients who trust us for accurate, optimized tax filing. 
                Our expert CAs ensure maximum refunds and zero penalties with guaranteed compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button variant="accent" size="lg">
                    Contact for Consultation
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  Download ITR Checklist
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IncomeTax;