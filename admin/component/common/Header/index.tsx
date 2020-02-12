import React from 'react'

import Switch from '@component/generic/Switch'

import useTheme from '@hook/utility/useTheme'

import { StyledWrapper, SwitchWrapper } from './Header.style'

const Header = (): JSX.Element => {
  const { toggle } = useTheme()

  return (
    <StyledWrapper>
      <svg>
        <use xlinkHref="#logo" />
      </svg>
      <SwitchWrapper>
        <svg>
          <use xlinkHref="#sun" />
        </svg>
        <Switch onChange={toggle} />
        <svg>
          <use xlinkHref="#moon" />
        </svg>
      </SwitchWrapper>
    </StyledWrapper>
  )
}

export default Header
