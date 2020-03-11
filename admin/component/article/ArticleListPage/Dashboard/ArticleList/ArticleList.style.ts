import styled from 'styled-components'

import variable from '@style/variable'
import { respondTo } from '@style/mixin'

export const StyledLabel = styled.h2`
  margin: ${variable.paddingBig}px 0;

  ${respondTo.mediumScreen`
    margin: ${variable.paddingMedium}px 0;
  `}

  ${respondTo.smallScreen`
    margin: ${variable.paddingSmall}px 0;
  `}

  ${respondTo.mobileScreen`
    margin: ${variable.paddingSmall / 2}px 0;
  `}
`
