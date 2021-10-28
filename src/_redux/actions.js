import {
  TOGGLE_ACTION,
  PING_TO_ZERO,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_SUCCESS,
} from "./actonTypes";

export const handleToggle = (event) => {
  return {
    type: TOGGLE_ACTION,
    payload: {
      event: event,
    },
  };
};

export const handlePingToZero = () => {
  return {
    type: PING_TO_ZERO,
    payload: {},
  };
};

export const fetchProducts = () => {
  return {
    type: FETCH_PRODUCTS,
  };
};
export const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: { products },
  };
};
export const fetchProductsFail = (error) => {
  return {
    type: FETCH_PRODUCTS_FAIL,
    payload: { error },
  };
};
