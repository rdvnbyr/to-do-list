import {
  TOGGLE_ACTION,
  PING_TO_ZERO,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
} from "./actonTypes";

const initialState = {
  toggle: false,
  ping: 0,
  loading: false,
  products: [],
  fetchLoading: false,
  error: null,
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_ACTION:
      return {
        ...state,
        toggle: !state.toggle,
        ping: state.ping + 1,
      };
    case PING_TO_ZERO:
      return {
        ...state,
        ping: 0,
      };
    case FETCH_PRODUCTS:
      return {
        ...state,
        fetchLoading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        fetchLoading: false,
        products: action.payload.products,
      };
    case FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        fetchLoading: false,
        products: [],
        error: action.payload.error || "Something went wrong",
      };
    default:
      return state;
  }
}

const initialOtherState = {
  toggle: false,
  ping: 0,
  loading: false,
};
export function otherReducer(state = initialOtherState, action) {
  switch (action.type) {
    case TOGGLE_ACTION:
      return {
        ...state,
        ping: state.ping - 1,
      };
    case PING_TO_ZERO:
      return {
        ...state,
        ping: 0,
      };
    default:
      return state;
  }
}
