'use client'
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Founder, TechStart Solutions",
      image: "PS",
      rating: 5,
      text: "LegalAdvisePro made our company registration process incredibly smooth. Their expertise in compliance saved us months of paperwork and potential legal issues. Highly recommended!"
    },
    {
      name: "Amit Patel",
      role: "Managing Director, Patel Industries",
      image: "AP",
      rating: 5,
      text: "Their GST filing services are top-notch. We've been working with them for 3 years and they've never missed a deadline. Professional, reliable, and cost-effective."
    },
    {
      name: "Sunita Reddy",
      role: "CEO, GreenTech Innovations",
      image: "SR",
      rating: 5,
      text: "When we faced a complex tax audit, their team guided us through every step. Their expertise saved us ₹5 lakhs in penalties. Truly grateful for their support."
    },
    {
      name: "Rajesh Kumar",
      role: "Director, Kumar Exports",
      image: "RK",
      rating: 5,
      text: "Exceptional service for trademark registration and IP protection. They explained every detail clearly and ensured our brand was properly protected."
    },
    {
      name: "Meera Singh",
      role: "Owner, Singh Consultancy",
      image: "MS",
      rating: 5,
      text: "Their business compliance advisory helped us avoid major regulatory issues. The team is knowledgeable, responsive, and always available when needed."
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <Card className="bg-card border-0 shadow-large overflow-hidden">
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 p-8 md:p-12">
                      <div className="text-center">
                        {/* Quote Icon */}
                        <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                          <Quote className="w-8 h-8 text-accent-foreground" />
                        </div>

                        {/* Stars */}
                        <div className="flex justify-center gap-1 mb-6">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className={`w-5 h-5 ${star <= testimonial.rating ? 'text-accent fill-current' : 'text-muted'}`} 
                            />
                          ))}
                        </div>

                        {/* Testimonial Text */}
                        <blockquote className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed italic max-w-3xl mx-auto">
                          "{testimonial.text}"
                        </blockquote>

                        {/* Client Info */}
                        <div className="flex items-center justify-center gap-4">
                          <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                            <span className="text-accent-foreground font-bold text-sm">
                              {testimonial.image}
                            </span>
                          </div>
                          <div className="text-left">
                            <div className="font-semibold text-primary">{testimonial.name}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-accent scale-125' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-xl p-8 shadow-medium max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-primary mb-4">
              Join Our Happy Clients
            </h3>
            <p className="text-muted-foreground mb-6">
              Experience the same level of professional service and expertise that our clients rave about.
            </p>
            <Button variant="accent" size="lg">
              Start Your Journey Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;