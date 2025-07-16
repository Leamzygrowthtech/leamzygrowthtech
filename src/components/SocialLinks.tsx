
import { Instagram, Linkedin, MessageCircle, Facebook } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: '#',
      color: 'hover:text-green-500'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/leamzygrowthtech/',
      color: 'hover:text-pink-500'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: '#',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://web.facebook.com/profile.php?id=61578217070850',
      color: 'hover:text-blue-700'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Let's Connect
        </h3>
        <p className="text-gray-600 mb-8">
          Follow me for daily growth tips and success stories
        </p>
        
        <div className="flex justify-center space-x-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-500 ${social.color} transition-colors duration-200 p-3 rounded-full hover:bg-white hover:shadow-lg`}
              aria-label={social.name}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
