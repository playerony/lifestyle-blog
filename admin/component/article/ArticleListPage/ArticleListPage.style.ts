import styled from 'styled-components'

import variable from '@style/variable'
import { respondTo } from '@style/mixin'

export const StyledIcon = styled.svg`
  width: 50px;
  height: 50px;
  position: absolute;
  fill: ${variable.color.white};

  ${respondTo.mediumScreen`
    width: 45px;
    height: 45px;
  `}

  ${respondTo.smallScreen`
    width: 36px;
    height: 36px;
  `}
`
