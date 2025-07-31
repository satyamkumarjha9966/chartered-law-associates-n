import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Clock, IndianRupee, FileCheck, Award } from "lucide-react";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Manufacturing Company GST Penalty Relief",
      client: "ABC Manufacturing Ltd.",
      industry: "Manufacturing",
      challenge: "Facing ₹8 lakh GST penalty due to incorrect filings and missed deadlines",
      solution: "Complete GST audit, penalty appeal, and streamlined filing process implementation",
      results: [
        { metric: "Penalty Saved", value: "₹8 Lakhs", icon: IndianRupee },
        { metric: "Filing Accuracy", value: "100%", icon: FileCheck },
        { metric: "Time Saved", value: "15 Hours/Month", icon: Clock }
      ],
      testimonial: "Their expert handling saved us from a massive penalty. Now our GST compliance is seamless.",
      timeframe: "3 months",
      status: "Completed"
    },
    {
      id: 2,
      title: "Startup Legal Framework Setup", 
      client: "TechStart Innovations Pvt. Ltd.",
      industry: "Technology",
      challenge: "New startup needed complete legal structure including company registration, compliance setup, and IP protection",
      solution: "End-to-end business registration, trademark filing, and comprehensive compliance framework",
      results: [
        { metric: "Registrations", value: "5 Complete", icon: FileCheck },
        { metric: "Time to Market", value: "30 Days", icon: Clock },
        { metric: "Compliance Score", value: "100%", icon: Award }
      ],
      testimonial: "They made our business legally bulletproof. Professional service from day one.",
      timeframe: "1 month", 
      status: "Completed"
    },
    {
      id: 3,
      title: "Multi-State GST Compliance for Retailer",
      client: "Fashion Forward Retail Chain",
      industry: "Retail",
      challenge: "Managing GST compliance across 12 states with complex inter-state transactions",
      solution: "Centralized GST management system, automated filing process, and dedicated compliance team",
      results: [
        { metric: "States Managed", value: "12 States", icon: Users },
        { metric: "Returns Filed", value: "144/Year", icon: TrendingUp },
        { metric: "Error Rate", value: "0%", icon: Award }
      ],
      testimonial: "Managing multi-state GST was a nightmare. Now it's completely automated and error-free.",
      timeframe: "Ongoing",
      status: "Active"
    },
    {
      id: 4,
      title: "Income Tax Dispute Resolution",
      client: "Global Consultancy Services",
      industry: "Professional Services", 
      challenge: "₹15 lakh income tax demand notice and potential business disruption",
      solution: "Detailed case analysis, legal representation, and settlement negotiation with tax authorities",
      results: [
        { metric: "Demand Reduced", value: "₹12 Lakhs", icon: IndianRupee },
        { metric: "Case Duration", value: "6 Months", icon: Clock },
        { metric: "Success Rate", value: "80%", icon: TrendingUp }
      ],
      testimonial: "Expert legal representation resulted in significant reduction of our tax liability.",
      timeframe: "6 months",
      status: "Completed"
    }
  ];

  const stats = [
    { label: "Tax Saved for Clients", value: "₹50+ Crores", icon: IndianRupee },
    { label: "GST Returns Filed", value: "1000+", icon: FileCheck },
    { label: "Legal Cases Won", value: "95%", icon: Award },
    { label: "Happy Clients", value: "200+", icon: Users }
  ];

  return (
    <section id="case-studies" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Success <span className="text-accent">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results for real businesses. See how we've helped clients save money, time, and achieve complete compliance.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Case Studies */}
        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <Card key={study.id} className="group hover:shadow-elegant transition-all duration-300 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                    {study.industry}
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className={`${
                      study.status === 'Active' 
                        ? 'border-green-500 text-green-600' 
                        : 'border-accent text-accent'
                    }`}
                  >
                    {study.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-accent transition-colors">
                  {study.title}
                </CardTitle>
                <CardDescription className="font-medium">
                  {study.client}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">Challenge</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{study.challenge}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">Solution</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{study.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Results</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {study.results.map((result, index) => (
                      <div key={index} className="text-center bg-card/50 rounded-lg p-3">
                        <result.icon className="w-5 h-5 text-accent mx-auto mb-1" />
                        <div className="font-bold text-sm">{result.value}</div>
                        <div className="text-xs text-muted-foreground">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-accent/5 rounded-lg p-4 border-l-4 border-accent">
                  <p className="text-sm italic text-muted-foreground">
                    "{study.testimonial}"
                  </p>
                  <div className="text-xs text-muted-foreground mt-2">
                    Project Duration: {study.timeframe}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Ready to be our next success story?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-accent transition-all duration-300"
            >
              Discuss Your Case
            </a>
            <a 
              href="tel:+91-9876543210" 
              className="inline-flex items-center justify-center border border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Call for Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;