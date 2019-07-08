import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

import authReducer from './authReducer';
import productReducer from './productReducer';
import packagesReducer from './packagesReducer';

export default combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  product: productReducer,
  packages: packagesReducer
});
