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
import InputMask from 'react-input-mask';

import Status from './Status';

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
      avatar: null,
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

  handlePhone = e => this.setState({ [e.target.name]: e.target.value });

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
    if (place) {
      this.setState({
        address: { coordinates: place.location, name: place.description }
      });
    }
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
        <Status />
        <Grid.Column mobile={14} tablet={14} computer={8}>
          <Segment inverted>
            <Header as='h2' textAlign='center'>
              Actualiza tu Cuenta
            </Header>
            <Popup
              trigger={<Button positive fluid content='Guardar Cambios' />}
              content={'Profile updated'}
              on='click'
              open={this.state.showPopup}
              onClose={this.handlePopupClose}
              onOpen={this.updateProfile}
              position='right center'
            />

            <Divider />

            <Form size='small' inverted>
              <Form.Group widths='equal'>
                <Form.Input
                  icon='user'
                  name='firstName'
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  iconPosition='left'
                  placeholder='Nombre'
                  label='Nombre'
                />
                <Form.Input
                  icon='user'
                  name='lastName'
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  iconPosition='left'
                  placeholder='Apellido'
                  label='Apellido'
                />
              </Form.Group>
              <Form.Input
                icon='mail'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
                iconPosition='left'
                placeholder='Correo electrónico'
                label='Correo electrónico'
              />
              <Form.Group widths='equal'>
                {/* <Form.Input
                  icon='phone'
                  name='phone'
                  value={this.state.phone}
                  onChange={this.handleChange}
                  iconPosition='left'
                  placeholder='69831560'
                  label='Teléfono'
                /> */}
                <InputMask
                  mask='+507    9999-9999'
                  value={this.state.phone}
                  onChange={this.handlePhone}
                  alwaysShowMask={false}
                  maskChar=''
                >
                  {inProps => (
                    <Form.Input
                      {...inProps}
                      icon='phone'
                      name='phone'
                      iconPosition='left'
                      label='Teléfono'
                      placeholder=''
                    />
                  )}
                </InputMask>
                <Form.Field style={{ width: '100%' }}>
                  <label>Fecha de Nacimiento</label>
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
                  <label>Dirección</label>
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
                    placeholder={
                      'Direcciones adicionales\nNumero de apartamento\nNotas del delivery'
                    }
                    label='Informacion adicional'
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
