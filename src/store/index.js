import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import reducers from '../reducers'

const logger = () => next =>  action => {
  console.log("logged", action)
  return next(action)
}

const mw = [logger, reduxPromise]
const createStoreWithMiddleware = applyMiddleware(...mw)(createStore)

export default createStoreWithMiddleware(reducers)