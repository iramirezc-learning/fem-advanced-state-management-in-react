import { createStore, applyMiddleware } from 'redux'

import reducers from '../reducers'
import initialState from './initial-state'
import logger from '../middlewares/logger'

export default createStore(reducers, initialState, applyMiddleware(logger))
