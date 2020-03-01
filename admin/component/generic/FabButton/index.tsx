import React, { useState } from 'react'

import { IFabButtonProps } from './FabButton.type'

import { StyledWrapper, StyledElement } from './FabButton.style'

const FabButton = ({ children }: IFabButtonProps): JSX.Element => {
  const [visibility, setVisibility] = useState<boolean>(false)

  const toggleVisibility = (): void =>
    setVisibility(prev => !prev)

  const renderContent = (): JSX.Element[] => {
    const elements = children.length

    return children.map((element, index) => {
      const isLastElement = elements === index + 1

      if (!isLastElement) {
        return (
          <StyledElement index={elements - index - 1} isVisible={visibility}>
            {element}
          </StyledElement>
        )
      }

      return (
        <li onClick={toggleVisibility} style={{ pointerEvents: 'all' }}>
          {element}
        </li>
      )
    })
  }

  return (
    <StyledWrapper>
      {React.Children.toArray(renderContent())}
    </StyledWrapper>
  )
}

export default FabButton
