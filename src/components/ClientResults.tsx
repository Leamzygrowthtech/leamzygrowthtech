
import { Star, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ClientResults = () => {
  const testimonials = [
    {
      name: 'Mrs. Ada',
      business: 'Salon Owner',
      quote: 'Leamzy helped me get 20 new reviews in one week. My GMB traffic increased and I started getting real customers!',
      result: '+20 Reviews in 1 Week',
      icon: Star
    },
    {
      name: 'Kingsley',
      business: 'Logistics Business',
      quote: 'I never knew reviews could help this much. My visibility improved in just days!',
      result: '+150% Visibility Boost',
      icon: TrendingUp
    },
    {
      name: 'Sarah Johnson',
      business: 'Restaurant Owner',
      quote: 'The GMB optimization was a game changer. We went from 5 to 50+ reviews and our phone keeps ringing!',
      result: '+300% Local Traffic',
      icon: Star
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              What Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real businesses - see how we've helped clients achieve remarkable growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-green-600"></div>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-6 italic">
                  🗣️ "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.business}</div>
                  </div>
                  <div className="text-right">
                    <testimonial.icon className="w-5 h-5 text-green-500 mb-1 ml-auto" />
                    <div className="text-sm font-medium text-green-600">{testimonial.result}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4">
          <p className="text-lg text-gray-600 mb-6">
            Ready to see similar results for your business?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
            >
              See My Client Results
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Start Branding Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientResults;
