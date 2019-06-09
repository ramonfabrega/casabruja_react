import React, { Component } from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';

import NavLinks from './NavLinks';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: false
    };
  }

  render() {
    return (
      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        vertical
        visible
        onHide={this.handleHide}
        width='thin'
      >
        <NavLinks loggedIn={this.state.loggedin} />
      </Sidebar>
    );
  }
}
