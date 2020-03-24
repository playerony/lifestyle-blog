import React from 'react'

import { IButtonProps } from './Button.type'

import { StyledButton } from './Button.style'

const Button = ({ children, ...restProps }: IButtonProps): JSX.Element => (
  <StyledButton {...restProps}>{children}</StyledButton>
)

export default React.memo(Button)
