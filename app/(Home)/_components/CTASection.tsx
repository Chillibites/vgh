import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
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
  );
} 