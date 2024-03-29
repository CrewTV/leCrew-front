import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import { Button, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

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
  const [email, setEmail] = useState(''); // Necessary to pass the email to the register form

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
              <span className='text-info'> groupe</span>
            </h1>
            <div className='container-xs'>
              <p className='m-0 mb-32' data-reveal-delay='400'>
                Créez ou rejoignez un Crew puis sélectionnez et achetez vos
                actifs ensemble.
              </p>
              <div className='d-flex flex-sm-row flex-column align-items-center justify-content-center mt-3'>
                <Input
                  className='fixed-field'
                  type='email'
                  placeholder='Adresse e-mail'
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Link to={`/register/${email}`} className='fixed-link'>
                  <button
                    type='button'
                    className='btn btn-info animation-on-hover ml-2'>
                    Démarrer
                  </button>
                </Link>
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
