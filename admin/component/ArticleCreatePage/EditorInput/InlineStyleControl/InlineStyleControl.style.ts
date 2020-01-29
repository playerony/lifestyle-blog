import styled from 'styled-components'

import { ThemeProps } from '@style/theme'
import { flexbox, flexWrap } from '@style/mixin'

export const StyledLabel = styled.h4`
  padding-bottom: 5px;
  padding-top: ${({ theme }: ThemeProps) => theme.paddingSmall}px;
`

export const StyledListWrapper = styled.section`
  ${flexbox()}
  ${flexWrap('wrap')}
`
