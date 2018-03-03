const redux = require('redux');

// API:
// ==================================================
// createStore
// combineReducers
// bindActionCreators
// applyMiddleware
// compose

// Example of compose:
// --------------------------------------------------

// let say you have three different functions

function makeUpper(str) {
  return str.toUpperCase();
}

function repeatTwoTimes(str) {
  return str.repeat(2);
}

function makeBold(str) {
  return str.bold();
}

// now let's combine them together

const str = 'Hello!';

const result = makeBold(repeatTwoTimes(makeUpper(str)));

console.log(result); // <b>HELLO!HELLO!</b>

// we can have the same result with redux.compose
// the order of the execution is from right to left
const transformString = redux.compose(makeBold, repeatTwoTimes, makeUpper);

console.log(transformString(str));

// Example of how to create a reducer:
// --------------------------------------------------

// first is recommended to have a initial state
const intialState = {
  result: 0,
};

// Actions
// --------------------------------------------------
// then, you create actions
const addToResult = qty => {
  if (typeof qty !== 'number') {
    return {
      type: 'SET_ERROR_MESSAGE',
      message: 'Quantity should be a number'
    };
  }
  return {
    type: 'ADD',
    payload: qty,
  };
};

// NOTE: we will use this later in the store2

const setErrorMessage = (message) => {
  return {
    type: 'SET_ERROR_MESSAGE',
    message
  };
}

const clearErrorMessage = () => {
  return {
    type: 'CLEAR_ERROR_MESSAGE',
  };
}

// Example of a reducer:
// --------------------------------------------------

// now create a reducer
// A reducer is a function that receives a state and an action
const calculatorReducer = (state = intialState, action = {}) => {
  if (action.type === 'ADD') {
    state = { ...state,
      result: state.result + action.payload
    };
  }
  return state;
};

// now use the reducer like
console.log(calculatorReducer()); // {result: 0}

const resultReducer = calculatorReducer(intialState, addToResult(5));

console.log(resultReducer); // {result: 5}

// Example of createStore:
// --------------------------------------------------
// create store that receives a reducer
// stores have the following methods:
// - getState
// - subscribe
// - dispatch
const store = redux.createStore(calculatorReducer);

// now create a subscriber
const subscriber = () => {
  console.log('Subscription->', store.getState().result);
};

// now subscribe the subscriber to the store
// that will return an unsubscribe function
const unsubscribe = store.subscribe(subscriber);

// now "emit/dispatch" an action
store.dispatch(addToResult(6)); // Subscription-> 6
store.dispatch(addToResult(6)); // Subscription-> 12


// Example of combineReducers:
// --------------------------------------------------
// We can create small reducers and combine them to make a larger reducer

// intial state
const intialError = {
  message: ''
};

let errorState = { ...intialError
};

// reducer
const errorMessageReducer = (state = intialError, action = {}) => {
  if (action.type === 'SET_ERROR_MESSAGE') {
    return {
      message: action.message
    };
  }
  if (action.type === 'CLEAR_ERROR_MESSAGE') {
    return {
      message: ''
    }
  }
  return state;
}


console.log(errorMessageReducer()); // { message: '' }
errorState = errorMessageReducer({
  message: 'not found'
});
console.log(errorState); // { message: 'not found' }
errorState = errorMessageReducer(errorState, {
  type: 'SET_ERROR_MESSAGE',
  message: 'server error'
});
console.log(errorState); // { message: 'server error' }
errorState = errorMessageReducer(errorState, clearErrorMessage());
console.log(errorState); // { message: '' }


// now combine the reducers in an object
const combinedReducers = redux.combineReducers({
  calculator: calculatorReducer,
  error: errorMessageReducer
});

// create store...
const store2 = redux.createStore(combinedReducers);
const subscriber2 = () => {
  console.log('Subscription2->', store2.getState());
}

// add subscriber...
const unsubscribe2 = store2.subscribe(subscriber2);

// clear previous errors 
store2.dispatch(clearErrorMessage()); // ->
// Subscription2-> {
//  calculator: { result: 0 }
//  error: { message: '' }
// }

store2.dispatch(addToResult(5)); // ->
// Subscription2-> {
//  calculator: { result: 5 }
//  error: { message: '' }
// }

store2.dispatch(addToResult('s')); // ->
// Subscription2-> {
//  calculator: { result: 5 }
//  error: { message: 'Quantity should be a number' }
// }


// Example of bindActionCreators:
// --------------------------------------------------
// store
const store3 = redux.createStore(combinedReducers);
// subscriber
const subscriber3 = () => {
  console.log('Subscription3->', store3.getState());
}
// add subscriber...
const unsubscribe3 = store3.subscribe(subscriber3);

// NOTE: this is an example of how redux.bindActionsCreators works
// but just for one action
// function to bindActionsCreator
const bindActionCreator = (action, dispatch) => {
  // returns a function that will dispatch the action
  // with the sent arguments
  return (...args) => {
    dispatch(action(...args));
  };
};

// add binded action creator
const add = bindActionCreator(addToResult, store3.dispatch);

add(20); // ->
// Subscription3-> {
//  calculator: { result: 20 }
//  error: { message: '' }
// }
add(30); // ->
// Subscription3-> {
//  calculator: { result: 50 }
//  error: { message: '' }
// }

// NOTE: this is a implementation of redux.bindActionCreators
// function to bindActionsCreatorz
const bindActionCreatorz = (actions, dispatch) => {
  return Object.keys(actions).reduce((bindedActions, key) => {
    bindedActions[key] = bindActionCreator(actions[key], dispatch);
    return bindedActions;
  }, {});
};
// error binded Actions
const errorActions = bindActionCreatorz({
  set: setErrorMessage,
  clear: clearErrorMessage
}, store3.dispatch);

errorActions.set('unkown error'); // ->
// Subscription3-> {
//  calculator: { result: 50 }
//  error: { message: 'unkown error' }
// }

errorActions.clear(); // ->
// Subscription3-> {
//  calculator: { result: 50 }
//  error: { message: '' }
// }

// now let's use the actual implementation of
// redux.bindActionCreators

const appActionCreators = {
  error: redux.bindActionCreators({
    set: setErrorMessage,
    clear: clearErrorMessage,
  }, store3.dispatch),
  calculator: redux.bindActionCreators({
    add: addToResult,
  }, store3.dispatch),
};

appActionCreators.calculator.add(50);
// Subscription3-> {
//  calculator: { result: 100 }
//  error: { message: '' }
// }
appActionCreators.error.set('oops errorsh!');
// Subscription3-> {
//  calculator: { result: 100 }
//  error: { message: 'oops errorsh!' }
// }
appActionCreators.error.clear();
// Subscription3-> {
//  calculator: { result: 100 }
//  error: { message: '' }
// }


// Example of applyMiddleware:
// --------------------------------------------------
// middleware functions receive the store as first argument
const logger = ({
  getState
}) => {
  // it should return a function that receives the 'next' function
  // which returns a new function that receives the 'action'
  return (next) => (action) => {
    // now you can do everything with the store or action.
    console.log('MIDDLEWARE->', 'STATE->', getState(), 'ACTION->', action);
    const value = next(action);
    console.log('VALUE->', value);
    return value;
  }
}

// create store arguments are:
// reducer
// initial state
// middlewares
const store4 = redux.createStore(combinedReducers, {}, redux.applyMiddleware(logger));

// subscriber
const subscriber4 = () => {
  console.log('Subscription4->', store4.getState());
}
// add subscriber...
const unsubscribe4 = store4.subscribe(subscriber4);

store4.dispatch(addToResult(6));