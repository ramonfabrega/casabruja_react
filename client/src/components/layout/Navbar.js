import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Menu, Sidebar, Responsive, Icon } from 'semantic-ui-react';

import NavLinks from './NavLinks';

const Nav = (auth, visible, onHide) => {
  return (
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      direction='right'
      inverted
      vertical
      visible={visible}
      width='thin'
      onHide={onHide}
    >
      <NavLinks loggedIn={auth.uid} mobileHandler={onHide} />
    </Sidebar>
  );
};

const Navbar = ({ auth }) => {
  const [visible, setVisible] = useState(false);
  return (
    <React.Fragment>
      <Responsive minWidth={768}>
        {Nav(auth, true, () => setVisible(true))}
      </Responsive>
      <Responsive maxWidth={767}>
        <Menu icon fixed='right' vertical inverted>
          <Menu.Item name='sidebar' onClick={() => setVisible(!visible)}>
            <Icon name='sidebar' />
          </Menu.Item>
        </Menu>
        {Nav(auth, visible, () => setVisible(false))}
      </Responsive>
    </React.Fragment>
  );
};

const mapStateTopProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateTopProps)(Navbar);
