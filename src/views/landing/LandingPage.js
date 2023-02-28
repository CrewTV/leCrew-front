import React from 'react';
// import sections
import Hero from '../../components/Landing/sections/Hero';
import FeaturesTiles from '../../components/Landing/sections/FeaturesTiles';
import FeaturesSplit from '../../components/Landing/sections/FeaturesSplit';
import Pricing from '../../components/Landing/sections/Princing';
import Header from 'components/Landing/layout/Header';
import '../../assets/scss/style.scss';
import Team from 'components/Landing/sections/Team';
import Footer from 'components/Landing/layout/Footer';

const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero className='illustration-section-01' />
      <FeaturesTiles />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className='illustration-section-02'
      />
      <Pricing topDivider />
      <Team topDivider />
      <Footer />
    </>
  );
};

export default LandingPage;
