import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  Segment,
  Header,
  Form,
  Divider,
  Button,
  Popup
} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Geosuggest from 'react-geosuggest';
import Map from '../common/Map';

import { updateProfile } from '../store/actions/authActions';

const google = window.google;

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      birthdate: '',
      address: {
        coordinates: '',
        name: ''
      },
      notes: '',
      portalShow: false,
      showPopup: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.isLoaded) {
      const { birthdate, ...rest } = props.profile;
      const date = birthdate ? birthdate.toDate() : '';
      return {
        birthdate: date,
        ...rest
      };
    }
    return null;
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleDate = birthdate => this.setState({ birthdate });

  handlePortal = () => this.setState({ portalShow: !this.state.portalShow });

  handlePopupOpen = () => {
    this.setState({ showPopup: true });

    this.timeout = setTimeout(() => {
      this.setState({ showPopup: false });
    }, 3000);
  };

  handlePopupClose = () => {
    this.setState({ showPopup: false });
    clearTimeout(this.timeout);
  };

  onSuggestSelect = place => {
    const temp = {
      coordinates: place.location,
      name: place.description
    };

    if (place)
      this.setState({
        address: temp
      });
  };

  updateProfile = () => {
    // this.validateProfile();
    this.props.updateProfile(this.state, this.props.uid);
    this.handlePopupOpen();
  };

  // validateProfile = () => {
  //   const { firstName, lastName, email, phone, birthdate, }
  //   return firstName !=== '' && lastName ==
  // };

  render() {
    return (
      <Grid.Row centered style={{ paddingTop: 0 }}>
        <Grid.Column mobile={14} tablet={14} computer={10}>
          <Segment style={{ transparecy: 0.5 }}>
            <Header as='h1' textAlign='center'>
              Account Information
            </Header>
            <Popup
              trigger={<Button positive fluid content='Save Changes' />}
              content={'Profile updated'}
              on='click'
              open={this.state.showPopup}
              onClose={this.handlePopupClose}
              onOpen={this.updateProfile}
              position='right center'
            />

            <Divider />

            <Form size='small'>
              <Form.Group widths='equal'>
                <Form.Input
                  icon='user'
                  name='firstName'
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  iconPosition='left'
                  placeholder='First name'
                  label='First name'
                />
                <Form.Input
                  icon='user'
                  name='lastName'
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  iconPosition='left'
                  placeholder='Last Name'
                  label='Last name'
                />
              </Form.Group>
              <Form.Input
                icon='mail'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
                iconPosition='left'
                placeholder='Email'
                label='Email'
              />
              <Form.Group widths='equal'>
                <Form.Input
                  icon='phone'
                  name='phone'
                  value={this.state.phone}
                  onChange={this.handleChange}
                  iconPosition='left'
                  placeholder='Phone'
                  label='Phone'
                />
                <Form.Field style={{ width: '100%' }}>
                  <label>Date of Birth</label>
                  <DatePicker
                    openToDate={new Date('1996/06/10')}
                    dateFormat='dd/MM/yyyy'
                    placeholderText='dd/mm/yyyy'
                    onChange={this.handleDate}
                    selected={this.state.birthdate}
                    showMonthDropdown
                    showYearDropdown
                  />
                </Form.Field>
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Field>
                  <label>Address</label>
                  <Geosuggest
                    location={new google.maps.LatLng(9.012007, -79.478704)}
                    radius={50}
                    onSuggestSelect={this.onSuggestSelect}
                    initialValue={this.state.address.name}
                  />
                  <Form.TextArea
                    name='notes'
                    value={this.state.notes}
                    onChange={this.handleChange}
                    placeholder=''
                    label='Delivery Notes'
                  />
                </Form.Field>
                {this.state.address.coordinates !== '' && (
                  <Map location={this.state.address.coordinates} />
                )}
              </Form.Group>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.firebase.profile,
  uid: state.firebase.auth.uid
});

export default connect(
  mapStateToProps,
  { updateProfile }
)(Profile);
