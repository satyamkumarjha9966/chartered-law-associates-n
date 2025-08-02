import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Shield, Clock, Calculator } from "lucide-react";
import Link from "next/link";

const EpfConsultant = () => {
  const features = [
    "EPF registration for new establishments",
    "Monthly ECR filing and compliance",
    "Annual EPF return preparation",
    "Employee withdrawal processing",
    "Transfer claims and settlement",
    "PF balance verification and correction",
    "Compliance audit and advisory",
    "Notice handling and representation"
  ];

  const benefits = [
    {
      icon: Users,
      title: "Employee Benefits",
      description: "Ensure timely PF contributions and hassle-free withdrawals"
    },
    {
      icon: Shield,
      title: "Compliance Assurance",
      description: "Stay compliant with EPFO regulations and avoid penalties"
    },
    {
      icon: Clock,
      title: "Timely Processing",
      description: "Quick and accurate EPF filings and claim processing"
    },
    {
      icon: Calculator,
      title: "Accurate Calculations",
      description: "Precise PF contribution calculations and reconciliation"
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
                EPF Consultant Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Complete EPF registration, monthly returns, and compliance management to ensure 
                your employees receive their rightful benefits without any hassles.
              </p>
              <Link href="/contact">
                <Button variant="accent" size="lg" className="mr-4">
                  Get EPF Support
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Free EPF Assessment
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
                  Expert EPF Management Services
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  With over 15 years of experience in EPF management, we have successfully handled 
                  800+ establishment registrations and processed 25,000+ employee claims. Our expertise 
                  spans the Employee Provident Fund and Miscellaneous Provisions Act, 1952, ensuring 
                  complete compliance with EPFO guidelines and timely benefit distribution.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We specialize in complex EPF scenarios including inter-state transfers, higher pension 
                  options, non-contributory periods, and EPS withdrawal calculations. Our team maintains 
                  direct liaison with EPFO offices for faster claim processing and dispute resolution.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  <strong>Success Metric:</strong> We've achieved a 99.2% success rate in EPF claim settlements 
                  with an average processing time of 15 days, significantly faster than industry standards. 
                  Our clients have collectively saved over ₹2 crores in penalties through our proactive compliance management.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're a startup with 10 employees or a manufacturing unit with 1000+ workforce, 
                  our scalable EPF solutions ensure your employees' retirement security while maintaining 
                  seamless regulatory compliance.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop"
                  alt="EPF Consultant Services"
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
                Comprehensive EPF Services We Offer
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
              Benefits of Our EPF Services
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

        {/* EPF Process */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl font-bold text-primary text-center mb-12">
              Our EPF Management Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center p-6 border-0 shadow-soft">
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-accent-foreground">
                  1
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-3">Registration & Setup</h3>
                <p className="text-muted-foreground text-sm">
                  EPF registration, employee enrollment, and system setup for seamless compliance
                </p>
              </Card>
              <Card className="text-center p-6 border-0 shadow-soft">
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-accent-foreground">
                  2
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-3">Monthly Compliance</h3>
                <p className="text-muted-foreground text-sm">
                  Regular ECR filing, contribution deposits, and employee record maintenance
                </p>
              </Card>
              <Card className="text-center p-6 border-0 shadow-soft">
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-accent-foreground">
                  3
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-3">Claims & Support</h3>
                <p className="text-muted-foreground text-sm">
                  Withdrawal processing, transfer claims, and ongoing compliance support
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* EPF Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl font-bold text-primary text-center mb-12">
              EPF Benefits for Your Business
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="font-heading text-lg font-bold text-primary mb-4">For Employers</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Compliance with labour laws</li>
                  <li>• Tax benefits on contributions</li>
                  <li>• Employee retention and satisfaction</li>
                  <li>• Simplified payroll management</li>
                </ul>
              </Card>
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="font-heading text-lg font-bold text-primary mb-4">For Employees</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Retirement savings with interest</li>
                  <li>• Tax exemption on contributions</li>
                  <li>• Withdrawal for emergencies</li>
                  <li>• Portability across jobs</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-3xl font-bold text-primary text-center mb-12">
              EPF Compliance FAQs
            </h2>
            <div className="space-y-6">
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="font-heading text-lg font-bold text-primary mb-3">
                  What is the threshold for mandatory EPF registration?
                </h3>
                <p className="text-muted-foreground text-sm">
                  EPF registration is mandatory for establishments with 20 or more employees earning up to ₹15,000 
                  per month. However, organizations with fewer employees can voluntarily opt for EPF registration 
                  to provide retirement benefits to their workforce.
                </p>
              </Card>
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="font-heading text-lg font-bold text-primary mb-3">
                  How long does EPF withdrawal processing take?
                </h3>
                <p className="text-muted-foreground text-sm">
                  With UAN activation and Aadhaar linking, EPF withdrawals typically process within 7-15 days. 
                  We ensure all documentation is complete and follow up with EPFO for faster processing of your employees' claims.
                </p>
              </Card>
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="font-heading text-lg font-bold text-primary mb-3">
                  Can employees transfer EPF between jobs?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Yes, EPF is portable through UAN (Universal Account Number). We assist in seamless EPF transfers 
                  ensuring continuous service records and uninterrupted accumulation of retirement benefits for your employees.
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
                Secure Your Employees' Future with EPF
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join 800+ employers who trust our EPF expertise. Ensure retirement security for your 
                workforce with our comprehensive EPF management services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button variant="accent" size="lg">
                    Contact for Consultation
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  Download EPF Guide
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

export default EpfConsultant;