import {
  UPDATE_PRODUCT,
  REMOVE_PRODUCT,
  GET_PRODUCTS,
  FIREBASE_ERROR
} from './types';

export const updateProduct = product => dispatch => {
  dispatch({
    type: UPDATE_PRODUCT,
    payload: product
  });
};

export const removeProduct = product => dispatch => {
  dispatch({
    type: REMOVE_PRODUCT,
    payload: product
  });
};

export const getProductData = () => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();

  // const products = {};
  const products = [];

  firestore
    .collection('products')
    .get()
    .then(snapshot => {
      if (snapshot.empty) return dispatch({ type: FIREBASE_ERROR });

      snapshot.forEach(doc => (products[doc.id] = doc.data()));
      snapshot.forEach(doc => products.push(doc.data()));

      dispatch({ type: GET_PRODUCTS, payload: products });
    })
    .catch(err => dispatch({ type: FIREBASE_ERROR }));
};
