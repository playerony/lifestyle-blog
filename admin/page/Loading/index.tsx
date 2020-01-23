import React from 'react'

import Loader from '@component/common/Loader'

import { LoaderWrapper } from './Loading.style'

const Loading = (): JSX.Element => (
  <LoaderWrapper>
    <Loader />
  </LoaderWrapper>
)

export default Loading
