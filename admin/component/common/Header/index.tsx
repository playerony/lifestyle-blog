import React from 'react'
import { useHistory } from 'react-router-dom'

import Switch from '@component/generic/Switch'

import EThemeMode from '@type/common/EThemeMode'

import useTheme from '@hook/context/useTheme'

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

  const isAuthenticated = (): boolean =>
    Boolean(Memory.get(AUTH_TOKEN))

  const handleLogoClick = (): void => {
    if (history.location.pathname !== routeList.article.list) {
      history.push(routeList.base)
    }
  }

  const handleLogout = (): void => {
    Memory.remove(AUTH_TOKEN)
    history.push(routeList.base)
  }

  return (
    <StyledWrapper>
      <StyledContentWrapper isAuthenticated={isAuthenticated()}>
        {isAuthenticated() && (
          <StyledLogoIcon onClick={handleLogoClick}>
            <use xlinkHref="#logo" />
          </StyledLogoIcon>
        )}
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
        {isAuthenticated() && (
          <StyledLogoutIcon onClick={handleLogout}>
            <use xlinkHref="#logout" />
          </StyledLogoutIcon>
        )}
      </StyledContentWrapper>
    </StyledWrapper>
  )
}

export default Header
