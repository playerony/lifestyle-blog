import React from 'react'

import { IContainerProps } from './Container.type'

import { StyledContainer } from './Container.style'

const Container = (props: IContainerProps): JSX.Element =>
  React.createElement(StyledContainer, props)

export default Container
