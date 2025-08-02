import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Scale, Shield, FileText, Users } from "lucide-react";
import Link from "next/link";

const LabourLaw = () => {
  const features = [
    "Employment contract drafting and review",
    "Labour law compliance audit and advisory",
    "Employee handbook and policy development",
    "Dispute resolution and mediation services",
    "Legal representation in labour tribunals",
    "Workplace safety and compliance guidance",
    "Termination and severance documentation",
    "Trade union negotiation support"
  ];

  const benefits = [
    {
      icon: Scale,
      title: "Legal Expertise",
      description: "Specialized knowledge in labour and employment law"
    },
    {
      icon: Shield,
      title: "Risk Protection",
      description: "Minimize legal risks and protect your business interests"
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Proper legal documentation for all employment matters"
    },
    {
      icon: Users,
      title: "Employee Relations",
      description: "Maintain positive workplace relationships and compliance"
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
                Labour Law Compliance
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Expert guidance on labour law compliance, employment contracts, and workplace 
                legal requirements to protect your business and maintain positive employee relations.
              </p>
              <Link href="/contact">
                <Button variant="accent" size="lg" className="mr-4">
                  Get Legal Guidance
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Free Compliance Review
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
                  Comprehensive Labour Law Solutions
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  India's labour law framework encompasses 44+ central acts and numerous state-specific regulations. 
                  Our specialized legal team has successfully handled 300+ labour law matters, ensuring comprehensive 
                  compliance with the Industrial Relations Code 2020, Occupational Safety Code 2020, and Social 
                  Security Code 2020 for diverse industries.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We provide end-to-end labour law solutions including contract drafting under the Contract Labour 
                  Act, wage compliance under Minimum Wages Act, gratuity calculations, and representation before 
                  labour courts and industrial tribunals. Our expertise extends to handling complex issues like 
                  retrenchment procedures, VRS schemes, and trade union negotiations.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  <strong>Success Example:</strong> For a 500-employee manufacturing unit, we restructured their 
                  entire labour compliance framework, reducing legal risks by 85% and ensuring seamless operations 
                  across multiple state jurisdictions while maintaining positive employee relations.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From startups establishing their first HR policies to large corporations managing multi-state 
                  operations, our proactive approach ensures you stay ahead of regulatory changes while maintaining 
                  a productive, compliant workplace environment.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop"
                  alt="Labour Law Services"
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
                Labour Law Services We Provide
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
              Why Choose Our Labour Law Services
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

        {/* Compliance Areas */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl font-bold text-primary text-center mb-12">
              Key Compliance Areas We Cover
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="font-heading text-lg font-bold text-primary mb-4">Employment Laws</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Contract Labour Act</li>
                  <li>• Industrial Disputes Act</li>
                  <li>• Minimum Wages Act</li>
                  <li>• Payment of Wages Act</li>
                </ul>
              </Card>
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="font-heading text-lg font-bold text-primary mb-4">Social Security</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Provident Fund Act</li>
                  <li>• ESI Act</li>
                  <li>• Gratuity Act</li>
                  <li>• Bonus Act</li>
                </ul>
              </Card>
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="font-heading text-lg font-bold text-primary mb-4">Workplace Safety</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Factories Act</li>
                  <li>• Shops & Establishments Act</li>
                  <li>• Sexual Harassment Act</li>
                  <li>• Trade Union Act</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-3xl font-bold text-primary text-center mb-12">
              Labour Law Compliance FAQs
            </h2>
            <div className="space-y-6">
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="font-heading text-lg font-bold text-primary mb-3">
                  What are the key labour law compliance requirements for startups?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Startups must comply with Shops & Establishments Act registration, ESI and EPF enrollment for eligible 
                  employees, proper employment contracts, and minimum wage compliance. We provide startup-friendly 
                  compliance packages that scale with your growth.
                </p>
              </Card>
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="font-heading text-lg font-bold text-primary mb-3">
                  How do you handle employee termination and layoff procedures?
                </h3>
                <p className="text-muted-foreground text-sm">
                  We ensure full compliance with Industrial Disputes Act requirements including proper notice periods, 
                  severance calculations, and government approvals where required. Our approach minimizes legal risks 
                  while maintaining dignity and fairness for all parties involved.
                </p>
              </Card>
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="font-heading text-lg font-bold text-primary mb-3">
                  Can you represent us in labour court proceedings?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Yes, our legal team provides comprehensive representation before labour courts, industrial tribunals, 
                  and high courts. We have a 90% success rate in labour dispute resolution through strategic legal 
                  representation and alternative dispute resolution methods.
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
                Ensure Complete Labour Law Compliance
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Protect your business from costly legal disputes and penalties. 300+ companies trust our 
                expertise in labour law compliance and employee relations management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button variant="accent" size="lg">
                    Contact for Consultation
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  Download Compliance Checklist
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

export default LabourLaw;