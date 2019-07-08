import React from 'react';
import { connect } from 'react-redux';

import {
  Grid,
  Segment,
  Header,
  Statistic,
  Label,
  Button
} from 'semantic-ui-react';

import { formatBeers } from '../common/tools';

const Packages = ({ profile, packages }) => {
  if (profile.firstName && packages.length > 0) {
    console.log(packages);
    const pkg = packages.find(p => p.name === profile.level);
    const pkgs = packages.filter(p => p.enabled);
    console.log(pkgs, pkg);

    return (
      <Grid.Column computer={8} tablet={12} mobile={10}>
        <Segment inverted>
          <Grid columns='equal' textAlign='center' stackable>
            {pkgs.map((p, i) => (
              <Grid.Column key={i} color={p.color}>
                <Grid.Row style={{ paddingTop: 15 }}>
                  <Header sub inverted>
                    {p.name.toUpperCase()}
                  </Header>
                </Grid.Row>
                <Grid.Row style={{ paddingTop: 30 }}>
                  <Statistic value={`$${p.price}`} inverted color={p.color} />
                </Grid.Row>
                <Grid.Row style={{ paddingTop: 30 }}>
                  <Label
                    size='small'
                    style={{
                      backgroundColor: '#dd4b39',
                      color: 'white',
                      marginBottom: 5
                    }}
                  >
                    {`${formatBeers(p.amount)} de cerveza`}
                  </Label>
                </Grid.Row>
                <Grid.Row style={{ paddingBottom: 30 }}>
                  <Label
                    size='small'
                    style={{ backgroundColor: '#dd4b39', color: 'white' }}
                  >
                    {`${p.brewPoints} Puntos Brujos`}
                  </Label>
                </Grid.Row>
                <Grid.Row style={{ paddingBottom: 15 }}>
                  <Button
                    size='tiny'
                    inverted
                    basic
                    color='white'
                    content='BUY'
                  />
                </Grid.Row>
              </Grid.Column>
            ))}
          </Grid>
        </Segment>
      </Grid.Column>
    );
  } else {
    return <React.Fragment />;
  }
};

const mapStateToProps = state => ({
  profile: state.firebase.profile,
  packages: state.packages
});

export default connect(mapStateToProps)(Packages);
