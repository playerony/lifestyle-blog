import styled from 'styled-components'

import variable from '@style/variable'
import { respondTo } from '@style/mixin'

export const StyledContainer = styled.div`
  margin: 0 auto;
  position: absolute;
  max-width: ${variable.breakpoint.mediumScreen}px;
  width: calc(100% - ${variable.paddingBig * 2}px);
  padding: 100px ${variable.paddingBig}px ${variable.paddingBig}px;

  ${respondTo.mediumScreen`
    width: calc(100% - ${variable.paddingMedium * 2}px);
    padding: 100px ${variable.paddingMedium}px ${variable.paddingMedium}px;
  `}

  ${respondTo.smallScreen`
    width: calc(100% - ${variable.paddingSmall * 2}px);
    padding: 100px ${variable.paddingSmall}px ${variable.paddingSmall}px;
  `}

  ${respondTo.mobileScreen`
    width: calc(100% - ${variable.paddingSmall}px);
    padding: 80px ${variable.paddingSmall / 2}px ${variable.paddingSmall / 2}px;
  `}
`
