import React from 'react'

import { IImageComponentProps } from './ImageComponent.type'

import { StyledImage, StyledWrapper } from './ImageComponent.style'

const ImageComponent = ({ block }: IImageComponentProps): JSX.Element => (
  <StyledWrapper>
    <StyledImage src={block.getText()} />
  </StyledWrapper>
)

export default ImageComponent
