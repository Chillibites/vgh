import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Varzim General Haulage Ltd.</h3>
            <p className="mb-4">
              Professional logistics solutions for businesses across the UK and Europe.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <nav aria-label="Quick Links">
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-primary">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Services</h3>
            <nav aria-label="Services">
              <ul className="space-y-2">
                <li>Road Freight</li>
                <li>International Shipping</li>
                <li>Express Delivery</li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <Link href="tel:+447702196382" className="hover:text-primary">
                  +44 (0) 7702 196382
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <Link
                  href="mailto:varziminfo@gmail.com"
                  className="hover:text-primary"
                >
                  varziminfo@gmail.com
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  href="https://www.facebook.com/varzimHaulage/"
                  className="flex items-center hover:text-white"
                >
                  <FaFacebook className="h-5 w-5" />
                  <span className="ml-2">Facebook</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {currentYear} Varzim General Haulage Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;