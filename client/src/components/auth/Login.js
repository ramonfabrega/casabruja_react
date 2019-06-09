import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Grid, Header, Segment, Icon } from 'semantic-ui-react';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleLogin = () => {
    console.log(this.state);
    this.setState({ password: '' });
  };

  render() {
    const { email, password } = this.state;

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

              <Form.Button
                disabled={!(email && password)}
                color='red'
                fluid
                size='large'
                onClick={this.handleLogin}
              >
                Login
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
