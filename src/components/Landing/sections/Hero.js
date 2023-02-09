import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import { Input } from 'reactstrap';

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section {...props} className={outerClasses}>
      <div className='container-sm'>
        <div className={innerClasses}>
          <div className='hero-content'>
            <h1 className='mt-0 mb-16' data-reveal-delay='200'>
              Investissez en
              <span className='text-color-primary'> groupe</span>
            </h1>
            <div className='container-xs'>
              <p className='m-0 mb-32' data-reveal-delay='400'>
                Créez ou rejoignez un Crew puis sélectionnez et achetez vos
                actifs ensemble.
              </p>
              <div className='d-flex flex-row align-items-center justify-content-center mt-3'>
                <Input
                  className='fixed-field'
                  type='text'
                  placeholder='Adresse e-mail'
                />
                <button
                  type='button'
                  className='btn btn-info animation-on-hover ml-2'>
                  Démarer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
