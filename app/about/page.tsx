import type { Metadata } from "next";
import Image from "next/image";
import { Shield, Lightbulb, Award } from "lucide-react";

// Export metadata for SEO and document info
export const metadata: Metadata = {
  title: "About Varzim General Haulage - Leading Freight & Logistics Solutions",
  description:
    "Discover the story behind Varzim General Haulage, your trusted partner for innovative and reliable freight and logistics solutions across the UK and Europe. Our commitment to technology, integrity, and excellence drives our on-time delivery experience.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-64 md:h-96">
        <Image
          src="/about-hero.jpeg"
          alt="About Varzim General Haulage: Leading Freight & Logistics Solutions"
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
                At Varzim General Haulage, our journey in the logistics and freight transport industry began with a passion for excellence and a commitment to delivering unparalleled transportation solutions. Founded on core values of trust, reliability, and innovation, we recognized early on that outstanding service is the cornerstone of effective supply chain management—connecting businesses across the UK and Europe.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Over the years, we have continuously refined our processes by integrating state-of-the-art technology, streamlining operations, and enhancing customer experiences. Whether coordinating time-sensitive shipments or managing complex cross-border logistics, our dedication to precise planning and on-time deliveries ensures that every consignment is handled with exceptional care.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/warehouse.jpeg"
                alt="Varzim General Haulage Warehouse: Modern Logistics Hub"
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
              Our core values of integrity, innovation, and excellence drive every decision we make. These guiding principles empower us to overcome challenges and deliver custom transportation solutions that meet your unique logistics needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 inline-block text-white">
                <Shield className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p>
                We operate with utmost transparency and honesty, building lasting trust with every client.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-block text-white">
                <Lightbulb className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p>
                Continuously integrating cutting-edge technology and creative strategies to elevate our logistics services.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-block text-white">
                <Award className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p>
                Committed to delivering quality services that consistently exceed expectations in freight delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 