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

import Dashboard from './components/dashboard/Dashboard';

import Profile from './components/profile/Profile';
import Sub from './components/payment/Sub';
import Shop from './components/shop/Shop';
import Checkout from './components/payment/Checkout';

import { getProductData } from './components/store/actions/productActions';
import { getPackages } from './components/store/actions/packagesActions';

import ResponsiveLayout from './components/common/ResponsiveLayout';

store.dispatch(getProductData());
store.dispatch(getPackages());

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
            <PrivateRoute exact path='/subscribe' component={Sub} />
            <PrivateRoute exact path='/profile' component={Profile} />

            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/logout' component={Logout} />

            <PrivateRoute exact path='/shop' component={Shop} />
            <PrivateRoute exact path='/checkout' component={Checkout} />
            <Route exact path='/res' component={ResponsiveLayout} />

            <Footer />
          </Grid>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
