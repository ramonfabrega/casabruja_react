import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import fula_1 from '../../img/products/fula_1.jpg';
import chivo_1 from '../../img/products/chivo_1.jpg';
import sirfrancis_1 from '../../img/products/sirfrancis_1.jpg';
import tulivieja_1 from '../../img/products/tulivieja_1.jpg';

import Product from '../product/Product';

// 1024px (laptop) & above: col width = 4
// below: col width = 8
// mobile => < 425px => col_width: 12
// tablet => < 768px => col_width: 8
// laptop => < 1024px => col_wdith: 4

const products = [
  {
    name: 'Fula',
    style: 'Blonde Ale',
    price: 1.5,
    image: fula_1,
    abv: 2.4,
    ibu: 24
  },
  {
    name: 'Chivoperro',
    style: 'India Pale Ale',
    price: 2,
    image: chivo_1,
    abv: 6.1,
    ibu: 49
  },
  {
    name: 'Sir Francis',
    style: 'Red Ale',
    price: 2.5,
    image: sirfrancis_1,
    abv: 5.5,
    ibu: 26
  },
  {
    name: 'Tulivieja',
    style: 'Imperial India Pale Ale',
    price: 3.0,
    image: tulivieja_1,
    abv: 8.4,
    ibu: 101
  },
  {
    name: 'Tulivieja',
    style: 'Imperial India Pale Ale',
    price: 3.0,
    image: tulivieja_1,
    abv: 8.4,
    ibu: 101
  },
  {
    name: 'Tulivieja',
    style: 'Imperial India Pale Ale',
    price: 3.0,
    image: tulivieja_1,
    abv: 8.4,
    ibu: 101
  },
  {
    name: 'Tulivieja',
    style: 'Imperial India Pale Ale',
    price: 3.0,
    image: tulivieja_1,
    abv: 8.4,
    ibu: 101
  },
  {
    name: 'Tulivieja',
    style: 'Imperial India Pale Ale',
    price: 3.0,
    image: tulivieja_1,
    abv: 8.4,
    ibu: 101
  }
];

export default class Dashboard extends Component {
  render() {
    return (
      <Grid centered>
        {products.map((p, i) => (
          <Grid.Column mobile={12} tablet={8} computer={4} key={i}>
            <Product product={p} />
          </Grid.Column>
        ))}
      </Grid>
    );
  }
}
