import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';

export default class Dashboard extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <h1>Dashboard</h1>
            <Button>Test</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
