import React, { MouseEvent } from 'react'

import IControlButton from './IControlButton'

const ControlButton = ({ label, style, onToggle }: IControlButton): JSX.Element => {
  const onMouseDown = (event: MouseEvent<HTMLSpanElement>): void => {
    event.preventDefault()

    onToggle(style)
  }

  return (
    <span onMouseDown={onMouseDown}>
      {label}
    </span>
  )
}

export default React.memo(ControlButton)
