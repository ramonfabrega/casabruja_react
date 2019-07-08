import { GET_PACKAGES, FIREBASE_ERROR } from './types';

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
