import { Redirect } from 'react-router-dom'
import React, { Component, ComponentType } from 'react'

import { IErrorBoundaryProps, IErrorBoundaryState } from './ErrorBoundary.type'

import routeList from '@config/routeList'

class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  state = {
    error: null
  }

  componentDidCatch(error: Error): void {
    const { onError } = this.props

    onError && onError(error)

    this.setState({ error })
  }

  render() {
    const { error } = this.state
    const { children } = this.props

    if (error !== null) {
      return (
        <Redirect
          to={`${routeList.base}/error/500`}
        />
      )
    }

    return children || null
  }
}

export const withErrorBoundary = (
  Component: ComponentType<any>,
  onError?: (error: Error) => void
): Function => (props: any): JSX.Element => (
  <ErrorBoundary onError={onError}>
    <Component {...props} />
  </ErrorBoundary>
)

export default ErrorBoundary
