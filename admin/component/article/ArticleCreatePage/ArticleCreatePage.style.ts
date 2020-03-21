import styled from 'styled-components'

import variable from '@style/variable'
import { respondTo } from '@style/mixin'

export const StyledHeader = styled.h1`
  text-align: center;
  padding: ${variable.paddingBig}px 0;

  ${respondTo.mediumScreen`
    padding: ${variable.paddingMedium}px 0;
  `}

  ${respondTo.smallScreen`
    padding: ${variable.paddingSmall}px 0;
  `}

  ${respondTo.mobileScreen`
    padding: ${variable.paddingSmall / 2}px 0;
  `}
`
