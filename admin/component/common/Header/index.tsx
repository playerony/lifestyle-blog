import React from 'react'

import Switch from '@component/generic/Switch'

import useTheme from '@hook/utility/useTheme'

import { StyledWrapper } from './Header.style'

const Header = (): JSX.Element => {
  const { toggle } = useTheme()

  return (
    <StyledWrapper>
      <Switch onChange={toggle} />
    </StyledWrapper>
  )
}

export default Header
