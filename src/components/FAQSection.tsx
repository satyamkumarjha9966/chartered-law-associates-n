import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      id: "faq-1",
      question: "What documents are needed for GST filing?",
      answer: "For GST filing, you'll need: PAN card, Aadhaar card, business registration certificate, bank statements, purchase and sales invoices, input tax credit documents, and previous GST returns. Our team will guide you through the complete document checklist."
    },
    {
      id: "faq-2", 
      question: "Can I get legal consultation online?",
      answer: "Yes, we offer comprehensive online legal consultations via video calls, phone calls, and WhatsApp. Our digital consultation process is secure, convenient, and just as effective as in-person meetings. We can handle document review and legal advice remotely."
    },
    {
      id: "faq-3",
      question: "Do you handle business registration?",
      answer: "Absolutely! We handle all types of business registrations including Private Limited Company, LLP, Partnership Firm, Sole Proprietorship, and OPC registration. We also assist with licenses like GST, FSSAI, Shop & Establishment, and more."
    },
    {
      id: "faq-4",
      question: "How long does ITR filing take?",
      answer: "ITR filing typically takes 2-5 business days depending on the complexity of your financial situation. For salaried individuals with straightforward income, it's usually completed within 2 days. For businesses with multiple income sources, it may take up to 5 days."
    },
    {
      id: "faq-5",
      question: "What are your consultation charges?",
      answer: "We offer a FREE initial consultation to understand your requirements. Paid consultations start from ₹500 for basic queries. For comprehensive legal advice and ongoing support, we have monthly retainer packages starting from ₹2,000."
    },
    {
      id: "faq-6",
      question: "Do you provide compliance calendar?",
      answer: "Yes, we provide a personalized compliance calendar for all our clients. This includes due dates for GST returns, ITR filing, TDS payments, and other regulatory compliances specific to your business type and requirements."
    },
    {
      id: "faq-7",
      question: "How do you ensure data security?",
      answer: "We follow strict data protection protocols including encrypted file transfers, secure cloud storage, limited access controls, and confidentiality agreements. All client documents are handled with complete privacy and deleted as per retention policies."
    },
    {
      id: "faq-8",
      question: "Can you represent us in tax disputes?",
      answer: "Yes, our experienced team can represent you in tax disputes, appeals, and legal proceedings. We handle GST disputes, income tax appeals, penalty matters, and provide strong legal representation before tax authorities."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="bg-accent/10 p-4 rounded-full">
              <HelpCircle className="w-8 h-8 text-accent" />
            </div>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get quick answers to common questions about our tax and legal services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="bg-background border border-border rounded-lg px-6 shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-accent transition-colors py-6 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+91-9876543210" 
              className="inline-flex items-center justify-center bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-accent transition-all duration-300"
            >
              Call Us Now
            </a>
            <a 
              href="https://wa.me/919876543210" 
              className="inline-flex items-center justify-center border border-accent text-accent px-6 py-3 rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;