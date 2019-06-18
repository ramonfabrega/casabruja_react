import React, { useState } from 'react';
import {
  Card,
  Image,
  Grid,
  Button,
  Label,
  Form,
  Icon
} from 'semantic-ui-react';

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

const Product = ({ product }) => {
  const [value, setValue] = useState(sizes[0].value);
  const [quantity, setQuantity] = useState(0);

  const beers = value * quantity;

  return (
    <Card>
      <Image src={product.image} wrapped size='tiny' centered />
      <Card.Content>
        <Card.Header>{product.name}</Card.Header>
        <Card.Meta>{product.style}</Card.Meta>
        <Card.Description>
          <Form size='mini'>
            <Form.Group widths='equal'>
              <Form.Field>
                <Button.Group size='mini'>
                  <Button
                    icon='minus'
                    negative
                    onClick={() => quantity > 0 && setQuantity(quantity - 1)}
                  />
                  <Button>{quantity}</Button>
                  <Button
                    icon='plus'
                    positive
                    onClick={() => setQuantity(quantity + 1)}
                  />
                </Button.Group>
              </Form.Field>
              <Form.Select
                fluid
                value={value}
                options={sizes}
                onChange={(e, { value }) => setValue(value)}
              />
            </Form.Group>
          </Form>

          {beers > 0 ? (
            <Button
              as='div'
              labelPosition='right'
              style={{ marginTop: 5 }}
              fluid
            >
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

export default Product;
