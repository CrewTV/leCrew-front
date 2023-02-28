import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Votez, achetez et vendez ensemble',
    paragraph:
      'Pour les décisions importantes, un vote doit être proposé à tous les membres du Crew. Le vote est ouvert pendant 24h et les résultats sont affichés en temps réel.',
  };

  return (
    <section {...props} className={outerClasses}>
      <div className='container'>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className='center-content' />
          <div className={splitClasses}>
            <div className='split-item'>
              <div
                className='split-item-content center-content-mobile'
                data-reveal-container='.split-item'>
                <div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
                  Fonctionalité #1
                </div>
                <h3 className='mt-0 mb-12'>Tableau de bord</h3>
                <p className='m-0'>
                  Le tableau de bord donne une vision globale de l'ensemble de
                  vos Crews et actifs.
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container='.split-item'>
                <Image
                  src={require('../../../assets/img/landingImage1.png')}
                  alt='Features split 01'
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className='split-item'>
              <div
                className='split-item-content center-content-mobile'
                data-reveal-container='.split-item'>
                <div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
                  Fonctionalité #2
                </div>
                <h3 className='mt-0 mb-12'>
                  Organiser vos investissements avec vos partenaires
                </h3>
                <ul className='m-0'>
                  <li>Proposer un vote pour un ordre d'achat ou de vente.</li>
                  <li>
                    Une fois le vote validé, un membre du Crew passe l'ordre
                    avec son CTO ou PEA.
                  </li>
                  <li>
                    L'équilibre de investissement est mis à jour en temps réel.
                  </li>
                </ul>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container='.split-item'>
                <Image
                  src={require('../../../assets/img/landingImage2.png')}
                  alt='Features split 01'
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
