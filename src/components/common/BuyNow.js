import React from 'react';
import { connect } from 'react-redux';
import { Button, Label, Icon, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const BuyNow = ({ cart, products }) => {
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

  if (total > 0) {
    return (
      <Grid>
        <Grid.Column computer={10} mobile={16} tablet={8}>
          <Button as='div' labelPosition='right' fluid>
            <Button as={Link} to='/checkout' animated positive fluid>
              <Button.Content visible>
                <Icon name='cart' />
                {`Buy ${count} Beers`}
              </Button.Content>
              <Button.Content hidden>{formattedCount}</Button.Content>
            </Button>

            <Label as={Link} to='/checkout' basic color='green' pointing='left'>
              <Icon name='dollar' />
              {total}
            </Label>
          </Button>
        </Grid.Column>
        <Grid.Column computer={6} mobile={16} tablet={6}>
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
  cart: state.product.cart,
  products: state.product.products
});

export default connect(
  mapStateToProps,
  {}
)(BuyNow);
