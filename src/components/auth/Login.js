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

import light_header_clean from '../../img/transparent/logos/light_header_clean.png';

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
      <Grid.Row centered>
        <Grid.Column computer={6} tablet={10} mobile={15}>
          <Form size='large' inverted>
            <Segment stacked inverted>
              <Form.Input
                fluid
                inverted
                icon='mail'
                name='email'
                value={email}
                onChange={this.handleChange}
                iconPosition='left'
                placeholder='E-mail address'
              />
              <Form.Input
                fluid
                inverted
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
                  <Button as={Link} to='/register' color='google plus' fluid>
                    Register
                  </Button>
                </Grid.Column>
                <Grid.Column>
                  <Modal
                    trigger={
                      <Button
                        // inverted
                        primary
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
          </Form>
        </Grid.Column>
      </Grid.Row>
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
