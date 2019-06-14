import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  if (auth.isLoaded) {
    return (
      <Route
        {...rest}
        render={props =>
          auth.uid ? <Component {...props} /> : <Redirect to='/login' />
        }
      />
    );
  } else {
    return <div />;
  }
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps)(PrivateRoute);
