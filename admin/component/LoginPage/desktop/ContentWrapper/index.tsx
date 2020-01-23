import React from 'react'

import IContentWrapper from './IContentWrapper'

import { StyledWrapper } from './ContentWrapper.style'

const ContentWrapper = ({ children }: IContentWrapper): JSX.Element => (
  <StyledWrapper>{React.Children.toArray(children)}</StyledWrapper>
)

export default ContentWrapper
