import { GET_PACKAGES, FIREBASE_ERROR } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PACKAGES:
      return action.payload;

    case FIREBASE_ERROR:
      return state;

    default:
      return state;
  }
};
