import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, ArrowRight } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹2,999",
      period: "/month",
      description: "Perfect for individuals and small businesses",
      popular: false,
      features: [
        "GST Return Filing (GSTR-1 & GSTR-3B)",
        "Income Tax Return Filing",
        "Basic Tax Consultation",
        "Email Support",
        "Monthly Compliance Calendar",
        "Document Review (up to 5)"
      ],
      limitations: [
        "No legal representation",
        "Limited consultation hours"
      ]
    },
    {
      name: "Professional", 
      price: "₹7,999",
      period: "/month",
      description: "Ideal for growing businesses with complex needs",
      popular: true,
      features: [
        "All Basic plan features",
        "Advanced GST Compliance",
        "TDS Return Filing",
        "Business Registration Support",
        "Priority Phone Support",
        "Unlimited Document Review",
        "Legal Notice Drafting",
        "Quarterly Business Review",
        "Tax Planning Advisory"
      ],
      limitations: []
    },
    {
      name: "Enterprise",
      price: "₹15,999",
      period: "/month", 
      description: "Comprehensive solution for large enterprises",
      popular: false,
      features: [
        "All Professional plan features",
        "Dedicated Account Manager",
        "Legal Representation in Disputes",
        "Custom Compliance Solutions",
        "24/7 Priority Support",
        "On-site Consultation",
        "Trademark & IP Services",
        "Contract Review & Drafting",
        "Audit Support & Representation",
        "Monthly Business Compliance Report"
      ],
      limitations: []
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Transparent <span className="text-accent">Pricing</span> Plans
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-elegant ${
                plan.popular 
                  ? 'border-accent shadow-accent bg-gradient-to-b from-accent/5 to-background' 
                  : 'hover:shadow-medium'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-accent text-accent-foreground text-center py-2 text-sm font-semibold">
                  <Star className="inline w-4 h-4 mr-1" />
                  Most Popular
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-8'} pb-4`}>
                <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-accent">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription className="text-center">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="px-6 pb-8">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation, limitIndex) => (
                    <li key={limitIndex} className="flex items-start gap-3 opacity-60">
                      <div className="w-5 h-5 mt-0.5 flex-shrink-0 flex items-center justify-center">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                      </div>
                      <span className="text-sm line-through">{limitation}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full group ${
                    plan.popular 
                      ? 'bg-accent text-accent-foreground hover:shadow-accent' 
                      : 'variant-outline'
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Choose {plan.name}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                {plan.popular && (
                  <p className="text-center text-sm text-muted-foreground mt-3">
                    Save 20% with annual billing
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <Button variant="outline" size="lg">
            Request Custom Quote
          </Button>
        </div>

        <div className="mt-16 bg-card/50 rounded-2xl p-8 border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">What's Included in All Plans</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">No Setup Fees</h4>
              <p className="text-sm text-muted-foreground">Get started immediately with no upfront costs</p>
            </div>
            <div>
              <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Data Security</h4>
              <p className="text-sm text-muted-foreground">Bank-level encryption for all your documents</p>
            </div>
            <div>
              <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Expert Team</h4>
              <p className="text-sm text-muted-foreground">Qualified CAs and legal professionals</p>
            </div>
            <div>
              <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Timely Filing</h4>
              <p className="text-sm text-muted-foreground">Never miss a deadline with our tracking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;