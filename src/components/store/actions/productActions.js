import { UPDATE_PRODUCT, REMOVE_PRODUCT } from './types';

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
