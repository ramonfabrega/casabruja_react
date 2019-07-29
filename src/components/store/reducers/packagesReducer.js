import {
  GET_PACKAGES,
  FIREBASE_ERROR,
  SET_USER_PACKAGE,
  SET_LOCAL_PACKAGE,
  SET_BEER_PREFERENCES,
  LOAD_BEER_PREFERENCES,
  SAVE_BEER_PREFERENCES
} from '../actions/types';

const initialState = {
  selectedPackage: 'Brujo Principiante',
  beerPreferences: [],
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PACKAGES:
      return {
        ...state,
        data: action.payload
      };

    case FIREBASE_ERROR:
      return state;

    case SET_USER_PACKAGE:
      return {
        ...state,
        selectedPackage: action.payload
      };

    case SET_LOCAL_PACKAGE:
      return {
        ...state,
        selectedPackage: action.payload
      };

    case SET_BEER_PREFERENCES:
      return {
        ...state,
        beerPreferences: action.payload
      };

    case LOAD_BEER_PREFERENCES:
      return {
        ...state,
        beerPreferences: action.payload
      };

    case SAVE_BEER_PREFERENCES:
      return state;

    default:
      return state;
  }
};
