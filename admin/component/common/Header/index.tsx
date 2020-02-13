import React from 'react'
import { useHistory } from 'react-router-dom'

import Switch from '@component/generic/Switch'

import useTheme from '@hook/utility/useTheme'

import Memory from '@utility/Memory'

import routeList from '@config/routeList'
import { AUTH_TOKEN } from '@config/constant'

import {
  StyledWrapper,
  SwitchWrapper,
  StyledSunIcon,
  StyledMoonIcon,
  StyledLogoIcon,
  StyledLogoutIcon
} from './Header.style'

const Header = (): JSX.Element => {
  const history = useHistory()
  const { toggle } = useTheme()

  const handleLogout = (): void => {
    Memory.remove(AUTH_TOKEN)
    history.push(routeList.base)
  }

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
      <StyledLogoutIcon onClick={handleLogout}>
        <use xlinkHref="#logout" />
      </StyledLogoutIcon>
    </StyledWrapper>
  )
}

export default Header
