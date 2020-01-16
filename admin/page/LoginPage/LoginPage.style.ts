import styled from 'styled-components'

import {
  linearGradient,
  flexbox,
  justifyContent,
  alignItems
} from '@style/mixin'
import theme from '@style/theme'

export const StyledContentWrapper = styled.div`
  width: 100%;
  height: 100vh;
  ${flexbox()}
  ${alignItems('center')}
  ${justifyContent('center')}
  ${linearGradient(
    '124deg',
    `${theme.color.purple500} 1%`,
    `${theme.color.blue500} 100%`
  )}
`
