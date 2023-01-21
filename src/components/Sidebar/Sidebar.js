/*eslint-disable*/
import React from 'react';
import { NavLink } from 'react-router-dom';
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
  const { pages } = props;

  return (
    <BackgroundColorContext.Consumer>
      {({ color }) => (
        <div className='sidebar' data={color}>
          <div className='sidebar-wrapper' ref={sidebarRef}>
            <Nav>
              {pages.map((prop, key) => {
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
  pages: PropTypes.arrayOf(PropTypes.object),
  contentComponent: PropTypes.object,
  setContentComponent: PropTypes.func,
  contentComponentName: PropTypes.string,
  setContentComponentName: PropTypes.func,
};

export default Sidebar;
