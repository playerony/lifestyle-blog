import React, { useState, FocusEvent } from 'react'
import CustomSelect from 'react-select'

import { ISelectProps } from './Select.type'

import { StyledWrapper, StyledSelectLabel } from './Select.style'

const Select = ({
  label,
  onBlur,
  onFocus,
  errorMessage,
  ...restProps
}: ISelectProps): JSX.Element => {
  const [isFocus, setIsFocus] = useState<boolean>(false)

  const handleFocus = (event: FocusEvent<HTMLElement>): void => {
    setIsFocus(true)

    if (onFocus) {
      onFocus(event)
    }
  }

  const handleBlur = (event: FocusEvent<HTMLElement>): void => {
    setIsFocus(false)

    if (onBlur) {
      onBlur(event)
    }
  }

  const isError = Boolean(errorMessage)

  return (
    <StyledWrapper>
      {label && (
        <StyledSelectLabel isError={isError} isFocus={isFocus}>
          {label}
        </StyledSelectLabel>
      )}
      <CustomSelect
        onBlur={handleBlur}
        onFocus={handleFocus}
        classNamePrefix="select"
        {...restProps}
      />
    </StyledWrapper>
  )
}

export default React.memo(Select)
