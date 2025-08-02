'use client';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-radial">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to simplify your legal and tax compliance? Our expert team of chartered accountants 
              and legal professionals is here to provide personalized solutions for your business needs. 
              Schedule a consultation today and discover how we can help you achieve seamless compliance.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-elegant border-0">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        required
                        className="mt-2"
                      />
                    </div>
                    <Button type="submit" variant="accent" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="p-6 bg-gradient-card border-0">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold text-primary mb-2">Phone</h3>
                      <p className="text-muted-foreground">+91 98765 43210 (Tax Queries)</p>
                      <p className="text-muted-foreground">+91 87654 32109 (Legal Consultation)</p>
                      <p className="text-xs text-accent mt-2">
                        Response Time: Within 2 hours during business hours
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-card border-0">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold text-primary mb-2">Email</h3>
                      <p className="text-muted-foreground">info@taxlegaladvisors.com</p>
                      <p className="text-muted-foreground">urgent@taxlegaladvisors.com (Priority)</p>
                      <p className="text-xs text-accent mt-2">
                        Email Response: Within 4 hours on business days
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-card border-0">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold text-primary mb-2">Office Locations</h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-primary font-medium">Mumbai (Head Office)</p>
                          <p className="text-muted-foreground text-sm">
                            123 Business District, Legal Plaza<br />
                            Commercial Street, Mumbai - 400001
                          </p>
                        </div>
                        <div>
                          <p className="text-primary font-medium">Delhi (Branch Office)</p>
                          <p className="text-muted-foreground text-sm">
                            456 Corporate Tower, CP<br />
                            New Delhi - 110001
                          </p>
                        </div>
                        <div>
                          <p className="text-primary font-medium">Bangalore (Regional Office)</p>
                          <p className="text-muted-foreground text-sm">
                            789 Tech Park, Electronic City<br />
                            Bangalore - 560100
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-card border-0">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold text-primary mb-2">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Emergency consultation only
                      </p>
                      <p className="text-xs text-accent mt-2">
                        24/7 support available for urgent compliance matters
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="bg-muted/20 rounded-xl p-1 shadow-soft">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9976876885765!2d72.82767231484114!3d19.00464578707988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce9c0b3d3c7b%3A0x3c3c3c3c3c3c3c3c!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1647234567890!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;