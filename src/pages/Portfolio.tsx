
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Portfolio = () => {
  console.log('Portfolio page rendered');
  
  const projects = [
    {
      title: "E-commerce Growth Campaign",
      description: "Increased online sales by 300% through targeted ads and SEO optimization",
      results: "+300% Sales Growth",
      category: "E-commerce"
    },
    {
      title: "Local Business Visibility",
      description: "Boosted local search rankings and customer reviews for a restaurant chain",
      results: "+250% Local Traffic",
      category: "Local SEO"
    },
    {
      title: "SaaS Lead Generation",
      description: "Generated 500+ qualified leads per month for a B2B software company",
      results: "500+ Monthly Leads",
      category: "Lead Generation"
    },
    {
      title: "Brand Reputation Recovery",
      description: "Restored online reputation and increased positive reviews by 400%",
      results: "+400% Positive Reviews",
      category: "Reputation Management"
    }
  ];

  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Our Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results for real businesses. See how we've helped our clients achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-bold text-gray-900">{project.title}</CardTitle>
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">{project.results}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
