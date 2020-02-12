import React from 'react'

import Switch from '@component/generic/Switch'

import useTheme from '@hook/utility/useTheme'

import {
  StyledWrapper,
  SwitchWrapper,
  StyledSunIcon,
  StyledMoonIcon,
  StyledLogoIcon
} from './Header.style'

const Header = (): JSX.Element => {
  const { toggle } = useTheme()

  return (
    <StyledWrapper>
      <StyledLogoIcon>
        <use xlinkHref="#logo" />
      </StyledLogoIcon>
      <SwitchWrapper>
        <StyledSunIcon>
          <use xlinkHref="#sun" />
        </StyledSunIcon>
        <Switch onChange={toggle} />
        <StyledMoonIcon>
          <use xlinkHref="#moon" />
        </StyledMoonIcon>
      </SwitchWrapper>
    </StyledWrapper>
  )
}

export default Header
