import styled from 'styled-components'

import variable from '@style/variable'
import { ThemeProps } from '@style/theme'
import {
  flexbox,
  boxShadow,
  alignItems,
  transition,
  justifyContent
} from '@style/mixin'

export const StyledWrapper = styled.header`
  z-index: 5;
  position: fixed;
  width: calc(100% - ${variable.paddingBig * 2}px);
  padding: ${variable.paddingSmall}px ${variable.paddingBig}px;
  background-color: ${({ theme }: ThemeProps) => theme.color.card};

  ${flexbox()}
  ${justifyContent('space-between')}
  ${transition('background-color 500ms linear')}
  ${boxShadow('0 2px 4px 0 rgba(192, 192, 192, 0.5)')}
`

export const SwitchWrapper = styled.div`
  ${flexbox()}
  ${alignItems('center')}

  > svg {
    ${transition('fill 500ms linear')}
    fill: ${({ theme }: ThemeProps) => theme.color.icon};
  }
`

export const StyledLogoIcon = styled.svg`
  width: 40px;
  height: 60px;
`

export const StyledSunIcon = styled.svg`
  width: 30px;
  height: 30px;
  margin-top: 1px;
  padding-right: 7px;
`

export const StyledMoonIcon = styled.svg`
  width: 35px;
  height: 35px;
  padding-left: 3px;
`