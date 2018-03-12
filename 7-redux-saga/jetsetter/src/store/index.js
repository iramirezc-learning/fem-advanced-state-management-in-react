import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers';
import initialState from './initial-state';
import { fetchItems } from '../actions/items-actions';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, sagaMiddleware];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware), ...enhancers),
);

// run saga
sagaMiddleware.run(saga)

// intialize items
store.dispatch(fetchItems());

export default store;
