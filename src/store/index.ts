import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

const reducers = combineReducers({
  router: connectRouter(history),
})

// eslint-disable-next-line
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () =>
  createStore(
    reducers,
    composeEnhancers(applyMiddleware(routerMiddleware(history)))
  )

export const store = configureStore()
