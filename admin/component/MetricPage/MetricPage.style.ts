import styled from 'styled-components'

import variable from '@style/variable'
import { ThemeProps } from '@style/theme'
import { boxShadow, borderRadius, respondTo } from '@style/mixin'

export const StyledHeader = styled.h1`
  text-align: center;
`

export const StyledDoughnutChartHeader = styled.h1`
  text-align: center;
  margin: ${variable.paddingBig}px 0;

  ${respondTo.mediumScreen`
    margin: ${variable.paddingMedium}px 0;
  `}

  ${respondTo.smallScreen`
    margin: ${variable.paddingSmall}px 0;
  `}
`

export const StyledChartWrapper = styled.section`
  padding: ${variable.paddingSmall}px;
  margin-top: ${variable.paddingBig}px;
  background-color: ${({ theme }: ThemeProps) => theme.color.card};

  ${borderRadius('4px')}
  ${boxShadow('0 2px 8px 0 rgba(0, 0, 0, 0.16)')}

  ${respondTo.mediumScreen`
    margin-top: ${variable.paddingMedium}px;
  `}

  ${respondTo.smallScreen`
    margin-top: ${variable.paddingSmall}px;
  `}
`

export const StyledArrowIcon = styled.svg`
  width: 32px;
  height: 40px;
  fill: ${variable.color.white};

  ${respondTo.mediumScreen`
    width: 27px;
    height: 30px;
  `}

  ${respondTo.smallScreen`
    width: 20px;
    height: 24px;
  `}
`