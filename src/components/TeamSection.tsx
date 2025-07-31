import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Calendar, Award, Linkedin, Mail, Phone } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "CA Rajesh Kumar Sharma",
      position: "Founder & Managing Partner",
      specialization: "Tax Law & GST Compliance",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      qualifications: ["CA", "LLB", "CS"],
      experience: "15+ Years",
      clientsHandled: "500+", 
      location: "Delhi NCR",
      achievements: [
        "National Award for Tax Excellence 2023",
        "Featured in Business Today as Top CA",
        "Speaker at National Tax Conferences"
      ],
      expertise: [
        "Corporate Tax Planning",
        "GST Implementation & Compliance", 
        "Legal Dispute Resolution",
        "Business Restructuring"
      ],
      bio: "A seasoned Chartered Accountant with extensive experience in tax planning and legal compliance. Has successfully handled complex corporate tax matters and GST implementations for multinational companies.",
      contact: {
        email: "rajesh@taxlegaladvisors.com",
        phone: "+91-9876543210",
        linkedin: "rajesh-kumar-ca"
      }
    },
    {
      id: 2,
      name: "Adv. Priya Mehta",
      position: "Senior Legal Counsel",
      specialization: "Corporate Law & Compliance",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      qualifications: ["LLM", "BBA-LLB"],
      experience: "12+ Years",
      clientsHandled: "300+",
      location: "Mumbai",
      achievements: [
        "Successfully defended 50+ corporate legal cases",
        "Legal Excellence Award 2022",
        "Published author on Corporate Compliance"
      ],
      expertise: [
        "Corporate Legal Advisory",
        "Contract Drafting & Review",
        "Mergers & Acquisitions",
        "Regulatory Compliance"
      ],
      bio: "Expert corporate lawyer specializing in business law, compliance, and legal risk management. Known for strategic legal solutions that protect business interests.",
      contact: {
        email: "priya@taxlegaladvisors.com", 
        phone: "+91-9876543211",
        linkedin: "priya-mehta-advocate"
      }
    },
    {
      id: 3,
      name: "CA Amit Patel",
      position: "Tax Consultant & Partner",
      specialization: "Income Tax & Financial Planning",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      qualifications: ["CA", "CFA"],
      experience: "10+ Years",
      clientsHandled: "400+",
      location: "Bangalore",
      achievements: [
        "Certified Financial Analyst",
        "Tax Savings Expert of the Year 2023",
        "Helped clients save ₹10+ Crores in taxes"
      ],
      expertise: [
        "Personal Income Tax Planning",
        "Investment Tax Strategies",
        "Startup Tax Compliance",
        "Financial Risk Assessment"
      ],
      bio: "Dynamic CA with dual expertise in taxation and financial planning. Specializes in optimizing tax strategies for individuals and growing businesses.",
      contact: {
        email: "amit@taxlegaladvisors.com",
        phone: "+91-9876543212", 
        linkedin: "amit-patel-ca-cfa"
      }
    },
    {
      id: 4,
      name: "CS Sneha Agarwal",
      position: "Company Secretary & Compliance Head",
      specialization: "Corporate Governance & Secretarial",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      qualifications: ["CS", "LLB", "MBA"],
      experience: "8+ Years",
      clientsHandled: "250+",
      location: "Pune",
      achievements: [
        "Excellence in Corporate Governance 2023",
        "Successfully incorporated 100+ companies",
        "Expert in ROC Compliance"
      ],
      expertise: [
        "Company Incorporation",
        "Board Meeting Procedures",
        "ROC Compliance Management",
        "Corporate Restructuring"
      ],
      bio: "Experienced Company Secretary ensuring seamless corporate governance and regulatory compliance for businesses of all sizes.",
      contact: {
        email: "sneha@taxlegaladvisors.com",
        phone: "+91-9876543213",
        linkedin: "sneha-agarwal-cs"
      }
    },
    {
      id: 5,
      name: "Adv. Vikram Singh",
      position: "Litigation Partner",
      specialization: "Tax Disputes & Legal Representation",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      qualifications: ["LLM", "Diploma in Taxation"],
      experience: "14+ Years",
      clientsHandled: "200+",
      location: "Delhi NCR",
      achievements: [
        "Won 90% of tax dispute cases",
        "Supreme Court practicing advocate",
        "Landmark victory in GST penalty case"
      ],
      expertise: [
        "Tax Litigation & Appeals",
        "High Court Representations",
        "Legal Notice Drafting",
        "Settlement Negotiations"
      ],
      bio: "Formidable litigator with extensive experience in tax disputes and legal representations at various judicial forums.",
      contact: {
        email: "vikram@taxlegaladvisors.com",
        phone: "+91-9876543214",
        linkedin: "vikram-singh-advocate"
      }
    },
    {
      id: 6,
      name: "CA Meera Joshi",
      position: "GST Specialist",
      specialization: "GST Compliance & Advisory",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      qualifications: ["CA", "Diploma in GST"],
      experience: "6+ Years",
      clientsHandled: "350+",
      location: "Chennai", 
      achievements: [
        "GST Expert Certification",
        "Filed 2000+ GST returns with 100% accuracy",
        "GST Training Specialist"
      ],
      expertise: [
        "GST Registration & Filing",
        "Input Tax Credit Optimization",
        "GST Audit & Assessment",
        "Multi-state GST Compliance"
      ],
      bio: "GST specialist with deep understanding of indirect tax laws and compliance requirements across various business verticals.",
      contact: {
        email: "meera@taxlegaladvisors.com",
        phone: "+91-9876543215",
        linkedin: "meera-joshi-gst-ca"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Our Expert <span className="text-accent">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our qualified professionals who bring decades of combined experience in tax law, compliance, and legal advisory services.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="group hover:shadow-elegant transition-all duration-300 overflow-hidden">
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-4">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-accent/20 group-hover:border-accent/40 transition-colors"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                    <Award className="w-4 h-4" />
                  </div>
                </div>
                
                <CardTitle className="text-xl group-hover:text-accent transition-colors">
                  {member.name}
                </CardTitle>
                <CardDescription className="font-medium text-accent">
                  {member.position}
                </CardDescription>
                <p className="text-sm text-muted-foreground">
                  {member.specialization}
                </p>
                
                <div className="flex flex-wrap justify-center gap-2 mt-3">
                  {member.qualifications.map((qual, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {qual}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-background rounded-lg p-3">
                    <Calendar className="w-4 h-4 text-accent mx-auto mb-1" />
                    <div className="text-sm font-bold">{member.experience}</div>
                    <div className="text-xs text-muted-foreground">Experience</div>
                  </div>
                  <div className="bg-background rounded-lg p-3">
                    <Users className="w-4 h-4 text-accent mx-auto mb-1" />
                    <div className="text-sm font-bold">{member.clientsHandled}</div>
                    <div className="text-xs text-muted-foreground">Clients</div>
                  </div>
                  <div className="bg-background rounded-lg p-3">
                    <MapPin className="w-4 h-4 text-accent mx-auto mb-1" />
                    <div className="text-sm font-bold text-center">{member.location}</div>
                    <div className="text-xs text-muted-foreground">Location</div>
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <h4 className="font-semibold mb-2 text-sm">About</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Expertise */}
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Expertise</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {member.expertise.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{member.expertise.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Key Achievements</h4>
                  <ul className="space-y-1">
                    {member.achievements.slice(0, 2).map((achievement, index) => (
                      <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                        <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div className="pt-4 border-t border-border">
                  <div className="flex justify-center gap-3">
                    <a 
                      href={`mailto:${member.contact.email}`}
                      className="bg-accent/10 hover:bg-accent hover:text-accent-foreground p-2 rounded-full transition-colors"
                      title="Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a 
                      href={`tel:${member.contact.phone}`}
                      className="bg-accent/10 hover:bg-accent hover:text-accent-foreground p-2 rounded-full transition-colors"
                      title="Phone"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                    <a 
                      href={`https://linkedin.com/in/${member.contact.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-accent/10 hover:bg-accent hover:text-accent-foreground p-2 rounded-full transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-gradient-accent rounded-2xl p-8 text-center text-accent-foreground">
          <h3 className="text-2xl font-bold mb-6">Our Team Strength</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2000+</div>
              <div className="text-sm opacity-90">Clients Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5</div>
              <div className="text-sm opacity-90">Cities Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;