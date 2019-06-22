import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

const Pay = () => {
  return <div />;
};

const mapStateToProps = state => ({
  cart: state.product.cart,
  products: state.product.products
});

export default connect(
  mapStateToProps,
  {}
)(Pay);
