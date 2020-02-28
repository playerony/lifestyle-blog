import styled from 'styled-components'

import variable from '@style/variable'
import { ThemeProps } from '@style/theme'
import { borderRadius } from '@style/mixin'

export const StyledHeader = styled.h1`
  text-align: center;
`

export const StyledChartWrapper = styled.section`
  padding: ${variable.paddingSmall}px;
  margin-top: ${variable.paddingBig}px;
  background-color: ${({ theme }: ThemeProps) => theme.color.card};

  ${borderRadius('4px')}
`
