import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Truck, Globe, Clock, ArrowRight, Phone, Mail } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/hero-image.jpg"
          alt="Logistics Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white animate-slide-up">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Professional Logistics Solutions for Your Business
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Delivering excellence across the UK and Europe with reliable, efficient, and sustainable transportation services.
            </p>
            <div className="flex gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Comprehensive logistics solutions tailored to meet your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Truck className="h-10 w-10" />,
                title: 'Road Freight',
                description: 'Efficient road transportation across the UK and Europe',
              },
              {
                icon: <Globe className="h-10 w-10" />,
                title: 'International',
                description: 'Global logistics services and solutions',
              },
              {
                icon: <Clock className="h-10 w-10" />,
                title: '24/7 Support',
                description: 'Round-the-clock customer service',
              },
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-none bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="mb-4 inline-block text-primary group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold mb-6">About VGH</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                With years of experience in the logistics industry, we provide reliable and efficient transportation solutions tailored to your needs. Our commitment to excellence and customer satisfaction sets us apart.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Industry-leading technology and tracking systems',
                  'Experienced and professional team',
                  'Sustainable and eco-friendly solutions',
                  'Competitive pricing and flexible options',
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                    <div className="h-2 w-2 bg-primary rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about">
              <Button variant="outline" className="group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/warehouse.jpeg"
                alt="About VGH"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                  ></textarea>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today to discuss your logistics needs and discover how we can help streamline your transportation operations.
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