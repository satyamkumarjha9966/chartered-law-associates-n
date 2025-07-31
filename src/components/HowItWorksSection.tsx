import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, FileText, ShieldCheck, ArrowRight, Phone } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      step: 1,
      icon: Calendar,
      title: "Book Consultation",
      description: "Schedule a free consultation call or meeting with our expert legal team. We'll understand your business needs and compliance requirements.",
      features: [
        "Free initial consultation",
        "Same-day appointment available", 
        "Online or in-person meeting",
        "Complete requirement analysis"
      ]
    },
    {
      step: 2, 
      icon: FileText,
      title: "We Handle the Legal Work",
      description: "Our experienced team takes care of all paperwork, filings, and legal processes. You can focus on your business while we ensure compliance.",
      features: [
        "Document preparation & review",
        "Government filing & submissions",
        "Legal compliance management",
        "Regular progress updates"
      ]
    },
    {
      step: 3,
      icon: ShieldCheck, 
      title: "You Stay Compliant",
      description: "Receive all completed documents and certificates. We provide ongoing support to keep your business compliant with all regulations.",
      features: [
        "Completed legal documents",
        "Compliance calendar & reminders",
        "Ongoing legal support",
        "Peace of mind guarantee"
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            How It <span className="text-accent">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple 3-step process to get your business legally compliant and tax-ready.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 relative">
            {/* Connecting Lines - Hidden on mobile */}
            <div className="hidden lg:block absolute top-24 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-accent/50 to-accent/50 z-0"></div>
            <div className="hidden lg:block absolute top-24 right-1/3 transform translate-x-8 w-4 h-4 bg-accent rounded-full z-10"></div>
            <div className="hidden lg:block absolute top-24 left-1/3 transform -translate-x-8 w-4 h-4 bg-accent rounded-full z-10"></div>

            {steps.map((step, index) => (
              <Card key={step.step} className="relative z-20 group hover:shadow-elegant transition-all duration-300 bg-background">
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <div className="bg-gradient-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="text-left space-y-2 mb-6">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {step.step === 1 && (
                    <Button className="w-full bg-accent text-accent-foreground hover:shadow-accent">
                      <Phone className="w-4 h-4 mr-2" />
                      Book Free Consultation
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline for Mobile */}
        <div className="lg:hidden mt-12">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30"></div>
            {steps.map((step, index) => (
              <div key={step.step} className="relative flex items-start mb-8 last:mb-0">
                <div className="relative z-10 bg-accent w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <div className="ml-6 flex-1">
                  <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-accent rounded-2xl p-8 text-accent-foreground">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="mb-6 opacity-90">
            Join 200+ businesses who trust us with their legal and tax compliance needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              Schedule Free Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              View Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;