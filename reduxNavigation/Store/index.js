/**
 * Created by guangqiang on 2017/12/1.
 */
import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import reducers from '../Reducers'

const middlewares = []

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

const store = createStore(reducers, applyMiddleware(...middlewares))

export {store}