import React from 'react';
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
            <Grid.Row style={{ padding: 25 }}>
              <Navbar />
            </Grid.Row>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/res' component={ResponsiveLayout} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/logout' component={Logout} />
            <PrivateRoute path='/profile' component={Profile} />
          </Grid>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
