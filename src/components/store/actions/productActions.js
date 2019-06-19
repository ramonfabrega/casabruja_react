import { UPDATE_PRODUCT, REMOVE_PRODUCT, GET_PRODUCT_INFO } from './types';

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

export const getProductPrice = product => (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();

  const productRef = firestore.collection('products').doc(product);

  let getDoc = productRef
    .get()
    .then(doc => {
      dispatch({
        type: GET_PRODUCT_INFO,
        payload: doc.data()
      });
    })
    .catch(err => console.log(err));

  // firestore
  //   .collection('products')
  //   .doc(product);
};

// export const
