import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, Shield, Clock, Users } from "lucide-react";
import Link from "next/link";

const GstConsultancy = () => {
  const features = [
    "GST registration for new businesses",
    "Monthly and quarterly GST return filing",
    "Annual GST return preparation and filing", 
    "GST compliance audit and advisory",
    "Input tax credit optimization",
    "GST refund processing assistance",
    "Notice handling and representation",
    "E-way bill and e-invoice compliance"
  ];

  const benefits = [
    {
      icon: FileText,
      title: "Complete GST Solutions",
      description: "End-to-end GST services from registration to annual filing"
    },
    {
      icon: Shield,
      title: "100% Compliance",
      description: "Fully compliant with latest GST laws and regulations"
    },
    {
      icon: Clock,
      title: "Timely Filing",
      description: "Never miss a GST deadline with our proactive approach"
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "CA-qualified professionals with GST expertise"
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
                GST Consultancy Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Comprehensive GST registration, filing, and compliance management with expert guidance 
                to ensure your business stays compliant and penalty-free.
              </p>
              <Link href="/contact">
                <Button variant="accent" size="lg" className="mr-4">
                  Get GST Help Now
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Free GST Assessment
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
                  Expert GST Compliance Made Simple
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  With the GST regime transforming India's indirect tax landscape, our specialized team has 
                  successfully managed 2000+ GST registrations and filed 15,000+ returns across diverse sectors. 
                  We provide end-to-end GST solutions ensuring 100% compliance with the Central Goods and Services 
                  Tax Act, 2017, and state-specific regulations.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our expertise spans complex areas including input tax credit reconciliation under Rule 36(4), 
                  reverse charge mechanism compliance, e-way bill generation for inter-state movement, and 
                  composition scheme optimization for small businesses. We handle GST audits, refund processing 
                  under various categories, and representation before GST authorities.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  <strong>SME Success Story:</strong> We helped a Mumbai-based textile manufacturer reduce their 
                  GST liability by 18% through proper ITC optimization and supply chain restructuring, while 
                  ensuring complete compliance with anti-profiteering provisions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From startups navigating threshold limits to multinational corporations managing multi-state 
                  operations, our customized approach ensures your business leverages GST benefits while 
                  maintaining impeccable compliance standards.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
                  alt="GST Consultancy Services"
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
                Comprehensive GST Services We Offer
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
              Why Choose Our GST Services
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

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl font-bold text-primary text-center mb-12">
              Our GST Compliance Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center p-6 border-0 shadow-soft">
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-accent-foreground">
                  1
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-3">Assessment & Setup</h3>
                <p className="text-muted-foreground text-sm">
                  We analyze your business, handle GST registration, and set up compliance systems
                </p>
              </Card>
              <Card className="text-center p-6 border-0 shadow-soft">
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-accent-foreground">
                  2
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-3">Monthly Management</h3>
                <p className="text-muted-foreground text-sm">
                  Regular GST filing, reconciliation, and optimization of input tax credits
                </p>
              </Card>
              <Card className="text-center p-6 border-0 shadow-soft">
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-accent-foreground">
                  3
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-3">Ongoing Support</h3>
                <p className="text-muted-foreground text-sm">
                  Continuous compliance monitoring, updates, and expert consultation
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-3xl font-bold text-primary text-center mb-12">
              GST Compliance FAQs
            </h2>
            <div className="space-y-6">
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="font-heading text-lg font-bold text-primary mb-3">
                  How does GST benefit small and medium enterprises?
                </h3>
                <p className="text-muted-foreground text-sm">
                  SMEs benefit from composition scheme (up to ₹1.5 crore turnover), reduced compliance burden, 
                  input tax credit on business expenses, and elimination of cascading tax effect. We help optimize 
                  these benefits while ensuring proper documentation and timely filing.
                </p>
              </Card>
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="font-heading text-lg font-bold text-primary mb-3">
                  What happens if I miss GST filing deadlines?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Late filing attracts penalties under Section 47 - ₹200 per day for GSTR-1 and GSTR-3B (minimum ₹500). 
                  We provide deadline management services and can help file belated returns with penalty minimization strategies.
                </p>
              </Card>
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="font-heading text-lg font-bold text-primary mb-3">
                  Can you help with GST refund processing?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Yes, we handle all refund categories including export refunds, excess ITC refunds, and provisional refunds. 
                  Our team ensures proper documentation, ARN tracking, and follow-up with GST officers for faster processing.
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
                Simplify Your GST Compliance Today
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join 800+ businesses who trust our GST expertise. Save time, reduce costs, and ensure 
                100% compliance with our comprehensive GST management solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button variant="accent" size="lg">
                    Contact for Consultation
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  Download GST Guide
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

export default GstConsultancy;