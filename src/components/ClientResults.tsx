
import { Star, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ClientResults = () => {
  const whatsappLink = "https://wa.me/2348024073215?text=Hi%20Leamzy,%20I%20want%20to%20grow%20my%20business";

  const testimonials = [
    {
      name: 'Sandra',
      business: 'Spa Owner',
      quote: 'In just 1 week, my business got 15 new reviews and customers started calling nonstop. Leamzy is the truth!',
      result: '+15 Reviews in 1 Week',
      icon: Star
    },
    {
      name: 'Dr. Adebayo',
      business: 'WellnessCare Clinic',
      quote: 'Since working with Leamzy, our clinic\'s Google visibility skyrocketed. We started getting new patients every week who found us online. The reviews added credibility, and now we rank top 3 for our area. Highly recommend!',
      result: 'Top 3 Google Ranking',
      icon: TrendingUp
    },
    {
      name: 'Uche',
      business: 'Laundry Business',
      quote: 'Leamzy turned my dead GMB into a customer magnet. From 0 visibility to top 3 in searches!',
      result: 'Top 3 Local Ranking',
      icon: TrendingUp
    },
    {
      name: 'Emeka',
      business: 'LagosRide Rentals',
      quote: 'I never knew how much Google reviews mattered until Leamzy stepped in. Within a few days, my car rental service started showing up more. I got calls from people who said they found me directly on Google. Real results!',
      result: 'Direct Google Leads',
      icon: Star
    },
    {
      name: 'Chidi',
      business: 'Logistics Business',
      quote: 'I ran ads with Leamzy and saw real results—calls, chats, bookings. 100% worth it!',
      result: '+200% Lead Generation',
      icon: Star
    },
    {
      name: 'Mr. Tolu',
      business: 'Tolu Homes & Rentals',
      quote: 'Before Leamzy, my listings were invisible. After optimizing my Google page and adding solid reviews, I started getting inquiries daily. People trust me more now just because of how my brand looks online!',
      result: 'Daily Inquiries',
      icon: TrendingUp
    },
    {
      name: 'Ada',
      business: 'Hair Stylist',
      quote: 'Professional. Fast. Real value. My salon got booked out just from GMB and review work.',
      result: 'Fully Booked Schedule',
      icon: TrendingUp
    },
    {
      name: 'Tunde',
      business: 'Barbershop Owner',
      quote: 'If you\'re trying to grow online, this is who you should work with!',
      result: '+150% Customer Growth',
      icon: Star
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real businesses - see how we've helped clients achieve remarkable growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
            Want to see real case studies?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Chat Me on WhatsApp
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Start Branding Today
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientResults;
