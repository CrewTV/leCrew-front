import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';

// core components
import AdminNavbar from 'components/Navbars/AdminNavbar.js';
import Sidebar from 'components/Sidebar/Sidebar.js';
import pages from '../views/pages';
import { BackgroundColorContext } from 'contexts/BackgroundColorContext';
import Dashboard from 'views/Dashboard';

var ps;

function MainLayout(props) {
  const [contentComponent, setContentComponent] = useState(<Dashboard />);
  const [contentComponentName, setContentComponentName] =
    useState('Tableau de bord');
  const location = useLocation();
  const mainPanelRef = React.useRef(null);
  const [sidebarOpened, setsidebarOpened] = React.useState(
    document.documentElement.className.indexOf('nav-open') !== -1
  );
  useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      document.documentElement.className += ' perfect-scrollbar-on';
      document.documentElement.classList.remove('perfect-scrollbar-off');
      ps = new PerfectScrollbar(mainPanelRef.current, {
        suppressScrollX: true,
      });
      let tables = document.querySelectorAll('.table-responsive');
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf('Win') > -1) {
        ps.destroy();
        document.documentElement.classList.add('perfect-scrollbar-off');
        document.documentElement.classList.remove('perfect-scrollbar-on');
      }
    };
  });

  useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      let tables = document.querySelectorAll('.table-responsive');
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (mainPanelRef.current) {
      mainPanelRef.current.scrollTop = 0;
    }
  }, [location]);

  // this function opens and closes the sidebar on small devices
  const toggleSidebar = () => {
    document.documentElement.classList.toggle('nav-open');
    setsidebarOpened(!sidebarOpened);
  };

  return (
    <BackgroundColorContext.Consumer>
      {({ color, changeColor }) => (
        <React.Fragment>
          <div className='wrapper'>
            <Sidebar
              pages={pages}
              contentComponent={contentComponent}
              setContentComponent={setContentComponent}
              contentComponentName={contentComponentName}
              setContentComponentName={setContentComponentName}
              toggleSidebar={toggleSidebar}
            />
            <div className='main-panel' ref={mainPanelRef} data={color}>
              <AdminNavbar
                brandText={'LeCrew'}
                toggleSidebar={toggleSidebar}
                sidebarOpened={sidebarOpened}
              />
              {contentComponent}
            </div>
          </div>
        </React.Fragment>
      )}
    </BackgroundColorContext.Consumer>
  );
}

export default MainLayout;
