import React from 'react';
import { connect } from 'react-redux';
import { Segment, Button, Label, Icon, Table, Grid } from 'semantic-ui-react';

import {
  updateProduct,
  getProductPrice
} from '../store/actions/productActions';
import { products } from '../mock/data';

const Checkout = ({ cart, updateProduct, getProductPrice }) => {
  let total = 0;
  let count = 0;

  Object.entries(cart).forEach(([key, val]) => {
    total += products.find(tgt => tgt.name === key).price * val;
    count += val;
  });

  const formatBeers = count => {
    let result = '';

    const [cases, sixpacks] = (count / 24 + '')
      .split('.')
      .map(i => parseInt(i));

    if (cases > 0) {
      result += `${cases} case`;

      if (cases > 1) result += 's';
      if (sixpacks) result += ' & ';
    }

    if (sixpacks === 25) result += '1 sixpack';
    if (sixpacks === 5) result += '2 sixpacks';
    if (sixpacks === 75) result += '3 sixpacks';

    return result;
  };

  const formattedCount = formatBeers(count);

  //   <Segment>
  //   <Grid>
  //     <Grid.Column computer={10} mobile={16} tablet={8}>
  //       <Button as='div' labelPosition='right' fluid>
  //         <Button animated positive fluid onClick={() => console.log(cart)}>
  //           <Button.Content visible>
  //             <Icon name='cart' />
  //             {`Buy ${count} Beers`}
  //           </Button.Content>
  //           <Button.Content hidden>{formattedCount}</Button.Content>
  //         </Button>

  //         <Label basic color='green' pointing='left'>
  //           <Icon name='dollar' />
  //           {total}
  //         </Label>
  //       </Button>
  //     </Grid.Column>
  //     <Grid.Column computer={6} mobile={16} tablet={8}>
  //       <Button animated primary fluid onClick={() => console.log(cart)}>
  //         <Button.Content visible>Subscribe</Button.Content>
  //         <Button.Content hidden>More Info...</Button.Content>
  //       </Button>
  //     </Grid.Column>
  //   </Grid>

  //   <Table compact='very' unstackable striped basic='very' size='small'>
  //     <Table.Header>
  //       <Table.Row>
  //         <Table.HeaderCell>Item</Table.HeaderCell>
  //         <Table.HeaderCell>Quantity</Table.HeaderCell>
  //         <Table.HeaderCell>Price</Table.HeaderCell>
  //       </Table.Row>
  //     </Table.Header>
  //     <Table.Body>
  //       {Object.entries(cart).map(([key, value], i) => {
  //         if (value > 0) {
  //           const product = products.find(tgt => tgt.name === key);
  //           // getProductPrice(key);
  //           return (
  //             <Table.Row key={i}>
  //               <Table.Cell>{key}</Table.Cell>
  //               <Table.Cell>{`${value} Beers`}</Table.Cell>
  //               <Table.Cell>
  //                 <Icon name='dollar' color='green' />
  //                 {value * product.price}
  //               </Table.Cell>
  //               <Table.Cell width={1}>
  //                 <Icon
  //                   name='cancel'
  //                   color='red'
  //                   onClick={() =>
  //                     updateProduct({ product: key, quantity: 0 })
  //                   }
  //                 />
  //               </Table.Cell>
  //             </Table.Row>
  //           );
  //         }
  //       })}
  //       <Table.Row />
  //     </Table.Body>
  //   </Table>
  // </Segment>

  if (total > 0) {
    return (
      <Grid>
        <Grid.Column computer={10} mobile={16} tablet={8}>
          <Button as='div' labelPosition='right' fluid>
            <Button animated positive fluid onClick={() => console.log(cart)}>
              <Button.Content visible>
                <Icon name='cart' />
                {`Buy ${count} Beers`}
              </Button.Content>
              <Button.Content hidden>{formattedCount}</Button.Content>
            </Button>

            <Label basic color='green' pointing='left'>
              <Icon name='dollar' />
              {total}
            </Label>
          </Button>
        </Grid.Column>
        <Grid.Column computer={6} mobile={16} tablet={8}>
          <Button animated primary fluid onClick={() => console.log(cart)}>
            <Button.Content visible>Subscribe</Button.Content>
            <Button.Content hidden>More Info...</Button.Content>
          </Button>
        </Grid.Column>
      </Grid>
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
  { updateProduct, getProductPrice }
)(Checkout);
