import styled from 'styled-components'

import {
  flexbox,
  alignItems,
  justifyContent,
  flexDirection
} from '@style/mixin'
import { ThemeProps } from '@style/theme'

export const StyledContentWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  
  ${flexbox()}
  ${alignItems('center')}
  ${flexDirection('column')}
  ${justifyContent('space-evenly')}
`

export const StyledForm = styled.form`
  width: calc(
    100% - ${({ theme }: ThemeProps<{}>) => theme.paddingMedium * 2}px
  );
`
