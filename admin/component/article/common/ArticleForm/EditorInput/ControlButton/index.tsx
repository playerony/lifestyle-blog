import React, { MouseEvent } from 'react'

import IControlButton from './IControlButton'

import { StyledButton } from './ControlButton.style'

const ControlButton = ({ label, style, active, onToggle }: IControlButton): JSX.Element => {
  const onMouseDown = (event: MouseEvent<HTMLSpanElement>): void => {
    event.preventDefault()

    onToggle(style)
  }

  return (
    <StyledButton active={active} onMouseDown={onMouseDown}>
      {label}
    </StyledButton>
  )
}

export default React.memo(ControlButton)
