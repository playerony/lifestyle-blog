import styled from 'styled-components'

import { borderRadius, transition, linearGradient } from '@style/mixin'
import theme, { ThemeProps } from '@style/theme'

export const StyledWrapper = styled.div`
  margin-top: 5px;
  position: relative;
  padding: ${({ theme }: ThemeProps) => theme.paddingSmall}px;
  background-color: ${({ theme }: ThemeProps) => theme.color.white};
  border: 2px solid ${({ theme }: ThemeProps) => theme.color.gray700};

  ${borderRadius('4px')}
`

export const StyledLabel = styled.p`
  position: absolute;
  top: -12px;
  padding: 3px;
  left: ${({ theme }: ThemeProps) => theme.paddingSmall}px;
  color: ${({ theme }: ThemeProps) => theme.color.gray700};

  ${borderRadius('5px')}
  ${transition('all 0.5s linear')}
  ${linearGradient(
    '180deg',
    `rgba(0, 0, 0, 0) 44%`,
    `${theme.color.white} 0`,
    `${theme.color.white} 100%`
  )}
`
