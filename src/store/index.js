import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import reducers from '../reducers'

const logger = () => next =>  action => {
  if(!action.type.match(/^@/)) {
    console.log(`logged ${action.type}`, action)
  }
  return next(action)
}

const mw = [logger, reduxPromise]
const createStoreWithMiddleware = applyMiddleware(...mw)(createStore)

export default createStoreWithMiddleware(reducers)