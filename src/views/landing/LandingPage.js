import React from 'react';
// import sections
import Hero from '../../components/Landing/sections/Hero';
import FeaturesTiles from '../../components/Landing/sections/FeaturesTiles';
import FeaturesSplit from '../../components/Landing/sections/FeaturesSplit';
import Testimonial from '../../components/Landing/sections/Testimonial';
import Cta from '../../components/Landing/sections/Cta';
import Header from 'components/Landing/layout/Header';
import '../../assets/scss/style.scss';

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
      <Testimonial topDivider />
      <Cta split />
    </>
  );
};

export default LandingPage;
