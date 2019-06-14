import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store/store';
import PrivateRoute from './components/common/PrivateRoute';
import { Grid } from 'semantic-ui-react';

import './App.css';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import Register from './components/auth/Register';
import Profile from './components/profile/Profile';

import ResponsiveLayout from './components/common/ResponsiveLayout';

const App = () => {
  return (
    <div className='App'>
      <Provider store={store}>
        <Router>
          <Grid>
            <Grid.Row>
              <Grid.Column
                mobile={14}
                tablet={13}
                computer={14}
                style={{ padding: 15, margin: 0, paddingLeft: 30 }}
              >
                <Route exact path='/' component={ResponsiveLayout} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/logout' component={Logout} />
                <PrivateRoute path='/profile' component={Profile} />
              </Grid.Column>
              <Grid.Column
                mobile={2}
                tablet={3}
                computer={2}
                style={{ padding: 0, margin: 0 }}
              >
                <Navbar />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
