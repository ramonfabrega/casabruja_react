import React from 'react';

import { Grid } from 'semantic-ui-react';

import Status from '../profile/Status';
import Packages from '../common/Packages';

const Dashboard = () => {
  return (
    <Grid.Row centered>
      <Status />
      <Packages />
    </Grid.Row>
  );
};

export default Dashboard;
