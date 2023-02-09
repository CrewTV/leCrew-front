import React from 'react';
// import sections
import Hero from '../../components/Landing/sections/Hero';
import FeaturesTiles from '../../components/Landing/sections/FeaturesTiles';
import FeaturesSplit from '../../components/Landing/sections/FeaturesSplit';
import Pricing from '../../components/Landing/sections/Princing';
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
      <Pricing topDivider />
    </>
  );
};

export default LandingPage;
