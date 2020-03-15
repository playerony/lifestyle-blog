import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Route, Switch, Redirect, withRouter, RouteProps } from 'react-router-dom'

import LogPage from '@page/Log'
import LoginPage from '@page/Login'
import MetricPage from '@page/Metric'
import Header from '@component/common/Header'
import ArtileListPage from '@page/article/ArticleList'
import ArticleEditPage from '@page/article/ArticleEdit'
import ScrollToTop from '@component/utility/ScrollToTop'
import PrivateRoute from '@component/utility/PrivateRoute'
import ArticleCreatePage from '@page/article/ArticleCreate'

import routeList from '@config/routeList'

import StyledFadeAnimation from '@style/animation/slide'

const ANIMATION_DURATION = 300
const ANIMATION_NAME = 'router_fade'

const Routing = ({ location }: RouteProps): JSX.Element => (
  <StyledFadeAnimation
    exit={true}
    enter={true}
    animationName={ANIMATION_NAME}
    animationDuration={`${ANIMATION_DURATION}ms`}
  >
    <Header />
    <TransitionGroup>
      <CSSTransition
        key={location?.key}
        classNames={ANIMATION_NAME}
        timeout={ANIMATION_DURATION}
      >
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <ScrollToTop />
          <Switch location={location}>
            <Route exact={true} path={routeList.base}>
              <Redirect to={routeList.article.list} />
            </Route>
            <Route path={routeList.login}>
              <LoginPage />
            </Route>
            <Route path={routeList.log}>
              <LogPage />
            </Route>
            <Route path={routeList.metric}>
              <MetricPage />
            </Route>
            <Route path={routeList.article.base}>
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
        </div>
      </CSSTransition>
    </TransitionGroup>
  </StyledFadeAnimation>
)

export default withRouter(Routing)
