import {
  GET_PACKAGES,
  FIREBASE_ERROR,
  SET_USER_PACKAGE
} from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PACKAGES:
      return action.payload;

    case FIREBASE_ERROR:
      return state;

    case SET_USER_PACKAGE:
      return state;

    default:
      return state;
  }
};
