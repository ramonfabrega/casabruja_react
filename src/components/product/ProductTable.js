import React from 'react';
import { Table, Header, Image, Icon } from 'semantic-ui-react';

import { default as badge } from '../../img/badges/fula.png';

const Row = ({ product, amount, f }) => {
  return (
    <Table.Row textAlign='center'>
      <Table.Cell textAlign='left'>
        <Image
          circular
          src={badge}
          avatar
          bordered
          style={{ backgroundColor: 'black', marginRight: 10 }}
        />
        {product.name}
      </Table.Cell>
      <Table.Cell>
        <Icon name='dollar' color='green' />
        {product.price}
      </Table.Cell>
      <Table.Cell>{amount}</Table.Cell>
      <Table.Cell>
        <Icon name='dollar' color='green' />
        {amount * product.price}
      </Table.Cell>
      <Table.Cell width={1}>
        <Icon
          name='edit'
          color='grey'
          onClick={() => {
            f.setModal(true);
            f.setSelectedProduct(product);
          }}
        />
      </Table.Cell>
    </Table.Row>
  );
};

const ProductTable = ({ cart, products, f }) => {
  const headers = ['', 'Price', 'Quantity', 'Total'];
  return (
    <Table compact size='small' striped definition unstackable singleLine>
      <Table.Header>
        <Table.Row textAlign='center'>
          {headers.map((h, i) => (
            <Table.Cell key={i}>
              <Header sub>{h}</Header>
            </Table.Cell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {Object.entries(cart).map(([k, v], i) => (
          <Row
            key={i}
            product={products.find(tgt => tgt.name === k)}
            amount={v}
            f={f}
          />
        ))}
      </Table.Body>
    </Table>
  );
};

export default ProductTable;
