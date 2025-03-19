"use client"
import { Phone, Mail } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';

export default function ContactSection() {
  return (
    <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Contact us today to discuss your logistics needs and discover how we can help streamline your transportation operations.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-primary mr-4" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    <a href="tel:+447702196382" className="hover:underline hover:text-primary">
                      +44 (0) 7702 196382
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-primary mr-4" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    <a href="mailto:varziminfo@gmail.com" className="hover:underline hover:text-primary">
                      varziminfo@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
} 