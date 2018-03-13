
# Advanced State Management in React (feat. Redux and MobX)

## Introduction

insert some content here

## Understading State

insert some content here

## Component State

insert some content here

## State Architecture Patterns

insert some content here

## Flux

insert some content here

## Redux

insert some content here

## Redux Thunk

**What's a thunk?**

> a function returned from another function

Example of a thunk:

```js
// this is not a thunk function
function foo() {
  // this is the thunk function
  return function thunk() {
    console.log("Hi! I'm a thunk function!")
  }
}
```

**How are they useful?**

> Thunks can be used to perform asynchronous actions, like fetching data from an API

**How to implement Redux Thunk?**

Redux-Thunk is a middleware, this is the way to implement it:

```js
// in your store/index.js file
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk'

import reducers from '../reducers';
import initialState from './initial-state';


const middleware = [thunk];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware), ...enhancers),
);

export default store;
```

**Change actions as thunks**

```js
// normal action
export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  id,
});

// action + thunk
export const removeItem = (id) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_ITEM,
      id,
    })
  }
}

// action + thunk + Api request
export const removeItem = (id) => {
  return (dispatch) => {
    Api
      .delete({id})
      .then(() => {
        dispatch({
          type: REMOVE_ITEM,
          id,
        })
      })
  }
}
```

**Thunks tradeoffs**

> is hard to testing

## Redux Saga

Redux-Saga uses Generator Functions*

**How to implement Redux Saga?**

Redux-saga is a middleware, this is how you implement it:

```js
// in your store/index.js file
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers';
import initialState from './initial-state';
import { fetchItems } from '../actions/items-actions';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware)
);

// run saga
sagaMiddleware.run(saga)

// intialize items
store.dispatch(fetchItems());

export default store;

```

**Create the saga's file**

```js
// store/saga.js
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_ITEMS } from '../constants';
import { updateAllItems } from '../actions/items-actions'
import Api from '../lib/api';

export default function* rootSaga() {
  yield all([
    fetchItems()
  ]);
}

// listents to FETCH_ITEMS action and dispatches with apiGetAllItems
export function* fetchItems() {
  yield takeEvery(FETCH_ITEMS, apiGetAllItems);
}

// requests items from Api and calls updateAllItems
// puts UPDATE_ALL_ITEMS
export function* apiGetAllItems() {
  const items = yield call(Api.getAll);
  yield put(updateAllItems(items));
}
```

**Keep your actions pure**

```js
// actions/items-actions.js
import { FETCH_ITEMS, UPDATE_ALL_ITEMS } from '../constants';
import Api from '../lib/api';

/* intercepted by sagas */
export const fetchItems = () => {
  return {
    type: FETCH_ITEMS
  }
}

/* dispatched by sagas */
export const updateAllItems = (items) => {
  return {
    type: UPDATE_ALL_ITEMS,
    items
  }
}

```

## MobX
insert some content here
