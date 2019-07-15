import React from 'react';

import { Grid } from 'semantic-ui-react';

import Status from '../profile/Status';
import Packages from '../common/Packages';

import Messages from '../common/Messages';
import { messages } from '../common/Constants';

const Dashboard = () => {
  return (
    <Grid.Row centered>
      <Grid.Column
        computer={6}
        tablet={8}
        mobile={12}
        style={{ paddingBottom: 25 }}
      >
        <Status />
        <Messages messages={messages.dashboard} />
      </Grid.Column>
      <Grid.Column computer={8} tablet={12} mobile={12}>
        <Packages
          title='Subscribete a nuestro club y recibe cervezas cada mes o semana'
          filter={p => p.enabled}
        />
      </Grid.Column>
    </Grid.Row>
  );
};

export default Dashboard;
