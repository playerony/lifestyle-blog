import styled from 'styled-components'

import { flexWrap, flexbox } from '@style/mixin'

export const StyledWrapper = styled.div`
  ${flexbox()}
  ${flexWrap('nowrap')}
`
