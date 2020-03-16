import styled from 'styled-components'

import { flexbox, justifyContent, alignItems } from '@style/mixin'

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;

  ${flexbox()}
  ${alignItems('center')}
  ${justifyContent('center')}
`
