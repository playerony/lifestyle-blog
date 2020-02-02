import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import LoginPage from '@page/Login'
import ArtileListPage from '@page/article/ArticleList'
import ArticleCreatePage from '@page/article/ArticleCreate'

import PrivateRoute from '@utility/PrivateRoute'

import routeList from '@config/routeList'

const Routing = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path={routeList.baseUrl}>
        <Redirect to={routeList.article.create} />
      </Route>
      <Route path={routeList.loginPageUrl}>
        <LoginPage />
      </Route>
      <PrivateRoute path={routeList.article.list}>
        <ArtileListPage />
      </PrivateRoute>
      <PrivateRoute path={routeList.article.create}>
        <ArticleCreatePage />
      </PrivateRoute>
    </Switch>
  </BrowserRouter>
)

export default Routing
