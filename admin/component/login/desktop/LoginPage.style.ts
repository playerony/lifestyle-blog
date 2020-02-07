import styled from 'styled-components'

import { ThemeProps } from '@style/theme'
import { flexbox, alignItems, justifyContent } from '@style/mixin'

export const StyledContentWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: ${({ theme }: ThemeProps) => theme.color.black};
  
  ${flexbox()}
  ${alignItems('center')}
  ${justifyContent('center')}
`
