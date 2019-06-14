import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, fbAuth, resetPassword } from '../store/actions/authActions';
import { Link } from 'react-router-dom';
import {
  Form,
  Grid,
  Segment,
  Message,
  Button,
  Modal,
  Image,
  Divider
} from 'semantic-ui-react';

import header2 from '../../img/header2.png';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      showModal: false,
      resetEmail: '',
      showModalMessage: false
    };
  }

  // Redirect to home page if already logged in
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.props.auth.uid) this.props.history.push('/');
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleLogin = () => {
    this.props.login(this.state);
    this.setState({ password: '' });
  };

  handleFacebook = () => {
    this.props.fbAuth();
  };

  handleModalClose = () =>
    this.setState({ showModal: false, showModalMessage: false });

  handleResetPassword = () => {
    // this.props.resetPassword(this.state.resetEmail);
    console.log(this.state.resetEmail);
    this.setState({ showModalMessage: true });
  };

  render() {
    const {
      email,
      password,
      resetEmail,
      showModal,
      showModalMessage
    } = this.state;

    return (
      <Grid textAlign='center' style={{ marginTop: '10px' }}>
        <Grid.Column style={{ maxWidth: 500 }}>
          {/* <Header as='h2' textAlign='center'>
            <Icon name='beer' /> Casa Bruja
          </Header> */}
          {/* <Image src={header1} /> */}
          <Image src={header2} />
          <Divider />
          <Form size='large' error>
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
                positive
                fluid
                size='large'
                onClick={this.handleLogin}
              >
                Login
              </Form.Button>
              {this.props.authError ? (
                <Message negative content={this.props.authError} />
              ) : (
                <div />
              )}
              <Grid columns='equal'>
                <Grid.Column>
                  <Button as={Link} to='/register' primary fluid>
                    Register
                  </Button>
                </Grid.Column>
                <Grid.Column>
                  {/* <Button secondary fluid>
                    Reset Password
                  </Button> */}
                  <Modal
                    trigger={
                      <Button
                        secondary
                        fluid
                        onClick={() => this.setState({ showModal: true })}
                      >
                        Reset Password
                      </Button>
                    }
                    size='mini'
                    open={showModal}
                    onClose={this.handleModalClose}
                  >
                    <Modal.Header>Reset Password</Modal.Header>
                    <Modal.Content>
                      <Form>
                        <Form.Input
                          label='Enter your email'
                          value={resetEmail}
                          name='resetEmail'
                          onChange={this.handleChange}
                        />
                      </Form>
                      {showModalMessage ? (
                        <Message
                          icon='mail'
                          info
                          content={`Reset email sent to: ${resetEmail}`}
                        />
                      ) : (
                        <div />
                      )}
                    </Modal.Content>
                    <Modal.Actions>
                      <Button
                        negative
                        icon='close'
                        labelPosition='right'
                        content='Cancel'
                        onClick={this.handleModalClose}
                      />
                      <Button
                        positive
                        icon='checkmark'
                        labelPosition='right'
                        content='Reset Password'
                        onClick={this.handleResetPassword}
                      />
                    </Modal.Actions>
                  </Modal>
                </Grid.Column>
              </Grid>
            </Segment>

            {/* <Segment stacked>
              <Form.Button color='facebook' fluid onClick={this.handleFacebook}>
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

const mapStateToProps = state => ({
  authError: state.auth.authError,
  auth: state.firebase.auth
});

export default connect(
  mapStateToProps,
  { login, fbAuth, resetPassword }
)(Login);
