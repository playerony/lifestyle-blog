import styled from 'styled-components'

import {
  borderRadius,
  boxShadow,
  transform,
  flexbox,
  alignItems,
  justifyContent
} from '@style/mixin'
import variable from '@style/variable'

export const StyledWrapper = styled.div`
  min-width: 500px;
  position: absolute;
  background-color: ${variable.color.white};
  padding: ${`${variable.paddingBig}px ${variable.paddingMedium}px`};

  ${flexbox()}
  ${alignItems('center')}
  ${justifyContent('center')}

  ${borderRadius('12px')}
  ${transform('translate(-50%, -50%)')}
  ${boxShadow('0 2px 8px 2px rgba(0, 0, 0, 0.16)')}
`
