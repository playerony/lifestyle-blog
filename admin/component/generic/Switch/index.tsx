import React, { useState, MouseEvent } from 'react'

import { StyledCircle, StyledWrapper } from './Switch.style'

const Switch = (): JSX.Element => {
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const handleWrapperClick = (event: MouseEvent<HTMLDivElement>): void => {
    event.preventDefault()

    setIsChecked(prev => !prev)
  }

  return (
    <StyledWrapper
      isChecked={isChecked}
      onClick={handleWrapperClick}
    >
      <StyledCircle />
    </StyledWrapper>
  )
}

export default React.memo(Switch)
