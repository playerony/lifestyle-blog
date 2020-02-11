import React from 'react'

import Switch from '@component/generic/Switch'

import { StyledWrapper } from './Header.style'

import { useTheme } from '@service/ThemeManager'

const Header = (): JSX.Element => {
  const { toggle } = useTheme()

  return (
    <StyledWrapper>
      <Switch onChange={toggle} />
    </StyledWrapper>
  )
}

export default Header
