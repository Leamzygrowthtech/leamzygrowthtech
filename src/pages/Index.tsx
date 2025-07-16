
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import MyServices from '@/components/MyServices';
import Services from '@/components/Services';
import ClientResults from '@/components/ClientResults';
import Testimonials from '@/components/Testimonials';
import SocialLinks from '@/components/SocialLinks';
import Newsletter from '@/components/Newsletter';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutMe />
      <MyServices />
      <Services />
      <ClientResults />
      <Testimonials />
      <SocialLinks />
      <Newsletter />
    </Layout>
  );
};

export default Index;
