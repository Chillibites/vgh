import { Card, CardContent } from '@/components/ui/card';
import { Truck, Globe, Clock } from 'lucide-react';

const services = [
  {
    icon: <Truck className="h-10 w-10" />, 
    title: 'Road Freight',
    description: 'Efficient road transportation across the UK and Europe'
  },
  {
    icon: <Globe className="h-10 w-10" />, 
    title: 'International',
    description: 'Global logistics services and solutions'
  },
  {
    icon: <Clock className="h-10 w-10" />, 
    title: '24/7 Support',
    description: 'Round-the-clock customer service'
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Comprehensive logistics solutions tailored to meet your business needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-none bg-white dark:bg-gray-800"
            >
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
  );
} 