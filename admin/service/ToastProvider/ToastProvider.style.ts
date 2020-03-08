import styled from 'styled-components'

import variable from '@style/variable'
import { respondTo } from '@style/mixin'

export const StyledToastListWrapper = styled.section`
  z-index: 10;
  position: fixed;
  top: ${variable.paddingBig}px;
  right: ${variable.paddingBig}px;

  ${respondTo.mediumScreen`
    top: ${variable.paddingMedium}px;
    right: ${variable.paddingMedium}px;
  `}

  ${respondTo.smallScreen`
    top: ${variable.paddingSmall}px;
    right: ${variable.paddingSmall}px;
  `}

  ${respondTo.mobileScreen`
    top: ${variable.paddingSmall / 2}px;
    right: ${variable.paddingSmall / 2}px;
  `}
`
