import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Pricing = ({
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
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left');

  const sectionHeader = {
    title: 'Nos tarifs',
    paragraph:
      "Nous proposons un plan d'abonnement premium mensuel ainsi qu'une option pour trouver des partenaires. Vous pouvez vous abonner à tout moment et résilier à tout moment. De plus, vous pouvez annuler votre abonnement pendant les 14 premiers jours sans frais.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className='container'>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className='center-content' />
          <div className={tilesClasses}>
            <div className='tiles-item' data-reveal-delay='200'>
              <div className='tiles-item-inner'>
                <div className='d-flex flex-column align-items-center'>
                  <h3>Plan gratuit</h3>
                  <div className='d-flex flex-row align-items-center'>
                    <h2>0€</h2>
                    <h3>/mois</h3>
                  </div>
                  <ul>
                    <li>Limité à 1 Crew</li>
                    <li>Limité à 500€/Crew</li>
                    <li>Limité à 8 actifs/Crew</li>
                    <li>Limité à 4 membres/Crew</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='tiles-item'>
              <div className='tiles-item-inner'>
                <div className='d-flex flex-column align-items-center'>
                  <h3>Plan premium</h3>
                  <div className='d-flex flex-row align-items-center'>
                    <h2>4.99€</h2>
                    <h3>/mois</h3>
                  </div>
                  <ul>
                    <li>Crews illité</li>
                    <li>Valorisation illimitée/Crews</li>
                    <li>Actifs illimité/Crews</li>
                    <li>Membres illimité/Crews</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='tiles-item' data-reveal-delay='200'>
              <div className='tiles-item-inner'>
                <div className='d-flex flex-column align-items-center'>
                  <h3>Matching profils</h3>
                  <div className='d-flex flex-row align-items-center'>
                    <h2>2.99€</h2>
                    <h3>/mois</h3>
                  </div>
                  <p>
                    Recherchez des profils complémentaires au vôtre pour vous
                    constituez un Crews d'experts
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

Pricing.propTypes = propTypes;
Pricing.defaultProps = defaultProps;

export default Pricing;
