import { applyMiddleware, compose, createStore } from 'redux';

import reducers from '../reducers';
import initialState from './initial-state';
import logger from '../middlewares/logger';

const middleware = [logger];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware), ...enhancers),
);

export default store;
