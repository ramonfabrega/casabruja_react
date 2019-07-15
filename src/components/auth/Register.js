import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Grid, Message } from 'semantic-ui-react';

import { register } from '../store/actions/authActions';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: ''
    };
  }

  // Redirect to home page if already logged in
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.props.auth.uid) this.props.history.push('/');
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleRegister = e => {
    e.preventDefault();

    this.props.register(this.state);
  };

  render() {
    const { firstName, lastName, email, password, password2 } = this.state;

    return (
      <Grid.Row centered>
        <Grid.Column computer={6} tablet={10} mobile={15}>
          <Form inverted>
            {/* <Segment stacked inverted> */}
            <Form.Group widths='equal'>
              <Form.Input
                fluid
                icon='user'
                name='firstName'
                value={firstName}
                onChange={this.handleChange}
                iconPosition='left'
                placeholder='Nombre'
              />
              <Form.Input
                fluid
                icon='user'
                name='lastName'
                value={lastName}
                onChange={this.handleChange}
                iconPosition='left'
                placeholder='Apellido'
              />
            </Form.Group>
            <Form.Input
              fluid
              icon='at'
              name='email'
              value={email}
              onChange={this.handleChange}
              autoCapitalize='off'
              iconPosition='left'
              placeholder='Correo electrónico'
            />
            <Form.Input
              fluid
              icon='lock'
              name='password'
              value={password}
              onChange={this.handleChange}
              iconPosition='left'
              placeholder='Contraseña'
              type='password'
            />
            <Form.Input
              fluid
              icon='unlock'
              name='password2'
              value={password2}
              error={this.state.password !== this.state.password2}
              onChange={this.handleChange}
              iconPosition='left'
              placeholder='Reescriba su contraseña'
              type='password'
            />

            <Form.Button
              disabled={
                !(
                  firstName &&
                  lastName &&
                  email &&
                  password &&
                  password2 &&
                  password === password2
                )
              }
              positive
              fluid
              size='large'
              onClick={this.handleRegister}
            >
              Unete Ya!
            </Form.Button>
            {this.props.authError ? (
              <Message negative content={this.props.authError} />
            ) : (
              <div />
            )}
            {/* </Segment> */}
          </Form>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

export default connect(
  mapStateToProps,
  { register }
)(Register);
