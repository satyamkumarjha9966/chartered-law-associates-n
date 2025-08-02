import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Calculator, BarChart, FileCheck, TrendingUp } from "lucide-react";
import Link from "next/link";

const Accounting = () => {
  const features = [
    "Complete bookkeeping and record maintenance",
    "Monthly financial statements preparation",
    "Annual accounts and balance sheet compilation",
    "Management Information System (MIS) reports",
    "Cash flow analysis and projections",
    "Audit preparation and support services",
    "Accounts payable and receivable management",
    "Expense tracking and budget analysis"
  ];

  const benefits = [
    {
      icon: Calculator,
      title: "Accurate Bookkeeping",
      description: "Precise recording and maintenance of all financial transactions"
    },
    {
      icon: BarChart,
      title: "Financial Insights",
      description: "Detailed reports and analysis for informed business decisions"
    },
    {
      icon: FileCheck,
      title: "Audit Ready",
      description: "Well-organized books ready for internal and statutory audits"
    },
    {
      icon: TrendingUp,
      title: "Growth Planning",
      description: "Financial data analysis to support business growth strategies"
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
                Accounting Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Professional bookkeeping, financial statements, and comprehensive accounting solutions 
                to keep your business finances organized and compliant.
              </p>
              <Link href="/contact">
                <Button variant="accent" size="lg" className="mr-4">
                  Get Accounting Help
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Free Financial Review
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
                  Professional Accounting Solutions
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our comprehensive accounting practice encompasses full-spectrum financial management for 500+ 
                  clients across manufacturing, services, and trading sectors. We ensure complete compliance with 
                  the Companies Act 2013, Accounting Standards (AS/Ind AS), and regulatory requirements while 
                  providing strategic financial insights for business growth.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  From double-entry bookkeeping and inventory valuation to complex financial consolidations and 
                  management reporting, our certified team handles diverse accounting challenges. We specialize 
                  in ERP integration, automated reconciliation processes, and real-time financial dashboard 
                  development for data-driven decision making.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  <strong>Industry Expertise:</strong> Manufacturing clients benefit from our cost accounting and 
                  inventory management systems. Service companies leverage our project-based accounting and 
                  milestone billing frameworks. Startups appreciate our scalable accounting infrastructure 
                  that grows with their business.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our audit-ready approach ensures your books meet statutory auditor requirements, bank due 
                  diligence standards, and investor presentation quality, facilitating seamless funding rounds 
                  and compliance audits.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop"
                  alt="Accounting Services"
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
                Complete Accounting Services We Provide
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
              Why Choose Our Accounting Services
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

        {/* Service Types */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl font-bold text-primary text-center mb-12">
              Accounting Solutions for Every Business
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="font-heading text-xl font-bold text-primary mb-4">Small Business</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Basic bookkeeping</li>
                  <li>• Monthly financial statements</li>
                  <li>• Tax preparation support</li>
                  <li>• Cash flow management</li>
                </ul>
              </Card>
              <Card className="p-6 border-2 border-accent shadow-elegant">
                <h3 className="font-heading text-xl font-bold text-primary mb-4">Growing Business</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Advanced bookkeeping</li>
                  <li>• MIS reports</li>
                  <li>• Budget analysis</li>
                  <li>• Audit preparation</li>
                </ul>
              </Card>
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="font-heading text-xl font-bold text-primary mb-4">Enterprise</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Complex accounting</li>
                  <li>• Financial analysis</li>
                  <li>• Compliance management</li>
                  <li>• Strategic planning</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-3xl font-bold text-primary text-center mb-12">
              Accounting Services FAQs
            </h2>
            <div className="space-y-6">
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="font-heading text-lg font-bold text-primary mb-3">
                  How do you ensure accounting accuracy and compliance?
                </h3>
                <p className="text-muted-foreground text-sm">
                  We follow a three-tier review process with automated reconciliation checks, monthly variance analysis, 
                  and quarterly compliance audits. Our team stays updated with latest Accounting Standards and regulatory 
                  changes through continuous professional development.
                </p>
              </Card>
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="font-heading text-lg font-bold text-primary mb-3">
                  Can you integrate with our existing ERP system?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Yes, we work with major ERP platforms including SAP, Oracle, Tally, and QuickBooks. Our team provides 
                  seamless data migration, chart of accounts setup, and automated reporting integration to maintain 
                  real-time financial visibility.
                </p>
              </Card>
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="font-heading text-lg font-bold text-primary mb-3">
                  What reports do you provide for management decision-making?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Our management reporting includes P&L analysis, cash flow projections, budget variance reports, 
                  departmental profitability analysis, and key performance indicators. We provide both standard 
                  financial statements and customized dashboards for strategic planning.
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
                Get Your Finances in Perfect Order
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Transform your financial management with our professional accounting services. 
                500+ satisfied clients trust us for accurate books, strategic insights, and audit-ready compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button variant="accent" size="lg">
                    Contact for Consultation
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  Download Accounting Guide
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

export default Accounting;