import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';

import Product from '../product/Product';
import Checkout from '../common/Checkout';
import { products } from '../mock/data';

import header1 from '../../img/header1.png';

export default class Dashboard extends Component {
  render() {
    return (
      <Grid centered>
        <Grid.Row>
          <Grid.Column computer={10} tablet={15} mobile={15}>
            <Image src={header1} />
          </Grid.Column>
          <Grid.Column computer={6} tablet={15} mobile={15} textAlign='right'>
            <Checkout />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          {products.map((p, i) => (
            <Grid.Column
              mobile={12}
              tablet={8}
              computer={4}
              key={i}
              style={{ marginBottom: 25 }}
            >
              <Product product={p} />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    );
  }
}
