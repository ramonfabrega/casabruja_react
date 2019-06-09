import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store/store';

import { Grid } from 'semantic-ui-react';

import './App.css';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Router>
          <Grid>
            <Grid.Row>
              <Grid.Column width={2}>
                <Navbar />
              </Grid.Column>
              <Grid.Column width={14}>
                <Route exact path='/' component={Dashboard} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
