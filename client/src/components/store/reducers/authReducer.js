import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  FIREBASE_ERROR,
  PASSWORD_RESET,
  UPDATE_PROFILE
} from '../actions/types';

const initialState = {
  authError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      // console.log('Login error');
      return {
        ...state,
        authError: action.err.message
      };
    case LOGIN_SUCCESS:
      // console.log('Login success', action.payload);
      // localStorage.setItem('uid', action.payload);
      return {
        ...state,
        authError: null
      };
    case LOGOUT_SUCCESS:
      // console.log('Logout success');
      // localStorage.removeItem('uid');
      return state;
    case REGISTER_SUCCESS:
      // console.log('Register success');
      return {
        ...state,
        authError: null
      };
    case REGISTER_ERROR:
      // console.log('Register error');
      return {
        ...state,
        authError: action.err.message
      };
    case FIREBASE_ERROR:
      // console.log('General Firebase error');
      return {
        ...state,
        authError: action.err.message
      };
    case PASSWORD_RESET:
      // console.log('Password reset');
      return {
        ...state,
        authError: null
      };
    case UPDATE_PROFILE:
      console.log('Update profile');
      return state;
    default:
      return state;
  }
};
