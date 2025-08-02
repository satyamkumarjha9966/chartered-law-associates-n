import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Heart, Award, Users, CheckCircle } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our professional dealings."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Clear communication and honest advice in every client interaction."
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Your success is our priority. We tailor solutions to your unique needs."
    }
  ];

  const milestones = [
    { year: "2012", event: "Founded Tax Legal Advisors with a vision to simplify compliance" },
    { year: "2015", event: "Expanded services to include comprehensive business registration" },
    { year: "2018", event: "Achieved 500+ successful client consultations milestone" },
    { year: "2020", event: "Launched digital consultation services during pandemic" },
    { year: "2023", event: "Reached 1000+ clients with 99% satisfaction rate" }
  ];

  const teamMembers = [
    {
      name: "Rajesh Kumar",
      title: "Founding Partner & Senior Advocate",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=300&fit=crop&crop=face",
      experience: "15+ years",
      bio: "B.Com LLB, specializing in corporate law and taxation. Led 500+ successful cases including landmark GST tribunal victories.",
      expertise: "Corporate Law, GST, Income Tax",
      clients: "200+ SMEs, 50+ Corporations"
    },
    {
      name: "Priya Sharma",
      title: "Tax Consultant & CA",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&crop=face",
      experience: "12+ years",
      bio: "Chartered Accountant with expertise in direct and indirect taxation. Helped clients save over ₹2 crores in tax optimization.",
      expertise: "Direct Tax, GST, Financial Advisory",
      clients: "300+ Individual, 80+ Business clients"
    },
    {
      name: "Amit Patel",
      title: "Corporate Legal Advisor",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=300&fit=crop&crop=face",
      experience: "10+ years",
      bio: "LLM in Corporate Law, specializing in labour law compliance and business registrations. Expert in startup legal frameworks.",
      expertise: "Labour Law, Company Law, Compliance",
      clients: "150+ Startups, 100+ Established companies"
    },
    {
      name: "Sneha Gupta",
      title: "Compliance Specialist",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&crop=face",
      experience: "8+ years",
      bio: "MBA Finance with certification in regulatory compliance. Manages EPF, ESIC, and statutory compliance for 200+ companies.",
      expertise: "EPF, ESIC, Statutory Compliance",
      clients: "200+ Companies across India"
    }
  ];

  const successStories = [
    {
      title: "Saved Manufacturing Giant ₹15 Lakhs in Penalties",
      description: "Successfully defended a manufacturing company against GST notices, resulting in complete penalty waiver and restructured compliance framework.",
      industry: "Manufacturing",
      impact: "₹15L penalty waiver + ongoing compliance"
    },
    {
      title: "Startup Legal Framework Setup",
      description: "Provided complete legal and compliance setup for a tech startup from incorporation to Series A funding, ensuring seamless regulatory compliance.",
      industry: "Technology",
      impact: "Series A ready compliance structure"
    },
    {
      title: "Multi-State GST Optimization",
      description: "Restructured GST framework for retail chain across 8 states, optimizing input tax credit and reducing overall tax liability by 12%.",
      industry: "Retail",
      impact: "12% tax reduction across operations"
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
              Who We Are
            </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                With over 15 years of combined expertise, we are India's premier legal and tax advisory firm, 
                serving 1000+ clients across diverse industries. Our mission is to transform complex legal 
                and regulatory landscapes into simplified, actionable solutions that drive business success.
              </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="text-center p-8 bg-gradient-card border-0 shadow-elegant">
                <Target className="w-12 h-12 text-accent mx-auto mb-4" />
                <h2 className="font-heading text-2xl font-bold text-primary mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize legal and tax expertise by delivering simplified, technology-enabled 
                  solutions with unwavering integrity. We empower businesses of all sizes to navigate 
                  complex regulatory frameworks while focusing on growth, innovation, and sustainable success. 
                  Our commitment extends beyond compliance to strategic advisory that transforms legal 
                  requirements into competitive advantages.
                </p>
              </Card>

              <Card className="text-center p-8 bg-gradient-card border-0 shadow-elegant">
                <Eye className="w-12 h-12 text-accent mx-auto mb-4" />
                <h2 className="font-heading text-2xl font-bold text-primary mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To emerge as India's foremost digital-first legal and tax consultancy, recognized 
                  globally for innovative compliance solutions, ethical excellence, and transformational 
                  client outcomes. We envision a future where every business, regardless of size or 
                  complexity, has access to world-class legal expertise that drives growth, ensures 
                  compliance, and creates lasting value for stakeholders.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-primary mb-6">Our Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide every decision we make and every service we provide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="text-center p-8 hover:shadow-large transition-all duration-300 border-0">
                    <IconComponent className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="font-heading text-xl font-bold text-primary mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Company Milestones */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-primary mb-6">Our Journey</h2>
              <p className="text-xl text-muted-foreground">
                Key milestones that have shaped our growth and commitment to excellence.
              </p>
            </div>

            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 border-l-4 border-l-accent">
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary" className="text-accent bg-accent/10 font-bold px-3 py-1">
                      {milestone.year}
                    </Badge>
                    <p className="text-muted-foreground flex-1">{milestone.event}</p>
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-primary mb-6">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experienced professionals dedicated to your legal and tax success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="p-6 hover:shadow-large transition-all duration-300 border-0">
                  <div className="flex items-start gap-4">
                    <div className="relative flex-shrink-0">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-20 h-20 rounded-full object-cover ring-4 ring-accent/20"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-lg font-bold text-primary mb-1">{member.name}</h3>
                      <p className="text-accent text-sm font-medium mb-2">{member.title}</p>
                      <p className="text-muted-foreground text-sm mb-3">{member.bio}</p>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Expertise:</span>
                          <span className="text-primary font-medium">{member.expertise}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Experience:</span>
                          <span className="text-primary font-medium">{member.experience}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Clients Served:</span>
                          <span className="text-primary font-medium">{member.clients}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Client Success Stories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-primary mb-6">Client Success Stories</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real results that demonstrate our commitment to exceptional legal and tax advisory services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {successStories.map((story, index) => (
                <Card key={index} className="p-6 border-l-4 border-l-accent hover:shadow-large transition-all duration-300">
                  <Badge variant="secondary" className="text-accent bg-accent/10 mb-4">
                    {story.industry}
                  </Badge>
                  <h3 className="font-heading text-lg font-bold text-primary mb-3">{story.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{story.description}</p>
                  <div className="text-accent font-semibold text-sm">{story.impact}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-card rounded-xl p-12 text-center">
              <h2 className="font-heading text-3xl font-bold text-primary mb-8">
                Why Businesses Trust Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">1000+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">15+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">99%</div>
                  <div className="text-muted-foreground">Success Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">₹5Cr+</div>
                  <div className="text-muted-foreground">Client Savings Achieved</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;