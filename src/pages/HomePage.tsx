import React from 'react';
import  Layout  from '../components/Layout';
import PopularDestinations from '../components/PopularDestinations';
import WhyChooseUs from '../components/WhyChooseUs';
import ContactSection from '../components/ContactSection';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <Layout showHero={true}>
      <div className="">
        <PopularDestinations />
        <WhyChooseUs />
        <Testimonials />
        <ContactSection />
        {/* Reste du contenu... */}
      </div>
    </Layout>
  );
};

export default HomePage;