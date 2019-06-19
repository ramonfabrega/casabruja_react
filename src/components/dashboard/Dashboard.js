import React, { Component } from 'react';
import { Grid, Image, Divider } from 'semantic-ui-react';

import Product from '../product/Product';
import Checkout from '../common/Checkout';
import { products } from '../mock/data';

import header_white_3 from '../../img/header_white_3.png';
import header_1 from '../../img/header1.png';

import light_square from '../../img/transparent/logos/light_square.png';
import dark_header from '../../img/transparent/logos/dark_header.png';
import light_header from '../../img/transparent/logos/light_header.png';

export default class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid.Row centered>
          <Grid.Column computer={6} tablet={15} mobile={15} textAlign='right'>
            <Checkout />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered style={{ padding: 25 }}>
          {products.map((p, i) => (
            <Grid.Column
              mobile={12}
              tablet={8}
              computer={4}
              key={i}
              style={{ marginBottom: 25 }}
              centered
            >
              <Product product={p} />
            </Grid.Column>
          ))}
        </Grid.Row>
      </React.Fragment>
    );
  }
}
