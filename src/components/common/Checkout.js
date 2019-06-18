import React from 'react';
import { connect } from 'react-redux';
import { Segment, Button, Label, Icon, Table } from 'semantic-ui-react';

import { updateProduct } from '../store/actions/productActions';
import { products } from '../mock/data';

const Checkout = ({ cart, updateProduct }) => {
  let total = 0;
  let count = 0;

  Object.entries(cart).forEach(([key, val]) => {
    total += products.find(tgt => tgt.name === key).price * val;
    count += val;
  });

  if (total > 0) {
    return (
      <Segment>
        <Button as='div' labelPosition='right' fluid>
          <Button
            positive
            icon='cart'
            fluid
            content={`Buy ${count} Beers`}
            onClick={() => console.log(cart)}
          />
          <Label basic color='green' pointing='left'>
            <Icon name='dollar' />
            {total}
          </Label>
        </Button>
        <Table compact='very' unstackable striped basic='very' size='small'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Item</Table.HeaderCell>
              <Table.HeaderCell>Quantity</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {Object.entries(cart).map(([key, value], i) => {
              if (value > 0) {
                const product = products.find(tgt => tgt.name === key);
                return (
                  <Table.Row key={i}>
                    <Table.Cell>{key}</Table.Cell>
                    <Table.Cell>{`${value} Beers`}</Table.Cell>
                    <Table.Cell>
                      <Icon name='dollar' color='green' />
                      {value * product.price}
                    </Table.Cell>
                    <Table.Cell width={1}>
                      <Icon
                        name='cancel'
                        color='red'
                        onClick={() =>
                          updateProduct({ product: key, quantity: 0 })
                        }
                      />
                    </Table.Cell>
                  </Table.Row>
                );
              }
            })}
            <Table.Row />
          </Table.Body>
        </Table>
      </Segment>
    );
  } else {
    return <div />;
  }
};

const mapStateToProps = state => ({
  cart: state.product.cart
});

export default connect(
  mapStateToProps,
  { updateProduct }
)(Checkout);
