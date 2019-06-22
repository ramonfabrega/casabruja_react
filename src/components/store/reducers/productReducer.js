import {
  UPDATE_PRODUCT,
  REMOVE_PRODUCT,
  GET_PRODUCT_INFO,
  GET_PRODUCTS
} from '../actions/types';

const initialState = {
  cart: {},
  products: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case GET_PRODUCT_INFO:
      // console.log(action);
      return {
        ...state,
        cart: {
          // [action.payload.product]:
        }
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.product]: action.payload.quantity
        }
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.product]: 0
        }
      };
    default:
      return state;
  }
};
