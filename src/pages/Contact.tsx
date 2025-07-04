import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { Mail, Phone, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`New Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone}
Service: ${formData.service}
Budget: ${formData.budget}
Message: ${formData.message}
    `);
    
    const mailtoLink = `mailto:leamzygrowthtech@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Email Client Opened!",
      description: "Your default email client should open with the message pre-filled.",
    });
    
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      budget: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'leamzygrowthtech@gmail.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (724) 601-5302',
      description: 'Mon-Fri from 8am to 5pm'
    },
    {
      icon: Clock,
      title: 'Response Time',
      details: 'Within 24 hours',
      description: 'We respond to all inquiries quickly'
    }
  ];

  const services = [
    'SEO Optimization',
    'Social Media Marketing',
    'PPC Advertising',
    'Website Development',
    'Analytics & Reporting',
    'Digital Strategy Consulting',
    'Other'
  ];

  const budgets = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $30,000',
    '$30,000 - $50,000',
    '$50,000+',
    'Not sure yet'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to accelerate your digital growth? Let's discuss how we can help 
            transform your business and achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-blue-600 font-medium mb-1">{info.details}</p>
                  <p className="text-sm text-gray-500">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Send us a Message
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <Input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interested In
                      </label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgets.map((budget) => (
                            <SelectItem key={budget} value={budget}>
                              {budget}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your project, goals, and how we can help..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg py-3"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="space-y-8">
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Why Choose LeamzyGrowthTech?
                  </h3>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Proven Results:</strong> Over 500 successful projects with measurable ROI</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Expert Team:</strong> Certified professionals with years of industry experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Custom Solutions:</strong> Tailored strategies designed for your specific goals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Transparent Reporting:</strong> Regular updates and detailed performance analytics</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-600 to-green-600 text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    Free Strategy Session
                  </h3>
                  <p className="mb-6">
                    Schedule a complimentary 30-minute strategy session to discuss your business goals 
                    and discover how we can help you achieve them.
                  </p>
                  <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                    Book Free Session
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">How quickly can we start?</h4>
                      <p className="text-gray-600 text-sm">Most projects can begin within 1-2 weeks after our initial consultation and strategy approval.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Do you work with small businesses?</h4>
                      <p className="text-gray-600 text-sm">Yes! We work with businesses of all sizes, from startups to enterprises, and tailor our approach accordingly.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">What's included in reporting?</h4>
                      <p className="text-gray-600 text-sm">Monthly reports include performance metrics, ROI analysis, recommendations, and strategic insights.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
