import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Heart, Shield, Clock, Users } from "lucide-react";
import Link from "next/link";


const EsicConsultant = () => {
  const features = [
    "ESIC registration for new establishments",
    "Monthly contribution filing and payment",
    "Employee medical benefit claim processing",
    "Disability and maternity benefit assistance",
    "Hospital empanelment guidance",
    "ESIC compliance audit and advisory",
    "Notice handling and dispute resolution",
    "Employee ID card and medical checkup coordination"
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Medical Benefits",
      description: "Comprehensive medical coverage for employees and families"
    },
    {
      icon: Shield,
      title: "Financial Security",
      description: "Disability and maternity benefits for employee welfare"
    },
    {
      icon: Clock,
      title: "Quick Processing",
      description: "Fast claim processing and benefit distribution"
    },
    {
      icon: Users,
      title: "Family Coverage",
      description: "Medical benefits extended to employee dependents"
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
                ESIC Consultant Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                ESIC registration, medical benefit claims, and complete compliance support to ensure 
                your workforce gets comprehensive healthcare coverage and social security benefits.
              </p>
              <Link href="/contact">
                <Button variant="accent" size="lg" className="mr-4">
                  Get ESIC Support
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Free ESIC Consultation
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
                  Complete ESIC Management Solutions
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Under the Employee State Insurance Act, 1948, we provide comprehensive ESIC management 
                  for 600+ establishments across India. Our expertise covers medical benefit administration, 
                  disability assessments, maternity benefit processing, and hospital empanelment coordination 
                  ensuring your workforce receives complete healthcare coverage.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We handle complex ESIC scenarios including inter-state coverage, occupational disease claims, 
                  dependent benefit calculations, and cashless treatment facilitation. Our team maintains 
                  relationships with empaneled hospitals and medical boards for seamless benefit delivery.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  <strong>Healthcare Impact:</strong> Our clients' employees have accessed medical benefits worth 
                  ₹5 crores annually, with 95% claim approval rates and average processing time of 10 days. 
                  We've facilitated 2000+ successful maternity claims and 500+ disability benefit cases.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From small enterprises to large manufacturing units, our ESIC solutions ensure comprehensive 
                  healthcare security for your workforce while maintaining full regulatory compliance and 
                  optimizing contribution management.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop"
                  alt="ESIC Consultant Services"
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
                Complete ESIC Services We Provide
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
              ESIC Benefits for Your Workforce
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

        {/* ESIC Benefits Types */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl font-bold text-primary text-center mb-12">
              Types of ESIC Benefits Available
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="font-heading text-lg font-bold text-primary mb-4">Medical Benefits</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Full medical care for employees</li>
                  <li>• Medical care for dependents</li>
                  <li>• Specialist consultation</li>
                  <li>• Hospitalization coverage</li>
                  <li>• Medicine and diagnostic tests</li>
                </ul>
              </Card>
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="font-heading text-lg font-bold text-primary mb-4">Cash Benefits</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Sickness benefit</li>
                  <li>• Maternity benefit</li>
                  <li>• Disablement benefit</li>
                  <li>• Dependent benefit</li>
                  <li>• Funeral expenses</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Compliance Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl font-bold text-primary text-center mb-12">
              Our ESIC Compliance Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="text-center p-6 border-0 shadow-soft">
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold text-accent-foreground">
                  1
                </div>
                <h3 className="font-heading text-base font-bold text-primary mb-2">Registration</h3>
                <p className="text-muted-foreground text-sm">ESIC establishment and employee registration</p>
              </Card>
              <Card className="text-center p-6 border-0 shadow-soft">
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold text-accent-foreground">
                  2
                </div>
                <h3 className="font-heading text-base font-bold text-primary mb-2">Compliance</h3>
                <p className="text-muted-foreground text-sm">Monthly filing and contribution payment</p>
              </Card>
              <Card className="text-center p-6 border-0 shadow-soft">
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold text-accent-foreground">
                  3
                </div>
                <h3 className="font-heading text-base font-bold text-primary mb-2">Claims</h3>
                <p className="text-muted-foreground text-sm">Medical and cash benefit claim processing</p>
              </Card>
              <Card className="text-center p-6 border-0 shadow-soft">
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold text-accent-foreground">
                  4
                </div>
                <h3 className="font-heading text-base font-bold text-primary mb-2">Support</h3>
                <p className="text-muted-foreground text-sm">Ongoing assistance and query resolution</p>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-3xl font-bold text-primary text-center mb-12">
              ESIC Benefits FAQs
            </h2>
            <div className="space-y-6">
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="font-heading text-lg font-bold text-primary mb-3">
                  What is the wage limit for ESIC coverage?
                </h3>
                <p className="text-muted-foreground text-sm">
                  ESIC coverage applies to employees earning up to ₹21,000 per month. Once covered, employees 
                  continue to receive benefits even if their salary exceeds this limit. We help determine 
                  eligibility and ensure proper enrollment for all qualified employees.
                </p>
              </Card>
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="font-heading text-lg font-bold text-primary mb-3">
                  Do family members get medical benefits under ESIC?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Yes, ESIC provides medical benefits to employee dependents including spouse, children (up to 25 years), 
                  and dependent parents. We assist in dependent registration and coordinate medical care access 
                  through empaneled hospitals and dispensaries.
                </p>
              </Card>
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="font-heading text-lg font-bold text-primary mb-3">
                  How are maternity benefits calculated under ESIC?
                </h3>
                <p className="text-muted-foreground text-sm">
                  ESIC provides maternity benefits equal to average daily wage for 26 weeks (extendable to 1 month 
                  for complications). We handle complete documentation, medical certification, and benefit calculation 
                  to ensure timely payment to eligible employees.
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
                Provide Healthcare Security for Your Employees
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join 600+ establishments providing comprehensive healthcare benefits through ESIC. 
                Ensure your workforce's medical security with our expert ESIC management services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button variant="accent" size="lg">
                    Contact for Consultation
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  Download ESIC Guide
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

export default EsicConsultant;