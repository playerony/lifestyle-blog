import React, { MouseEvent } from 'react'

import { IControlButtonProps } from './ControlButton.type'

import { StyledButton } from './ControlButton.style'

const ControlButton = ({
  label,
  style,
  active,
  onToggle
}: IControlButtonProps): JSX.Element => {
  const onMouseDown = (event: MouseEvent<HTMLLabelElement>): void => {
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
