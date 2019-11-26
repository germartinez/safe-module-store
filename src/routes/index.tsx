import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Welcome from 'routes/welcome'
import NotFound from 'routes/errors/404'
import {
  WELCOME_URL,
  ERROR_404_URL
} from './routes'

const AppRoutes = () => (
  <Switch>
    <Route exact path={WELCOME_URL} component={Welcome} />
    <Route path={ERROR_404_URL} component={NotFound} />
  </Switch>
)

export default AppRoutes
