import React, { useState } from 'react'

import IInput from './IInput'
import {
  StyledInputWrapper,
  StyledInputLabel,
  StyledErrorLabel,
  StyledInput
} from './styledComponent'

export const Input = ({
  label,
  errorMessage,
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

  const isError = Boolean(errorMessage)

  return (
    <StyledInputWrapper>
      {label && (
        <StyledInputLabel isError={isError} isFocus={isFocus}>
          {label}
        </StyledInputLabel>
      )}
      <StyledInput
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        isError={isError}
        {...restProps}
      />
      <StyledErrorLabel>{errorMessage}</StyledErrorLabel>
    </StyledInputWrapper>
  )
}

export default React.memo(Input)
