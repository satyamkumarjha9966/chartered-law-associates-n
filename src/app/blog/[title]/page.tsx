'use client';
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  ThumbsDown, 
  MessageCircle, 
  Share2, 
  Volume2, 
  Calendar, 
  User, 
  Download, 
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Mail,
  Phone,
  CheckCircle,
  ArrowRight,
  Clock,
  Eye,
  Bookmark
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const BlogPost = () => {
  const [likes, setLikes] = useState(42);
  const [dislikes, setDislikes] = useState(3);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
      if (isDisliked) {
        setDislikes(dislikes - 1);
        setIsDisliked(false);
      }
    }
  };

  const handleDislike = () => {
    if (isDisliked) {
      setDislikes(dislikes - 1);
      setIsDisliked(false);
    } else {
      setDislikes(dislikes + 1);
      setIsDisliked(true);
      if (isLiked) {
        setLikes(likes - 1);
        setIsLiked(false);
      }
    }
  };

  const tags = ["Labour Law", "Compliance", "HR Policy", "Legal Updates", "Employment"];
  const recentBlogs = [
    { title: "GST Compliance for SMEs: A Complete Guide", date: "Jan 15, 2025", image: "https://images.unsplash.com/photo-1527576539890-dfa815648363" },
    { title: "Income Tax Filing Deadlines 2025", date: "Jan 10, 2025", image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a" },
    { title: "EPF Regulations: What Employers Need to Know", date: "Jan 8, 2025", image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742" }
  ];

  const relatedArticles = [
    { title: "Employee Rights and Employer Obligations in 2025", image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833", excerpt: "Understanding the balance between employee rights and employer responsibilities..." },
    { title: "Workplace Safety Regulations: A Comprehensive Overview", image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2", excerpt: "Essential safety protocols every business must implement..." },
    { title: "Contract Labour Laws: Best Practices for Compliance", image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e", excerpt: "Navigate contract labour regulations with confidence..." }
  ];

  const faqs = [
    {
      question: "What are the key changes in labour law compliance for 2025?",
      answer: "The key changes include updated minimum wage requirements, enhanced maternity benefits, stricter overtime regulations, and new digital compliance reporting systems. Employers must also implement updated workplace safety protocols and anti-harassment policies."
    },
    {
      question: "How often should companies review their labour law compliance?",
      answer: "Companies should conduct quarterly reviews of their labour law compliance, with comprehensive annual audits. This ensures they stay current with changing regulations and identify potential issues before they become legal problems."
    },
    {
      question: "What are the penalties for non-compliance with labour laws?",
      answer: "Penalties can range from monetary fines (₹10,000 to ₹5,00,000) to imprisonment (up to 3 years) depending on the violation. Additionally, companies may face business license suspension, reputational damage, and civil lawsuits from affected employees."
    },
    {
      question: "Do labour laws apply to remote workers?",
      answer: "Yes, most labour laws apply to remote workers including working hours, overtime compensation, workplace safety (home office ergonomics), and employee benefits. Employers must ensure compliance regardless of work location."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-primary/60 z-50 transition-all duration-300"
        style={{ width: `${readingProgress}%` }}
      />
      
      <Header />
      
      {/* Hero Section - Full Width with Gradient Overlay */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1527576539890-dfa815648363" 
            alt="Labour Law Compliance" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-end pb-16">
          <div className="max-w-4xl animate-fade-in">
            <div className="flex items-center gap-2 mb-4 text-sm">
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                Legal Update
              </Badge>
              <span className="text-muted-foreground">•</span>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>12 min read</span>
              </div>
              <span className="text-muted-foreground">•</span>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Eye className="w-3 h-3" />
                <span>2.4k views</span>
              </div>
            </div>
            
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Understanding Labour Law 
              <span className="text-primary block md:inline"> Compliance in 2025</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
              Navigate the evolving landscape of labour regulations with comprehensive insights into compliance requirements, recent legal changes, and practical implementation strategies for modern businesses.
            </p>
            
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                    alt="Author" 
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Adv. Rajesh Kumar</p>
                  <p className="text-sm text-muted-foreground">Senior Legal Counsel • TraceLegal</p>
                </div>
              </div>
              
              <Separator orientation="vertical" className="h-12 hidden md:block" />
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>January 20, 2025</span>
                </div>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className="ml-auto"
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-3 space-y-12">
            {/* Introduction */}
            <section className="animate-fade-in">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-primary/20 rounded-full"></div>
                <h2 className="font-heading text-3xl font-bold mb-6 text-foreground">Introduction</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/90 mb-6 leading-relaxed text-lg first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                  Labour law compliance has become increasingly complex in 2025, with significant regulatory changes affecting businesses across all sectors. The evolving legal landscape requires employers to stay vigilant about their obligations while ensuring fair treatment of employees. This comprehensive guide examines the latest developments in labour law and provides actionable strategies for maintaining compliance.
                </p>
                <p className="text-foreground/80 mb-6 leading-relaxed text-lg">
                  Recent amendments to the Industrial Relations Code, 2020, and the Occupational Safety, Health and Working Conditions Code, 2020, have introduced new compliance requirements that directly impact how businesses operate. Understanding these changes is crucial for avoiding legal penalties and fostering positive employee relations.
                </p>
              </div>
            </section>

            {/* Recent Legal Changes */}
            <section className="animate-fade-in">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-primary/20 rounded-full"></div>
                <h2 className="font-heading text-3xl font-bold mb-6 text-foreground">Recent Legal Changes</h2>
              </div>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-foreground/80 mb-6 leading-relaxed text-lg">
                  The Ministry of Labour and Employment has introduced several key changes effective from January 2025. These modifications significantly impact employer obligations and employee rights across various industries.
                </p>
              </div>
              
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="font-heading text-xl font-semibold mb-6 text-primary">Key Legislative Updates</h3>
                  <div className="grid gap-6">
                    <div className="flex items-start gap-4 p-4 bg-background/50 rounded-lg hover:bg-background/80 transition-colors">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Minimum Wage Revision</h4>
                        <p className="text-foreground/80">National floor wage increased to ₹375 per day across all states</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-background/50 rounded-lg hover:bg-background/80 transition-colors">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Digital Compliance Reporting</h4>
                        <p className="text-foreground/80">Mandatory online filing of labour compliance reports through the SHRAM SUVIDHA portal</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-background/50 rounded-lg hover:bg-background/80 transition-colors">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Enhanced Maternity Benefits</h4>
                        <p className="text-foreground/80">Extended paid maternity leave to 26 weeks for all establishments with 10+ employees</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-background/50 rounded-lg hover:bg-background/80 transition-colors">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Gig Worker Protection</h4>
                        <p className="text-foreground/80">New regulations covering platform workers and their social security benefits</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Case Studies */}
            <section className="animate-fade-in">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-primary/20 rounded-full"></div>
                <h2 className="font-heading text-3xl font-bold mb-6 text-foreground">Case Studies</h2>
              </div>
              
              <div className="space-y-8">
                <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-primary/60"></div>
                  <CardHeader className="pl-8">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">Tech Industry</Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      Tech Startup Compliance Challenge
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pl-8 space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-semibold text-sm mb-2 text-primary">Background</h4>
                        <p className="text-foreground/80 text-sm">
                          A Bengaluru-based tech startup with 150 employees faced compliance issues regarding overtime compensation and work-from-home policies.
                        </p>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-semibold text-sm mb-2 text-destructive">Challenge</h4>
                        <p className="text-foreground/80 text-sm">
                          The company was not properly documenting remote work hours, leading to disputes over overtime payments under the new digital work regulations.
                        </p>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-semibold text-sm mb-2 text-green-600">Resolution</h4>
                        <p className="text-foreground/80 text-sm">
                          Implementation of digital time-tracking systems and revised remote work policies resulted in full compliance and improved employee satisfaction.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-primary/60"></div>
                  <CardHeader className="pl-8">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">Manufacturing</Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      Manufacturing Unit Audit Success
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pl-8 space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-semibold text-sm mb-2 text-primary">Background</h4>
                        <p className="text-foreground/80 text-sm">
                          A manufacturing company in Gujarat underwent a labour department audit revealing multiple compliance gaps.
                        </p>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-semibold text-sm mb-2 text-destructive">Challenge</h4>
                        <p className="text-foreground/80 text-sm">
                          Inadequate safety protocols, improper wage calculations, and missing statutory registrations.
                        </p>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-semibold text-sm mb-2 text-green-600">Resolution</h4>
                        <p className="text-foreground/80 text-sm">
                          Comprehensive compliance overhaul including safety training, wage restructuring, and complete documentation resulted in successful audit clearance.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Compliance Checklist */}
            <section className="animate-fade-in">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-primary/20 rounded-full"></div>
                <h2 className="font-heading text-3xl font-bold mb-6 text-foreground">Compliance Checklist</h2>
              </div>
              
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
                <CardContent className="p-8">
                  <h3 className="font-heading text-xl font-semibold mb-6 text-green-700 dark:text-green-400">
                    Essential Compliance Actions for 2025
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      {[
                        "Update employment contracts with new wage structures",
                        "Implement digital attendance tracking systems", 
                        "Conduct workplace safety audits quarterly",
                        "Register on SHRAM SUVIDHA portal",
                        "Update anti-harassment policies"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-background/60 rounded-lg hover:bg-background/80 transition-colors group">
                          <div className="w-6 h-6 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                          </div>
                          <span className="text-foreground text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-4">
                      {[
                        "File annual labour returns on time",
                        "Ensure PF and ESI compliance", 
                        "Maintain proper wage registers",
                        "Conduct employee training on new policies",
                        "Review and update HR policies annually"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-background/60 rounded-lg hover:bg-background/80 transition-colors group">
                          <div className="w-6 h-6 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                          </div>
                          <span className="text-foreground text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Expert Opinions */}
            <section className="animate-fade-in">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-primary/20 rounded-full"></div>
                <h2 className="font-heading text-3xl font-bold mb-6 text-foreground">Expert Opinions</h2>
              </div>
              
              <div className="space-y-6">
                <Card className="relative overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600"></div>
                  <CardContent className="pl-8 pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <blockquote className="text-foreground/90 italic text-lg leading-relaxed mb-4">
                          "The 2025 labour law amendments represent a significant shift towards employee welfare while maintaining business flexibility. Companies that proactively adapt to these changes will find themselves better positioned for sustainable growth."
                        </blockquote>
                        <footer className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                          <div>
                            <p className="font-semibold text-foreground">Dr. Priya Sharma</p>
                            <p className="text-sm text-muted-foreground">Labour Law Expert, Indian Law Institute</p>
                          </div>
                        </footer>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-purple-600"></div>
                  <CardContent className="pl-8 pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <blockquote className="text-foreground/90 italic text-lg leading-relaxed mb-4">
                          "Digital compliance reporting is not just about meeting regulatory requirements—it's about creating transparency and building trust between employers and employees in the modern workplace."
                        </blockquote>
                        <footer className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"></div>
                          <div>
                            <p className="font-semibold text-foreground">Adv. Vikram Mehta</p>
                            <p className="text-sm text-muted-foreground">Senior Partner, Corporate Law Associates</p>
                          </div>
                        </footer>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Google Maps Embed */}
            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold mb-4">Our Locations</h2>
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7085!2d77.2090!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMTInMzIuNCJF!5e0!3m2!1sen!2sin!4v1629875055000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </section>

            {/* Legal Resource Download */}
            <section className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Free Legal Resource
                  </CardTitle>
                  <CardDescription>
                    Download our comprehensive Labour Law Compliance Checklist for 2025
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full md:w-auto">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF Guide
                  </Button>
                </CardContent>
              </Card>
            </section>

            {/* FAQ Section */}
            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Interactive Buttons */}
            <section className="mb-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-4 mb-6">
                    <Button
                      variant={isLiked ? "default" : "outline"}
                      size="sm"
                      onClick={handleLike}
                      className="flex items-center gap-2"
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                      {likes} Like{likes !== 1 ? 's' : ''}
                    </Button>
                    
                    <Button
                      variant={isDisliked ? "destructive" : "outline"}
                      size="sm"
                      onClick={handleDislike}
                      className="flex items-center gap-2"
                    >
                      <ThumbsDown className={`w-4 h-4 ${isDisliked ? 'fill-current' : ''}`} />
                      {dislikes}
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowComments(!showComments)}
                      className="flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Comments
                    </Button>
                    
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Share2 className="w-4 h-4" />
                      Share
                    </Button>
                    
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Volume2 className="w-4 h-4" />
                      Listen
                    </Button>
                  </div>

                  {/* Social Share Buttons */}
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <Twitter className="w-4 h-4" />
                      Twitter
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <Facebook className="w-4 h-4" />
                      Facebook
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Call to Action */}
            <section className="mb-8">
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="pt-6">
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    Need Help Understanding Your Legal Obligations?
                  </h2>
                  <p className="mb-6 opacity-90">
                    Our team of experienced legal professionals is ready to help you navigate complex labour law requirements and ensure your business stays compliant.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact">
                      <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                        <Phone className="w-4 h-4 mr-2" />
                        Get Free Consultation
                      </Button>
                    </Link>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      <Mail className="w-4 h-4 mr-2" />
                      Contact Our Experts
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Comments Section */}
            {showComments && (
              <section className="mb-8">
                <h2 className="font-heading text-2xl font-semibold mb-4">Comments</h2>
                <Card>
                  <CardContent className="pt-6">
                    <form className="space-y-4">
                      <div>
                        <Label htmlFor="comment-name">Name</Label>
                        <Input id="comment-name" placeholder="Your name" />
                      </div>
                      <div>
                        <Label htmlFor="comment-text">Comment</Label>
                        <Textarea 
                          id="comment-text" 
                          placeholder="Share your thoughts..." 
                          rows={4}
                        />
                      </div>
                      <Button type="submit">Submit Comment</Button>
                    </form>
                  </CardContent>
                </Card>
              </section>
            )}
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Author Bio */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                    alt="Author" 
                    className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                  />
                  <h3 className="font-semibold">Adv. Rajesh Kumar</h3>
                  <p className="text-sm text-muted-foreground mb-3">Senior Legal Counsel, LegalAdvisePro</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  With over 15 years of experience in labour law and corporate compliance, 
                  Adv. Kumar specializes in helping businesses navigate complex regulatory 
                  requirements while maintaining operational efficiency.
                </p>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Blogs */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Articles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentBlogs.map((blog, index) => (
                    <div key={index} className="flex gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                      <img 
                        src={blog.image} 
                        alt={blog.title}
                        className="w-16 h-16 rounded object-cover flex-shrink-0"
                      />
                      <div>
                        <h4 className="text-sm font-medium line-clamp-2 mb-1">{blog.title}</h4>
                        <p className="text-xs text-muted-foreground">{blog.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Share */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Share This Article</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Twitter className="w-4 h-4" />
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>

        {/* Related Articles */}
        <section className="mt-12">
          <h2 className="font-heading text-3xl font-semibold mb-8 text-center">Continue Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((article, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-semibold mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{article.excerpt}</p>
                  <div className="flex items-center text-primary font-medium text-sm">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-12">
          <Card className="bg-muted">
            <CardContent className="pt-8">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="font-heading text-2xl font-semibold mb-4">Stay Updated</h2>
                <p className="text-muted-foreground mb-6">
                  Subscribe to our newsletter for the latest legal insights and compliance updates delivered to your inbox.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1"
                  />
                  <Button type="submit" className="sm:w-auto">
                    Subscribe
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;