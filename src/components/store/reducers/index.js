import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

import authReducer from './authReducer';
import productReducer from './productReducer';

export default combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  product: productReducer
});
