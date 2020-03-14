import React, { useState } from 'react'

import LoadingPage from '@page/Loading'

import { ILoaderProviderProps } from './LoaderProvider.type'

import { LoaderContext } from '@context/Loader'

const LoaderProvider = ({ children }: ILoaderProviderProps): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false)

  const toggleLoader = (isLoading: boolean): void =>
    setLoading(isLoading)

  return (
    <LoaderContext.Provider value={{ toggleLoader }}>
      {loading && <LoadingPage />}
      {children}
    </LoaderContext.Provider>
  )
}

export default LoaderProvider
