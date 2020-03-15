import styled from 'styled-components'

import variable from '@style/variable'
import { respondTo } from '@style/mixin'

export const StyledContainer = styled.div`
  height: 100%;
  margin: 0 auto;
  position: absolute;
  padding: ${variable.paddingBig}px;
  max-width: ${variable.breakpoint.mediumScreen}px;
  width: calc(100% - ${variable.paddingBig * 2}px);

  ${respondTo.mediumScreen`
    padding: ${variable.paddingMedium}px;
    width: calc(100% - ${variable.paddingMedium * 2}px);
  `}

  ${respondTo.smallScreen`
    width: calc(100% - ${variable.paddingSmall * 2}px);
    padding: ${variable.paddingMedium}px ${variable.paddingSmall}px;
  `}

  ${respondTo.mobileScreen`
    padding: ${variable.paddingSmall / 2}px;
    width: calc(100% - ${variable.paddingSmall}px);
  `}
`
