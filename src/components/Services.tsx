import { Search, Users, Target, Globe, BarChart, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
const Services = () => {
  const services = [{
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost your search rankings and organic traffic with our comprehensive SEO strategies and technical optimization.',
    features: ['Keyword Research', 'Technical SEO', 'Content Optimization', 'Link Building']
  }, {
    icon: Users,
    title: 'Social Media Marketing',
    description: 'Build brand awareness and engage your audience across all major social media platforms.',
    features: ['Content Creation', 'Community Management', 'Paid Social Ads', 'Analytics']
  }, {
    icon: Target,
    title: 'PPC Advertising',
    description: 'Drive targeted traffic and maximize ROI with our data-driven pay-per-click advertising campaigns.',
    features: ['Google Ads', 'Facebook Ads', 'Campaign Optimization', 'ROI Tracking']
  }, {
    icon: Globe,
    title: 'Website Development',
    description: 'Create stunning, responsive websites that convert visitors into customers and drive business growth.',
    features: ['Responsive Design', 'E-commerce', 'CMS Integration', 'Performance Optimization']
  }, {
    icon: BarChart,
    title: 'Analytics & Reporting',
    description: 'Make informed decisions with comprehensive analytics, tracking, and detailed performance reports.',
    features: ['Google Analytics', 'Custom Dashboards', 'Performance Reports', 'Data Insights']
  }, {
    icon: Zap,
    title: 'Digital Strategy',
    description: 'Develop comprehensive digital strategies that align with your business goals and drive sustainable growth.',
    features: ['Market Research', 'Competitor Analysis', 'Growth Planning', 'Strategic Consulting']
  }];
  return <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions tailored to accelerate your business growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4 text-base">
                  {service.description}
                </CardDescription>
                <ul className="text-sm text-gray-500 space-y-2">
                  {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center justify-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-2"></span>
                      {feature}
                    </li>)}
                </ul>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Services;