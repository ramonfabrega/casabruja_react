import React from 'react';
import { Grid } from 'semantic-ui-react';

import ProductTable from '../product/ProductTable';

// const mockCart = {
//   Chitra: 24,
//   Chivoperro: 12,
//   Fula: 48,
//   Tulivieja: 6
// };

const Checkout = () => {
  return (
    <Grid.Row centered>
      <Grid.Column computer={8} tablet={12} mobile={15}>
        <ProductTable />
      </Grid.Column>
      <Grid.Column computer={6} tablet={6} mobile={16}>
        {/* Pay.js */}
      </Grid.Column>
    </Grid.Row>
  );
};

export default Checkout;
