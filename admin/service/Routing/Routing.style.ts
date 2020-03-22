import styled from 'styled-components'

import { flexbox, justifyContent } from '@style/mixin'

export const StyledAppWrapper = styled.div`
  position: relative;

  ${flexbox()}
  ${justifyContent('center')}
`
