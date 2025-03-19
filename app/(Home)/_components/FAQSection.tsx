"use client"
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We provide a variety of logistics services including road freight, international shipments, and 24/7 support to ensure efficient delivery."
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer reliable global logistics solutions to meet the demands of your business wherever you are."
    },
    {
      question: "How can I get a quote for your services?",
      answer:
        "You can visit our Get Quote page or contact us directly through our Contact page for a personalized quote."
    },
    {
      question: "What are your hours of operation?",
      answer:
        "Our customer support team is available 24/7 to assist you with any inquiries."
    }
  ];

  return (
    <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Find answers to some of our top questions below.
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
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
} 