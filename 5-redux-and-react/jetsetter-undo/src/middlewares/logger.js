// middleware functions receive the store as first argument
const logger = ({ getState }) => {
  // it should return a function that receives the 'next' function
  // which returns a new function that receives the 'action'
  return (next) => (action) => {
    // now you can do everything with the store or action.
    console.log('[logger] will dispatch ->', { action, prevState: getState() });
    // Call the next dispatch method in the middleware chain.
    const value = next(action);
    console.log('[logger] state after dispatch ->', { action, currentState: getState() });
    console.log('[logger]', { value });
    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return value;
  }
}

export default logger