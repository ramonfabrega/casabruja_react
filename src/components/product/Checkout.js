import React from 'react';
import { connect } from 'react-redux';
import { Grid, Segment, Table, Icon } from 'semantic-ui-react';

// {Object.entries(cart).map(([key, value], i) => {
//     if (value > 0) {
//       const product = products.find(tgt => tgt.name === key);
//       // getProductPrice(key);
//       return (
//         <Table.Row key={i}>
//           <Table.Cell>{key}</Table.Cell>
//           <Table.Cell>{`${value} Beers`}</Table.Cell>
//           <Table.Cell>
//             <Icon name='dollar' color='green' />
//             {value * product.price}
//           </Table.Cell>
// <Table.Cell width={1}>
//   <Icon
//     name='cancel'
//     color='red'
//     onClick={() =>
//       updateProduct({ product: key, quantity: 0 })
//     }
//   />
// </Table.Cell>
//         </Table.Row>
//       );
//     }
//   })}

const Checkout = ({ cart, products }) => {
  const tableCells = Object.entries(cart).map(([key, value], i) => {
    if (value > 0) {
      const product = products.find(tgt => tgt.name === key);
      return (
        <Table.Row key={i}>
          <Table.Cell>{key}</Table.Cell>
          <Table.Cell>{product.price}</Table.Cell>
          <Table.Cell>{`${value} Beers`}</Table.Cell>
          <Table.Cell>
            <Icon name='dollar' color='green' />
            {value * product.price}
          </Table.Cell>
          {/* <Table.Cell width={1}>
            <Icon
              name='cancel'
              color='red'
              onClick={() =>
                // updateProduct({ product: key, quantity: 0 })
                console.log('delete onClick - IMPORT ACTIONS')
              }
            />
          </Table.Cell> */}
        </Table.Row>
      );
    } else {
      return <div />;
    }
  });

  console.log(cart, products);
  return (
    <Grid.Row centered>
      <Grid.Column computer={8}>
        <Segment>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.Cell />
                <Table.Cell>Price</Table.Cell>
                <Table.Cell>Quantity</Table.Cell>
                <Table.Cell>Total</Table.Cell>
              </Table.Row>
            </Table.Header>
            <Table.Body>{tableCells}</Table.Body>
          </Table>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  );
};

const mapStateToProps = state => ({
  cart: state.product.cart,
  products: state.product.products
});

export default connect(
  mapStateToProps,
  {}
)(Checkout);
