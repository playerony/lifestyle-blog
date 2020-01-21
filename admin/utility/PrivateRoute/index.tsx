import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import IPrivateRoute from './IPrivateRoute'

import Memory from '../Memory'

import routeList from '@config/routeList'
import { AUTH_TOKEN } from '@config/constant'

const isAuthenticated = (): boolean =>
  Boolean(Memory.get(AUTH_TOKEN))

const PrivateRoute = ({ children, ...restProps }: IPrivateRoute): JSX.Element => (
  <Route
    {...restProps}
    render={() =>
      isAuthenticated() ? (
        children
      ) : (
          <Redirect
            to={{
              pathname: routeList.loginPageUrl
            }}
          />
        )
    }
  />
);

export default PrivateRoute