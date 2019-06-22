import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

const Footer = () => {
  return (
    <Grid.Row>
      <Grid.Column floated='right' textAlign='right'>
        {/* <Header content='Made by Ramon Fabrega' sub inverted /> */}
        <Header sub inverted style={{ opacity: 0.2, marginRight: 25 }}>
          Copyright &copy; {new Date().getFullYear()} Ramon Fabrega
        </Header>
      </Grid.Column>
    </Grid.Row>
  );
};

export default Footer;
