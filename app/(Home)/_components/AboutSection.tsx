import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const features = [
  'Industry-leading technology and tracking systems',
  'Experienced and professional team',
  'Sustainable and eco-friendly solutions',
  'Competitive pricing and flexible options'
];

export default function AboutSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold mb-6">About VGH</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              With years of experience in the logistics industry, we provide reliable and efficient transportation solutions tailored to your needs. Our commitment to excellence and customer satisfaction sets us apart.
            </p>
            <ul className="space-y-4 mb-8">
              {features.map((item, index) => (
                <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                  <div className="h-2 w-2 bg-primary rounded-full mr-3" />{item}
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
  );
} 