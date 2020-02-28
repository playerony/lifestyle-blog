import styled from 'styled-components'

import variable from '@style/variable'
import { respondTo } from '@style/mixin'

export const StyledContainer = styled.div`
  height: 100%;
  margin: 0 auto;
  position: relative;
  padding: ${variable.paddingBig}px;
  max-width: ${variable.breakpoint.mediumScreen}px;
  width: calc(100% - ${variable.paddingBig * 2}px);

  ${respondTo.mediumScreen`
    padding: ${variable.paddingMedium}px;
    width: calc(100% - ${variable.paddingMedium * 2}px);
  `}

  ${respondTo.smallScreen`
    padding: ${variable.paddingSmall}px;
    width: calc(100% - ${variable.paddingSmall * 2}px);
  `}

  ${respondTo.mobileScreen`
    padding: ${variable.paddingSmall / 2}px;
    width: calc(100% - ${variable.paddingSmall}px);
  `}
`

console.warn(StyledContainer)
