
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <img 
                  src="/lovable-uploads/726e1298-a329-4c2e-adf4-20e7374b86d0.png" 
                  alt="LeamzyGrowthTech Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                LeamzyGrowthTech
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Driving growth through innovative digital solutions. We help businesses thrive in the digital landscape with cutting-edge marketing strategies.
            </p>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/profile.php?id=61578217070850" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="https://x.com/leamzygrowth" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="https://www.instagram.com/leamzygrowthtech/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">SEO Optimization</span></li>
              <li><span className="text-gray-400">Social Media Marketing</span></li>
              <li><span className="text-gray-400">PPC Advertising</span></li>
              <li><span className="text-gray-400">Website Development</span></li>
              <li><span className="text-gray-400">Digital Strategy</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 LeamzyGrowthTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
