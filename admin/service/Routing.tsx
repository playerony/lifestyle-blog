import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import LogPage from '@page/Log'
import LoginPage from '@page/Login'
import MetricPage from '@page/Metric'
import Header from '@component/common/Header'
import ArtileListPage from '@page/article/ArticleList'
import ArticleEditPage from '@page/article/ArticleEdit'
import PrivateRoute from '@component/utility/PrivateRoute'
import ArticleCreatePage from '@page/article/ArticleCreate'

import routeList from '@config/routeList'

const Routing = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path={routeList.base}>
        <Redirect to={routeList.article.list} />
      </Route>
      <Route path={routeList.login}>
        <LoginPage />
      </Route>
      <Route path={routeList.log}>
        <Header />
        <LogPage />
      </Route>
      <Route path={routeList.metric}>
        <Header />
        <MetricPage />
      </Route>
      <Route path={routeList.article.base}>
        <Header />
        <PrivateRoute path={routeList.article.list}>
          <ArtileListPage />
        </PrivateRoute>
        <PrivateRoute path={routeList.article.create}>
          <ArticleCreatePage />
        </PrivateRoute>
        <PrivateRoute path={routeList.article.edit}>
          <ArticleEditPage />
        </PrivateRoute>
      </Route>
    </Switch>
  </BrowserRouter>
)

export default Routing
