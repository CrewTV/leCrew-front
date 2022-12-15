/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
// nodejs library to set properties for components
import { PropTypes } from 'prop-types';

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';

// reactstrap components
import { Nav, NavLink as ReactstrapNavLink } from 'reactstrap';
import {
  BackgroundColorContext,
  backgroundColors,
} from 'contexts/BackgroundColorContext';

var ps;

function Sidebar(props) {
  const sidebarRef = React.useRef(null);
  // verifies if routeName is the one active (in browser input)
  React.useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar(sidebarRef.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf('Win') > -1) {
        ps.destroy();
      }
    };
  });
  const linkOnClick = () => {
    document.documentElement.classList.remove('nav-open');
  };
  const { routes, rtlActive, logo } = props;
  let logoImg = null;
  let logoText = null;
  if (logo !== undefined) {
    if (logo.outterLink !== undefined) {
      logoImg = (
        <a
          href={logo.outterLink}
          className='simple-text logo-mini'
          target='_blank'
          onClick={props.toggleSidebar}>
          <div className='logo-img'>
            <img src={logo.imgSrc} alt='react-logo' />
          </div>
        </a>
      );
      logoText = (
        <a
          href={logo.outterLink}
          className='simple-text logo-normal'
          target='_blank'
          onClick={props.toggleSidebar}>
          {logo.text}
        </a>
      );
    } else {
      logoImg = (
        <Link
          to={logo.innerLink}
          className='simple-text logo-mini'
          onClick={props.toggleSidebar}>
          <div className='logo-img'>
            <img src={logo.imgSrc} alt='react-logo' />
          </div>
        </Link>
      );
      logoText = (
        <Link
          to={logo.innerLink}
          className='simple-text logo-normal'
          onClick={props.toggleSidebar}>
          {logo.text}
        </Link>
      );
    }
  }
  return (
    <BackgroundColorContext.Consumer>
      {({ color }) => (
        <div className='sidebar' data={color}>
          <div className='sidebar-wrapper' ref={sidebarRef}>
            {logoImg !== null || logoText !== null ? (
              <div className='logo'>
                {logoImg}
                {logoText}
              </div>
            ) : null}
            <Nav>
              {routes.map((prop, key) => {
                console.log('PropComp:', prop.component);
                console.log('CurrentComp', props.contentComponent);
                if (prop.redirect) return null;
                return (
                  <li
                    className={
                      prop.name === props.contentComponentName ? 'active' : ''
                    }
                    key={key}>
                    <NavLink className='nav-link'>
                      <i className={prop.icon} />
                      <p
                        className='nav-link'
                        onClick={() => {
                          props.setContentComponentName(prop.name);
                          props.setContentComponent(<prop.component />);
                        }}>
                        {prop.name}
                      </p>
                    </NavLink>
                  </li>
                );
              })}
            </Nav>
          </div>
        </div>
      )}
    </BackgroundColorContext.Consumer>
  );
}

Sidebar.propTypes = {
  rtlActive: PropTypes.bool,
  routes: PropTypes.arrayOf(PropTypes.object),
  contentComponent: PropTypes.object,
  setContentComponent: PropTypes.func,
  contentComponentName: PropTypes.string,
  setContentComponentName: PropTypes.func,
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the text of the logo
    text: PropTypes.node,
    // the image src of the logo
    imgSrc: PropTypes.string,
  }),
};

export default Sidebar;
