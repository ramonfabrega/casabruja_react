import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Product from '../product/Product';
import BuyNow from '../common/BuyNow';

class Shop extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid.Row centered>
          <Grid.Column computer={8} tablet={15} mobile={15} textAlign='right'>
            <BuyNow />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered style={{ padding: 25 }}>
          {this.props.products &&
            this.props.products.map((p, i) => (
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
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.product.products
});

export default connect(mapStateToProps)(Shop);
