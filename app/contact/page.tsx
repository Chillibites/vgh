import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';

// Adding metadata export improves SEO and readability.
export const metadata = {
  title: 'Contact Us',
  description: 'Reach out to us via phone or email to discuss your project or ask any questions.'
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-64 md:h-80">
        <Image
          src="/contact-hero.jpg"
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold">Contact Us</h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                We&apos;d love to hear from you! Whether you have a question about our services, need support, or want to discuss a potential project, our team is here to assist you.
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
            
            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
} 