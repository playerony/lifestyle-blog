import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import LoginPage from '@page/Login'
import DashboardPage from '@page/Dashboard'

import PrivateRoute from '@utility/PrivateRoute'

import routeList from '@config/routeList'

const Routing = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path={routeList.baseUrl}>
        <Redirect to={routeList.dashboardPageUrl} />
      </Route>
      <Route path={routeList.loginPageUrl}>
        <LoginPage />
      </Route>
      <PrivateRoute path={routeList.dashboardPageUrl}>
        <DashboardPage />
      </PrivateRoute>
    </Switch>
  </BrowserRouter>
)

export default Routing
