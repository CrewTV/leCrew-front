import React, { useContext } from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
import UserContext from 'contexts/UserContext';
import { useNavigate } from 'react-router-dom';

// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Modal,
  NavbarToggler,
  ModalHeader,
  ModalBody,
} from 'reactstrap';
import { removeToken } from 'utils/token';

function AdminNavbar(props) {
  const [collapseOpen, setcollapseOpen] = React.useState(false);
  const [modalSearch, setmodalSearch] = React.useState(false);
  const [color, setcolor] = React.useState('navbar-transparent');
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    window.addEventListener('resize', updateColor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener('resize', updateColor);
    };
  });
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && collapseOpen) {
      setcolor('bg-white');
    } else {
      setcolor('navbar-transparent');
    }
  };
  // this function opens and closes the collapse on small devices
  const toggleCollapse = () => {
    if (collapseOpen) {
      setcolor('navbar-transparent');
    } else {
      setcolor('bg-white');
    }
    setcollapseOpen(!collapseOpen);
  };
  // this function is to open the Search modal
  const toggleModalSearch = () => {
    setmodalSearch(!modalSearch);
  };
  return (
    <>
      <Navbar className={classNames('navbar-absolute', color)} expand='lg'>
        <Container fluid>
          <div className='navbar-wrapper'>
            <div
              className={classNames('navbar-toggle d-inline', {
                toggled: props.sidebarOpened,
              })}>
              <NavbarToggler onClick={props.toggleSidebar}>
                <span className='navbar-toggler-bar bar1' />
                <span className='navbar-toggler-bar bar2' />
                <span className='navbar-toggler-bar bar3' />
              </NavbarToggler>
            </div>
            <NavbarBrand onClick={(e) => e.preventDefault()}>
              {props.brandText}
            </NavbarBrand>
          </div>
          <NavbarToggler onClick={toggleCollapse}>
            <span className='navbar-toggler-bar navbar-kebab' />
            <span className='navbar-toggler-bar navbar-kebab' />
            <span className='navbar-toggler-bar navbar-kebab' />
          </NavbarToggler>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className='ml-auto' navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color='default'
                  nav
                  onClick={(e) => e.preventDefault()}>
                  <div className='d-flex flex-row'>
                    <p className='mr-2 mt-1'>
                      {user.firstName} {user.lastName}
                    </p>
                    <div className='photo'>
                      <img alt='...' src={require('assets/img/anime3.png')} />
                    </div>
                  </div>
                  <b className='caret d-none d-lg-block d-xl-block ml-3' />
                </DropdownToggle>
                <DropdownMenu className='dropdown-navbar' right tag='ul'>
                  <DropdownItem divider tag='li' />
                  <NavLink
                    tag='li'
                    onClick={() => {
                      removeToken();
                      user.token = '';
                      setUser(user);
                      navigate('/');
                      window.location.reload(false); // Trigger manual refresh
                    }}>
                    <DropdownItem className='nav-item'>
                      Déconnexion
                    </DropdownItem>
                  </NavLink>
                </DropdownMenu>
              </UncontrolledDropdown>
              <li className='separator d-lg-none' />
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Modal
        modalClassName='modal-search'
        isOpen={modalSearch}
        toggle={toggleModalSearch}>
        <ModalHeader>
          <Input placeholder='SEARCH' type='text' />
          <button
            aria-label='Close'
            className='close'
            onClick={toggleModalSearch}>
            <i className='tim-icons icon-simple-remove' />
          </button>
        </ModalHeader>
        <ModalBody></ModalBody>
      </Modal>
    </>
  );
}

export default AdminNavbar;
