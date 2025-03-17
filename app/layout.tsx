import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VGH Logistics - Professional Logistics and Transportation Solutions',
  description:
    'Experience reliable and efficient logistics services across the UK and Europe with VGH Logistics. Our innovative solutions and dedicated team ensure your shipments arrive on schedule, enhancing your business efficiency.',
  keywords:
    'logistics, transportation, road freight, international shipping, express delivery, UK, Europe, haulage, VGH Logistics',
  openGraph: {
    title: 'VGH Logistics - Professional Logistics and Transportation Solutions',
    description:
      'Experience reliable and efficient logistics services across the UK and Europe with VGH Logistics. Discover our innovative solutions for streamlining your transportation operations.',
    //url: 'https://www.vghlogistics.com',
    siteName: 'VGH Logistics',
    //images: [
      //{
        //url: 'https://www.vghlogistics.com/og-image.jpg',
        //width: 1200,
        //height: 630,
        //alt: 'VGH Logistics Hero Image',
      //},
    //],
    //type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VGH Logistics - Professional Logistics and Transportation Solutions',
    description:
      'Experience reliable and efficient logistics services across the UK and Europe with VGH Logistics.',
    //images: ['https://www.vghlogistics.com/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}