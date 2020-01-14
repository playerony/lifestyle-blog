import React, { useState } from 'react'

import IInput from './IInput'
import {
  StyledInputWrapper,
  StyledInputLabel,
  StyledInput
} from './styledComponent'

export const renderLabel = (
  value: string | null | undefined
): JSX.Element | null => (value ? <label>{value}</label> : null)

export const Input = ({
  label,
  status,
  errorMsg,
  onBlur,
  onFocus,
  type = 'text',
  ...restProps
}: IInput): JSX.Element => {
  const [isFocus, setIsFocus] = useState<boolean>(false)

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>): void => {
    setIsFocus(true)

    if (onFocus) {
      onFocus(event)
    }
  }

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    setIsFocus(false)

    if (onBlur) {
      onBlur(event)
    }
  }

  return (
    <StyledInputWrapper>
      {label && (
        <StyledInputLabel status={status} isFocus={isFocus}>
          {label}
        </StyledInputLabel>
      )}
      <StyledInput
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...restProps}
      />
    </StyledInputWrapper>
  )
}

export default React.memo(Input)
