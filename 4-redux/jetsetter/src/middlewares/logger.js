export default store => {
  return next => action => {
    console.log('MIDDLEWARE->', 'STATE->', store.getState(), 'ACTION->', action)
    const value = next(action)
    console.log('VALUE->', value)
    return value
  }
}
