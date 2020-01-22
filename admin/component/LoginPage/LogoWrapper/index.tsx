import React from 'react'

import ContentWrapper from '../ContentWrapper'

import { StyledLogo } from './LogoWrapper.style'

const LogoWrapper = (): JSX.Element => (
  <ContentWrapper>
    <StyledLogo>
      <use xlinkHref="#logo" />
    </StyledLogo>
  </ContentWrapper>
)

export default LogoWrapper