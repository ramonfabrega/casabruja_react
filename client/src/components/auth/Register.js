import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Grid, Header, Segment, Icon } from 'semantic-ui-react';

export default class Register extends Component {
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

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleRegister = () => {
    console.log(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: ''
    });
  };

  render() {
    const { firstName, lastName, email, password, password2 } = this.state;

    return (
      <Grid
        textAlign='center'
        style={{ height: '100vh' }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 500 }}>
          <Header as='h2' textAlign='center'>
            <Icon name='beer' /> Casa Bruja
          </Header>
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
                onChange={this.handleChange}
                iconPosition='left'
                placeholder='Retype password'
                type='password'
              />

              <Form.Button
                disabled={
                  !(firstName && lastName && email && password && password2)
                }
                color='red'
                fluid
                size='large'
                onClick={this.handleRegister}
              >
                Register
              </Form.Button>
            </Segment>
            <Segment stacked>
              <Form.Button color='facebook' fluid>
                <Icon name='facebook' /> Login with Facebook
              </Form.Button>
              <Form.Button color='google plus' fluid>
                <Icon name='google plus' /> Login with Google
              </Form.Button>
              <Form.Button color='instagram' fluid>
                <Icon name='instagram' /> Login with Instagram
              </Form.Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}
