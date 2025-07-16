
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const MyServices = () => {
  const whatsappLink = "https://wa.me/2348024073215?text=Hi%20Leamzy,%20I%20want%20to%20grow%20my%20business";

  const services = [
    {
      title: 'Google My Business Optimization',
      description: 'Boost your visibility on Google Search & Maps. I help you appear where your customers are searching.'
    },
    {
      title: 'Authentic Review Generation',
      description: 'Get real customer reviews that build trust and increase local ranking.'
    },
    {
      title: 'Reputation Management',
      description: 'Fix your online presence. I help you control how your brand looks online—good reviews, clean image.'
    },
    {
      title: 'Paid Ads Campaigns (Google & Social)',
      description: 'Reach thousands fast with targeted ad campaigns that convert viewers to paying customers.'
    },
    {
      title: 'Brand Strategy & Setup',
      description: 'I guide you in building a strong brand identity—logo, tone, target audience, digital setup.'
    },
    {
      title: 'Website / Portfolio Creation Guidance',
      description: 'Need a site like this? I\'ll help you build one that\'s fast, mobile-friendly, and client-ready.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              FULL MARKETING
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital growth solutions to boost your online presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-3"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Let's Work – Chat Me on WhatsApp
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MyServices;
