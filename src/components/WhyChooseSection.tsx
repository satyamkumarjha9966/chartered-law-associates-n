import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Clock, 
  Users, 
  Zap, 
  DollarSign, 
  Award, 
  Shield,
  CheckCircle,
  Star
} from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Award,
      title: "10+ Years of Experience",
      description: "Decade-long expertise in tax and legal consulting with proven results across diverse industries.",
      stat: "10+ Years"
    },
    {
      icon: Users,
      title: "200+ Happy Clients",
      description: "Trusted by hundreds of businesses, from startups to established enterprises across India.",
      stat: "200+ Clients"
    },
    {
      icon: Zap,
      title: "Fast & Reliable Filing",
      description: "Quick turnaround times without compromising accuracy. Most filings completed within 24-48 hours.",
      stat: "24-48 Hours"
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden costs or surprise fees. Clear, upfront pricing with detailed breakdown of all services.",
      stat: "No Hidden Fees"
    },
    {
      icon: Shield,
      title: "Dedicated Legal Experts",
      description: "Team of certified CAs, lawyers, and tax professionals dedicated to your success.",
      stat: "Expert Team"
    },
    {
      icon: CheckCircle,
      title: "100% Compliance Guarantee",
      description: "We ensure full regulatory compliance with all tax and legal requirements, backed by our guarantee.",
      stat: "100% Compliant"
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-accent">LegalAdvisePro</span>?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            We combine experience, expertise, and efficiency to deliver exceptional legal services 
            that help your business thrive in today's competitive landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <Card key={index} className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="font-heading text-xl text-primary-foreground group-hover:text-accent transition-colors">
                    {reason.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-primary-foreground/80 mb-4 leading-relaxed">
                    {reason.description}
                  </p>
                  <div className="inline-flex items-center justify-center bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                    {reason.stat}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">98%</div>
            <div className="text-primary-foreground/80">Success Rate</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">1000+</div>
            <div className="text-primary-foreground/80">Cases Handled</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">₹5Cr+</div>
            <div className="text-primary-foreground/80">Tax Savings</div>
          </div>
          <div className="group">
            <div className="flex justify-center items-center gap-1 mb-2 group-hover:scale-110 transition-transform">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 text-accent fill-current" />
              ))}
            </div>
            <div className="text-primary-foreground/80">Client Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;