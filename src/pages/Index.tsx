
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Testimonials />
      <Newsletter />
    </Layout>
  );
};

export default Index;
