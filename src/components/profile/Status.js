import React from 'react';
import { connect } from 'react-redux';
import { Grid, Segment, Header, Image, Label } from 'semantic-ui-react';

import qrtest from '../../img/qrtest.png';

// const test = ['#ffa600', '#dd4b39', '#ee682d'];

const Status = ({ profile, packages }) => {
  if (profile.firstName && packages.length > 0) {
    const pkg = packages.find(p => p.name === profile.level);

    return (
      <Grid.Column
        computer={5}
        tablet={8}
        mobile={11}
        style={{ paddingBottom: 25 }}
      >
        <Segment inverted>
          <Grid>
            <Grid.Column computer={6} tablet={6} mobile={16}>
              <Image src={qrtest} size='small' centered />
            </Grid.Column>
            <Grid.Column computer={10} tablet={10} mobile={16}>
              <Grid.Row>
                <Header as='h2' inverted>
                  {`${profile.firstName} ${profile.lastName}`}
                </Header>
              </Grid.Row>
              <Grid.Row style={{ paddingTop: 10 }}>
                <Label color={pkg.color} size='medium'>
                  {pkg.name}
                </Label>
              </Grid.Row>
              <Grid.Row style={{ paddingTop: 10 }}>
                <Label
                  size='medium'
                  style={{ backgroundColor: '#dd4b39', color: 'white' }}
                >
                  {`${profile.points} Puntos Brujos`}
                </Label>
              </Grid.Row>
              <Grid.Row style={{ paddingTop: 10 }}>
                <Label
                  size='medium'
                  style={{ backgroundColor: '#ee682d', color: 'white' }}
                >
                  Próxima Entrega:
                  <Label.Detail>N/A</Label.Detail>
                </Label>
              </Grid.Row>
            </Grid.Column>
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

export default connect(mapStateToProps)(Status);
