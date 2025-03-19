"use client"
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const faqs = [
    {
      question: "What comprehensive logistics and shipping services do you offer?",
      answer:
        "We provide a complete range of logistics solutions, including domestic road freight, international shipping, air freight, and specialized freight forwarding. Our services are tailored to ensure efficient, cost-effective, and secure delivery of your goods."
    },
    {
      question: "How do your international shipping and freight forwarding services work?",
      answer:
        "Our international shipping solutions streamline your supply chain by managing customs clearance, documentation, and providing real-time tracking. We ensure that your shipment arrives on schedule while maintaining the highest standards of safety and reliability."
    },
    {
      question: "How can I request a personalized shipping quote?",
      answer:
        "Requesting a quote is easy—visit our Get Quote page or contact our dedicated 24/7 support team. We assess your shipping requirements and offer a customized quote that fits your timeline and budget, ensuring transparency every step of the way."
    },
    {
      question: "What tracking and customer support options do you provide?",
      answer:
        "We offer robust shipment monitoring with real-time updates and proactive notifications. In addition, our expert customer support, available around the clock, is always ready to assist you with any questions or concerns during the shipping process."
    }
  ];

  // Create structured data for FAQPage to help search engines understand the content.
  const structuredFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Explore our in-depth FAQs to learn how our comprehensive logistics and shipping services can streamline your supply chain.
          </p>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group hover:shadow-xl transition-shadow duration-300 border-none bg-white dark:bg-gray-800 p-6 rounded-lg"
            >
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-xl">
                {faq.question}
                <ChevronDown className="ml-2 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredFAQ) }}
      />
    </section>
  );
} 