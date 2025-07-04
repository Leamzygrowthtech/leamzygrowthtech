
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart, Users, Award, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable results that directly impact your bottom line and business growth.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of digital trends and continuously innovate our strategies to keep you competitive.'
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting partnerships based on trust, transparency, and results.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from strategy development to execution.'
    }
  ];

  const team = [
    {
      name: 'Alani Temitope',
      role: 'Founder & CEO',
      image: '/lovable-uploads/26da59c3-4ccb-4ce9-83dd-9532951cd412.png',
      bio: '10+ years in digital marketing with expertise in scaling businesses from startup to enterprise level.'
    },
    {
      name: 'Ismail Abdulmajeed',
      role: 'Head of Strategy',
      image: '/lovable-uploads/ac7ff789-fad3-41e5-b6c6-ceacd25eeb83.png',
      bio: 'Former Google marketing manager with deep expertise in data-driven growth strategies.'
    },
    {
      name: 'Wasiu Toheeb',
      role: 'Technical Director',
      image: '/lovable-uploads/70cbb82a-1f2d-4bb3-9a3e-d4eb22a8c48e.png',
      bio: 'Full-stack developer and SEO expert specializing in technical optimization and web performance.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                About LeamzyGrowthTech
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Welcome to our digital marketing portfolio! We are passionate marketing professionals dedicated to 
              helping businesses thrive online. With a proven track record in SEO, social media marketing, paid advertising, 
              and Website Design, we specialize in creating customized campaigns that deliver measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our mission is to turn your goals into reality by increasing your online visibility, 
                  driving targeted traffic, and boosting conversions. Whether you're a startup looking to build your brand 
                  or an established business seeking to scale, we bring creative ideas and data-driven strategies to every project.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the leading digital growth partner for businesses worldwide, recognized for our innovative 
                  strategies, exceptional results, and commitment to client success.
                </p>
              </div>
            </div>

            <div className="lg:pl-12">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The experts behind your digital success story
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-6 shadow-lg"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Growing Together
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our success is measured by your success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">150+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-blue-100">Client Retention Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-blue-100">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
