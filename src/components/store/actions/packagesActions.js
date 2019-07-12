import { GET_PACKAGES, FIREBASE_ERROR, SET_USER_PACKAGE } from './types';

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

  // console.log(state.firebase);

  firestore
    .collection('users')
    .doc(state.firebase.auth.uid)
    .update({ level: pkg.name, brewPoints })
    .then(() => dispatch({ type: SET_USER_PACKAGE }))
    .catch(err => dispatch({ type: FIREBASE_ERROR, err }));
};
