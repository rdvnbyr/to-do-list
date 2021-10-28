import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import sagaMiddleware from "redux-saga";

import { appReducer, otherReducer } from "./reducers";
import { rootSaga } from "./saga";

const saga = sagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(saga));

const rootReducer = combineReducers({
  app: appReducer,
  other: otherReducer,
});

const store = createStore(rootReducer, enhancer);

export { store };
saga.run(rootSaga);
