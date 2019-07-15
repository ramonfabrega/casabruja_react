import React from 'react';
import { Grid } from 'semantic-ui-react';

import ProductTable from '../product/ProductTable';
import Pay from './Pay';

// const mockCart = {
//   Chitra: 24,
//   Chivoperro: 12,
//   Fula: 48,
//   Tulivieja: 6
// };

const Checkout = () => {
  return (
    <Grid.Row centered>
      <Grid.Column
        computer={8}
        tablet={8}
        mobile={16}
        style={{
          paddingLeft: '5vh',
          paddingRight: '5vh',
          paddingBottom: '5vh'
        }}
      >
        <ProductTable />
      </Grid.Column>
      <Grid.Column
        computer={5}
        tablet={8}
        mobile={16}
        style={{ paddingLeft: '5vh', paddingRight: '5vh' }}
      >
        <Pay />
      </Grid.Column>
    </Grid.Row>
  );
};

export default Checkout;
