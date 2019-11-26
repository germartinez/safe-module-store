import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Welcome from 'routes/welcome'
import Playground from 'routes/playground'
import NotFound from 'routes/errors/404'
import {
  WELCOME_URL,
  PLAYGROUND_URL,
  ERROR_404_URL
} from './routes'

const AppRoutes = () => (
  <Switch>
    <Route exact path={WELCOME_URL} component={Welcome} />
    <Route exact path={PLAYGROUND_URL} component={Playground} />
    <Route path={ERROR_404_URL} component={NotFound} />
  </Switch>
)

export default AppRoutes
