import React, { useState } from 'react'

import { IInputProps } from './Input.type'

import {
  StyledInputWrapper,
  StyledInputLabel,
  StyledErrorLabel,
  StyledInput
} from './Input.style'

export const Input = ({
  label,
  onBlur,
  onFocus,
  errorMessage,
  type = 'text',
  autoComplete = 'off',
  ...restProps
}: IInputProps): JSX.Element => {
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
        isError={isError}
        onBlur={handleBlur}
        onFocus={handleFocus}
        autoComplete={autoComplete}
        {...restProps}
      />
      <StyledErrorLabel>{errorMessage}</StyledErrorLabel>
    </StyledInputWrapper>
  )
}

export default React.memo(Input)
