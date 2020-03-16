import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import IPrivateRoute from './IPrivateRoute'

import useAuthenticated from '@hook/login/useAuthenticated'

import routeList from '@config/routeList'

const PrivateRoute = ({ children, ...restProps }: IPrivateRoute): JSX.Element => {
  const { isAuthenticated, loading } = useAuthenticated()

  const renderContent = () => {
    if (loading) {
      return null
    }

    if (isAuthenticated) {
      return children
    }

    return (
      <Redirect
        to={{
          pathname: routeList.login
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