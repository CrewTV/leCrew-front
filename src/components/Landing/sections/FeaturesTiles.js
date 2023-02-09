import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Feature01Logo from '../../../assets/img/feature-tile-icon-01.svg';
import Feature02Logo from '../../../assets/img/feature-tile-icon-02.svg';
import Feature03Logo from '../../../assets/img/feature-tile-icon-03.svg';
import Feature04Logo from '../../../assets/img/feature-tile-icon-04.svg';
import Feature05Logo from '../../../assets/img/feature-tile-icon-05.svg';
import Feature06Logo from '../../../assets/img/feature-tile-icon-06.svg';

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: "Constituez votre Crew dès aujourd'hui",
    paragraph:
      'LeCrew propose de créer des groupes appelés "Crews" dans lequel vous et vos partenaires pouvez co-investir sur des actifs.',
  };

  return (
    <section {...props} className={outerClasses}>
      <div className='container'>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className='center-content' />
          <div className={tilesClasses}>
            <div className='tiles-item'>
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='features-tiles-item-image mb-16'>
                    <img
                      src={Feature04Logo}
                      alt='Features tile icon 04'
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>Créez ou rejoingnez</h4>
                  <p className='m-0 text-sm'>
                    Constituez vous un Crew avec vos amis ou rejoingnez un Crew
                    existant.
                  </p>
                </div>
              </div>
            </div>

            <div className='tiles-item' data-reveal-delay='200'>
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='features-tiles-item-image mb-16'>
                    <img
                      src={Feature05Logo}
                      alt='Features tile icon 05'
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>Apprenez</h4>
                  <p className='m-0 text-sm'>
                    Améliorez vos connaissances sur les marchés grâce à vos Crew
                    members.
                  </p>
                </div>
              </div>
            </div>

            <div className='tiles-item' data-reveal-delay='400'>
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='features-tiles-item-image mb-16'>
                    <img
                      src={Feature06Logo}
                      alt='Features tile icon 06'
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>Achetez</h4>
                  <p className='m-0 text-sm'>
                    Réalisez vos premiers co-investissement avec vos
                    partenaires.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
