import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import thibaultPic from '../../../assets/img/thibaultPic.jpeg';
import vascoPic from '../../../assets/img/vascoPic.jpeg';

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const Team = ({
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

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'La Team',
    paragraph:
      "Nous sommes une équipe de passionés, annimés par la mission de rendre accessible l'investissement groupé",
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
                      src={thibaultPic}
                      alt='Features tile icon 04'
                      width={200}
                      height={200}
                      style={{ borderRadius: 100 }}
                    />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>Thibault Boutet</h4>
                  <p className='m-0 text-sm'>Co-founder - CEO</p>
                </div>
              </div>
            </div>

            <div className='tiles-item' data-reveal-delay='200'>
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='features-tiles-item-image mb-16'>
                    <img
                      src={vascoPic}
                      alt='Features tile icon 05'
                      width={200}
                      height={200}
                      style={{ borderRadius: 100 }}
                    />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>Vasco Sampaio</h4>
                  <p className='m-0 text-sm'>Co-founder - CTO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Team.propTypes = propTypes;
Team.defaultProps = defaultProps;

export default Team;
