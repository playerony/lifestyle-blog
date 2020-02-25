import React, { useState } from 'react'

import { IFabButtonProps } from './FabButton.type'

import { StyledWrapper, StyledMenuElement } from './FabButton.style'

const FabButton = ({ children }: IFabButtonProps): JSX.Element => {
  const [visibility, setVisibility] = useState<boolean>(false)

  const toggleVisibility = (): void =>
    setVisibility(prev => !prev)

  const renderContent = (): JSX.Element[] => {
    const childrenWithKey = React.Children.toArray(children)
    const elements = childrenWithKey.length

    return childrenWithKey.map((element, index) => {
      const isLastElement = elements === index + 1

      if (!isLastElement) {
        return (
          <StyledMenuElement index={elements - 1 - index} isVisible={visibility}>
            {element}
          </StyledMenuElement>
        )
      }

      return (
        <span onClick={toggleVisibility}>
          {element}
        </span>
      )
    })
  }

  return (
    <StyledWrapper>
      {React.Children.toArray(renderContent())}
    </StyledWrapper>
  )
}

export default React.memo(FabButton)
