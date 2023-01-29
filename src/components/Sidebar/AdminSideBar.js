/*eslint-disable*/
import React from 'react';
import { NavLink } from 'react-router-dom';
// nodejs library to set properties for components

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';

// reactstrap components
import { Nav } from 'reactstrap';
import { BackgroundColorContext } from 'contexts/BackgroundColorContext';

var ps;

/*
 * Sidebar used for description component
 */
function DescriptionSidebar(props) {
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

  return (
    <BackgroundColorContext.Consumer>
      {({ color }) => (
        <div className='sidebar' data={color}>
          <div className='sidebar-wrapper' ref={sidebarRef}>
            <Nav>
              <NavLink className='nav-link' to={'/'}>
                <i className={'tim-icons icon-minimal-left'} />
                <p>Retour</p>
              </NavLink>
            </Nav>
          </div>
        </div>
      )}
    </BackgroundColorContext.Consumer>
  );
}

DescriptionSidebar.propTypes = {};

export default DescriptionSidebar;
