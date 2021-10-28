import axios from "axios";
import { all, call, takeEvery, put } from "redux-saga/effects";
import { FETCH_PRODUCTS } from "./actonTypes";
import { fetchProductsSuccess, fetchProductsFail } from "./actions";

function* getProducts() {
  try {
    const response = yield call(async function () {
      return axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
    });
    return yield put(fetchProductsSuccess(response.data));
  } catch (error) {
    return yield put(fetchProductsFail(error.response));
  }
}

function* saga() {
  yield takeEvery(FETCH_PRODUCTS, getProducts);
}

export function* rootSaga() {
  yield all([saga()]);
}
