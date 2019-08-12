import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import appStore from './reducers/index'
import Config from './config'
import graphql_middleware from './middlewares/graphql-middleware'

const initState = {}
export function initializeStore(initialState = initState) {
  return createStore(
    appStore,
    initialState,
    composeWithDevTools(applyMiddleware(graphql_middleware(Config.BASE_URL), thunkMiddleware))
  )
}
