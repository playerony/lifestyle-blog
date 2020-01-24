import React from 'react'

import { StyledWrapper } from './LogoWrapper.style'

const LogoWrapper = (): JSX.Element => (
  <StyledWrapper>
    <svg>
      <use xlinkHref="#logo" />
    </svg>
  </StyledWrapper>
)

export default LogoWrapper