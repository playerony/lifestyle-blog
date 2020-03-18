import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import IPrivateRoute from './IPrivateRoute'

import Memory from '@utility/Memory'
import useAuthenticated from '@hook/login/useAuthenticated'

import routeList from '@config/routeList'
import { AUTH_TOKEN } from '@config/constant'

const PrivateRoute = ({ children, ...restProps }: IPrivateRoute): JSX.Element => {
  const { isAuthenticated, error, loading } = useAuthenticated()

  const renderContent = () => {
    if (loading) {
      return null
    } else if (isAuthenticated) {
      return children
    }

    return (
      <Redirect
        to={{
          pathname: error && Boolean(Memory.get(AUTH_TOKEN)) ? `${routeList.base}/error/500` : routeList.login
        }}
      />
    )
  }

  return (
    <Route
      {...restProps}
      render={renderContent}
    />
  )
}

export default PrivateRoute