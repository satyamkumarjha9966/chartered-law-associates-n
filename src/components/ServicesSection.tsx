import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calculator, 
  FileText, 
  Building, 
  Scale, 
  Shield, 
  Copyright,
  ArrowRight 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Calculator,
      title: "GST Registration & Filing",
      description: "Complete GST registration, monthly/quarterly returns, and compliance management with accuracy and timely submission.",
      features: ["GST Registration", "Monthly Returns", "Annual Returns", "Compliance Check"]
    },
    {
      icon: FileText,
      title: "Income Tax Return Filing",
      description: "Professional ITR filing for individuals and businesses, ensuring maximum deductions and error-free submissions.",
      features: ["Individual ITR", "Business ITR", "Tax Planning", "Refund Processing"]
    },
    {
      icon: Building,
      title: "Company/LLP Registration",
      description: "End-to-end business registration services including documentation, compliance, and post-registration support.",
      features: ["Company Formation", "LLP Registration", "Partnership Deed", "Legal Documentation"]
    },
    {
      icon: Scale,
      title: "Legal Notice & Representation",
      description: "Expert legal representation and notice drafting for business disputes, contracts, and legal proceedings.",
      features: ["Legal Notices", "Court Representation", "Contract Review", "Dispute Resolution"]
    },
    {
      icon: Shield,
      title: "Business Compliance Advisory",
      description: "Comprehensive compliance solutions to ensure your business meets all regulatory requirements.",
      features: ["Regulatory Compliance", "Audit Support", "Policy Framework", "Risk Assessment"]
    },
    {
      icon: Copyright,
      title: "Trademark & IP Services",
      description: "Protect your intellectual property with trademark registration, copyright, and patent services.",
      features: ["Trademark Registration", "Copyright Filing", "Patent Services", "IP Protection"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Professional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive legal and tax solutions tailored to meet your business needs. 
            From compliance to growth strategies, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-large transition-all duration-300 border-0 shadow-soft hover:-translate-y-2 bg-card hover:bg-card-hover">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="font-heading text-xl text-primary group-hover:text-accent transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center gap-2">
                        <div className="w-1 h-1 bg-accent rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-gradient-card rounded-xl p-8 shadow-medium">
            <h3 className="font-heading text-2xl font-bold text-primary mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every business is unique. Let's discuss how we can tailor our services 
              to meet your specific legal and compliance requirements.
            </p>
            <Button variant="accent" size="lg">
              Get Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;