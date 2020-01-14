import * as React from 'react'

import IInput from './IInput'
import { StyledInputWrapper, StyledInput } from './styledComponent'

export const renderLabel = (
  value: string | null | undefined
): JSX.Element | null => (value ? <label>{value}</label> : null)

export const Input = ({
  label,
  errorMsg,
  type = 'text',
  ...restProps
}: IInput): JSX.Element => (
  <StyledInputWrapper>
    <StyledInput type={type} {...restProps} />
  </StyledInputWrapper>
)

export default React.memo(Input)
