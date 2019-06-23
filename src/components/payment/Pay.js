import React from 'react';
import { connect } from 'react-redux';
import { Grid, Segment, Header, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import CreditCard from './CreditCard';

const Pay = () => {
  return (
    <Segment placeholder inverted>
      {/* <Header icon>
        <Icon name='user outline' />
        You must complete your profile before paying.
      </Header>
      <Button as={Link} to='/profile' primary style={{ marginTop: 10 }}>
        Profile
      </Button> */}
      <CreditCard />
    </Segment>
  );
};

const mapStateToProps = state => ({
  cart: state.product.cart,
  products: state.product.products
});

export default connect(
  mapStateToProps,
  {}
)(Pay);
