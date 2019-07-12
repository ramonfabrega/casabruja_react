import React from 'react';
import { connect } from 'react-redux';
import { Grid, Segment, Header, Label } from 'semantic-ui-react';
import {
  CircularProgressbarWithChildren,
  buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// import { QRCode } from 'react-qrcode-logo';
// import qrtest from '../../img/qrtest.png';
// import qr from '../../img/qr.png';

const Status = ({ profile, packages }) => {
  if (profile.firstName && packages.length > 0) {
    const pkg = packages.find(p => p.name === profile.level);

    let visBrewPoints = profile.brewPoints % 100;
    if (visBrewPoints === 0) visBrewPoints = 100;

    return (
      <Segment inverted>
        <Grid verticalAlign='middle'>
          <Grid.Column computer={6} tablet={6} mobile={6}>
            {/* <Image src={qrtest} size='small' centered /> */}
            <CircularProgressbarWithChildren
              value={visBrewPoints}
              strokeWidth={3}
              background={true}
              backgroundPadding={3}
              styles={buildStyles({
                backgroundColor: '#dd4b39',
                pathColor: '#ffffff',
                textColor: '#ffffff',
                trailColor: '#dd4b39'
              })}
            >
              <div style={{ fontSize: 26, marginTop: 5 }}>
                {profile.brewPoints}
              </div>
              <div style={{ fontSize: 12, marginTop: 5 }}>Puntos Brujos</div>
            </CircularProgressbarWithChildren>
          </Grid.Column>
          <Grid.Column computer={10} tablet={10} mobile={10}>
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
            {/* <Grid.Row style={{ paddingTop: 10 }}>
              <Label
                size='medium'
                style={{ backgroundColor: '#dd4b39', color: 'white' }}
              >
                {`${profile.brewPoints} Puntos Brujos`}
              </Label>
            </Grid.Row> */}
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
