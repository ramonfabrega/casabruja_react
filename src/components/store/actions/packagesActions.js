import {
  GET_PACKAGES,
  FIREBASE_ERROR,
  SET_USER_PACKAGE,
  SET_LOCAL_PACKAGE,
  SET_BEER_PREFERENCES
} from './types';

export const getPackages = () => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();

  const packages = [];

  firestore
    .collection('packages')
    .get()
    .then(snapshot => {
      if (snapshot.empty) return dispatch({ type: FIREBASE_ERROR });

      snapshot.forEach(doc => packages.push(doc.data()));

      dispatch({ type: GET_PACKAGES, payload: packages });
    })
    .catch(err => dispatch({ type: FIREBASE_ERROR, err }));
};

export const setUserPackage = pkg => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  const state = getState();
  const brewPoints = state.firebase.profile.brewPoints + pkg.brewPoints;

  firestore
    .collection('users')
    .doc(state.firebase.auth.uid)
    .update({ level: pkg.name, brewPoints })
    .then(() => dispatch({ type: SET_USER_PACKAGE, payload: pkg.name }))
    .catch(err => dispatch({ type: FIREBASE_ERROR, err }));
};

export const setLocalPackage = payload => dispatch => {
  dispatch({
    type: SET_LOCAL_PACKAGE,
    payload
  });
};

export const setBeerPreferences = (beer, i) => (dispatch, getState) => {
  const state = getState();

  const payload = state.packages.beerPreferences;
  payload[i] = beer;

  dispatch({ type: SET_BEER_PREFERENCES, payload });
};

export const loadBeerPreferences = () => (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  const state = getState();

  firestore
    .collection('users')
    .doc(state.firebase.auth.uid)
    .get()
    .then(doc => {
      if (doc.exists) {
        const payload = doc.data().beerPreferences;
        dispatch({ type: SET_BEER_PREFERENCES, payload });
      }
    })
    .catch(err => dispatch({ type: FIREBASE_ERROR, err }));
};
