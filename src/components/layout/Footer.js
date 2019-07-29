import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

const Footer = () => {
  return (
    <Grid.Row style={{ marginTop: 50 }}>
      <Grid.Column floated='right' textAlign='right'>
        <Header
          as='a'
          href='http://www.ramonfabrega.com/'
          sub
          inverted
          style={{ opacity: 0.2, marginRight: 25 }}
        >
          Copyright &copy; {new Date().getFullYear()} Ramon Fabrega
        </Header>
      </Grid.Column>
    </Grid.Row>
  );
};

export default Footer;
