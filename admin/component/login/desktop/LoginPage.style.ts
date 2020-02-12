import styled from 'styled-components'

import variable from '@style/variable'
import { flexbox, alignItems, justifyContent } from '@style/mixin'

export const StyledContentWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: ${variable.color.black};
  
  ${flexbox()}
  ${alignItems('center')}
  ${justifyContent('center')}
`
