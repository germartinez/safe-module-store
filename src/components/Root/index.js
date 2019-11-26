import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import AppRoutes from 'routes'
import { store, history } from 'store'
import './styles.module.scss'

const Root = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route component={AppRoutes} />
      </ConnectedRouter>
    </Provider>
  )
}

export default Root
