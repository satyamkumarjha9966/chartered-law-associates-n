import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Users, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
                About <span className="text-accent">LegalAdvisePro</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                With over a decade of experience in tax and legal consulting, we've built our 
                reputation on delivering simplified legal solutions with unwavering integrity and excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to demystify complex legal processes and make professional 
                legal services accessible to businesses of all sizes. We believe that every 
                entrepreneur deserves expert guidance without the complexity.
              </p>
            </div>

            {/* Mission Statement */}
            <Card className="bg-gradient-card border-0 shadow-soft mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-primary mb-2">Our Mission</h3>
                    <p className="text-muted-foreground">
                      "Delivering simplified legal solutions with integrity and excellence, 
                      empowering businesses to thrive in today's complex regulatory landscape."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-accent" />
                <span className="text-primary font-medium">Client-First Approach</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-accent" />
                <span className="text-primary font-medium">Expert Team</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-primary font-medium">Proven Track Record</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-accent" />
                <span className="text-primary font-medium">Result-Oriented</span>
              </div>
            </div>

            <Button variant="accent" size="lg">
              Meet Our Team
            </Button>
          </div>

          {/* Stats & Visual */}
          <div className="space-y-6">
            {/* Founder Quote */}
            <Card className="bg-primary text-primary-foreground border-0 shadow-medium">
              <CardContent className="p-8">
                <blockquote className="text-lg font-medium mb-4">
                  "Legal complexity shouldn't be a barrier to business success. 
                  Our role is to simplify, protect, and empower every client we serve."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-lg">RS</span>
                  </div>
                  <div>
                    <div className="font-semibold">Rajesh Sharma</div>
                    <div className="text-primary-foreground/80 text-sm">Founder & Managing Partner</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6 bg-gradient-card border-0 shadow-soft">
                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
              <Card className="text-center p-6 bg-gradient-card border-0 shadow-soft">
                <div className="text-3xl font-bold text-accent mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </Card>
              <Card className="text-center p-6 bg-gradient-card border-0 shadow-soft">
                <div className="text-3xl font-bold text-accent mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Cases Handled</div>
              </Card>
              <Card className="text-center p-6 bg-gradient-card border-0 shadow-soft">
                <div className="text-3xl font-bold text-accent mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </Card>
            </div>

            {/* Brief History */}
            <Card className="bg-muted/50 border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-heading text-lg font-bold text-primary mb-3">Our Journey</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Founded in 2014 with a vision to democratize legal services, we've grown from 
                  a small practice to a trusted partner for businesses across India. Our team 
                  combines traditional legal expertise with modern efficiency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;