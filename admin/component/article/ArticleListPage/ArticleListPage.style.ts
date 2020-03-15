import styled from 'styled-components'

import variable from '@style/variable'
import { respondTo } from '@style/mixin'

export const StyledIcon = styled.svg`
  width: 32px;
  height: 32px;
  position: absolute;
  fill: ${variable.color.white};

  ${respondTo.mediumScreen`
    width: 27px;
    height: 27px;
  `}

  ${respondTo.smallScreen`
    width: 20px;
    height: 20px;
  `}
`
