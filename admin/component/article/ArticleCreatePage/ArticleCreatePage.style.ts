import styled from 'styled-components'

import variable from '@style/variable'
import { respondTo } from '@style/mixin'

export const StyledHeader = styled.h1`
  text-align: center;
  padding-bottom: ${variable.paddingBig}px;

  ${respondTo.mediumScreen`
    padding-bottom: ${variable.paddingMedium}px;
  `}

  ${respondTo.smallScreen`
    padding-bottom: ${variable.paddingSmall}px;
  `}
`
