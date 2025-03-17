import Image from 'next/image';
import { Shield, Lightbulb, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-64 md:h-96">
        <Image
          src="/about-hero.jpeg"
          alt="About Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold drop-shadow-lg">
            About Varzim General Haulage
          </h1>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Founded on the principles of reliability and innovation, Varzim General Haulage has been providing top-notch 
                solutions for transportation across the UK and Europe. We pride ourselves on our professional 
                approach and the unwavering trust our clients place in us.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Over the years, we have evolved to meet the dynamic changes in the logistics industry. Our team is committed 
                to embracing new technologies and strategies to ensure that every shipment is handled with care and precision.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/warehouse.jpeg"
                alt="Our Story"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p>
              We believe in core values that drive our success and commitment to our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 inline-block text-white">
                <Shield className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p>
                We operate with utmost transparency and honesty, building trust with every client.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-block text-white">
                <Lightbulb className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p>
                Continuously improving and integrating cutting-edge technology to enhance our services.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-block text-white">
                <Award className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p>
                Delivering quality services that consistently exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 