import React from 'react'

import Loader from '@component/common/Loader'

import { LoaderWrapper } from './LoadingPage.style'

const LoadingPage = (): JSX.Element => (
  <LoaderWrapper>
    <Loader />
  </LoaderWrapper>
)

export default LoadingPage
