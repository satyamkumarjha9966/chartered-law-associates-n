"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Blogs", href: "/blogs" },
  ];

  return (
    <header className="bg-background shadow-soft sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a
              href="tel:+911234567890"
              className="flex items-center gap-1 hover:text-accent transition-colors"
            >
              <Phone className="w-3 h-3" />
              +91 123-456-7890
            </a>
            <a
              href="mailto:info@lawfirm.com"
              className="flex items-center gap-1 hover:text-accent transition-colors"
            >
              <Mail className="w-3 h-3" />
              info@lawfirm.com
            </a>
          </div>
          <div className="hidden md:block">
            <span className="text-accent font-medium">
              Free Consultation Available
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 h-[62px] w-[62px] flex justify-content-center items-center rounded-full overflow-hidden">
              {/* <h1 className="font-heading text-2xl font-bold text-primary">
                LegalAdvise<span className="text-accent">Pro</span>
              </h1> */}
              <Link href={"/"}>
                <img
                  src="/CLA.jpg"
                  alt="CHARTERED LAW ASSOCIATES"
                  className="w-[62px] h-[62px] rounded-full"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-accent px-3 py-2 text-sm font-medium transition-colors font-body"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button variant="accent" size="sm">
                Free Consultation
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-accent"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-accent block px-3 py-2 text-base font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button variant="accent" size="sm" className="w-full">
                  Free Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
