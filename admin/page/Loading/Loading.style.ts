import styled from 'styled-components'

import { ThemeProps } from '@style/theme'
import { flexbox, justifyContent, alignItems } from '@style/mixin'

export const LoaderWrapper = styled.div`
  width: 100%;
  z-index: 15;
  height: 100vh;
  position: fixed;
  background-color: ${({ theme }: ThemeProps) => theme.color.background};

  ${flexbox()}
  ${alignItems('center')}
  ${justifyContent('center')}
`
