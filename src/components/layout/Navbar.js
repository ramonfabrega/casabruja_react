import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Menu, Sidebar, Button, Grid, Image } from 'semantic-ui-react';

import NavLinks from './NavLinks';

import light_header_clean from '../../img/transparent/logos/light_header_clean.png';
// import dark_header_clean from '../../img/transparent/logos/dark_header_clean.png';

const Nav = (auth, visible, onHide) => {
  return (
    <Sidebar
      as={Menu}
      style={{ width: '25vh' }}
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
      <Grid.Column computer={4} tablet={2} mobile={4} />
      {window.innerWidth >= 500 && (
        <Grid.Column computer={8} tablet={12}>
          <Image src={light_header_clean} />
        </Grid.Column>
      )}
      <Grid.Column computer={4} tablet={2} mobile={12}>
        <Button
          color='google plus'
          floated='right'
          icon='sidebar'
          size='huge'
          onClick={() => setVisible(!visible)}
        />
        {Nav(auth, visible, () => setVisible(false))}
      </Grid.Column>
      {window.innerWidth < 500 && (
        <Grid.Column
          computer={8}
          tablet={12}
          mobile={16}
          style={{ marginTop: 10 }}
        >
          <Image src={light_header_clean} />
        </Grid.Column>
      )}
    </React.Fragment>
  );
};

const mapStateTopProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateTopProps)(Navbar);
