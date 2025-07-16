
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutMe = () => {
  const whatsappLink = "https://wa.me/2348024073215?text=Hi%20Leamzy,%20I%20want%20to%20grow%20my%20business";

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Hi, I'm Leamzy <span className="wave">👋</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
            I'm a digital growth specialist helping small businesses grow online using tools like 
            Google My Business, authentic reviews, and smart brand positioning. I combine strategy 
            and real results to boost visibility, trust, and conversions.
          </p>
          <p className="text-lg font-medium bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-8">
            Let's grow your business the smart way 🚀
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-3"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Chat With Me on WhatsApp
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Book a Free Growth Call
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
