import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setLocalPackage } from '../store/actions/packagesActions';

import { formatBeers } from '../common/tools';

import Status from '../profile/Status';

import {
  Grid,
  Dropdown,
  Statistic,
  Button,
  Label,
  Header,
  Icon
} from 'semantic-ui-react';

export class Sub extends Component {
  constructor(props) {
    super(props);

    this.state = { beers: [] };
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.isLoaded) {
      return {
        beers: props.beerPreferences
      };
    }
    return null;
  }

  updateBeer = (value, i) => {
    const beers = this.state.beers;
    beers[i] = value;

    this.setState({ beers });
  };

  addBeer = () => {
    const beers = this.state.beers;
    beers.push(null);
    this.setState({ beers });
  };

  removeBeer = i => {
    const beers = this.state.beers;
    beers.splice(i, 1);
    this.setState({ beers });
  };

  render() {
    const { packages, selectedPackage, beerPreferences, products } = this.props;

    if (packages.length > 0 && beerPreferences && products) {
      const pkg = packages.find(p => p.name === selectedPackage);
      const packagesOptions = packages
        .filter(p => p.enabled)
        .map(p => ({
          key: p.name,
          text: p.name,
          value: p.name
        }));

      const beerOptions = products.map(p => ({
        key: p.name,
        text: p.name,
        value: p.name
      }));

      return (
        <React.Fragment>
          <Grid.Row centered>
            <Grid.Column
              computer={6}
              tablet={8}
              mobile={16}
              style={{ paddingBottom: 25 }}
            >
              <Status />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column
              computer={3}
              tablet={4}
              mobile={14}
              color={pkg.color}
              textAlign='center'
              style={{ paddingBottom: 30 }}
            >
              <Grid.Row>
                <Button.Group basic inverted>
                  <Dropdown
                    fluid
                    button
                    className='small'
                    selection
                    options={packagesOptions}
                    onChange={(e, { value }) =>
                      this.props.setLocalPackage(value)
                    }
                    value={selectedPackage}
                  />
                </Button.Group>
              </Grid.Row>
              <Grid.Row style={{ paddingTop: 30 }}>
                <Statistic value={`$${pkg.price}`} inverted color={pkg.color} />
              </Grid.Row>
              <Grid.Row style={{ paddingTop: 30 }}>
                <p style={{ marginBottom: 5 }}>{`${formatBeers(
                  pkg.amount
                )} de cerveza`}</p>
              </Grid.Row>
              <Grid.Row style={{ paddingBottom: 5 }}>
                <Label
                  size='small'
                  style={{ backgroundColor: '#dd4b39', color: 'white' }}
                >
                  {`${pkg.brewPoints} Puntos Brujos`}
                </Label>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column computer={4} tablet={6} mobile={14} color='black'>
              <Grid.Row style={{ marginTop: 10, marginBottom: 25 }}>
                <Header as='h4' inverted>
                  Escoge hasta 3 tipos distintos de cervezas:
                </Header>
              </Grid.Row>
              {this.state.beers.map((beer, i) => (
                <Grid.Row style={{ marginTop: 10 }} key={i}>
                  <Button.Group basic inverted>
                    <Dropdown
                      button
                      className='small'
                      selection
                      options={beerOptions}
                      onChange={(e, { value }) => this.updateBeer(value, i)}
                      value={beer}
                    />
                  </Button.Group>
                  <Icon
                    style={{ marginLeft: 5 }}
                    name='remove'
                    color='red'
                    onClick={() => this.removeBeer(i)}
                  />
                </Grid.Row>
              ))}
              {this.state.beers.length < 3 && (
                <Grid.Row style={{ marginTop: 10 }}>
                  <Button
                    icon='add'
                    labelPosition='right'
                    content='Agrega una cerveza'
                    inverted
                    size='tiny'
                    color='orange'
                    onClick={this.addBeer}
                  />
                </Grid.Row>
              )}
            </Grid.Column>
          </Grid.Row>
        </React.Fragment>
      );
    } else {
      return <React.Fragment />;
    }
  }
}

const mapStateToProps = state => ({
  selectedPackage: state.packages.selectedPackage,
  packages: state.packages.data,
  beerPreferences: state.firebase.profile.beerPreferences,
  products: state.product.products
});

export default connect(
  mapStateToProps,
  { setLocalPackage }
)(Sub);
