import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";

const BlogInsightsSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "GST Filing Deadlines 2024: Complete Guide for Businesses",
      summary: "Stay compliant with all GST filing deadlines. Learn about GSTR-1, GSTR-3B, and annual return due dates to avoid penalties.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop",
      date: "2024-01-15",
      readTime: "5 min",
      category: "GST"
    },
    {
      id: 2,
      title: "Income Tax Changes: What Businesses Need to Know",
      summary: "Comprehensive overview of new tax slabs, deductions, and compliance requirements for the current financial year.",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&h=250&fit=crop",
      date: "2024-01-10",
      readTime: "7 min",
      category: "Income Tax"
    },
    {
      id: 3,
      title: "Business Registration: LLP vs Private Limited Company",
      summary: "Compare different business structures to choose the right entity type for your startup or growing business.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      date: "2024-01-05",
      readTime: "6 min",
      category: "Business Law"
    },
    {
      id: 4,
      title: "Legal Notice Essentials: When and How to Send",
      summary: "Learn the proper procedures for sending legal notices, including format, content, and legal implications.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop",
      date: "2023-12-28",
      readTime: "4 min",
      category: "Legal"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Legal <span className="text-accent">Insights</span> & Updates
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with the latest tax regulations, compliance guides, and legal updates from our expert team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-elegant transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <CalendarDays className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="line-clamp-3 mb-4">
                  {post.summary}
                </CardDescription>
                <Button variant="ghost" className="p-0 h-auto font-semibold text-accent hover:text-accent group">
                  Read More 
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogInsightsSection;