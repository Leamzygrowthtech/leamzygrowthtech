import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, TrendingUp, Users, Eye } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'TechStart Inc. - SaaS Growth',
      category: 'SEO & Content Marketing',
      image: '/lovable-uploads/31cab08a-4c3f-40e8-a311-b7cc6f9a94d6.png',
      results: [
        { metric: 'Organic Traffic', value: '+300%', icon: TrendingUp },
        { metric: 'Lead Generation', value: '+250%', icon: Users },
        { metric: 'Search Visibility', value: '+180%', icon: Eye }
      ],
      description: 'Comprehensive SEO strategy and content marketing campaign that transformed a struggling SaaS startup into a market leader.',
      tags: ['SEO', 'Content Marketing', 'Technical SEO'],
      timeline: '6 months'
    },
    {
      title: 'E-Commerce Plus - PPC Domination',
      category: 'PPC & Social Media',
      image: '/lovable-uploads/16cb8b36-80c7-42ef-9bf0-e2f980f88caa.png',
      results: [
        { metric: 'ROAS', value: '4.5x', icon: TrendingUp },
        { metric: 'Conversion Rate', value: '+220%', icon: Users },
        { metric: 'Ad Spend Efficiency', value: '+160%', icon: Eye }
      ],
      description: 'Multi-channel PPC campaign across Google, Facebook, and Instagram that drove record-breaking sales and customer acquisition.',
      tags: ['Google Ads', 'Facebook Ads', 'Conversion Optimization'],
      timeline: '8 months'
    },
    {
      title: 'Local Bistro Chain - Social Success',
      category: 'Social Media Marketing',
      image: '/lovable-uploads/c8e578cd-eb1a-4d4c-8d05-fdf125a275a3.png',
      results: [
        { metric: 'Followers Growth', value: '+500%', icon: Users },
        { metric: 'Engagement Rate', value: '+280%', icon: TrendingUp },
        { metric: 'Online Sales', value: '+180%', icon: Eye }
      ],
      description: 'Complete social media transformation that built a loyal community and drove significant foot traffic to physical locations.',
      tags: ['Social Media', 'Community Building', 'Influencer Marketing'],
      timeline: '12 months'
    },
    {
      title: 'HealthTech Solutions - Website Design',
      category: 'Web Development & UX',
      image: '/lovable-uploads/b32ee0cd-7210-4039-a8cd-f111f2b28075.png',
      results: [
        { metric: 'Conversion Rate', value: '+340%', icon: TrendingUp },
        { metric: 'Page Load Speed', value: '+90%', icon: Eye },
        { metric: 'User Engagement', value: '+210%', icon: Users }
      ],
      description: 'Complete website overhaul with focus on user experience, conversion optimization, and mobile responsiveness.',
      tags: ['Web Design', 'UX/UI', 'Conversion Optimization'],
      timeline: '4 months'
    },
    {
      title: 'Manufacturing Co. - Digital Transformation',
      category: 'Full Digital Strategy',
      image: '/lovable-uploads/e1afbc25-e964-4f1a-be66-264dbbcb3a93.png',
      results: [
        { metric: 'Online Revenue', value: '+450%', icon: TrendingUp },
        { metric: 'Market Share', value: '+120%', icon: Eye },
        { metric: 'Customer Base', value: '+280%', icon: Users }
      ],
      description: 'Complete digital transformation including website development, SEO, PPC, and social media for a traditional manufacturer.',
      tags: ['Digital Strategy', 'SEO', 'PPC', 'Web Development'],
      timeline: '18 months'
    },
    {
      title: 'Fashion Retailer - Omnichannel Success',
      category: 'E-commerce & Social',
      image: '/lovable-uploads/23371416-5bf7-4c85-9c3a-a0b78a7ae36f.png',
      results: [
        { metric: 'Online Sales', value: '+380%', icon: TrendingUp },
        { metric: 'Social Engagement', value: '+250%', icon: Users },
        { metric: 'Brand Awareness', value: '+190%', icon: Eye }
      ],
      description: 'Integrated omnichannel strategy combining e-commerce optimization, social media marketing, and influencer partnerships.',
      tags: ['E-commerce', 'Social Media', 'Influencer Marketing'],
      timeline: '10 months'
    }
  ];

  const stats = [
    { value: '200+', label: 'Projects Completed' },
    { value: '250%', label: 'Average Growth Rate' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '$10M+', label: 'Revenue Generated' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover how we've helped businesses across industries achieve remarkable growth 
            and digital transformation through our strategic approach.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {project.timeline}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <result.icon className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                        <div className="text-lg font-bold text-gray-900">{result.value}</div>
                        <div className="text-xs text-gray-500">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full group">
                    View Case Study
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results and transform your digital presence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
