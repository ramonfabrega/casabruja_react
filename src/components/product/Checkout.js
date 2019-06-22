import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  Table,
  Icon,
  Header,
  Image,
  Modal,
  Loader
} from 'semantic-ui-react';
import fula from '../../img/badges/fula.png';
import chitra from '../../img/transparent/products/chitra.png';
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
      return <Header size='huge' inverted content='Add items to cart' />;
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
