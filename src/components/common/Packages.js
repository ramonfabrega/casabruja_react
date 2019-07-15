import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  Grid,
  Segment,
  Header,
  Statistic,
  Label,
  Button
} from 'semantic-ui-react';

import { formatBeers } from './tools';

import {
  setUserPackage,
  setLocalPackage
} from '../store/actions/packagesActions';

const Packages = ({ packages, profile, setLocalPackage, filter, title }) => {
  if (profile.firstName && packages.length > 0) {
    // const pkgs = packages.filter(p => p.enabled && p.name !== profile.level);
    const pkgs = packages.filter(filter);

    return (
      <Segment inverted>
        {title && (
          <Header as='h5' style={{ paddingBottom: 10 }} textAlign='center'>
            {title}
          </Header>
        )}
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
                {/* <Label
                  size='small'
                  style={{
                    backgroundColor: '#dd4b39',
                    color: 'white',
                    marginBottom: 5
                  }}
                >
                  {`${formatBeers(p.amount)} de cerveza`}
                </Label> */}
                <p style={{ marginBottom: 5 }}>{`${formatBeers(
                  p.amount
                )} de cerveza`}</p>
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
                  as={Link}
                  to='/subscribe'
                  size='tiny'
                  inverted
                  basic
                  content='BUY'
                  onClick={() => setLocalPackage(p.name)}
                />
              </Grid.Row>
            </Grid.Column>
          ))}
        </Grid>
      </Segment>
    );
  } else {
    return <React.Fragment />;
  }
};

const mapStateToProps = state => ({
  profile: state.firebase.profile,
  packages: state.packages.data
});

export default connect(
  mapStateToProps,
  { setUserPackage, setLocalPackage }
)(Packages);
