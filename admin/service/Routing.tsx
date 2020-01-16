import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import LoginPage from '@page/LoginPage'

import routeList from '@config/routeList'

const Routing = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/">
        <Redirect to={routeList.loginPageUrl} />
      </Route>
      <Route path={routeList.loginPageUrl}>
        <LoginPage />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default Routing
