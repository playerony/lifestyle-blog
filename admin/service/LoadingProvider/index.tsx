import React, { useState } from 'react'

import LoadingPage from '@page/Loading'

import { ILoadingProviderProps } from './LoadingProvider.type'

import { LoadingContext } from '@context/Loading'

const LoadingProvider = ({ children }: ILoadingProviderProps): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false)

  const toggleLoader = (isLoading: boolean): void =>
    setLoading(isLoading)

  return (
    <LoadingContext.Provider value={{ toggleLoader }}>
      {loading && <LoadingPage />}
      {children}
    </LoadingContext.Provider>
  )
}

export default LoadingProvider
