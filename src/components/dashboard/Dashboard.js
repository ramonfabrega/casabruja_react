import React, { useState } from 'react';

import { Grid, Message } from 'semantic-ui-react';

import Status from '../profile/Status';
import Packages from '../common/Packages';

const Dashboard = () => {
  const [hideMessage, setHideMessage] = useState(false);
  return (
    <Grid.Row centered>
      <Grid.Column
        computer={6}
        tablet={8}
        mobile={16}
        style={{ paddingBottom: 25 }}
      >
        <Status />
        <Message
          onDismiss={() => setHideMessage(true)}
          hidden={hideMessage}
          color='black'
          header='Canjea tus Puntos Brujos!'
          content='Recibe una cerveza gratis en el taproom por 100 Puntos Brujos. '
        />
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
