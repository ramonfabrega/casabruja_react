import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Card,
  Image,
  Grid,
  Button,
  Label,
  Form,
  Icon
} from 'semantic-ui-react';

import { updateProduct } from '../store/actions/productActions';

const sizes = [
  {
    key: 6,
    value: 6,
    text: '6 pack'
  },
  {
    key: 12,
    value: 12,
    text: '12 pack'
  },
  {
    key: 24,
    value: 24,
    text: '24 pack'
  }
];

const Product = ({ product, cart, updateProduct }) => {
  const [value, setValue] = useState(sizes[0].value);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const load = cart[product.name];
    if (load || load === 0) setQuantity(load / value);
  }, [cart, product.name, value]);

  const beers = value * quantity;

  const quantityHandler = n => {
    if (quantity + n >= 0) {
      updateProduct({
        product: product.name,
        quantity: (quantity + n) * value
      });
      setQuantity(quantity + n);
    }
  };

  const valueHandler = n => {
    updateProduct({ product: product.name, quantity: n * quantity });
    setValue(n);
  };

  return (
    <Card centered color='violet'>
      <Image src={product.image} wrapped size='tiny' centered />
      <Card.Content style={{ paddingRight: 5 }}>
        <Card.Header>{product.name}</Card.Header>
        <Card.Meta>{product.style}</Card.Meta>
        <Card.Description>
          <Form size='mini'>
            <Form.Group widths='equal'>
              <Form.Field>
                <Button.Group size='mini' fluid>
                  <Button
                    icon='minus'
                    negative
                    onClick={() => quantityHandler(-1)}
                  />
                  <Button>{quantity}</Button>
                  <Button
                    icon='plus'
                    positive
                    onClick={() => quantityHandler(1)}
                  />
                </Button.Group>
              </Form.Field>
              <Form.Select
                fluid
                value={value}
                options={sizes}
                onChange={(e, { value }) => valueHandler(value)}
              />
            </Form.Group>
          </Form>

          {beers > 0 ? (
            <Button as='div' labelPosition='right' fluid>
              <Button secondary icon='cart' fluid content={`${beers} Beers`} />
              <Label basic color='black' pointing='left'>
                <Icon name='dollar' />
                {product.price * beers}
              </Label>
            </Button>
          ) : (
            <Label tag color='blue'>
              <Icon name='dollar' />
              {product.price % 1 === 0
                ? product.price
                : product.price.toFixed(2)}
            </Label>
          )}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Grid columns={2}>
          <Grid.Column>{`${product.abv}% ABV`}</Grid.Column>
          <Grid.Column textAlign='right'>{`${product.ibu} IBU`}</Grid.Column>
        </Grid>
      </Card.Content>
    </Card>
  );
};

const mapStateToProps = state => ({
  cart: state.product.cart
});

export default connect(
  mapStateToProps,
  { updateProduct }
)(Product);
