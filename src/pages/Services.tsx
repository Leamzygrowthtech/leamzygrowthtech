
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Star, Shield, Target, Globe, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const whatsappLink = "https://wa.me/2348024073215?text=Hi%20Leamzy,%20I%20want%20to%20grow%20my%20business";

  const services = [
    {
      icon: Search,
      title: 'Google My Business Optimization',
      description: 'Maximize your local visibility and attract more customers through optimized GMB profiles.',
      price: 'Starting at $300/month',
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
      icon: Star,
      title: 'Online Review Generation',
      description: 'Build trust and credibility with authentic customer reviews that drive conversions.',
      price: 'Starting at $250/month',
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
      icon: Shield,
      title: 'Reputation Management',
      description: 'Monitor, protect, and enhance your online reputation across all digital platforms.',
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
      icon: Target,
      title: 'Business Branding & Strategy',
      description: 'Develop a compelling brand identity and strategic positioning for sustainable growth.',
      price: 'Starting at $800/month',
      features: [
        'Brand identity development',
        'Strategic market positioning',
        'Competitive analysis',
        'Growth planning strategies',
        'Brand messaging optimization',
        'Strategic consulting sessions'
      ],
      popular: false
    },
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Create professional, conversion-optimized websites that drive business growth.',
      price: 'Starting at $1,200',
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
              Our Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive digital marketing solutions designed to accelerate your business growth 
            and maximize your online presence.
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
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 mt-2">{service.description}</CardDescription>
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
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                    asChild
                  >
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
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-blue-600 hover:bg-gray-100"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Schedule Free Consultation
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <a href="/#services">
                View Our Portfolio
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
