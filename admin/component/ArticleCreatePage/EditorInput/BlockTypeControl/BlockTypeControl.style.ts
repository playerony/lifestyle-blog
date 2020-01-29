import styled from 'styled-components'

import { flexbox, flexWrap } from '@style/mixin'

export const StyledLabel = styled.h4`
  padding-bottom: 5px;
`

export const StyledListWrapper = styled.section`
  ${flexbox()}
  ${flexWrap('wrap')}
`
