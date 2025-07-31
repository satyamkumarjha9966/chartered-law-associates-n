import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Linkedin, 
  MessageSquare,
  ArrowRight,
  Scale
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "GST Registration & Filing",
    "Income Tax Returns",
    "Company Registration",
    "Legal Notice & Representation",
    "Business Compliance",
    "Trademark & IP Services"
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "#blog" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "Disclaimer", href: "#disclaimer" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              {/* <h2 className="font-heading text-2xl font-bold mb-2">
                LegalAdvise<span className="text-accent">Pro</span>
              </h2> */}
              <div className="flex-shrink-0 h-[100px] w-[100px] flex justify-content-center items-center rounded-full overflow-hidden mb-2">
                <img src="/CLA.jpg" alt="CHARTERED LAW ASSOCIATES" className="w-[100px] h-[100px] rounded-full" />
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Your trusted partner for tax and legal consulting. Simplifying compliance 
                and empowering businesses for over a decade.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+911234567890" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  +91 123-456-7890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:info@legaladvisepro.com" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  info@legaladvisepro.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-1" />
                <div className="text-primary-foreground/80">
                  <div>123 Business District</div>
                  <div>Mumbai, Maharashtra 400001</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold text-primary-foreground mb-3">Follow Us</h3>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-bold text-primary-foreground mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                  >
                    <Scale className="w-3 h-3 text-accent" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold text-primary-foreground mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="font-semibold text-primary-foreground mb-3 text-sm">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-primary-foreground/60 hover:text-accent transition-colors text-xs block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading text-lg font-bold text-primary-foreground mb-6">
              Stay Updated
            </h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Subscribe to our newsletter for latest tax updates, compliance tips, and legal insights.
            </p>
            
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="accent" size="sm" className="w-full group">
                Subscribe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Certifications */}
            <div className="mt-8">
              <h4 className="font-semibold text-primary-foreground mb-3 text-sm">Certifications</h4>
              <div className="flex gap-2">
                <div className="w-12 h-8 bg-primary-foreground/10 rounded border border-primary-foreground/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-accent">CA</span>
                </div>
                <div className="w-12 h-8 bg-primary-foreground/10 rounded border border-primary-foreground/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-accent">LLB</span>
                </div>
                <div className="w-12 h-8 bg-primary-foreground/10 rounded border border-primary-foreground/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-accent">CS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {currentYear} LegalAdvisePro. All rights reserved. | Powered by expertise, driven by results.
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-primary-foreground/60">Licensed & Insured</span>
              <span className="text-primary-foreground/60">•</span>
              <span className="text-primary-foreground/60">ISO Certified</span>
              <span className="text-primary-foreground/60">•</span>
              <span className="text-accent font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;