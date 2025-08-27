"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Zyra and how can it help me?",
      answer: "Zyra is a comprehensive React boilerplate designed to accelerate your development workflow. We provide modern UI components, authentication systems, and development tools to help developers build scalable web applications faster and more efficiently."
    },
    {
      question: "Is my information private and secure?",
      answer: "Absolutely. We take your privacy and security very seriously. All personal information, conversations, and data are encrypted and protected by advanced security measures. Your information is never shared with third parties without your explicit consent."
    },
    {
      question: "What kind of projects is Zyra designed for?",
      answer: "Zyra is designed for modern web applications built with React and Next.js. Whether you're building a SaaS platform, e-commerce site, or internal dashboard, our boilerplate provides the foundation you need to get started quickly."
    },
    {
      question: "How do I get started with Zyra?",
      answer: "Getting started is easy! Simply clone the repository, install dependencies, and you'll have a fully functional application with authentication, UI components, and development tools. Follow our documentation for customization and deployment."
    },
    {
      question: "Are the UI components suitable for beginners?",
      answer: "Yes! Our UI components are designed to be accessible and easy to use for developers of all skill levels. Whether you're just starting with React or looking to enhance your current project, we have components that will meet your needs."
    },
    {
      question: "Can I access Zyra from my mobile device?",
      answer: "Absolutely! Zyra is fully responsive and works seamlessly on all devices including smartphones, tablets, and computers. You can develop and test your applications anytime, anywhere."
    },
    {
      question: "What if I need help or support?",
      answer: "If you need technical support or have questions about implementation, please check our documentation or open an issue on GitHub. Zyra is designed to be self-service but we're here to help when you need it."
    },
    {
      question: "How much does Zyra cost?",
      answer: "Zyra is completely free and open-source! You can use it for personal projects, commercial applications, or contribute to its development. We believe in making powerful development tools accessible to everyone."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            FAQ
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
            Frequently Asked{" "}
            <span className="underline decoration-primary decoration-2 underline-offset-4">
              Questions
            </span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Find answers to common questions about Zyra and our services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden bg-card"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
              >
                <h3 className="text-base font-medium text-foreground pr-3">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-primary" />
                  ) : (
                    <Plus className="w-4 h-4 text-muted-foreground" />
                  )}
                </div>
              </button>
              
              <div
                className={cn(
                  "overflow-hidden transition-all duration-200 ease-in-out",
                  openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="px-4 pb-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-3">
            Still have questions? We&apos;re here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
              Contact Support
            </button>
            <button className="px-4 py-2 border border-border text-foreground rounded-md text-sm font-medium hover:bg-accent transition-colors">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
