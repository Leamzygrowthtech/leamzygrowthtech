
import Layout from '@/components/Layout';

const About = () => {
  console.log('About page rendered');
  
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                About LeamzyGrowthTech
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for digital growth and online success
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                LeamzyGrowthTech was founded with a simple mission: to help businesses thrive in the digital world. 
                We understand that every business is unique, and that's why we create customized strategies that deliver real results.
              </p>
              <p className="text-gray-600 mb-6">
                With years of experience in digital marketing, we've helped hundreds of businesses increase their online presence, 
                generate more leads, and grow their revenue through proven strategies and cutting-edge technologies.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Proven track record of success</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Customized strategies for each client</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Transparent reporting and communication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Dedicated support team</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
