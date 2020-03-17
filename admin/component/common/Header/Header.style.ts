import styled from 'styled-components'

import {
  flexbox,
  respondTo,
  boxShadow,
  alignItems,
  transition,
  justifyContent
} from '@style/mixin'
import variable from '@style/variable'
import { ThemeProps } from '@style/theme'

export const StyledWrapper = styled.header`
  width: 100%;
  z-index: 10;
  position: fixed;
  min-height: 100px;
  background-color: ${({ theme }: ThemeProps) => theme.color.card};

  ${flexbox()}
  ${justifyContent('center')}
  ${transition('background-color 500ms linear')}
  ${boxShadow('0 2px 4px 0 rgba(192, 192, 192, 0.5)')}
`

interface IStyledContentWrapperProps {
  isAuthenticated: boolean
}

export const StyledContentWrapper = styled.div<IStyledContentWrapperProps>`
  max-width: ${variable.breakpoint.mediumScreen}px;
  width: calc(100% - ${variable.paddingBig * 2}px);
  padding: ${variable.paddingSmall}px ${variable.paddingBig}px;

  ${flexbox()}
  ${alignItems('center')}
  ${({ isAuthenticated }: IStyledContentWrapperProps) =>
    justifyContent(isAuthenticated ? 'space-between' : 'center')}

  ${respondTo.mediumScreen`
    width: calc(100% - ${variable.paddingMedium * 2}px);
    padding: ${variable.paddingSmall}px ${variable.paddingMedium}px;
  `}

  ${respondTo.smallScreen`
    width: calc(100% - ${variable.paddingSmall * 2}px);
    padding: ${variable.paddingSmall}px ${variable.paddingSmall}px;
  `}

  ${respondTo.mobileScreen`
    padding: ${variable.paddingSmall / 2}px;
    width: calc(100% - ${variable.paddingSmall}px);
  `}
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
  cursor: pointer;
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

export const StyledLogoutIcon = styled.svg`
  width: 30px;
  height: 40px;
  cursor: pointer;
  fill: ${({ theme }: ThemeProps) => theme.color.icon};

  ${transition('fill 500ms linear')}
`
