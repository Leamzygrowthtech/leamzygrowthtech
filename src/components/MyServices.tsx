
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const MyServices = () => {
  const services = [
    {
      title: 'Google My Business Optimization',
      features: [
        'Complete GMB profile setup and optimization',
        'Local SEO strategies to improve visibility'
      ]
    },
    {
      title: 'Online Review Generation',
      features: [
        'Authentic review acquisition strategies',
        'Result-based review campaigns that convert'
      ]
    },
    {
      title: 'Reputation Management',
      features: [
        'Monitor and respond to customer feedback',
        'Crisis management and brand protection'
      ]
    },
    {
      title: 'Business Branding & Strategy',
      features: [
        'Brand identity development and positioning',
        'Strategic planning for sustainable growth'
      ]
    },
    {
      title: 'Website or Portfolio Setup Guidance',
      features: [
        'Professional website development consultation',
        'Portfolio optimization for maximum impact'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              My Services
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
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-600 text-sm flex items-start">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-3"
          >
            Let's Work – Chat on WhatsApp
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MyServices;
