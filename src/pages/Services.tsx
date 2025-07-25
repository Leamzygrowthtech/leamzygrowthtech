
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const whatsappLink = "https://wa.me/2348024073215?text=Hi%20Leamzy,%20I%20want%20to%20grow%20my%20business";
  
  const services = [
    {
      title: 'Google My Business Optimization',
      description: 'Boost your visibility on Google Search & Maps. I help you appear where your customers are searching.',
      price: 'Starting at $100/month',
      features: [
        'Complete GMB profile setup and optimization',
        'Local SEO strategies implementation', 
        'Enhanced local search rankings',
        'Photo and post optimization',
        'Regular profile monitoring',
        'Monthly performance reports'
      ],
      popular: true
    },
    {
      title: 'Authentic Review Generation',
      description: 'Get real customer reviews that build trust and increase local ranking.',
      price: 'Starting at $150/month',
      features: [
        'Authentic review acquisition strategies',
        'Result-based review campaigns',
        'Review response management',
        'Review platform optimization',
        'Customer feedback systems',
        'Reputation tracking'
      ],
      popular: false
    },
    {
      title: 'Reputation Management',
      description: 'Fix your online presence. I help you control how your brand looks online—good reviews, clean image.',
      price: 'Starting at $400/month',
      features: [
        'Real-time reputation monitoring',
        'Crisis management strategies',
        'Brand protection protocols',
        'Negative review mitigation',
        'Online mention tracking',
        'Reputation recovery campaigns'
      ],
      popular: false
    },
    {
      title: 'Paid Ads Campaigns (Google & Social)',
      description: 'Reach thousands fast with targeted ad campaigns that convert viewers to paying customers.',
      price: 'Starting at $500/month',
      features: [
        'Google Ads campaign setup',
        'Facebook & Instagram advertising',
        'Targeted audience research',
        'Ad copy and creative development',
        'Campaign optimization',
        'ROI tracking and reporting'
      ],
      popular: false
    },
    {
      title: 'Brand Strategy & Setup',
      description: 'I guide you in building a strong brand identity—logo, tone, target audience, digital setup.',
      price: 'Starting at $800/month',
      features: [
        'Brand identity development',
        'Strategic market positioning',
        'Logo and visual identity',
        'Brand messaging optimization',
        'Target audience research',
        'Strategic consulting sessions'
      ],
      popular: false
    },
    {
      title: 'Website / Portfolio Creation Guidance',
      description: 'Need a site like this? I\'ll help you build one that\'s fast, mobile-friendly, and client-ready.',
      price: 'Starting at $400',
      features: [
        'Custom website design',
        'Responsive development',
        'SEO-friendly architecture',
        'Conversion optimization',
        'Performance optimization',
        'Ongoing maintenance support'
      ],
      popular: false
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business, competitors, and market to understand your unique challenges and opportunities.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Our team creates a customized digital marketing strategy tailored to your specific goals and budget.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We execute the strategy with precision, utilizing cutting-edge tools and proven methodologies.'
    },
    {
      step: '04',
      title: 'Optimization & Growth',
      description: 'Continuous monitoring, testing, and optimization to ensure maximum ROI and sustainable growth.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              FULL MARKETING
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive digital growth solutions to boost your online presence
            and maximize your business potential.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`relative hover:shadow-2xl transition-all duration-300 border-0 shadow-lg ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="flex items-start mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <CardTitle className="text-lg font-bold text-gray-900 text-left">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 mt-2 text-left text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="text-2xl font-bold text-blue-600 mt-4">{service.price}</div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700" asChild>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Our Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that delivers consistent results for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business goals and drive sustainable growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Schedule Free Consultation
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/portfolio">
                View Our Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
