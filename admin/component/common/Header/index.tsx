import React from 'react'
import { useHistory } from 'react-router-dom'

import Switch from '@component/generic/Switch'

import EThemeMode from '@type/common/EThemeMode'

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
  StyledLogoutIcon,
  StyledContentWrapper
} from './Header.style'

const Header = (): JSX.Element => {
  const history = useHistory()
  const { mode, toggle } = useTheme()

  const handleLogoClick = (): void => history.push(routeList.base)

  const handleLogout = (): void => {
    Memory.remove(AUTH_TOKEN)
    history.push(routeList.base)
  }

  return (
    <StyledWrapper>
      <StyledContentWrapper>
        <StyledLogoIcon onClick={handleLogoClick}>
          <use xlinkHref="#logo" />
        </StyledLogoIcon>
        <SwitchWrapper>
          <StyledSunIcon>
            <use xlinkHref="#sun" />
          </StyledSunIcon>
          <Switch
            onChange={toggle}
            initialValue={mode === EThemeMode.DARK}
          />
          <StyledMoonIcon>
            <use xlinkHref="#moon" />
          </StyledMoonIcon>
        </SwitchWrapper>
        <StyledLogoutIcon onClick={handleLogout}>
          <use xlinkHref="#logout" />
        </StyledLogoutIcon>
      </StyledContentWrapper>
    </StyledWrapper>
  )
}

export default Header
