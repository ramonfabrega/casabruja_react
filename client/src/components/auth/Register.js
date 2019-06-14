import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Form,
  Grid,
  Header,
  Segment,
  Icon,
  Message,
  Divider,
  Image
} from 'semantic-ui-react';

import { register } from '../store/actions/authActions';

import header2 from '../../img/header2.png';

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
      <Grid textAlign='center' style={{ marginTop: '10px' }}>
        <Grid.Column style={{ maxWidth: 500 }}>
          <Image src={header2} />
          <Divider />
          <Form size='large'>
            <Segment stacked>
              <Form.Group widths='equal'>
                <Form.Input
                  fluid
                  icon='user'
                  name='firstName'
                  value={firstName}
                  onChange={this.handleChange}
                  iconPosition='left'
                  placeholder='First name'
                />
                <Form.Input
                  fluid
                  icon='user'
                  name='lastName'
                  value={lastName}
                  onChange={this.handleChange}
                  iconPosition='left'
                  placeholder='Last Name'
                />
              </Form.Group>
              <Form.Input
                fluid
                icon='mail'
                name='email'
                value={email}
                onChange={this.handleChange}
                iconPosition='left'
                placeholder='E-mail address'
              />
              <Form.Input
                fluid
                icon='lock'
                name='password'
                value={password}
                onChange={this.handleChange}
                iconPosition='left'
                placeholder='Password'
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
                placeholder='Retype password'
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
                Register
              </Form.Button>
              {this.props.authError ? (
                <Message negative content={this.props.authError} />
              ) : (
                <div />
              )}
            </Segment>
            {/* <Segment stacked>
              <Form.Button color='facebook' fluid>
                <Icon name='facebook' /> Login with Facebook
              </Form.Button>
              <Form.Button color='google plus' fluid>
                <Icon name='google plus' /> Login with Google
              </Form.Button>
              <Form.Button color='instagram' fluid>
                <Icon name='instagram' /> Login with Instagram
              </Form.Button>
            </Segment> */}
          </Form>
        </Grid.Column>
      </Grid>
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
