import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
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
  );
} 