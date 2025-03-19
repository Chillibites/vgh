import HeroSection from '@/app/(Home)/_components/HeroSection';
import ServicesSection from '@/app/(Home)/_components/ServicesSection';
import AboutSection from '@/app/(Home)/_components/AboutSection';
import FAQSection from '@/app/(Home)/_components/FAQSection';
import ContactSection from '@/app/(Home)/_components/ContactSection';
import CTASection from '@/app/(Home)/_components/CTASection';

export const metadata = {
  title: 'Home - VGH Logistics',
  description: 'Professional Logistics Solutions for Your Business'
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
      <CTASection />
    </main>
  );
}