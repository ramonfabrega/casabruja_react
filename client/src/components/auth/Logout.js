import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { logout } from '../store/actions/authActions';

class Logout extends Component {
  componentDidMount() {
    this.props.logout();
    this.props.history.push('/');
  }

  render() {
    return <Fragment />;
  }
}

export default connect(
  null,
  { logout }
)(Logout);
