import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Grid,
  Icon,
  Header,
  Modal,
  Loader,
  Segment,
  Button
} from 'semantic-ui-react';

import Product from './Product';
import ProductTable from './ProductTable';

const mockCart = {
  Chitra: 24,
  Chivoperro: 12,
  Fula: 48,
  Tulivieja: 6
};

const Checkout = ({ cart, products }) => {
  const [showModal, setModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  if (products) {
    if (Object.keys(cart).length) {
      return (
        <Grid.Row centered>
          <Grid.Column computer={8} tablet={12} mobile={15}>
            <Header size='huge' inverted content='Order Summary' />
            <ProductTable
              cart={cart}
              products={products}
              f={{ setModal, setSelectedProduct }}
            />
            <Modal
              open={showModal}
              onClose={() => setModal(false)}
              closeIcon
              size='mini'
            >
              <Modal.Content>
                <Product product={selectedProduct} />
              </Modal.Content>
            </Modal>
          </Grid.Column>
        </Grid.Row>
      );
    } else {
      return (
        <Grid.Row centered>
          <Grid.Column computer={6} tablet={8} mobile={12}>
            <Segment placeholder>
              <Header icon>
                <Icon name='hand paper outline' />
                Your cart is empty. Please add some items.
              </Header>
              <Button as={Link} to='/' primary style={{ marginTop: 10 }}>
                Go Shopping
              </Button>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      );
    }
  } else {
    return <Loader active />;
  }
};

const mapStateToProps = state => ({
  cart: state.product.cart,
  products: state.product.products
});

export default connect(
  mapStateToProps,
  {}
)(Checkout);
