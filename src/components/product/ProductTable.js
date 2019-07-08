import React, { useState } from 'react';
import {
  Table,
  Header,
  Image,
  Icon,
  Modal,
  Segment,
  Button,
  Loader
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Product from './Product';

import { default as badge } from '../../img/badges/fula.png';

const Row = ({ product, amount, setModal, setSelectedProduct }) => {
  return (
    <Table.Row textAlign='center'>
      <Table.Cell textAlign='left'>
        <Image
          circular
          src={badge}
          avatar
          bordered
          style={{ backgroundColor: 'black', marginRight: 10 }}
        />
        {product.name}
      </Table.Cell>
      <Table.Cell>
        <Icon name='dollar' color='green' />
        {product.price}
      </Table.Cell>
      <Table.Cell>{amount}</Table.Cell>
      <Table.Cell>
        <Icon name='dollar' color='green' />
        {amount * product.price}
      </Table.Cell>
      <Table.Cell width={1}>
        <Icon
          name='edit'
          color='grey'
          onClick={() => {
            setModal(true);
            setSelectedProduct(product);
          }}
        />
      </Table.Cell>
    </Table.Row>
  );
};

const ProductTable = ({ cart, products }) => {
  const [showModal, setModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const headers = ['', 'Price', 'Quantity', 'Total'];

  if (products) {
    if (Object.keys(cart).length) {
      return (
        <React.Fragment>
          <Header size='huge' inverted content='Your Cart' />
          <Table
            compact
            size='small'
            striped
            definition
            unstackable
            singleLine
            inverted
          >
            <Table.Header>
              <Table.Row textAlign='center'>
                {headers.map((h, i) => (
                  <Table.Cell key={i}>
                    <Header sub inverted>
                      {h}
                    </Header>
                  </Table.Cell>
                ))}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {Object.entries(cart).map(([k, v], i) => (
                <Row
                  key={i}
                  product={products.find(tgt => tgt.name === k)}
                  amount={v}
                  setModal={setModal}
                  setSelectedProduct={setSelectedProduct}
                />
              ))}
            </Table.Body>
          </Table>
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
        </React.Fragment>
      );
    } else {
      return (
        <Segment placeholder inverted>
          <Header icon>
            <Icon name='hand paper outline' />
            Your cart is empty. Please add some items.
          </Header>
          <Button as={Link} to='/' primary style={{ marginTop: 10 }}>
            Go Shopping
          </Button>
        </Segment>
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
)(ProductTable);
