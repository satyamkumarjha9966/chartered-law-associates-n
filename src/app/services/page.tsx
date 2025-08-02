'use client';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, FileText, Building, Scale, Users, Copyright } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: "income-tax",
      icon: Calculator,
      title: "Income Tax Filing Services",
      description: "Professional ITR filing for individuals and businesses with maximum deductions and error-free submissions.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      features: ["Individual ITR", "Business ITR", "Tax Planning", "Refund Processing"]
    },
    {
      id: "gst-consultancy",
      icon: FileText,
      title: "GST Consultancy",
      description: "Complete GST registration, filing, and compliance management with timely submissions and expert guidance.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      features: ["GST Registration", "Monthly Returns", "Annual Returns", "Compliance Audit"]
    },
    {
      id: "accounting",
      icon: Building,
      title: "Accounting Services",
      description: "Comprehensive bookkeeping, financial statements, and accounting solutions for businesses of all sizes.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop",
      features: ["Bookkeeping", "Financial Statements", "Audit Support", "MIS Reports"]
    },
    {
      id: "labour-law",
      icon: Scale,
      title: "Labour Law Compliance",
      description: "Expert guidance on labour law compliance, employment contracts, and workplace legal requirements.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
      features: ["Employment Contracts", "Compliance Audit", "Legal Advisory", "Documentation"]
    },
    {
      id: "epf-consultant",
      icon: Users,
      title: "EPF Consultant Services",
      description: "Complete EPF registration, monthly returns, and compliance management for your employees.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
      features: ["EPF Registration", "Monthly Returns", "Withdrawal Process", "Compliance Check"]
    },
    {
      id: "esic-consultant",
      icon: Copyright,
      title: "ESIC Consultant Services",
      description: "ESIC registration, medical benefit claims, and complete compliance support for your workforce.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
      features: ["ESIC Registration", "Medical Claims", "Benefit Processing", "Compliance Support"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-radial">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive legal and tax solutions designed to meet your business needs. 
              From compliance to strategic advisory, we provide expert guidance every step of the way.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Link key={service.id} to={`/services/${service.id}`}>
                    <Card className="group hover:shadow-large transition-all duration-300 h-full cursor-pointer border-0 shadow-soft hover:-translate-y-1">
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <IconComponent className="w-5 h-5 text-accent-foreground" />
                          </div>
                          <CardTitle className="font-heading text-lg text-primary group-hover:text-accent transition-colors">
                            {service.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                          {service.description}
                        </CardDescription>
                        <ul className="text-sm text-muted-foreground space-y-1 mb-6">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-accent rounded-full"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center justify-between">
                          <Button variant="outline" size="sm" className="group/btn">
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-gradient-card rounded-xl p-12 max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">
                Need Personalized Legal & Tax Solutions?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Every business has unique requirements. Let our expert team analyze your needs 
                and provide customized solutions that ensure complete compliance and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="accent" size="lg">
                    Get Free Consultation
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  Download Service Brochure
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

export default Services;