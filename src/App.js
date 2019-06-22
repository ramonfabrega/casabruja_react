import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store/store';
import PrivateRoute from './components/common/PrivateRoute';
import { Grid } from 'semantic-ui-react';

import './App.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import Register from './components/auth/Register';

import Profile from './components/profile/Profile';
import Dashboard from './components/dashboard/Dashboard';
import Checkout from './components/payment/Checkout';

import { getProductData } from './components/store/actions/productActions';

import ResponsiveLayout from './components/common/ResponsiveLayout';

store.dispatch(getProductData());

const App = () => {
  return (
    <div className='App'>
      <Provider store={store}>
        <Router>
          <Grid>
            <Grid.Row style={{ padding: 25 }}>
              <Navbar />
            </Grid.Row>
            <PrivateRoute exact path='/' component={Dashboard} />
            <PrivateRoute path='/profile' component={Profile} />
            <PrivateRoute exact path='/checkout' component={Checkout} />

            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/logout' component={Logout} />

            <Route exact path='/res' component={ResponsiveLayout} />

            <Footer />
          </Grid>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
