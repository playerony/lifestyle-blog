import React, { useState, MouseEvent } from 'react'

import { ISwitchProps } from './Switch.type'

import { StyledCircle, StyledWrapper } from './Switch.style'

const Switch = ({
  onChange,
  initialValue = false
}: ISwitchProps): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(initialValue)

  const handleWrapperClick = (event: MouseEvent<HTMLDivElement>): void => {
    event.preventDefault()

    setChecked(prev => !prev)

    if (onChange) {
      onChange(!checked)
    }
  }

  return (
    <StyledWrapper isChecked={checked} onClick={handleWrapperClick}>
      <StyledCircle />
    </StyledWrapper>
  )
}

export default React.memo(Switch)
