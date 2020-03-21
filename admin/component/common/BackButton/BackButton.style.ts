import styled from 'styled-components'

import variable from '@style/variable'
import { respondTo } from '@style/mixin'

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
