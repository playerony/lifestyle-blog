import styled from 'styled-components'

import variable from '@style/variable'
import { flexbox, flexWrap } from '@style/mixin'

export const StyledLabel = styled.h4`
  padding-bottom: 5px;
  padding-top: ${variable.paddingSmall}px;
`

export const StyledListWrapper = styled.section`
  ${flexbox()}
  ${flexWrap('wrap')}
`
