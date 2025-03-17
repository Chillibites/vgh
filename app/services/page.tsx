import Image from 'next/image';
import { Truck, Package, Globe, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
export default function ServicesPage() {
  const services = [
    {
      title: 'Road Freight',
      description:
        'Experience tailored road freight solutions designed to meet the diverse needs of your business. From real-time tracking and advanced route optimization to dedicated customer support, our service leverages a robust network of carriers to ensure your shipments are delivered safely and on schedule. Whether shipping domestically or across borders, our flexible approach guarantees efficiency, reliability, and exceptional service at every turn.',
      icon: <Truck className="h-10 w-10" />,
    },
    {
      title: 'International Shipping',
      description:
        'Expand your business horizons with our international shipping services that simplify global trade. Our expert team navigates customs regulations, documentation, and cross-border challenges while coordinating with a trusted network of global carriers. Enjoy a seamless shipping experience that is both cost-effective and punctual, empowering you to reach new markets with confidence.',
      icon: <Globe className="h-10 w-10" />,
    },
    {
      title: 'Express Delivery',
      description:
        'When time is critical, our express delivery service delivers unparalleled speed and precision. Utilizing expedited routes, priority handling, and real-time tracking, we ensure that your urgent shipments arrive on time without compromising safety. Designed for fast-paced environments, our service combines innovative technology with strategic logistics partnerships to meet the demands of your business.',
      icon: <Clock className="h-10 w-10" />,
    },
  ];

  return (
    <>
      {/* Detailed Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid md:grid-cols-2 gap-12 items-center mb-20 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="relative h-80 rounded-lg overflow-hidden shadow-2xl">
                {/* Replace with an actual image for this service */}
                <Image
                  src={`/service-${index + 1}.jpeg`}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Leverage Our Expertise?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today to discuss your logistics needs and discover how our comprehensive solutions can boost your business efficiency.
          </p>
          <Link href="/contact">
          <Button size="lg" variant="secondary" className="shadow-lg hover:shadow-xl transition-all duration-300">
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          </Link>
        </div>
      </section>
    </>
  );
}